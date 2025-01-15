import React from "react";
import { BottomBannerStyled } from "./BottomBanner.styled";

const ButtomBanner = () => {
  const handleClickPlay = () => {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.cognonta.raphacure";
  };

  const handleClickApp = () => {
    window.location.href =
      "https://apps.apple.com/in/app/raphacure/id1637246098";
  };
  return (
    <BottomBannerStyled>
      <div className="download-home-page-div">
        <div className="mt-5">
          <h5 className="download-text-div">Download</h5>
          <h5 className="download-text-div">
            <span>RaphaCure</span> App Now
          </h5>
          <p className="download-sub-text-div">
            Experience top-tier healthcare services at your fingertips. Manage
            doctor consultations, <br /> lab tests, and more, all in one place.
            Stay connected to your health—anytime, anywhere
          </p>
          <div className="book-app-doctor-actions-btn-div">
            <button onClick={handleClickPlay} className=" btn Google-Play me-4">
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1729773317660.png"
                alt=""
                className="me-3"
              />
              Google Play
            </button>

            <button onClick={handleClickApp} className=" btn Google-Play ">
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1730874372832.png"
                alt=""
                className="me-3"
              />
              App Store
            </button>
          </div>
        </div>
        <div className="welcome-text-rapha-right mt-4">
          <img
            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1730875100062.png"
            alt="RaphaCure"
            className="phone-img"
          />
        </div>
      </div>
    </BottomBannerStyled>
  );
};

export default ButtomBanner;
