import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { CareStyled } from "./CareStyled.Styled"; 
import { ReactComponent as Light } from "../../../../assets/icons/light.svg";
import { ReactComponent as Medium } from "../../../../assets/icons/medium.svg";
import { ReactComponent as Heavy } from "../../../../assets/icons/heavy.svg";
import { ReactComponent as Red } from "../../../../assets/icons/red1.svg";
import { ReactComponent as Brown } from "../../../../assets/icons/brown.svg";
import { ReactComponent as Pain } from "../../../../assets/icons/painfree.svg";
import { ReactComponent as Breast } from "../../../../assets/icons/breasttenderness.svg";
import { ReactComponent as Period } from "../../../../assets/icons/periodcramps.svg";
import { ReactComponent as Ovule } from "../../../../assets/icons/ovulation.svg";
import { ReactComponent as Mood } from "../../../../assets/icons/moodswing.svg";
import { ReactComponent as Control } from "../../../../assets/icons/control.svg";
import { ReactComponent as Happy } from "../../../../assets/icons/happy.svg";
import { ReactComponent as Sad } from "../../../../assets/icons/sad.svg";
import { ReactComponent as Trouble } from "../../../../assets/icons/trouble.svg";
import { ReactComponent as Refresh } from "../../../../assets/icons/refresh.svg";
import { ReactComponent as Wokeup } from "../../../../assets/icons/wokeup.svg";
import { ReactComponent as Rest } from "../../../../assets/icons/restless.svg";
import { ReactComponent as Rightarrow } from "../../../../assets/icons/right-arrow.svg";
import { ReactComponent as Navleft } from "../../../../assets/icons/navleft.svg";
import { ReactComponent as Navright } from "../../../../assets/icons/navright.svg";
import EnterDOBModal from "./EnterDOBModal";
import { getCreateLogSymptomsDetailAPI } from "../../../../redux/slices/generic/genericService";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const initVal = {
  selectedPeriod: undefined,
  selectedSpotting: undefined,
  selectedPain: undefined,
  selectedFeeling: undefined,
  selectedSleepQuality: undefined,
};

const initValError = {
  selectedPeriod: false,
  selectedSpotting: false,
  selectedPain: false,
  selectedFeeling: false,
  selectedSleepQuality: false,
  selectedsexLifeQuality: false,
};
const initValError1 = {
  selectedPeriod: false,
  selectedSpotting: false,
  selectedPain: false,
  selectedFeeling: false,
  selectedSleepQuality: false,
  selectedsexLifeQuality: false,
};

const initValErrorData = {
  selectedPeriod: "Select Any Period",
  selectedSpotting: "Select Any Spotting",
  selectedPain: "Select Any Pain",
  selectedFeeling: "Select Any Feeling",
  selectedSleepQuality: "Select Any Sleep Quality",
  selectedsexLifeQuality: "Select Any Sex Life Quality",
};
type ErrorData = {
  [key: string]: boolean;
};

type ErrorDataType = {
  selectedPeriod?: boolean;
  selectedSpotting?: boolean;
  selectedPain?: boolean;
  selectedFeeling?: boolean;
  selectedSleepQuality?: boolean;
  selectedSexLifeQuality?: boolean;
};

type PeriodTrackerType = {
  period: string;
  spotting: string;
  pain: string;
  feelings: string;
  sleep_quantity: string;
  sex_life: string;
};

const Womenscare = () => {
  const dispatch = useDispatch();
  const [showSymptomModal, setShowSymptomModal] = useState(false);
  const [showDOBModal, setShowDOBModal] = useState(false);
  const [currentDate, setCurrentDate] = useState(moment());
  const [periodPrediction, setPeriodPrediction] = useState(null);
  const [errorData, setErrorData] = useState<ErrorDataType>({});
  const [selectedPeriod, setSelectedPeriod] = useState<string>("");
  const [selectedSpotting, setSelectedSpotting] = useState<string>("");
  const [selectedPain, setSelectedPain] = useState<string>("");
  const [selectedFeeling, setSelectedFeeling] = useState<string>("");
  const [selectedSleepQuality, setSelectedSleepQuality] = useState<string>("");
  const [selectedSexLifeQuality, setSelectedSexLifeQuality] =
    useState<string>("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [finalSelections, setFinalSelections] = useState({});
  const [signUpData, setSignUpData] = useState(initVal as any);
  const [isLoading, setIsLoading] = useState(false);
  const handleShowSymptomModal = () => setShowSymptomModal(true);
  const handleCloseDOBModal = () => setShowDOBModal(false);
  const handleShowDOBModal = () => setShowDOBModal(true);

  const handleNavLeft = () => {
    setCurrentDate((prevDate) => prevDate.clone().subtract(1, "week"));
  };

  const handleNavRight = () => {
    setCurrentDate((prevDate) => prevDate.clone().add(1, "week"));
  };

  const datesToDisplay = Array.from({ length: 7 }).map((_, index) =>
    moment(currentDate).startOf("week").add(index, "days")
  );

  const insightsData = [
    {
      title: "Chances of pregnancy",
      value: "LOW",
      isButton: false,
      type: "low",
    },
    {
      title: "Potential due date",
      value: "Jan 9",
      isButton: false,
      type: "due-date",
    },
    { title: "Tips For Conception Sex", isButton: true, type: "tips" },
    { title: "Tips For Conception Sex", isButton: true, type: "tips" },
    { title: "Tips For Conception Sex", isButton: true, type: "tips" },
    {
      title: "Potential due date",
      value: "Jan 9",
      isButton: false,
      type: "due-date",
    },
    {
      title: "Chances of pregnancy",
      value: "LOW",
      isButton: false,
      type: "low",
    },
  ];
  const handleOptionSelect = (type: string, value: string) => {
    switch (type) {
      case "period":
        setSelectedPeriod(value);
        setErrorData((prev) => ({ ...prev, selectedPeriod: false }));
        break;
      case "spotting":
        setSelectedSpotting(value);
        setErrorData((prev) => ({ ...prev, selectedSpotting: false }));
        break;
      case "pain":
        setSelectedPain(value);
        setErrorData((prev) => ({ ...prev, selectedPain: false }));
        break;
      case "feeling":
        setSelectedFeeling(value);
        setErrorData((prev) => ({ ...prev, selectedFeeling: false }));
        break;
      case "sleepQuality":
        setSelectedSleepQuality(value);
        setErrorData((prev) => ({ ...prev, selectedSleepQuality: false }));
        break;
      case "sexLife":
        setSelectedSexLifeQuality(value);
        setErrorData((prev) => ({ ...prev, selectedSexLifeQuality: false }));
        break;
      default:
        break;
    }
  };

  const makeSignUpCall = async (periodData: any) => {
    console.log(periodData, "periodData");
    setIsLoading(true);
    const resp = await dispatch(getCreateLogSymptomsDetailAPI(periodData));
    const resJson = JSON.parse(JSON.stringify(resp));
    console.log("resJson : ", resJson);

    if (resJson?.payload?.success) {
      setSignUpData(finalSelections as any);
      setIsLoading(false);
      handleCloseSymptomModal();
    }
  };

  const validateForm = (): boolean => {
    const errors: ErrorDataType = {};

    if (!selectedPeriod) errors.selectedPeriod = true;
    if (!selectedSpotting) errors.selectedSpotting = true;
    if (!selectedPain) errors.selectedPain = true;
    if (!selectedFeeling) errors.selectedFeeling = true;
    if (!selectedSleepQuality) errors.selectedSleepQuality = true;
    if (!selectedSexLifeQuality) errors.selectedSexLifeQuality = true;
    setErrorData(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCloseSymptomModal = () => {
    setShowSymptomModal(false);
    setShowSuccessModal(false);
  };

  const handleSave = async () => {
    if (!validateForm()) {
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    const periodTrackerBody = {
      period: selectedPeriod
        ? selectedPeriod.charAt(0).toUpperCase() + selectedPeriod.slice(1)
        : "",
      spotting: selectedSpotting
        ? selectedSpotting.charAt(0).toUpperCase() + selectedSpotting.slice(1)
        : "",
      pain: selectedPain || "",
      feelings: selectedFeeling || "",
      sleep_quantity: selectedSleepQuality || "",
      sex_life: selectedSexLifeQuality || "",
    };

    try {
      const res = await dispatch(
        makeSignUpCall({ periodtracker: periodTrackerBody })
      );
      const resJson = JSON.parse(JSON.stringify(res));

      if (resJson?.success) {
        setSuccessMessage("Saved successfully!");
        setShowSuccessModal(true);
        setShowSymptomModal(false);
        // Show success modal
        setErrorMessage("");
      } else if (resJson?.error?.message) {
        setErrorMessage(resJson.error.message);
        setSuccessMessage("");
      }
    } catch (error) {
      setErrorMessage("A period track entry for this date already exists.");
      console.error("Unexpected Error:", error);
    }
  };

  useEffect(() => {
    setSignUpData(finalSelections);
  }, []);

  return (
    <div className="womenscare-container">
      <div className="period-prediction">
        <button
          className="edit-period-btn mb-4"
          onClick={handleShowDOBModal} // Open DOB modal on click
        >
          Enter Date of Birth
        </button>
        <div className="date-navigation">
          <button className="nav-button" onClick={handleNavLeft}>
            <Navleft />
          </button>
          <div className="dates">
            {datesToDisplay.map((date, index) => (
              <div
                key={index}
                className={`date ${
                  periodPrediction && date.isSame(periodPrediction, "day")
                    ? "highlight"
                    : ""
                }`}
              >
                {date.format("D")}
                <br />
                {date.format("ddd")}
              </div>
            ))}
          </div>
          <button className="nav-button" onClick={handleNavRight}>
            <Navright />
          </button>
        </div>
        <div className="period-info">
          <h2>Period Prediction Day 1</h2>
          <div className="buttons">
            <button className="edit-period-btn">Edit Period Date</button>
            <button
              className="log-symptoms-btn"
              onClick={handleShowSymptomModal}
            >
              Log Symptoms
            </button>
          </div>
        </div>
      </div>
      <div className="insights-container">
        <h3>My Insights Today</h3>
        <div className="insights-cards">
          {insightsData.map((insight, index) => (
            <div className={`insight-card ${insight.type}`} key={index}>
              <p className="card-title">{insight.title}</p>
              {insight.isButton ? (
                <button className="tip-button">
                  <Rightarrow />
                </button>
              ) : (
                <p className="card-value">{insight.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Modal for Logging Symptoms */}
      <Modal show={showSymptomModal} onHide={handleCloseSymptomModal}>
        <CareStyled>
        <Modal.Header closeButton>
          <Modal.Title>Log Symptoms</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-content period-modal">
            <div className="period-section">
              <h5>Period</h5>
              <div className="period-options">
                <button
                  className={`period-option ${
                    selectedPeriod === "light" ? "selected" : ""
                  }`}
                  onClick={() => handleOptionSelect("period", "light")}
                >
                  <Light /> Light
                </button>

                <button
                  className={`period-option ${
                    selectedPeriod === "medium" ? "selected" : ""
                  }`}
                  onClick={() => handleOptionSelect("period", "medium")}
                >
                  <Medium /> Medium
                </button>
                <button
                  className={`period-option ${
                    selectedPeriod === "heavy" ? "selected" : ""
                  }`}
                  onClick={() => handleOptionSelect("period", "heavy")}
                >
                  <Heavy /> Heavy
                </button>
              </div>
              {errorData.selectedPeriod && (
                <p className="options-error-text">
                  Please select a period option.
                </p>
              )}
            </div>
            <div className="spotting-section">
              <h5>Spotting</h5>
              <div className="spotting-options">
                <button
                  className={`spotting-option red${
                    selectedSpotting === "red" ? "selected" : ""
                  }`}
                  onClick={() => handleOptionSelect("spotting", "red")}
                >
                  <Red /> Red
                </button>
                <button
                  className={`spotting-option brown ${
                    selectedSpotting === "brown" ? "selected" : ""
                  }`}
                  onClick={() => handleOptionSelect("spotting", "brown")}
                >
                  <Brown /> Brown
                </button>
              </div>
              {errorData.selectedSpotting && (
                <p className="options-error-text">
                  Please select a spotting option.
                </p>
              )}
            </div>
            <div className="pain-section">
              <h5>Pain</h5>
              <div className="pain-options">
                <button
                  className={`pain-option ${
                    selectedPain === "Pain free" ? "selected" : ""
                  }`}
                  onClick={() => handleOptionSelect("pain", "Pain free")}
                >
                  <Pain /> Pain free
                </button>
                <button
                  className={`pain-option ${
                    selectedPain === "Period cramps" ? "selected" : ""
                  }`}
                  onClick={() => handleOptionSelect("pain", "Period cramps")}
                >
                  <Period /> Period cramps
                </button>
                <button
                  className={`pain-option ${
                    selectedPain === "Ovulation" ? "selected" : ""
                  }`}
                  onClick={() => handleOptionSelect("pain", "Ovulation")}
                >
                  <Ovule /> Ovulation
                </button>
                <button
                  className={`pain-option ${
                    selectedPain === "Breast Tenderness" ? "selected" : ""
                  }`}
                  onClick={() =>
                    handleOptionSelect("pain", "Breast Tenderness")
                  }
                >
                  <Breast />
                  Breast Tenderness
                </button>
              </div>
              {errorData.selectedPain && (
                <p className="options-error-text">
                  Please select a Pain option.
                </p>
              )}
            </div>
            <div className="pain-section">
              <h5>Feelings</h5>
              <div className="pain-options">
                <button
                  className={`pain-option ${
                    selectedFeeling === "Mood swings" ? "selected" : ""
                  }`}
                  onClick={() => handleOptionSelect("feeling", "Mood swings")}
                >
                  <Mood /> Mood swings
                </button>
                <button
                  className={`pain-option ${
                    selectedFeeling === "Not In Control" ? "selected" : ""
                  }`}
                  onClick={() =>
                    handleOptionSelect("feeling", "Not In Control")
                  }
                >
                  <Control /> Not in control
                </button>
                <button
                  className={`pain-option ${
                    selectedFeeling === "Happy" ? "selected" : ""
                  }`}
                  onClick={() => handleOptionSelect("feeling", "Happy")}
                >
                  <Happy /> Happy
                </button>
                <button
                  className={`pain-option ${
                    selectedFeeling === "Sad" ? "selected" : ""
                  }`}
                  onClick={() => handleOptionSelect("feeling", "Sad")}
                >
                  <Sad /> Sad
                </button>
              </div>
              {errorData.selectedFeeling && (
                <p className="options-error-text">
                  Please select a Feelings option.
                </p>
              )}
            </div>

            <div className="pain-section">
              <h5>Sleep Quantity</h5>
              <div className="pain-options">
                <button
                  className={`pain-option ${
                    selectedSleepQuality === "Trouble falling asleep"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleOptionSelect(
                      "sleep_quantity",
                      "Trouble falling asleep"
                    )
                  }
                >
                  <Trouble /> Trouble falling sleep
                </button>
                <button
                  className={`pain-option ${
                    selectedSleepQuality === "Woke up Refreshed"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleOptionSelect("sleepQuality", "Woke up Refreshed")
                  }
                >
                  <Refresh /> Woke up Refreshed
                </button>
                <button
                  className={`pain-option ${
                    selectedSleepQuality === "Woke up Tired" ? "selected" : ""
                  }`}
                  onClick={() =>
                    handleOptionSelect("sleepQuality", "Woke up Tired")
                  }
                >
                  <Wokeup /> Woke up Tired
                </button>
                <button
                  className={`pain-option ${
                    selectedSleepQuality === "Restless sleep" ? "selected" : ""
                  }`}
                  onClick={() =>
                    handleOptionSelect("sleepQuality", "Restless sleep")
                  }
                >
                  <Rest /> Restless sleep
                </button>
              </div>
              {errorData.selectedSleepQuality && (
                <p className="options-error-text">
                  Please select a Sleep Quality option.
                </p>
              )}
            </div>

            <div className="pain-section">
              <h5>Sex Life </h5>
              <div className="pain-options ">
                <button
                  className={`pain-option ${
                    selectedSexLifeQuality === "protected" ? "selected" : ""
                  }`}
                  onClick={() => handleOptionSelect("sexLife", "protected")}
                >
                  <Trouble /> Protected
                </button>
                <button
                  className={`pain-option ${
                    selectedSexLifeQuality === "unprotected" ? "selected" : ""
                  }`}
                  onClick={() => handleOptionSelect("sexLife", "unprotected")}
                >
                  <Refresh /> Unprotected
                </button>
                <button
                  className={`pain-option ${
                    selectedSexLifeQuality === "no_sex_today" ? "selected" : ""
                  }`}
                  onClick={() => handleOptionSelect("sexLife", "no_sex_today")}
                >
                  <Refresh /> No Sex Today
                </button>
                <button
                  className={`pain-option ${
                    selectedSexLifeQuality === "high_sex_drive"
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    handleOptionSelect("sexLife", "high_sex_drive")
                  }
                >
                  <Refresh /> High Sex Drive
                </button>
                <button
                  className={`pain-option ${
                    selectedSexLifeQuality === "withdrawal" ? "selected" : ""
                  }`}
                  onClick={() => handleOptionSelect("sexLife", "withdrawal")}
                >
                  <Refresh /> Withdrawal
                </button>
                <button
                  className={`pain-option ${
                    selectedSexLifeQuality === "low_sex_drive" ? "selected" : ""
                  }`}
                  onClick={() => handleOptionSelect("sexLife", "low_sex_drive")}
                >
                  <Refresh /> Low Sex Drive
                </button>
                <button
                  className={`pain-option ${
                    selectedSexLifeQuality === "masturbation" ? "selected" : ""
                  }`}
                  onClick={() => handleOptionSelect("sexLife", "masturbation")}
                >
                  <Refresh /> Masturbation
                </button>
                <button
                  className={`pain-option ${
                    selectedSexLifeQuality === "sex_toys" ? "selected" : ""
                  }`}
                  onClick={() => handleOptionSelect("sexLife", "sex_toys")}
                >
                  <Refresh /> Sex Toys
                </button>
                <button
                  className={`pain-option ${
                    selectedSexLifeQuality === "orgasm" ? "selected" : ""
                  }`}
                  onClick={() => handleOptionSelect("sexLife", "orgasm")}
                >
                  <Refresh /> Orgasm
                </button>
                <button
                  className={`pain-option ${
                    selectedSexLifeQuality === "no_orgasm" ? "selected" : ""
                  }`}
                  onClick={() => handleOptionSelect("sexLife", "no_orgasm")}
                >
                  <Refresh /> No Orgasm
                </button>
              </div>
              {errorData.selectedSexLifeQuality && (
                <p className="options-error-text">
                  Please select a Sleep Sex Life option.
                </p>
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {errorMessage && <p className="options-error-text">{errorMessage}</p>}
          <Button variant="secondary" onClick={handleCloseSymptomModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
        </CareStyled>
      </Modal>

      <Modal show={showSuccessModal} onHide={handleCloseSymptomModal}>
        <CareStyled>
        <Modal.Header>
          <Modal.Title>Log Symptoms</Modal.Title>
        </Modal.Header>
        <Modal.Body>Log Symptoms Added Successfully.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseSymptomModal}>
            Ok
          </Button>
        </Modal.Footer>
        </CareStyled>
      </Modal>

      <EnterDOBModal
        show={showDOBModal}
        handleClose={handleCloseDOBModal}
        setPeriodPrediction={setPeriodPrediction}
      />
    </div>
  );
};

export default Womenscare;
