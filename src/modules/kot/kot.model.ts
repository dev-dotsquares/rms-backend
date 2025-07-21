/**
 * @openapi
 * components:
 *   schemas:
 *     Kot:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         order_id:
 *           type: string
 *           format: uuid
 *         table_id:
 *           type: string
 *           format: uuid
 *         items:
 *           type: object
 *         status:
 *           type: string
 *           enum: [pending, in_prep, ready]
 *         created_at:
 *           type: string
 *           format: date-time
 *         estimated_time:
 *           type: integer
 */
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../database/connection";

export type KotStatus = "pending" | "in_prep" | "ready";

interface KotAttributes {
  id: string;
  order_id: string;
  table_id: string;
  items: object;
  status: KotStatus;
  created_at: Date;
  estimated_time: number;
}

interface KotCreationAttributes
  extends Optional<KotAttributes, "id" | "created_at"> {}

class Kot
  extends Model<KotAttributes, KotCreationAttributes>
  implements KotAttributes
{
  public id!: string;
  public order_id!: string;
  public table_id!: string;
  public items!: object;
  public status!: KotStatus;
  public created_at!: Date;
  public estimated_time!: number;
}

Kot.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    order_id: { type: DataTypes.UUID, allowNull: false },
    table_id: { type: DataTypes.UUID, allowNull: false },
    items: { type: DataTypes.JSON, allowNull: false },
    status: {
      type: DataTypes.ENUM("pending", "in_prep", "ready"),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    estimated_time: { type: DataTypes.INTEGER, allowNull: false },
  },
  { sequelize, tableName: "kot", timestamps: false }
);

export default Kot;
