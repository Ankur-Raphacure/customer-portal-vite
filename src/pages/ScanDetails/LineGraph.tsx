import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Dot,
} from "recharts";

const data = [
  { time: "07:00 AM", price: 1200, labs: ["Apollo Labs", "Agilus Labs"] },
  { time: "08:00 AM", price: 1100, labs: ["Apollo Labs"] },
  {
    time: "09:00 AM",
    price: 1200,
    labs: ["Apollo Labs", "Agilus Labs", "Appolo Labs"],
  },
  { time: "10:00 AM", price: 1200, labs: [] },
  { time: "11:00 AM", price: 1200, labs: ["Agilus Labs"] },
  { time: "12:00 PM", price: 1200, labs: ["Apollo Labs"] },
  { time: "01:00 PM", price: 1200, labs: ["Agilus Labs", "+3 More Labs"] },
];

const CustomTooltips = ({ dataPoint }: any) => {
  return (
    <div
      style={{
        marginTop: "2rem",
        backgroundColor: "#fff",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <p>{`${dataPoint.time}`}</p>
      <p>{`Price: ₹${dataPoint.price}`}</p>
      {dataPoint.labs.length > 0 && (
        <ul style={{ padding: 0, listStyle: "none" }}>
          {dataPoint.labs.map((lab: any, index: any) => (
            <li key={index}>{lab}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  const defaultPrice = 1200;

  if (active && payload && payload.length) {
    return (
      <div
        className="tooltip-container"
        style={{
          marginTop: "2rem",
          backgroundColor: "#fff",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <p>{`${payload[0].payload.time}`}</p>
        <p>{`Price: ₹${defaultPrice}`}</p>
      </div>
    );
  }
  return null;
};

const LineGraphWithLabs = () => {
  const [selectedData, setSelectedData] = useState<any>(null);

  const handleDotClick = (dataPoint: any) => {
    setSelectedData(dataPoint);
  };

  return (
    <div style={{ width: "100%", padding: "20px", position: "relative" }}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            orientation="top"
            dataKey="time"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#666", fontSize: 12 }}
          />
          <Tooltip
            content={
              <CustomTooltip
                content={<CustomTooltips dataPoint={selectedData} />}
              />
            }
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#4A90E2"
            dot={{
              stroke: "#4A90E2",
              strokeWidth: 2,
              fill: "#fff",
              r: 6,
              onClick: handleDotClick,
            }}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Dropdown for lab details */}
      {selectedData && (
        <div
          style={{
            position: "absolute",
            top: "60%",
            left: "30%",
            width: "40%",
            backgroundColor: "#f5f5f5",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            borderRadius: "10px",
            padding: "15px",
          }}
        >
          <h4 style={{ margin: "0 0 10px" }}>Labs</h4>
          <ul style={{ padding: 0, listStyle: "none" }}>
            {selectedData.labs.map((lab: any, index: any) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                  borderBottom: "1px solid #ccc",
                  paddingBottom: "5px",
                }}
              >
                <span>{lab}</span>
                <span>₹{selectedData.price}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LineGraphWithLabs;
