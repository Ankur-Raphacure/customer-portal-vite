import React, { useState } from "react";
import { RPFooterV2style } from "./RPFooterV2.styled";
import { FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const RPFooterMobileV2 = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <RPFooterV2style>
      <div className="mobileFooter">
        <div className="footerLogo">
          <img
            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735214316605.png"
            alt="RPlus Logo"
          />
        </div>
        <p className="footerDescription">
          Have questions? We've got answers! Check out our FAQs for quick
          solutions and helpful information about our men.
        </p>
        <div className="footerMenu">
          {[
            {
              section: "Home",
              options: ["Home Option 1", "Home Option 2", "Home Option 3"],
            },
            {
              section: "About Us",
              options: ["About Option 1", "About Option 2", "About Option 3"],
            },
            {
              section: "Services",
              options: [
                "Service Option 1",
                "Service Option 2",
                "Service Option 3",
              ],
            },
            {
              section: "Contact Us",
              options: [
                "Contact Option 1",
                "Contact Option 2",
                "Contact Option 3",
              ],
            },
          ].map(({ section, options }) => (
            <div key={section} className="menuSection">
              <div
                className="menuHeader"
                onClick={() => toggleSection(section)}
              >
                {section}
                <span
                  className={`arrow ${openSection === section ? "open" : ""}`}
                >
                  <IoIosArrowDown />
                </span>
              </div>
              {openSection === section && (
                <div className="menuContent">
                  <ul>
                    {options.map((option, index) => (
                      <li key={index}>{option}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom-mobile">
        <div className="socialLinks">
          <a href="#" aria-label="Facebook">
            <FaFacebookSquare size={30} className="fa fa-facebook" />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram size={30} className="fa fa-instagram" />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter size={30} className="fa fa-twitter" />
          </a>
        </div>
        <div className="footerLinks">
          <a href="#">Privacy Policies</a>
          <a href="#">Terms & Conditions</a>
        </div>
        <div className="footerCopyright">
          &copy; 2024. All Rights Reserved by Raphaplus
        </div>
      </div>
    </RPFooterV2style>
  );
};

export default RPFooterMobileV2;
