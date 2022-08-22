import express, { Request, Response } from "express";
import { addPersonalLoans, getPersonalLoans } from '../controller/personalLoans';
const router  = express.Router();


router.get("/personal-loans", getPersonalLoans)
router.post("/personal-loans", addPersonalLoans)


export default router;

