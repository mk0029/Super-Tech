import React from "react";
import Condition from "../components/Condition";
import ServicesHero from "../components/ServicesHero";
import PrivacyPolicyBg from "../assets/img/webp/TremsandCondition.webp";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

function TremCondition() {
  const Heading = "Terms And Conditions ";
  return (
    <>
      <Loader timeOut="1500" />
      <ServicesHero heroHeading={Heading} heroBG={PrivacyPolicyBg} />
      <Condition />
      <Footer />
    </>
  );
}

export default TremCondition;
