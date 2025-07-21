import { Request, Response } from 'express';
import OrderService from './order.service';
import {
  ApiResponse,
  ApiMessages,
  ApiStatusCodes,
} from "../../core/ApiResponse";

export class OrderController {
  async getAllOrders(req: Request, res: Response) {
    try {
      const orders = await OrderService.getAllOrders();
      return ApiResponse.success(
        res,
        { orders },
        ApiMessages.CREATE("Order"),
        ApiStatusCodes.OK
      );
    } catch (err) {
      return ApiResponse.error(res, "Failed to fetch orders", 500, err);
    }
  }

  async createOrder(req: Request, res: Response) {
    try {
      const order = await OrderService.createOrder(req.body);
      return ApiResponse.success(
        res,
        { order },
        ApiMessages.CREATE("Order"),
        ApiStatusCodes.CREATED
      );
    } catch (err) {
      return ApiResponse.error(res, "Failed to create order", 500, err);
    }
  }

  async getOrderById(req: Request, res: Response) {
    try {
      const order = await OrderService.getOrderById(req.params.id);
      if (!order) {
        return ApiResponse.error(res, "Order not found", 404);
      }
      return ApiResponse.success(
        res,
        { order },
        ApiMessages.CREATE("Order"),
        ApiStatusCodes.OK
      );
    } catch (err) {
      return ApiResponse.error(res, "Failed to fetch order", 500, err);
    }
  }

  async updateOrderStatus(req: Request, res: Response) {
    try {
      const { status } = req.body;
      const updated = await OrderService.updateOrderStatus(
        req.params.id,
        status
      );
      if (!updated) {
        return ApiResponse.error(res, "Order not found", 404);
      }
      return ApiResponse.success(
        res,
        { id: req.params.id, status },
        ApiMessages.UPDATE("Order"),
        ApiStatusCodes.OK
      );
    } catch (err) {
      return ApiResponse.error(res, "Failed to update order status", 500, err);
    }
  }
}

export default new OrderController(); 