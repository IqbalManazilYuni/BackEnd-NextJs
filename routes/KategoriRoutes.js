import express from 'express';
import { EditKategori, getAllKategori, HapusDataKategori, TambahKategori } from '../controllers/kategoricontrollers.js';

const router = express.Router();

router.post('/create-kategori', TambahKategori)
router.put('/edit-kategori', EditKategori)
router.get('/kategori', getAllKategori)
router.delete('/hapus-kategori/:id', HapusDataKategori)

export default router;