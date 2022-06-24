import { createTheme } from "@material-ui/core/styles";

const CapitalizeButton = createTheme({
  typography: {
    button: {
      textTransform: "capitalize",
    },
  },
});

const DefaultColors = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#4F46E5",
    },
  },
});

export { CapitalizeButton, DefaultColors };
