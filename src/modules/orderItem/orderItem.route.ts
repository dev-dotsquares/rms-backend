import { Router } from 'express';
import OrderItemController from './orderItem.controller';
import { z } from 'zod';
import { validate } from '../../middleware/validate';

const router = Router();

const orderItemSchema = z.object({
  order_id: z.string().uuid(),
  name: z.string().min(1),
  quantity: z.number().int().positive(),
  price: z.number().positive(),
  notes: z.string().optional(),
  chef_id: z.string().uuid().optional(),
  prep_time: z.number().int().positive()
});

router.get('/', (req, res) => OrderItemController.getAllOrderItems(req, res));
router.post('/', validate(orderItemSchema), (req, res) => OrderItemController.createOrderItem(req, res));

export default router; 