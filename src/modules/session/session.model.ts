/**
 * @openapi
 * components:
 *   schemas:
 *     Session:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         user_id:
 *           type: string
 *           format: uuid
 *         token:
 *           type: string
 *         device_info:
 *           type: string
 *         created_at:
 *           type: string
 *           format: date-time
 *         expires_at:
 *           type: string
 *           format: date-time
 */
import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../database/connection";

interface SessionAttributes {
  id: string;
  user_id: string;
  token: string;
  device_info: string;
  created_at: Date;
  expires_at: Date;
}

interface SessionCreationAttributes extends Optional<SessionAttributes, "id"> {}

class Session
  extends Model<SessionAttributes, SessionCreationAttributes>
  implements SessionAttributes
{
  public id!: string;
  public user_id!: string;
  public token!: string;
  public device_info!: string;
  public created_at!: Date;
  public expires_at!: Date;
}

Session.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: { type: DataTypes.UUID, allowNull: false },
    token: { type: DataTypes.STRING, allowNull: false, unique: true },
    device_info: { type: DataTypes.STRING, allowNull: false },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    expires_at: { type: DataTypes.DATE, allowNull: false },
  },
  { sequelize, tableName: "sessions", timestamps: false }
);

export default Session;
