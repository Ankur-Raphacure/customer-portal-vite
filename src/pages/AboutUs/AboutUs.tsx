import { AboutUsStyled } from "./AboutUs.styled";
import DocsImage from "../../assets/AboutUsBanner.jpeg";
import HovImage1 from "../../assets/hov1.png";
import HovImage2 from "../../assets/hov2.png";
import Team from "./Team";
import Abinbev from "../../assets/images/clients/abinbev.png";
import Airbus from "../../assets/images/clients/airbus.png";
import Alti from "../../assets/images/clients/alti.png";
import Bosch from "../../assets/images/clients/bosch.png";
import Celero from "../../assets/images/clients/celero2.png";
import Collins from "../../assets/images/clients/collins.png";
import Exxon from "../../assets/images/clients/exxon.png";
import Fisdom from "../../assets/images/clients/fisdom.png";
import Hitachi from "../../assets/images/clients/hitachi.png";
import Ice from "../../assets/images/clients/ice.png";
import Ntt from "../../assets/images/clients/ntt.png";
import Rbspl from "../../assets/images/clients/rbspl.png";
import Salesforce from "../../assets/images/clients/salesforce.png";
import Star from "../../assets/images/clients/star.png";
import Tally from "../../assets/images/clients/tally.png";
import TrustedClients from "./TrustedClients";
import OurOffices from "./OurOffices";

const clients = [
  Abinbev,
  Airbus,
  Alti,
  Bosch,
  Celero,
  Collins,
  Exxon,
  Fisdom,
  Hitachi,
  Ice,
  Ntt,
  Rbspl,
  Salesforce,
  Star,
  Tally,
];

const AboutUs = () => {
  return (
    <AboutUsStyled>
      <div className="heroSection">
        <div className="heroText">
          <div className="rapha-cure-container">
            <div className="heading">
              <h1 className="title">RaphaCure</h1>
              <h2 className="subtitle">Discover Wellness</h2>
            </div>
            <p className="description">
              Our mission is to deliver comprehensive{" "}
              <strong>healthcare services</strong> tailored to individual needs.
              With a team of skilled professionals and cutting-edge technology,
              we offer exceptional medical care, wellness programs, and
              preventive health services.
            </p>
            <p className="description">
              At <strong>Raphacure</strong>, we believe in a holistic approach
              to health, ensuring compassionate and supportive care for all our
              clients.
            </p>
            <button className="explore-button">Explore RaphaCure</button>
          </div>
        </div>
        <div className="heroImg">
          <div className="imgWrapper">
            <img src={DocsImage} alt="Doctors" />
            {/* <div className="bottomLeft"></div>
            <div className="topRight"></div> */}
          </div>
        </div>
      </div>
      <Team />
      <TrustedClients images={clients} />
      <OurOffices />
    </AboutUsStyled>
  );
};

export default AboutUs;
