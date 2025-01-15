import React, { useState } from "react";
import { HowRaphaWorksStyled } from "./HowRaphaWorks.styled";

const HowRaphaWorks = () => {
  const [activeTab, setActiveTab] = useState<
    | "In-House Clinic"
    | "Vitals Tracking"
    | "Facility Monitoring"
    | "Improved Efficiency"
  >("In-House Clinic");

  const tabs = [
    "In-House Clinic",
    "Vitals Tracking",
    "Facility Monitoring",
    "Improved Efficiency",
  ];

  const content: { [key: string]: string[] } = {
    "In-House Clinic": [
      "Convenient access to care.",
      "Immediate on-site medical attention.",
      "Reduces time spent on offsite visits.",
      "Increases employee satisfaction.",
      "Promotes regular health check-ups.",
      "Early detection of health issues.",
    ],
    "Vitals Tracking": [
      "Monitors vital signs regularly.",
      "Helps detect abnormalities early.",
      "Improves overall health tracking.",
      "Provides data for better health insights.",
      "Reduces risks of severe health issues.",
    ],
    "Facility Monitoring": [
      "Ensures cleanliness and safety.",
      "Monitors facility usage and needs.",
      "Improves resource allocation.",
      "Enhances employee safety.",
      "Supports efficient facility management.",
    ],
    "Improved Efficiency": [
      "Streamlines healthcare processes.",
      "Reduces wait times.",
      "Enhances productivity.",
      "Improves overall health outcomes.",
      "Optimizes resource usage.",
    ],
  };

  return (
    <HowRaphaWorksStyled>
      <div className="how-rapha-works">
        <div className="header-section">
          <h1>
            How Rapha<sup>+</sup> Works
          </h1>
        </div>
        <div className="imgWrapper">
        <div className="image-section">
          <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736414617190.png" alt="Illustrative description" />
        </div>
        <div className="content-section">
          <div className="tabs-section">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab-button ${activeTab === tab ? "active" : ""}`}
                onClick={() =>
                  setActiveTab(
                    tab as
                      | "In-House Clinic"
                      | "Vitals Tracking"
                      | "Facility Monitoring"
                      | "Improved Efficiency"
                  )
                }
              >
                {tab}
              </button>
            ))}
          </div>
          <ul>
            {content[activeTab].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    </HowRaphaWorksStyled>
  );
};

export default HowRaphaWorks;
