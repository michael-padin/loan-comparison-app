import React from "react";

const BankCard = () => {
  return (
    <div className="h-full">
      <div className="border-[1px] rounded-md border-[#61487a]">
        <div className="text-center my-2">
          <p> Cahoot - Personal</p>
        </div>
        <div className="flex items-center justify-between p-5">
          <div className="w-[120px]">
            <img
              src="https://www.upmoney.co.uk/images/logos/cahoot.png"
              alt="sample image"
            />
          </div>
          <div className="flex flex-row text-center">
            <div className="flex flex-col py-3 px-6 border-r-[1px] border-[#61487a]">
              <span className="text-[12px]">Representative</span>
              <b className="text-[18px]">2.80% APR</b>
            </div>
            <div className="flex flex-col py-3 px-6 border-r-[1px] border-[#61487a]">
              <span className="text-[12px]">Representative</span>
              <b className="text-[18px]">2.80% APR</b>
            </div>
            <div className="flex flex-col py-3 px-6 border-r-[1px] border-[#61487a]">
              <span className="text-[12px]">Representative</span>
              <b className="text-[18px]">2.80% APR</b>
            </div>
            <div className="flex flex-col py-3 px-6 ">
              <span className="text-[12px]">Representative</span>
              <b className="text-[18px]">2.80% APR</b>
            </div>
          </div>
          <div className="flex flex-col gap-1 ">
            <button className="font-semibold py-3 text-white px-6 bg-[#bf4778] rounded-md">
              GO TO SITE
            </button>
            <button className="font-semibold py-3 text-white px-6 bg-[#614b79] rounded-md">
              ELIGIBILITY
            </button>
          </div>
        </div>
        <div className="border-t-[1px] border-[#614b79] text-center bg-[#efefef] rounded-b-md py-2">
          <p>
            Representative example: If you borrow £7,500, you would make 36
            monthly repayments of £217.33. The total amount repayable is
            £7,823.88. Representative 2.80% APR
          </p>
        </div>
      </div>
    </div>
  );
};

export default BankCard;
