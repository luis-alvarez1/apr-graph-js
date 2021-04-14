import { model, Schema } from "mongoose";

const gearBox = new Schema(
  {
    type: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);
export default model("GearBox", gearBox);
