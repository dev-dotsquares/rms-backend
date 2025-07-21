import { FloorRepository } from './floor.repository';

export class FloorService {
  private floorRepo = new FloorRepository();

  async getAllFloors() {
    return this.floorRepo.listFloors();
  }

  async createFloor(data: {
    restaurant_id: string;
    name: string;
    display_name: string;
    description: string;
    capacity: number;
    status: 'active' | 'inactive';
  }) {
    return this.floorRepo.createFloor(data);
  }
}

export default new FloorService(); 