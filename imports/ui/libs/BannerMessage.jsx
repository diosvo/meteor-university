import Alert from "@mui/material/Alert";
import { grey } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import MessageEnum from "../utils/MessageModel";

export default BannerMessage = ({ message, severity = MessageEnum.ERROR }) => {
  return (
    <Stack sx={{ width: "100%" }}>
      <Alert variant="outlined" severity={severity} color={severity}>
        <span style={{ color: grey[800] }}> {message}</span>
      </Alert>
    </Stack>
  );
};
