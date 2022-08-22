import { memo, useState } from "react";
import { IBankCard} from '../types';

const BankCard = ({bank}: IBankCard) => {
  const [showModal, setShowModal] = useState(false);
  const {name, logo, apr, monthlyPayment, costOfCredit, totalRepayable, text, eligibility, site} = bank;

  return (
    <div className="w-full ">
      <div className="border-[1px] rounded-md border-[#61487a]">
        <div className="text-center my-2">
          <p>{name}</p>
        </div>
        <div className="flex items-center justify-between p-5">
          <div className="w-[120px]">
            <img src={logo} alt= {`${name} logo`} />
          </div>
          <div className="flex flex-row text-center">
            <div className="flex flex-col py-3 px-6 border-r-[1px] border-[#61487a]">
              <span className="text-[12px]">Representative</span>
              <b className="text-[18px]">{apr.toFixed(2)}% APR</b>
            </div>
            <div className="flex flex-col py-3 px-6 border-r-[1px] border-[#61487a]">
              <span className="text-[12px]">Monthly Repayments</span>
              <b className="text-[18px]">{monthlyPayment}</b>
            </div>
            <div className="flex flex-col py-3 px-6 border-r-[1px] border-[#61487a]">
              <span className="text-[12px]">Cost of credit</span>
              <b className="text-[18px]">{costOfCredit}</b>
            </div>
            <div className="flex flex-col py-3 px-6 ">
              <span className="text-[12px]">Total repayable</span>
              <b className="text-[18px]">{totalRepayable}</b>
            </div>
          </div>
          <div className="flex flex-col gap-1 ">
            <button className="font-semibold py-3 text-white px-6 bg-[#bf4778] rounded-md">
              <a href={site}>GO TO SITE</a>
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
          <p>{text}</p>
        </div>
      </div>
      {showModal && (
        <div className="fixed flex inset-0 bg-regal-blue z-20 " onClick = {() => setShowModal(false)}>
          <div className= "m-auto">
            <div className="flex flex-col py-5  px-20 bg-white rounded-md">
              <div className="flex flex-row justify-between mb-10">
                <img src={logo} alt= {`${name+1} logo`} />
                <img src={logo} alt= {`${name+1} logo`} />
              </div>
              <div>
                <h1 className="font-semibold mb-10">Eligibility</h1>
                <ul className="flex flex-col  gap-2 x">
                  {eligibility.map((items: string) => (
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
