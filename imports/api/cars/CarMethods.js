import { Meteor } from "meteor/meteor";
import { client } from "../../../server/redis";
import CarSchema from "../schemas/CarSchema";
import CarsCollection from "./CarsCollection";

Meteor.methods({
  "cars.create": async (data) => {
    const repository = client.fetchRepository(CarSchema);
    const car = repository.createEntity(data);
    const id = await repository.save(car);
    console.log(id);

    return CarsCollection.insert({
      ...data,
      createdAt: new Date(),
    });
  },
});
