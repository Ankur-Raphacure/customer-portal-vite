import React from "react";
import { GetStartedStyled } from "./GetStarted.styled";

const GetStarted = ({ siteDetails }: any) => {
  return (
    <GetStartedStyled>
      <div className="getstartedcontainer">
        <div className="text-section">
          <h1 className="title">Get started!</h1>
          <p className="description">
            Do consectetur proident proident id eiusmod deserunt consequat
            pariatur ad ex velit do Lorem reprehenderit.
          </p>
          <button className="button">Book appointment</button>
        </div>
        <div className="image-section">
          <img
            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/112825-1733827703705.png"
            alt="Person using a smartphone"
            className="image"
          />
        </div>
      </div>
    </GetStartedStyled>
  );
};

export default GetStarted;
