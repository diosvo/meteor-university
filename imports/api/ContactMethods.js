import { check } from "meteor/check";
import { Meteor } from "meteor/meteor";
import ContactsCollection from "./ContactsCollection";

Meteor.methods({
  "contacts.insert"({ name, email, imageUrl }) {
    check(name, String);
    check(email, String);
    check(imageUrl, String);
    if (!name) {
      throw new Meteor.Error("Name is required");
    }
    return ContactsCollection.insert({
      name,
      email,
      imageUrl,
      createdAt: new Date(),
    });
  },
  "contacts.remove"({ event, contactId }) {
    event.preventDefault();
    return ContactsCollection.remove(contactId);
  },
  "contacts.deleteAll"() {
    return ContactsCollection.remove({});
  },
});
