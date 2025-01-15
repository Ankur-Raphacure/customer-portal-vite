import React from "react";
import styled from "styled-components";
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { HealthJourneyStyled } from "./HealthJourney.styled";

const TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 2px;
    background-color: #ddd;
    z-index: -1;
    transform: translateX(-50%);
  }

  &:first-child:after {
    left: 50%;
    width: 50%;
    transform: translateX(0);
  }

  &:last-child:after {
    width: 50%;
  }
`;

const data = [
  { name: "Mon", hours: 7 },
  { name: "Tue", hours: 3.5 },
  { name: "Wed", hours: 2 },
  { name: "Thu", hours: 3.5 },
  { name: "Fri", hours: 3.5 },
  { name: "Sat", hours: 3.5 },
  { name: "Sun", hours: 3.5 },
];

const Example = () => {
  const items = Array(7).fill("7h");
  return (
    <HealthJourneyStyled>
      <div className="row ">
        <div className="col-md-6 grp-heading-div">
          <h4 className="">Daily water intake</h4>
        </div>

        <div className="col-md-6 grp-heading-div">
          <h4>Last 7 days</h4>
        </div>
      </div>
      <div className="TimelineContainer">
        {items.map((item, index) => (
          <TimelineItem key={index}>
            <div className="TimelineLabel">{item}</div>
            <div className="TimelineCircle"></div>
          </TimelineItem>
        ))}
      </div>
      <div style={{ width: "100%", height: 260 }}>
        <ResponsiveContainer>
          <ComposedChart
            data={data}
            margin={{
              top: 35,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" />
            <YAxis axisLine={false} tick={false} /> <Tooltip />
            <Bar dataKey="hours" barSize={20} fill="#3BC4F4" />
            <Line type="monotone" dataKey="hours" stroke="" strokeWidth={3} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </HealthJourneyStyled>
  );
};

export default Example;
