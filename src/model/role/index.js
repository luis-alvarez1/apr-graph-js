import { model, Schema } from "mongoose";

const roleSchema = new Schema(
  {
    idRole: {
      type: Number,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model("Role", roleSchema);
