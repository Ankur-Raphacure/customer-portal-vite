import React from "react";
import { RPFooterV2style } from "./RPFooterV2.styled";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useHistory } from "react-router-dom";
import RPFooterMobileV2 from "./RPFooterMobileV2";

const RPFooterV2 = () => {
  const history = useHistory();
  return (
    <RPFooterV2style>
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Logo Section */}
          <div className="footer-logo-section">
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735124032529.png"
              alt="Logo"
              className="footer-logo"
            />
            <div className="social-links">
              <a href="#" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="#" className="social-icon">
                <FaTwitter />
              </a>
              <a href="#" className="social-icon">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="footer-links-section">
            <div className="footer-column">
              <h3>Company</h3>
              <a href="#">About us</a>
              <a href="#">Portfolio</a>
              <a href="#">Careers</a>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/connectus");
                }}
                className="contact-link"
              >
                Contact Us
              </a>
            </div>
            <div className="footer-column">
              <h3>Explore</h3>
              <a href="#">Privacy Policies</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Shipping Policies</a>
              <a href="#">Security Policies</a>
              <a href="#">Disclaimer</a>
              <a href="#">Responsible Disclosure</a>
            </div>
          </div>

          {/* Contact Section */}
          <div className="footer-contact-section">
            <div className="consec">
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735126863641.png"
                alt=""
                className="icon"
              />
              <p>+91 9606997170</p>
            </div>

            <div className="consec">
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735127332318.png"
                alt=""
                className="icon"
              />
              <p>wellness@raphaplus.in</p>
            </div>

            <div className="consec">
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735127365612.png"
                alt=""
                className="icon"
              />
              <p>
                38/3, 1st Floor, 6th Cross, Opp. Thomas Square, HSR Extension,
                Reliable Tranquil Layout, Bengaluru, Karnataka-560102
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>
            ©2024. All Rights Reserved by Raphaplus - Registered Trademark of
            Raphaplus India PVT LTD
          </p>
          <p>
            Designed and developed by <strong>RAPHAPLUS</strong>
          </p>
        </div>
      </div>
      <RPFooterMobileV2 />
    </RPFooterV2style>
  );
};

export default RPFooterV2;
