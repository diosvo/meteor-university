import { Mongo } from "meteor/mongo";
import { TransactionSchema } from "../schemas/TransactionSchema";

export default TransactionsCollection = new Mongo.Collection("transactions");

TransactionsCollection.attachSchema(TransactionSchema);
