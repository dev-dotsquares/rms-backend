import { Request, Response } from 'express';
import UserRoleService from './userRole.service';
import { ApiResponse } from '../../core/ApiResponse';

export class UserRoleController {
  async getAllUserRoles(req: Request, res: Response) {
    try {
      const userRoles = await UserRoleService.getAllUserRoles();
      return ApiResponse.success(res, { userRoles }, 'User roles fetched successfully');
    } catch (err) {
      return ApiResponse.error(res, 'Failed to fetch user roles', 500, err);
    }
  }

  async addUserRole(req: Request, res: Response) {
    try {
      const userRole = await UserRoleService.addUserRole(req.body);
      return ApiResponse.success(res, { userRole }, 'User role added successfully', 201);
    } catch (err) {
      return ApiResponse.error(res, 'Failed to add user role', 500, err);
    }
  }

  async removeUserRole(req: Request, res: Response) {
    try {
      const { user_id, role_id } = req.body;
      await UserRoleService.removeUserRole(user_id, role_id);
      return ApiResponse.success(res, {}, 'User role removed successfully');
    } catch (err) {
      return ApiResponse.error(res, 'Failed to remove user role', 500, err);
    }
  }
}

export default new UserRoleController(); 