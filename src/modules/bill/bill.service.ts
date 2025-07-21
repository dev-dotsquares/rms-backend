import { BillRepository } from './bill.repository';

export class BillService {
  private billRepo = new BillRepository();

  async getAllBills() {
    return this.billRepo.listBills();
  }

  async createBill(data: {
    order_id: string;
    total: number;
    payment_method: string;
    payment_status: 'pending' | 'completed' | 'failed';
  }) {
    return this.billRepo.createBill(data);
  }
}

export default new BillService(); 