import { Request, Response } from 'express';
import BillService from './bill.service';
import { ApiResponse } from '../../core/ApiResponse';

export class BillController {
  async getAllBills(req: Request, res: Response) {
    try {
      const bills = await BillService.getAllBills();
      return ApiResponse.success(res, { bills }, 'Bills fetched successfully');
    } catch (err) {
      return ApiResponse.error(res, 'Failed to fetch bills', 500, err);
    }
  }

  async createBill(req: Request, res: Response) {
    try {
      const bill = await BillService.createBill(req.body);
      return ApiResponse.success(res, { bill }, 'Bill created successfully', 201);
    } catch (err) {
      return ApiResponse.error(res, 'Failed to create bill', 500, err);
    }
  }
}

export default new BillController(); 