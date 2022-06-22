import Snackbar from "@mui/material/Snackbar";
import MessageEnum from "../utils/MessageModel";
import BannerMessage from "./BannerMessage";

export default AlertMessage = ({
  open,
  setOpen,
  message,
  severity = MessageEnum.SUCCESS,
}) => {
  if (!message) {
    return null;
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={() => setOpen(false)}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <BannerMessage
        message={message}
        severity={severity}
        sx={{ backgroundColor: "background.paper" }}
      />
    </Snackbar>
  );
};
