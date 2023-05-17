import React from "react";
import ServicesHero from "../components/ServicesHero";
import UCaaSBg from "../assets/img/webp/UCaasHero.webp";
import ServicesSection from "../components/ServicesSection";
import UCaasImg1 from "../assets/img/webp/UcaasSection1.webp";
import UCaasImg2 from "../assets/img/webp/UcaasSection2.webp";
import Footer from "../components/Footer";

function UCaaS() {
  const Heading = "UCaaS";
  const sectionHeading = "Camaraderie is Contagious";
  const secPara =
    "Enhance your organizational efficiency and your customer experience with advanced voice, messaging and collaborative communications. UCaaS products offer an opportunity to work from anywhere and can integrate into applications you are already using.";
  const firstPartHeading = "Teamwork Makes the Dreamwork";
  const firstPartpara =
    "UCaaS or Unified Communications as a Service has really caught on. Migrating to a UCaaS product that works in the cloud lowers total cost of ownership. It is continually growing and can increase collaboration efforts by 100%. It can also reduce costs by 30% or more. On-premises phone systems are no longer the sole solution. As clients move to the cloud, their approach revolves around optimizing enterprise software investments through integration. Choosing the right partner with native integrations is central to maximizing eﬃciencies and realizing business beneﬁts.";
  const secondartHeading = "For the People";
  const secondPartpara =
    "UCaaS can improve your customer’s experience. If you have rapid growth or sustained growth, UCaaS can enhance video conferencing, instant messaging and file sharing. UCaaS provides improved customer experience by using call routing and queuing to address a customer’s needs with tremendous efficiency when using voice, text, or email. It provides analytics to help improve in certain areas of the business. Customer service experience can improve by 20% or more when using Unified Communications as a Service. UCaaS helps employees work remote, hybrid or on-site. It is flexible and easy to scale..";

  return (
    <div>
      <ServicesHero heroHeading={Heading} heroBG={UCaaSBg} />
      <ServicesSection
        firstHeading={sectionHeading}
        firstparagraph={secPara}
        partfirstHeading={firstPartHeading}
        partfirstpara={firstPartpara}
        partsecondHeading={secondartHeading}
        partsecondpara={secondPartpara}
        partfirstimg={UCaasImg1}
        partsecondimg={UCaasImg2}
      />
      <Footer />
    </div>
  );
}

export default UCaaS;
