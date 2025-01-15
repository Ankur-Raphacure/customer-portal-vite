import React from "react";
import TestTubesIcon from "../../assets/images/labtest/testtubes.svg";
import { BsCart2 } from "react-icons/bs";
import { HealthSaverCardStyled } from "./HealthSaverCard.styled";
import PackageQuantityBtn from "../../pages/LabTest/Packages/PackageQuantityBtn/PackageQuantityBtn";

const Banner = ({ discount }: any) => {
  return (
    <div className="bannerWrapper">
      <div className="rectangle">{discount}% Off</div>
      <div className="triangle"></div>
    </div>
  );
};

const HealthSaverCard = ({
  title,
  subtitle,
  featureButtonText,
  reportTime,
  testCount,
  originalPrice,
  discountedPrice,
  discount,
  hoverTitle,
  addToCart,
  section,
  origin,
  packageDetails,
}: any) => {
  const addItemToCard = () => {
    addToCart();
  };
  return (
    <HealthSaverCardStyled>
      <div
        className="d-flex flex-column gap-4 cursor-pointer"
        onClick={() => {
          if (origin !== "packageDetails" && addToCart) {
            addItemToCard();
          }
        }}
      >
        <div className="imgWrapper">
          <img
            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1732626138544.png"
            alt="Background"
          />
          <Banner discount={discount} />
          <div className="textContent">
            <div>
              <h2 title={hoverTitle}>{title}</h2>
              {/* <h3
                dangerouslySetInnerHTML={{
                  __html: subtitle,
                }}
              ></h3> */}
            </div>
            <div className="w-100 d-flex justify-content-end">
              <button className="featureButton">
                <img src={TestTubesIcon} alt="Feature Icon" />
                {featureButtonText}
              </button>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row w-full justify-content-between px-3">
          <div className="d-flex flex-row logo align-items-center">
            {section === "radiology" ? (
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1733906583474.png"
                alt="Clinic Logo"
              />
            ) : (
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1732626243585.png"
                alt="Reports Logo"
              />
            )}

            <div>
              {section === "radiology" ? (
                <h3>In Clinic</h3>
              ) : (
                <>
                  <h3>Report Within</h3>
                  <h4>{reportTime}</h4>
                </>
              )}
            </div>
          </div>
          {section !== "radiology" && (
            <div className="d-flex flex-row logo tests">
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1732626189597.png"
                alt="Lab Tests Logo"
              />
              <div>
                <h3>Includes</h3>
                <h4>{testCount} Tests</h4>
              </div>
            </div>
          )}
        </div>
        <div className="bottomSec">
          <div className="prices">
            <div className="realPrice">₹{originalPrice}</div>
            <div className="discountedPrice">₹{discountedPrice}</div>
          </div>
          {origin !== "packageDetails" && (
            <button>
              Add
              <BsCart2 />
            </button>
          )}
        </div>
        {origin === "packageDetails" && (
          <div className="more-labs-action-btns">
            <button
              className="details-btn poppins-semibold"
              onClick={() => packageDetails.setShowTestDetails()}
            >
              View Details
            </button>

            {packageDetails.isAddedtoList === -1 ? (
              <button
                className="add-to-cart-btn poppins-semibold"
                onClick={() => {
                  packageDetails.testaddToReview();
                }}
              >
                Add to Cart
              </button>
            ) : (
              <PackageQuantityBtn
                index={packageDetails.isAddedtoList}
                item={packageDetails?.testData}
                removeToReview={packageDetails.testRemoveToReview}
              />
            )}
          </div>
        )}
      </div>
    </HealthSaverCardStyled>
  );
};

export default HealthSaverCard;
