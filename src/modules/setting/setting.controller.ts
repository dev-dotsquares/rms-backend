import { Request, Response } from 'express';
import SettingService from './setting.service';
import { ApiResponse } from '../../core/ApiResponse';

export class SettingController {
  async getAllSettings(req: Request, res: Response) {
    try {
      const settings = await SettingService.getAllSettings();
      return ApiResponse.success(res, { settings }, 'Settings fetched successfully');
    } catch (err) {
      return ApiResponse.error(res, 'Failed to fetch settings', 500, err);
    }
  }

  async createSetting(req: Request, res: Response) {
    try {
      const setting = await SettingService.createSetting(req.body);
      return ApiResponse.success(res, { setting }, 'Setting created successfully', 201);
    } catch (err) {
      return ApiResponse.error(res, 'Failed to create setting', 500, err);
    }
  }
}

export default new SettingController(); 