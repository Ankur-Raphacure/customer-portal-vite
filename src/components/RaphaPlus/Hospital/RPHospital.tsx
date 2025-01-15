import React, { useState } from "react";
import { HospitalStyled } from "./Hospital.styled";
import FreeTrial from "./FreeTrial";
import Timeline from "./Timeline";

const RPHospital = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <HospitalStyled>
      <div className="hero-image">
        <div className="imgWrapperDiv">
          <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736406829826.png" alt="Hospital Hero" />
        </div>
        <div className="overlayWrapper">
          <h1>Hospital Management</h1>
          <div className="timelineWrapper">
            <div className="timeline-text">
              Reasons why you'll love RAPHA<sup>+</sup> Practices
            </div>
            <Timeline />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736406892650.png" alt="How Rapha Works" />
      </div>
      <div className="software-promo">
        <div className="promo-text">
          <h2>
            Avail your free hospital management{" "}
            <span className="text-underline-effect"> software</span>
          </h2>
          <p>
            Get your free website and management software today! Make your
            hospital management easier and more streamlined.
          </p>
          <button className="button" onClick={handlePopupOpen}>
            Activate your free trial
          </button>
        </div>
        <div
          className="promo-image"
          style={{
            background: `url("https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736406459201.png") no-repeat right center`,
            backgroundSize: "contain",
          }}
        />
      </div>
      <div className="compare-benefits">
        <h2>
          Compare Benefits With{" "}
          <span className="text-underline-effect">RAPHA</span>
          <sup className="plus-icon">+</sup>
        </h2>
        <table className="table">
          <thead>
            <tr>
              <th className="th primeHead">
                Rapha<sup className="plus-icon">+</sup> Feature
              </th>
              <th className="th">
                <img className="icon" src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736406115270.png" alt="Rapha+" />
              </th>
              {/* <th className="th">
                  <PractoIcon
                    style={{
                      height: "20px",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                </th>
                <th className="th">
                  <img className="icon" src={EkaCareIcon} alt="Eka.Care" />
                </th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="feature">Invoice Management</td>
              <td className="td">Yes</td>
              {/* <td className="td">Yes</td>
                <td className="td">Yes</td> */}
            </tr>
            <tr>
              <td className="feature">EMR View & Trends</td>
              <td className="td">Yes</td>
              {/* <td className="td">Yes</td>
                <td className="td">Yes</td> */}
            </tr>
            <tr>
              <td className="feature">Appointment Scheduling</td>
              <td className="td">Yes</td>
              {/* <td className="td">Yes</td>
                <td className="td">Yes</td> */}
            </tr>
            <tr>
              <td className="feature">Digital Prescriptions</td>
              <td className="td">Yes</td>
              {/* <td className="td">Yes</td>
                <td className="td">Yes</td> */}
            </tr>
            <tr>
              <td className="feature">Pharmacy Management</td>
              <td className="td">Yes</td>
              {/* <td className="td">Yes</td>
                <td className="td">Yes</td> */}
            </tr>
            <tr>
              <td className="feature">Analytics & Reporting</td>
              <td className="td">Yes</td>
              {/* <td className="td">Yes</td>
                <td className="td">Yes</td> */}
            </tr>
            <tr>
              <td className="feature">Collaboration</td>
              <td className="td">Yes</td>
              {/* <td className="td">No</td>
                <td className="td">No</td> */}
            </tr>
            <tr>
              <td className="feature">External Emergency Support</td>
              <td className="td">Yes</td>
              {/* <td className="td">No</td>
                <td className="td">No</td> */}
            </tr>
            <tr>
              <td className="feature">Price per User per Month</td>
              <td className="td">Rs 25</td>
              {/* <td className="td">Price on request</td>
                <td className="td">Price on request</td> */}
            </tr>
          </tbody>
        </table>
      </div>
      {isPopupOpen && <FreeTrial handlePopupClose={handlePopupClose} />}
    </HospitalStyled>
  );
};

export default RPHospital;
