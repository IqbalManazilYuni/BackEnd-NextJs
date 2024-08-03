import Admin from "./models/admin.js"
import Postingan from "./models/postingan.js"
import Kategori from "./models/kategori.js";

export const RelasiUser = async () => {
    Admin.hasMany(Postingan, { foreignKey: "idAdmin" });
    Postingan.belongsTo(Admin, { foreignKey: "idAdmin" });
}

export const RelasiPostingan = async () => {
    Kategori.hasMany(Postingan, { foreignKey: "idKategori" })
    Postingan.belongsTo(Kategori, { foreignKey: "idKategori" });
}