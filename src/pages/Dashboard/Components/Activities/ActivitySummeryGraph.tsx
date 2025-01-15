import React from "react";
import { BarChart, Bar, ResponsiveContainer, LabelList } from "recharts";
import { CareStyled } from "./CareStyled.Styled";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

const data = [
  { name: "A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "F", uv: 2390, pv: 3800, amt: 2500 },
];

const ActivitySummaryGraph = () => {
  return (
    <CareStyled>
      <div className="row justify-content-center">
        <div className="col-12 col-md-12">
          <div style={{ height: "250px" }} className="grph-card-div">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={data}
                barCategoryGap="35%"
                barGap={5}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#9747ff" stopOpacity={1} />
                    <stop offset="100%" stopColor="#560dff" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <Bar dataKey="uv" fill="url(#colorUv)">
                  <LabelList dataKey="name" position="bottom" />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </CareStyled>
  );
};

export default ActivitySummaryGraph;
