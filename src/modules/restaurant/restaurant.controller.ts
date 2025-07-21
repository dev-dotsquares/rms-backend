import { Request, Response } from "express";
import RestaurantService from "./restaurant.service";
import { ApiResponse } from "../../core/ApiResponse";

export class RestaurantController {
  async getAllRestaurants(req: Request, res: Response) {
    try {
      const restaurants = await RestaurantService.getAllRestaurants();
      console.log("restaurants", restaurants);
      return ApiResponse.success(
        res,
        { restaurants },
        "Restaurants fetched successfully"
      );
    } catch (err) {
      return ApiResponse.error(res, "Failed to fetch restaurants", 500, err);
    }
  }

  async createRestaurant(req: Request, res: Response) {
    try {
      const restaurant = await RestaurantService.createRestaurant(req.body);
      return ApiResponse.success(
        res,
        { restaurant },
        "Restaurant created successfully",
        201
      );
    } catch (err) {
      return ApiResponse.error(res, "Failed to create restaurant", 500, err);
    }
  }
}

export default new RestaurantController();
