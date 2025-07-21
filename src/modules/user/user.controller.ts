import { Request, Response } from 'express';
import UserService from './user.service';
import { ApiResponse } from '../../core/ApiResponse';

export class UserController {
  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();
      return ApiResponse.success(res, { users }, 'Users fetched successfully');
    } catch (err) {
      return ApiResponse.error(res, 'Failed to fetch users', 500, err);
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const user = await UserService.createUser(req.body);
      return ApiResponse.success(res, { user }, 'User created successfully', 201);
    } catch (err) {
      return ApiResponse.error(res, 'Failed to create user', 500, err);
    }
  }
}

export default new UserController(); 