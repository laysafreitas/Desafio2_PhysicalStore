import express from 'express';
import { GetLocation } from './Service/GetLocation';

const router = express.Router();

router.get('/cep/:cep', GetLocation);

export default router;


