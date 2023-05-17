import React from "react";
import Header from "../components/Header";
import Ourservices from "../components/Ourservices";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import About from "../components/About";
import { Route, Routes } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <About />
      <Ourservices />
      <Contact />
    </div>
  );
}

export default Home;
