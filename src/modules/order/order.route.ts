import { Router } from 'express';
import OrderController from './order.controller';
import { z } from 'zod';
import { validate } from '../../middleware/validate';

const router = Router();

const orderSchema = z.object({
  restaurant_id: z.string().uuid(),
  table_id: z.string().uuid().optional(),
  floor_id: z.string().uuid(),
  type: z.enum(['dine_in', 'takeaway']),
  status: z.enum(['pending', 'in_progress', 'ready', 'served', 'paid']),
  total: z.number().positive(),
  waiter_id: z.string().uuid(),
  customer_name: z.string().optional(),
  customer_phone: z.string().optional(),
  notes: z.string().optional()
});

const statusSchema = z.object({
  status: z.enum(["pending", "in_progress", "ready", "served", "paid"]),
});

router.get("/", (req, res) => OrderController.getAllOrders(req, res));
router.post("/", validate(orderSchema), (req, res) =>
  OrderController.createOrder(req, res)
);
router.get("/:id", (req, res) => OrderController.getOrderById(req, res));
router.patch("/:id/status", validate(statusSchema), (req, res) =>
  OrderController.updateOrderStatus(req, res)
);

export default router; 