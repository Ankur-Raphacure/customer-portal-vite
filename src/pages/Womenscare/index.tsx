import React, { useEffect } from "react";
import { WomenscareStyled } from "./WomenscareStyled.Styled";
import { getAllScansCityAPI } from "../../redux/slices/ctmri/ctmriService";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import BestWomenPkg from "./BestWomenPackages/BestWomenPkg";
import WomanVaccination from "./WomanVaccinations/WomanVaccination";
import WomanCatogory from "./WomansCatogory/WomanCatogory";
import {
  getVaccinationsAPI,
  getWomensPackagesAPI,
} from "../../redux/slices/generic/genericService";
import { useHistory } from "react-router-dom";
import { updateShowLoginModel } from "../../redux/slices/auth/authSlice";

const Womens = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { allWomensPackagesList, allVaccinationsList } = useSelector(
    (ReduxState: any) => ReduxState.generic,
  );
  const { userCity, user } = useSelector((ReduxState: any) => ReduxState.auth);

  const addToCart1 = (itemR: any) => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      history.push(`/labPackageDetils/${itemR?.service_code}`);
    }
  };

  useEffect(() => {
    getLatestData(userCity?.name);
  }, [userCity?.name]);
  useEffect(() => {
    dispatch(getWomensPackagesAPI());
    dispatch(getVaccinationsAPI(100));
  }, []);

  const getLatestData = (city = "bengaluru") => {
    dispatch(getAllScansCityAPI({ city: city?.toLowerCase() }));
  };
  const handleClickPlay = () => {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.cognonta.raphacure";
  };
  const handleClickApp = () => {
    window.location.href =
      "https://apps.apple.com/in/app/raphacure/id1637246098";
  };

  return (
    <WomenscareStyled>
      <div className="ayurvedaWrapper">
        <header className="header">
          <div className="header-content">
            <h1>
              Empowering <span>Women's Health </span> with Comprehensive Care
            </h1>
            <p>
              "Discover comprehensive care tailored for every stage of
              womanhood."
            </p>
            <div className="btnWrapper d-flex">
              <button
                className="explore-btn btn btn-outline me-5"
                onClick={handleClickPlay}
              >
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736398605307.png"
                  alt=""
                  className="me-3"
                />
                Google Play
              </button>
              <button
                className="explore-btn btn btn-outline"
                onClick={handleClickApp}
              >
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736398306279.png"
                  alt=""
                  className="me-3"
                />
                App Store
              </button>
            </div>
          </div>
          <div className="img-div">
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736400999522.png"
              alt=""
            />
          </div>
        </header>

        <div className="radiologyParentDiv">
          <Container fluid className="categoryContainer">
            <h5 className="categoryText">Category</h5>
            <Row>
              <Col className="categoryCol">
                <WomanCatogory />
              </Col>
            </Row>
          </Container>

          <Container fluid className="categoryContainer">
            <h5 className="categoryText">Best packages For Women’s </h5>
            <Row>
              <Col className="categoryCol">
                <BestWomenPkg
                  fromPage={`womanscare`}
                  addToCart={addToCart1}
                  list={allWomensPackagesList?.packages}
                />
              </Col>
            </Row>
          </Container>

          <Container fluid className="categoryContainer mt-4">
            <h5 className="categoryText">Vaccinations Every Woman Needs </h5>
            <Row>
              <Col className="categoryCol">
                <WomanVaccination
                  fromPage={`womanscare`}
                  addToCart={addToCart1}
                  list={allVaccinationsList?.tests}
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </WomenscareStyled>
  );
};

export default Womens;
