import { Request, Response } from 'express';
import SessionService from './session.service';
import { ApiResponse } from '../../core/ApiResponse';

export class SessionController {
  async getAllSessions(req: Request, res: Response) {
    try {
      const sessions = await SessionService.getAllSessions();
      return ApiResponse.success(res, { sessions }, 'Sessions fetched successfully');
    } catch (err) {
      return ApiResponse.error(res, 'Failed to fetch sessions', 500, err);
    }
  }

  async createSession(req: Request, res: Response) {
    try {
      const session = await SessionService.createSession(req.body);
      return ApiResponse.success(res, { session }, 'Session created successfully', 201);
    } catch (err) {
      return ApiResponse.error(res, 'Failed to create session', 500, err);
    }
  }
}

export default new SessionController(); 