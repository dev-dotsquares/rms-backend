import Role from "./role.model";

interface CreateRoleDTO {
  name: string;
  description: string;
}

export class RoleRepository {
  async createRole(data: CreateRoleDTO) {
    return Role.create(data);
  }

  async findRoleByName(name: string) {
    return Role.findOne({ where: { name } });
  }

  async findRoleById(id: string) {
    return Role.findByPk(id);
  }

  async updateRole(id: string, updates: Partial<CreateRoleDTO>) {
    return Role.update(updates, { where: { id } });
  }

  async deleteRole(id: string) {
    return Role.destroy({ where: { id } });
  }

  async listRoles() {
    return Role.findAll();
  }
}
