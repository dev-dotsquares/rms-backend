import Payment, { PaymentStatus } from './payment.model';

interface CreatePaymentDTO {
  bill_id: string;
  amount: number;
  method: string;
  status: PaymentStatus;
  transaction_id?: string | null;
}

export class PaymentRepository {
  async createPayment(data: CreatePaymentDTO) {
    return Payment.create(data);
  }

  async findPaymentById(id: string) {
    return Payment.findByPk(id);
  }

  async findPaymentsByBillId(bill_id: string) {
    return Payment.findAll({ where: { bill_id } });
  }

  async updatePayment(id: string, updates: Partial<CreatePaymentDTO>) {
    return Payment.update(updates, { where: { id } });
  }

  async deletePayment(id: string) {
    return Payment.destroy({ where: { id } });
  }

  async listPayments(filter: Partial<CreatePaymentDTO> = {}) {
    return Payment.findAll({ where: filter });
  }
} 