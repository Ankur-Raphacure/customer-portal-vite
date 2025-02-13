import React, { useRef, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import styled from "styled-components";
import { GymModuleCardsStyled } from "./GymModuleCards.styled";
import { ReactComponent as WhatsApp } from "../../../assets/icons/WhatsApp.svg";
import { ReactComponent as Location } from "../../../assets/icons/location.svg";
import { CiLocationOn } from "react-icons/ci";

const GymAddToCartCard = ({ show, item, onHide }: any) => {
  const bookNowRef = useRef<any>(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (index: any) => {
    setSelectedPlan(index);
    if (bookNowRef.current) {
      bookNowRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookNow = () => {
    if (selectedPlan !== null) {
      console.log(`Plan ${selectedPlan + 1} selected!`);
    }
  };
  const stars = Array.from({ length: 5 }, (_, index) =>
    index < item?.rating ? "⭐" : "☆",
  );
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <GymModuleCardsStyled>
        <div className="ModalBackground">
          <div className="close-popUp-module-btn ">
            <button onClick={onHide} className="">
              X
            </button>
          </div>
          <div className="gym-plan-Card mb-3">
            <div className="GymInfoHeader">
              <div className="GymImage">
                <img
                  src={
                    item?.image
                      ? item?.image
                      : "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736337916958.png"
                  }
                  alt="Gym"
                />
              </div>
              <div className="GymDetails">
                <h5 className="GymName">{item?.name}</h5>
                <p className="Address">
                  <CiLocationOn className="add-location-icon" />#{" "}
                  {item?.address}, {item?.city}
                </p>
                <div className="Rating">
                  <p className="RatingStars"> {stars.join("")}</p>
                </div>
                <div className="Rating">
                  <span>{item?.rating}.0 [0 Reviews]</span>
                </div>
              </div>
              <p className="HelpButton">
                <WhatsApp className="me-2" />
                Need Help ?
              </p>
            </div>
          </div>
          <div className="SubscriptionCardsContainer">
            {item?.tests?.map((item: any, index: any) => (
              <div className="SubscriptionCard" key={index}>
                <div className="gym-plan-Card">
                  <p className="Badge">{stars.join("")}</p>
                  <p className="PlanDetails">
                    {item?.service_name
                      .split(" ")
                      .map((word: any, index: any) => {
                        return index === 2 ? (
                          <span key={index} style={{ color: "#9747ff" }}>
                            {word}
                          </span>
                        ) : (
                          <span key={index}> {word} </span>
                        );
                      })}
                  </p>
                  <div className="Rating">
                    <p className="Price">{item?.price?.actual_cost}/-</p>
                    <p className="DiscountedPrice">
                      {item?.price?.discounted_price}/-
                    </p>
                  </div>
                  <div className="Features">
                    <h5 className="FeatureItem">
                      {item?.service_name.split(" ")[0]} Months plan
                    </h5>
                    <h5 className="FeatureItem">Flexible Schedule</h5>
                  </div>
                  <button
                    className="SelectButton"
                    style={{
                      backgroundColor:
                        selectedPlan === index ? "#9747ff" : "transparent",
                      color: selectedPlan === index ? "#fff" : "#9747ff",
                    }}
                    onClick={() => handleSelectPlan(index)}
                  >
                    Select Plan
                  </button>
                </div>
              </div>
            ))}

            <button
              className="BookNowButton"
              onClick={handleBookNow}
              ref={bookNowRef}
            >
              Book Now
            </button>
          </div>
        </div>
      </GymModuleCardsStyled>
    </Modal>
  );
};

export default GymAddToCartCard;
