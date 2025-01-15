import { NutritionDietsStyled } from "./NutritionDiets.styled";
import {
  Container,
  Row,
  Col,
  ButtonGroup,
  ToggleButton,
  Button,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import WomanVaccination from "../WomanVaccinations/WomanVaccination";
import { useDispatch, useSelector } from "react-redux";
import { updateShowLoginModel } from "../../../redux/slices/auth/authSlice";
import { useEffect, useState } from "react";
import { getVaccinationsAPI } from "../../../redux/slices/generic/genericService";
import { getAllScansCityAPI } from "../../../redux/slices/ctmri/ctmriService";
import WomenHealthTips from "../WomenHealthTip/WomenHealthTips";
import Modal from "react-bootstrap/Modal";
import { RiH4 } from "react-icons/ri";
import { ModalStyled } from "./ModalStyle.styled";

const cards = [
  {
    name: "Non vegetarian",
    subtitle: "Chicken , Red MeatFish, Prawns etc",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736397115432.png",
    button: "Non vegetarian",
  },
  {
    name: "vegetarian",
    subtitle: "Vegetarian-no egg as well",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736397075380.png",
    button: "vegetarian",
  },
  {
    name: "Eggetarian",
    subtitle: "Vegetarian with egg dishes",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736396868403.png",
    button: "Eggetarian",
  },
];
const cardsDetails = [
  {
    name: "North Indian",
    subtitle: "Roti, Parantha, Sabjis Rajma Chawal etc",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736397150363.png",
    button: "North Indian",
  },
  {
    name: "South Indian",
    subtitle: "Idly, Dosa, lemon rice Upma  etc",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736397181965.png",
    button: "South Indian",
  },
  {
    name: "Continental",
    subtitle: "Porridge, Breads,Pastas etc",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736397211507.png",
    button: "Continental",
  },
];

const foodList = [
  {
    fName: "Poultry",
  },
  {
    fName: "Pork",
  },
  {
    fName: "Egg",
  },
  {
    fName: "Lamb/mutton",
  },
  {
    fName: "Beef",
  },
  {
    fName: "Dairy",
  },
  {
    fName: "Gluten",
  },
  {
    fName: "Lactose",
  },
  {
    fName: "Nuts",
  },
  {
    fName: "Soy",
  },
  {
    fName: "Seafood",
  },
];
const NutritionDiets = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showCity, setShowCity] = useState(false);
  const [progress, setProgress] = useState(33.33);
  const [selectedDiet, setSelectedDiet] = useState("");

  const { allVaccinationsList } = useSelector(
    (ReduxState: any) => ReduxState.generic
  );
  const { userCity, user } = useSelector((ReduxState: any) => ReduxState.auth);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    getLatestData(userCity?.name);
  }, [userCity?.name]);
  useEffect(() => {
    dispatch(getVaccinationsAPI(100));
  }, []);

  const [selectedDietDetail, setSelectedDietDetail] = useState("");

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setSelectedDiet("");
    setSelectedDietDetail("");
  };

  const handleCardClick = (diet: any) => {
    setSelectedDiet(diet);
    setProgress((prevProgress) => Math.min(prevProgress + 33.33, 100));
  };

  const handleDietDetailClick = (detail: any) => {
    setSelectedDietDetail(detail);
    setProgress((prevProgress) => Math.min(prevProgress + 33.33, 100));
  };

  const handleNavigate = () => {
    history.push("/womenscare");
  };
  const addToCart1 = (itemR: any) => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      history.push(`/labPackageDetils/${itemR?.service_code}`);
    }
  };
  const getLatestData = (city = "bengaluru") => {
    dispatch(getAllScansCityAPI({ city: city?.toLowerCase() }));
  };

  const handleCardDetailClick = (name: any) => {
    if (["South Indian", "Continental", "North Indian"].includes(name)) {
      history.push("/womenscare/mealcategory");
    }
  };

  useEffect(() => {
    getLatestData(userCity?.name);
  }, [userCity?.name]);
  useEffect(() => {
    dispatch(getVaccinationsAPI(100));
  }, []);

  return (
    <>
      {/* <Container fluid className="p-5 main-div"> */}
      <NutritionDietsStyled>
        <div className="banner-div">
          <Row>
            <Col xs={12}>
              <button
                className="btn  custome-back"
                onClick={() => handleNavigate()}
              >
                Back
              </button>
            </Col>
          </Row>
          <Row className="align-items-center ">
            <Col className="text-center text-lg-start left-div" lg={8} md={12}>
              <h1 className="title">
                Your Journey to Optimal Nutrition & Diet Starts Here
              </h1>
              <h1 className="title1">Track Your Health journey</h1>
              <div className="btn-div">
                <button
                  className="btn custom-btn me-4"
                  type="button"
                  onClick={handleShow}
                >
                  Create Your Diet Plan
                </button>
                <button
                  className="btn  custom-btn"
                  onClick={() => history.push("/womenscare/healthjourney")}
                >
                  Track Your Health journey
                </button>
              </div>
            </Col>
            <Col lg={4} md={12} className="text-center">
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736396710654.png"
                alt="App Screenshot"
                className="img-fluid image-cls"
              />
            </Col>
          </Row>
        </div>

        <div className="p-4">
          <Row>
            <Col xs={12}>
              <h4 className="Book-heading">
                Book Your Personalized Nutrition Plan Today
              </h4>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <WomanVaccination
                fromPage={`womanscare`}
                addToCart={addToCart1}
                list={allVaccinationsList?.tests}
              />
            </Col>
          </Row>

          <WomenHealthTips />
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            size="lg"
          >
            <ModalStyled>
              <Modal.Header
                closeButton
                className="border-0 me-2 mt-2"
              ></Modal.Header>
              <div className="w-100 text-center Title">
                {!selectedDiet && (
                  <div className="header-title">
                    <h4>What is Your Dietary Preference?</h4>{" "}
                    <p>Your diet will include foods based on this.</p>
                  </div>
                )}
                {(selectedDiet === "Non vegetarian" ||
                  selectedDiet === "vegetarian") &&
                  selectedDietDetail !== "nonVegetarianDetail" &&
                  selectedDietDetail !== "vegetarianDetail" && (
                    <div className="header-title">
                      <h4>Do you have any Food Allergies?</h4>
                      <p>Your diet plan will exclude these foods.</p>
                    </div>
                  )}

                {selectedDietDetail === "nonVegetarianDetail" && (
                  <div className="header-title">
                    <h4>Which cuisines should we include in your diet?</h4>
                    <p>Select as many cuisines as you like</p>
                  </div>
                )}
              </div>
              <div className="d-flex justify-content-center">
                <div className="progress w-50">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: `${progress}%` }}
                    aria-valuenow={progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>

              {!selectedDiet && (
                <div className="container d-flex justify-content-center mt-4 mb-4">
                  <div className="row   text-center">
                    {cards.map((card, index) => (
                      <div
                        className="col-md-4 mb-4 d-flex justify-content-center"
                        key={index}
                      >
                        <div className="card cursor-pointer">
                          {card.img && (
                            <img
                              src={card.img}
                              alt={card.name}
                              className="card-img"
                            />
                          )}
                          <div className="card-body">
                            <div className=" name-div">
                              <p className="text-title">{card.name}</p>
                              <p className="text-body">{card.subtitle}</p>
                            </div>
                            <button
                              className="card-button btn btn-primary"
                              onClick={() => handleCardClick(card.name)}
                            >
                              {card.button}
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selectedDiet && !selectedDietDetail && (
                <div className="container d-flex justify-content-center mt-4 mb-4">
                  <div className="row text-center">
                    {selectedDiet === "Non vegetarian" && (
                      <div className="non-vegetarian">
                        <h4 className="mt-4">Food Allergies</h4>
                        <div className="row mt-4">
                          {foodList?.map((item: any, index: number) => {
                            return (
                              <div key={index} className="col-md-3 mb-3">
                                <div className="card-div">
                                  <div className="card-body-div d-flex align-items-center">
                                    <label htmlFor={`form-checkbox-${index}`}>
                                      <label className="checkbox">
                                        <input
                                          type="checkbox"
                                          id={`form-checkbox-${index}`}
                                        />
                                        <div className="checkbox-circle">
                                          <svg
                                            viewBox="0 0 52 52"
                                            className="checkmark"
                                          >
                                            <circle
                                              fill="none"
                                              r="25"
                                              cy="26"
                                              cx="26"
                                              className="checkmark-circle"
                                            ></circle>
                                            <path
                                              d="M16 26l9.2 8.4 17.4-21.4"
                                              className="checkmark-kick"
                                            ></path>
                                          </svg>
                                        </div>
                                      </label>
                                    </label>

                                    <p className="foodName">{item.fName}</p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <div className="d-flex">
                          <div className="btn-div">
                            <button
                              className="btn"
                              onClick={() =>
                                handleDietDetailClick("nonVegetarianDetail")
                              }
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                    {selectedDiet === "vegetarian" && (
                      <div className="vegetarian">
                        <h1>vegetarian List Not Found</h1>
                        <div className="d-flex">
                          <div className="btn-div col-md-4">
                            <button
                              className="btn "
                              onClick={() =>
                                handleDietDetailClick("vegetarianDetail")
                              }
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                    {selectedDiet === "Eggetarian" && (
                      <div className="eggetarian">
                        <h1>Eggetarian List Not Found</h1>
                        <div className="d-flex">
                          <div className="btn-div">
                            <button
                              className="btn"
                              onClick={() =>
                                handleDietDetailClick("eggetarianDetail")
                              }
                            >
                              Next
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {selectedDietDetail === "nonVegetarianDetail" && (
                <div className="container d-flex justify-content-center mt-4 mb-4">
                  <div className="container d-flex justify-content-center mt-4">
                    <div className="row   text-center">
                      {cardsDetails.map((card, index) => (
                        <div
                          className="col-md-4 mb-4 d-flex justify-content-center"
                          key={index}
                        >
                          <div className="card cursor-pointer">
                            {card.img && (
                              <img
                                src={card.img}
                                alt={card.name}
                                className="card-img"
                              />
                            )}
                            <div className="card-body">
                              <div className=" name-div">
                                <p className="text-title">{card.name}</p>
                                <p className="text-body">{card.subtitle}</p>
                              </div>
                              <button
                                className="card-button btn btn-primary"
                                onClick={() => handleCardDetailClick(card.name)}
                              >
                                {card.button}
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {selectedDietDetail === "vegetarianDetail" && (
                <div className="container d-flex justify-content-center mt-4">
                  <h1>{selectedDietDetail}</h1>
                </div>
              )}
              {selectedDietDetail === "eggetarianDetail" && (
                <div className="container d-flex justify-content-center mt-4">
                  <h1>{selectedDietDetail}</h1>
                </div>
              )}
            </ModalStyled>
          </Modal>
        </div>
      </NutritionDietsStyled>
      {/* </Container> */}
    </>
  );
};

export default NutritionDiets;
