import { Sequelize } from "sequelize";
import db from "../config/db.config.js";

const { DataTypes } = Sequelize;

const Kategori = db.define('Kategori', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    kategori: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: "kategori"
});

export default Kategori;