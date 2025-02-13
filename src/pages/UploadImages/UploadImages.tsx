import React from "react";
import { UploadImagesStyled } from "./UploadImages.styled";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ReactComponent as Rreeentick } from "../../assets/icons/greeen_tick.svg";
import { ReactComponent as Uploadmenuicon } from "../../assets/icons/upload_menu_icon.svg";
import { updateNitifySuccessMessage } from "../../redux/slices/checkout/checkoutSlice";
import { getS3PresignedUrl } from "../../redux/slices/Profile/ProfileService";
import { FaLink } from "react-icons/fa6";
import axios from "axios";

const UploadImages = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [s3SignedUrls, setS3SignedUrls] = useState<any>("");
  const [modelTitle, setModelTitle] = useState("Upload Prescription");
  const [uploadcontainershow, setUploadcontainershow] = useState(true);
  const [progressContainershow, setProgressContainershow] = useState(false);
  const [uploadedImageShow, setuploadedImageShow] = useState(false);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
  const [checkmarkShow, setCheckmarkShow] = useState(false);
  const [currentProgress, setCurrentProgress] = useState("0");
  const [concernstext, setConcernstext] = useState("");
  const [uploadprescriptionshow, setUploadprescriptionshow] = useState(true);
  const [savedPrescriptionshow, setSavedPrescriptionshow] = useState(false);
  const [deleteButtonDisabled, setDeleteButtonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { cartItems } = useSelector((ReduxState: any) => ReduxState.checkout);
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);
  const [copySuccess, setCopySuccess] = useState(false);

  // Function to copy the URL
  const copyToClipboard = () => {
    if (s3SignedUrls?.publicUrl) {
      navigator.clipboard.writeText(s3SignedUrls.publicUrl).then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 3000);
      });
    }
  };

  const fileInput = useRef<HTMLDivElement>(null) as any;
  const raphaPrescriptions: string | null =
    localStorage.getItem("raphaPrescriptions");
  const [uploadedImageData, setuploadedImageData] = useState("");
  const onHide = () => {
    setTimeout(() => {
      showUploadPrescription();
    }, 100);
  };
  useEffect(() => {
    if (currentProgress === "0") {
      setUploadprescriptionshow(true);
    }
  }, [currentProgress]);

  const handleFileChange = (e: any) => {
    const files = fileInput.current || null;
    const imgFile = e.target.files;

    let ValidFiles = [] as any;
    for (let idx = 0; idx < imgFile.length; idx++) {
      const uploadFile = imgFile[idx];
      if (uploadFile && uploadFile?.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadstart = () => {
          setUploadcontainershow(false);
          setProgressContainershow(true);
        };
        reader.onprogress = (event) => {
          if (event.lengthComputable) {
            const progress = (event.loaded / event.total) * 100;
            setCurrentProgress(`${progress}`);
          }
        };
        reader.onload = () => {
          setCurrentProgress("0");

          const uploadTime = 1000;
          const interval = 50;
          const steps = uploadTime / interval;
          let currentStep = 0;
          const updateProgress = () => {
            const progress = (currentStep / steps) * 100;
            setCurrentProgress(`${progress}`);
            currentStep++;
            if (currentStep <= steps) {
              setTimeout(updateProgress, interval);
            } else {
              setCurrentProgress("100");
              setSubmitButtonDisabled(false);
              setCheckmarkShow(true);
            }
          };
          setTimeout(updateProgress, interval);

          ValidFiles.push(uploadFile);
          if (fileInput.current) {
            fileInput.current.push(fileInput.current?.files, ValidFiles);
          } else {
            fileInput.current = [...ValidFiles];
          }
        };
        reader.readAsDataURL(uploadFile);
      } else {
        //show error to upload valid prescription
        fileInput.current = null;
      }
    }
  };
  const uploadImageToS3 = async (croppedImage: any) => {
    try {
      const presignBody = {
        id: `${user.id}`,
        ext: ".png",
      };
      const presignedRes = await dispatch(getS3PresignedUrl(presignBody));
      const presignedUrlResp = JSON.parse(JSON.stringify(presignedRes));
      const presignedUrl = presignedUrlResp?.payload?.signedUrL?.signedUrL;
      const publicUrl = presignedUrlResp?.payload?.signedUrL?.publicUrl;

      await axios.put(presignedUrl, croppedImage, {
        headers: {
          "Content-Type": "image/png", // Ensure the correct content type is set
        },
      });
      dispatch(updateNitifySuccessMessage("Image Uploaded Successfully"));
      setS3SignedUrls(presignedUrlResp?.payload?.signedUrL);
      setuploadedImageShow(true);
      setUploadcontainershow(false);
      setProgressContainershow(false);
      return publicUrl;
    } catch (error) {
      console.error("Error uploading image to S3:", error);
      throw error;
    }
  };
  const submitUploadForm = async () => {
    const files = fileInput.current;

    if (!files || files.length === 0) {
      alert("At least one file is required.");
      return;
    }

    for (let idx = 0; idx < files.length; idx++) {
      const file = files[idx];
      if (file && file.name) {
        uploadImageToS3(files[idx]);
        setIsLoading(true);
        const filename = file.name;

        if (filename) {
        } else {
          setIsLoading(false);
        }
      }
    }
    return true;
  };

  const toBase64 = (datafile: Blob | any) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(datafile);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const showUploadPrescription = () => {
    setUploadprescriptionshow(true);
    setUploadcontainershow(true);
    setProgressContainershow(false);
    setSubmitButtonDisabled(true);
    setCurrentProgress("0");
    setCheckmarkShow(false);
    setSavedPrescriptionshow(false);
  };
  const clearUploadedImage = () => {
    fileInput.current = null;
    setCurrentProgress("0");
    showUploadPrescription();
    setS3SignedUrls("");
  };
  return (
    <UploadImagesStyled>
      <div className="main-heading">Upload Your Image</div>
      <div className="upload-pec-main-content">
        <div id="uploadprescriptions">
          <div className="main-content flex items-center justify-center w-full">
            {uploadcontainershow && (
              <label htmlFor="dropzone-file" className="upload-container">
                <div className=" flex flex-col items-center justify-center">
                  <Uploadmenuicon />
                  <p className="drag-drop">
                    <span>Drag and Drop file here or </span>
                    <u>Choose file</u>
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  accept="image/*"
                  onChange={handleFileChange}
                  type="file"
                  className="hidden"
                />
              </label>
            )}
            {progressContainershow && (
              <div className="progress-container">
                <div className="progress-barwrap flex_center flexdirection_col">
                  {checkmarkShow && (
                    <div className="flex flex-col items-center mb-10">
                      {" "}
                      <Rreeentick />
                    </div>
                  )}
                  <div id="progressBar" className="progress-bar">
                    <div
                      className="progress-div"
                      style={{ width: `${currentProgress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            {uploadedImageShow && s3SignedUrls?.publicUrl && (
              <div className="uploaded-image-container">
                <img
                  className="uploaded-image"
                  src={s3SignedUrls.publicUrl}
                  alt="Uploaded"
                />
              </div>
            )}
          </div>
          <div className="support-text-box-sec">
            <span className="flex-col">
              Supported format: <span> PNG, SVG, JPG </span>
            </span>
            <span className="flex-col">
              Maximum size: <span>20 MB</span>
            </span>
          </div>
          <div className="flex actions-btn-sec-content">
            <div className="flex-column">
              <div className="uploadprescriptions-leftbtns flex_center">
                <button
                  type="button"
                  onClick={clearUploadedImage}
                  className="saved-prescription-btn poppins-medium"
                >
                  Clear Image
                </button>
              </div>
            </div>
            <div className="uploadprescriptions-rightbtns flex_center">
              {/* <button
                            className="cancel-prescription-btn"
                            type="button"
                            onClick={onHide}
                          >
                            Cancel
                          </button> */}
              <button
                id="uploadsubmitbtn"
                className="submit-prescription-btn poppins-medium button-shadow"
                type="submit"
                onClick={submitUploadForm}
                disabled={submitButtonDisabled}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="upload-prescription-url">
        {uploadedImageShow && s3SignedUrls?.publicUrl ? (
          <div className="copy-url-section">
            <button
              className="copy-url-btn poppins-medium"
              onClick={copyToClipboard}
            >
              {" "}
              <FaLink style={{ width: "20px", height: "20px" }} />
              Copy URL
            </button>
            {copySuccess && (
              <span className="copy-success-message">URL Copied!</span>
            )}
          </div>
        ) : null}
      </div>
    </UploadImagesStyled>
  );
};

export default UploadImages;
