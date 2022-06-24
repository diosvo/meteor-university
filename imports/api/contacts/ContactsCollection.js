import { Mongo } from "meteor/mongo";
import ContactSchema from "../schemas/ContactSchema";

export default ContactsCollection = new Mongo.Collection("contacts");

ContactsCollection.attachSchema(ContactSchema);
