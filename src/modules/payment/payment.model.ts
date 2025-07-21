import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from "../../database/connection";

export type PaymentStatus = 'pending' | 'completed' | 'failed';

interface PaymentAttributes {
  id: string;
  bill_id: string;
  amount: number;
  method: string;
  status: PaymentStatus;
  transaction_id?: string | null;
  created_at: Date;
}

interface PaymentCreationAttributes extends Optional<PaymentAttributes, 'id' | 'transaction_id' | 'created_at'> {}

class Payment extends Model<PaymentAttributes, PaymentCreationAttributes> implements PaymentAttributes {
  public id!: string;
  public bill_id!: string;
  public amount!: number;
  public method!: string;
  public status!: PaymentStatus;
  public transaction_id?: string | null;
  public created_at!: Date;
}

Payment.init(
  {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    bill_id: { type: DataTypes.UUID, allowNull: false },
    amount: { type: DataTypes.DECIMAL, allowNull: false },
    method: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.ENUM('pending', 'completed', 'failed'), allowNull: false },
    transaction_id: { type: DataTypes.STRING, allowNull: true },
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  },
  { sequelize, tableName: 'payments', timestamps: false }
);

export default Payment; 