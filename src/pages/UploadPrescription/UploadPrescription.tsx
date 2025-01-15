import React, { useEffect } from "react";
import { UploadPrescriptionStyled } from "./UploadPrescription.styled";
import { FiArrowRight } from "react-icons/fi"; // Import the arrow icon
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const UploadPrescription = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const section = location?.state;

  return (
    <UploadPrescriptionStyled>
      <div className="topGrid">
        <div
          className="leftGrid gridCard newPrescription"
          onClick={() =>
            history.push("/uploadprescription/uploadsubprescription", section)
          }
        >
          <div className="prescriptionContent">
            <h2>New Prescription Upload here</h2>
            <p>Upload your prescriptions and we will send you your medicines</p>
          </div>
          <div className="imageContainer">
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1732791901719.png"
              alt="Prescription Illustration"
            />
          </div>
          <div
            className="arrowContainer cursor-pointer"
            onClick={() =>
              history.push("/uploadprescription/uploadsubprescription", section)
            }
          >
            <FiArrowRight size={30} />
          </div>
        </div>
        <div className="rightGrid">
          <div
            className="gridCard homeCenter"
            onClick={() => history.push("/scanmedicine", section)}
          >
            <div className="cardContent">
              {section === "pharmacy" ? (
                <>
                  <h2>Scan your medicines strip/ bottle</h2>
                  <p>
                    Want to just scan your medicine, go ahead and we can take
                    the order
                  </p>
                </>
              ) : (
                <>
                  <h2>Home/Center Visit</h2>
                  <p>
                    You can book lab tests and packages from either home or
                    choose to visit the centre
                  </p>
                </>
              )}
            </div>
            <div className="imageContainer">
              {section === "pharmacy" ? (
                <>
                  <img
                    src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1733994436539.png"
                    alt=""
                  />
                  <div className="newpharmacyPrescription">
                    <div className="arrowContainer cursor-pointer ">
                      <FiArrowRight size={30} />
                    </div>
                  </div>
                </>
              ) : (
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1732792744087.png"
                  alt="Home Center Illustration"
                />
              )}
            </div>
          </div>
          <div className="rightBottomGrid">
            <div
              className="gridCard previousOrder"
              onClick={() => history.push("/dashboard")}
            >
              <div className="cardContent">
                <h2>Previous Order</h2>
                <p>Select from your previous orders</p>
              </div>
              <div className="imageContainer">
                <div className="Previous-btn"></div>
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1732793084089.png"
                  alt="Previous Order Illustration"
                />
                <div className="Previous-btn">
                  <button
                    className="btn"
                    onClick={() => history.push("/dashboard")}
                  >
                    <FiArrowRight size={30} />
                  </button>
                </div>
              </div>
            </div>
            <div className="gridCard noPrescription">
              <div className="cardContent">
                <h2>No Prescription?</h2>
                <p>Chat with our team on WhatsApp to get your prescription.</p>
              </div>
              <div className="imageContainer">
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1732793160227.png"
                  alt="No Prescription Illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomGrid">
        <div className="gridCard brands">
          <div className="cardContent">
            <h2>Brands</h2>
            <p>
              Partnering with renowned brands to deliver exceptional healthcare
              products and services.
            </p>
          </div>
          <div className="imageContainer">
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1732796615339.png"
              alt="No Brands Illustration"
            />
          </div>
        </div>{" "}
        <div className="gridCard savings">
          <div className="cardContent">
            <h2>Savings</h2>
            <p>
              Discover cost-effective medicine options, often saving up to 80%.
            </p>
          </div>
          <div className="imageContainer">
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1732796660037.png"
              alt="No Prescription Illustration"
            />
          </div>
        </div>
      </div>
    </UploadPrescriptionStyled>
  );
};

export default UploadPrescription;
