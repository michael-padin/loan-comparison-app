import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Tables from "./components/Tables";
import {  StateContextProvider } from './context/StateContext';
import "./styles/global.css";

function App() {
  return (
    <StateContextProvider >
    <div className="App">
      <nav className="w-full fixed h-[70px] border-b-2 z-20 bg-white">
        <Navbar />
      </nav>
      <section>
        <Banner />
      </section>
      <section>
        <Tables />
      </section>
    </div>
    </StateContextProvider>
  );
}

export default App;
