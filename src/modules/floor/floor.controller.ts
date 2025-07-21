import { Request, Response } from "express";
import FloorService from "./floor.service";
import { ApiResponse } from "../../core/ApiResponse";

export class FloorController {
  async getAllFloors(req: Request, res: Response) {
    try {
      const floors = await FloorService.getAllFloors();
      return ApiResponse.success(
        res,
        { floors },
        "Floors fetched successfully"
      );
    } catch (err) {
      return ApiResponse.error(res, "Failed to fetch floors", 500, err);
    }
  }

  async createFloor(req: Request, res: Response) {
    try {
      const floor = await FloorService.createFloor(req.body);
      return ApiResponse.success(
        res,
        { floor },
        "Floor created successfully",
        201
      );
    } catch (err) {
      return ApiResponse.error(res, "Failed to create floor", 500, err);
    }
  }
}

export default new FloorController();
