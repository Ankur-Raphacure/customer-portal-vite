import React from "react";
import Logo from "../../../assets/r_logo.png";
import Employees from "../../../assets/images/Career/employees.svg";
import Star from "../../../assets/images/Career/star.svg";
import Location from "../../../assets/images/Career/locSm.svg";
import salaryBag from "../../../assets/images/Career/salaryBag.svg";
import location from "../../../assets/images/Career/location.svg";
import Compass from "../../../assets/images/Career/compass.svg";

import { JobDescriptionStyled } from "./JobDescriptionStyled.styled";
import { useHistory } from "react-router-dom";

function JobDescription() {
  const history = useHistory();
  const navigateToPage = (url: string) => {
    history.push(url);
  };

  return (
    <JobDescriptionStyled>
      <div className="job-card">
        <div className="about-company">
          <div className="logo-sec m-auto">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="job-header d-flex flex-column justify-content-center align-items-center text-center">
            <h2 className="mb-0">Raphacure Pvt Ltd</h2>
            <p>Services</p>
          </div>
          <div className="d-flex justify-content-between align-items-center text-center">
            <div className="d-flex gap-2 justify-content-between align-items-center text-center">
              <div className="small-logo ">
                <img src={Employees} alt="Employees logo" />
              </div>
              <div className="logo-title d-flex flex-column">
                <h3 className="mb-0">50 - 250</h3>
                <p>Employees</p>
              </div>
            </div>
            <div className="d-flex gap-2 justify-content-between align-items-center text-center">
              <div className="small-logo ">
                <img src={Star} alt="Reviews logo" />
              </div>
              <div className="logo-title d-flex flex-column">
                <h3 className="mb-0">4.5</h3>
                <p>Reviews</p>
              </div>
            </div>
          </div>
          <div className="d-flex flex-row gap-2 mt-4 mb-5 align-items-center text-center">
            <div className="small-logo">
              <img src={Location} alt="Location logo" />
            </div>
            <div className="logo-title d-flex flex-column">
              <h3 className="mb-0">Bengaluru,Karnataka</h3>
              <p>Location</p>
            </div>
          </div>
          <hr className="text-secondary m-1 mb-5" />
          <div className="about-comp-sec">
            <h3>About company</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
          </div>
          <div className="jobDes-buttons-sec d-flex justify-content-around mt-5">
            <button className="border-0"> 1 vacancy</button>
            <button className="bg-transparent"> Visit Site</button>
          </div>
        </div>
        <div className="about-job">
          <div className="job-details-sec">
            <div className="job-title d-flex justify-content-between">
              <div className="">
                <h2>Technical Content Writer</h2>
                <p className="m-0">Posted: 2 Days ago</p>
              </div>
              <button
                className="apply-now"
                onClick={() => navigateToPage("/apply-job")}
              >
                Apply Now
              </button>
            </div>
            <div className="job-des-log-sec d-flex justify-content-between mb-3">
              <div className="job-des-logos d-flex gap-2 ">
                <div className="job-des-logos-bag">
                  <img src={salaryBag} alt="Salary" />
                </div>
                <div className="salary-Bag-txt ml-1">
                  <h4 className="m-0">Not disclosed</h4>
                  <p>Salary</p>
                </div>
              </div>
              <div className="job-des-logos d-flex gap-2 ">
                <div className="job-des-logos-bag">
                  <img src={Compass} alt="Compass" />
                </div>
                <div className="ml-1">
                  <h4 className="m-0">0-1 years</h4>
                  <p>Experience</p>
                </div>
              </div>
            </div>
            <div className="job-des-logos d-flex gap-2 ">
              <div className="job-des-logos-bag">
                <img src={location} alt="Location" />
              </div>
              <div>
                <h4 className="mb-0">Bengaluru</h4>
                <p>Location</p>
              </div>
            </div>
            <div className="job-description">
              <h3>Job Description</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus.
              </p>
            </div>
            <div className="responsibilities">
              <h3>Responsibilities and Duties:</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              </p>
            </div>
            <div className="requirements">
              <h3>Required Experience, Skills and Qualifications:</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
              </p>
            </div>
          </div>
          <div className="job-details-sec education">
            <h3>Educational Qualifications:</h3>
            <p>Degree in English or relevant qualification.</p>
          </div>
          <div className="job-details-sec interview-process">
            <h3>Rounds description:</h3>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Communication Assignment
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa.
                  </div>
                </div>
              </div>
              {/* </div>
                        <div className="accordion" id="accordionExample"> */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Interview with Content Writer Team
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa.{" "}
                  </div>
                </div>
              </div>
              {/* </div>
                        <div className="accordion" id="accordionExample"> */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Interview with Chief Marketing Officer
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa.{" "}
                  </div>
                </div>
              </div>
              {/* </div>
                        <div className="accordion" id="accordionExample"> */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Interview with Chief People Officer
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa.{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </JobDescriptionStyled>
  );
}

export default JobDescription;
