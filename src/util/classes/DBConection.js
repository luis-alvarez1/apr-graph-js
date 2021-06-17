import mongoose from 'mongoose';
import * as EnvModule from '../../config/env/envModule';

EnvModule.configEnv();

export class DBConnection {
  constructor(props) {
    this.properties = props;
    this.instance = null;
    this._conn = null;
  }

  async connect() {
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
      console.log('hubo un error');
      console.log(error);
      process.exit(1);
    }
  }

  get conn() {
    return this._conn;
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new DBConnection();
    }

    return this.instance;
  }
}
