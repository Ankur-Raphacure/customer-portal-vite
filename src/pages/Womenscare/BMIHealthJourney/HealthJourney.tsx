import React, { useState } from "react";
import { HealthJourneyStyled } from "./HealthJourney.styled";
import { useHistory } from "react-router-dom";
import Graph from "./Graph";
import WaterGrpha from "./WaterGrpha";
import FoodGraph from "./FoodGraph";
import FoodGraph1 from "./FoodGraph1";
import { MdOutlineArrowDropDown } from "react-icons/md";

const classifications = [
  "Severe Thinness",
  "Moderate Thinness",
  "Mild Thinness",
  "Normal",
  "Overweight",
  "Obese Class I",
  "Obese Class II",
  "Obese Class III",
];

const bmiRanges = [
  "<16",
  "16-17",
  "17-18.5",
  "18.5 - 25",
  "25-30",
  "30-35",
  "35-40",
  ">40",
];

const Lunch = [
  { name: "Roti/Chapati", value: "roti_chapati" },
  { name: "Dal & Rice", value: "dal_rice" },
  { name: "Paneer Butter Masala", value: "paneer_butter_masala" },
  { name: "Rajma Chawal", value: "rajma_chawal" },
  { name: "Sambar Rice", value: "sambar_rice" },
  { name: "Curd Rice", value: "curd_rice" },
  { name: "Biriyani", value: "biriyani" },
  { name: "Gujarati Thali", value: "gujarati_thali" },
  { name: "Puran Poli", value: "puran_poli" },
  { name: "Dal Baati Churma", value: "dal_baati_churma" },
  { name: "Machher Jhol", value: "machher_jhol" },
  { name: "Luchi & Cholar Dal", value: "luchi_cholar_dal" },
  { name: "Momo", value: "momo" },
  { name: "Poha", value: "poha" },
  { name: "Bhutte ka Kees", value: "bhutte_ka_kees" },
];

const breakFast = [
  { name: "Paratha", value: "paratha" },
  { name: "Chole Bhature", value: "chole_bhature" },
  { name: "Idli", value: "idli" },
  { name: "Dosa", value: "dosa" },
  { name: "Upma", value: "upma" },
  { name: "Poha", value: "poha" },
  { name: "Thepla", value: "thepla" },
  { name: "Luchi & Aloo Dum", value: "luchi_aloo_dum" },
  { name: "Chirer pulao", value: "chirer_pulao" },
  { name: "Kachori", value: "kachori" },
  { name: "Jilebi & Rabri", value: "jilebi_rabri" },
];

const HealthJourney = () => {
  const history = useHistory();
  const [unit, setUnit] = useState("metric");
  const [waterIntake, setWaterIntake] = useState(0);
  const [sleepHours, setSleepHours] = useState(0);
  const [monitorFood, setMonitorFood] = useState<any>("");
  const [inputWaterValue, setInputWaterValue] = useState("");
  const [inputSleepValue, setInputSleepValue] = useState("");
  const [inputMonitorFoodValue, setInputMonitorFoodValue] = useState("");
  const [showPopup, setShowPopup] = useState("");
  const [name, setName] = useState<string | null>("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInch, setHeightInch] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(0);

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;

    switch (id) {
      case "Name1":
        setName(value);
        break;
      case "age":
        if (/^\d*$/.test(value)) setAge(value);
        break;
      case "Height":
        if (/^\d*$/.test(value)) setHeight(value);
        break;
      case "HeightFeet":
        if (/^\d*$/.test(value)) setHeightFeet(value);
        break;
      case "HeightInch":
        if (/^\d*$/.test(value)) setHeightInch(value);
        break;
      case "Weight":
        if (/^\d*$/.test(value)) setWeight(value);
        break;
      case "WaterIntake":
        if (/^\d*$/.test(value)) setInputWaterValue(value);
        break;
      case "SleepHours":
        if (/^\d*$/.test(value)) setInputSleepValue(value);
        break;
      case "MonitorFood":
        setInputMonitorFoodValue(value);
        break;
      default:
        break;
    }
  };
  const handleAddClick = () => {
    if (showPopup === "intake") {
      const intake = parseInt(inputWaterValue);
      if (!isNaN(intake)) {
        setWaterIntake(intake);
        setInputWaterValue("");
      }
    } else if (showPopup === "monitorfood") {
      setMonitorFood(inputMonitorFoodValue);
      setInputMonitorFoodValue("");
    } else {
      const sleep = parseInt(inputSleepValue);
      if (!isNaN(sleep)) {
        setSleepHours(sleep);
        setInputSleepValue("");
      }
    }
  };

  const handleUnitChange = (selectedUnit: any) => {
    setUnit(selectedUnit);
    clearFields();
  };

  const calculateBMI = () => {
    let calculatedBmi = 0;

    if (unit === "metric") {
      const heightValue = parseFloat(height) / 100;
      const weightValue = parseFloat(weight);

      if (!isNaN(heightValue) && !isNaN(weightValue) && heightValue > 0) {
        calculatedBmi = weightValue / (heightValue * heightValue);
      }
    } else if (unit === "us") {
      const heightInFeet = parseFloat(heightFeet);
      const heightInInches = parseFloat(heightInch);
      const weightValue = parseFloat(weight);

      if (
        !isNaN(heightInFeet) &&
        !isNaN(heightInInches) &&
        !isNaN(weightValue) &&
        heightInFeet > 0 &&
        weightValue > 0
      ) {
        const heightInTotalInches = heightInFeet * 12 + heightInInches;
        calculatedBmi =
          (weightValue / (heightInTotalInches * heightInTotalInches)) * 703;
      }
    }

    setBmi(calculatedBmi);
  };

  const clearFields = () => {
    setName("");
    setAge("");
    setHeight("");
    setHeightFeet("");
    setHeightInch("");
    setWeight("");
    setBmi(0);
  };
  return (
    <HealthJourneyStyled>
      <div className="ayurvedaWrapper">
        <div className="header">
          <div className="header-content">
            <button
              className="btn btn-outline back-btn"
              onClick={() => history.push("/womenscare/nutritiondiets")}
            >
              Back
            </button>
            <h1>
              "Your Health, Simplified Calculate Your <span>BMI</span> <br />
              Today"
            </h1>
          </div>
          <div className="img-div">
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338042644.png"
              alt=""
            />
          </div>
        </div>

        <header className="header1">
          <div className="form-div">
            <div className="card">
              <div className="card-body">
                <div className="card heading-cards">
                  <div className="checkbox-div">
                    <label className="checkbox">
                      <p className="me-3 ">Metric Units</p>
                      <input
                        type="radio"
                        name="unit"
                        className="check-box shadow-none"
                        value="metric"
                        checked={unit === "metric"}
                        onChange={() => handleUnitChange("metric")}
                      />
                    </label>
                    <label className="checkbox">
                      <p className="me-3">US Units</p>
                      <input
                        className="check-box "
                        type="radio"
                        name="unit"
                        value="us"
                        checked={unit === "us"}
                        onChange={() => handleUnitChange("us")}
                      />
                    </label>
                  </div>
                </div>

                {unit === "metric" && (
                  <div className="MetricsUnits">
                    <div className="row mt-5">
                      <div className="col-md-5 mb-3">
                        <label htmlFor="Name1" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control shadow-none"
                          id="Name1"
                          placeholder="Enter Your Name"
                          value={name || ""}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="age" className="form-label">
                          Age
                        </label>
                        <input
                          type="text"
                          className="form-control shadow-none"
                          id="age"
                          placeholder="Enter Your Age"
                          value={age}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-md-3 mt-2 d-flex align-items-center">
                        <p className="mb-0 age-div">Age 5-120</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5 mb-3">
                        <label htmlFor="Height" className="form-label">
                          Height (cm)
                        </label>
                        <input
                          type="text"
                          className="form-control heght-input shadow-none"
                          id="Height"
                          placeholder="Enter Your Height in cm"
                          value={height}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-md-7">
                        <label htmlFor="Weight" className="form-label">
                          Weight (kg)
                        </label>
                        <input
                          type="text"
                          className="form-control shadow-none"
                          id="Weight"
                          placeholder="Enter Your Weight in kg"
                          value={weight}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {unit === "us" && (
                  <div className="USUnits">
                    <div className="row mt-3">
                      <div className="col-md-5 mb-1">
                        <label htmlFor="Name1" className="form-label">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control shadow-none"
                          id="Name1"
                          placeholder="Enter Your Name"
                          value={name || ""}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-md-4">
                        <label htmlFor="age" className="form-label">
                          Age
                        </label>
                        <input
                          type="text"
                          className="form-control shadow-none"
                          id="age"
                          placeholder="Enter Your Age"
                          value={age}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-md-3 mt-4 d-flex align-items-center">
                        <p className="mb-0 age-div">Age 5-120</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-5 mb-2">
                        <label htmlFor="HeightFeet" className="form-label">
                          Height (Feet)
                        </label>
                        <input
                          type="text"
                          className="form-control shadow-none"
                          id="HeightFeet"
                          placeholder="Enter Your Height in Feet"
                          value={heightFeet}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="col-md-7">
                        <label htmlFor="HeightInch" className="form-label">
                          Height (Inches)
                        </label>
                        <input
                          type="text"
                          className="form-control shadow-none"
                          id="HeightInch"
                          placeholder="Enter Your Height in Inches"
                          value={heightInch}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <label htmlFor="Weight" className="form-label">
                          Weight (Pounds)
                        </label>
                        <input
                          type="text"
                          className="form-control shadow-none"
                          id="Weight"
                          placeholder="Enter Your Weight in Pounds"
                          value={weight}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="d-flex justify-content-end mt-3">
                  <button className="clear-btn btn me-4 " onClick={clearFields}>
                    Clear
                  </button>
                  <button className="Calculate-btn btn" onClick={calculateBMI}>
                    Calculate BMI
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grp-div">
            <Graph value={bmi} />
          </div>
          <div className="detail-div">
            <table className="table table-div">
              <thead>
                <tr className="table-header">
                  <th scope="col">Classification</th>
                  <th scope="col">BMI range </th>
                </tr>
              </thead>
              <tbody>
                {classifications.map((classification, index) => (
                  <tr key={index}>
                    <td>{classification}</td>
                    <td>{bmiRanges[index]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </header>

        <div>
          {/* Water Intake Section */}
          <div className="container-div">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="left-grp col-md-7 col-12 mt-4">
                    <h1>
                      "Hydration Matters: Track Your Daily Water Intake for
                      Optimal Health"
                    </h1>
                    <h6 className="mt-4">Your Intake today (in Liters)</h6>

                    <div className="progress mt-4">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${Math.min((waterIntake / 10) * 100, 100)}%`,
                        }}
                        aria-valuenow={waterIntake}
                        aria-valuemin={0}
                        aria-valuemax={10}
                      ></div>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <p>0L</p>
                      <p>10L</p>
                      <p>20L</p>
                    </div>
                    <button
                      className="btn custom-btn mt-4"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => setShowPopup("intake")}
                    >
                      Add Intake
                    </button>
                  </div>
                  <div className="col-md-5 col-12">
                    <WaterGrpha />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sleep Section */}
          <div className="container-div ">
            <div className="card shadow bg-body-tertiary rounded">
              <div className="card-body">
                <div className="row">
                  <div className="left-grp col-md-7 col-12 mt-4 ">
                    <h1>
                      "Sleep Strong: Monitor Your Sleep for Peak Health and
                      Vitality"
                    </h1>
                    <h6 className="mt-4">Your Sleep (In Hours)</h6>

                    <div className="progress mt-4">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${Math.min((sleepHours / 7) * 100, 100)}%`,
                        }}
                        aria-valuenow={sleepHours}
                        aria-valuemin={0}
                        aria-valuemax={7}
                      ></div>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <p>0H</p>
                      <p>5H</p>
                      <p>7H</p>
                    </div>
                    <button
                      className="btn custom-btn mt-4"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => setShowPopup("sleep")}
                    >
                      Add Sleep
                    </button>
                  </div>
                  <div className="col-md-5 col-12">
                    <WaterGrpha />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*  Monitor Your Food */}
          <div className="container-div ">
            <div className="card shadow bg-body-tertiary rounded">
              <div className="card-body">
                <div className="row">
                  <div className="left-grp col-md-9 col-12 mt-4 ">
                    <h1>
                      Healthy Eats Monitor Your Food Intakefor Balanced
                      Nutrition
                    </h1>
                    <h6 className="mt-4 col-md-6">
                      Your total Calories (In Hours)
                    </h6>

                    <div className="">
                      <FoodGraph />
                    </div>

                    <button
                      className="btn custom-btn mt-4"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => setShowPopup("monitorfood")}
                    >
                      Add Food intake
                    </button>
                  </div>
                  <div className="col-md-3 col-12">
                    <FoodGraph1 />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Popup Modal */}
          <div
            className="modal fade"
            id="exampleModal"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <button
                  type="button"
                  className="btn-close ms-auto shadow-none mt-3 me-3 "
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <h1
                  className="modal-title text-center fs-6 mb-2 "
                  id="exampleModalLabel"
                >
                  {showPopup === "intake"
                    ? "How much did you drink?"
                    : showPopup === "monitorfood"
                      ? "Add your food intake"
                      : "How much did you sleep?"}
                </h1>
                <div className="row justify-content-center">
                  {showPopup === "monitorfood" && (
                    <>
                      <div className="dropdown mt-2 col-md-8 d-flex justify-content-center">
                        <select
                          name="breakfast"
                          id="breakfast"
                          className="form-control custom-select shadow-none"
                        >
                          <option value="">Breakfast</option>
                          {breakFast.map((item, index) => (
                            <option key={index} value={item.value}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="dropdown mt-2 col-md-8 d-flex justify-content-center">
                        <select
                          name="breakfast"
                          id="breakfast"
                          className="form-control custom-select shadow-none"
                        >
                          <option value="">Lunch</option>
                          {Lunch.map((item, index) => (
                            <option key={index} value={item.value}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="dropdown mt-2 col-md-8 d-flex justify-content-center">
                        <select
                          name="breakfast"
                          id="breakfast"
                          className="form-control custom-select shadow-none"
                        >
                          <option value="">Dinner</option>
                          {Lunch.map((item, index) => (
                            <option key={index} value={item.value}>
                              {item.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </>
                  )}

                  {(showPopup === "intake" || showPopup === "sleep") && (
                    <div className="d-flex col-md-7 mx-auto justify-content-center">
                      <input
                        type="text"
                        className="form-control shadow-none"
                        placeholder="Enter Here"
                        aria-label="Input"
                        value={
                          showPopup === "intake"
                            ? inputWaterValue
                            : inputSleepValue
                        }
                        onChange={handleInputChange}
                        id={
                          showPopup === "intake" ? "WaterIntake" : "SleepHours"
                        }
                      />
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-primary mt-4 mb-4  w-25 custom-btn shadow-none"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={handleAddClick}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HealthJourneyStyled>
  );
};

export default HealthJourney;
