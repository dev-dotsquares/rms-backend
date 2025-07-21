import { Request, Response } from 'express';
import ReportService from './report.service';
import { ApiResponse } from '../../core/ApiResponse';

export class ReportController {
  async getAllReports(req: Request, res: Response) {
    try {
      const reports = await ReportService.getAllReports();
      return ApiResponse.success(res, { reports }, 'Reports fetched successfully');
    } catch (err) {
      return ApiResponse.error(res, 'Failed to fetch reports', 500, err);
    }
  }

  async createReport(req: Request, res: Response) {
    try {
      const report = await ReportService.createReport(req.body);
      return ApiResponse.success(res, { report }, 'Report created successfully', 201);
    } catch (err) {
      return ApiResponse.error(res, 'Failed to create report', 500, err);
    }
  }
}

export default new ReportController(); 