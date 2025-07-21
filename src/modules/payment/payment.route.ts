import { Router } from 'express';
import PaymentController from './payment.controller';
import { z } from 'zod';
import { validate } from '../../middleware/validate';

const router = Router();

const paymentSchema = z.object({
  bill_id: z.string().uuid(),
  amount: z.number().positive(),
  method: z.string().min(1),
  status: z.enum(['pending', 'completed', 'failed']),
  transaction_id: z.string().optional()
});

router.get('/', (req, res) => PaymentController.getAllPayments(req, res));
router.post('/', validate(paymentSchema), (req, res) => PaymentController.createPayment(req, res));

export default router; 