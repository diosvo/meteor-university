import ContactForm from "./modules/contacts/ContactForm";
import ContactList from "./modules/contacts/ContactList";
import Wallets from "./modules/wallets/Wallets";

import Header from "./Header";

export const App = () => (
  <>
    <Header />
    <Wallets />
    <ContactForm />
    <ContactList />
  </>
);
