import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { KeyAspectsStyled } from "./KeyAspects.styled";
import { useHistory } from "react-router-dom";

const cardData = [
  {
    id: 1,
    imgSrc:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736340285099.png",
    title:
      "1. How many nights per week do you get at least 7-8 hours of sleep?",
    options: [
      { label: "0-2 Nights", value: "0-2" },
      { label: "3-4 Nights", value: "3-4" },
      { label: "5-7 Nights", value: "5-7" },
    ],
  },
  {
    id: 2,
    imgSrc:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736340311854.png",
    title: "2, How often do you engage in physical activity each week?",
    options: [
      { label: "0-1 times", value: "0-1" },
      { label: "2-3 Times", value: "2-3" },
      { label: "4+ times", value: "4+" },
    ],
  },
  {
    id: 3,
    imgSrc:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736340370779.png",
    title: "3, How frequently do you experience chronic pain or discomfort?",
    options: [
      { label: "Frequently", value: "Frequently" },
      { label: "Occasionally", value: "Occasionally" },
      { label: "Rarely/Never", value: "Rarely/Never" },
    ],
  },
  {
    id: 4,
    imgSrc:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736340415035.png",
    title: "4, Do you smoke ? If so, how frequently?",
    options: [
      { label: "Daily", value: "Daily" },
      { label: "Occasionally", value: "Occasionally" },
      { label: "Rarely/Never", value: "Rarely/Never" },
    ],
  },
  {
    id: 5,
    imgSrc:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736340445626.png",
    title: "5, You do go for regular medical checkups",
    options: [
      { label: "Daily", value: "Daily" },
      { label: "Occasionally", value: "Occasionally" },
      { label: "Rarely/Never", value: "Rarely/Never" },
    ],
  },
  {
    id: 6,
    imgSrc:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736340533945.png",
    title: "6,  Do you drink  ? If so, how frequently? ",
    options: [
      { label: "Daily", value: "Daily" },
      { label: "Occasionally", value: "Occasionally" },
      { label: "Rarely/Never", value: "Rarely/Never" },
    ],
  },
  {
    id: 7,
    imgSrc:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736340552863.png",
    title: "7, How healthy do you consider your diet to be?",
    options: [
      { label: "Poor", value: "Poor" },
      { label: "Fair", value: "Fair" },
      { label: "Good", value: "Good" },
    ],
  },
  {
    id: 8,
    imgSrc:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736340577933.png",
    title: "8, I  drink water throughout the day to stay hydrated.",
    options: [
      { label: "Rarely", value: "Rarely" },
      { label: "Occasionally", value: "Occasionally" },
      { label: "Regularly", value: "Regularly" },
    ],
  },
];
interface Message {
  message: string;
  recommendations: string;
  sub_message: string;
}
const KeyAspects = () => {
  const history = useHistory();
  const [selectedOptions, setSelectedOptions] = useState<any>({});

  const locationData = window.location.pathname;

  console.log(locationData, "12345");

  const handleSelection = (cardId: any, value: any) => {
    setSelectedOptions((prev: any) => ({
      ...prev,
      [cardId]: prev[cardId] === value ? "" : value,
    }));
  };

  const getMessage = (cardId: number): Message | null => {
    const selectedNight = selectedOptions[cardId];
    if (!selectedNight) return null;

    switch (selectedNight) {
      case "0-2":
        return {
          message: "Poor sleep habits.",
          sub_message: "Recommendations",
          recommendations:
            " .Establish a consistent bedtime routine, limit screen time before bed, and create a comfortable sleep environment.",
        };
      case "3-4":
        return {
          message: "Moderately active.",
          sub_message: "Recommendations",
          recommendations:
            "Poor/Fair: Establish a consistent bedtime routine, limit screen time before bed, and create a comfortable sleep environment.",
        };
      case "5-7":
        return {
          message: "Good",
          sub_message: "Recommendations",
          recommendations:
            " Maintain current habits and manage stress to ensure quality sleep.",
        };

      case "0-1":
        return {
          message: "Rare physical activity.",
          sub_message: "Recommendations",
          recommendations:
            "Recommendations: Try to incorporate more physical activity into your weekly routine, such as walking, jogging, or attending fitness classes.",
        };
      case "2-3":
        return {
          message: "Rare physical activity.",
          sub_message: "Recommendations",
          recommendations:
            "Recommendations: Try to incorporate more physical activity into your weekly routine, such as walking, jogging, or attending fitness classes.",
        };
      case "4+":
        return {
          message: "Rare physical activity.",
          sub_message: "Recommendations",
          recommendations:
            "Recommendations: Try to incorporate more physical activity into your weekly routine, such as walking, jogging, or attending fitness classes.",
        };
      default:
        return {
          message: "Please select an option.",
          sub_message: "Recommendations",
          recommendations: "",
        };
    }
  };
  return (
    <KeyAspectsStyled>
      {locationData !== "/dashboard/activities" && (
        <button
          className="btn btn-outline"
          onClick={() => history.push("/womenscare/womanactivitys")}
        >
          Back
        </button>
      )}
      {locationData !== "/dashboard/activities" && (
        <h4 className="heding-div">
          Key Aspects of <span>Women's</span> Healthcare
        </h4>
      )}
      {locationData !== "/dashboard/activities" && (
        <div className="img1-div">
          <img
            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736340222940.png"
            alt=""
          />
        </div>
      )}

      <h4 className="mt-2">5 minute assessment</h4>
      {cardData.map((card) => {
        const messageData = getMessage(card.id);
        return (
          <div className="card mt-3">
            <div className="card-body">
              <div className="main-div">
                <div className="sub-div">
                  <div
                    className="img-div"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "8px",
                    }}
                  >
                    <img
                      src={card.imgSrc}
                      alt="Icon"
                      style={{ width: "30px", height: "30px" }}
                    />
                  </div>

                  <div className="text-div">
                    <h6>{card.title}</h6>
                  </div>
                </div>
                <div className="radio-div">
                  {card.options.map((option, index) => (
                    <div className="form-check mb-2">
                      <label
                        className="form-check-label"
                        htmlFor={`frequency-${card.id}-${option.value}`}
                      >
                        {option.label}
                      </label>
                      <input
                        className="form-check-input"
                        type="radio"
                        name={`frequency-${card.id}`}
                        id={`frequency-${card.id}-${option.value}`}
                        checked={selectedOptions[card.id] === option.value} // Control the checked state
                        onChange={() => handleSelection(card.id, option.value)}
                      />
                    </div>
                  ))}
                </div>
              </div>
              {messageData && (
                <div className="message-div mt-3">
                  <h6>{messageData.message}</h6>
                  <div className="sub-message-div">
                    <div className="sub-message">
                      <p>{messageData.sub_message}</p>
                    </div>
                    <div className="recommendations">
                      <p>{messageData.recommendations}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
      <div className="btn-div">
        <button className="btn sbn-btn">Submit</button>
      </div>
    </KeyAspectsStyled>
  );
};

export default KeyAspects;
