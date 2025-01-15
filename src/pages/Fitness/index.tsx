import React from "react";
import { FitnessStyled } from "./FitnessStyled.styled";


import Category from "./Category";
import ProCoarses from "./ProCoarses";
import Recommendedone from "./Recommendedone";
import Recommendedtwo from "./Recommendedtwo";

const Fitness = () => {
  return (
    <FitnessStyled>
      <div className="searchbar">
        <input type="text" placeholder="Search Gym , Swimming , Sports wear" />
      </div>

      <div className="banner-wrapper">
        <div className="banner">
          <div className="left-content">
            <h2>Transform Your Fitness Journey Today</h2>
            <p className="ptext">
              Achieve your fitness goals with expert-led virtual training. Join
              today and experience convenient, effective workouts from anywhere!
            </p>
            <p className="pprice">
              Complete Virtual training starting at{" "}
              <span className="price"> ₹ 99</span>
            </p>
            <button className="subscribe">Subscribe Now</button>
          </div>
          <div className="right-content">
            <img src={"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736403764237.png"} alt="fitness" />
          </div>
        </div>
      </div>

      <Category />

      <ProCoarses />

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
            <img src={"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736406171478.png"} alt="fitness" />
          </div>
        </div>
      </div>

      <Recommendedone />
      <Recommendedtwo />
    </FitnessStyled>
  );
};

export default Fitness;
