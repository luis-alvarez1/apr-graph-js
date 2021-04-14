import { model, Schema } from "mongoose";

const vehiclesSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    model: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
      min: 1900,
      max: 2022,
    },
    color: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    cylinderCapacity: {
      type: Schema.Types.ObjectId, //CylinderCapacity ID
      ref: "CylinderCapacity",
    },
    gearbox: {
      type: Schema.Types.ObjectId, //Gearbox ID
      ref: "Gearbox",
    },
    stock: {
      type: Number,
    },
  },
  { timestamps: true }
);
export default model("Vehicles", vehiclesSchema);
