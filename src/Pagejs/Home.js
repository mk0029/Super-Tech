import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import About from "../components/About";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Contact />
    </div>
  );
}

export default Home;
