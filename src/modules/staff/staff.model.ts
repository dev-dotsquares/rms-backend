import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from "../../database/connection";

export type StaffRole = 'waiter' | 'kitchen_manager' | 'admin';
export type StaffStatus = 'active' | 'inactive' | 'pending';

interface StaffAttributes {
  id: string;
  user_id: string;
  restaurant_id: string;
  role: StaffRole;
  name: string;
  email: string;
  phone: string;
  status: StaffStatus;
  assigned_floor?: string | null;
  last_login?: Date | null;
  created_at: Date;
  updated_at: Date;
}

interface StaffCreationAttributes extends Optional<StaffAttributes, 'id' | 'assigned_floor' | 'last_login' | 'created_at' | 'updated_at'> {}

class Staff extends Model<StaffAttributes, StaffCreationAttributes> implements StaffAttributes {
  public id!: string;
  public user_id!: string;
  public restaurant_id!: string;
  public role!: StaffRole;
  public name!: string;
  public email!: string;
  public phone!: string;
  public status!: StaffStatus;
  public assigned_floor?: string | null;
  public last_login?: Date | null;
  public created_at!: Date;
  public updated_at!: Date;
}

Staff.init(
  {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    user_id: { type: DataTypes.UUID, allowNull: false },
    restaurant_id: { type: DataTypes.UUID, allowNull: false },
    role: { type: DataTypes.ENUM('waiter', 'kitchen_manager', 'admin'), allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.ENUM('active', 'inactive', 'pending'), allowNull: false },
    assigned_floor: { type: DataTypes.UUID, allowNull: true },
    last_login: { type: DataTypes.DATE, allowNull: true },
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  },
  { sequelize, tableName: 'staff', timestamps: false }
);

export default Staff; 