import User from '../user/user.model';

export const findUserByEmail = async (email: string) => {
  return User.findOne({ where: { email } });
};

export const createUser = async (name: string, email: string, password_hash: string, role: string = 'user') => {
  return User.create({ name, email, password_hash, role });
}; 