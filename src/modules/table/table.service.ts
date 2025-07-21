import { TableRepository } from './table.repository';

export class TableService {
  private tableRepo = new TableRepository();

  async getAllTables() {
    return this.tableRepo.listTables();
  }

  async createTable(data: {
    restaurant_id: string;
    floor_id: string;
    label: string;
    seats: number;
    status: 'vacant' | 'occupied' | 'reserved' | 'needs_cleaning';
    x: number;
    y: number;
    current_order?: string | null;
    assigned_waiter?: string | null;
    last_cleaned?: Date;
  }) {
    return this.tableRepo.createTable(data);
  }
}

export default new TableService(); 