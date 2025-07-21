/**
 * @openapi
 * components:
 *   schemas:
 *     Table:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         restaurant_id:
 *           type: string
 *           format: uuid
 *         floor_id:
 *           type: string
 *           format: uuid
 *         label:
 *           type: string
 *         seats:
 *           type: integer
 *         status:
 *           type: string
 *           enum: [vacant, occupied, reserved, needs_cleaning]
 *         x:
 *           type: integer
 *         y:
 *           type: integer
 *         current_order:
 *           type: string
 *           format: uuid
 *           nullable: true
 *         assigned_waiter:
 *           type: string
 *           format: uuid
 *           nullable: true
 *         last_cleaned:
 *           type: string
 *           format: date-time
 *         created_at:
 *           type: string
 *           format: date-time
 *         updated_at:
 *           type: string
 *           format: date-time
 */
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../database/connection";

export type TableStatus = "vacant" | "occupied" | "reserved" | "needs_cleaning";

interface TableAttributes {
  id: string;
  restaurant_id: string;
  floor_id: string;
  label: string;
  seats: number;
  status: TableStatus;
  x: number;
  y: number;
  current_order?: string | null;
  assigned_waiter?: string | null;
  last_cleaned: Date;
  created_at: Date;
  updated_at: Date;
}

interface TableCreationAttributes
  extends Optional<
    TableAttributes,
    | "id"
    | "current_order"
    | "assigned_waiter"
    | "last_cleaned"
    | "created_at"
    | "updated_at"
  > {}

class Table
  extends Model<TableAttributes, TableCreationAttributes>
  implements TableAttributes
{
  public id!: string;
  public restaurant_id!: string;
  public floor_id!: string;
  public label!: string;
  public seats!: number;
  public status!: TableStatus;
  public x!: number;
  public y!: number;
  public current_order?: string | null;
  public assigned_waiter?: string | null;
  public last_cleaned!: Date;
  public created_at!: Date;
  public updated_at!: Date;
}

Table.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    restaurant_id: { type: DataTypes.UUID, allowNull: false },
    floor_id: { type: DataTypes.UUID, allowNull: false },
    label: { type: DataTypes.STRING, allowNull: false },
    seats: { type: DataTypes.INTEGER, allowNull: false },
    status: {
      type: DataTypes.ENUM("vacant", "occupied", "reserved", "needs_cleaning"),
      allowNull: false,
    },
    x: { type: DataTypes.INTEGER, allowNull: false },
    y: { type: DataTypes.INTEGER, allowNull: false },
    current_order: { type: DataTypes.UUID, allowNull: true },
    assigned_waiter: { type: DataTypes.UUID, allowNull: true },
    last_cleaned: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
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
  { sequelize, tableName: "tables", timestamps: false }
);

export default Table;
