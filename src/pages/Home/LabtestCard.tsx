import React from "react";
import { LabtestCardStyled } from "./LabtestCard.styled";
import { FaGreaterThan } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const LabtestCard = ({ imgUrl, title, desc, id }: any) => {
  const history = useHistory();
  return (
    <LabtestCardStyled>
      <img src={imgUrl} alt="" width={75} height={75} />
      <h3>{title}</h3>
      <p>{desc}</p>
      <div
        className="clickBtn"
        onClick={() => history.push(`/labTestDetils/${id}`)}
      >
        <img
          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1732275672880.png"
          alt=""
        />
      </div>
    </LabtestCardStyled>
  );
};

export default LabtestCard;
