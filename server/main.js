import { Meteor } from "meteor/meteor";
import "../imports/api/contacts/index";
import "../imports/api/transactions/index";
import "../imports/api/wallets/index";
import WalletsCollection from "../imports/api/wallets/WalletsCollection";
import WalletSchema from "../imports/ui/schemas/WalletSchema";
import "./error";

Meteor.startup(() => {
  if (!WalletsCollection.find().count()) {
    const wallet = [
      {
        createdAt: new Date(),
      },
    ];
    const value = WalletSchema.clean(wallet);
    WalletSchema.validate(value);
    WalletsCollection.insert(value);
  }
});
