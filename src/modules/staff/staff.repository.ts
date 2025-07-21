import Staff, { StaffRole, StaffStatus } from './staff.model';

interface CreateStaffDTO {
  user_id: string;
  restaurant_id: string;
  role: StaffRole;
  name: string;
  email: string;
  phone: string;
  status: StaffStatus;
  assigned_floor?: string | null;
  last_login?: Date | null;
}

export class StaffRepository {
  async createStaff(data: CreateStaffDTO) {
    return Staff.create(data);
  }

  async findStaffById(id: string) {
    return Staff.findByPk(id);
  }

  async findStaffByEmail(email: string) {
    return Staff.findOne({ where: { email } });
  }

  async updateStaff(id: string, updates: Partial<CreateStaffDTO>) {
    return Staff.update(updates, { where: { id } });
  }

  async deleteStaff(id: string) {
    return Staff.destroy({ where: { id } });
  }

  async listStaff(filter: Partial<CreateStaffDTO> = {}) {
    return Staff.findAll({ where: filter });
  }
} 