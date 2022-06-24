import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import { DefaultColors } from "../ui/libs/CustomTheme";
import Header from "./Header";
import ContactForm from "./modules/contacts/ContactForm";
import ContactList from "./modules/contacts/ContactList";
import Wallets from "./modules/wallets/Wallets";

export const App = () => {
  return (
    <ThemeProvider theme={DefaultColors}>
      <Header />
      <Box
        component="div"
        sx={{
          m: 2,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box sx={{ minWidth: "100%" }}>
          <Wallets />
          <ContactForm />
          <ContactList />
        </Box>
      </Box>
    </ThemeProvider>
  );
};
