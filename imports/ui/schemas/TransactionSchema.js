import SimpleSchema from "simpl-schema";

export default TransactionSchema = (args) =>
  new SimpleSchema({
    isTransfer: {
      type: Boolean,
    },
    sourceWalletId: {
      type: String,
    },
    targetWalletId: {
      type: String,
      optional: !args.isTransfer,
    },
    amount: {
      type: Number,
      min: 1,
    },
  });
