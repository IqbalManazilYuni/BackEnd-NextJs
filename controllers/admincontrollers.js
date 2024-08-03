import Admin from "../models/admin.js";
import argon2 from 'argon2';

export const TambahAdmin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const finduser = await Admin.findOne({ where: { username: username } });
        if (finduser) {
            return res.status(400).json({ code: 400, status: 'error', message: "Username Sudah Ada" });
        }
        const hashedPassword = await argon2.hash(password);
        await Admin.create({
            username,
            password: hashedPassword,
        })
        return res.status(201).json({ code: 201, status: "success", message: "Akun Berhasil Ditambahkan" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ code: 500, status: "error", message: "Internal Server Error" })
    }
}