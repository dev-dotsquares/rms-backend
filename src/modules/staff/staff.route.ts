import { Router } from 'express';
import StaffController from './staff.controller';
import { z } from 'zod';
import { validate } from '../../middleware/validate';

const router = Router();

const staffSchema = z.object({
  user_id: z.string().uuid(),
  restaurant_id: z.string().uuid(),
  role: z.enum(['waiter', 'kitchen_manager', 'admin']),
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  status: z.enum(['active', 'inactive', 'pending']),
  assigned_floor: z.string().uuid().optional(),
  last_login: z.string().optional()
});

router.get('/', (req, res) => StaffController.getAllStaff(req, res));
router.post('/', validate(staffSchema), (req, res) => StaffController.createStaff(req, res));

export default router; 