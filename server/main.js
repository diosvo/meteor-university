import { Meteor } from "meteor/meteor";
import "../imports/api/contacts/index";
import "../imports/api/transactions/index";
import "../imports/api/wallets/index";
import WalletsCollection from "../imports/api/wallets/WalletsCollection";

Meteor.startup(() => {
  if (!WalletsCollection.find().count()) {
    WalletsCollection.insert({
      balance: 0,
      currency: "USD",
      createdAt: new Date(),
    });
  }
});
