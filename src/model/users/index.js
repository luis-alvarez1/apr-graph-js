import { model, Schema } from "mogoose";

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
      trim: String,
    },
  },
  { timestamps: true }
);

export default model("Users", userSchema);
