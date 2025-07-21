import { Response } from "express";

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
