import { useTracker } from "meteor/react-meteor-data";
import { ContactsCollection } from "../api/ContactsCollection";

export const ContactList = () => {
  const contacts = useTracker(() => {
    return ContactsCollection.find({}).fetch(); // web socket + DDP = tracker
  });

  return (
    <div>
      <h2>Contact List</h2>
      {contacts.map((contact, index) => (
        <li key={contact.email}>
          {index + 1}. {contact.name} - {contact.email}
        </li>
      ))}
    </div>
  );
};
