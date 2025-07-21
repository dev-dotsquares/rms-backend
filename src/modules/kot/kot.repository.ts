import Kot, { KotStatus } from './kot.model';

interface CreateKotDTO {
  order_id: string;
  table_id: string;
  items: object;
  status: KotStatus;
  estimated_time: number;
}

export class KotRepository {
  async createKot(data: CreateKotDTO) {
    return Kot.create(data);
  }

  async findKotById(id: string) {
    return Kot.findByPk(id);
  }

  async updateKot(id: string, updates: Partial<CreateKotDTO>) {
    return Kot.update(updates, { where: { id } });
  }

  async deleteKot(id: string) {
    return Kot.destroy({ where: { id } });
  }

  async listKots(filter: Partial<CreateKotDTO> = {}) {
    return Kot.findAll({ where: filter });
  }
} 