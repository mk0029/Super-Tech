import React from "react";
import ServicesHero from "../components/ServicesHero";
import securityhero from "../assets/img/webp/securityHero_bg.webp";
import ServicesSection from "../components/ServicesSection";
import CcaasImg1 from "../assets/img/webp/CCaasSection1.webp";
import CcaasImg2 from "../assets/img/webp/CCaasSection2.webp";
import Footer from "../components/Footer";
import CcaasBg from "../assets/img/webp/CCaaShero.webp";
import Loader from "../components/Loader";

function Ccaas() {
  const Heading = "CCaaS";
  const sectionHeading = "A Platform to Build On";
  const secPara =
    "Take your CX to the next level. Effective communication drives revenue and capitalizes on a reduced cost structure while integrating with 3rd party applications. This is the way to grow your business with customer experience leading the way.";
  const firstPartHeading = "Intelligence Creates Opportunity";
  const firstPartpara =
    "Contact Center as a Service (CCaas) is the premier way to run your business with efficiency while supporting growth and flexibility. It is the way to provide the best customer experience using routing, queuing, responsiveness, analytics, and consistency while utilizing phone, email or chat. This will enhance the CX. You can find your blind spots using a CCaaS product. As your consultant, we can help you find the solution that allows you to engage your customers on a personal level. This is critical with the increased autonomy that businesses are placing on the consumer in their URGENT time of need. If you want improved capability and robust features, CCaaS can help you minimize costs while maximizing revenue.";

  const secondartHeading = "Easy Touchpoints Creates repeat customers";
  const secondPartpara =
    "CCaaS can improve or enhance your company’s culture. CCaaS can also help improve Customer Service Representatives morale by up to 50% or more as the business is providing tools that can be used for a large call center all the way down to a home office. When a business is utilizing CCaaS, it is telling the customer, we care about you, and you are our priority. There are plenty of options with CCaaS and Supertech IT Consulting can help you find the right fit for your business. We represent a multitude of vendors.";

  return (
    <div>
      <Loader timeOut="1500" />
      <ServicesHero heroHeading={Heading} heroBG={CcaasBg} />
      <ServicesSection
        firstHeading={sectionHeading}
        firstparagraph={secPara}
        partfirstHeading={firstPartHeading}
        partfirstpara={firstPartpara}
        partsecondHeading={secondartHeading}
        partsecondpara={secondPartpara}
        partfirstimg={CcaasImg1}
        partsecondimg={CcaasImg2}
      />
      <Footer />
    </div>
  );
}

export default Ccaas;
