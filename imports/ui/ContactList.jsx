import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import ContactsCollection from "../api/ContactsCollection";

export default ContactList = () => {
  const contacts = useTracker(() => {
    return ContactsCollection.find({}, { sort: { createdAt: -1 } }).fetch(); // web socket + DDP = tracker
  });

  return (
    <div>
      <h2>Contact List</h2>
      <Stack spacing={2} direction="row">
        <Button
          variant="text"
          onClick={() => Meteor.call("contacts.deleteAll")}
        >
          Delete All
        </Button>
      </Stack>

      {contacts.map((contact, index) => (
        <li key={contact.email}>
          {index + 1}. {contact.name} - {contact.email}
        </li>
      ))}
    </div>
  );
};
