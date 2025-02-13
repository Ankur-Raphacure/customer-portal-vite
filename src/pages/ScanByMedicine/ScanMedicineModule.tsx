import React, { useCallback, useEffect, useRef, useState } from "react";
import { ScanMedicineModuleStyled } from "./ScanMedicineModule.styled";
import Tesseract from "tesseract.js";
import MedicineCardModule from "../Pharmacy/MedicineCardModule";
import { useDispatch, useSelector } from "react-redux";
import { getAllMedicineAPI } from "../../redux/slices/labtest/labtestService";
import Loader from "../../components/Loader/Loader";
import { toast } from "react-toastify";
import { getAttachmentIds } from "../../Scenes/common";
import {
  getCartItemsAPI,
  handleAddToCartAPI,
} from "../../redux/slices/checkout/checkoutService";
import { useLocation } from "react-router-dom";
import useUploadToS3 from "./useUploadToS3";
import { createUplodedImagedDetailsAPI } from "../../redux/slices/generic/genericService";
import Webcam from "react-webcam";

const ScanMedicineModule = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const webcamRef = useRef<any>(null);
  const { uploadToS3 } = useUploadToS3();
  const section = location?.state;
  const [scanedImage, setScanedImage] = useState<any>(null);
  const [scanedImageURL, setScanedImageURL] = useState<any>(null);
  const [uploadedImage, setUploadedImage] = useState<any>(null);
  const [extractedText, setExtractedText] = useState<any | null>(null);
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanErrorMsg, setScanErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [isCameraEnabled, setIsCameraEnabled] = useState(false);
  const [userQuery, setUserQuery] = useState("");
  const [medicinesErrorMsg, setMedicinesErrorMsg] = React.useState<
    string | null
  >(null);
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);
  const { allMedicinesList } = useSelector(
    (ReduxState: any) => ReduxState.labtest,
  );
  const { cartItems } = useSelector((ReduxState: any) => ReduxState.checkout);
  const pProducts =
    cartItems?.carts?.find(
      (itemv: any) => itemv?.section_key === `${section}`,
    ) || [];

  const UploadImage = useCallback(async () => {
    const url = await uploadToS3(scanedImage, user?.id);
    setScanedImageURL(url);
  }, [uploadToS3, user?.id, scanedImage]);

  useEffect(() => {
    if (medicinesErrorMsg && medicinesErrorMsg !== "") {
      UploadImage();
    }
  }, [medicinesErrorMsg]);

  useEffect(() => {
    if (extractedText && extractedText.trim() !== "") {
      Promise.all([
        getAllUsersCall(),
        handleUpdateScanedDetails(),
        UploadImage(),
      ]);
    }
  }, [extractedText, user?.id, section, dispatch]);

  const handleUpdateScanedDetails = () => {
    const body = {
      user_id: user?.id,
      section_name: section,
      type: "Required_Medicine",
      image_url: scanedImageURL,
      image_text: extractedText || userQuery,
    };
    dispatch(createUplodedImagedDetailsAPI(body));
  };
  const handleFileChange = (event: any) => {
    const file = event.target.files?.[0];
    setScanedImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result as string);
        setExtractedText(null);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleClick = () => {
    const fileInput = document.getElementById(
      "fileInput",
    ) as HTMLInputElement | null;
    if (fileInput) {
      fileInput.click();
    }
  };
  const handleScanClick = () => {
    if (uploadedImage) {
      setIsScanning(true);
      Tesseract.recognize(uploadedImage, "eng", {
        logger: (info: any) => console.log(info, "info"),
      })
        .then(({ data: { text } }) => {
          const cleanedText = text
            .replace(/[^a-zA-Z0-9\s]/g, "")
            .replace(/\b\w{1,3}\b/g, "")
            .replace(/\s{2,}/g, " ");

          setExtractedText(cleanedText);
          setIsScanning(false);
        })
        .catch((error: any) => {
          setMedicinesErrorMsg(
            "No medicines found. Please Upload Another Image.",
          );
          setIsScanning(false);

          console.log(error, "error");
        });
    }
  };
  const getAllUsersCall = async () => {
    let body: any = {};
    if (extractedText) {
      body.searchText = extractedText;
    }

    setIsLoading(true);
    try {
      const response: any = await dispatch(getAllMedicineAPI(body));
      if (response?.payload?.data?.length === 0) {
        setMedicinesErrorMsg(
          "No medicines found. Please Upload Another Image.",
        );
      } else {
        setMedicinesErrorMsg(null);
      }
    } catch (error) {
      setMedicinesErrorMsg("An error occurred while fetching the medicines.");
    }
    setIsLoading(false);
  };
  const addToCart = async (itemR: any) => {
    toast(`${itemR?.service_name}`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    handleAddtoCartCall(itemR);
  };
  const handleAddtoCartCall = async (itemR: any) => {
    const medC = [{ service_code: itemR?.service_code, count: 1 }];
    const body1 = {
      carts: [
        {
          user_id: user?.id,
          useWallet: true,
          collection_1_date: null,
          collection_1_slot: null,
          medicines: medC,
          attachment_ids: getAttachmentIds(`${section}`),
          section_key: `${section}`,
        },
      ],
    };
    console.log("body1", body1);
    await dispatch(handleAddToCartAPI(body1));
    await dispatch(getCartItemsAPI());
  };
  const enableCamera = () => {
    setIsCameraEnabled(true);
  };
  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUploadedImage(imageSrc);
  };
  const clearCamera = () => {
    setUploadedImage(null);
    setExtractedText(null);
    setMedicinesErrorMsg(null);
    setIsCameraEnabled(false);
  };

  return (
    <ScanMedicineModuleStyled>
      <div>{isLoading && <Loader />}</div>
      <div className="scanner-container">
        <div className="scanner-box">
          <div className="scanner-image-box" onClick={handleClick}>
            <div className="scanner-icon-box">
              {!uploadedImage && !isCameraEnabled && (
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1734102878839.png"
                  alt="Scan-Logo"
                />
              )}

              {/* Show Uploaded Image if available */}
              {uploadedImage && (
                <img
                  src={uploadedImage}
                  alt="Captured"
                  className="uploaded-scan-img"
                />
              )}

              {/* Show Camera if enabled and no Uploaded Image */}
              {isCameraEnabled && !uploadedImage && (
                <Webcam audio={false} ref={webcamRef} className="video-div" />
              )}
            </div>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              className="d-none"
              onChange={handleFileChange}
            />
          </div>
          <p className="scanErrorMsg">{medicinesErrorMsg}</p>

          <div className="scanned-image-text">
            <div>
              {extractedText && (
                <div className="extracted-text-box">
                  <p className="image-sub-text">{extractedText}</p>
                </div>
              )}
            </div>
          </div>

          <div className="scanner-image-btn">
            {!uploadedImage ? (
              <div className="d-flex justify-content-between align-items-center w-75">
                {!isCameraEnabled && !capturedPhoto && (
                  <>
                    <button className="btn me-3 " onClick={handleClick}>
                      Gallery
                    </button>
                    <button className="btn" onClick={enableCamera}>
                      Take Photo
                    </button>
                  </>
                )}

                {isCameraEnabled && !capturedPhoto && (
                  <>
                    <button className="btn me-3" onClick={clearCamera}>
                      Cancel
                    </button>
                    <button className="btn " onClick={capturePhoto}>
                      Click
                    </button>
                  </>
                )}
              </div>
            ) : (
              <>
                <button className="btn me-3" onClick={clearCamera}>
                  Clear Image
                </button>

                <button
                  className="btn"
                  onClick={handleScanClick}
                  disabled={isScanning}
                >
                  {isScanning ? (
                    <>
                      <span>Scanning...</span>
                    </>
                  ) : (
                    <>
                      <img
                        src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1734103617272.png"
                        alt="btn-icon"
                        className="me-3"
                      />
                      Scan Medicine
                    </>
                  )}
                </button>
              </>
            )}
          </div>
        </div>

        {!extractedText ? (
          <div className="instructions">
            <p className="instructions-text">How to Use the Medicine Scanner</p>
            <div>
              <p className="instructions-sub-text">
                <span>Prepare Your Prescription:</span> Ensure that your
                prescription is flat and well-lit. Remove any obstructions or
                reflections that might interfere with the scan.
              </p>
              <p className="instructions-sub-text">
                <span>Start the Scanning Process:</span> Click the "Scan"
                button, Tap it to initiate the scanning process.
              </p>
              <p className="instructions-sub-text">
                <span>Review and Confirm:</span> After scanning, review the
                captured image for clarity. If it’s not clear, you may need to
                retake the scan.
              </p>
            </div>

            {medicinesErrorMsg && (
              <div className="mt-5 query-input-field">
                <textarea
                  placeholder="Enter Your Query"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  className="form-control shadow-none"
                  onChange={(e: any) => setUserQuery(e.target.value)}
                />
                <div className="scanner-image-btn mt-3">
                  <button className="btn " onClick={handleUpdateScanedDetails}>
                    Send Query
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="suggested-medicines-div">
              <p className="instructions-text">Suggested Medicines</p>

              <div className="medicinesGridContainer">
                {allMedicinesList?.map((item: any) => {
                  const isAddedToCart = pProducts?.medicines?.find(
                    (med: any) => med?.service_code === item.service_code,
                  );
                  return (
                    <MedicineCardModule
                      key={item.service_code}
                      medicineDetail={item}
                      isAddedtoCart={isAddedToCart}
                      addToCart={addToCart}
                    />
                  );
                })}

                <div className="medicinesErrorMsg">
                  <p className="scanErrorMsg">{medicinesErrorMsg}</p>
                </div>
              </div>
            </div>

            {medicinesErrorMsg && (
              <div className="mt-5 query-input-field">
                <textarea
                  placeholder="Enter Your Query"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  className="form-control shadow-none"
                />
                <div className="scanner-image-btn mt-3">
                  <button className="btn ">Send Query</button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </ScanMedicineModuleStyled>
  );
};

export default ScanMedicineModule;
