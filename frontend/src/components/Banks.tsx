import { useEffect, useState } from "react";
import BankCard from "./BankCard";
import { Bank, IBank } from "../types";
import { dummy } from "../dummy";

const Banks = ({ amount, selectedTerm }: Bank) => {
  const [filteredBanks, setFilteredBanks] = useState<IBank[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
        dummy.map((bank: IBank) => {
          if ((amount > 0 &&  amount >= bank.min_amount &&  amount <= bank.max_amount) ||!amount) {
            if (!selectedTerm ||(selectedTerm >= bank.min_years && selectedTerm <= bank.max_years)) {
              const years = selectedTerm ? selectedTerm : bank.max_years;
              bank.interest = Math.pow(bank.apr / 100 + 1, 1 / 12) - 1;
              bank.pmt = bank.interest + bank.interest / (Math.pow(1 + bank.interest, years * 12) - 1);
              setFilteredBanks((prev) => [...prev, bank]);
            }
          }
          return timer;
        });
    }, 500);

    return () => {
      clearTimeout(timer);
      setFilteredBanks([]);
    };
  }, [selectedTerm, amount]);

  return (
    <>
      {filteredBanks.map((bank, index) => (
        <BankCard
          bank={bank}
          amount={amount}
          years={selectedTerm}
          key={index}
        />
      ))}
    </>
  );
};

export default Banks;
