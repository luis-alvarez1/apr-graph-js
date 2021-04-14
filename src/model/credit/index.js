import { model, Schema } from "mongoose";

const creditSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    creditValue: {
      type: Number,
      required: true,
    },
    expirationDate: {
      type: Date,
      required: true,
    },
    nextFeeExpirationDate: {
      type: Date,
      required: true,
    },
    feesNumber: {
      type: Number,
      required: true,
    },
    expired: {
      type: Boolean,
      required: true,
    },
    feeValue: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default model("Credit", creditSchema);
