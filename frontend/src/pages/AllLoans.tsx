import React, { useContext, useEffect } from 'react'
import { Banner, Tables } from '../components'
import { StateContext } from '../context/StateContext';
import loans from "../fakeApi/loans.json"

const AllLoans = () => {
  const {formData, filteredBanks, banks, setBanks, setFilteredBanks} = useContext(StateContext);
  const {selectedTerm, amount} = formData;

  useEffect(() => {
       setBanks(loans)
  }, []);


  return (
    <div>
      <Banner heading = "Compare top loans" subheading = "Impartial loan comparison"/>
      <Tables/>
    </div>
  )
}

export default AllLoans