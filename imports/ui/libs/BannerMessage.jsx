import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import MessageEnum from "../utils/MessageModel";

export default BannerMessage = ({ message, severity = MessageEnum.ERROR }) => {
  return (
    <Stack sx={{ width: "100%" }}>
      <Alert severity={severity}>{message}</Alert>
    </Stack>
  );
};
