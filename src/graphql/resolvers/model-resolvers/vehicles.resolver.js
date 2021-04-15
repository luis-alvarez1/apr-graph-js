import Vehicle from "../../../model/vehicles";

export default {
  vehicles: () => Vehicle.find(),
  createVehicle: async ({ vehicle }, args, ctx) => {
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
};
