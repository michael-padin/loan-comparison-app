import { Request, Response } from "express";
import Loans from '../models/Loans';

export const addAllLoans = async (req: Request, res: Response) => {
  const response = await Loans.create(req.body);
  res.status(200).json(response);
};

export const getAllLoans = async (req: Request, res: Response) => {
  try {
    const response = await Loans.find();
    if (response.length === 0) return res.status(404).json({message: "Loans not found"});
    res.status(200).json(response);
  } catch (err) {
      console.log(err);
  }
};
