import { Request, Response } from 'express';
import KotService from './kot.service';
import { ApiResponse } from '../../core/ApiResponse';

export class KotController {
  async getAllKots(req: Request, res: Response) {
    try {
      const kots = await KotService.getAllKots();
      return ApiResponse.success(res, { kots }, 'KOTs fetched successfully');
    } catch (err) {
      return ApiResponse.error(res, 'Failed to fetch KOTs', 500, err);
    }
  }

  async createKot(req: Request, res: Response) {
    try {
      const kot = await KotService.createKot(req.body);
      return ApiResponse.success(res, { kot }, 'KOT created successfully', 201);
    } catch (err) {
      return ApiResponse.error(res, 'Failed to create KOT', 500, err);
    }
  }
}

export default new KotController(); 