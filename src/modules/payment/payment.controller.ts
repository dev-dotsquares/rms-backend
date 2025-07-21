import { Request, Response } from 'express';
import PaymentService from './payment.service';
import { ApiResponse } from '../../core/ApiResponse';

export class PaymentController {
  async getAllPayments(req: Request, res: Response) {
    try {
      const payments = await PaymentService.getAllPayments();
      return ApiResponse.success(res, { payments }, 'Payments fetched successfully');
    } catch (err) {
      return ApiResponse.error(res, 'Failed to fetch payments', 500, err);
    }
  }

  async createPayment(req: Request, res: Response) {
    try {
      const payment = await PaymentService.createPayment(req.body);
      return ApiResponse.success(res, { payment }, 'Payment created successfully', 201);
    } catch (err) {
      return ApiResponse.error(res, 'Failed to create payment', 500, err);
    }
  }
}

export default new PaymentController(); 