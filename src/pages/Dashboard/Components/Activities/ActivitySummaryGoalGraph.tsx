import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import Steps from "../../../../assets/images/steps.png";

const data = [{ name: "Value", value: 50, color: "#0000cc" }]; // Lighter blue for reduced intensity
const cx = 150; // Center X
const cy = 200; // Center Y
const iR = 50; // Inner radius
const oR = 100; // Outer radius

const ActivitySummaryGoalGraph = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          dataKey="value"
          startAngle={180}
          endAngle={0}
          data={data}
          cx={cx}
          cy={cy}
          innerRadius={iR}
          outerRadius={oR}
          fill="#8884d8"
          stroke="none" // Ensure no stroke on the Pie
        >
          <Cell fill={data[0].color} stroke="none" /> {/* No stroke on Cell */}
        </Pie>
        <image
          href={Steps}
          x={cx - 10} // Adjust X position based on your image size
          y={cy - 25} // Adjust Y position to center it vertically
          width="30" // Set the width of the image
          height="30" // Set the height of the image
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ActivitySummaryGoalGraph;
