import express, { Express } from "express";
import { addBadCreditLoans, getBadCreditLoans } from "../controller/badCreditLoans";
const router = express.Router();

router.get("/bad-credit-loans", getBadCreditLoans);
router.post("/bad-credit-loans", addBadCreditLoans);

export default router;
