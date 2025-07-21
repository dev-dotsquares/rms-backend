import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../core/ApiError';
import { ApiResponse } from '../core/ApiResponse';

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
    'Internal Server Error',
    500,
    process.env.NODE_ENV === 'development' ? err : undefined
  );
} 