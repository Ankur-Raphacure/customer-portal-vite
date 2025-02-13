import React from "react";
import { ComingSoonStyled } from "./ComingSoon.styled";

const ComingSoon = () => {
  return (
    <ComingSoonStyled>
      <div className="coming-soon-container">
        <img
          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736414215734.png"
          className="coming-soon-image"
        />
      </div>
    </ComingSoonStyled>
  );
};

export default ComingSoon;
