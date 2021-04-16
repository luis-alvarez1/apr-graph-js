import { model, Schema } from "mongoose";

const discountCodeSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
      trim: true,
    },
    id: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);
export default model("DiscountCode", discountCodeSchema);
