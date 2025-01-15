import React from "react";
import { AnalyticsStyled } from "./Analytics.styled";

const OnlinePresence = () => {
  return (
    <AnalyticsStyled>
      <div className="practice-analytics-container">
        <div className="practice-analytics-card">
          <div className="practice-analytics-image">
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735388868112.png"
              alt="Practice Analytics"
            />
          </div>
          <div className="practice-analytics-content">
            <h1 className="practice-analytics-title">Online Presence</h1>
            <p className="practice-analytics-description">
              Attract and retain patients with a strong online presence.
            </p>
            <ul className="practice-analytics-features">
              <li>
                <span className="feature-bullet">•</span>
                <span className="feature-text">Build your own web page. </span>
              </li>
              <li>
                <span className="feature-bullet">•</span>
                <span className="feature-text">
                  Mobile-friendly and easy to navigate
                </span>
              </li>
              <li>
                <span className="feature-bullet">•</span>
                <span className="feature-text">
                  Simple and quick do it yourself system
                </span>
              </li>
              <li>
                <span className="feature-bullet">•</span>
                <span className="feature-text">
                  Review and Change webpage as you like
                </span>
              </li>
              <li>
                <span className="feature-bullet">•</span>
                <span className="feature-text">
                  Entire process to complete in under 10 mins!
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </AnalyticsStyled>
  );
};

export default OnlinePresence;
