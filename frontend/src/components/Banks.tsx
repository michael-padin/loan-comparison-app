import { useContext } from "react";
import BankCard from "./BankCard";
import { StateContext } from '../context/StateContext';

const Banks = () => {
  const stateContext = useContext(StateContext)
  const {setBanks, setFilteredBanks, filteredBanks, formData} = stateContext;
 

  return (
    <>
      {filteredBanks.map((bank, index) => (
        <div key = {index}>
        <BankCard bank={bank}/>
        </div>
      ))}
    </>
  );
};

export default Banks;
