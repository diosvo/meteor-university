import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import { Meteor } from "meteor/meteor";
import { useFind, useSubscribe } from "meteor/react-meteor-data";
import ContactsCollection from "../api/contacts/ContactsCollection";

export default ContactList = () => {
  const isLoading = useSubscribe("contacts");

  const contacts = useFind(
    () =>
      ContactsCollection.find(
        { archived: { $ne: true } },
        { sort: { createdAt: -1 } }
      ),
    []
  );

  const archive = (event, contactId) => {
    event.preventDefault();
    Meteor.call("contacts.archive", contactId);
  };

  const remove = (event, contactId) => {
    event.preventDefault();
    Meteor.call("contacts.remove", contactId);
  };

  const deleteAll = () => Meteor.call("contacts.deleteAll");

  if (isLoading()) {
    return <LinearProgress />;
  }

  const ContactItem = React.memo(({ contact }) => {
    return (
      <li>
        {contact.name} - {contact.email}
        <Button
          size="small"
          variant="text"
          color="inherit"
          onClick={(event) => archive(event, contact._id)}
        >
          Archive
        </Button>
        <Button
          size="small"
          variant="text"
          color="inherit"
          onClick={(event) => remove(event, contact._id)}
        >
          Remove
        </Button>
      </li>
    );
  });

  return (
    <div>
      <h2>Contact List</h2>
      <Stack spacing={2} direction="row">
        <Button variant="text" onClick={() => deleteAll()}>
          Delete All
        </Button>
      </Stack>

      {contacts.map((contact) => (
        <ContactItem key={contact._id} contact={contact} />
      ))}
    </div>
  );
};
