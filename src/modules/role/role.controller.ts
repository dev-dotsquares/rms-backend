import { Request, Response } from "express";
import RoleService from "./role.service";
import { ApiResponse } from "../../core/ApiResponse";

export class RoleController {
  async getAllRoles(req: Request, res: Response) {
    try {
      const roles = await RoleService.getAllRoles();
      return ApiResponse.success(res, { roles }, "Roles fetched successfully");
    } catch (err) {
      return ApiResponse.error(res, "Failed to fetch roles", 500, err);
    }
  }

  async createRole(req: Request, res: Response) {
    try {
      const role = await RoleService.createRole(req.body);
      return ApiResponse.success(
        res,
        { role },
        "Role created successfully",
        201
      );
    } catch (err) {
      return ApiResponse.error(res, "Failed to create role", 500, err);
    }
  }
}

export default new RoleController();
