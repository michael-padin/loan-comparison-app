import React, { useEffect } from "react";
import BankCard from "./BankCard";
import axios from "axios";

const Tables = () => {
  const detData = async () => {
    const response = await axios.get("https://www.upmoney.co.uk/js/loans.json");
    console.log(response);
  };

  useEffect(() => {
    detData();
  }, []);

  return (
    <div className="max-w-[950px] flex flex-col m-auto pt-10">
      <div className="w-full flex gap-2 mb-4">
        <div className="flex-1 border-[1px] rounded-md border-[#614b79] ">
          <input
            type="number"
            className="px-3 py-4 rounded-md w-full outline-none "
          />
        </div>
        <div className="flex-1 border-[1px] px-3 border-[#614b79] rounded-md">
          <select className="w-full h-full outline-none" name="" id="">
            {[
              "All",
              "1 year",
              "2 years",
              "3 years",
              "4 years",
              "5 years",
              "6 years",
              "7 years",
            ].map((item, idx) => (
              <option value={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-[1rem]">
        <BankCard />
      </div>
    </div>
  );
};

export default Tables;
