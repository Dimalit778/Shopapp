import express from 'express';
import { getAllProducts, getProduct } from '../controllers/productsCon.js';

const router = express.Router();

router.get('/allProducts', getAllProducts);
router.get('/id/:id', getProduct);

export default router;
