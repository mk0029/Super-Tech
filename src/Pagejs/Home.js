import React from "react";
import Header from "../components/Header";
import Ourservices from "../components/Ourservices";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import About from "../components/About";
import Choose from "../components/Choose";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import LoaderHome from "../components/LoaderHome";

function Home({ contactRef, aboutRef }) {
  let location = useLocation();

  useEffect(() => {
    // IF LOCATION HASH URL IS EQUAL TO CONTACT THEN SCROLL TO CONTACT SECTION
    if (location.hash === "#contact" && contactRef.current) {
      contactRef.current.scrollIntoView({
        behaviour: "smooth",
      });
    }

    if (location.hash === "#About" && aboutRef.current) {
      aboutRef.current.scrollIntoView({
        behaviour: "smooth",
      });
    }
  }, [location.hash]);
  return (
    <div>
      <LoaderHome />
      <Hero />
      <About aboutRef={aboutRef} />
      <Ourservices />
      <Choose />
      <Contact contactRef={contactRef} />
      <Footer />
    </div>
  );
}

export default Home;
