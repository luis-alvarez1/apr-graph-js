import { model, Schema } from "mongoose";

const cylinderCapacitySchema = new Schema(
  {
    type: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);
export default model("CylinderCapacity", cylinderCapacitySchema);
