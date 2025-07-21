import UserRole from './userRole.model';

interface CreateUserRoleDTO {
  user_id: string;
  role_id: string;
}

export class UserRoleRepository {
  async addUserRole(data: CreateUserRoleDTO) {
    return UserRole.create(data);
  }

  async removeUserRole(user_id: string, role_id: string) {
    return UserRole.destroy({ where: { user_id, role_id } });
  }

  async findRolesByUser(user_id: string) {
    return UserRole.findAll({ where: { user_id } });
  }

  async findUsersByRole(role_id: string) {
    return UserRole.findAll({ where: { role_id } });
  }

  async listUserRoles(filter: Partial<CreateUserRoleDTO> = {}) {
    return UserRole.findAll({ where: filter });
  }
} 