import { RestaurantRepository } from './restaurant.repository';

export class RestaurantService {
  private restaurantRepo = new RestaurantRepository();

  async getAllRestaurants() {
    return this.restaurantRepo.listRestaurants();
  }

  async createRestaurant(data: {
    name: string;
    address: string;
    phone: string;
    email: string;
    currency: string;
    timezone: string;
    status: 'active' | 'trial' | 'suspended';
    plan: string;
    admin_id: string;
    revenue?: string | number;
  }) {
    const revenue = data.revenue !== undefined ? Number(data.revenue) : undefined;
    return this.restaurantRepo.createRestaurant({ ...data, revenue });
  }
}

export default new RestaurantService(); 