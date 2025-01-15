import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ReactComponent as RaphaPlusIcon } from "../../../assets/icons/rapha-plus.svg";
import { RPFooterStyled } from "./RPFooter.styled";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const RPFooter = () => {
  return (
    <RPFooterStyled>
      <footer className="FooterContainer">
        <div className="Wrapper SectionWrapper">
          {/* Top Section */}
          <div className="Wrapper TopSection">
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735067095724.png"
              alt=""
              className="Logo"
            />
            <div className="SocialLinks">
              <a href="#" className="SocialIcon">
                <FaFacebookF />
              </a>
              <a href="#" className="SocialIcon">
                <FaTwitter />
              </a>
              <a href="#" className="SocialIcon">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Company Section */}
          <div className="Section">
            <h3 className="SectionTitle">Company</h3>
            <Link className="Link" to="#">
              About us
            </Link>
            <Link className="Link" to="#">
              Services
            </Link>
            <Link className="Link" to="#">
              Portfolio
            </Link>
            <Link className="Link" to="#">
              Careers
            </Link>
            <Link className="Link" to="#">
              Contact us
            </Link>
          </div>

          {/* Explore Section */}
          <div className="Section">
            <h3 className="SectionTitle">Explore</h3>
            <Link className="Link" to="#">
              Privacy Policies
            </Link>
            <Link className="Link" to="#">
              Terms & Conditions
            </Link>
            <Link className="Link" to="#">
              Shipping Policies
            </Link>
            <Link className="Link" to="#">
              Security Policies
            </Link>
            <Link className="Link" to="#">
              Disclaimer
            </Link>
            <Link className="Link" to="#">
              Responsible Disclosure
            </Link>
          </div>

          {/* Contact Section */}
          <div className="Section">
            <p>
              <FaPhone /> +91 95551 66000
            </p>
            <p>
              <FaEnvelope /> hello@raphaplus.com
            </p>
            <p>
              <FaMapMarkerAlt /> 38/3, 1st Floor, 6th Cross, Opp. Thomas Square,
              HSR Extension, Reliable Tranquil Layout, Bengaluru,
              Karnataka-560102.
            </p>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="BottomBanner">
          <p>
            ©2024. All Rights Reserved by Raphaplus - Registered Trademark of
            Raphaplus India PVT LTD
          </p>
          <p>
            Designed and developed by <strong>RAPHAPLUS</strong>
          </p>
        </div>
      </footer>
    </RPFooterStyled>
  );
};

export default RPFooter;

