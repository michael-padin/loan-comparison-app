import React, { memo, useContext} from "react";
import Banks from "./Banks";
import { Bank } from "../types";
import { StateContext } from "../context/StateContext";

const Tables = () => {
  const stateContext = useContext(StateContext);
  const { setFormData, formData, filteredBanks } = stateContext;
  const { amount, selectedTerm } = formData;

  const handleChange = (e: React.BaseSyntheticEvent) => {
    const name = e.target.name;
    let value = e.target.value;

    setFormData((prevValue: Bank) => ({ ...prevValue, [name]: value }));
  };

  return (
    <div className="max-w-[950px] flex flex-col m-auto pt-10">
      <div className="w-full flex gap-2 mb-4">
        <div className="flex-1 border-[1px] rounded-md border-[#614b79]  relative">
          <strong className="absolute top-[-11px] left-[10px] bg-white px-1">
            I want to borrow
          </strong>
          <input
            min={1}
            value={amount}
            name="amount"
            type="number"
            className="px-3 py-4 rounded-md w-full outline-none appearance-none"
            onChange={handleChange}
          />
        </div>
        <div className="flex-1 border-[1px] px-3 border-[#614b79] rounded-md relative">
          <strong className="absolute top-[-11px] left-[10px] bg-white px-1">
            Over how long?
          </strong>
          <select
            className="w-full h-full outline-none"
            name="selectedTerm"
            onChange={handleChange}
            defaultValue={selectedTerm}
          >
            {[0, 1, 2, 3, 4, 5, 6, 7].map((item, idx) => (
              <option value={item === 0 ? 3 : item} key={idx}>
                {`${
                  item === 0
                    ? "All"
                    : item === 1
                    ? `${item} year`
                    : `${item} years`
                }`}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-[1rem] relative ">
        <Banks />
      </div>
    </div>
  );
};

export default memo(Tables);
