import SimpleSchema from "simpl-schema";

/* const CurrencySchema = new SimpleSchema({
  balance: {
    type: Number,
    min: 0,
    defaultValue: 0,
  },
  currency: {
    type: String,
    allowedValues: ["USD", "EUR"],
    defaultValue: "USD",
  },
});

const  WalletSchemaDemo = new SimpleSchema({
  currencies: {
    type: Array,
  },
  "currencies.$": CurrencySchema,
  createdAt: {
    type: Date,
  },
}); */

export default WalletSchema = new SimpleSchema({
  balance: {
    type: Number,
    min: 0,
    defaultValue: 0,
  },
  currency: {
    type: String,
    allowedValues: ["USD", "EUR"],
    defaultValue: "USD",
  },
  createdAt: {
    type: Date,
  },
});
