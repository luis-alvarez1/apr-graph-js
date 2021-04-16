import { model, Schema } from "mongoose";

const gearBoxSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);
export default model("Gearbox", gearBoxSchema);
