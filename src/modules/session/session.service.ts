import { SessionRepository } from './session.repository';

export class SessionService {
  private sessionRepo = new SessionRepository();

  async getAllSessions() {
    return this.sessionRepo.listSessions();
  }

  async createSession(data: {
    user_id: string;
    token: string;
    device_info: string;
    created_at?: Date;
    expires_at: Date;
  }) {
    return this.sessionRepo.createSession(data);
  }
}

export default new SessionService(); 