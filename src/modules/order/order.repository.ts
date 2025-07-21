import Order, { OrderType, OrderStatus } from './order.model';

interface CreateOrderDTO {
  restaurant_id: string;
  table_id?: string | null;
  floor_id: string;
  type: OrderType;
  status: OrderStatus;
  total: number;
  waiter_id: string;
  customer_name?: string | null;
  customer_phone?: string | null;
  notes?: string | null;
}

export class OrderRepository {
  async createOrder(data: CreateOrderDTO) {
    return Order.create(data);
  }

  async findOrderById(id: string) {
    return Order.findByPk(id);
  }

  async updateOrder(id: string, updates: Partial<CreateOrderDTO>) {
    return Order.update(updates, { where: { id } });
  }

  async deleteOrder(id: string) {
    return Order.destroy({ where: { id } });
  }

  async listOrders(filter: Partial<CreateOrderDTO> = {}) {
    return Order.findAll({ where: filter });
  }
} 