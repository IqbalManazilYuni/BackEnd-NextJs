import express from 'express';
import { EditPostingan, GetAllPostingan, GetPostinganById, HapusDataPostingan, TambahPostingan } from '../controllers/postingancontrollers.js';

const router = express.Router();

router.post('/create-post', TambahPostingan)
router.get('/post', GetAllPostingan)
router.get('/post/:id', GetPostinganById)
router.put('/edit-post', EditPostingan)
router.delete('/hapus-post/:id', HapusDataPostingan)


export default router;