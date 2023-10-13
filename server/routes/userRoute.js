import express from 'express';
import { getallBookings, bookVisit, creatingUser, cancelBookings, favResidency, allFavResidency } from '../controller/userControl.js';
import jwtCheck from "../config/auth0config.js"
const router=express.Router();

router.post("/register",jwtCheck,creatingUser)
router.post("/bookVisit/:id",jwtCheck,bookVisit)
router.post("/allBookings",getallBookings) 
router.post("/cancelBooking/:id",jwtCheck,cancelBookings) 
router.post("/favResidency/:rid",jwtCheck,favResidency) 
router.post("/allFavResidency",allFavResidency) 
export {router as userRoute}