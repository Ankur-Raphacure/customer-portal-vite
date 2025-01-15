import React from "react";
import { AnalyticsStyled } from "./Analytics.styled";

const Analytics = () => {
  return (
    <AnalyticsStyled>
      <div className="practice-analytics-container">
        <div className="practice-analytics-card">
          <div className="practice-analytics-image">
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733135096749.png"
              alt="Practice Analytics"
            />
          </div>
          <div className="practice-analytics-content">
            <h1 className="practice-analytics-title">Practice Analytics</h1>
            <p className="practice-analytics-description">
              Make informed decisions with in-depth practice analytics.
            </p>
            <ul className="practice-analytics-features">
              <li>
                <span className="feature-bullet">•</span>
                <span className="feature-text">
                  Real-time metrics on patient flow
                </span>
              </li>
              <li>
                <span className="feature-bullet">•</span>
                <span className="feature-text">
                  Financial reports and revenue tracking
                </span>
              </li>
              <li>
                <span className="feature-bullet">•</span>
                <span className="feature-text">
                  Patient demographics and visit trends
                </span>
              </li>
              <li>
                <span className="feature-bullet">•</span>
                <span className="feature-text">
                  Customizable reports for deeper analysis
                </span>
              </li>
              <li>
                <span className="feature-bullet">•</span>
                <span className="feature-text">
                  Gain insights for better practice management
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AnalyticsStyled>
  );
};

export default Analytics;
