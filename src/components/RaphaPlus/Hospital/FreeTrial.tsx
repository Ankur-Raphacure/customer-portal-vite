import React, { useState } from "react";
import { FreeTrialStyled, Overlay, Popup } from "./FreeTrial.styled";
import { ReactComponent as UploadIcon } from "../../../assets/raphaplus/uploadIcon.svg";
import ImageUploadModel from "../../ImageUploadModel/ImageUploadModel";
import { IoMdCloseCircle } from "react-icons/io";
const FreeTrial = ({ handlePopupClose }: any) => {
  const [showImageMoodel, setShowImageMoodel] = useState(false);
  const handleCloseImage = () => {
    setShowImageMoodel(false);
  };
  const handleImageUploadSuccess = (img: any) => {
    console.log("img : ", img);
  };
  return (
    <Overlay>
      <ImageUploadModel
        show={showImageMoodel}
        handleClose={handleCloseImage}
        handleImageUploadSuccess={handleImageUploadSuccess}
      />
      <Popup onClick={(e) => e.stopPropagation()}>
        <IoMdCloseCircle onClick={handlePopupClose} color="red" size={30} />
        <FreeTrialStyled>
          <div className="upperHalf">
            <div className="upperInfo">
              <div>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Full Name"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Phone Number"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="emailId"
                  id="emailId"
                  placeholder="Email Id"
                />
              </div>
            </div>
            <div
              className="imgDropzone"
              onClick={() => setShowImageMoodel(true)}
            >
              <UploadIcon />
              <h2>Click Here to Upload Files</h2>
              <h3>Supported Formates are : JPEG, PNG, GIF, PDF</h3>
              <h3>File size max 10kb</h3>
            </div>
          </div>
          <div className="lowerHalf">
            <div>
              <div className="citySelect">
                <select id="city" name="city" defaultValue="blr">
                  <option value="kol">Kolkata</option>
                  <option value="blr">Bengaluru</option>
                  <option value="mb">Mumbai</option>
                </select>
              </div>
              <div className="stateSelect">
                <select id="state" name="state" defaultValue="ka">
                  <option value="">Select an option</option>
                  <option value="wb">West Bengal</option>
                  <option value="ka">Karnataka</option>
                  <option value="up">Uttar Pradesh</option>
                </select>
              </div>
            </div>
            <div>
              <div className="pinCode">
                <input
                  type="text"
                  name="pinCode"
                  id="pinCode"
                  placeholder="Pin code"
                />
              </div>
              <div className="servicesSelect">
                <select id="services" name="services" defaultValue="">
                  <option value="">Choose Your Services</option>
                  <option value="onsite">Onsite Consult</option>
                  <option value="rem">Remote Consult</option>
                  <option value="home">In Home Consult</option>
                </select>
              </div>
            </div>
            <textarea
              name="description"
              id="description"
              placeholder="Describe yourself"
            ></textarea>
          </div>
          <button className="button" onClick={() => {}}>
            Activate Now
          </button>
        </FreeTrialStyled>
      </Popup>
    </Overlay>
  );
};

export default FreeTrial;
