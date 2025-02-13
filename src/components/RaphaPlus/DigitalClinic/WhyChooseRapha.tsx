import React from "react";
import { WhyChooseRaphaStyled } from "./WhyChooseRapha.styled";

const WhyChooseRapha = () => {
  return (
    <WhyChooseRaphaStyled>
      <h1>
        Why Choose Rapha<sup>+</sup> Digital{" "}
        <span className="highlight">Clinic</span>
      </h1>
      <div className="why-choose-rapha">
        <div className="image-section">
          <img
            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736416074738.png"
            alt="Woman holding a heart"
          />
        </div>
        <div className="text-section">
          <h2>Redefining Corporate Healthcare</h2>
          <p>
            <strong>
              Rapha<sup>+</sup>{" "}
            </strong>
            Digital Clinic offers a transformative approach to corporate
            healthcare management. By integrating advanced technology with
            comprehensive healthcare solutions, we empower companies to enhance
            employee well-being, optimize operational efficiency, and reduce
            healthcare costs. Our platform supports immediate medical needs
            through in-house clinics and emergency services while fostering a
            proactive approach to employee health through data-driven insights
            and personalized wellness programs. Choose RaphaPlus Digital Clinic
            to elevate your corporate healthcare strategy and create a
            healthier, more productive workplace environment.
          </p>
        </div>
      </div>
    </WhyChooseRaphaStyled>
  );
};

export default WhyChooseRapha;
