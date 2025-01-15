import React, { useEffect, useState } from "react";
import { Tabs, Tab, Button, Modal, Form } from "react-bootstrap";
import { ActivitiesStyled } from "./Activities.styled";
import { CareStyled } from "./CareStyled.Styled";
import Fittnesstrack from "./Fittnesstrack";
import Womenscare from "./Womenscare";
import { ReactComponent as BMI } from "../../../../assets/icons/bmi.svg";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import KeyAspects from "../../../Womenscare/KeyAspect/KeyAspects";
import { ModalStyled } from "../../../Womenscare/NutritionDiet/ModalStyle.styled";

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
const Activities = () => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [bmi, setBmi] = useState<string | null>(null);
  const [show, setShow] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const { user } = useSelector((Route: any) => Route.auth);
  const gender = user?.gender;

  const [selectedDiet, setSelectedDiet] = useState("");
  const [selectedDietDetail, setSelectedDietDetail] = useState("");
  const [progress, setProgress] = useState(33.33);

  const calculateBMI = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const height = parseFloat(form.formHeight.value);
    const weight = parseFloat(form.formWeight.value);
    const age = parseInt(form.formAge.value);

    // Validate the input values
    if (
      height >= 50 &&
      height <= 300 &&
      weight >= 10 &&
      weight <= 500 &&
      age >= 1 &&
      age <= 120
    ) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);
      handleClose();
    } else {
      alert("Please enter valid values for height, weight, and age.");
    }
  };

  const handleCardClick = (diet: any) => {
    setSelectedDiet(diet);
    setProgress((prevProgress) => Math.min(prevProgress + 33.33, 100));
  };
  const handleDietDetailClick = (detail: any) => {
    setSelectedDietDetail(detail);
    setProgress((prevProgress) => Math.min(prevProgress + 33.33, 100));
  };

  const handleCardDetailClick = (name: any) => {
    if (["South Indian", "Continental", "North Indian"].includes(name)) {
      history.push("/womenscare/mealcategory");
    }
  };

  const [dietPlanShown, setDietPlanShown] = useState(false);
  const handleModalClose = () => {
    setDietPlanShown(false);
  };
  useEffect(() => {
    const dietPlan = document.querySelector(
      "button#activities-tabs-tab-diet-plan"
    );
    if (dietPlan) {
      dietPlan.addEventListener("click", () => {
        setDietPlanShown(true);
      });
    }
  }, []);

  return (
    <>
      <ActivitiesStyled>
        <div className="button-container">
          <div className="bmi-display">
            {bmi && (
              <div className="bmi-result">
                <BMI />
                <span className="bmi-value">{bmi}</span>
              </div>
            )}
            <Button
              className="btn-calculate-bmi"
              // onClick={handleShow}
              onClick={() => history.push("/womenscare/healthjourney")}
            >
              Calculate BMI
            </Button>
          </div>
        </div>
        <div className="activities-container">
          <Tabs
            defaultActiveKey="fitness-track"
            id="activities-tabs"
            className="mb-3"
          >
            <Tab eventKey="fitness-track" title="Fitness Track">
              <div className="tab-content">
                <Fittnesstrack />
              </div>
            </Tab>
            <Tab eventKey="health-journey" title="Health Journey">
              <div className="tab-content">{/* <HealthJourney /> */}</div>
            </Tab>
            <Tab eventKey="diet-plan" title="Diet Plan">
              <div className="tab-content"></div>
            </Tab>

            {gender === "female" && (
              <Tab eventKey="womens-zone" title="Period Tracker">
                <div className="tab-content">
                  <Womenscare />
                </div>
              </Tab>
            )}
            {gender === "female" && (
              <Tab eventKey="self-assesment" title="Self Assesment">
                <div className="tab-content">
                  <KeyAspects />
                </div>
              </Tab>
            )}
          </Tabs>
        </div>

        <Modal show={showModal} onHide={handleClose} centered>
          <CareStyled>
            {" "}
            {/* Wrap with CareStyled */}
            <Modal.Header closeButton>
              <Modal.Title>Calculate BMI</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={calculateBMI}>
                <Form.Group controlId="formHeight">
                  <Form.Label>Height (cm)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter height in cm"
                    min="50"
                    max="300"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formWeight" className="mt-3">
                  <Form.Label>Weight (kg)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter weight in kg"
                    min="10"
                    max="500"
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formAge" className="mt-3">
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter age"
                    min="1"
                    max="120"
                    required
                  />
                </Form.Group>
                <Button className="mt-4" variant="primary" type="submit">
                  Calculate BMI
                </Button>
              </Form>
            </Modal.Body>
          </CareStyled>
        </Modal>
      </ActivitiesStyled>

      <Modal
        show={dietPlanShown}
        onHide={handleModalClose}
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
    </>
  );
};

export default Activities;
