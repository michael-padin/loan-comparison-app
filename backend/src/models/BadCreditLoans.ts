import mongoose from "mongoose";

interface IBadCreditLoansSchema {
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

const BadCreditLoansSchema = new mongoose.Schema<IBadCreditLoansSchema>({
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

export default mongoose.model("BadCreditLoans", BadCreditLoansSchema )