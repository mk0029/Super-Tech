import ServicesHero from "../components/ServicesHero";
import ConnectivityBg from "../assets/img/webp/ConnectivityHero.webp";
import ServicesSection from "../components/ServicesSection";
import organisationImg from "../assets/img/webp/organisations.webp";
import protectionImg from "../assets/img/webp/protection.webp";
import Footer from "../components/Footer";


function Conectivite() {
  const Heading = "Connectivity";
  const sectionHeading = "A Calculated Torrent Gets Results";
  const secPara =
    "High speed connectivity enables businesses to operate more efficiently and effectively, and it allows them to reach new customers and markets. It gives you access to a wider range of resources and opportunities.";
  const firstPartHeading = "Speed, Power and Flow";
  const firstPartpara =
    "73% of businesses say connectivity is essential. Businesses with high-speed internet connections are 2.5 times more likely to have a competitive advantage. Connectivity increases productivity, provides essential security and is customer-centric because it offers a reliable experience. Increased download speeds allow employees and edge users on the network to receive information faster. Increased upload speeds get your information in the hands of your consumers or colleagues without delay. It takes your service and products to the next level. A strong internet connection mitigates disruption and improves performance across your applications. Faster speeds protect your data. It deploys defensive tactics rapidly. We can give you options that best fit your needs.";

  const secondartHeading = "Increase the Odds to Your Favor";
  const secondPartpara =
    "When it is time to assess your connectivity, quality and speed utilizing a combination of software services, we will get it right for you. Connectivity is highly competitive in the marketplace. Let usevaluate your needs and find a solution that can be customized as your connectivity and business demands grow. You should explore options from time to time to ensure you are getting the fastest, most reliable connection speeds with the best value.";

  return (
    <div>
      <ServicesHero heroHeading={Heading} heroBG={ConnectivityBg} />
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

export default Conectivite;
