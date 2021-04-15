import User from "../../../model/users";

export default {
  users: async () => await User.find(),
  createUser: async ({ user }, args, ctx) => {
    const { email } = user;

    const userExists = await User.findOne({ email });

    if (userExists) {
      throw new Error("User already exists");
    }

    try {
      const newUser = new User(user);
      return newUser.save();
    } catch (error) {
      console.log(error);
    }
  },
};
