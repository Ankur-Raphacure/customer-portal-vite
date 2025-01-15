import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { PeriodTrackersStyled } from "./PeriodTrackers.styled";

const PeriodTrackers = () => {
  const history = useHistory();
  return (
    <Container fluid className="p-5 main-div">
      <PeriodTrackersStyled>
        <Row>
          <Col xs={12}>
            <button
              className="btn btn-outline mb-4 custome-back"
              onClick={() => history.push("/womenscare")}
            >
              Back
            </button>
          </Col>
        </Row>
        <Row className="align-items-center ">
          <Col className="text-center text-lg-start left-div">
            <h1 className="title">
              Download <br /> <span className="sub-title">RaphaCure</span> App
              Now
            </h1>
            <p className="text-muted ">
              Discover the ultimate mobile experience with our innovative app.
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start butons-div">
              <Button variant="dark" className="me-3" size="lg">
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736398605307.png"
                  alt="Google Play"
                  className="me-3 Google-Play-div"
                />
                Google Play
              </Button>
              <Button variant="dark" size="lg">
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736398306279.png"
                  alt="App Store"
                  className="me-3 App-Store-div"
                />
                App Store
              </Button>
            </div>
          </Col>
          <Col lg={5} md={12} className="text-center">
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736398248953.png"
              alt="App Screenshot"
              className="img-fluid image-cls"
            />
          </Col>
        </Row>

        <Row className="align-items-center mt-5">
          <Col lg={4} md={4} className="text-center mb-4 mb-md-0">
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736397494612.png"
              alt="Period Tracker App"
              className="img-fluid"
            />
          </Col>
          <Col lg={8} md={6} className="position-relative">
            <h1 className="display-6 Period-title">Period Tracker</h1>
            <p className="lead">
              With
              <span className="sub-discription"> Rapha Cure's </span> mobile
              app, you can gain deeper insights into your body through
              comprehensive period tracking, covering everything from flow and
              pain to sleep and more.
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
            </ul>
          </Col>
        </Row>
      </PeriodTrackersStyled>
    </Container>
  );
};

export default PeriodTrackers;
