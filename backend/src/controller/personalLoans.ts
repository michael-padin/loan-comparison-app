import { Request, Response } from "express";
import PersonalLoans from "../models/PersonalLoans";

export const addPersonalLoans = async (req: Request, res: Response) => {
  const response = await PersonalLoans.create(req.body);
  res.status(200).json(response);
};

export const getPersonalLoans = async (req: Request, res: Response) => {
  try {
    const response = await PersonalLoans.find();
    if (response.length === 0) return res.status(404).json({message: "Personal Loans not found"});
    res.status(200).json(response);
  } catch (err) {
      console.log(err);
  }
};
