import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    hasActiveFee: {
      type: Boolean,
    },
    phoneNumber: {
      type: String,
      trim: true,
    },
    rol_id: {
      type: Number,
      trim: true,
      require: true,
    },
    discountCode: {
      type: String,
      trim: true,
      require: true,
    },
  },
  { timestamps: true }
);

export default model("Users", userSchema);
