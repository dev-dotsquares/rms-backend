import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { getDashboard } from './dashboard.service';
import { ApiResponse, ApiMessages, ApiStatusCodes } from '../../core/ApiResponse';
import ApiError from '../../core/ApiError';

const roleParamSchema = z.object({
  role: z.string().min(2)
});

/**
 * @openapi
 * /api/dashboard/{role}:
 *   get:
 *     tags:
 *       - Dashboard
 *     summary: Get dashboard data for a role
 *     parameters:
 *       - in: path
 *         name: role
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dashboard data loaded
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
 *                   type: object
 *                   properties:
 *                     metrics:
 *                       type: object
 *                     quickActions:
 *                       type: array
 *                       items:
 *                         type: object
 *                     alerts:
 *                       type: array
 *                       items:
 *                         type: object
 *                 timestamp:
 *                   type: string
 *                   format: date-time
 *       400:
 *         description: Invalid role
 */
export const dashboardController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { role } = roleParamSchema.parse(req.params);
    const data = await getDashboard(role);
    return ApiResponse.success(
      res,
      { data, timestamp: new Date().toISOString() },
      ApiMessages.CREATE('Dashboard'),
      ApiStatusCodes.OK
    );
  } catch (err: any) {
    if (err instanceof ApiError && 'statusCode' in err && 'message' in err) {
      return ApiResponse.error(res, (err as any).statusCode, (err as any).message);
    }
    next(err);
  }
}; 