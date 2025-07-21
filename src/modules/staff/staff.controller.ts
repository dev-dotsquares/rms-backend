import { Request, Response } from 'express';
import StaffService from './staff.service';
import { ApiResponse } from '../../core/ApiResponse';

export class StaffController {
  async getAllStaff(req: Request, res: Response) {
    try {
      const staff = await StaffService.getAllStaff();
      return ApiResponse.success(res, { staff }, 'Staff fetched successfully');
    } catch (err) {
      return ApiResponse.error(res, 'Failed to fetch staff', 500, err);
    }
  }

  async createStaff(req: Request, res: Response) {
    try {
      const staff = await StaffService.createStaff(req.body);
      return ApiResponse.success(res, { staff }, 'Staff created successfully', 201);
    } catch (err) {
      return ApiResponse.error(res, 'Failed to create staff', 500, err);
    }
  }
}

export default new StaffController(); 