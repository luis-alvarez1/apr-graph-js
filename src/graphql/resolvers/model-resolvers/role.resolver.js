import Role from '../../../model/role';

export default {
  roles: async ({ filter }) => await Role.find(filter),
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
  updateRole: async ({ role }, { user }) => {
    const { _id } = role;

    if (user.rol_id > 4) {
      throw new Error('You are not allowed to do this action.');
    }

    const roleExist = await Role.findOne({ _id });

    if (!roleExist) {
      throw new Error('Role does not exist');
    }

    try {
      return await Role.findOneAndUpdate({ _id }, role, { new: true });
    } catch (error) {
      console.log(error);
    }
  },
};
