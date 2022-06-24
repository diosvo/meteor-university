import { Meteor } from "meteor/meteor";
import ContactsCollection from "./ContactsCollection";

Meteor.methods({
  "contacts.insert"(args) {
    return ContactsCollection.insert({
      ...args,
      createdAt: new Date(),
    });
  },
  "contacts.archive"(contactId) {
    return ContactsCollection.update(
      { _id: contactId },
      { $set: { archived: true } }
    );
  },
  "contacts.remove"(contactId) {
    return ContactsCollection.remove(contactId);
  },
  "contacts.deleteAll"() {
    return ContactsCollection.remove({});
  },
});
