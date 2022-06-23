import Button from "@mui/material/Button";
import { Meteor } from "meteor/meteor";
import { useFind } from "meteor/react-meteor-data";
import { useState } from "react";
import ContactsCollection from "../../../api/contacts/ContactsCollection";
import AlertDialog from "../../libs/AlertDialog";
import ContactSelect from "../contacts/ContactSelect";

export default Wallets = () => {
  const [open, setOpen] = useState(false);
  const [isTransfer, setIsTransfer] = useState(false);
  const [amount, setAmount] = useState(0);
  const [targetWallet, setTargetWallet] = useState({});
  const [error, setError] = useState("");

  const contacts = useFind(
    () =>
      ContactsCollection.find(
        { archived: { $ne: true } },
        { sort: { createdAt: -1 } }
      ),
    []
  );

  const wallet = {
    _id: "1111",
    balance: 5,
    currency: "USD",
  };

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
          setError(errorResponse.error);
        } else {
          setOpen(false);
          setTargetWallet({});
          setAmount(0);
          setError("");
        }
      }
    );
  };

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
