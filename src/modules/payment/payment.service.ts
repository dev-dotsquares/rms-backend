import { PaymentRepository } from './payment.repository';

export class PaymentService {
  private paymentRepo = new PaymentRepository();

  async getAllPayments() {
    return this.paymentRepo.listPayments();
  }

  async createPayment(data: {
    bill_id: string;
    amount: number;
    method: string;
    status: 'pending' | 'completed' | 'failed';
    transaction_id?: string | null;
  }) {
    return this.paymentRepo.createPayment(data);
  }
}

export default new PaymentService(); 