import bcrypt from 'bcrypt';
import User from '../../../model/users/Users';
import helpers from '../../../util/helpers/index';

export default {
  users: async ({ filter }) => await User.find(filter),
  authUser: async ({ user }) => {
    const { email, password } = user;

    const userRegistered = await User.findOne({ email });

    if (!userRegistered) {
      throw new Error('User does not exist!');
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      userRegistered.password,
    );

    if (!isPasswordCorrect) {
      throw new Error('Wrong password, try again!');
    }

    return {
      token: helpers.tokenHelpers.createToken(
        userRegistered,
        process.env.SECRET,
        '12hr',
      ),
    };
  },
  createUser: async ({ user }, ctx) => {
    const { email, password } = user;
    console.log(user.rol_id);

    if (user.rol_id < 1 || user.rol_id > 5) {
      throw new Error('Role specified is not valid');
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error('User already exists');
    }
    if (ctx.user.rol_id > 4) {
      throw new Error('You are not allowed to do this action.');
    }
    try {
      if (!user.rol_id) {
        user.rol_id = 5;
      }
      if (user.rol_id < 4) {
        user.discountCode = helpers.discountHelpers.generateUniqueCode();
      }
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      const newUser = new User(user);
      return newUser.save();
    } catch (error) {
      console.log(error);
    }
  },
  updateUser: async ({ user }, ctx) => {
    const { _id } = user;

    const userExists = await User.findOne({ _id });
    if (ctx.user.rol_id > 4) {
      throw new Error('You are not allowed to do this action.');
    }
    if (!userExists) {
      throw new Error('User does not exists');
    }

    try {
      return await User.findOneAndUpdate({ _id }, user, { new: true });
    } catch (error) {
      console.log(error);
    }
  },
  deleteUser: async ({ user }, ctx) => {
    const { _id } = user;

    const userExists = await User.findOne({ _id });

    if (ctx.user.rol_id > 4) {
      throw new Error('You are not allowed to do this action.');
    }
    if (!userExists) {
      throw new Error('User does not exists');
    }

    try {
      await User.findOneAndRemove({ _id }, user);
      return 'User removed';
    } catch (error) {
      console.log(error);
    }
  },
};
