import { Router } from 'express';
import SessionController from './session.controller';
import { z } from 'zod';
import { validate } from '../../middleware/validate';

const router = Router();

const sessionSchema = z.object({
  user_id: z.string().uuid(),
  token: z.string().min(1),
  device_info: z.string().min(1),
  created_at: z.string().optional(),
  expires_at: z.string()
});

router.get('/', (req, res) => SessionController.getAllSessions(req, res));
router.post('/', validate(sessionSchema), (req, res) => SessionController.createSession(req, res));

export default router; 