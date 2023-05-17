import React from "react";
import ServicesHero from "../components/ServicesHero";
import ServicesSection from "../components/ServicesSection";
import organisationImg from "../assets/img/webp/organisations.webp";
import protectionImg from "../assets/img/webp/protection.webp";
import Footer from "../components/Footer";
import SoftwareBg from '../assets/img/webp/softwareHero.webp'
function SdWan() {
  const Heading = "Software Defined - Wide Area Network";
  const sectionHeading = "Improve Everything in a Flash";
  const secPara =
    "Make life easier with zero-touch deployment, improved application performance and centralized management. Software is driving the innovation engine in the networking world to make it more agOile, flexible, and less expensive.";
  const firstPartHeading = "Single Pane of Glass";
  const firstPartpara =
    "Software Defined – Wide Area Networks (SD-WAN) are the evolution for agile, growing businesses. It routes data around faulty connections and congestion. It uses minimal hardware to create a seamless user experience. The network can be managed centrally through a single pane of glass. Connect branch offices to headquarters easily while reducing costs. Create a network for your single location or remote worker’s offices and spaces. Implement security in all communications and data transfers. You can create a dedicated network within the organization using public and private internet.";
  const secondartHeading = "Front Row Center";
  const secondPartpara =
    "We can offer managed and unmanaged SD-WAN products which can eliminate expensive hardware and can be deployed rapidly. The shift to cloud-based software requires intelligent and secure ways to connect to users. What took months establishing or upgrading your network can be done in days or weeks. The network is optimized continuously, and updates happen frequently in milli-seconds. It does not require engineers to be onsite managing your network, thus freeing up resources. Your business operates at peak efficiency utilizing an SD-WAN solution. SD-WAN reduces overhead and adds to the bottom line. The migration from expensive private networks to internet-based circuits reduces costs while maintaining interoperability. Improve your business network with tangible results that can immediately be seen upon implementation..";

  return (
    <div>
      <ServicesHero heroHeading={Heading} heroBG={SoftwareBg} />
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

export default SdWan;
