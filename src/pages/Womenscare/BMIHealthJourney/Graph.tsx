import React from "react";
import GaugeChart from "react-gauge-chart";

const Graph = ({ value }: any) => {
  const bmi = value;

  const formatToSignificantFigures = (value: any, figures: any) => {
    if (!value) return "0";
    const digits = figures - Math.floor(Math.log10(Math.abs(value))) - 1;
    return value.toPrecision(figures);
  };

  const formattedBmi = formatToSignificantFigures(bmi, 5);
  const percent = bmi ? ((bmi - 10) / 30) * 100 : 0;

  const getNeedleColor = (bmi: any) => {
    if (bmi < 18.5) return "#FF5733";
    if (bmi < 25) return "#28a745";
    if (bmi < 30) return "#007bff";
    return "#c70039";
  };

  return (
    <div
      style={{
        textAlign: "center",
        // padding: "20px",
      }}
    >
      <h2
        style={{ marginBottom: "20px", fontWeight: "bold" }}
        className="grp-header"
      >
        BMI Calculator
      </h2>
      <GaugeChart
        id="bmi-gauge-chart"
        nrOfLevels={3}
        arcsLength={[0.15, 0.35, 0.25, 0.25]}
        colors={["#FF5733", "#28a745", "#007bff", "#c70039"]}
        percent={percent}
        arcPadding={0}
        needleColor={getNeedleColor(bmi)}
        needleBaseColor="#000"
        textColor="#000"
      />
      <h3 style={{ marginTop: "20px", fontWeight: "bold", color: "#fff" }}>
        BMI = {formattedBmi}
      </h3>
    </div>
  );
};

export default Graph;
