import Kategori from "../models/kategori.js"
import Postingan from "../models/postingan.js"

export const TambahKategori = async (req, res) => {
    const { name } = req.body
    try {
        const findkategori = await Kategori.findOne({ where: { kategori: name } })
        if (findkategori) {
            return res.status(400).json({ code: 400, status: "error", message: "Kategori Sudah Ada" })
        }
        await Kategori.create({
            kategori: name
        })
        return res.status(201).json({ code: 201, status: "success", message: "Kategori Ditambahkan" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ code: 500, status: "error", message: "Internal Server Error" })
    }
}


export const getAllKategori = async (req, res) => {
    try {
        const data = await Kategori.findAll()
        if (data.length === 0) {
            return res.status(400).json({ code: 400, message: "Kategori Kosong" })
        }
        return res.status(200).json({ code: 200, status: "success", data: data })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ code: 500, status: "error", message: "Internal Server Error" })
    }
}

export const EditKategori = async (req, res) => {
    const { id, kategori } = req.body
    try {
        const datakategori = await Kategori.findByPk(id);
        datakategori.kategori = kategori
        const postingan = await Postingan.findOne({ where: { idKategori: id } });
        postingan.kategori_postingan = kategori
        await postingan.save();
        await datakategori.save();
        return res.status(200).json({ code: 200, status: "success", message: "Kategori Berhasil Diperbarui" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ code: 500, status: "error", message: "Internal Server Error" })
    }
}

export const HapusDataKategori = async (req, res) => {
    const { id } = req.params
    try {
        const findKategori = await Kategori.findByPk(id)
        await findKategori.destroy()
        return res.status(200).json({ code: 200, status: "success", message: "Data Berhasil Dihapus" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ code: 500, status: "error", message: "Internal Server Error" })
    }
}