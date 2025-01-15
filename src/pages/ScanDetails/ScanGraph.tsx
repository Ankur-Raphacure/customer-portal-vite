import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const ScanGraph = (props: any) => {
  const grpData = props?.item;
  console.log(grpData, "grpData");

  const data = grpData?.map((item: any) => ({
    name: item?.name,
    uv: 97,
    Prices: item?.price?.discounted_price,
    Price: item?.price?.discounted_price,
  }));
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis tick={{ fill: "transparent" }} tickFormatter={() => ""} />{" "}
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="Price"
            fill="#eff0ff"
            stroke="#f3c8c8"
          />
          <Bar dataKey="Prices" barSize={20} fill="#e0c6fd" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScanGraph;
