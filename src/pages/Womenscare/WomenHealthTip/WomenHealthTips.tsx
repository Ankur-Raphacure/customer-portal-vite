import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { WomenHealthTipsStyled } from "./WomenHealthTips.styled";

const WomenHealthTips = () => {
  const cardData = [
    {
      title: "Balanced Diet Essentials",
      text: "Emphasize fruits, veggies, lean proteins, and whole grains for overall health.",
      imgSrc:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736401610509.png",
    },
    {
      title: "Key Nutrients",
      text: "Highlight calcium, iron, folic acid, and omega-3s; include nutrient-rich food examples.",
      imgSrc:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736401646132.png",
    },
    {
      title: "Hydration",
      text: "Stress the importance of water intake and hydrating foods like cucumbers and melons.",
      imgSrc:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736401667710.png",
    },
    {
      title: "Meal Planning",
      text: "Share tips for batch cooking, using seasonal produce, and balancing macronutrients.",
      imgSrc:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736401693949.png",
    },
    {
      title: "Mindful Eating",
      text: "Promote eating slowly, paying attention to hunger cues, and enjoying meals distraction-free.",
      imgSrc:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736401719996.png",
    },
    {
      title: "Supplements",
      text: "Consult healthcare professionals before use; prioritize whole foods.",
      imgSrc:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736401744038.png",
    },
  ];

  return (
    <WomenHealthTipsStyled>
      <Row>
        <Col
          md={4}
          className="d-flex align-items-center justify-content-center"
        >
          <img
            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736401524598.png"
            alt="Salad Plate"
            className="img-fluid"
          />
        </Col>
        <Col md={8}>
          <h2 className="mb-4 text-center">
            Essential Nutrition Tips for <span> Women's Health</span>
          </h2>
          {cardData.map((card, index) => (
            <Row key={index} className="mb-3" style={{ flexWrap: "wrap" }}>
              {cardData
                .slice(index * 3, index * 3 + 3)
                .map((item, subIndex) => (
                  <Col md={4} key={subIndex} className="mb-3">
                    <div className="card">
                      <div className="img">
                        <img src={item.imgSrc} alt="" />
                      </div>

                      <div className="text">
                        <p className="h3">{item.title}</p>
                        <p className="p"> {item.text} </p>
                      </div>
                    </div>
                  </Col>
                ))}
            </Row>
          ))}
        </Col>
      </Row>
    </WomenHealthTipsStyled>
  );
};

export default WomenHealthTips;
