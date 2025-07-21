import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { login, register } from "./auth.service";
import {
  ApiResponse,
  ApiMessages,
  ApiStatusCodes,
} from "../../core/ApiResponse";
import ApiError from "../../core/ApiError";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.string().optional(),
});

/**
 * @openapi
 * /api/auth/login:
 *   post:
 *     tags:
 *       - Auth
 *     summary: User login
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AuthLoginRequest'
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthLoginResponse'
 *       401:
 *         description: Invalid credentials
 */
export const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = loginSchema.parse(req.body);
    const result = await login(email, password);
    return ApiResponse.success(
      res,
      { data: result },
      ApiMessages.LOGIN(`${email}`),
      ApiStatusCodes.OK
    );
  } catch (err: any) {
    if (err instanceof ApiError && "statusCode" in err && "message" in err) {
      return ApiResponse.error(
        res,
        (err as any).statusCode,
        (err as any).message
      );
    }
    next(err);
  }
};

/**
 * @openapi
 * /api/auth/register:
 *   post:
 *     tags:
 *       - Auth
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *               role:
 *                 type: string
 *                 default: user
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/User'
 *       409:
 *         description: Email already in use
 */
export const registerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password, role } = registerSchema.parse(req.body);
    const user = await register(name, email, password, role);
    return ApiResponse.success(
      res,
      { data: user },
      ApiMessages.CREATE("User"),
      ApiStatusCodes.CREATED
    );
  } catch (err: any) {
    if (err instanceof ApiError && "statusCode" in err && "message" in err) {
      return ApiResponse.error(
        res,
        (err as any).statusCode,
        (err as any).message
      );
    }
    next(err);
  }
};
