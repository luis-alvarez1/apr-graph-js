import { v1 } from "uuid";

export const generateUniqueCode = () => {
  return v1();
};
