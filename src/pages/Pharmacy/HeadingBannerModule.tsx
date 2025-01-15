import React from "react";

import { FaArrowRight } from "react-icons/fa";
import UploadPrescription from "../../components/UploadPrescription/UploadPrescription";
import { useHistory } from "react-router-dom";
import { HeadingBannerModuleStyled } from "./HeadingBannerModule.styled";
import { useDispatch, useSelector } from "react-redux";
import { updateShowLoginModel } from "../../redux/slices/auth/authSlice";

const HeadingBannerModule = (props: any) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { details, section } = props;
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);

  const handleTOUploadPrescription = () => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      history.push("/uploadprescription", section);
    }
  };
  const handleTODoctorList = () => {
    history.push("/doctor/doctorlist", section);
  };
  return (
    <HeadingBannerModuleStyled>
      <div className="main-heading-banner">
        {details?.map((detail: any, index: any) => (
          <div key={index}>
            <div className="heading-banner-text">
              <h5>{detail?.title}</h5>
            </div>
            <div className="heading-banner-text-img">
              <div className="heading-banner-content">
                <div className="d-flex align-items-center ">
                  <div
                    className="icon-bck-color"
                    style={{ background: "#e7c2d4" }}
                  >
                    <img src={detail?.point1Img} alt="" className="icon" />
                  </div>
                  <h5>{detail?.point1}</h5>
                </div>
                <div className="d-flex align-items-center my-4">
                  <div
                    className="icon-bck-color"
                    style={{ background: "#A3DAC2" }}
                  >
                    <img src={detail?.point2Img} alt="" className="icon" />
                  </div>
                  <h5>{detail?.point2}</h5>
                </div>
                <p>{detail?.bannerContent}</p>
              </div>
              <div className="heading-banner-img">
                <img src={detail?.img} alt="" />
              </div>
              <div className="heading-banner-content">
                <div className="d-flex align-items-center ">
                  <div
                    className="icon-bck-color"
                    style={{ background: "#F0DA69" }}
                  >
                    <img src={detail?.point3Img} alt="" className="icon" />
                  </div>
                  <h5>{detail?.point3}</h5>
                </div>
                <div className="d-flex align-items-center mt-4">
                  <div
                    className="icon-bck-color"
                    style={{ background: "#92BDF6" }}
                  >
                    <img src={detail?.point4Img} alt="" className="icon" />
                  </div>
                  <h5>{detail?.point4}</h5>
                </div>
                {(section === "labtest" ||
                  section === "pharmacy" ||
                  section === "doctor" ||
                  section === "ctmri") && (
                  <div className="uploadBtnContainer">
                    <div
                      className="uploadBtnWrapper d-flex gap-2 align-items-center"
                      onClick={
                        section === "doctor"
                          ? handleTODoctorList
                          : handleTOUploadPrescription
                      }
                    >
                      {section === "doctor" ? (
                        <h3>Schedule Consult</h3>
                      ) : (
                        <h3>Upload Prescription</h3>
                      )}

                      <FaArrowRight />
                    </div>
                  </div>
                )}

                {/* {section !== "eyecare" &&
                  section !== "MentalWellness" &&
                  section !== "labtest" && (
                    <label htmlFor="upload" className="">
                      <UploadPrescription
                        categoryName={section}
                        uploadBtnName={detail?.btnName}
                      />
                    </label>
                  )} */}
                {/* <div className="upload-priscription-btn-div">
                  <button
                    className="btn"
                    onClick={() => history.push("/uploadprescription")}
                  >
                    {detail?.btnName} <FaArrowRight className="ms-2" />
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </HeadingBannerModuleStyled>
  );
};

export default HeadingBannerModule;
