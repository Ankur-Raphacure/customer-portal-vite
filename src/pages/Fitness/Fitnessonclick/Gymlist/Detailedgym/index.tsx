import React from "react";
import { DetailedgymStyled } from "./DetailedgymStyled.Styled";
import SearchBar from "../SearchBar";
import GymlistDetail from "../GymlistDetail";
import Gymcard from "../Gymcard";
import Gymbody from "./Gymbody";

const Detailedgym = () => {
  return (
    <DetailedgymStyled>
      <div className="gymlist-wrapper">
        <div className="gymrow">
          <div className="leftsec">
            <SearchBar />
            <Gymbody />
            <GymlistDetail />
          </div>
          <div className="rightsec">
            <Gymcard />
          </div>
        </div>
      </div>
    </DetailedgymStyled>
  );
};

export default Detailedgym;
