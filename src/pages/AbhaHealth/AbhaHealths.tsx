import React, { useState } from "react";
import styled from "styled-components";
import { AbhaHealthStyled } from "./AbhaHealth.styled";
import national from "../../assets/images/national.png";
import OTPAbha from "./OTPAbha";
import ABHACard from "./ABHACard";

const AbhaHealths = () => {
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [sendOnWhatsapp, setSendOnWhatsapp] = useState(false);
  const [givePermission, setGivePermission] = useState(false);
  const [activeTab, setActiveTab] = useState("aadhar");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAbhaCard, setShowAbhaCard] = useState(false);

  const handleTabClick = (tab: any) => {
    setActiveTab(tab);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleOTPSubmit = () => {
    setShowAbhaCard(true);
  };

  return (
    <AbhaHealthStyled>
      <div className="Container">
        <div className="LeftSection">
          <div className="Title">
            <h3>
              ABHA - Ayushman Bharat Health Account or Health ID Card Approved
              by NDHM.GOV.IN
            </h3>
          </div>
          <div className="Subtitle">
            The ABHA card is managed under the Ayushman Bharat Digital Mission
            (ABDM), which is a digital healthcare initiative of the National
            Health Authority (NHA). Under this mission, having this health card,
            the citizens of India are provided with numerous benefits, such as
            hassle-free access to medical treatments and healthcare facilities,
            easy sign-up options for personal health record applications (like
            ABDM ABHA app), and trustable identity.
          </div>
          <div className="ImportantNotes">
            It is crucial to remember that
            <div className="Note">
              The health records associated with Health IDs or ABHA numbers can
              only be accessed with the informed consent of the individual.
            </div>
            <div className="Note">
              People have the option to create an alias, referred to as an "ABHA
              address" (similar to the email ID xyz@ndhm with a password).
            </div>
          </div>
        </div>
        <div className="RightSection">
          <div className="FormContainer">
            {showAbhaCard ? (
              <ABHACard />
            ) : (
              <>
                <div className="FormTitle">
                  <h4>Create Ayushman Bharat Health Account</h4>
                </div>
                <div className="FormSubtitle">ABHA (Health ID) Card</div>
                {isSubmitted ? (
                  <>
                    <OTPAbha onSubmit={handleOTPSubmit} />
                  </>
                ) : (
                  <div className="create-abha">
                    <div className="FormSubtitle1">Using</div>
                    <div className="ButtonGroup">
                      <button
                        className="btn custome-ToggleButton"
                        onClick={() => handleTabClick("aadhar")}
                        style={{
                          background:
                            activeTab === "aadhar" ? "#fff" : "#f6f9fd",
                        }}
                      >
                        Aadhar Number
                      </button>
                      <button
                        className="btn custome-ToggleButton"
                        onClick={() => handleTabClick("phone")}
                        style={{
                          background:
                            activeTab === "aadhar" ? "#f6f9fd" : "#fff",
                        }}
                      >
                        Phone Number
                      </button>
                    </div>
                    {activeTab === "aadhar" && (
                      <div className="ContentBox">
                        <input
                          type="text"
                          className="form-control w-25 custome-input"
                          placeholder="XXX"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                        <input
                          type="text"
                          className="form-control w-25 custome-input"
                          placeholder="XXX"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                        <input
                          type="text"
                          className="form-control w-25 custome-input"
                          placeholder="XXX"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    )}
                    {activeTab === "phone" && (
                      <div className="ContentBox">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="+91"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        ></input>
                      </div>
                    )}
                    <form onSubmit={handleSubmit}>
                      <div className="CheckboxLabel">
                        <input type="checkbox" className="me-2" />
                        Send ABHA Card on Whatsapp
                      </div>
                      <div className="CheckboxLabel">
                        <input type="checkbox" className="me-2" />I agree to
                        give the necessary permission to RaphaCure to set up my
                        ABHA Health Locker
                      </div>
                      <div className="Buttonbox">
                        <button type="submit" className="btn custom-btn">
                          Create ABHA
                        </button>
                      </div>
                    </form>
                  </div>
                )}
                <p className="Bottomtitle">
                  Don't have Aadhaar?{" "}
                  <span className="Bottomsubtitle">Use Phone Number</span>
                </p>
                <p className="Bottomtitle1">
                  Approved by NHA{" "}
                  <img className="Bottomsubtitle1" src={national} alt="" />
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </AbhaHealthStyled>
  );
};
export default AbhaHealths;
