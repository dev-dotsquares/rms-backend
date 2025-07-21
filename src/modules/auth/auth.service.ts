import { findUserByEmail, createUser } from "./auth.repository";
import bcrypt from "bcryptjs";
import ApiError from "../../core/ApiError";
import { generateToken } from "../../core/JWT";

export const login = async (email: string, password: string) => {
  const user = await findUserByEmail(email);
  if (!user) {
    throw new ApiError(401, "Invalid email or password");
  }
  const isMatch = await bcrypt.compare(password, user.password_hash);
  if (!isMatch) {
    throw new ApiError(401, "Invalid email or password");
  }
  // Generate JWT token
  const token = generateToken({ id: user.id, role: user.role });
  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      role: user.role,
    },
  };
};

export const register = async (name: string, email: string, password: string, role: string = 'user') => {
  const existing = await findUserByEmail(email);
  if (existing) {
    throw new ApiError(409, 'Email already in use');
  }
  const password_hash = await bcrypt.hash(password, 10);
  const user = await createUser(name, email, password_hash, role);
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    created_at: user.created_at,
    updated_at: user.updated_at,
  };
};
