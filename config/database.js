import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from "sequelize";

const db = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_CONNECTION || "mysql"
});

export default db;