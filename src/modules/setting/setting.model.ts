import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from "../../database/connection";

interface SettingAttributes {
  id: string;
  restaurant_id?: string | null;
  user_id?: string | null;
  key: string;
  value: string;
  created_at: Date;
  updated_at: Date;
}

interface SettingCreationAttributes extends Optional<SettingAttributes, 'id' | 'restaurant_id' | 'user_id' | 'created_at' | 'updated_at'> {}

class Setting extends Model<SettingAttributes, SettingCreationAttributes> implements SettingAttributes {
  public id!: string;
  public restaurant_id?: string | null;
  public user_id?: string | null;
  public key!: string;
  public value!: string;
  public created_at!: Date;
  public updated_at!: Date;
}

Setting.init(
  {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    restaurant_id: { type: DataTypes.UUID, allowNull: true },
    user_id: { type: DataTypes.UUID, allowNull: true },
    key: { type: DataTypes.STRING, allowNull: false },
    value: { type: DataTypes.STRING, allowNull: false },
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  },
  { sequelize, tableName: 'settings', timestamps: false }
);

export default Setting; 