import Credit from "../../../model/credit";

export default {
  credits: async () => await Credit.find(),
};
