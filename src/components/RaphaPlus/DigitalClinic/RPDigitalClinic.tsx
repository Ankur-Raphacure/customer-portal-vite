import React from "react";
import { RPDigitalClinicStyled } from "./RPDigitalClinic.styled";
import HealthEfficiency from "./HealthEfficiency";
import HowRaphaWorks from "./HowRaphaWorks";
import WhyChooseRapha from "./WhyChooseRapha";
import RPContactUs from "../RPContact/RPContactUs";
const RPDigitalClinic = () => {
  return (
    <RPDigitalClinicStyled>
      <div className="hero-image">
        <div className="imgWrapperDiv">
          <img
            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736414775826.png"
            alt="Hospital Hero"
          />
        </div>
        <div className="overlayWrapper">
          <div className="content">
            <div className="text-section">
              <h1>Digital Clinic</h1>
              <h2>Transforming Workplace Health</h2>
              <p>Streamline Corporate Wellness</p>
            </div>
            <div className="form-section">
              <form>
                <div className="inputGrid">
                  <div>
                    <label>Company Name:</label>
                    <input type="text" placeholder="Your company name" />
                  </div>
                  <div>
                    <label>Mobile Number:</label>
                    <input type="text" placeholder="Enter your mobile number" />
                  </div>
                  <div>
                    <label>Contact Person:</label>
                    <input type="text" placeholder="Contact person" />
                  </div>
                  <div>
                    <label>Company Address:</label>
                    <input type="text" placeholder="Company Address" />
                  </div>
                  <div>
                    <label>Email ID:</label>
                    <input type="email" placeholder="Your email" />
                  </div>
                  <div>
                    <label>Number of Employees:</label>
                    <input type="number" placeholder="Number of Employees" />
                  </div>
                </div>

                <div className="chkBxContainer">
                  <input type="checkbox" id="privacy" />
                  <label htmlFor="privacy">
                    By sending this form I confirm that I have read and accept
                    the <span>Privacy Policy</span>
                  </label>
                </div>
                <button type="button">Request for demo</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="efficiencyDiv">
        <HealthEfficiency />
      </div>
      <HowRaphaWorks />
      <WhyChooseRapha />
      <RPContactUs />
    </RPDigitalClinicStyled>
  );
};

export default RPDigitalClinic;
