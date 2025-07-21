import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../../database/connection';

export type FloorStatus = 'active' | 'inactive';

interface FloorAttributes {
  id: string;
  restaurant_id: string;
  name: string;
  display_name: string;
  description: string;
  capacity: number;
  status: FloorStatus;
  created_at: Date;
  updated_at: Date;
}

interface FloorCreationAttributes extends Optional<FloorAttributes, 'id' | 'created_at' | 'updated_at'> {}

class Floor extends Model<FloorAttributes, FloorCreationAttributes> implements FloorAttributes {
  public id!: string;
  public restaurant_id!: string;
  public name!: string;
  public display_name!: string;
  public description!: string;
  public capacity!: number;
  public status!: FloorStatus;
  public created_at!: Date;
  public updated_at!: Date;
}

Floor.init(
  {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    restaurant_id: { type: DataTypes.UUID, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    display_name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    capacity: { type: DataTypes.INTEGER, allowNull: false },
    status: { type: DataTypes.ENUM('active', 'inactive'), allowNull: false },
    created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  },
  { sequelize, tableName: 'floors', timestamps: false }
);

export default Floor; 