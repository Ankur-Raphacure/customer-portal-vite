import React, { useEffect, useRef, useState } from "react";
import { WomanActivitysStyled } from "./WomanActivitys.styled";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const delay = 2500;
const articles = [
  {
    id: 1,
    img_1:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736400637454.png",
  },
  {
    id: 2,
    img_1:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736400711796.png",
  },
  {
    id: 3,
    img_1:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736400738248.png",
  },
];

const WomanActivitys = () => {
  const history = useHistory();
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleNavigate = () => {
    history.push("/womenscare/keyaspects");
  };
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  const handleClickPlay = () => {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.cognonta.raphacure";
  };
  const handleClickApp = () => {
    window.location.href =
      "https://apps.apple.com/in/app/raphacure/id1637246098";
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === articles.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <WomanActivitysStyled>
      <div className="ayurvedaWrapper">
        <Row className="header">
          <Col xs={11} md={8}>
            <Button
              variant="link"
              className="text-dark"
              onClick={() => history.push("/womenscare")}
            >
              Back
            </Button>
            <h1 className="font-weight-bold mt-3 title ">
              Enhance <span>Women's</span> Lives Through <span>Activity</span>
            </h1>
            <p className="lead">
              "Your overall health depends on your lifestyle habits. Diet,
              sleep, exercise, stress management, work satisfaction, and
              positive relationships all contribute to your <br />
              well-being. Take this test to see how healthy your lifestyle is."
            </p>
            <Button
              variant="primary"
              size="lg"
              className=" str-btn"
              onClick={handleNavigate}
            >
              Start Now
            </Button>
          </Col>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="img-div mt-2">
              <div className="slideshow">
                <div
                  className="slideshowSlider"
                  style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                  {articles.map((item, idx) => (
                    <div className="slide" key={idx}>
                      <img src={item.img_1} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="align-items-center mt-5">
          <Col lg={4} md={4} className="text-center mb-4 mb-md-0">
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736400799590.png"
              alt="Period Tracker App"
              className="img-fluid"
            />
          </Col>
          <Col lg={8} md={6} className="position-relative">
            <h1 className="display-6 Period-title">My Activity</h1>
            <p className="leads">
              Rapha Cure's
              <span className="sub-discription">
                {""} mobile app offers personalized support, whether you choose
                yoga, meditation, or mindful walking. Tailored to your needs, it
                guides you to maintain a balanced, healthy lifestyle
              </span>
            </p>
            <ul className="list-unstyled">
              <li className="mb-3 options d-flex align-items-center">
                <div className="me-2 CheckmarkWrapper">
                  <div className="CheckmarkIcon"></div>
                </div>
                All-in-One Wellness Tracking
              </li>

              <li className="mb-3 options d-flex align-items-center">
                <div className="me-2 CheckmarkWrapper">
                  <div className="CheckmarkIcon"></div>
                </div>
                Personalized Health Plans
              </li>
              <li className="mb-3 options d-flex align-items-center">
                <div className="me-2 CheckmarkWrapper">
                  <div className="CheckmarkIcon"></div>
                </div>
                Holistic Wellness Approach
              </li>
              <li className="mb-3 options d-flex align-items-center">
                <div className="me-2 CheckmarkWrapper">
                  <div className="CheckmarkIcon"></div>
                </div>
                Expert Support
              </li>
              <li className="mb-3 options d-flex align-items-center">
                <div className="me-2 CheckmarkWrapper">
                  <div className="CheckmarkIcon"></div>
                </div>
                Preventive Care Focus
              </li>
              <li className="mb-3 options d-flex align-items-center">
                <div className="me-2 CheckmarkWrapper">
                  <div className="CheckmarkIcon"></div>
                </div>
                Community Connections
              </li>

              <div className="d-flex justify-content-center justify-content-lg-start butons-div">
                <Button
                  variant="dark"
                  className="me-3 "
                  size="lg"
                  onClick={handleClickPlay}
                >
                  <img
                    src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736398605307.png"
                    alt="Google Play"
                    className="me-3 Google-Play-div"
                  />
                  Google Play
                </Button>
                <Button variant="dark" size="lg" onClick={handleClickApp}>
                  <img
                    src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736398306279.png"
                    alt="App Store"
                    className="me-3 App-Store-div"
                  />
                  App Store
                </Button>
              </div>
            </ul>
          </Col>
        </Row>
      </div>
    </WomanActivitysStyled>
  );
};

export default WomanActivitys;
