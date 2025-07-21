import { Router } from "express";
import FloorController from "./floor.controller";
import { z } from "zod";
import { validate } from "../../middleware/validate";

const router = Router();

const floorSchema = z.object({
  restaurant_id: z.string().uuid(),
  name: z.string().min(1),
  display_name: z.string().min(1),
  description: z.string().min(1),
  capacity: z.number().int().positive(),
  status: z.enum(["active", "inactive"]),
});

router.get("/", (req, res) => FloorController.getAllFloors(req, res));
router.post("/", validate(floorSchema), (req, res) =>
  FloorController.createFloor(req, res)
);

export default router;
