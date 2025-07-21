import Floor, { FloorStatus } from './floor.model';

interface CreateFloorDTO {
  restaurant_id: string;
  name: string;
  display_name: string;
  description: string;
  capacity: number;
  status: FloorStatus;
}

export class FloorRepository {
  async createFloor(data: CreateFloorDTO) {
    return Floor.create(data);
  }

  async findFloorById(id: string) {
    return Floor.findByPk(id);
  }

  async updateFloor(id: string, updates: Partial<CreateFloorDTO>) {
    return Floor.update(updates, { where: { id } });
  }

  async deleteFloor(id: string) {
    return Floor.destroy({ where: { id } });
  }

  async listFloors(filter: Partial<CreateFloorDTO> = {}) {
    return Floor.findAll({ where: filter });
  }
} 