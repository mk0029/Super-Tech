import React from "react";
import ServicesHero from "../components/ServicesHero";
import securityhero from "../assets/img/webp/securityHero_bg.webp";
import ServicesSection from "../components/ServicesSection";
import cloudImg1 from "../assets/img/webp/cloudSection1.webp";
import cloudImg2 from "../assets/img/webp/cloudSection2.webp";
import Footer from "../components/Footer";
import CloudBg from "../assets/img/webp/cloudHero.webp";
import Loader from "../components/Loader";

function Cloud() {
  const Heading = "Cloud Services ";
  const sectionHeading = "Genesis, Migration and Hybridization";
  const secPara =
    "Cloud-based technology is changing the way businesses operate by making them more agile and responsive to market changes, while reducing costs.";
  const firstPartHeading = "Look Up to the Cloud";
  const firstPartpara =
    "Cloud computing has grown rapidly. 94% of businesses use some form of cloud services. It can increase productivity up to 400%. It provides agility, security and improves compliance across multiple devices and locations. It is also a very cost-effective way to engage in business. It is flexible and scalable to fit your needs when your business grows. Most importantly every process in the cloud provides security of the company’s data and is accessible from anywhere versus being housed on server at a particular location. Cloud services foster communication and collaboration amongst the team while they operate in real time. It is our responsibility to leverage the cloud to create the best value and services for your business.";
  const secondartHeading = "Applications for Evolution";
  const secondPartpara =
    "Most organizations are strategizing with a hybrid cloud environment, even if only for email. Hybrid cloud solutions mix private and public resources enabling you to retain the choice of where you deploy your applications. It provides the freedom and power to shift workloads as well as capacity with agility to meet application performance objectives, geographic reach into new markets, and on-demand needs. By migrating your assets to the cloud, your business can shift capacity between multiple data centers, globally distributed hosting assets, and public clouds as your needs evolve.";

  return (
    <div>
      <Loader timeOut="1500" />
      <ServicesHero heroHeading={Heading} heroBG={CloudBg} />
      <ServicesSection
        firstHeading={sectionHeading}
        firstparagraph={secPara}
        partfirstHeading={firstPartHeading}
        partfirstpara={firstPartpara}
        partsecondHeading={secondartHeading}
        partsecondpara={secondPartpara}
        partfirstimg={cloudImg1}
        partsecondimg={cloudImg2}
      />
      <Footer />
    </div>
  );
}

export default Cloud;
