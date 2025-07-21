import { Sequelize } from "sequelize";

console.log(
  "Connecting to DB:",
  process.env.DB_NAME,
  "as user:",
  process.env.DB_USER,
  "on host:",
  process.env.DB_HOST
);

const sequelize = new Sequelize(
  process.env.DB_NAME || "testdb",
  process.env.DB_USER || "root",
  process.env.DB_PASS || "",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: "mysql",
    logging: false,
  }
);

export default sequelize;
