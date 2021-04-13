import Vehicles from "../../../model/vehicles";

export default {
  vehicles: () => Vehicles.find(),
};
