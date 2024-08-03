import express from 'express';
import { TambahAdmin } from '../controllers/admincontrollers.js';

const router = express.Router();

router.post('/create-admin', TambahAdmin)

export default router;