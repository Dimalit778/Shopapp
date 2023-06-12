import express from 'express';
import { getAllProducts } from '../controllers/productsCon.js';

const router = express.Router();

router.get('/allProducts', getAllProducts);

export default router;
