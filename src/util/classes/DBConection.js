import mongoose from 'mongoose';
import * as EnvModule from '../../config/env/envModule';

EnvModule.configEnv();
let instance = null;
export class DBConnection {
  constructor() {
    this._conn = null;
  }

  async connect() {
    if (instance) {
      try {
        this._conn = await mongoose.connect(
          process.env.DB_MONGO,
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
          },
        );
        console.log('DB Connected');
      } catch (error) {
        console.log(error);
        process.exit(1);
      }
    }
  }

  get conn() {
    return this._conn;
  }

  static getInstance() {
    if (!instance) {
      instance = new DBConnection();
    }

    return instance;
  }
}
