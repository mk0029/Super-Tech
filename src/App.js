import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Sanjay.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pagejs/Home";
import Services from "./Pagejs/Services";
// import ServicesHero from "./components/ServicesHero";
// import securityhero from './assets/img/webp/securityHero_bg.webp'
// import ServicesSection from "./components/ServicesSection";
// import organisationImg from "./assets/img/webp/organisations.webp"
// import protectionImg from './assets/img/webp/protection.webp'
// import Footer from "./components/Footer";

function App() {
//   const Heading = "Security";
//   const sectionHeading = "IT Security Is Essential";
//   const secPara = "The Cybersecurity landscape is constantly changing at a rapid pace, yet most businesses have the same security posture they had years ago. Today’s threats must be countered with behavior-based tools, in addition to traditional methods. Supertech IT helps businesses develop a future-oriented security strategy and rationalizing a security posture with a sensible budget.";
//   const firstPartHeading = "Organizations Must Implement";
//   const firstPartpara = "A Cybersecurity attack occurs every 39 seconds. The average cost of a severe attack is in the millions. A ransomware attack, one of the most common types of attacks are costing businesses on average, upwards of $170,000. For an attack like this, it can be mitigated with a simple, manageable security posture. As a business owner, you can be held personally liable for being vulnerable and exposed. 86% of all security issues begin with human error and are usually at the edge of the network. Half of all businesses have no cybersecurity. With compliance being a critical factor for certain business verticals, creating a budget should be a top priority. A few techniques for protection are to deploy security software, encryption, two factor authentication and zero trust which deems everything inside or outside the network as a threat.";
// const secondartHeading = "Peace of Mind Through Protection";
//   const secondPartpara = "There are several companies that offer robust solutions and other Software as a Service companies have integrated their own security into their products. You can build trust and protect your data and your customer’s data with a customized security solution. Businesses today must prepare for cybersecurity incidents because they are imminent and can cause irreparable damage. A balance of defensive and offensive measures is required to keep the organization safe and to detect security breaches as soon as they occur. You have worked hard to create a great reputation with your business, don’t lose it when you don’t have the right security posture.";

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/Services" element={<Services />} />
          </Route>
        </Routes>
        {/* <ServicesHero heroHeading={Heading} heroBG={securityhero} />
        <ServicesSection firstHeading={sectionHeading} firstparagraph={secPara} partfirstHeading={firstPartHeading} partfirstpara={firstPartpara} partsecondHeading={secondartHeading} partsecondpara={secondPartpara} partfirstimg={organisationImg} partsecondimg={protectionImg} />
        <Footer/>
         */}
      </div>
    </>
  );
}

export default App;
