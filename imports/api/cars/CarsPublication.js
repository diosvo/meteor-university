import { Meteor } from "meteor/meteor";
import CarsCollection from "./CarsCollection";

Meteor.publish("cars", function publications() {
  return CarsCollection.find();
});
