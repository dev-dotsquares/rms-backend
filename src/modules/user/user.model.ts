/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         name:
 *           type: string
 *         email:
 *           type: string
 *           format: email
 *         password_hash:
 *           type: string
 *           description: Hashed user password
 *         role:
 *           type: string
 *         restaurant_id:
 *           type: string
 *           format: uuid
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

interface UserAttributes {
  id: string;
  name: string;
  email: string;
  password_hash: string;
  role: string;
  restaurant_id?: string | null;
  created_at: Date;
  updated_at: Date;
  // Add this for TypeScript compatibility
  password?: string;
}

interface UserCreationAttributes
  extends Optional<
    UserAttributes,
    "id" | "restaurant_id" | "created_at" | "updated_at"
  > {}

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: string;
  public name!: string;
  public email!: string;
  public password_hash!: string;
  public role!: string;
  public restaurant_id?: string | null;
  public created_at!: Date;
  public updated_at!: Date;
  // Add this for TypeScript compatibility
  public password?: string;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password_hash: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.STRING, allowNull: false },
    restaurant_id: { type: DataTypes.UUID, allowNull: true },
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
  { sequelize, tableName: "users", timestamps: false }
);

export default User;
