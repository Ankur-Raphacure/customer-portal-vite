import React from 'react';
import { CareerStyled } from './CareerStyled.styled';
import Logo from "../../assets/images/Career/Background.svg";
import salaryBag from "../../assets/images/Career/salaryBag.svg"
import location from "../../assets/images/Career/location.svg"
import womanWorkDesk from "../../assets/images/Career/womanWorkDesk.png"
import { useHistory } from "react-router-dom";

function Career() {
    const history = useHistory();
    const navigateToPage = (url: string) => {
        history.push(url);
    };

    return (
        <CareerStyled>
            <div className="career-section">
                <div className="cbanner-section">
                    <div className="banner-back-set">
                        <div className="banner-txt-sec">
                            <h1>Why join  <span>Raphacure?</span></h1>
                            <div className="d-flex mt-4">
                                <ul className="ps-3 pe-3">
                                    <li>Work with cutting-edge healthcare technology.</li>
                                    <li>Enjoy opportunities for professional development.</li>
                                    <li>Be part of a collaborative and dynamic team.</li>
                                </ul>
                                <ul className="ps-3 pe-3">
                                    <li>Contribute to improving healthcare services.</li>
                                    <li>Receive a comprehensive benefits package.</li>
                                    <li>Benefit from flexible working arrangements.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="banner-image-sec">
                        <img
                            src={womanWorkDesk}
                            alt="hero"
                        />
                    </div>
                </div>
                <div className="content-sec">
                    <div className="search-section mt-5">
                        <input type="text" className="" placeholder="UX" />
                        <button className="btn btn-primary">Search</button>
                    </div>
                    <div className="job-description mt-5">
                        <select className="jobSearchBtns ">
                            <option value="job-role">Job Role</option>
                        </select>
                        <select className="jobSearchBtns ">
                            <option value="location">Location</option>
                        </select>
                        <select className="jobSearchBtns ">
                            <option value="experience">Experience</option>
                        </select>
                    </div>
                    <div className="job-listing-section d-flex justify-content-between ">
                        <h3>Showing 3 Jobs</h3>
                        <div className="d-flex justify-content-between">
                            <select className="showingJobBtns ">
                                <option value="location">Location</option>
                            </select>
                            <select className="showingJobBtns ">
                                <option value="position">Position</option>
                            </select>
                        </div>
                    </div>
                    <div className="job-card d-flex align-items-center">
                        <div className="company-logo ">
                            <img
                                src={Logo}
                                alt="company logo"
                            />
                        </div>
                        <div className="job-title d-flex flex-column">
                            <h4 className="mb-0">Technical Content Writer</h4>
                            <p>Raphacure Pvt Ltd</p>
                        </div>
                        <div className="salary d-flex">
                            <div className="salary-bag">
                                <img
                                    src={salaryBag}
                                    alt="Salary"
                                />
                            </div>
                            <div className="salary-Bag-txt ml-1">
                                <h4 className="m-0" >Not disclosed</h4>
                                <p>Annual Salary</p>
                            </div>
                        </div>
                        <div className="location d-flex">
                            <div className="location-img">
                                <img
                                    src={location}
                                    alt="Location"
                                />
                            </div>
                            <div>
                                <h4 className="mb-0">Bengaluru</h4>
                                <p>Location</p>
                            </div>
                        </div>
                        <div className="apply ">
                            <button
                                onClick={() => navigateToPage("/job-description")}
                            >Apply Now</button>
                        </div>
                    </div>
                    <div className="pagecount-sec d-flex justify-content-between">
                        <p className="count-text"> &#9679; Page 1 of 1 pages</p>
                        <p className="count-number">1</p>
                    </div>
                </div>
            </div>
        </CareerStyled>
    );
}

export default Career;
