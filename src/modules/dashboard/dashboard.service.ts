import { getDashboardDataByRole } from './dashboard.repository';

export const getDashboard = async (role: string) => {
  // Add business logic if needed
  return getDashboardDataByRole(role);
}; 