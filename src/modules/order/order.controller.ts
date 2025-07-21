import { Request, Response } from 'express';
import OrderService from './order.service';
import { ApiResponse } from '../../core/ApiResponse';

export class OrderController {
  async getAllOrders(req: Request, res: Response) {
    try {
      const orders = await OrderService.getAllOrders();
      return ApiResponse.success(res, { orders }, 'Orders fetched successfully');
    } catch (err) {
      return ApiResponse.error(res, 'Failed to fetch orders', 500, err);
    }
  }

  async createOrder(req: Request, res: Response) {
    try {
      const order = await OrderService.createOrder(req.body);
      return ApiResponse.success(res, { order }, 'Order created successfully', 201);
    } catch (err) {
      return ApiResponse.error(res, 'Failed to create order', 500, err);
    }
  }
}

export default new OrderController(); 