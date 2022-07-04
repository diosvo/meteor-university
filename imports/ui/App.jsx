import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import ContactForm from "./modules/contacts/ContactForm";
import ContactList from "./modules/contacts/ContactList";
import Wallets from "./modules/wallets/Wallets";

export default App = () => {
  return (
    <>
      <Container maxWidth="md">
        <Box sx={{ my: 3 }}>
          <Wallets />
          <ContactForm />
          <ContactList />
        </Box>
      </Container>
    </>
  );
};
