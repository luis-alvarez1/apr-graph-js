import User from "../../../model/users";
import { helpers } from "../../../helpers/index.js";
import bcrypt from "bcrypt";

export default {
  users: async () => await User.find(),

  createUser: async ({ user }, args, ctx) => {
    const { email } = user;

    const userExists = await User.findOne({ email });

    if (userExists) {
      throw new Error("User already exists");
    }

    try {
      if (!user.rol_id) {
        user.rol_id = 5;
      }
      if (user.rol_id < 4) {
        user.discountCode = helpers.discountHelpers.generateUniqueCode();
      }
      const salt = await bcrypt.genSalt(10);
      input.password = await bcrypt.hash(password, salt);

      const newUser = new User(user);
      return newUser.save();
    } catch (error) {
      console.log(error);
    }
  },

  updateUser: async ({ user }, args, ctx) => {
    const { _id } = user;

    const userExists = await User.findOne({ _id });

    if (!userExists) {
      throw new Error("User does not exists");
    }

    try {
      return await User.findOneAndUpdate({ _id }, user, { new: true });
    } catch (error) {
      console.log(error);
    }
  },

  deleteUser: async ({ user }, args, ctx) => {
    const { _id } = user;

    const userExists = await User.findOne({ _id });

    if (!userExists) {
      throw new Error("User does not exists");
    }

    try {
      await User.findOneAndRemove({ _id }, user);
      return "User removed";
    } catch (error) {
      console.log(error);
    }
  },
};
