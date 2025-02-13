import React from "react";
import { ScanCenterCardsStyled } from "./ScanCenterCards.styled";
import { useHistory } from "react-router-dom";
import { IoMdStar } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";

const ScanCenterCards = (props: any) => {
  const history = useHistory();
  const { viewScanCards, handleNavigateDetails, sectionName } = props;

  return (
    <ScanCenterCardsStyled>
      <div className="scanCenter-main-card-container">
        <div
          className="scanCenter-card-container"
          onClick={() => handleNavigateDetails(viewScanCards)}
        >
          {sectionName && (
            <div className="rating-banner-div">
              <div className="bannerWrapper">
                <div className="rectangle">
                  <IoMdStar className="me-2" />
                  {viewScanCards?.rating}
                </div>
                <div className="triangle"></div>
              </div>
            </div>
          )}

          <div className="scanCenter-card-header">
            <div className="scanCenter-company-logo">
              <img src={viewScanCards?.image} alt="Company Logo" />
            </div>
            <div className="scanCenter-badge">
              <span>
                Rapha <br /> Assured
              </span>
              <img
                src=" https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1733748919984.png"
                alt="Shield Icon"
              />
            </div>
          </div>
          <div className="scanCenter-card-body">
            <h3>{viewScanCards?.name}</h3>
            {sectionName !== "doctor" && (
              <div className="scanCenter-rating">
                <span className="-scanCenter-star">★</span>
                <span className="-scanCenter-star">
                  {viewScanCards?.rating}
                </span>
              </div>
            )}

            <div className="d-flex align-items-baseline">
              <CiLocationOn className="me-2" />
              <p>{viewScanCards?.address}</p>
            </div>
          </div>
        </div>
      </div>
    </ScanCenterCardsStyled>
  );
};

export default ScanCenterCards;
