import mongoose from "mongoose";

interface ILoansSchema {
  name: String;
  logo: String;
  amount: String;
  terms: String;
  min_amount: String;
  max_amount: String;
  min_years: String;
  max_years: String;
  apr: Number;
  site: String;
  eligibility: string[];
}

const LoansSchema = new mongoose.Schema<ILoansSchema>({
  name: String,
  logo: String,
  amount: String,
  terms: String,
  min_amount: String,
  max_amount: String,
  min_years: String,
  max_years: String,
  apr: Number,
  site: String,
  eligibility: [String],
});

export default mongoose.model("Loans", LoansSchema )