import { Sequelize } from "sequelize";
import db from "../config/db.config.js";

const { DataTypes } = Sequelize;

const Postingan = db.define('Postingan', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    idAdmin: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    idKategori: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    },
    judul_postingan: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    nama_file_thumb: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    bulan_postingan: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tahun_postingan: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tanggal_postingan: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    kategori_postingan: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rincian_deskripsi: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    deskripsi: {
        type: DataTypes.TEXT('long'),
        allowNull: false,
    },
}, {
    tableName: "postingan"
});

export default Postingan;