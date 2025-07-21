import Restaurant from './restaurant.model';

interface CreateRestaurantDTO {
  name: string;
  address: string;
  phone: string;
  email: string;
  currency: string;
  timezone: string;
  status: 'active' | 'trial' | 'suspended';
  plan: string;
  admin_id: string;
  revenue?: number;
}

export class RestaurantRepository {
  async createRestaurant(data: CreateRestaurantDTO) {
    return Restaurant.create(data);
  }

  async findRestaurantById(id: string) {
    return Restaurant.findByPk(id);
  }

  async findRestaurantByName(name: string) {
    return Restaurant.findOne({ where: { name } });
  }

  async updateRestaurant(id: string, updates: Partial<CreateRestaurantDTO>) {
    return Restaurant.update(updates, { where: { id } });
  }

  async deleteRestaurant(id: string) {
    return Restaurant.destroy({ where: { id } });
  }

  async listRestaurants(filter: Partial<CreateRestaurantDTO> = {}) {
    return Restaurant.findAll({ where: filter });
  }
} 