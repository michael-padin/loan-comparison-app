import { memo, useState } from "react";
import { IBankCard, IBank } from "../types";

const BankCard = ({ bank, amount, years }: IBankCard) => {
  const [showModal, setShowModal] = useState(false);

  let getYears, getAmount, setMonthlyPayment;

  const monthlyPayment = (bank: any) => {
    getAmount = amount ? amount : bank.min_amount;
    getYears = years ? years : bank.max_years;
    setMonthlyPayment = Math.round(getAmount * bank.pmt * 100) / 100;
    return setMonthlyPayment.toFixed(2);
  };
  const costOfCredit = (bank: any) => {
    getAmount = amount ? amount : bank.min_amount;
    getYears = years ? years : bank.max_years;
    var total = (Math.round(amount * bank.pmt * 100) / 100) * (years * 12);

    return (total - amount).toLocaleString("en");
  };

  const totalRepayable = (bank: any) => {
    amount = amount ? amount : bank.min_amount;
    getYears = years ? years : bank.max_years;
    setMonthlyPayment = Math.round(amount * bank.pmt * 100) / 100;

    return (setMonthlyPayment * (years * 12)).toLocaleString("en");
  };

  const text = (bank: IBank) => {
    var totalAmount = amount
      ? amount.toLocaleString("en")
      : bank.min_amount.toLocaleString("en");
    getYears = years ? years * 12 : bank.max_years * 12;

    return `Representative example: If you borrow £${totalAmount}, you would make
     ${getYears} monthly repayments of £${monthlyPayment(
      bank
    )}. The total amount repayable is £${totalRepayable(bank)}. Representative
    ${bank.apr.toFixed(2)}% APR`;
  };

  return (
    <div className="w-full ">
      <div className="border-[1px] rounded-md border-[#61487a]">
        <div className="text-center my-2">
          <p>{bank.name}</p>
        </div>
        <div className="flex items-center justify-between p-5">
          <div className="w-[120px]">
            <img src={bank.logo} alt="sample image" />
          </div>
          <div className="flex flex-row text-center">
            <div className="flex flex-col py-3 px-6 border-r-[1px] border-[#61487a]">
              <span className="text-[12px]">Representative</span>
              <b className="text-[18px]">{bank.apr.toFixed(2)}% APR</b>
            </div>
            <div className="flex flex-col py-3 px-6 border-r-[1px] border-[#61487a]">
              <span className="text-[12px]">Monthly Repayments</span>
              <b className="text-[18px]">{monthlyPayment(bank)}</b>
            </div>
            <div className="flex flex-col py-3 px-6 border-r-[1px] border-[#61487a]">
              <span className="text-[12px]">Cost of credit</span>
              <b className="text-[18px]">{costOfCredit(bank)}</b>
            </div>
            <div className="flex flex-col py-3 px-6 ">
              <span className="text-[12px]">Total repayable</span>
              <b className="text-[18px]">{totalRepayable(bank)}</b>
            </div>
          </div>
          <div className="flex flex-col gap-1 ">
            <button className="font-semibold py-3 text-white px-6 bg-[#bf4778] rounded-md">
              <a href={bank.site}>GO TO SITE</a>
            </button>
            <button
              className="font-semibold py-3 text-white px-6 bg-[#614b79] rounded-md"
              onClick={() => setShowModal((prev) => !prev)}
            >
              ELIGIBILITY
            </button>
          </div>
        </div>
        <div className="border-t-[1px] border-[#614b79] text-center bg-[#efefef] rounded-b-md py-2">
          <p>{text(bank)}</p>
        </div>
      </div>
      {showModal && (
        <div className="fixed flex inset-0 bg-regal-blue z-20 " onClick = {() => setShowModal(false)}>
          <div className= "m-auto">
            <div className="flex flex-col py-5  px-20 bg-white rounded-md">
              <div className="flex flex-row justify-between mb-10">
                <img src={bank.logo} alt="bank logo1" />
                <img src={bank.logo} alt="bank logo2" />
              </div>
              <div>
                <h1 className="font-semibold mb-10">Eligibility</h1>
                <ul className="flex flex-col  gap-2 x">
                  {bank.eligibility.map((items) => (
                    <li className="list-disc">{items}</li>
                  ))}
                </ul>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(BankCard);
