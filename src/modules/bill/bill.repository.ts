import Bill, { PaymentStatus } from './bill.model';

interface CreateBillDTO {
  order_id: string;
  total: number;
  payment_method: string;
  payment_status: PaymentStatus;
}

export class BillRepository {
  async createBill(data: CreateBillDTO) {
    return Bill.create(data);
  }

  async findBillById(id: string) {
    return Bill.findByPk(id);
  }

  async findBillByOrderId(order_id: string) {
    return Bill.findOne({ where: { order_id } });
  }

  async updateBill(id: string, updates: Partial<CreateBillDTO>) {
    return Bill.update(updates, { where: { id } });
  }

  async deleteBill(id: string) {
    return Bill.destroy({ where: { id } });
  }

  async listBills(filter: Partial<CreateBillDTO> = {}) {
    return Bill.findAll({ where: filter });
  }
} 