import { model, Schema, Types } from 'mongoose';

const creditSchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: 'Users',
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
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true },
);

export default model('Credit', creditSchema);
