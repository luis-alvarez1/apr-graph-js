import { DBConnection } from '../../util/classes/DBConection';

export const connectDB = async () => {
  const dbConnection = DBConnection.getInstance();

  dbConnection.connect();
};
