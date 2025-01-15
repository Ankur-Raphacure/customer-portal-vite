import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { RefranceGraphStyled } from "./RefranceGraph.styled";

const data = [
  { time: "6AM", price: 7500 },
  { time: "7AM", price: 7500 },
  { time: "8AM", price: 7500 },
  { time: "9AM", price: 7500 },
  { time: "10AM", price: 7500 },
  { time: "11AM", price: 7500 },
  { time: "12PM", price: 7500 },
  { time: "1PM", price: 7500 },
  { time: "2PM", price: 7500 },
  { time: "3PM", price: 7500 },
  { time: "4PM", price: 7500 },
  { time: "5PM", price: 7500 },
  { time: "6PM", price: 7500 },
  { time: "7PM", price: 6800 },
  { time: "8PM", price: 6800 },
  { time: "9PM", price: 6800 },
  { time: "10PM", price: 6800 },
  { time: "11PM", price: 6800 },
  { time: "12AM", price: 6800 },
  { time: "1AM", price: 6800 },
  { time: "2AM", price: 6800 },
  { time: "3AM", price: 7500 },
  { time: "4AM", price: 7500 },
  { time: "5AM", price: 7500 },
  { time: "6AM", price: 7500 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <RefranceGraphStyled>
        <div className="custom-tooltip">
          <div className="tooltip-content">
            <p className="center-name">Bioline Scan Centre</p>
            <p className="scan-type">Body Scan</p>
            <p className="appointment-time">11 June | 7:30 PM</p>
            <p className="offer-price">{`Offer price: ₹${payload[0].value}`}</p>
          </div>
        </div>
      </RefranceGraphStyled>
    );
  }
  return null;
};

const RefranceGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 50, right: 50, left: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis dataKey="price" />
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#A259FF"
          strokeWidth={4}
          dot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RefranceGraph;
