import Button from "@mui/material/Button";
import { Meteor } from "meteor/meteor";
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
      <div style={{ backgroundColor: "lightgray" }}>
        <div>wallet id: {wallet._id}</div>
        <div>
          balance: {wallet.balance} {wallet.currency}
        </div>
        <Button
          size="small"
          variant="text"
          color="inherit"
          onClick={() => {
            setIsTransfer(false);
            setError("");
            setOpen(true);
          }}
        >
          Add
        </Button>
        <Button
          size="small"
          variant="text"
          color="inherit"
          onClick={() => {
            setIsTransfer(true);
            setError("");
            setOpen(true);
          }}
        >
          Transfer
        </Button>
      </div>

      <AlertDialog
        open={open}
        setOpen={setOpen}
        title={
          isTransfer
            ? "Transfer money to other wallet"
            : "Add money to your wallet"
        }
        body={
          <>
            {isTransfer && (
              <ContactSelect
                contacts={contacts}
                contact={targetWallet}
                setContact={setTargetWallet}
              />
            )}

            <div>
              <label htmlFor="amount">Amount</label>
              <input
                id="amount"
                type="number"
                min={0}
                value={amount}
                placeholder="0.00"
                onChange={(event) => setAmount(event.target.value)}
              />
            </div>
          </>
        }
        actions={
          <button onClick={addTransaction}>
            {isTransfer ? "Transfer" : "Add"}
          </button>
        }
        errorMessage={error}
      />
    </>
  );
};
