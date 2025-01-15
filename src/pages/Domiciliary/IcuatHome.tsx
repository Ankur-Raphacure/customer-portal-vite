import React, { useState } from "react";
import { DomiciliaryCareStyled } from "./DomiciliaryCare.styled";
import { ReactComponent as Support } from "../../assets/icons/sup.svg";
import { Accordion, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createCallBackRequestAPI } from "../../redux/slices/bookingScreen/bookingScreenService";

const accordionData = [
  {
    eventKey: "0",
    header: "What does ICU at Home mean?",
    body: "ICU at Home involves delivering intensive care services directly in a patient's home. It encompasses round-the-clock monitoring, the use of advanced medical equipment, and expert care usually provided in a hospital ICU. This option is ideal for patients who require high-level care but benefit from the comfort and familiarity of their own home.",
  },
  {
    eventKey: "1",
    header: "What are the costs associated with setting up an ICU at home?",
    body: "The costs of setting up an ICU at home can vary widely depending on the necessary equipment, length of care, location, and specific services required. Prices can range from moderately high to very expensive, depending on the level of care and complexity of the patient’s condition.",
  },
  {
    eventKey: "2",
    header: "Is it possible for a patient to transition from ICU to home?",
    body: "Yes, with improvements in home healthcare, certain patients can move directly from the ICU to their home, particularly if they are stable but still need intensive monitoring and care. This decision depends on the patient's health status, the availability of home-based ICU services, and the preferences of the patient and their family.",
  },
  {
    eventKey: "3",
    header: "What is the typical length of stay in the ICU?",
    body: "The length of stay in the ICU depends on the patient's medical condition and the reason for their admission. Some patients may only need to stay for a day or two, while those with more severe conditions could remain for several weeks. On average, an ICU stay lasts a few days.",
  },
  {
    eventKey: "4",
    header: "What is the daily cost of ICU care in India?",
    body: "The daily cost of ICU care in India can vary significantly depending on the city, hospital, and level of services provided. On average, prices range from INR 15,000 to INR 50,000 or more per day. For precise pricing, it's best to consult with specific hospitals.",
  },
  {
    eventKey: "5",
    header: "What are the chances of survival after an ICU stay?",
    body: "The likelihood of survival after an ICU stay varies based on factors such as the patient’s age, overall health, the condition that led to their ICU admission, and the quality of care provided. While many patients recover and return to their regular lives, some may face long-term complications. Survival rates have generally improved over time due to advancements in critical care medicine.",
  },
  {
    eventKey: "6",
    header: "Why are ICU costs so high?",
    body: "Advanced Technology: ICUs use cutting-edge medical equipment for continuous monitoring and life support.High Staff-to-Patient Ratio: Intensive care requires a greater number of medical professionals per patient. Specialized Expertise: ICU staff are highly trained to manage critical conditions, and their specialized skills contribute to higher costs. Expensive Medications and Treatments: The drugs and therapies used in ICUs are often costly. Infrastructure: The upkeep of a sterile, controlled environment in the ICU adds to the overall expenses.",
  },
];

const IcuHome = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const handleClose = () => setShow(false);

  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    pinCode: "",
    email: "",
    type: "icu",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const { allDomiciliaryNursesAPI } = useSelector(
    (ReduxState: any) => ReduxState.generic
  );

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
    if (!formData.email || !formData.email) {
      setErrorMsg("E-mail are required");
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
      monitoring_equipments: "",
      type: formData.type,
    };

    try {
      const resultAction: any = await dispatch(
        createCallBackRequestAPI(callBackRequestObjBody)
      );
      if (resultAction.payload.success === "true") {
        setShow(true);
        setShowError(false);
        setFormData({
          fullName: "",
          contactNumber: "",
          pinCode: "",
          email: "",
          type: "icu",
        });
      } else {
        setShowError(true);
        setErrorMsg("Booking failed. Please try again.");
        setShow(false);
      }
    } catch (error) {
      console.error("API error:", error);
      setShowError(true);
      setErrorMsg("An error occurred. Please try again later.");
    }
  };
  return (
    <DomiciliaryCareStyled>
      <div className="icu-home ">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="banner-icu ">
              <div className="col-md-6">
                {/* <form className="form-icu">
                  <h2>I C U At Home</h2>
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Enter Your Name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="pinCode">Pin Code</label>
                      <input
                        type="text"
                        id="pinCode"
                        placeholder="Enter Your Pin Code"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="mobile">Mobile Number</label>
                      <input
                        type="text"
                        id="mobile"
                        placeholder="Enter Your Mobile Number"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email">Email Id</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter Your Mail Id"
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn-submit">
                    Request a call Back
                  </button>
                </form> */}
              </div>
            </div>
          </div>
        </div>
        <div className="essential-feature">
          <div className="equipment-rent  container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <h2>Essential Features of Home Based ICU Care</h2>
                <p>
                  ICU at Home offers specialized high-dependency care services
                  for patients who have moved beyond the acute phase of their
                  condition but still require intensive monitoring and support
                  before they can be safely discharged from the hospital's ICU.
                </p>
              </div>
              <div className="col-lg-6 image-container">
                <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736422115546.png" alt="rentimage" />
              </div>
            </div>
          </div>
        </div>

        <div className="why-icu">
          <div className="container-fluid">
            <div className="row">
              <h2>Why ICU at home?</h2>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="wellbeing-card">
                  <div className="icon">
                    <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736501085709.png" alt="Emotional Well-being" />
                  </div>
                  <div className="content">
                    <h4>Continuity of Care</h4>
                    <p>
                      Patients receive consistent care from a dedicated team of
                      healthcare professionals, ensuring seamless transitions
                      and better outcomes.
                    </p>
                  </div>
                </div>
                <div className="wellbeing-card">
                  <div className="icon">
                    <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736501143749.png" alt="Emotional Well-being" />
                  </div>
                  <div className="content">
                    <h4>Emotional Well-being</h4>
                    <p>
                      Being surrounded by loved ones and personal belongings can
                      significantly enhance the patient's emotional and
                      psychological well-being.
                    </p>
                  </div>
                </div>
                <div className="wellbeing-card">
                  <div className="icon">
                    <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736501220593.png" alt="Emotional Well-being" />
                  </div>
                  <div className="content">
                    <h4>Family Involvement</h4>
                    <p>
                      ICU at home enables loved ones to be actively involved in
                      the patient’s care, providing emotional support and
                      comfort.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="wellbeing-card">
                  <div className="icon">
                    <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736501261086.png" alt="Emotional Well-being" />
                  </div>
                  <div className="content">
                    <h4>Faster Recovery</h4>
                    <p>
                      The comfort of being at home, combined with personalized
                      care, can contribute to a quicker and more comfortable
                      recovery process.
                    </p>
                  </div>
                </div>
                <div className="wellbeing-card">
                  <div className="icon">
                    <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736501331200.png" alt="Emotional Well-being" />
                  </div>
                  <div className="content">
                    <h4>Customized Nutrition</h4>
                    <p>
                      At home, meals can be tailored to the patient’s
                      preferences and nutritional needs, contributing to better
                      overall health.
                    </p>
                  </div>
                </div>
                <div className="wellbeing-card">
                  <div className="icon">
                    <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736501500409.png" alt="Emotional Well-being" />
                  </div>
                  <div className="content">
                    <h4>Cost-Effective</h4>
                    <p>
                      Home-based ICU care can often be more affordable than
                      prolonged hospital stays, without compromising the quality
                      of medical attention.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-icu">
          <div className="equipment-rent  container-fluid">
            <div className="row">
              <div className="col-lg-6 mt-5">
                <h2>
                  Home ICU Care: Professional Critical Care in the Comfort of
                  Your Home
                </h2>
                <p>
                  For ICU booking at home, Raphacure provides specialized care
                  in the comfort of your own home, ensuring that you or your
                  loved ones receive professional and round-the-clock medical
                  attention. Our service is designed to replicate the critical
                  care environment of a hospital ICU, complete with advanced
                  medical equipment and experienced healthcare professionals.
                  Trust Raphacure to deliver the highest standard of care right
                  to your doorstep, making recovery more comfortable and
                  convenient.
                </p>

                <div className="contact-support">
                  <div className="support-icon">
                    <Support />
                  </div>
                  <div className="support-text">
                    <h4>Contact For Support</h4>
                    <div className="support-numbers">
                      <a href="tel:9744976629">9744976629</a>
                      <a href="tel:9744976629">9744976629</a>
                      <a href="tel:9744976629">9744976629</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-icu">
                  <h2>I C U At Home</h2>
                  <div className="row">
                    <div className="col-md-6">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Enter Your Name"
                        onChange={handleChange}
                        value={formData?.fullName}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="pinCode">Pin Code</label>
                      <input
                        type="text"
                        id="pinCode"
                        name="pinCode"
                        placeholder="Enter Your Pincode"
                        onChange={handleChange}
                        value={formData?.pinCode}
                      />
                    </div>
                    <div className="col-md-6">
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
                    <div className="col-md-6">
                      <label htmlFor="email">Email Id</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter Your Mail Id"
                        name="email"
                        onChange={handleChange}
                        value={formData?.email}
                      />
                    </div>
                  </div>
                  <button className="btn-submit" onClick={handleRequestSubmit}>
                    Request a call Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="equipment-rent  container-fluid">
          <div className="doc-main-div">
            <div className="doc-content-div">
              <h5>Frequently Asked Questions</h5>

              <Accordion className="">
                {accordionData?.map((item, index: any) => (
                  <Accordion.Item
                    eventKey={item.eventKey}
                    key={index}
                    style={{ border: "none" }}
                  >
                    <Accordion.Header className={`custom-accordion-header `}>
                      {item.header}
                    </Accordion.Header>
                    <hr className="horizental-div" />
                    <Accordion.Body className={`custom-accordion-header `}>
                      {item.body}
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>

            <div className="doc-img-div">
              <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736501380626.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <DomiciliaryCareStyled>
          <Modal.Body>
            <div className="d-flex justify-content-center align-items-center mt-3">
              <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736501442326.png" alt="bck_img" />
            </div>
            <div>
              <h5 className="cnf-text">Thank You</h5>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-3">
              <Button onClick={handleClose} className="btn-submit w-25">
                OKAY
              </Button>
            </div>
          </Modal.Body>
        </DomiciliaryCareStyled>
      </Modal>
    </DomiciliaryCareStyled>
  );
};

export default IcuHome;
