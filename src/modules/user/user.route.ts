import { Router } from 'express';
import UserController from './user.controller';
import { z } from 'zod';
import { validate } from '../../middleware/validate';
import swaggerJSDoc from "swagger-jsdoc";

const router = Router();

const userSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password_hash: z.string().min(6),
  role: z.string().min(1),
  restaurant_id: z.string().uuid().optional()
});

router.get('/', (req, res) => UserController.getAllUsers(req, res));
router.post('/', validate(userSchema), (req, res) => UserController.createUser(req, res));

export default router; 