import Gearbox from '../../../model/gearbox';

export default {
  gearboxes: async ({ filter }) => await Gearbox.find(filter),
  createGearbox: async ({ gearbox }, { user }) => {
    const { id, type } = gearbox;

    const gearboxExist = await Gearbox.findOne({ id, type });

    if (user.rol_id > 4) {
      throw new Error('You are not allowed to do this action.');
    }
    if (gearboxExist) {
      throw new Error('This Gearbox type already exist!');
    }

    try {
      const newGearbox = new Gearbox(gearbox);
      return await newGearbox.save();
    } catch (error) {
      console.log(error);
    }
  },
  updateGearbox: async ({ gearbox }, { user }) => {
    const { _id } = gearbox;

    if (user.rol_id > 4) {
      throw new Error('You are not allowed to do this action.');
    }
    const gearboxExist = await Gearbox.findById({ _id });

    if (!gearboxExist) {
      throw new Error('This Gearbox type does not exist!');
    }
    try {
      return await Gearbox.findOneAndUpdate({ _id }, gearbox, { new: true });
    } catch (error) {
      console.log(error);
    }
  },
  deleteGearbox: async ({ gearbox }, { user }) => {
    const { _id } = gearbox;

    if (user.rol_id > 4) {
      throw new Error('You are not allowed to do this action.');
    }
    const gearboxExist = await Gearbox.findById({ _id });

    if (!gearboxExist) {
      throw new Error('This Gearbox type does not exist!');
    }
    try {
      await Gearbox.findOneAndDelete({ _id }, gearbox);
      return 'Gearbox removed';
    } catch (error) {
      console.log(error);
    }
  },
};
