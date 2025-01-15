import React, { useEffect, useState } from "react";
import { FooterStyled } from "./Footer.styled";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Footer = (props) => {

  const [isFooterOpen, setIsFooterOpen] = useState(true);
  // const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);


  const { subDomainDetails } = useSelector(({ auth }) => auth);

  // const toggleFooter = () => {
  //   setIsFooterOpen((prev) => !prev);
  // };
  // useEffect(() => {
  //   console.log("subDomainDetails : ", subDomainDetails);

  //   const handleResize = () => setIsMobileView(window.innerWidth <= 768);
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // useEffect(() => {
  //   if (
  //     isMobileView &&
  //     subDomainDetails?.subdomain_key &&
  //     subDomainDetails?.subdomain_key?.trim() !== ""
  //   ) {
  //     setIsFooterOpen(false);
  //   } else {
  //     setIsFooterOpen(true);
  //   }
  // }, [isMobileView, subDomainDetails]);

  return (
    <>
      <FooterStyled>
        <div className="footer-wrapper">
          <div className="footer-section-nme">
            <div className="footer-row logo-row">
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1730871439101.png"
                className="brandImg"
                alt="RaphaCure"
                width="160"
                height="60"
              />


              {/* Toggle button and footer only in subdomain's mobile view */}
              {subDomainDetails?.subdomain_key &&
                subDomainDetails?.subdomain_key?.trim() !== "" && (
                  <button
                    className="toggle-btn showToggleOnMobile"
                    onClick={() => setIsFooterOpen(!isFooterOpen)}
                  >
                    {isFooterOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                )}
            </div>

            {/* Footer content */}
            <div
              className={`footer-section-content ${
                isFooterOpen ? "" : "hideFooterSection"
              }`}
            >
              <div className="footer-row">
                <h5>COMPANY</h5>
                <ul>
                  <li>
                    <Link to="/aboutus" className="text-decoration-none">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/career" className="text-decoration-none">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <a href="/contactus">Contact Us</a>
                  </li>
                  <li>
                    <Link to={"/chat"} className="text-decoration-none">
                      Helpdesk
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-row">
                <h5>FOR PATIENTS</h5>
                <ul>
                  <li>
                    <Link to="/doctor?tab=opd">Search for Doctors</Link>
                  </li>
                  <li>
                    <Link to="/doctor?tab=opd">Search for Clinics</Link>
                  </li>
                  <li>
                    <Link to="/doctor">Search for Hospitals</Link>
                  </li>
                  <li>
                    <Link to="/labtest">Book Diagnostic Tests</Link>
                  </li>
                  <li>
                    <Link to="/labtest/allPackages">
                      Book Full Body Checkups
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer-row">
                <h5>OUR POLICIES</h5>
                <ul>
                  <li>
                    <a href="/privacy-policy">Privacy & Policies</a>
                  </li>
                  <li>
                    <a href="/terms">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="/return-refund">Return & Refund Policies</a>
                  </li>
                  <li>
                    <a href="/shipping-policy">Shipping Policies</a>
                  </li>
                  <li>
                    <a href="/security-policy">Security Policies</a>
                  </li>
                  <li>
                    <a href="/disclaimer">Disclaimer</a>
                  </li>
                  <li>
                    <a href="/return-refund">Responsible Disclosure Policy</a>
                  </li>
                </ul>
              </div>
              <div className="footer-row">
                <h5>Contact Us</h5>
                <ul>
                  <li>
                    38/3, 6th Cross, Vibgyor High School Road,
                    <br /> opp. Thomas Square, HSR Extension,
                    <br /> Reliable Tranquil Layout,
                    <br /> Bengaluru, Karnataka-560102.
                  </li>
                  <li>+91 95551 66000</li>
                  <li>wellness@raphacure.com</li>
                </ul>
              </div>
            </div>
            {/* {isFooterOpen && (
              <></>
            )} */}

            
          </div>

          <div className="bottom-footer">
            <p>
              ©2024. All Rights Reserved by RaphaCure - Registered Trademark of
              Cure And Care Primary Care PVT LTD
            </p>
          </div>
        </div>
      </FooterStyled>
    </>
  );
};

export default Footer;
