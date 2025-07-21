import { ReportRepository } from './report.repository';

export class ReportService {
  private reportRepo = new ReportRepository();

  async getAllReports() {
    return this.reportRepo.listReports();
  }

  async createReport(data: {
    restaurant_id: string;
    type: string;
    data: object;
    generated_at?: Date;
  }) {
    return this.reportRepo.createReport(data);
  }
}

export default new ReportService(); 