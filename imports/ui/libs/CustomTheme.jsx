import { createTheme } from "@material-ui/core/styles";

const CapitalizeButton = createTheme({
  typography: {
    button: {
      textTransform: "capitalize",
    },
  },
});

export { CapitalizeButton };
