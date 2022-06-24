import { Meteor } from "meteor/meteor";
import "../imports/api/contacts/index";
import "../imports/api/transactions/index";
import "../imports/api/wallets/index";
import WalletsCollection from "../imports/api/wallets/WalletsCollection";
import "./error";

Meteor.startup(() => {
  if (!WalletsCollection.find().count()) {
    WalletsCollection.insert({
      createdAt: new Date(),
    });
  }
});
