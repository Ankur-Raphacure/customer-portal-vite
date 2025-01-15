import React, { useEffect, useState } from "react";
import { DomiciliaryCareStyled } from "./DomiciliaryCare.styled";
import { ReactComponent as Check } from "../../assets/icons/check.svg";
import DentalCatogory from "./DomiciliaryCategory";
import NurseCard from "./NurseCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllDomiciliaryNursesAPI } from "../../redux/slices/generic/genericService";
import { useHistory } from "react-router-dom";
import { updateShowLoginModel } from "../../redux/slices/auth/authSlice";
import { updateDoctordetails } from "../../redux/slices/bookingScreen/bookingScreenSlice";
import { Modal } from "react-bootstrap";
import { EyecareStyled } from "../Eyecare/Eyecare.styled";
import { createCallBackRequestAPI } from "../../redux/slices/bookingScreen/bookingScreenService";

const DomiciliaryCare = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [selectedCategory, setsSlectedCategory] = useState({} as any);
  const [showConform, setShowConform] = useState(false);
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    equipments: "",
    fullName: "",
    contactNumber: "",
    pinCode: "",
    email: "",
    type: "domiciliary",
  });

  const { allDomiciliaryNursesAPI } = useSelector(
    (ReduxState: any) => ReduxState.generic
  );

  const { userCity } = useSelector((ReduxState: any) => ReduxState.auth);
  const item = allDomiciliaryNursesAPI?.nurses;

  const getLatestData = (city = "bengaluru") => {
    dispatch(getAllDomiciliaryNursesAPI({ city: city?.toLowerCase() }));
  };

  const { user } = useSelector((ReduxState: any) => ReduxState.auth);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleBookNow = (obj: any) => {
    console.log("obj : ", obj);

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

  const validateForm = () => {
    if (!formData.fullName) {
      setErrorMsg("Full Name is required");
      return false;
    }

    if (!formData.contactNumber) {
      setErrorMsg("Contact Number is required");
      return false;
    }

    const contactNumberPattern = /^\d+$/;
    if (!contactNumberPattern.test(formData.contactNumber)) {
      setErrorMsg("Contact Number must contain only numbers");
      return false;
    }

    if (formData.contactNumber.length !== 10) {
      setErrorMsg("Contact Number must be 10 digits long");
      return false;
    }

    if (!formData.pinCode || !formData.pinCode) {
      setErrorMsg("Pin Code are required");
      return false;
    }
    if (!formData.equipments || !formData.equipments) {
      setErrorMsg("Equipments are required");
      return false;
    }
    return true;
  };

  const handleRequestSubmit = async (e: any) => {
    e.preventDefault();
    if (!validateForm()) {
      setShowError(true);
      return;
    }

    const callBackRequestObjBody = {
      name: formData.fullName,
      contact_number: formData.contactNumber,
      pincode: formData.pinCode,
      email: formData.email,
      age: "",
      gender: "",
      remark: "",
      monitoring_equipments: formData.equipments,
      type: formData.type,
    };

    try {
      const resultAction: any = await dispatch(
        createCallBackRequestAPI(callBackRequestObjBody)
      );
      if (resultAction.payload.success === "true") {
        setShowConform(true);
        setShowError(false);
        setFormData({
          equipments: "",
          fullName: "",
          contactNumber: "",
          pinCode: "",
          email: "",
          type: "domiciliary",
        });
      } else {
        setShowError(true);
        setErrorMsg("Booking failed. Please try again.");

        setShow(false);
        setShowConform(true);
      }
    } catch (error) {
      console.error("API error:", error);
      setShowError(true);
      setErrorMsg("An error occurred. Please try again later.");
    }
  };
  const handleCloseConform = () => {
    setShow(false);
    setShowConform(false);
  };
  const handleHome = () => {
    setShow(false);
    setShowConform(false);
  };

  useEffect(() => {
    getLatestData(userCity?.name);
  }, [userCity?.name]);

  return (
    <DomiciliaryCareStyled>
      <div className="domiciliarycare">
        <div className="header">
          <div className="row">
            <div className="col-lg-8">
              <div className="header-content">
                <h1>
                  Home Care with Heart<span> Personalized Support</span> for
                  Your Loved Ones
                </h1>

                <ul className="domiciliary-list">
                  <li>
                    <Check /> &nbsp; Trust and Reliability
                  </li>
                  <li>
                    <Check /> &nbsp; Provide cost-effective care solutions
                  </li>
                  <li>
                    <Check /> &nbsp; We promise to offer not just care, but also
                    companionship
                  </li>
                  <li>
                    <Check /> &nbsp; We promise to prioritize your safety and
                    well-being
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="dom-img">
                <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736501781539.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="category container-fluid">
          <DentalCatogory />
        </div>
        <div className="equipment-rent container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <h2>Quality Medical Equipment for Rent</h2>
              <p>
                We rent out a wide range of medical equipment, including
                hospital beds, wheelchairs, oxygen concentrators, CPAP machines,
                and more. Our service ensures that the equipment is delivered,
                set up, and maintained with the highest standards of care,
                allowing patients to receive quality treatment in the comfort of
                their homes. With flexible rental plans and 24/7 customer
                support, Raphacure makes healthcare more accessible for
                everyone.
              </p>
              <button className="viewmore">View More</button>
            </div>
            <div className="col-lg-6">
              <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736420620556.png" alt="rentimage" />
            </div>
          </div>
        </div>
        <div className="ExperiencedNurses container-fluid">
          <div className="row">
            <h2>Meet Our Experienced Nurses</h2>
            <div className="row nurse-list-div">
              {item?.slice(0, 8)?.map((treatment: any, index: any) => {
                return (
                  <NurseCard
                    habdleBookNow={handleBookNow}
                    mostOrdersSection={true}
                    item={treatment}
                  />
                );
              })}
            </div>

            <div>
              <p className="underline view-all float-right px-4 mt-4 ">
                <button
                  onClick={() => history.push("/domiciliarycare/nurseforhome")}
                >
                  View More Nurses
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="equipment-rent container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <h2>
                Comprehensive Patient Monitoring: Ensuring Real-Time Care and
                Insights
              </h2>
              <p>
                In the realm of modern healthcare, real-time patient monitoring
                is crucial for delivering high-quality, responsive care. Our
                Comprehensive Patient Monitoring service provides continuous
                tracking of vital signs and health metrics, including heart
                rate, blood pressure, oxygen levels, and more. By integrating
                advanced technology with dedicated medical expertise, we offer a
                robust solution that ensures timely and accurate health
                assessments.
              </p>
              <button className="viewmore">View More</button>
            </div>
            <div className="col-lg-6">
              <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736421033036.png" alt="rentimage" />
            </div>
          </div>
        </div>
        <div className="domciliary-form container-fluid">
          <div className="row  mb-2">
            <h2>Need Help To Book ?</h2>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736502232063.png" />
            </div>
            <div className="col-lg-6">
              <div className="form-book">
                <form className="booking-form" onSubmit={handleRequestSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="fullName"
                      placeholder="Enter Your Name"
                      onChange={handleChange}
                      value={formData?.fullName}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="equipment">
                      Patient Monitoring Equipments
                    </label>
                    <select
                      id="equipment"
                      name="equipments"
                      onChange={handleChange}
                      value={formData?.equipments}
                    >
                      <option value="monitor">
                        Patient Monitoring Equipments
                      </option>
                      <option value="icu">ICU</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="mobile">Mobile Number</label>
                    <input
                      type="text"
                      id="contactNumber"
                      name="contactNumber"
                      placeholder="Enter Your Mobile Number"
                      onChange={handleChange}
                      value={formData?.contactNumber}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pincode">Pin Code</label>
                    <input
                      type="text"
                      id="pinCode"
                      name="pinCode"
                      placeholder="Enter Your Pincode"
                      onChange={handleChange}
                      value={formData?.pinCode}
                    />
                  </div>
                  <div className="form-buttons">
                    <button type="button" className="clear">
                      Clear
                    </button>
                    <button type="submit" className="request-callback">
                      Request for Call Back
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showConform} onHide={handleCloseConform} size="lg" centered>
        <EyecareStyled>
          <Modal.Header className="conform-popup-header-div">
            <h4>Thank you</h4>
          </Modal.Header>
          <Modal.Body>
            <div className="conform-popup-body-div">
              <h4>
                Thank you for registering with us. We shall get in touch
                <br /> with you at the earliest.
              </h4>
            </div>
            <div className="conform-popup-body-div">
              <button className="btn" onClick={handleHome}>
                Home
              </button>
            </div>
          </Modal.Body>
        </EyecareStyled>
      </Modal>
    </DomiciliaryCareStyled>
  );
};

export default DomiciliaryCare;
