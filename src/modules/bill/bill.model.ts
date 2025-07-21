import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../database/connection";

export type PaymentStatus = "pending" | "completed" | "failed";

interface BillAttributes {
  id: string;
  order_id: string;
  total: number;
  payment_method: string;
  payment_status: PaymentStatus;
  created_at: Date;
}

interface BillCreationAttributes
  extends Optional<BillAttributes, "id" | "created_at"> {}

class Bill
  extends Model<BillAttributes, BillCreationAttributes>
  implements BillAttributes
{
  public id!: string;
  public order_id!: string;
  public total!: number;
  public payment_method!: string;
  public payment_status!: PaymentStatus;
  public created_at!: Date;
}

Bill.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    order_id: { type: DataTypes.UUID, allowNull: false },
    total: { type: DataTypes.DECIMAL, allowNull: false },
    payment_method: { type: DataTypes.STRING, allowNull: false },
    payment_status: {
      type: DataTypes.ENUM("pending", "completed", "failed"),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  { sequelize, tableName: "bills", timestamps: false }
);

export default Bill;
