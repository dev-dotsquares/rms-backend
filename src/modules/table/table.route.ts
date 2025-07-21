import { Router } from 'express';
import TableController from './table.controller';
import { z } from 'zod';
import { validate } from '../../middleware/validate';

const router = Router();

const tableSchema = z.object({
  restaurant_id: z.string().uuid(),
  floor_id: z.string().uuid(),
  label: z.string().min(1),
  seats: z.number().int().positive(),
  status: z.enum(['vacant', 'occupied', 'reserved', 'needs_cleaning']),
  x: z.number().int(),
  y: z.number().int(),
  current_order: z.string().uuid().optional(),
  assigned_waiter: z.string().uuid().optional(),
  last_cleaned: z.string().optional()
});

router.get('/', (req, res) => TableController.getAllTables(req, res));
router.post('/', validate(tableSchema), (req, res) => TableController.createTable(req, res));

export default router; 