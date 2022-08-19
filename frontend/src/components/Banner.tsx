import React from "react";

const Banner = () => {
  return (
    <div className="max-w-[1140px] m-auto h-full pt-[70px]">
      <div className="flex items-center justify-center mt-[50px] h-full">
        <div className="flex flex-col h-full text-center">
          <h1 className="text-[42px] font-[900] text-[#61487a]">
            Compare Top Loans
          </h1>
          <p className="mt-[10px] text-[1.5rem] text-[#232323] ">
            Impartial credit card comparison
          </p>
          <div className="w-full h-full flex mt-[20px]">
            <ul className="flex flex-wrap gap-4 justify-center h-full">
              {["all loans", "personal loans", "Bad Credit Loans"].map(
                (item, idx) => (
                  <li
                    key={idx}
                    className="text-[#232323] border-[1px] rounded-md border-[#61487a] px-[20px] leading-[50px] capitalize font-semibold cursor-pointer"
                  >
                    <a href="/" className="text-[#614b79]">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
