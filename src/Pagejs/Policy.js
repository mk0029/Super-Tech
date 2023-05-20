import React from "react";
import ServicesHero from "../components/ServicesHero";
import PrivacyPolicyBg from "../assets/img/webp/Privecypolicy.webp";
import PrivaryPolicy from "../components/PrivaryPolicy";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

function Policy() {
  const Heading = "Privacy Policy ";
  return (
    <>
      {" "}
      <Loader timeOut="1500" />
      <ServicesHero heroHeading={Heading} heroBG={PrivacyPolicyBg} />
      <PrivaryPolicy />
      <Footer />
    </>
  );
}

export default Policy;
