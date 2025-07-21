import { Router } from 'express';
import BillController from './bill.controller';
import { z } from 'zod';
import { validate } from '../../middleware/validate';

const router = Router();

const billSchema = z.object({
  order_id: z.string().uuid(),
  total: z.number().positive(),
  payment_method: z.string().min(1),
  payment_status: z.enum(['pending', 'completed', 'failed'])
});

router.get('/', (req, res) => BillController.getAllBills(req, res));
router.post('/', validate(billSchema), (req, res) => BillController.createBill(req, res));

export default router; 