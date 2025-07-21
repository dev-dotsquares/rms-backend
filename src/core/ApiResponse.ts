import { Response } from "express";

export const ApiMessages = {
  CREATE: (entity: string) => `${entity} created successfully`,
  UPDATE: (entity: string) => `${entity} updated successfully`,
  DELETE: (entity: string) => `${entity} deleted successfully`,
  REGISTER: (entity: string) => `${entity} registered successfully`,
  LOGIN: (entity: string) => `Login successfully`,
  EMAIL_IN_USE: () => `Email already in use`,
  INVALID_CREDENTIALS: () => `Invalid email or password`,
  // Add more as needed
};

export const ApiStatusCodes = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  CONFLICT: 409,
  INTERNAL_ERROR: 500,
  // Add more as needed
};

export class ApiResponse {
  static success(
    res: Response,
    data: object = {},
    message = "Success",
    status = 200
  ) {
    return res.status(status).json({ status: true, message, ...data });
  }
  static error(
    res: Response,
    message = "Error",
    status = 500,
    details: any = undefined
  ) {
    return res
      .status(status)
      .json({ status: false, message, ...(details ? { details } : {}) });
  }
}
