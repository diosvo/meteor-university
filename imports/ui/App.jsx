import { ThemeProvider } from "@mui/material/styles";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Header from "./Header";
import { CapitalizeButton } from "./libs/CustomTheme";

export const App = () => (
  <ThemeProvider theme={CapitalizeButton}>
    <Header />
    <ContactForm />
    <ContactList />
  </ThemeProvider>
);
