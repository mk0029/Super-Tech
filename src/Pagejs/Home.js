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

function Home({ contactRef }) {
  let router = useLocation();
  const [scrollValue, setScrollValue] = useState(false);
  useEffect(() => {
    setScrollValue(true);
    if (scrollValue && router.hash) {
      console.log("dsdfsdfsdf", scrollValue);
      contactRef &&
        contactRef.current &&
        contactRef.current.scrollIntoView({
          behaviour: "smooth",
        });
    }
  }, [scrollValue, router.hash]);
  return (
    <div>
      <LoaderHome />
      <Hero />
      <About />
      <Ourservices />
      <Choose />
      <Contact contactRef={contactRef} />
      <Footer />
    </div>
  );
}

export default Home;
