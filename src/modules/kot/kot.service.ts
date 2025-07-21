import { KotRepository } from './kot.repository';

export class KotService {
  private kotRepo = new KotRepository();

  async getAllKots() {
    return this.kotRepo.listKots();
  }

  async createKot(data: {
    order_id: string;
    table_id: string;
    items: object;
    status: 'pending' | 'in_prep' | 'ready';
    estimated_time: number;
  }) {
    return this.kotRepo.createKot(data);
  }
}

export default new KotService(); 