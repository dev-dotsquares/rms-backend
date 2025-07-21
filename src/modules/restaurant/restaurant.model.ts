/**
 * @openapi
 * components:
 *   schemas:
 *     Restaurant:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         name:
 *           type: string
 *         address:
 *           type: string
 *         phone:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *         currency:
 *           type: string
 *         timezone:
 *           type: string
 *         status:
 *           type: string
 *           enum: [active, trial, suspended]
 *         plan:
 *           type: string
 *         admin_id:
 *           type: string
 *           format: uuid
 *         created_at:
 *           type: string
 *           format: date-time
 *         updated_at:
 *           type: string
 *           format: date-time
 *         revenue:
 *           type: number
 *           format: float
 */
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../database/connection";

interface RestaurantAttributes {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  currency: string;
  timezone: string;
  status: "active" | "trial" | "suspended";
  plan: string;
  admin_id: string;
  created_at: Date;
  updated_at: Date;
  revenue: number;
}

interface RestaurantCreationAttributes
  extends Optional<
    RestaurantAttributes,
    "id" | "created_at" | "updated_at" | "revenue"
  > {}

class Restaurant
  extends Model<RestaurantAttributes, RestaurantCreationAttributes>
  implements RestaurantAttributes
{
  public id!: string;
  public name!: string;
  public address!: string;
  public phone!: string;
  public email!: string;
  public currency!: string;
  public timezone!: string;
  public status!: "active" | "trial" | "suspended";
  public plan!: string;
  public admin_id!: string;
  public created_at!: Date;
  public updated_at!: Date;
  public revenue!: number;
}

Restaurant.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
    phone: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    currency: { type: DataTypes.STRING, allowNull: false },
    timezone: { type: DataTypes.STRING, allowNull: false },
    status: {
      type: DataTypes.ENUM("active", "trial", "suspended"),
      allowNull: false,
    },
    plan: { type: DataTypes.STRING, allowNull: false },
    admin_id: { type: DataTypes.UUID, allowNull: false },
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
    revenue: { type: DataTypes.DECIMAL, allowNull: false, defaultValue: 0 },
  },
  { sequelize, tableName: "restaurants", timestamps: false }
);

export default Restaurant;
