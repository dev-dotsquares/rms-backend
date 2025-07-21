import { Request, Response } from 'express';
import OrderItemService from './orderItem.service';
import { ApiResponse } from '../../core/ApiResponse';

export class OrderItemController {
  async getAllOrderItems(req: Request, res: Response) {
    try {
      const orderItems = await OrderItemService.getAllOrderItems();
      return ApiResponse.success(res, { orderItems }, 'Order items fetched successfully');
    } catch (err) {
      return ApiResponse.error(res, 'Failed to fetch order items', 500, err);
    }
  }

  async createOrderItem(req: Request, res: Response) {
    try {
      const orderItem = await OrderItemService.createOrderItem(req.body);
      return ApiResponse.success(res, { orderItem }, 'Order item created successfully', 201);
    } catch (err) {
      return ApiResponse.error(res, 'Failed to create order item', 500, err);
    }
  }
}

export default new OrderItemController(); 