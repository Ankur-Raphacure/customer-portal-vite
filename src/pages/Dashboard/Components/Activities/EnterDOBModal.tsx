import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import moment from "moment";
import { getCreateTrackerDetailAPI } from "../../../../redux/slices/generic/genericService";
import { useDispatch } from "react-redux";
import { CareStyled } from "./CareStyled.Styled";

const initVal = {
  dob: undefined,
  cycle: undefined,
};

const initValError = {
  dob: undefined,
  cycle: undefined,
};
const initValError1 = {
  dob: undefined,
  cycle: undefined,
};

const initValErrorData = {
  dob: "Please Select Date of Birth",
  cycle: "Please Select Cycle Day's",
};

interface SignUpData {
  dob?: string;
  lastdate?: string;
  cycle?: number;
}

const EnterDOBModal = ({ show, handleClose, setPeriodPrediction }: any) => {
  const dispatch = useDispatch();
  const [currentStep, setCurrentStep] = useState(1);
  const [dob, setDob] = useState("");
  const [lastPeriodDate, setLastPeriodDate] = useState("");
  const [cycleLength, setCycleLength] = useState(28);
  const [passError, setPassError] = useState("");
  const [errorData, setErrorData] = useState(initValError as any);
  const [signUpData, setSignUpData] = useState(initVal as any);
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleConfirm = () => {
    const nextPeriodDate = moment(lastPeriodDate).add(cycleLength, "days");
    setPeriodPrediction(nextPeriodDate);

    handleClose();
    setCurrentStep(1);
  };

  const makeSignUpCall = async (periodData: any) => {
    console.log(periodData, "periodData");
    setIsLoading(true);
    const resp = await dispatch(getCreateTrackerDetailAPI(periodData));
    const resJson = JSON.parse(JSON.stringify(resp));
    console.log("resJson : ", resJson);

    if (resJson?.payload?.success) {
      setSignUpData(initVal as any);
      setIsLoading(false);
      handleClose();
      // props?.addEmpanelSuccess(resJson?.payload?.data);
    }
    // const resp = props?.selectedMember?.id
    //   ? ((await dispatch(
    //     getCreateTrackerDetailAPI({ id: props?.selectedMember?.id,  })
    //     )) as any)
    //   : ((await dispatch(getCreateTrackerDetailAPI(props))) as any);
    // if (resp?.payload?.success) {
    //   setSignUpData(initVal as any);
    //   setIsLoading(false);
    //   props?.addEmpanelSuccess(resp?.payload?.data);
    // }
  };

  const createAccountData = () => {
    console.log(signUpData, "signUpData");
    const periodTrackerBody = {
      personaldetail: {
        dob: signUpData?.dob || "",
        last_period_date: signUpData?.lastdate || "",
        average_period_cycle: signUpData?.cycle || "",
      },
    };

    setPassError("");
    var isValid = true;
    var errornew = { ...errorData };
    for (var key in initValError1) {
      if (signUpData[key] === "" || !signUpData[key]) {
        errornew[key] = true;
        isValid = false;
        console.log("signUpData Key", signUpData[key]);
      }
    }
    console.log("errornew", errornew);
    setErrorData({ ...errornew });
    if (isValid) {
      makeSignUpCall(periodTrackerBody);
    }
  };

  const handleChangeValue = (e: any) => {
    const { name, value } = e.target;
    const trimmedValue = value.trim();
    setSignUpData((prevData: SignUpData) => ({
      ...prevData,
      [name]: trimmedValue,
    }));
  };

  useEffect(() => {
    setSignUpData(initVal);
  }, []);

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="step-content">
            <h5>Enter Your Date of Birth</h5>
            <input
              type="date"
              className="form-control"
              name="dob"
              value={signUpData.dob || ""}
              onChange={handleChangeValue}
            />
          </div>
        );
      case 2:
        return (
          <div className="step-content">
            <h5>When Did your Last Period start</h5>
            <input
              type="date"
              className="form-control"
              name="lastdate"
              value={signUpData.lastdate || ""}
              onChange={handleChangeValue}
            />
          </div>
        );
      case 3:
        return (
          <div className="step-content text-center">
            <h5>How long is your average cycle?</h5>
            <p>A little hint - cycles usually last 24-38 days</p>
            <input
              type="number"
              className="form-control"
              name="cycle"
              value={signUpData.cycle?.toString() || ""}
              onChange={handleChangeValue}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <CareStyled>
        <Modal.Header closeButton>
          <Modal.Title>
            {currentStep === 1 && "Enter Date of Birth"}
            {currentStep === 2 && "Second Step"}
            {currentStep === 3 && "Third Step"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{renderStepContent()}</Modal.Body>
        <Modal.Footer>
          {currentStep > 1 && (
            <Button variant="secondary" onClick={handleBack}>
              Back
            </Button>
          )}
          {currentStep < 3 && (
            <Button variant="primary" onClick={handleNext}>
              Next
            </Button>
          )}
          {currentStep === 3 && (
            <Button variant="primary" onClick={createAccountData}>
              Confirm
            </Button>
          )}
        </Modal.Footer>
      </CareStyled>
    </Modal>
  );
};

export default EnterDOBModal;
