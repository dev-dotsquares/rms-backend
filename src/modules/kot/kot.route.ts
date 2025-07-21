import { Router } from 'express';
import KotController from './kot.controller';
import { z } from 'zod';
import { validate } from '../../middleware/validate';

const router = Router();

const kotSchema = z.object({
  order_id: z.string().uuid(),
  table_id: z.string().uuid(),
  items: z.any(),
  status: z.enum(['pending', 'in_prep', 'ready']),
  estimated_time: z.number().int().positive()
});

router.get('/', (req, res) => KotController.getAllKots(req, res));
router.post('/', validate(kotSchema), (req, res) => KotController.createKot(req, res));

export default router; 