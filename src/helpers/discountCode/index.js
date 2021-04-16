import { v1 } from "uuid";

export const generateUniqueCode = () => {
  const code = v1();
  return code;
};
