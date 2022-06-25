import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { grey, red } from "@mui/material/colors";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

import { useFind, useSubscribe } from "meteor/react-meteor-data";
import { useState } from "react";

import ContactsCollection from "../../../api/contacts/ContactsCollection";
import WalletsCollection from "../../../api/wallets/WalletsCollection";
import AlertDialog from "../../libs/AlertDialog";
import LoadingProgress from "../../libs/LoadingProgress";
import ContactSelect from "../contacts/ContactSelect";

export default Wallets = () => {
  const isLoadingContacts = useSubscribe("contacts");
  const isLoadingWallet = useSubscribe("wallets");

  const contacts = useFind(
    () =>
      ContactsCollection.find(
        { archived: { $ne: true } },
        { sort: { createdAt: -1 } }
      ),
    []
  );
  const [wallet] = useFind(() => WalletsCollection.find());

  const [open, setOpen] = useState(false);
  const [isTransfer, setIsTransfer] = useState(false);
  const [amount, setAmount] = useState(0);
  const [targetWallet, setTargetWallet] = useState({});
  const [error, setError] = useState("");

  const addTransaction = () => {
    Meteor.call(
      "transactions.insert",
      {
        isTransfer,
        sourceWalletId: wallet._id,
        targetWalletId: targetWallet?.walletId || "",
        amount: Number(amount),
      },
      (errorResponse) => {
        if (errorResponse) {
          if (errorResponse.error) {
            setError(errorResponse.message);
          } else {
            errorResponse?.details.forEach((error) => {
              setError(error.message);
            });
          }
        } else {
          setOpen(false);
          setTargetWallet({});
          setAmount(0);
          setError("");
        }
      }
    );
  };

  if (isLoadingContacts() || isLoadingWallet()) {
    return <LoadingProgress />;
  }

  return (
    <>
      <Box
        component="div"
        variant="outlined"
        sx={{
          p: 2,
          boxShadow: 1,
          borderRadius: 2,
          border: "1px solid" + grey[300],
        }}
      >
        <Box sx={{ color: grey[700], typography: "body2" }}>
          <div style={{ marginBottom: "0.5rem" }}>Main account</div>
          <div>Wallet ID:</div>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <h2>{wallet._id}</h2>
          <h2>
            <span style={{ color: red[500], marginRight: "0.5rem" }}>
              {wallet.balance}
            </span>
            {wallet.currency}
          </h2>
        </Box>
        <Box sx={{ "& button": { mr: 1 } }}>
          <Button
            variant="contained"
            onClick={() => {
              setIsTransfer(false);
              setError("");
              setOpen(true);
            }}
          >
            Add
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              setIsTransfer(true);
              setError("");
              setOpen(true);
            }}
          >
            Transfer
          </Button>
        </Box>
      </Box>

      {/* Actions */}
      <AlertDialog
        open={open}
        setOpen={setOpen}
        title={
          isTransfer
            ? "Transfer money to other wallet"
            : "Add money to your wallet"
        }
        body={
          <Box width={"400px"} py={1}>
            {isTransfer && (
              <ContactSelect
                contacts={contacts}
                contact={targetWallet}
                setContact={setTargetWallet}
              />
            )}

            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="amount">Amount</InputLabel>
              <OutlinedInput
                min={0}
                id="amount"
                value={amount}
                label="Amount"
                placeholder="0.00"
                onChange={(event) => setAmount(event.target.value)}
              />
            </FormControl>
          </Box>
        }
        actions={
          <Button variant="outlined" onClick={addTransaction}>
            {isTransfer ? "Transfer" : "Add"}
          </Button>
        }
        errorMessage={error}
      />
    </>
  );
};
