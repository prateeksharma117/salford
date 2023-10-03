import express from 'express';
import { createResidency, getAllResidencies, getResidency } from '../controller/residencyControl.js';
import jwtCheck from '../config/auth0config.js';
const router=express.Router();

router.post('/create',jwtCheck,createResidency)
router.get('/allResidency',getAllResidencies)
router.get('/:id',getResidency)

export {router as residencyRoute}