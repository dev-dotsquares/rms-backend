import { Router } from "express";
import RoleController from "./role.controller";
import { z } from "zod";
import { validate } from '../../middleware/validate';

const router = Router();

const roleSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
});

router.get("/", (req, res) => RoleController.getAllRoles(req, res));
router.post("/", validate(roleSchema), (req, res) =>
  RoleController.createRole(req, res)
);

export default router;
