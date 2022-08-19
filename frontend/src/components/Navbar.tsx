const Navbar = () => {
  return (
    <div className="max-w-[1140px] m-auto">
      <div className="flex w-full justify-between items-center px-[1rem]">
        <div className="min-h-[70px] flex items-center">
          <a href="https://www.upmoney.co.uk/loans">
            <img
              src="https://www.upmoney.co.uk/images/up-money-logo-2.png"
              alt="logo"
              className="h-[2.4rem]"
            />
          </a>
        </div>
        <div className="flex-1">
          <ul className="flex gap-4 justify-end">
            {["Loans", "Credit Cards", "Bank Accounts", "Business"].map(
              (item, idx) => (
                <li key={idx} className="h-full flex">
                  <a
                    href="/"
                    className="text-[17px] font-medium p-[1rem] text-[#61487a]"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
