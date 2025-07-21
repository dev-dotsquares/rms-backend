import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from "../../database/connection";

interface ReportAttributes {
  id: string;
  restaurant_id: string;
  type: string;
  data: object;
  generated_at: Date;
}

interface ReportCreationAttributes extends Optional<ReportAttributes, 'id'> {}

class Report extends Model<ReportAttributes, ReportCreationAttributes> implements ReportAttributes {
  public id!: string;
  public restaurant_id!: string;
  public type!: string;
  public data!: object;
  public generated_at!: Date;
}

Report.init(
  {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    restaurant_id: { type: DataTypes.UUID, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    data: { type: DataTypes.JSON, allowNull: false },
    generated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
  },
  { sequelize, tableName: 'reports', timestamps: false }
);

export default Report; 