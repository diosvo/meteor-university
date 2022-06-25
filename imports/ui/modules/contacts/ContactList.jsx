import { useFind, useSubscribe } from "meteor/react-meteor-data";

import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import ContactsCollection from "../../../api/contacts/ContactsCollection";
import LoadingProgress from "../../libs/LoadingProgress";

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
    return <LoadingProgress />;
  }

  const ContactItem = React.memo(({ contact }) => {
    return (
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt={contact.name} src={contact.imageUrl} />
          </ListItemAvatar>
          <ListItemText primary={contact.name} secondary={contact.email} />

          {/* Actions */}

          <Tooltip title="Archive">
            <IconButton
              size="medium"
              aria-label="archive"
              onClick={(event) => archive(event, contact._id)}
            >
              <ArchiveIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Remove">
            <IconButton
              color="error"
              size="medium"
              aria-label="delete"
              onClick={(event) => remove(event, contact._id)}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    );
  });

  return (
    <>
      <Typography variant="overline" display="block" gutterBottom>
        Contact List
      </Typography>

      <Divider component="div" />

      {contacts.length < 1 && (
        <Typography my={2} fontSize={14} variant="body2">
          No contacts found.
        </Typography>
      )}

      {contacts.map((contact, index) => (
        <ContactItem key={contact._id} contact={contact} />
      ))}
    </>
  );
};
