import Alert from "@mui/material/Alert";
import { forwardRef } from "react";

const BannerMessage = forwardRef((props, ref) => (
  <Alert
    ref={ref}
    {...props}
    elevation={6}
    variant="outlined"
    color={props.severity}
    severity={props.severity}
  >
    {props.message}
  </Alert>
));

export default BannerMessage;
