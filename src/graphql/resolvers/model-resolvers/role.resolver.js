import Role from '../../../model/role';

export default {
  roles: async () => await Role.find(),
  createRole: async ({ role }, { user }) => {
    const { idRole } = role;

    const roleExist = await Role.findOne({ idRole });

    if (roleExist) {
      throw new Error('Role arlready exist');
    }

    if (user.rol_id > 4) {
      throw new Error('You are not allowed to do this action.');
    }

    try {
      const newRol = new Role(role);
      return await newRol.save();
    } catch (error) {
      console.log(error);
    }
  },
};
