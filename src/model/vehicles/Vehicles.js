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
    colour: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    cylinderCapacity: {
      // https://www.carsguide.com.au/car-advice/engine-capacity-what-does-cc-mean-70785
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
