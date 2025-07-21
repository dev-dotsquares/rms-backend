import { UserRepository } from './user.repository';

export class UserService {
  private userRepo = new UserRepository();

  async getAllUsers() {
    return this.userRepo.listUsers();
  }

  async createUser(data: { name: string; email: string; password_hash: string; role: string; restaurant_id?: string }) {
    return this.userRepo.createUser(data);
  }
}

export default new UserService(); 