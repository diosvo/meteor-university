import { Mongo } from "meteor/mongo";
import WalletSchema from "../schemas/WalletSchema";

export default WalletsCollection = new Mongo.Collection("wallets");

WalletsCollection.attachSchema(WalletSchema);
