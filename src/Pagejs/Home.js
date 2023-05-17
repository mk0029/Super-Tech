import React from "react";
import Header from "../components/Header";
import Ourservices from "../components/Ourservices";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import About from "../components/About";
import Choose from "../components/Choose";

function Home() {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <About />
      <Ourservices />
      <Choose />
      <Contact />
    </div>
  );
}

export default Home;
