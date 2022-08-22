export interface StateContextProviderProps {
    formData: Bank;
    filteredBanks: IBank[];
    setFormData: React.Dispatch<React.SetStateAction<Bank>>;
    setFilteredBanks: React.Dispatch<React.SetStateAction<IBank[]>>;
    banks: IBank[];
    setBanks: React.Dispatch<React.SetStateAction<IBank[]>>;
    loanType: string;
    setLoanType: React.Dispatch<React.SetStateAction<string>>;
  }