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
import { useEffect, useRef, useState } from "react";
// import BackTop from "./components/BackTop";
import Policy from "./Pagejs/Policy";
import TremCondition from "./Pagejs/TremCondition";

function App() {
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  console.log("locationlocationlocation", contactRef);
  console.log("locationlocationlocation", aboutRef);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <>
      <div className=" overflow-hidden">
        {/* <BackTop /> */}
        <Routes>
          <Route
            path="/"
            element={<Home contactRef={contactRef} aboutRef={aboutRef} />}
          />
          <Route path="/Security" element={<Services />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/SdWan" element={<SdWan />} />
          <Route path="/CCaaS" element={<Ccaas />} />
          <Route path="/UCaaS" element={<UCaaS />} />
          <Route path="/Connectivity" element={<Conectivite />} />
          <Route path="/Colocation" element={<Collection />} />
          <Route path="/Privacy-Policy" element={<Policy />} />
          <Route path="/Terms-and-Condition" element={<TremCondition />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
