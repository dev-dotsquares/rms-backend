import { DataTypes, Model } from 'sequelize';
import sequelize from "../../database/connection";

interface UserRoleAttributes {
  user_id: string;
  role_id: string;
}

class UserRole extends Model<UserRoleAttributes> implements UserRoleAttributes {
  public user_id!: string;
  public role_id!: string;
}

UserRole.init(
  {
    user_id: { type: DataTypes.UUID, allowNull: false, primaryKey: true },
    role_id: { type: DataTypes.UUID, allowNull: false, primaryKey: true },
  },
  { sequelize, tableName: 'user_roles', timestamps: false }
);

export default UserRole; 