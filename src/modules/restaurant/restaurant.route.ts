import { Router } from "express";
import RestaurantController from "./restaurant.controller";
import { z } from "zod";
import { validate } from "../../middleware/validate";

const router = Router();

const restaurantSchema = z.object({
  name: z.string().min(1),
  address: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email(),
  currency: z.string().min(1),
  timezone: z.string().min(1),
  status: z.enum(["active", "trial", "suspended"]),
  plan: z.string().min(1),
  admin_id: z.string().uuid(),
  revenue: z.string().optional(),
});

router.get("/", (req, res) => RestaurantController.getAllRestaurants(req, res));
router.post("/", validate(restaurantSchema), (req, res) =>
  RestaurantController.createRestaurant(req, res)
);

export default router;
