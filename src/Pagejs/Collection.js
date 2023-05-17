import React from "react";
import ServicesHero from "../components/ServicesHero";
import securityhero from "../assets/img/webp/securityHero_bg.webp";
import ServicesSection from "../components/ServicesSection";
import collectionImg1 from "../assets/img/webp/colocationSection1.webp";
import collectionImg2 from "../assets/img/webp/colocationSection2.webp";
import Footer from "../components/Footer";
import ColocationBg from '../assets/img/webp/ColocationHero.webp'

function Collection() {
  const Heading = "Colocation";
  const sectionHeading = "Stack Management";
  const secPara =
    "Colocation is turning into a dynamic segment by taking on-premises hardware and moving it to a managed data center that houses your technology stack. Evolving solutions increase colocation capabilities and relevance while reducing costs.";
  const firstPartHeading = "Eliminate Failure";
  const firstPartpara =
    "85% of businesses say Colocation has improved their IT reliability. Your IT hardware is housed in a 3rd Party Data Center. It is monitored 24/7. Hardware is kept cool and has onsite security protecting your data. It is scalable and provides continuous uptime with backstops and redundancy to ensure that there is minimal loss or downtime. It seeks to eliminate latency. Your equipment is safe, your data is secure. With Colocation you don’t have to worry about and maintain your technology stack. Depending on where the data center is deployed, the ability to monitor in real time is critical in today’s on-demand environments.";
  const secondartHeading = "Not One Size Fits All";
  const secondPartpara =
    "There are companies that specialize in Colocation. Explore your options and decide whether you troubleshoot your IT reliability on your own or use a company that excels at supporting your business so you can focus on core objectives. Colocation provides peace of mind. Being able to only pay for what you need will provide incredible cost savings because management is easier. You want people and businesses to rely on you. We can recommend a solution that reduces risk while increasing performance, enhancing security and is agile. Increase your profitability by moving to a managed colocation company. Supertech IT can help you meet and maintain compliance requirements.";

  return (
    <div>
      <ServicesHero heroHeading={Heading} heroBG={ColocationBg} />
      <ServicesSection
        firstHeading={sectionHeading}
        firstparagraph={secPara}
        partfirstHeading={firstPartHeading}
        partfirstpara={firstPartpara}
        partsecondHeading={secondartHeading}
        partsecondpara={secondPartpara}
        partfirstimg={collectionImg1}
        partsecondimg={collectionImg2}
      />
      <Footer />
    </div>
  );
}

export default Collection;
