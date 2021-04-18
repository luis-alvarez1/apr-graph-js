import jwt from 'jsonwebtoken';

export const createToken = (user, secret, expiresIn) => {
  const {
    _id,
    email,
    name,
    rol_id,
    hasActiveFee,
    phoneNumber,
    discountCode,
  } = user;

  return jwt.sign(
    {
      _id,
      email,
      name,
      rol_id,
      hasActiveFee,
      phoneNumber,
      discountCode,
    },
    secret,
    { expiresIn },
  );
};

export const getUserFromToken = (req) => {
  const token = req.headers.authorization || null;
  if (token) {
    try {
      const userToken = jwt.verify(
        token.replace('Bearer ', ''),
        process.env.SECRET,
      );
      return userToken;
    } catch (error) {
      console.log(error);
    }
  }
};
