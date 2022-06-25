import { Mongo } from "meteor/mongo";
import {
  ADD_TYPE,
  TransactionSchema,
  TRANSFER_TYPE,
} from "../schemas/TransactionSchema";
import WalletsCollection from "../wallets/WalletsCollection";

class TransactionsMongoCollection extends Mongo.Collection {
  insert(transaction, callback) {
    if (transaction.type === TRANSFER_TYPE) {
      const sourceWallet = WalletsCollection.findOne(transaction.source);

      if (!sourceWallet) {
        throw new Meteor.Error("Source wallet not found.");
      }
      if (!transaction.target) {
        throw new Meteor.Error("Target wallet is required.");
      }
      if (sourceWallet.balance < transaction.amount) {
        throw new Meteor.Error("Insufficient funds.");
      }

      WalletsCollection.update(transaction.source, {
        $inc: { balance: -transaction.amount },
      });
      WalletsCollection.update(transaction.target, {
        $inc: { balance: transaction.amount },
      });
    }
    if (transaction.type === ADD_TYPE) {
      const sourceWallet = WalletsCollection.findOne(transaction.source);
      if (!sourceWallet) {
        throw new Meteor.Error("Source wallet not found.");
      }
      WalletsCollection.update(transaction.source, {
        $inc: { balance: transaction.amount },
      });
    }

    return super.insert(transaction, callback);
  }
}

export default TransactionsCollection = new TransactionsMongoCollection(
  "transactions"
);

TransactionsCollection.attachSchema(TransactionSchema);
