/**
 * @openapi
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         restaurant_id:
 *           type: string
 *           format: uuid
 *         table_id:
 *           type: string
 *           format: uuid
 *           nullable: true
 *         floor_id:
 *           type: string
 *           format: uuid
 *         type:
 *           type: string
 *           enum: [dine_in, takeaway]
 *         status:
 *           type: string
 *           enum: [pending, in_progress, ready, served, paid]
 *         total:
 *           type: number
 *           format: float
 *         waiter_id:
 *           type: string
 *           format: uuid
 *         customer_name:
 *           type: string
 *           nullable: true
 *         customer_phone:
 *           type: string
 *           nullable: true
 *         notes:
 *           type: string
 *           nullable: true
 *         created_at:
 *           type: string
 *           format: date-time
 *         updated_at:
 *           type: string
 *           format: date-time
 */
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../database/connection";

export type OrderType = "dine_in" | "takeaway";
export type OrderStatus =
  | "pending"
  | "in_progress"
  | "ready"
  | "served"
  | "paid";

interface OrderAttributes {
  id: string;
  restaurant_id: string;
  table_id?: string | null;
  floor_id: string;
  type: OrderType;
  status: OrderStatus;
  total: number;
  waiter_id: string;
  customer_name?: string | null;
  customer_phone?: string | null;
  notes?: string | null;
  created_at: Date;
  updated_at: Date;
}

interface OrderCreationAttributes
  extends Optional<
    OrderAttributes,
    | "id"
    | "table_id"
    | "customer_name"
    | "customer_phone"
    | "notes"
    | "created_at"
    | "updated_at"
  > {}

class Order
  extends Model<OrderAttributes, OrderCreationAttributes>
  implements OrderAttributes
{
  public id!: string;
  public restaurant_id!: string;
  public table_id?: string | null;
  public floor_id!: string;
  public type!: OrderType;
  public status!: OrderStatus;
  public total!: number;
  public waiter_id!: string;
  public customer_name?: string | null;
  public customer_phone?: string | null;
  public notes?: string | null;
  public created_at!: Date;
  public updated_at!: Date;
}

Order.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    restaurant_id: { type: DataTypes.UUID, allowNull: false },
    table_id: { type: DataTypes.UUID, allowNull: true },
    floor_id: { type: DataTypes.UUID, allowNull: false },
    type: { type: DataTypes.ENUM("dine_in", "takeaway"), allowNull: false },
    status: {
      type: DataTypes.ENUM("pending", "in_progress", "ready", "served", "paid"),
      allowNull: false,
    },
    total: { type: DataTypes.DECIMAL, allowNull: false },
    waiter_id: { type: DataTypes.UUID, allowNull: false },
    customer_name: { type: DataTypes.STRING, allowNull: true },
    customer_phone: { type: DataTypes.STRING, allowNull: true },
    notes: { type: DataTypes.STRING, allowNull: true },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  { sequelize, tableName: "orders", timestamps: false }
);

export default Order;
