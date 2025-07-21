import Session from './session.model';

interface CreateSessionDTO {
  user_id: string;
  token: string;
  device_info: string;
  created_at: Date;
  expires_at: Date;
}

export class SessionRepository {
  async createSession(data: Omit<CreateSessionDTO, 'created_at'> & { created_at?: Date }) {
    return Session.create({
      ...data,
      created_at: data.created_at ?? new Date(),
    });
  }

  async findSessionByToken(token: string) {
    return Session.findOne({ where: { token } });
  }

  async findSessionsByUser(user_id: string) {
    return Session.findAll({ where: { user_id } });
  }

  async deleteSession(id: string) {
    return Session.destroy({ where: { id } });
  }

  async deleteSessionsByUser(user_id: string) {
    return Session.destroy({ where: { user_id } });
  }

  async listSessions(filter: Partial<CreateSessionDTO> = {}) {
    return Session.findAll({ where: filter });
  }
} 