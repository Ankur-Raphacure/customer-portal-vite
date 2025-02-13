import React from "react";
import { useState } from "react";
import { BlobServiceClient } from "@azure/storage-blob";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import eyecare from "../../assets/eye-care.png";
import UploadPrescription from "../../components/UploadPrescription/UploadPrescription";
import { PhamacyHeaderStyled } from "./PharmacyHeader.styled";
const PhamacyHeader = (props: any) => {
  const { section, handleBuyMedicine, title, image } = props;

  const [file, setFile] = useState(null);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e: any) => {
    // e.preventDefault();
    // //process.env.REACT_APP_AZURE_STORAGE_CONNECTION_STRING
    // const blobServiceClient = new BlobServiceClient();
    // const blockBlobClient = blobServiceClient.getBlockBlobClient(file.name);
    // try {
    //   await blockBlobClient.uploadFile(file);
    //   console.log("File uploaded successfully");
    // } catch (err) {
    //   console.error(err);
    // }
  };
  // const mainImage = section === "ctmri" ? ctmri : headerbg;
  const mainImage =
    section === "ctmri"
      ? "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736421219032.png"
      : section === "eyecare"
        ? eyecare
        : section === "dentalcare"
          ? "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736425108362.png"
          : section === "labtest"
            ? "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736493218765.png"
            : "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736504684408.png";
  return (
    <PhamacyHeaderStyled>
      <div>
        <div
          className="pharmacy-header-sec"
          style={
            section === "MentalWellness"
              ? {
                  backgroundImage: `url("https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736425334432.png")`,
                  backgroundPosition: "right",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }
              : section === "ctmri"
                ? {
                    backgroundImage: `url("https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736408163762.png")`,
                    backgroundPosition: "right",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }
                : {}
          }
        >
          <div className="pharmacy-header-sec-left">
            <div className="header_desc md:pl-[22px]">
              <h1>
                <span className="poppins-bold inline-block lg:max-w-[420px] text-[38px]">
                  {title ? (
                    <>{title}</>
                  ) : section === "labtest" ? (
                    <>
                      {" "}
                      Simplifying Diagnostics
                      <br /> Home Collection for Lab Tests
                    </>
                  ) : section === "dentalcare" ? (
                    <>
                      {" "}
                      Take care of your <br />
                      Smile
                    </>
                  ) : section === "ctmri" ? (
                    <> Book Your Scan Now</>
                  ) : section === "MentalWellness" ? (
                    <> Your Path to Mental Wellness Starts Here </>
                  ) : (
                    <>
                      {" "}
                      Pharmacy At Your
                      <br /> Door Step
                    </>
                  )}
                </span>
              </h1>
              <h2>
                <span className="poppins-regular pt-[9px] inline-block text-lg lg:max-w-[555px] opacity-75">
                  {section === "labtest" ? (
                    <>
                      At-home lab test sample collection lets patients collect
                      samples at home, saving time and reducing clinic visits.
                      Easy-to-use kits are sent to a lab for analysis, improving
                      comfort and efficiency in healthcare.
                    </>
                  ) : section === "eyecare" ? (
                    <>Consultation most experienced doctors all over india.</>
                  ) : section === "dentalcare" ? (
                    <>
                      Consultation most experienced doctors all over india.{" "}
                      <br />
                      Book a Consultation today!
                    </>
                  ) : section === "ctmri" ? (
                    <>
                      Book Your Medical Scan Today to Detect Issues Early and
                      Stay Ahead of Potential Health Problems.
                    </>
                  ) : section === "MentalWellness" ? (
                    <>
                      Take the first step towards better mental health with our
                      expert psychologist consultations today.
                    </>
                  ) : (
                    <>
                      Our dedicated team ensures prompt delivery of all your
                      <br />
                      pharmaceutical needs, right to your doorstep
                    </>
                  )}
                </span>
              </h2>
            </div>
            {/* <div className="mt-5 cursor-pointer flex poppins-light">
              <label htmlFor="upload" className="">
                <UploadPrescription categoryName={section} />
              </label>
              <label htmlFor="buymedicines" className="px-3">
                <button
                  onClick={handleBuyMedicine}
                  className="buy-Medicine-btn"
                >
                  {section === "radiology"
                    ? "Book Scanning"
                    : section === "labtest"
                    ? "Book Test"
                    : "Buy Medicine"}{" "}
                </button>
              </label>
            </div> */}
            {section !== "eyecare" && section !== "MentalWellness" && (
              <div className="mt-5 cursor-pointer flex poppins-light">
                <label htmlFor="upload" className="">
                  <UploadPrescription categoryName={section} />
                </label>
                <label htmlFor="buymedicines" className="px-3">
                  <button
                    onClick={handleBuyMedicine}
                    className="buy-Medicine-btn"
                  >
                    {section === "ctmri"
                      ? "Book Scanning"
                      : section === "labtest"
                        ? "Book Test"
                        : "Buy Medicine"}
                  </button>
                </label>
              </div>
            )}
            {section === "MentalWellness" && (
              <div className="main-btn-div justify-content-start">
                <Link to={"/comingsoon"} className="btn custom-edit-btn mt-4">
                  TAKE THE STRESS TEST TODAY!
                </Link>
              </div>
            )}
          </div>
          <div className="pharmacy-header-sec-right">
            {section === "MentalWellness" ? (
              <></>
            ) : (
              <img
                src={image ? image : mainImage}
                alt="Pharmacy"
                className="w-100 h-100"
              />
            )}
          </div>
        </div>
      </div>
    </PhamacyHeaderStyled>
  );
};

export default PhamacyHeader;
