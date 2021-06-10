import { model, Schema } from 'mongoose';

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
      max: new Date().getFullYear(),
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
      type: String,
      trim: true,
    },
    gearbox: {
      type: Number,
      trim: true,
    },
    stock: {
      type: Number,
    },
    imgUrl: {
      type: String,
    },
  },
  { timestamps: true },
);
export default model('Vehicles', vehiclesSchema);
