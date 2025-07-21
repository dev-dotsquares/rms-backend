import { Request, Response, NextFunction } from "express";
import { ApiResponse } from "../core/ApiResponse";

export class ApiError extends Error {
  status: number;
  details?: any;
  constructor(message: string, status = 500, details?: any) {
    super(message);
    this.status = status;
    this.details = details;
    Object.setPrototypeOf(this, ApiError.prototype);
  }
}

export default function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof ApiError) {
    return ApiResponse.error(res, err.message, err.status, err.details);
  }
  // Handle validation errors, JWT errors, etc. here if needed
  return ApiResponse.error(
    res,
    "Internal Server Error",
    500,
    process.env.NODE_ENV === "development" ? err : undefined
  );
}
