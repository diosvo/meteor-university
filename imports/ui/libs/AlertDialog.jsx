import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { forwardRef } from "react";

const AlertDialog = forwardRef(
  ({ open, setOpen, title, body, actions, errorMessage }, ref) => (
    <Dialog
      ref={ref}
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {errorMessage && <h3>{errorMessage}</h3>}
          {body}
        </DialogContentText>
      </DialogContent>
      <DialogActions>{actions}</DialogActions>
    </Dialog>
  )
);

export default AlertDialog;
