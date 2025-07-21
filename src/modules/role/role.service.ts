import { RoleRepository } from './role.repository';

export class RoleService {
  private roleRepo = new RoleRepository();

  async getAllRoles() {
    return this.roleRepo.listRoles();
  }

  async createRole(data: { name: string; description: string }) {
    return this.roleRepo.createRole(data);
  }
}

export default new RoleService();
