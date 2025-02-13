import React, { useEffect, useState } from "react";
import { ApplyJobFormStyled } from "./ApplyJobForm.styled";
import { useHistory } from "react-router-dom";
import PlusIcon from "../../../assets/images/Career/PlusIcon.svg";
import Loader from "../../../assets/images/Career/loader.svg";
import JobConfirmModal from "../JobConfirmModal";
import CustomModal from "../../../components/CustomModel";

function ApplyJobForm() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [mobilePhone, setMobilePhone] = useState("");
  const [experienceYears, setExperienceYears] = useState("");
  const [experienceMonths, setExperienceMonths] = useState("");
  const [currentSalary, setCurrentSalary] = useState("");
  const [expectedSalary, setExpectedSalary] = useState("");
  const [availableToJoin, setAvailableToJoin] = useState("");
  const [preferredLocation, setPreferredLocation] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [skills, setSkills] = useState("");
  const [additionalDocuments, setAdditionalDocuments] = useState(null);
  const [generatedCaptch, setGeneratedCaptch] = useState("");
  const [enteredCaptch, setEnteredCaptch] = useState("");
  const [matchedTxt, setMatchedTxt] = useState("");
  const [isGenerateCaptcha, setIsGenerateCaptcha] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const history = useHistory();

  useEffect(() => {
    setIsGenerateCaptcha(true);
    reloadCaptcha();
  }, []);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Handle form submission
  };
  const navigateToPage = (url: string) => {
    history.push(url);
  };

  const handleFileChange = (event: any) => {
    setAdditionalDocuments(event.target.files[0]);
  };

  function reloadCaptcha() {
    setIsGenerateCaptcha(true);
    setGeneratedCaptch("");
    // setMatchedTxt("")
    let uniquechar = "";
    const randomchar =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 1; i < 6; i++) {
      uniquechar += randomchar.charAt(Math.random() * randomchar.length);
    }
    console.log("uniquechar", uniquechar);

    setTimeout(() => {
      setGeneratedCaptch(uniquechar);
      setIsGenerateCaptcha(false);
    }, 1000);
  }

  function checkCaptcha() {
    console.log("generatedCaptch", generatedCaptch);
    console.log("enteredCaptch", enteredCaptch);
    if (generatedCaptch == enteredCaptch) {
      setMatchedTxt("Matched");
      reloadCaptcha();
    } else {
      setMatchedTxt("not Matched");
      reloadCaptcha();
    }
  }

  const closeJobConfirmModal = () => {
    setModalShow(false);
    navigateToPage("/career");
  };

  const submitForm = () => {
    checkCaptcha();
    setModalShow(true);
  };

  return (
    <ApplyJobFormStyled>
      <div className="applyJobContainer">
        <div className="header">
          <div>
            <h1>UI/UX Designer</h1>
            <p>FULL-TIME • BANGALORE • 1-2 YEARS</p>
          </div>
        </div>
        <div className="form-sec">
          <p
            className="back-link"
            onClick={() => {
              navigateToPage("/career");
            }}
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
            &nbsp;<span>Back to all job openings</span>
          </p>
          <h2 className="apply-header">Apply for this job</h2>
          <div className="upload-resume">
            <input
              type="file"
              id="resumeUpload"
              accept=".pdf,.doc,.docx"
              hidden
            />
            <label htmlFor="resumeUpload" className="upload-button">
              <p>
                Upload resume <span className="text-danger">*</span>
              </p>
              <p className="text-secondary">
                This will auto-fill the fields below. 10MB max file size
              </p>
            </label>
          </div>
          <div className="input-sec d-flex mt-5 gap-4">
            <div className="input-div">
              <p>
                First Name <span className="text-danger">*</span>
              </p>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="input-div">
              <p>
                Middle Name <span className="text-danger">*</span>
              </p>
              <input
                type="text"
                id="middleName"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
              />
            </div>
          </div>
          <div className="input-sec d-flex gap-4">
            <div className="input-div">
              <p>
                Gender <span className="text-danger">*</span>
              </p>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select an option</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="input-div">
              <p>
                Email <span className="text-danger">*</span>
              </p>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="input-sec d-flex gap-4">
            <div className="input-div">
              <p>
                Mobile Phone <span className="text-danger">*</span>
              </p>
              <input
                type="text"
                id="mobilePhone"
                value={mobilePhone}
                onChange={(e) => setMobilePhone(e.target.value)}
              />
            </div>
            <div className="input-div">
              <p>
                Experience <span className="text-danger">*</span>
              </p>
              <input
                type="number"
                id="experienceYears"
                value={experienceYears}
                onChange={(e) => setExperienceYears(e.target.value)}
              />
            </div>
          </div>
          <div className="additional-documents-sec">
            <p>Additional Documents</p>
            <div className="additional-documents">
              <input
                type="file"
                id="additionalDocuments"
                onChange={handleFileChange}
                hidden
              />
              <label
                htmlFor="additionalDocuments"
                className="upload-button d-flex align-items-center gap-2"
              >
                <div>
                  <img src={PlusIcon} />
                </div>
                <div>
                  <p className="addAttach-Txt">Add attachment</p>
                  <p className="text-secondary">10MB max size</p>
                </div>
              </label>
            </div>
          </div>
          <div className="input-sec experience-years">
            <div className="input-div">
              <p>Experience (in years)</p>
              <div className="d-flex gap-4">
                <div className="experience-sec d-flex">
                  <input
                    type="text"
                    id="experienceYears"
                    value={experienceYears}
                    onChange={(e) => setExperienceYears(e.target.value)}
                  />
                  <button type="button" id="button-addon1">
                    Years
                  </button>
                </div>
                <div className="experience-sec d-flex">
                  <select
                    id="Month"
                    value={experienceMonths}
                    onChange={(e) => setExperienceMonths(e.target.value)}
                  >
                    <option value="">0</option>
                    <option value="Jan">1</option>
                    <option value="Feb">2</option>
                    <option value="Mar">3</option>
                    <option value="Apr">4</option>
                    <option value="May">5</option>
                    <option value="Jun">6</option>
                    <option value="Jul">7</option>
                    <option value="Aug">8</option>
                    <option value="Sep">9</option>
                    <option value="Oct">10</option>
                    <option value="Nov">11</option>
                    <option value="Dec">12</option>
                  </select>
                  <button type="button" id="button-addon1">
                    Months
                  </button>
                </div>
              </div>
            </div>
            <div className="input-div">
              <p>Current Salary</p>
              <input
                type="text"
                id="currentSalary"
                placeholder="INR"
                value={currentSalary}
                onChange={(e) => setCurrentSalary(e.target.value)}
              />
            </div>
          </div>
          <div className="input-sec d-flex gap-4">
            <div className="input-div">
              <p>Expected Salary</p>
              <input
                type="text"
                id="expectedSalary"
                value={expectedSalary}
                onChange={(e) => setExpectedSalary(e.target.value)}
              />
            </div>
            <div className="input-div">
              <p>Available To Join (in days)</p>
              <input
                type="number"
                id="availableToJoin"
                value={availableToJoin}
                onChange={(e) => setAvailableToJoin(e.target.value)}
              />
            </div>
          </div>
          <div className="input-sec d-flex gap-4">
            <div className="input-div">
              <p>Preferred Location</p>
              <select
                id="preferredLocation"
                value={preferredLocation}
                onChange={(e) => setPreferredLocation(e.target.value)}
              >
                <option value="">Select an option</option>
              </select>
            </div>
            <div className="input-div">
              <p>Current Location:</p>
              <input
                type="text"
                id="currentLocation"
                value={currentLocation}
                onChange={(e) => setCurrentLocation(e.target.value)}
              />
            </div>
          </div>
          <div className="input-sec d-flex gap-4">
            <div className="input-div skill-sec">
              <p>Skills</p>
              <input
                id="skills"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                placeholder="Add new skill"
              />
            </div>
          </div>
          <div className="captcha-sec d-flex mt-5">
            <p className="text-danger">{generatedCaptch}</p>
            <span onClick={() => reloadCaptcha()}>
              <img
                src={Loader}
                className={` ${isGenerateCaptcha ? "spinner-icon" : ""}`}
              />
            </span>
            <input
              type="text"
              id="user-input"
              placeholder="Captcha"
              onChange={(e) => setEnteredCaptch(e.target.value)}
              value={enteredCaptch}
            />
            {/* <p id="key">{matchedTxt}</p> */}
          </div>
          <div className="confirmation-sec d-flex mt-2 gap-1 ">
            <input type="checkbox" />
            <p>
              By applying, you hereby accept the data processing terms under the{" "}
              <span>Privacy Policy</span> and give consent to processing of the
              data as part of this job application.
            </p>
          </div>
          <div className="pb-5">
            <button
              className="submission-form"
              type="submit"
              onClick={() => {
                submitForm();
              }}
            >
              Submit
            </button>
          </div>
        </div>
        <JobConfirmModal
          show={modalShow}
          onHide={() => closeJobConfirmModal()}
        />
      </div>
    </ApplyJobFormStyled>
  );
}

export default ApplyJobForm;
