import { OrderItemRepository } from './orderItem.repository';

export class OrderItemService {
  private orderItemRepo = new OrderItemRepository();

  async getAllOrderItems() {
    return this.orderItemRepo.listOrderItems();
  }

  async createOrderItem(data: {
    order_id: string;
    name: string;
    quantity: number;
    price: number;
    notes?: string | null;
    chef_id?: string | null;
    prep_time: number;
  }) {
    return this.orderItemRepo.createOrderItem(data);
  }
}

export default new OrderItemService(); 