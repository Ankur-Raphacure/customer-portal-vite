import React, { useState } from "react";
import { BMICalculatorStyled } from "./BMICalculator.styled";
import { FaShare } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import ShareModal from "../../../components/ShareModal/ShareModal";

type Meals = {
  "BREAK FAST": { description: string; image: string }[];
  LUNCH: { description: string; image: string }[];
  DINNER: { description: string; image: string }[];
};
const cardData = [
  { id: 1, title: "Week", number: 1, name: "Week-1" },
  { id: 2, title: "Week", number: 2, name: "Week-2" },
  { id: 3, title: "Week", number: 3, name: "Week-3" },
  { id: 4, title: "Week", number: 4, name: "Week-4" },
];
const dayList = [
  { day: "Day 1" },
  { day: "Day 2" },
  { day: "Day 3" },
  { day: "Day 4" },
  { day: "Day 5" },
  { day: "Day 6" },
  { day: "Day 7" },
];

const meals = {
  "BREAK FAST": [
    {
      description: "1 Bowl of oatmeal with mixed berries",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736337537066.png",
    },
    {
      description: "1 Boiled egg",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736337588253.png",
    },
    {
      description: "Green Tea",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736337632530.png",
    },
  ],
  LUNCH: [
    {
      description: "Grilled chicken salad with lots of greens",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736337676501.png",
    },
    {
      description: "Cherry tomatoes",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736337713280.png",
    },
    {
      description: "Cucumber and Olive oil dressing",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736337766512.png",
    },
  ],
  DINNER: [
    {
      description: "Grilled salmon",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736337806360.png",
    },
    {
      description: "Steamed broccoli",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736337846750.png",
    },
    {
      description: "Quinoa and Mixed greens salad",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736337893659.png",
    },
  ],
};

const time = [{ slot: "BREAK FAST" }, { slot: "LUNCH" }, { slot: "DINNER" }];

const MealCategory = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [openShareModel, setOpenShareModel] = useState<any>(false);

  const shareURL = window.location.href;

  const handleCardClick = (id: any) => {
    setSelectedCard(id);
  };
  return (
    <BMICalculatorStyled>
      <ShareModal
        show={openShareModel}
        url={shareURL}
        title="Share on"
        handleClose={() => {
          setOpenShareModel(false);
        }}
        onCopyClick={() => {
          navigator.clipboard.writeText(shareURL);
        }}
      />
      <div className="banner-div">
        <div className="img-div">
          <img
            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736336983146.png"
            alt="Fruit"
          />
        </div>
        <div className="card-container">
          {cardData.map((card) => (
            <div key={card.id} className="card-div">
              <div
                className={`card ${selectedCard === card.id ? "selected" : ""}`}
                onClick={() => handleCardClick(card.id)}
              >
                <div className="card-body">
                  <h4
                    style={{
                      color: selectedCard === card.id ? "#9747ff" : "black",
                    }}
                  >
                    {card.title}
                  </h4>
                  <div
                    className="sub-card"
                    style={{
                      color: selectedCard === card.id ? "#9747ff" : "black",
                      border:
                        selectedCard === card.id
                          ? "1px solid #9747ff"
                          : "1px solid #ccc",
                    }}
                  >
                    <h4
                      style={{
                        color: selectedCard === card.id ? "#9747ff" : "black",
                      }}
                    >
                      {card.number}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="list-div">
        {selectedCard === 1 && (
          <div className="name-display">
            {dayList.map((item, index) => (
              <div key={index}>
                <h4 className="day-div">{item.day}</h4>

                <div className="slot-div">
                  {time.map((slot, slotIndex) => (
                    <div key={slotIndex}>
                      <h4 className="slot-title">{slot.slot}</h4>
                      <ul>
                        {(meals[slot.slot as keyof Meals] || []).map(
                          (meal: any, mealIndex: any) => (
                            <div className="name-div">
                              <p key={mealIndex}>
                                <img
                                  src={meal.image}
                                  alt={meal.description}
                                  style={{
                                    width: "25px",
                                    height: "25px",
                                    marginRight: "10px",
                                  }}
                                />
                                {meal.description}
                              </p>
                            </div>
                          )
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedCard === 2 && (
          <div className="name-display">
            {dayList.map((item, index) => (
              <div key={index}>
                <h4 className="day-div">{item.day}</h4>

                <div className="slot-div">
                  {time.map((slot, slotIndex) => (
                    <div key={slotIndex}>
                      <h4 className="slot-title">{slot.slot}</h4>
                      <ul>
                        {(meals[slot.slot as keyof Meals] || []).map(
                          (meal: any, mealIndex: any) => (
                            <div className="name-div">
                              <p key={mealIndex}>
                                <img
                                  src={meal.image}
                                  alt={meal.description}
                                  style={{
                                    width: "25px",
                                    height: "25px",
                                    marginRight: "10px",
                                  }}
                                />
                                {meal.description}
                              </p>
                            </div>
                          )
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        {selectedCard === 3 && (
          <div className="name-display">
            {dayList.map((item, index) => (
              <div key={index}>
                <h4 className="day-div">{item.day}</h4>

                <div className="slot-div">
                  {time.map((slot, slotIndex) => (
                    <div key={slotIndex}>
                      <h4 className="slot-title">{slot.slot}</h4>
                      <ul>
                        {(meals[slot.slot as keyof Meals] || []).map(
                          (meal: any, mealIndex: any) => (
                            <div className="name-div">
                              <p key={mealIndex}>
                                <img
                                  src={meal.image}
                                  alt={meal.description}
                                  style={{
                                    width: "25px",
                                    height: "25px",
                                    marginRight: "10px",
                                  }}
                                />
                                {meal.description}
                              </p>
                            </div>
                          )
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        {selectedCard === 4 && (
          <div className="name-display">
            {dayList.map((item, index) => (
              <div key={index}>
                <h4 className="day-div">{item.day}</h4>

                <div className="slot-div">
                  {time.map((slot, slotIndex) => (
                    <div key={slotIndex}>
                      <h4 className="slot-title">{slot.slot}</h4>
                      <ul>
                        {(meals[slot.slot as keyof Meals] || []).map(
                          (meal: any, mealIndex: any) => (
                            <div className="name-div">
                              <p key={mealIndex}>
                                <img
                                  src={meal.image}
                                  alt={meal.description}
                                  style={{
                                    width: "25px",
                                    height: "25px",
                                    marginRight: "10px",
                                  }}
                                />
                                {meal.description}
                              </p>
                            </div>
                          )
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="btn-div">
          <button className="button me-4" type="button">
            <span className="button__text">Download</span>
            <span className="button__icon">
              {" "}
              <FaArrowDown className="svg" />
            </span>
          </button>
          <button
            className="button-with-icon"
            onClick={() => {
              setOpenShareModel(true);
            }}
          >
            <FaShare className="icon" />
            <span className="text">Share</span>
          </button>
        </div>
      </div>
    </BMICalculatorStyled>
  );
};

export default MealCategory;
