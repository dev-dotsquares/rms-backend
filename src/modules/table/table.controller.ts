import { Request, Response } from 'express';
import TableService from './table.service';
import { ApiResponse } from '../../core/ApiResponse';

export class TableController {
  async getAllTables(req: Request, res: Response) {
    try {
      const tables = await TableService.getAllTables();
      return ApiResponse.success(res, { tables }, 'Tables fetched successfully');
    } catch (err) {
      return ApiResponse.error(res, 'Failed to fetch tables', 500, err);
    }
  }

  async createTable(req: Request, res: Response) {
    try {
      const table = await TableService.createTable(req.body);
      return ApiResponse.success(res, { table }, 'Table created successfully', 201);
    } catch (err) {
      return ApiResponse.error(res, 'Failed to create table', 500, err);
    }
  }
}

export default new TableController(); 