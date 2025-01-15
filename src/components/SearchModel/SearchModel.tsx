import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
// import { SearchModelStyled } from "./SearchModel.styled";
import CloseButton from "react-bootstrap/CloseButton";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  requestOtpAPI,
  validateOtpAPI,
} from "../../redux/slices/auth/authService";
import OTPInput from "react-otp-input";
import Loader from "../Common/Loader";
import SocialLoginButtons from "../SocialLoginButtons/SocialLoginButtons";

const SearchModel = (props: any) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpCode, setOtpCode] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");
  const [isPhoneNumber, setIsPhoneNumber] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [isPhoneNumberError, setIsPhoneNumberError] = useState(false);
  const [termsError, setTermsError] = useState(false);
  const [udateState, setUpdateState] = useState(false);
  const [termsCheckBox, setTermsCheckBox] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [validateOtp, setValidateOtp] = useState("");
  const [otpErrorMsg, setOtpErrorMsg] = useState("");
  const [timeRemainingVal, setTimeRemainingVal] = useState(60);
  var timer = null as any;
  let timeRemaining = 60;

  const history = useHistory();
  const dispatch = useDispatch();

  const checkDisabled = () => {
    return phoneNumber?.length < 6 || !termsCheckBox ? true : false;
  };
  const checkOtpDisabled = () => {
    return validateOtp?.length < 6 ? true : false;
  };

  console.log("checkDisabled", checkDisabled());
  const aggreCheckBox = () => {
    setTermsCheckBox(!termsCheckBox);
    // setUpdateState(!udateState);
  };
  const handlePinChange = (pinCode: any) => {
    setValidateOtp(pinCode);
  };

  const checkPhoneNumberOrEmail = (inputV: any) => {
    const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (phoneRegex.test(inputV)) {
      return "phoneNo";
    }
    if (emailRegex.test(inputV)) {
      return "email";
    }
    return "invalid";
  };
  const resetTImer = async () => {
    timer = setInterval(updateTimer, 1000);
  };
  const updateTimer = () => {
    timeRemaining--;
    if (timeRemaining === 0) {
      clearInterval(timer);
    } else {
      setTimeRemainingVal(timeRemaining);
    }
  };
  const handleResedOTP = () => {
    requestOtp();
  };
  const closeModel = () => {
    props?.handleClose();
  };
  const showPageLoader = () => {
    // setIsLoading(true);
  };
  const navigateUserSocial = (udata: any) => {
    console.log("navigateUserSocial", udata);
  };
  const requestOtp = async () => {
    const inputType = checkPhoneNumberOrEmail(phoneNumber);
    if (inputType === "phoneNo") {
      sendOTPCall({ phone: phoneNumber });
      setIsPhoneNumber(true);
    } else if (inputType === "email") {
      sendOTPCall({ email: phoneNumber });
      setIsPhoneNumber(false);
    } else {
      setIsPhoneNumberError(true);
    }
  };
  const sendOTPCall = async (bodyJ: any) => {
    setIsLoading(true);
    const response = (await dispatch(requestOtpAPI(bodyJ))) as any;
    setIsLoading(false);
    console.log("response", response);
    if (response?.payload?.success) {
      // toast.add({ title: "Successfully sent OTP", color: "green" });
      // otpRequested.value = true;
      setOtpSent(true);
      setOtpErrorMsg("");
      setValidateOtp("");
      timeRemaining = 60;
      resetTImer();
    } else {
      setIsPhoneNumberError(true);
      // toast.add({ title: response.errorMessage, color: "red" });
    }
  };
  const handleValidateOtp = async () => {
    const reqBody = isPhoneNumber
      ? {
          phone: phoneNumber,
          otp: validateOtp.toString(),
        }
      : {
          email: phoneNumber,
          otp: validateOtp.toString(),
        };
    setIsLoading(true);
    const response = (await dispatch(validateOtpAPI(reqBody))) as any;
    console.log("response main", response);

    setIsLoading(false);
    if (response?.payload?.success) {
      setOtpSent(true);
      props?.handleClose();
    } else {
      setOtpErrorMsg("Please enter Valid OTP");
    }
  };
  console.log("otpErrorMsg", otpErrorMsg);
  return (
    <Modal
      {...props}
      className="login-Model-popup"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body
        className={`modalBodyDefault alert-model-popup-sec dynamic_class_${props?.dynamicClassName}`}
      >
        {/* <SearchModelStyled> */}
        <div className="login-model-content">
          {isLoading && <Loader />}
          <div className="new-option-header">
            <div className="login-header-left">Login/Sign up</div>

            <div className="login-header-right" onClick={props?.handleClose}>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 0C5.82034 0 0 5.82034 0 13C0 20.1801 5.82034 26 13 26C20.1801 26 26 20.1801 26 13C26 5.82034 20.1801 0 13 0ZM13 24.4006C6.72791 24.4006 1.625 19.2721 1.625 12.9999C1.625 6.72786 6.72791 1.62495 13 1.62495C19.2721 1.62495 24.375 6.72788 24.375 12.9999C24.375 19.272 19.2721 24.4006 13 24.4006ZM17.5959 8.40409C17.2786 8.08681 16.7643 8.08681 16.447 8.40409L13 11.8511L9.55297 8.40409C9.23569 8.08681 8.72138 8.08681 8.40369 8.40409C8.08641 8.72138 8.08641 9.23569 8.40369 9.55297L11.8507 13L8.40369 16.447C8.08641 16.7639 8.08641 17.2791 8.40369 17.5959C8.72097 17.9132 9.23528 17.9132 9.55297 17.5959L13 14.1489L16.447 17.5959C16.7643 17.9132 17.2786 17.9132 17.5959 17.5959C17.9132 17.2791 17.9132 16.7639 17.5959 16.447L14.1489 13L17.5959 9.55297C17.9136 9.23528 17.9136 8.72097 17.5959 8.40409Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          {!otpSent ? (
            <div className="login-step1">
              <div>
                <input
                  className="input-phone-box"
                  value={phoneNumber}
                  onChange={(e: any) => {
                    setIsPhoneNumberError(false);
                    setPhoneNumber(e.target.value);
                  }}
                  placeholder="Phone Or Email"
                />
              </div>
              <div className="checkboxtacbox">
                <input
                  // onClick={aggreCheckBox}
                  onChange={(e) => {
                    setTermsCheckBox(e.target.checked);
                  }}
                  type="checkbox"
                  id="checkboxaggrews"
                  // checked={termsCheckBox}
                />
                <label htmlFor="checkboxaggrews">
                  By signing in, I agree to the
                  <a target="_blank" href="/privacy-policy">
                    &nbsp; Privacy Policy
                  </a>{" "}
                  & &nbsp;
                  <a target="_blank" href="/terms">
                    Terms of Services
                  </a>
                  .
                </label>
              </div>
              {/* <p> Please accept Terms and Conditions</p> */}
              {isPhoneNumberError && (
                <p className="error_message">
                  EMail ID or Phone Number is required and must be a valid Email
                  ID or phone number.
                </p>
              )}

              <div className="proceed-btn">
                <button onClick={requestOtp} disabled={checkDisabled()}>
                  Continue
                </button>
              </div>
              <div className="or-text">
                <span>OR</span>
              </div>
              <div className="g-butttons">
                <SocialLoginButtons
                  closeModel={closeModel}
                  isSignUp={true}
                  showPageLoader={showPageLoader}
                  navigateUserSocial={navigateUserSocial}
                  // role={roles.find((role) => role.id === roleType)}
                />
              </div>
            </div>
          ) : (
            <div className="login-step2">
              {otpSent && (
                <>
                  <div className="back-btn-sec">
                    <span
                      onClick={() => {
                        setOtpSent(false);
                      }}
                      className=" text-xl cursor-pointer top-category-sec font-bold mx-2 back-btn-sec opacity-75 "
                    >
                      <svg
                        width="21"
                        height="18"
                        viewBox="0 0 21 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.6875 7.7152H4.12125L8.88563 2.10999C9.10841 1.84745 9.21559 1.50898 9.18359 1.16903C9.15159 0.829086 8.98304 0.515513 8.715 0.297298C8.44697 0.0790819 8.10141 -0.0259025 7.75435 0.00544001C7.40729 0.0367826 7.08716 0.201885 6.86437 0.464426L0.301875 8.17802C0.257723 8.23937 0.218242 8.30383 0.18375 8.37086C0.18375 8.43514 0.18375 8.47371 0.0918752 8.53799C0.0323842 8.68539 0.00123522 8.8423 0 9.0008C0.00123522 9.1593 0.0323842 9.31621 0.0918752 9.46362C0.0918752 9.5279 0.0918748 9.56647 0.18375 9.63075C0.218242 9.69778 0.257723 9.76223 0.301875 9.82359L6.86437 17.5372C6.98778 17.6823 7.14231 17.799 7.31699 17.879C7.49166 17.959 7.68218 18.0003 7.875 18C8.18167 18.0006 8.47887 17.896 8.715 17.7043C8.8479 17.5964 8.95776 17.4638 9.03829 17.3143C9.11881 17.1647 9.16842 17.001 9.18427 16.8326C9.20012 16.6643 9.1819 16.4945 9.13065 16.333C9.0794 16.1715 8.99614 16.0215 8.88563 15.8916L4.12125 10.2864H19.6875C20.0356 10.2864 20.3694 10.151 20.6156 9.90986C20.8617 9.66876 21 9.34177 21 9.0008C21 8.65984 20.8617 8.33284 20.6156 8.09175C20.3694 7.85065 20.0356 7.7152 19.6875 7.7152Z"
                          fill="#444444"
                        />
                      </svg>{" "}
                      &nbsp;
                      {` Back`}
                    </span>
                  </div>
                  <div className="login-header-left">Verification code</div>
                  <p className="verify-new-line-sec">
                    We have sent a 6-digit OTP on your mobile number +91
                    {` `} {phoneNumber}
                  </p>

                  <div className="otp-enter-box">
                    <OTPInput
                      inputType="number"
                      inputStyle={{
                        marginRight: "14px",
                        width: "48px",
                        height: "48px",
                        fontSize: "24px",
                        // fontFamily: "Montserrat",
                        MozAppearance: "textfield",
                      }}
                      value={validateOtp}
                      onChange={(e: any) => {
                        handlePinChange(e);
                        setOtpErrorMsg("");
                      }}
                      numInputs={6}
                      renderSeparator={<span> </span>}
                      renderInput={(props) => <input {...props} />}
                    />
                  </div>
                  {otpErrorMsg && (
                    <p className="error_message">{otpErrorMsg}</p>
                  )}
                  <div className="resend-time-sec">
                    <p>
                      Did not receive OTP?
                      {timeRemainingVal > 1 ? (
                        <>
                          {` `} Resend in
                          <span>
                            {`0:`}
                            {timeRemainingVal}
                          </span>
                          Seconds
                        </>
                      ) : (
                        <>
                          <button
                            onClick={handleResedOTP}
                            className="re-send-btn"
                          >
                            Resend
                          </button>
                        </>
                      )}
                    </p>
                  </div>
                  <div className="proceed-btn">
                    <button
                      onClick={handleValidateOtp}
                      disabled={checkOtpDisabled()}
                    >
                      SUBMIT
                    </button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
        {/* </SearchModelStyled> */}
      </Modal.Body>
    </Modal>
  );
};

export default SearchModel;
