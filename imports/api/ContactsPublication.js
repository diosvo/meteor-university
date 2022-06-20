import { Meteor } from "meteor/meteor";
import ContactsCollection from "./ContactsCollection";

Meteor.publish("contacts", function publish() {
  return ContactsCollection.find(); // live query
});
