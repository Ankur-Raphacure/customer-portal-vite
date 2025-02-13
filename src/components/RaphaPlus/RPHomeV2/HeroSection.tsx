import React from "react";
import { HeroSectionStyled } from "./HeroSection.styled";
import { useHistory } from "react-router-dom";

const HeroSection = () => {
  const history = useHistory();
  const handleSignup = () => {
    window.location.href = "https://www.raphadoc.com/signin";
  };
  return (
    <HeroSectionStyled>
      <div className="hero-section">
        <div className="hero-content">
          <h1>
            Why <span className="highlight">Manage</span> When You Can{" "}
            <span className="highlight">Master</span>?
          </h1>
          <ul className="features-list">
            <li>
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736166784896.png"
                alt="Icon"
                className="icon"
              />{" "}
              Free Website Included
            </li>
            <li>
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736166477157.png"
                alt="Icon"
                className="icon"
              />{" "}
              Secured Data Protection
            </li>
            <li>
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736166744037.png"
                alt="Icon"
                className="icon"
              />{" "}
              Effortless Clinic Management
            </li>
            <li>
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736166688568.png"
                alt="Icon"
                className="icon"
              />{" "}
              Patient Engagement & Insights
            </li>
          </ul>
          <div className="buttons">
            <button className="book-demo-button"
            onClick={() => history.push("/bookdemo")}
            >Book Demo</button>
            <button onClick={handleSignup} className="sign-up-button">
            Sign Up Now
          </button>
          </div>
        </div>
      </div>
      <div className="subListMobile">
        <ul className="features-list">
          <li>
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733125278734.png"
              alt="Icon"
              className="icon"
            />{" "}
            Free Website Included
          </li>
          <li>
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733125359006.png"
              alt="Icon"
              className="icon"
            />{" "}
            Secured Data Protection
          </li>
          <li>
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733125406910.png"
              alt="Icon"
              className="icon"
            />{" "}
            Effortless Clinic Management
          </li>
          <li>
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733125428813.png"
              alt="Icon"
              className="icon"
            />{" "}
            Patient Engagement & Insights
          </li>
        </ul>
        <div className="mobile-buttons">
          <button className="book-demo-mobile">Book Demo</button>
          <button onClick={handleSignup} className="sign-up-mobile">Sign Up Now</button>
        </div>
        <p>Get Started for Free. No Payment Required</p>
      </div>
    </HeroSectionStyled>
  );
};

export default HeroSection;
