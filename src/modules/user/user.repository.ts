import User from './user.model';

interface CreateUserDTO {
  name: string;
  email: string;
  password_hash: string;
  role: string;
  restaurant_id?: string | null;
}

export class UserRepository {
  async createUser(data: CreateUserDTO) {
    return User.create(data);
  }

  async findUserByEmail(email: string) {
    return User.findOne({ where: { email } });
  }

  async findUserById(id: string) {
    return User.findByPk(id);
  }

  async updateUser(id: string, updates: Partial<CreateUserDTO>) {
    return User.update(updates, { where: { id } });
  }

  async deleteUser(id: string) {
    return User.destroy({ where: { id } });
  }

  async listUsers(filter: Partial<CreateUserDTO> = {}) {
    return User.findAll({ where: filter });
  }
} 