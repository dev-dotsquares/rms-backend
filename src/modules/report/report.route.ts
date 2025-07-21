import { Router } from 'express';
import ReportController from './report.controller';
import { z } from 'zod';
import { validate } from '../../middleware/validate';

const router = Router();

const reportSchema = z.object({
  restaurant_id: z.string().uuid(),
  type: z.string().min(1),
  data: z.any(),
  generated_at: z.string().optional()
});

router.get('/', (req, res) => ReportController.getAllReports(req, res));
router.post('/', validate(reportSchema), (req, res) => ReportController.createReport(req, res));

export default router; 