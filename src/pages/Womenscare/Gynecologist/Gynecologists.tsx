import React, { useState, useEffect, useRef } from "react";
import { GynecologistsStyled } from "./Gynecologists.styled";
import { Col, Container, Row } from "react-bootstrap";
import CarouselCards from "./CarouselCards";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorsListAPI } from "../../../redux/slices/doctor/doctorService";

const delay = 2500;
const articles = [
  {
    id: 1,
    img_1:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736339981454.png",
  },
  {
    id: 2,
    img_1:
      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736340025586.png",
  },
];

const Gynecologists = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { doctorsList } = useSelector((ReduxState: any) => ReduxState.doctor);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

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

  useEffect(() => {
    dispatch(
      getDoctorsListAPI({
        count: 1000,
        page: 0,
        searchText: "",
      })
    );
  }, [0]);

  const doctors = doctorsList?.doctors;

  return (
    <GynecologistsStyled>
      <div className="ayurvedaWrapper">
        <header className="header d-flex align-items-center mt-2">
          <div className="back-btn">
            <button
              className="btn btn-outline back-btn"
              onClick={() => history.push("/womenscare")}
            >
              Back
            </button>
          </div>
          <div>
            <Row className="w-100">
              <Col
                xs={12}
                md={6}
                className="d-flex flex-column justify-content-center"
              >
                <div className="header-content">
                  <h1>
                    "Your Health, <br />
                    Our Priority Expert
                    <span> Gynecological Care"</span>
                  </h1>
                  <p className="">
                    Expert gynecological care tailored to your needs. Your
                    health and well-being are our priority.
                  </p>
                  <div className="btnWrapper d-flex">
                    <button
                      className="Appointment-btn btn btn-outline"
                      onClick={() => history.push("/doctor?q=Gynecologist")}
                    >
                      Make an Appointment
                    </button>
                  </div>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="img-div mt-2">
                  <div className="slideshow">
                    <div
                      className="slideshowSlider"
                      style={{
                        transform: `translate3d(${-index * 100}%, 0, 0)`,
                      }}
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
          </div>
        </header>

        <div className="radiologyParentDiv">
          <Container fluid className="categoryContainer mt-4">
            <Row>
              <Col className="categoryCol">
                <CarouselCards doctorsList={doctors} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </GynecologistsStyled>
  );
};

export default Gynecologists;
