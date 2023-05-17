import React from "react";
import ServicesHero from "../components/ServicesHero";
import securityhero from "../assets/img/webp/securityHero_bg.webp";
import ServicesSection from "../components/ServicesSection";
import organisationImg from "../assets/img/webp/organisations.webp";
import protectionImg from "../assets/img/webp/protection.webp";
import Footer from "../components/Footer";
import CloudBg from "../assets/img/webp/cloudHero.webp"

function Cloud() {
  const Heading = "Cloud Services ";
  const sectionHeading = "Genesis, Migration and Hybridization";
  const secPara =
    "Cloud-based technology is changing the way businesses operate by making them more agile and responsive to market changes, while reducing costs.";
  const firstPartHeading = "Look Up to the Cloud";
  const firstPartpara =
    "Most organizations are strategizing with a hybrid cloud environment, even if only for email. Hybrid cloud solutions mix private and public resources enabling you to retain the choice of where you deploy your applications. It provides the freedom and power to shift workloads as well as capacity with agility to meet application performance objectives, geographic reach into new markets, and on-demand needs. By migrating your assets to the cloud, your business can shift capacity between multiple data centers, globally distributed hosting assets, and public clouds as your needs evolve.";
  const secondartHeading = "Applications for Evolution";
  const secondPartpara =
    "Most organizations are strategizing with a hybrid cloud environment, even if only for email. Hybrid cloud solutions mix private and public resources enabling you to retain the choice of where you deploy your applications. It provides the freedom and power to shift workloads as well as capacity with agility to meet application performance objectives, geographic reach into new markets, and on-demand needs. By migrating your assets to the cloud, your business can shift capacity between multiple data centers, globally distributed hosting assets, and public clouds as your needs evolve.";

  return (
    <div>
      <ServicesHero heroHeading={Heading} heroBG={CloudBg} />
      <ServicesSection
        firstHeading={sectionHeading}
        firstparagraph={secPara}
        partfirstHeading={firstPartHeading}
        partfirstpara={firstPartpara}
        partsecondHeading={secondartHeading}
        partsecondpara={secondPartpara}
        partfirstimg={organisationImg}
        partsecondimg={protectionImg}
      />
      <Footer />
    </div>
  );
}

export default Cloud;
