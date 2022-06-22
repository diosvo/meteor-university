import Button from "@mui/material/Button";
import { useState } from "react";
import AlertDialog from "../../libs/AlertDialog";

export default Wallets = () => {
  const [open, setOpen] = useState(false);
  const [isTransfer, setIsTransfer] = useState(false);
  const [amount, setAmount] = useState(0);
  const [destinationWallet, setDestinationWallet] = useState("");
  const [error, setError] = useState("");

  const wallet = {
    _id: "1111",
    balance: 5,
    currency: "USD",
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
              <div>
                <label htmlFor="destination">Destination</label>
                <input
                  id="destination"
                  type="string"
                  value={destinationWallet}
                  placeholder="0.00"
                  onChange={(event) => setDestinationWallet(event.target.value)}
                />
              </div>
            )}

            <div>
              <label htmlFor="amount">Amount</label>
              <input
                id="amount"
                type="number"
                value={amount}
                placeholder="0.00"
                onChange={(event) => setAmount(event.target.value)}
              />
            </div>
          </>
        }
        actions={
          <button
            onClick={() => {
              console.log(amount, destinationWallet);
            }}
          >
            {isTransfer ? "Transfer" : "Add"}
          </button>
        }
        errorMessage={error}
      />
    </>
  );
};
