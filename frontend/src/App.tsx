import { Banner, Navbar, Tables } from "./components";
import {AllLoans, BadCreditLoans, PersonalLoans} from "./pages"
import { StateContextProvider } from "./context/StateContext";
import {Routes, Route} from "react-router-dom"
import "./styles/global.css";

function App() {
  return (
    <StateContextProvider>
      <div className="App">
        <nav className="w-full fixed h-[70px] border-b-2 z-20 bg-white">
          <Navbar />
        </nav>
        <Routes>
          <Route path = "/" element = {<AllLoans/>}/>
          <Route path = "/personal-loans" element = {<PersonalLoans/>}/>
          <Route path = "/bad-credit-loans" element = {<BadCreditLoans/>}/>
        </Routes>
      </div>
    </StateContextProvider>
  );
}

export default App;
