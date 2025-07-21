import Table, { TableStatus } from './table.model';

interface CreateTableDTO {
  restaurant_id: string;
  floor_id: string;
  label: string;
  seats: number;
  status: TableStatus;
  x: number;
  y: number;
  current_order?: string | null;
  assigned_waiter?: string | null;
  last_cleaned?: Date;
}

export class TableRepository {
  async createTable(data: CreateTableDTO) {
    return Table.create(data);
  }

  async findTableById(id: string) {
    return Table.findByPk(id);
  }

  async updateTable(id: string, updates: Partial<CreateTableDTO>) {
    return Table.update(updates, { where: { id } });
  }

  async deleteTable(id: string) {
    return Table.destroy({ where: { id } });
  }

  async listTables(filter: Partial<CreateTableDTO> = {}) {
    return Table.findAll({ where: filter });
  }
} 