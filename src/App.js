import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pagejs/Home";
import Services from "./Pagejs/Services";
import Cloud from "./Pagejs/Cloud";
import SdWan from "./Pagejs/SdWan";
import Ccaas from "./Pagejs/Ccaas";
import UCaaS from "./Pagejs/UCaaS";
import Conectivite from "./Pagejs/Conectivite";
import Collection from "./Pagejs/Collection";
import { useEffect } from "react";
import BackTop from "./components/BackTop";
import PrivaryPolicy from "./components/PrivaryPolicy";
import Condition from "./components/Condition";

function App() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <>
      <div className=" overflow-hidden">
        {/* <BackTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Security" element={<Services />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/SdWan" element={<SdWan />} />
          <Route path="/CCaaS" element={<Ccaas />} />
          <Route path="/UCaaS" element={<UCaaS />} />
          <Route path="/Connectivity" element={<Conectivite />} />
          <Route path="/Colocation" element={<Collection />} />
        </Routes> */}
        <PrivaryPolicy />
        <Condition />
      </div>
    </>
  );
}

export default App;
