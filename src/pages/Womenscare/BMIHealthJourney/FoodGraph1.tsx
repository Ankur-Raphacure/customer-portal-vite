import React from "react";
import styled from "styled-components";
import { HealthJourneyStyled } from "./HealthJourney.styled";

interface BarProps {
  color: string;
  height: number;
}

const Bar = styled.div<BarProps>`
  width: 20%;
  background-color: ${(props) => props.color};
  height: ${(props) => props.height}%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
const FoodGraph1 = () => {
  return (
    <HealthJourneyStyled>
      <div className="BarChartContainer">
        <div className="col-md-12 mt-5 grp-heading-div">Average Intake</div>

        <div className="Chart">
          <Bar color="#a64dff" height={73}></Bar>
          <Bar color="#47c9ff" height={52}></Bar>
          <Bar color="#f2e266" height={25}></Bar>
        </div>
        <div className="LabelContainer">
          <div className="Label">Calorie</div>
          <div className="Label">Carbohydrate</div>
          <div className="Label">Fat</div>
        </div>
      </div>
    </HealthJourneyStyled>
  );
};

export default FoodGraph1;
