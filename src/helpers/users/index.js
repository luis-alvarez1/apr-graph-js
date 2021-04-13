import jwt from "jsonwebtoken";

export const createToken = (user, secret, expiresIn) => {
  const { _id, email, name } = user;

  return jwt.sign({ _id, email, name }, secret, { expiresIn });
};
