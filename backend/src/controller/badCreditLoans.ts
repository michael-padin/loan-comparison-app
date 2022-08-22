import { Request, Response } from "express";
import BadCreditLoans from '../models/BadCreditLoans';

export const addBadCreditLoans = async (req: Request, res: Response) => {
  const response = await BadCreditLoans.create(req.body);
  res.status(200).json(response);
};

export const getBadCreditLoans = async (req: Request, res: Response) => {
  try {
    const response = await BadCreditLoans.find();
    if (response.length === 0)
      return res.status(404).json({ message: "Bad Credit Loans not found" });
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
  }
};
