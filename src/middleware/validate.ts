import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";
import { ApiResponse } from "../core/ApiResponse";

export function validate(
  schema: ZodSchema<any>,
  property: "body" | "query" | "params" = "body"
) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req[property]);
    if (!result.success) {
      return ApiResponse.error(
        res,
        "Validation error",
        400,
        result.error.flatten()
      );
    }
    // Attach parsed data for use in controller if needed
    req[property] = result.data;
    next();
  };
}
