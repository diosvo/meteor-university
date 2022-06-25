import { red } from "@mui/material/colors";
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
      <DialogContent sx={{ pb: 0 }}>
        {errorMessage && (
          <DialogContentText
            sx={{ color: red[500], fontSize: 14, mb: 1 }}
            id="alert-dialog-description"
          >
            {errorMessage}
          </DialogContentText>
        )}
        {body}
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>{actions}</DialogActions>
    </Dialog>
  )
);

export default AlertDialog;
