export interface Bank {
  amount: number;
  selectedTerm: number;
}

export interface IBank {
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
  interest?: number;
  pmt?: number;
  monthlyPayment?: number;
  costOfCredit?: number;
  totalRepayable?: number;
  text?: string;
}

export interface IBankCard  {
  bank: IBank;
}