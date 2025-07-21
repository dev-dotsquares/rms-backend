import { OrderRepository } from './order.repository';

export class OrderService {
  private orderRepo = new OrderRepository();

  async getAllOrders() {
    return this.orderRepo.listOrders();
  }

  async createOrder(data: {
    restaurant_id: string;
    table_id?: string | null;
    floor_id: string;
    type: 'dine_in' | 'takeaway';
    status: 'pending' | 'in_progress' | 'ready' | 'served' | 'paid';
    total: number;
    waiter_id: string;
    customer_name?: string | null;
    customer_phone?: string | null;
    notes?: string | null;
  }) {
    return this.orderRepo.createOrder(data);
  }
}

export default new OrderService(); 