import React from "react";
import { FitnessonclickStyled } from "./FitnessonclickStyled.styled";

import Fitnesscategory from "../Fitnessonclick/Fitnesscategory";
import Fitnessprocoarses from "../Fitnessonclick/Fitnessprocoarses";
import Recommendedone from "../Fitnessonclick/Recommendedone";
import Recommendedtwo from "../Fitnessonclick/Recommendedtwo";

const Fitnessonclick = () => {
  return (
    <FitnessonclickStyled>
      <div className="banner-wrapper">
        <div className="banner">
          <div className="left-content">
            <h2>Premium Fitness Gear at Affordable Prices</h2>
            <p className="ptext">
              Achieve your fitness goals with expert-led virtual training. Join
              today and experience convenient, effective workouts from anywhere!
            </p>
            <p className="pprice">
              Starting at t <span className="price"> ₹ 199</span>
            </p>
            <button className="subscribe">Subscribe Now</button>
          </div>
          <div className="right-content">
            <img
              src={
                "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736331826116.png"
              }
              alt="fitness"
            />
          </div>
        </div>
      </div>

      <Fitnesscategory />

      <Fitnessprocoarses />

      <div className="banner-wrapper banner-style">
        <div className="banner">
          <div className="left-content">
            <h2>Crazy Deals 60% Off Treadmills</h2>
            <p className="ptext">
              Get Fit for Less Shop Premium Treadmills at Unbeatable Prices!"
            </p>

            <button className="subscribe">Subscribe Now</button>
          </div>
          <div className="right-content">
            <img
              src={
                "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736331648413.png"
              }
              alt="fitness"
            />
          </div>
        </div>
      </div>

      <Recommendedone />
      <Recommendedtwo />
    </FitnessonclickStyled>
  );
};

export default Fitnessonclick;
