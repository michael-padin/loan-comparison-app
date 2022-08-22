import React, { createContext, useState, useEffect} from "react";
import { Bank, IBank } from "../types";
import { StateContextProviderProps } from "./StateContext.d";
interface IChildren {
  children: React.ReactNode;
}

export const StateContext = createContext<StateContextProviderProps>({} as StateContextProviderProps);

export const StateContextProvider = ({ children }: IChildren) => {
  const [formData, setFormData] = useState<Bank>({
    amount: 7500,
    selectedTerm: 4,
  });
  const [banks, setBanks] = useState<IBank[]>([]);
  const [filteredBanks, setFilteredBanks] = useState<IBank[]>([]);
  const [loanType, setLoanType] = useState<string>("all");

  const { amount, selectedTerm } = formData;

  const monthlyPayment = (amount: number, pmt: number) => {
    const monthly = Math.round(amount * pmt * 100) / 100;
    return parseFloat(monthly.toFixed(2));
  };

  const costOfCredit = (amount: number, years: number, pmt: number) => {
    const total = (Math.round(amount * pmt * 100) / 100) * (years * 12);
    return parseFloat((total - amount).toFixed(2));
  };

  const totalRepayable = (amount: number, years: number, pmt: number) => {
    const payment = Math.round(amount * pmt * 100) / 100;
    return parseFloat((payment * (years * 12)).toFixed(2));
  };

  const addText = (
    years: number,
    apr: number,
    monthlyPayment: number,
    totalRepayable: number
  ) => {
    return `Representative example: If you borrow £${amount}, you would make
    ${years} monthly repayments of £${monthlyPayment}. The total amount repayable is £${totalRepayable}. Representative
   ${apr.toFixed(2)}% APR`;
  };

  useEffect(() => {
       banks.map((bank: IBank) => {
        const getAmount = amount ? amount : bank.min_amount;
        const years = selectedTerm ? selectedTerm : bank.max_years;
        if (
          (amount > 0 &&
            amount >= bank.min_amount &&
            amount <= bank.max_amount) ||
          !amount && typeof amount !== 'string'        ) {
          if (
            !selectedTerm ||
            (selectedTerm >= bank.min_years && selectedTerm <= bank.max_years)
          ) {
            bank.interest = Math.pow(bank.apr / 100 + 1, 1 / 12) - 1; 
            bank.pmt =
              bank.interest +
              bank.interest / (Math.pow(1 + bank.interest, years * 12) - 1);
            bank.monthlyPayment = monthlyPayment(getAmount, bank.pmt);
            bank.costOfCredit = costOfCredit(getAmount, years, bank.pmt);
            bank.totalRepayable = totalRepayable(getAmount, years, bank.pmt);
            bank.text = addText(
              years,
              bank.apr,
              bank.monthlyPayment,
              bank.totalRepayable
            );
            setFilteredBanks((prev) => [...prev, bank]);
          }
        }
      });
      return () => {
        setFilteredBanks([]);
      }
  }, [amount, banks, selectedTerm]);

  return (
    <StateContext.Provider
      value={{
        formData,
        filteredBanks,
        setFormData,
        setFilteredBanks,
        setBanks,
        banks,
        loanType,
        setLoanType,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
