import React from "react";
import Condition from "../components/Condition";
import ServicesHero from "../components/ServicesHero";
import PrivacyPolicyBg from "../assets/img/webp/Privecypolicy.webp";
import Footer from "../components/Footer";

function TremCondition() {
  const Heading = "Terms And Conditions ";
  return (
    <>
      {" "}
      <ServicesHero heroHeading={Heading} heroBG={PrivacyPolicyBg} />
      <Condition />
      <Footer />
    </>
  );
}

export default TremCondition;
