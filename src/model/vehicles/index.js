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
      required: true,
    },
    color: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    cylinderCapacity: {
      type: Schema.Types.ObjectId, //CylinderCapacity ID
      ref: "CylinderCapacity",
      required: true,
    },
    gearbox: {
      type: Schema.Types.ObjectId, //Gearbox ID
      ref: "Gearbox",
      required: true,
    },
  },
  { timestamps: true }
);
export default model("Vehicles", vehiclesSchema);
