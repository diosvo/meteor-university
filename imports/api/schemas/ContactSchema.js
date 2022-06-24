import SimpleSchema from "simpl-schema";

export default ContactSchema = new SimpleSchema({
  name: {
    type: String,
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
  },
  imageUrl: {
    type: String,
    optional: true,
  },
  walletId: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  archived: {
    type: Boolean,
    optional: true,
  },
});
