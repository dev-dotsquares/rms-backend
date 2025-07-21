import Order from '../order/order.model';
import User from '../user/user.model';
import Bill from '../bill/bill.model';

export interface DashboardData {
  metrics: object;
  quickActions: object[];
  alerts: object[];
}

export const getDashboardDataByRole = async (role: string): Promise<DashboardData> => {
  // Metrics: total orders and total revenue
  const ordersCount = await Order.count();
  const totalRevenue = await Order.sum('total');

  // Quick actions: vary by role (example)
  let quickActions: object[] = [
    { label: 'New Order', action: '/orders/new' },
    { label: 'View Reports', action: '/reports' }
  ];
  if (role === 'admin') {
    quickActions.push({ label: 'Manage Users', action: '/users' });
  }

  // Alerts: e.g., count of pending bills
  const pendingBills = await Bill.count({ where: { payment_status: 'pending' } });
  const alerts: object[] = [];
  if (pendingBills > 0) {
    alerts.push({ type: 'warning', message: `${pendingBills} bill(s) pending payment.` });
  } else {
    alerts.push({ type: 'info', message: 'System running smoothly.' });
  }

  return {
    metrics: { orders: ordersCount, revenue: totalRevenue },
    quickActions,
    alerts
  };
}; 