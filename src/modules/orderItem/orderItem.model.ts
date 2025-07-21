/**
 * @openapi
 * components:
 *   schemas:
 *     OrderItem:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         order_id:
 *           type: string
 *           format: uuid
 *         name:
 *           type: string
 *         quantity:
 *           type: integer
 *         price:
 *           type: number
 *           format: float
 *         notes:
 *           type: string
 *           nullable: true
 *         chef_id:
 *           type: string
 *           format: uuid
 *           nullable: true
 *         prep_time:
 *           type: integer
 */
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../database/connection";

interface OrderItemAttributes {
  id: string;
  order_id: string;
  name: string;
  quantity: number;
  price: number;
  notes?: string | null;
  chef_id?: string | null;
  prep_time: number;
}

interface OrderItemCreationAttributes
  extends Optional<OrderItemAttributes, "id" | "notes" | "chef_id"> {}

class OrderItem
  extends Model<OrderItemAttributes, OrderItemCreationAttributes>
  implements OrderItemAttributes
{
  public id!: string;
  public order_id!: string;
  public name!: string;
  public quantity!: number;
  public price!: number;
  public notes?: string | null;
  public chef_id?: string | null;
  public prep_time!: number;
}

OrderItem.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    order_id: { type: DataTypes.UUID, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    price: { type: DataTypes.DECIMAL, allowNull: false },
    notes: { type: DataTypes.STRING, allowNull: true },
    chef_id: { type: DataTypes.UUID, allowNull: true },
    prep_time: { type: DataTypes.INTEGER, allowNull: false },
  },
  { sequelize, tableName: "order_items", timestamps: false }
);

export default OrderItem;
