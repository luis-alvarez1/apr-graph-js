import Vehicle from "../../../model/vehicles";

export default {
  vehicles: async () => await Vehicle.find(),
  createVehicle: async ({ vehicle }, { user }, info) => {
    const { model, name, price } = vehicle;

    const vehicleExist = await Vehicle.findOne({
      model,
      name,
      price,
    });

    if (vehicleExist) {
      throw new Error("Vehicle already exist ");
    }

    try {
      const newVehicle = new Vehicle(vehicle);
      return await newVehicle.save();
    } catch (error) {
      console.log(error);
    }
  },
  updateVehicle: async ({ vehicle }, { user }, info) => {
    const { _id } = vehicle;
    const vehicleExist = await Vehicle.findById({ _id });
    if (!vehicleExist) {
      throw new Error("Vehicle does not exist");
    }
    if (user.rol_id > 4) {
      throw new Error("You are not allowed to do this action.");
    }
    try {
      return await Vehicle.findOneAndUpdate({ _id }, vehicle, { new: true });
    } catch (error) {
      console.log(error);
    }
  },
  deleteVehicle: async ({ vehicle }, { user }, info) => {
    const { _id } = vehicle;

    const vehicleExist = await Vehicle.findById({ _id });

    if (!vehicleExist) {
      throw new Error("Vehicle does not exist");
    }

    if (user.rol_id > 4) {
      throw new Error("You are not allowed to make this action.");
    }

    try {
      await Vehicle.findOneAndRemove({ _id }, vehicle);
      return "Vehicle removed";
    } catch (error) {
      console.log(error);
    }
  },
};
