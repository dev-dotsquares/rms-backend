import { UserRoleRepository } from './userRole.repository';

export class UserRoleService {
  private userRoleRepo = new UserRoleRepository();

  async getAllUserRoles() {
    return this.userRoleRepo.listUserRoles();
  }

  async addUserRole(data: { user_id: string; role_id: string }) {
    return this.userRoleRepo.addUserRole(data);
  }

  async removeUserRole(user_id: string, role_id: string) {
    return this.userRoleRepo.removeUserRole(user_id, role_id);
  }
}

export default new UserRoleService(); 