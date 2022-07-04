import { Entity, Schema } from "redis-om";

class Car extends Entity {}

export default CarSchema = new Schema(
  Car,
  {
    make: { type: "string" },
    model: { type: "string" },
    image: { type: "string" },
    description: { type: "string" },
  },
  {
    dataStructure: "JSON",
  }
);
