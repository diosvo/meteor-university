import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import { Meteor } from "meteor/meteor";
import { useFind, useSubscribe } from "meteor/react-meteor-data";
import { memo } from "react";
import ContactsCollection from "../api/ContactsCollection";

export default ContactList = () => {
  const isLoading = useSubscribe("contacts");

  const contacts = useFind(() =>
    ContactsCollection.find({}, { sort: { createdAt: -1 } })
  );

  if (isLoading()) {
    return <LinearProgress />;
  }

  const ContactItem = memo(({ contact }) => {
    return (
      <li>
        {contact.name} - {contact.email}
        <Button
          size="small"
          variant="text"
          color="inherit"
          onClick={(event) =>
            Meteor.call("contacts.remove", { event, contactId: contact._id })
          }
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
        <Button
          variant="text"
          onClick={() => Meteor.call("contacts.deleteAll")}
        >
          Delete All
        </Button>
      </Stack>

      {contacts.map((contact) => (
        <ContactItem key={contact._id} contact={contact} />
      ))}
    </div>
  );
};
