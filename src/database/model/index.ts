// src/database/associations.ts (or model/index.ts)
import User from '../../modules/user/user.model';
import Role from '../../modules/role/role.model';
import UserRole from '../../modules/userRole/userRole.model';
import Restaurant from '../../modules/restaurant/restaurant.model';
import Session from '../../modules/session/session.model';
import Staff from '../../modules/staff/staff.model';
import Floor from '../../modules/floor/floor.model';
import Table from '../../modules/table/table.model';
import Order from '../../modules/order/order.model';
import OrderItem from '../../modules/orderItem/orderItem.model';
import Kot from '../../modules/kot/kot.model';
import Bill from '../../modules/bill/bill.model';
import Payment from '../../modules/payment/payment.model';
import Setting from '../../modules/setting/setting.model';
import Report from '../../modules/report/report.model';

// All associations here, e.g.:
User.hasMany(Session, { foreignKey: 'user_id' });
Session.belongsTo(User, { foreignKey: 'user_id' });
// ... (all other associations as in your current index.ts)

export {
  User, Role, UserRole, Restaurant, Session, Staff, Floor, Table,
  Order, OrderItem, Kot, Bill, Payment, Setting, Report
};
