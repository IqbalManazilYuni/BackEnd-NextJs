import Postingan from "../models/postingan.js"

export const TambahPostingan = async (req, res) => {
    const { idAdmin, idKategori, tanggal, judul, kategori, nama_file, rincian, deskripsi } = req.body
    try {
        const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        const monthNumber = parseInt(tanggal.split('-')[1], 10);
        const monthName = monthNames[monthNumber - 1];
        const dateParts = tanggal.split('-');
        const year = dateParts[2];
        await Postingan.create({
            judul_postingan: judul,
            tanggal_postingan: tanggal,
            bulan_postingan: monthName,
            tahun_postingan: year,
            kategori_postingan: kategori,
            idKategori: idKategori,
            idAdmin: idAdmin,
            rincian_deskripsi: rincian,
            deskripsi: deskripsi,
            nama_file_thumb: nama_file,
        })
        return res.status(201).json({ code: 201, status: "success", message: "Postingan Berhasil Ditambahkan" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ code: 500, status: "error", message: "Internal Server Error" })
    }
}

export const GetAllPostingan = async (req, res) => {
    try {
        const data = await Postingan.findAll()
        if (data.length === 0) {
            return res.status(400).json({ code: 400, message: "Postingan Kosong" })
        }
        return res.status(200).json({ code: 200, status: "success", data: data })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ code: 500, status: "error", message: "Internal Server Error" })
    }
}

export const GetPostinganById = async (req, res) => {
    const { id } = req.params
    try {
        const data = await Postingan.findOne({ where: { id: id } })
        if (!data) {
            return res.status(400).json({ code: 400, message: "Postingan Kosong" })
        }
        return res.status(200).json({ code: 200, status: "success", data: data })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ code: 500, status: "error", message: "Internal Server Error" })
    }
}

export const EditPostingan = async (req, res) => {
    const { id, idKategori, tanggal, judul, kategori, rincian, deskripsi } = req.body
    try {
        const findPostingan = await Postingan.findByPk(id);
        if (!findPostingan) {
            return res.status(400).json({ code: 400, status: 'error', message: "Postingan Tidak Ditemukan" })
        }
        const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        const monthNumber = parseInt(tanggal.split('-')[1], 10);
        const monthName = monthNames[monthNumber - 1];
        const dateParts = tanggal.split('-');
        const year = dateParts[2];
        findPostingan.judul_postingan = judul
        findPostingan.tanggal_postingan = tanggal
        findPostingan.bulan_postingan = monthName
        findPostingan.tahun_postingan = year
        findPostingan.kategori_postingan = kategori
        findPostingan.rincian_deskripsi = rincian
        findPostingan.deskripsi = deskripsi
        findPostingan.idKategori = idKategori
        await findPostingan.save()
        return res.status(201).json({ code: 201, status: "success", message: "Postingan Berhasil Diperbarui" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ code: 500, status: "error", message: "Internal Server Error" })
    }
}

export const HapusDataPostingan = async (req, res) => {
    const { id } = req.params
    try {
        const findPostingan = await Postingan.findByPk(id)
        await findPostingan.destroy()
        return res.status(200).json({ code: 200, status: "success", message: "Data Berhasil Dihapus" })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ code: 500, status: "error", message: "Internal Server Error" })
    }
}