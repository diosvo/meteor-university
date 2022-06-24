import { check } from "meteor/check";
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
    check(contactId, String);
    return ContactsCollection.update(
      { _id: contactId },
      { $set: { archived: true } }
    );
  },
  "contacts.remove"(contactId) {
    check(contactId, String);
    return ContactsCollection.remove(contactId);
  },
  "contacts.deleteAll"() {
    return ContactsCollection.remove({});
  },
});
