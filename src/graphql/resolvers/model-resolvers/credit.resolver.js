import Credit from '../../../model/credit';
import User from '../../../model/users';
import helpers from '../../../util/helpers';

export default {
  credits: async () => await Credit.find(),
  createCredit: async ({ credit }, { user }) => {
    const creditExists = await Credit.findOne({ userId: user._id });

    if (user.hasActiveFee) {
      throw new Error('An user can have only one active credit');
    }
    if (creditExists && creditExists.isActive) {
      throw new Error('Credit already exists');
    }

    try {
      user.hasActiveFee = true;

      credit.userId = user._id;
      // fee will expire next month
      credit.nextFeeExpirationDate = helpers.dateHelpers.addMonthToDate(
        new Date(),
        1,
      );

      credit.expired = false;
      credit.feeValue = helpers.creditHelpers
        .getFeeValue(credit.creditValue, credit.feesNumber)
        .toFixed(3);
      credit.isActive = true;

      const newCredit = new Credit(credit);
      await User.findOneAndUpdate({ _id: user._id }, user, { new: true });
      return await newCredit.save();
    } catch (error) {
      console.log(error);
    }
  },
  updateCredit: async ({ credit }, { user }) => {
    const { _id } = credit;

    if (user.rol_id > 4) {
      throw new Error('You are not allowed to do this action.');
    }

    const creditExists = await Credit.findById({ _id });

    if (!creditExists) {
      throw new Error('Credit does not exist');
    }

    try {
      return await Credit.findOneAndUpdate({ _id }, credit, { new: true });
    } catch (error) {
      console.log(error);
    }
  },
  deleteCredit: async ({ credit }, { user }) => {
    const { _id } = credit;

    if (user.rol_id > 4) {
      throw new Error('You are not allowed to do this action.');
    }

    const creditExists = await Credit.findById({ _id });

    if (!creditExists) {
      throw new Error('Credit does not exist');
    }
    try {
      await Credit.findOneAndRemove({ _id }, credit);
      return 'Credit removed';
    } catch (error) {
      console.log(error);
    }
  },
};
