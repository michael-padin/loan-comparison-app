import express, { Request, Response } from "express";
import { addAllLoans, getAllLoans } from '../controller/loans';
const router  = express.Router();


router.get("/all-loans", getAllLoans)

router.post("/all-loans", addAllLoans)


export default router;

