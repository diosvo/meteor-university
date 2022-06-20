import { Meteor } from "meteor/meteor";
import ContactsCollection from "./ContactsCollection";

Meteor.publish("contacts", function publications() {
  return ContactsCollection.find({ archived: { $ne: true } }); // live query
});
