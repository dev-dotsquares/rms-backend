import { StaffRepository } from './staff.repository';

export class StaffService {
  private staffRepo = new StaffRepository();

  async getAllStaff() {
    return this.staffRepo.listStaff();
  }

  async createStaff(data: {
    user_id: string;
    restaurant_id: string;
    role: 'waiter' | 'kitchen_manager' | 'admin';
    name: string;
    email: string;
    phone: string;
    status: 'active' | 'inactive' | 'pending';
    assigned_floor?: string | null;
    last_login?: Date | null;
  }) {
    return this.staffRepo.createStaff(data);
  }
}

export default new StaffService(); 