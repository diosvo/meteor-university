import { check } from "meteor/check";
import { Meteor } from "meteor/meteor";
import TransactionsCollection from "./TransactionsCollection";

Meteor.methods({
  "transactions.insert"({
    isTransfer,
    sourceWalletId,
    targetWalletId,
    amount,
  }) {
    check(isTransfer, Boolean);
    check(sourceWalletId, String);
    check(targetWalletId, String);
    check(amount, Number);

    if (!sourceWalletId) {
      throw new Meteor.Error("Source wallet is required");
    }
    if (!amount || amount <= 0) {
      throw new Meteor.Error("Amount is required (must be greater than 0)");
    }

    return TransactionsCollection.insert({
      type: isTransfer ? "transfer" : "add",
      source: sourceWalletId,
      target: isTransfer ? targetWalletId : null,
      amount,
      createdAt: new Date(),
    });
  },
});
