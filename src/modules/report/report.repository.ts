import Report from './report.model';

interface CreateReportDTO {
  restaurant_id: string;
  type: string;
  data: object;
  generated_at: Date;
}

export class ReportRepository {
  async createReport(data: Omit<CreateReportDTO, 'generated_at'> & { generated_at?: Date }) {
    return Report.create({
      ...data,
      generated_at: data.generated_at ?? new Date(),
    });
  }

  async findReportById(id: string) {
    return Report.findByPk(id);
  }

  async listReports(filter: Partial<CreateReportDTO> = {}) {
    return Report.findAll({ where: filter });
  }

  async deleteReport(id: string) {
    return Report.destroy({ where: { id } });
  }
} 