import SimpleSchema from "simpl-schema";

const TRANSFER_TYPE = "TRANSFER";
const ADD_TYPE = "ADD";

const TransactionSchema = new SimpleSchema({
  type: {
    type: String,
    allowedValues: [TRANSFER_TYPE, ADD_TYPE],
  },
  source: {
    type: String,
  },
  target: {
    type: String,
    optional: true,
  },
  amount: {
    type: Number,
    min: 1,
  },
  createdAt: {
    type: Date,
  },
});

export { TRANSFER_TYPE, ADD_TYPE, TransactionSchema };
