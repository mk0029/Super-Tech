import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Sanjay.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pagejs/Home";
import Services from "./Pagejs/Services";
import Cloud from "./Pagejs/Cloud";
import SdWan from "./Pagejs/SdWan";
import Ccaas from "./Pagejs/Ccaas";
import UCaaS from "./Pagejs/UCaaS";
import Conectivite from "./Pagejs/Conectivite";
import Collection from "./Pagejs/Collection";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/cloude" element={<Cloud />} />
          <Route path="/SdWan" element={<SdWan />} />
          <Route path="/CCaaS" element={<Ccaas />} />
          <Route path="/UCaaS" element={<UCaaS />} />
          <Route path="/Connectivity" element={<Conectivite />} />
          <Route path="/Colocation" element={<Collection />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
