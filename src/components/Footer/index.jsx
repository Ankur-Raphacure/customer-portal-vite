import React, { useContext, useEffect, useState } from "react";
import { FooterStyled } from "./Footer.styled";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { ViewportContext } from "../../context/ViewportContext";
import { checkIsMobile } from "../../Scenes/common";
import BottomNavBar from "./BottomNavBar";
import LoginModel from "../LoginModel/LoginModel";
import cartIcon from "../../assets/images/cartNew.svg";
import docIcon from "../../assets/images/docNew.svg";
import moreIcon from "../../assets/images/moreNew.svg";
import homeIcon from "../../assets/images/homeNew.svg";
import docOnCall from "../../assets/images/docNew.svg";
import labtestIcon from "../../assets/images/labtestNew.svg";
import instantIcon from "../../assets/images/instantNew.svg";
import hospIcon from "../../assets/images/hospNew.svg";
import { indigridDiscountedPackages } from "../../pages/Home/HomeObjClass";

const Footer = (props) => {
  const [isFooterOpen, setIsFooterOpen] = useState(false);
  const { isMobileView } = useContext(ViewportContext);
  const [moreOptions, setMoreOptions] = useState(false);
  const history = useHistory();

  const [showLoginPopupModel, setShowLoginPopupModel] = useState(false);
  const { user } = useSelector((ReduxState) => ReduxState.auth);

  // const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  console.log("user user", user);
  const pathNa = window.location.pathname?.toLowerCase();

  const { subDomainDetails } = useSelector(({ auth }) => auth);

  const navBarData = [
    {
      name: "Home",
      path: "/",
      image: homeIcon,
    },
    {
      name: "Doctor on Call",
      path: "/doctor",
      image: docOnCall,
    },
    {
      name: "More",
      path: "more",
      image: moreIcon,
    },
    {
      name: "Lab Test",
      path: "/labtest",
      image: labtestIcon,
    },
    {
      name: "Cart",
      path: "/cart",
      image: cartIcon,
    },
  ];
  if (pathNa === "/" && user?.id) {
    navBarData[1] = {
      name: "Booking",
      path: "/dashboard/bookings",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/110207-1738934483450.png",
    };
    navBarData[3] = {
      name: "Package",
      path: "/dashboard/packages",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/110207-1738934500610.png",
    };
  } else if (pathNa.includes("doctor")) {
    navBarData[1] = {
      name: "Instant",
      path: "/doctor#instantConnect",
      image: instantIcon,
    };
    navBarData[3] = {
      name: "In Clinic",
      path: "/doctor/doctorlist?type=clinic",
      image: hospIcon,
    };
  } else if (pathNa.includes("pharmacy")) {
    navBarData[1] = {
      name: "Prescription",
      path: "/uploadprescription",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/110207-1738934112359.png",
    };
    navBarData[3] = {
      name: "Doctor",
      path: "/doctor",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/110207-1738934131122.png",
    };
  } else if (pathNa.includes("labtest")) {
    navBarData[1] = {
      name: "Home Visit",
      path: "/labtest?visittype=home",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/110207-1738934309783.png",
    };
    navBarData[3] = {
      name: "Clinic Visit",
      path: "/labtest?visittype=clinic",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/110207-1738934326066.png",
    };
  }
  console.log("navBarData", navBarData);
  const indigridNavbarData = [
    {
      name: "Home",
      path: "/",
      image: homeIcon,
    },
    {
      name: "Doctor",
      path: "/doctor",
      image: docIcon,
    },
    {
      name: "Addon Services",
      path: "more",
      image: moreIcon,
    },
    {
      name: "Lab Test",
      path: "/labtest",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1738653017645.png",
    },
    {
      name: "Cart",
      path: "/cart",
      image: cartIcon,
    },
  ];
  const navBarMoreData = [
    {
      name: "Doctor on Call",
      path: "/doctor",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1730956721614.png",
    },
    {
      name: "Pharmacy",
      path: "/pharmacy",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1738890011266.png",
    },
    {
      name: "Lab Test",
      path: "/labtest",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1738890046328.png",
    },
    {
      name: "Radiology",
      path: "/radiology",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1738890067550.png",
    },
    {
      name: "Ambulance",
      path: "/ambulance",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731387359120.png",
    },
    {
      name: "Gymlist",
      path: "/Gymlist",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1738760513827.png",
    },
    {
      name: "Womenscare",
      path: "/womenscare",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731387586052.png",
    },
    {
      name: "Eyecare",
      path: "/eyecare",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731388032965.png",
    },
    {
      name: "Dentalcare",
      path: "/dentalcare",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731388076089.png",
    },
    {
      name: "Mentalwellness",
      path: "/mentalwellness",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731388112106.png",
    },
    {
      name: "Ayurveda",
      path: "/ayurveda",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731388141135.png",
    },
    {
      name: "DomiciliaryCare",
      path: "/domiciliaryCare",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1737541175516.png",
    },
    {
      name: "Bloodbank",
      path: "/bloodbank",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1737541235266.png",
    },
  ];

  const indigridNavBarMoreData = [
    {
      name: "Doctor Consultatio",
      path: "/doctor",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1730956721614.png",
    },
    {
      name: "Labtest",
      path: "/labtest",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1738890046328.png",
    },
    {
      name: "Radiology",
      path: "/radiology",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1738890067550.png",
    },

    {
      name: "Lab Packages",
      path: "/labtest",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1738890046328.png",
    },
    {
      name: "Pharmacy",
      path: "/pharmacy",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1738890011266.png",
    },
  ];

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

  const handleNavigate = (urlPath) => {
    if (urlPath == "more") {
      setMoreOptions(true);
      return;
    }
    history.push(urlPath);
  };

  return (
    <>
      <FooterStyled>
        <div className="footer-wrapper">
          <div
            style={
              subDomainDetails?.background_color
                ? { background: subDomainDetails?.background_color }
                : null
            }
            className={`footer-section-nme `}
          >
            <div
              className={`footer-row logo-row ${
                isFooterOpen ? "" : "marginbottom"
              }`}
            >
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1730871439101.png"
                className="brandImg"
                alt="RaphaCure"
                width="160"
                height="60"
              />

              {/* Toggle button and footer only in subdomain's mobile view */}

              {checkIsMobile ? (
                <button
                  className={`toggle-btn showToggleOnMobile  `}
                  onClick={() => setIsFooterOpen(!isFooterOpen)}
                >
                  {isFooterOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
              ) : (
                subDomainDetails?.subdomain_key?.trim() !== "" && (
                  <button
                    className="toggle-btn showToggleOnMobile"
                    onClick={() => setIsFooterOpen(!isFooterOpen)}
                  >
                    {isFooterOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </button>
                )
              )}
            </div>

            {/* Footer content */}
            <div
              className={`footer-section-content ${
                isFooterOpen ? "marginbottom" : "hideFooterSection"
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

          <div className="BottomNavBar-mobile-view">
            <BottomNavBar
              element={
                subDomainDetails?.subdomain_key === "indigrid"
                  ? indigridNavbarData
                  : navBarData
              }
              from={subDomainDetails?.subdomain_key ? "subdomain" : ""}
              handleNavigate={handleNavigate}
              moreOptionsBtn={moreOptions}
              setMoreOptions={setMoreOptions}
              navBarMoreData={
                subDomainDetails?.subdomain_key === "indigrid"
                  ? indigridDiscountedPackages
                  : navBarMoreData
              }
            />
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
