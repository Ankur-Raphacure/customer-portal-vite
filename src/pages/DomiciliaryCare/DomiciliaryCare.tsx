import React, { useEffect, useState } from "react";

// import DentalCareClinc from "./DentalCareClinc";
import { DomiciliaryCareStyled } from "./DomiciliaryCare.styled";
import Clinics from "../EyeCareModule/Clinics";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDomiciliaryCareAPI } from "../../redux/slices/generic/genericService";
import { updateShowLoginModel } from "../../redux/slices/auth/authSlice";
import { updateDoctordetails } from "../../redux/slices/bookingScreen/bookingScreenSlice";

const DomiciliaryCare = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const [selectedCategory, setsSlectedCategory] = useState({} as any);
  const { allDomiciliaryCareList } = useSelector(
    (ReduxState: any) => ReduxState.generic
  );
  console.log("allDomiciliaryCareList : ", allDomiciliaryCareList);

  const { user } = useSelector((ReduxState: any) => ReduxState.auth);

  const navigateToPage = (url: string) => {
    history.push(url);
  };

  const handleBookNow = (obj: any) => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      dispatch(
        updateDoctordetails({
          doctorDetails: obj,
          hospitalDetails: {},
          categoryType: "domiciliarycare",
          slot1: {},
          slot2: {},
        })
      );
      history.push("/domiciliarycare/bookingReview");
    }
  };

  useEffect(() => {
    dispatch(getDomiciliaryCareAPI(100));
  }, []);
  return (
    <DomiciliaryCareStyled>
      {/* <PhamacyHeader section="DomiciliaryCare" /> */}
      {/* <div className="domci-header-sec">
        <div className="domci-header-sec-left">
          <div>
            <img src={logo_design} alt="RaphaCure" />
          </div>
        </div>
        <div className="domci-header-sec-center">
          <div>
            <div className="query-sec">
              <input
                type="text"
                placeholder="Search for Medicine, Doctor, Hospital"
              />
              <div>
                <span className="searchIcon">
                  <img src={SearchIcon} alt="Search" />
                </span>
                <span className="speackerIcon">
                  <img src={speackerIcon} alt="voice record" />
                </span>
              </div>
            </div>
            <div className="location-btn-sec">
              <button type="button">Bengaluru</button>
            </div>
          </div>
        </div>
        <div className="domci-header-sec-right">
          <button> Login </button>
        </div>
      </div> */}
      <div className="content-sec">
        <div className="patient-moni-sec">
          <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736502840216.png" alt="Remote Patient" />
        </div>
        <div className="two-img-sec">
          <div className="two-img-sec-one">
            <div onClick={() => handleBookNow(allDomiciliaryCareList.tests[1])}>
              <img src={"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736338090733.png"} alt="Remote Patient" />
              <button>Book Now</button>
            </div>
          </div>
          <div className="two-img-sec-two">
            <div onClick={() => handleBookNow(allDomiciliaryCareList.tests[2])}>
              <img src={"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736338018385.png"} alt="Remote Patient" />
              <button>Book Now</button>
            </div>
          </div>
        </div>
        <div className="third-img-sec">
          <div onClick={() => handleBookNow(allDomiciliaryCareList.tests[0])}>
            <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736502776421.png" alt="Remote Patient" />
            <button>Book Now </button>
          </div>
        </div>

        <div className="fourth-img-sec">
          <div className="first-img">
            <div>
              <img src={"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736337802616.png"} alt="Remote Patient" />
              <button onClick={() => history.push("/comingsoon")}>
                View More
              </button>
            </div>
          </div>
          <div className="second-img">
            <div>
              <img src={"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736337548573.png"} alt="Remote Patient" />
              <button onClick={() => history.push("/comingsoon")}>
                View More
              </button>
            </div>
          </div>
          <div className="third-img">
            <div>
              <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736425482080.png" alt="Remote Patient" />
              <button onClick={() => history.push("/comingsoon")}>
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="Rapha-protect-sec">
        <div className="protect-txt-sec">
          <div className="subp-txt">
            <p>RaphaProtect</p>
            <h5>One subscription is applicable to one member only</h5>
          </div>
          <div className="book-sec">
            <p>*9,999/- Person for one year</p>
            <button>Book Now</button>
          </div>
        </div>
        <div className="protect-btns-sec">
          <a href="#consultation">Consultation</a>
          <a href="#diagnosisAndTherapy">Diagnosis and Therapy</a>
          <a href="#OtherServices">Other services</a>
          <a href="#AddOns">Add Ons</a>
        </div>
        <div className="img-div" id="consultation">
          <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736502719623.png" alt="consultation" />
        </div>
        <div className="img-div" id="diagnosisAndTherapy">
          <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736502683305.png" alt="Diagnosis and Therapy" />
        </div>
        <div className="img-div" id="OtherServices">
          <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736502655816.png" alt="Other services" />
        </div>
        <div className="img-div" id="AddOns">
          <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736502600828.png" alt="Add Ons" />
        </div>
      </div>
    </DomiciliaryCareStyled>
  );
};
export default DomiciliaryCare;
