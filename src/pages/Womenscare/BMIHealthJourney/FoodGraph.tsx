import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const FoodGraph = ({ props }: any) => {
  const value = 80;
  const data = [{ value: value }, { value: 100 - value }];

  return (
    <ResponsiveContainer width="30%" height={200}>
      <PieChart>
        <Pie
          data={data}
          startAngle={360}
          endAngle={0}
          innerRadius="70%"
          outerRadius="100%"
          dataKey="value"
          stroke="none"
        >
          <Cell key={`cell-0`} fill="#6bb1b4" />
          <Cell key={`cell-1`} fill="#e0e0e0" />
        </Pie>
        <text
          x="50%"
          y="45%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="20px"
        >
          {value?.toFixed(1)}
        </text>
        <text
          x="50%"
          y="59%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="28px"
        >
          cal
        </text>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default FoodGraph;
