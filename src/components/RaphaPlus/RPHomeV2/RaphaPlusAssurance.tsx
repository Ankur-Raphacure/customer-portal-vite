import React from "react";
import { useHistory } from "react-router-dom";
import { RaphaPlusAssuranceStyled } from "./RaphaPlusAssurance.styled";

const RaphaPlusAssurance = () => {
  const history = useHistory();
  return (
    <RaphaPlusAssuranceStyled>
      <div className="wrapper">
        <div className="content">
          <h2>The Rapha+ Assurance</h2>
          <p>
            Experience our practice management tool with confidence - your
            satisfaction is our commitment, and we’re here to ensure your
            success.
          </p>
          <div className="buttons">
            {/* <a 
            href="https://www.raphadoc.com/signin"
            target="_blank"
            rel="noopener noreferrer"
            className="free-trial"

            >Free Trial</a> */}
            <button
              className="free-trial"
              onClick={() => history.push("https://www.raphadoc.com/signin")}
            >
              Free Trial
            </button>
            <button
              className="book-demo"
              onClick={() => history.push("/bookdemo")}
            >
              Book Demo
            </button>
          </div>
        </div>
        <div className="image">
          <img
            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735198158016.png"
            alt="RaphaPlus Assurance"
          />
        </div>
      </div>
    </RaphaPlusAssuranceStyled>
  );
};

export default RaphaPlusAssurance;
