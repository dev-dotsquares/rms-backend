import OrderItem from './orderItem.model';

interface CreateOrderItemDTO {
  order_id: string;
  name: string;
  quantity: number;
  price: number;
  notes?: string | null;
  chef_id?: string | null;
  prep_time: number;
}

export class OrderItemRepository {
  async createOrderItem(data: CreateOrderItemDTO) {
    return OrderItem.create(data);
  }

  async findOrderItemById(id: string) {
    return OrderItem.findByPk(id);
  }

  async updateOrderItem(id: string, updates: Partial<CreateOrderItemDTO>) {
    return OrderItem.update(updates, { where: { id } });
  }

  async deleteOrderItem(id: string) {
    return OrderItem.destroy({ where: { id } });
  }

  async listOrderItems(filter: Partial<CreateOrderItemDTO> = {}) {
    return OrderItem.findAll({ where: filter });
  }
} 