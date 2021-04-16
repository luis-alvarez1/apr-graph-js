import Gearbox from "../../../model/gearbox";

export default {
  gearboxes: async () => await Gearbox.find(),
  createGearbox: async ({ gearbox }, { user }, info) => {
    const { id, type } = gearbox;

    const gearboxExist = await Gearbox.findOne({ id, type });

    if (gearboxExist) {
      throw new Error("This Gearbox type already exist!");
    }

    try {
      const newGearbox = new Gearbox(gearbox);
      return await newGearbox.save();
    } catch (error) {}
  },
  updateGearbox: async ({ gearbox }, { user }, info) => {
    const { _id } = gearbox;

    const gearboxExist = await Gearbox.findById({ _id });

    if (!gearboxExist) {
      throw new Error("This Gearbox type does not exist!");
    }
    try {
      return await Gearbox.findOneAndUpdate({ _id }, gearbox, { new: true });
    } catch (error) {
      console.log(error);
    }
  },
  deleteGearbox: async ({ gearbox }, { user }, info) => {
    const { _id } = gearbox;

    const gearboxExist = await Gearbox.findById({ _id });

    if (!gearboxExist) {
      throw new Error("This Gearbox type does not exist!");
    }
    try {
      await Gearbox.findOneAndDelete({ _id }, gearbox);
      return "Gearbox removed";
    } catch (error) {
      console.log(error);
    }
  },
};
