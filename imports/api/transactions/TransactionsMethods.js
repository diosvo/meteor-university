import { Meteor } from "meteor/meteor";
import { ADD_TYPE, TRANSFER_TYPE } from "../schemas/TransactionSchema";
import TransactionsCollection from "./TransactionsCollection";

Meteor.methods({
  "transactions.insert"(args) {
    const { isTransfer, sourceWalletId, targetWalletId, amount } = args;
    return TransactionsCollection.insert({
      type: isTransfer ? TRANSFER_TYPE : ADD_TYPE,
      source: sourceWalletId,
      target: isTransfer ? targetWalletId : null,
      amount,
      createdAt: new Date(),
    });
  },
});
