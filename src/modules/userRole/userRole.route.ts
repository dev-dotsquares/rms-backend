import { Router } from 'express';
import UserRoleController from './userRole.controller';
import { z } from 'zod';
import { validate } from '../../middleware/validate';

const router = Router();

const userRoleSchema = z.object({
  user_id: z.string().uuid(),
  role_id: z.string().uuid()
});

router.get('/', (req, res) => UserRoleController.getAllUserRoles(req, res));
router.post('/', validate(userRoleSchema), (req, res) => UserRoleController.addUserRole(req, res));
router.delete('/', validate(userRoleSchema), (req, res) => UserRoleController.removeUserRole(req, res));

export default router; 