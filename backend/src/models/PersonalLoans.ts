import mongoose from "mongoose";

interface IPersonalLoansSchema {
  name: string;
  logo: string;
  amount: string;
  terms: string;
  min_amount: number;
  max_amount: number;
  min_years: number;
  max_years: number;
  apr: number;
  site: string;
  eligibility: string[]; 
}

const PersonalLoansSchema = new mongoose.Schema<IPersonalLoansSchema>({
  name: String,
  logo: String,
  amount: String,
  terms: String,
  min_amount: Number,
  max_amount: Number,
  min_years: Number,
  max_years: Number,
  apr: Number,
  site: String,
  eligibility: [String],
});

export default mongoose.model("PersonalLoans", PersonalLoansSchema )