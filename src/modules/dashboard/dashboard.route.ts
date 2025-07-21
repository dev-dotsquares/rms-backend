import { Router } from "express";
import { dashboardController } from "./dashboard.controller";

const router = Router();

router.get("/dashboard/:role", dashboardController);

export default router;
