import Role from "../../../model/role";

export default {
  roles: async () => await Role.find(),
  createRole: async ({ role }, args, ctx) => {
    const { idRole } = role;

    const roleExist = await Role.findOne({ idRole });

    if (roleExist) {
      throw new Error("Role arlready exist");
    }

    try {
      const newRol = new Role(role);
      return await newRol.save();
    } catch (error) {
      console.log(error);
    }
  },
};
