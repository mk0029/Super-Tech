import React from "react";
import Header from "../components/Header";
import Ourservices from "../components/Ourservices";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import About from "../components/About";
import Choose from "../components/Choose";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

function Home() {
  return (
    <div>
      <Loader timeOut="3000" />
      <Hero />
      <About />
      <Ourservices />
      <Choose />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
