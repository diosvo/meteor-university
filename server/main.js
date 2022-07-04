import { Meteor } from "meteor/meteor";
import "../imports/api/cars/index";
import "../imports/api/contacts/index";
import "../imports/api/transactions/index";
import "../imports/api/wallets/index";
import WalletsCollection from "../imports/api/wallets/WalletsCollection";
import "./error";
import { connect } from "./redis";

Meteor.startup(async () => {
  await connect();

  if (!WalletsCollection.find().count()) {
    WalletsCollection.insert({
      createdAt: new Date(),
    });
  }
});
