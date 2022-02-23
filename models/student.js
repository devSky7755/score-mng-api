import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Students = db.define('students', {
    name: {
        type: DataTypes.STRING
    },
    score: {
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true
});

(async () => {
    await db.sync();
})();

export default Students;