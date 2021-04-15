import mongoose from "mongoose";
import { configEnv } from "../env/index";

configEnv();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("DB Connected");
  } catch (error) {
    console.log("hubo un error");
    console.log(error);
    process.exit(1);
  }
};
