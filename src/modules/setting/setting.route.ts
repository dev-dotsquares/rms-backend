import { Router } from 'express';
import SettingController from './setting.controller';
import { z } from 'zod';
import { validate } from '../../middleware/validate';

const router = Router();

const settingSchema = z.object({
  restaurant_id: z.string().uuid().optional(),
  user_id: z.string().uuid().optional(),
  key: z.string().min(1),
  value: z.string().min(1)
});

router.get('/', (req, res) => SettingController.getAllSettings(req, res));
router.post('/', validate(settingSchema), (req, res) => SettingController.createSetting(req, res));

export default router; 