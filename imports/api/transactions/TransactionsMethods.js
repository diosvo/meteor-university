import { Meteor } from "meteor/meteor";
import TransactionSchema from "../../ui/schemas/TransactionSchema";
import TransactionsCollection from "./TransactionsCollection";

Meteor.methods({
  "transactions.insert"(args) {
    const schema = TransactionSchema(args);
    // https://github.com/longshotlabs/simpl-schema#cleaning-objects
    const cleanArgs = schema.clean(args);
    schema.validate(cleanArgs);

    const { isTransfer, sourceWalletId, targetWalletId, amount } = args;
    return TransactionsCollection.insert({
      type: isTransfer ? "transfer" : "add",
      source: sourceWalletId,
      target: isTransfer ? targetWalletId : null,
      amount,
      createdAt: new Date(),
    });
  },
});
