import React from "react";
import { PrivacyStyled } from "./Privacy.styled";

const Privacy = () => {
  return (
    <PrivacyStyled>
      <div className="main">
        <div className="secure-practice-container">
          <div className="content">
            <h1>
              Securely manage your <span className="highlight">practice</span>{" "}
              with privacy protection.
            </h1>
            <p>
              "Get a professional online presence at no cost. Connect with
              patients and grow your practice effortlessly."
            </p>
            <div className="features">
              <div className="feature-item">
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735190378893.png"
                  alt="Patient Data Icon" className="group-icon"
                />
                <span>Patient data that <br />only you own</span>
              </div>
              <div className="feature-item">
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735190523468.png"
                  alt="FHIR Icon"
                  className="group-icon"
                />
                <span>FHIR compliant <br />data storage</span>
              </div>
              <div className="feature-item">
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735190639000.png"
                  alt="Control Icon"
                  className="group-icon"
                />
                <span>Control over <br />messages to patients</span>
              </div>
            </div>
          </div>
          <div className="images">
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735189093023.png"
              alt="Main Lock"
              className="main-image"
            />
            {/* <img
            src="/images/shadow-lock-image.png"
            alt="Shadow Lock"
            className="shadow-image"
          /> */}
          </div>
        </div>
      </div>
    </PrivacyStyled>
  );
};

export default Privacy;
