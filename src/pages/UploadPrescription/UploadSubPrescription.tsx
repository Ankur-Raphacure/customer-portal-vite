import React, { useEffect, useRef, useState } from "react";
import { UploadSubPrescriptionStyled } from "./UploadSubPrescription.styled";
import { FaArrowRight, FaFileInvoice } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GoPencil } from "react-icons/go";
import { useHistory, useLocation } from "react-router-dom";
import {
  getMyAddressQueryAPI,
  getPrescriptionSignedUrl,
} from "../../redux/slices/Profile/ProfileService";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { updateNitifySuccessMessage } from "../../redux/slices/checkout/checkoutSlice";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ReactComponent as Rreeentick } from "../../assets/icons/greeen_tick.svg";
import { Modal, Offcanvas } from "react-bootstrap";
import AddNewAddress from "../../components/AddNewAddress/AddNewAddress";
import CustomModal from "../../components/CustomModel";

const UploadSubPrescription = (props: any) => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const categoryName = location?.state as any;
  const [modelTitle, setModelTitle] = useState("Upload Prescription");
  const fileInput = useRef<HTMLDivElement>(null) as any;
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [addressHide, setAddressHide] = useState(true);
  const [warningMessage, setWarningMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showUploadPecModel, setShowUploadPecModel] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState({} as any);
  const [concernstext, setConcernstext] = useState("");
  const [savedPrescriptionshow, setSavedPrescriptionshow] = useState(false);
  const [uploadprescriptionshow, setUploadprescriptionshow] = useState(true);
  const [currentProgress, setCurrentProgress] = useState("0");
  const [checkmarkShow, setCheckmarkShow] = useState(false);
  const [showAddAddressModel, setShowAddAddressModel] = useState(false);
  const [progressContainershow, setProgressContainershow] = useState(false);
  const [showSuccessUserPopupText, setShowSuccessUserPopupText] = useState("");
  const [showSuccessUserPopup, setShowSuccessUserPopup] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
    null
  );
  const [selectedMember, setSelectedMember] = useState({});
  const [showAddMemberModel, setShowAddMemberModel] = useState(false);
  const [addAddressShow, setAddAddressShow] = useState(false);
  const [confPriscriptionShow, setConfPriscriptionShow] = useState(false);
  const [fileData, setFileData] = useState<any>(null);

  const raphaPrescriptions: string | null =
    localStorage.getItem("raphaPrescriptions");
  const raphaPrescriptionsSection =
    raphaPrescriptions !== null ? JSON.parse(raphaPrescriptions) : null;
  const [saveprescriptiondata, setSaveprescriptiondata] = useState(
    raphaPrescriptionsSection?.[categoryName]
      ? raphaPrescriptionsSection?.[categoryName]
      : []
  );
  const { userAddress } = useSelector((ReduxState: any) => ReduxState.profile);
  const path = categoryName;
  let addressType = path;
  if (path === "labtest") {
    addressType = "diagnostic";
  } else if (path === "radiology") {
    addressType = "ctmri";
  } else if (path === "eyecare") {
    addressType = "eye_care";
  } else if (path === "dentalcare") {
    addressType = "dental_care";
  }
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setFileData(file);
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
    const imgFile = e.target.files;

    let ValidFiles = [] as any;
    for (let idx = 0; idx < imgFile.length; idx++) {
      const uploadFile = imgFile[idx];
      if (uploadFile) {
        const reader = new FileReader();
        reader.onloadstart = () => {
          // setUploadcontainershow(false);
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

          const uploadTime = 3000;
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

  const handleProceedClick = () => {
    setAddressHide(false);
  };

  const showSavedPrescription = () => {
    if (!fileInput.current || fileInput.current?.length === 0) {
      setModelTitle("Saved Prescription");
      setSavedPrescriptionshow(true);
      setUploadprescriptionshow(false);
      setUploadprescriptionshow(false);
    }
  };

  useEffect(() => {
    if (currentProgress === "0") {
      setUploadprescriptionshow(true);
    }
  }, [currentProgress]);

  const handleAddressCardSelect = async (index: number, address: any) => {
    setSelectedAddress(address);
    const files = fileInput.current;
    const raphaPrescriptionsL: string | null =
      localStorage.getItem("raphaPrescriptions");
    const prevItems = raphaPrescriptionsL
      ? JSON.parse(raphaPrescriptionsL)
      : {};
    const prevItemsCat = prevItems?.[categoryName]
      ? prevItems[categoryName]
      : [];
    const address_id = address?.id;
    if (!address_id) {
      setWarningMessage("Address is required.");
      return;
    }

    if (!files || files.length === 0) {
      alert("At least one file is required.");
      return;
    }
    setWarningMessage("");

    for (let idx = 0; idx < files.length; idx++) {
      const file = files[idx];
      if (file && file.name) {
        setIsLoading(true);
        const filename = file.name;
        const remarks = concernstext;
        const type = addressType;

        if (filename) {
          const exten1 = filename.split(".");
          const extenName = "." + exten1[exten1.length - 1];
          const resp1 = (await dispatch(
            getPrescriptionSignedUrl({
              ext: extenName,
              remarks,
              address_id,
              type,
            })
          )) as any;
          const signedUrl = resp1?.payload?.signedUrl;
          const aID = resp1?.payload?.attachment?.id;

          if (signedUrl) {
            await axios.put(signedUrl, file, {
              headers: {
                "Content-Type": file.type,
              },
            });

            prevItemsCat.push({
              filename,
              remarks,
              attachment_id: aID,
            });
            prevItems[categoryName] = [...prevItemsCat];
            localStorage.setItem(
              "raphaPrescriptions",
              JSON.stringify(prevItems)
            );
            setSaveprescriptiondata([...prevItemsCat]);
            fileInput.current = null;
            showSavedPrescription();
            setShowUploadPecModel(false);
            const res = await dispatch(
              updateNitifySuccessMessage("Prescription Uploaded Successfully")
            );
            if (res) {
              setConfPriscriptionShow(true);
            }
            setIsLoading(false);
          } else {
            setIsLoading(false);
          }
        } else {
          setIsLoading(false);
        }
      }
    }
    return true;
  };
  const handleConformOk = () => {
    setConfPriscriptionShow(false);
    history.push(`/${categoryName}`);
  };
  const handleRemovePrescriptions = (indexToDelete: any) => {
    setFileData(null);
    setProgressContainershow(false);
  };
  const handleAddNewAddress = () => {
    setShowAddAddressModel(true);
    setSelectedAddress({});
  };

  const addAddressSuccess = () => {
    setShowAddAddressModel(false);
    dispatch(getMyAddressQueryAPI());
    setShowSuccessUserPopup(true);
    const addSucTet = selectedAddress?.id
      ? `Successfully Updated the Address.`
      : `Successfully Added the new Address.`;

    setShowSuccessUserPopupText(addSucTet);
  };

  const handleEditAddress = (userInfo: any) => {
    setSelectedAddress(userInfo);
    setShowAddAddressModel(true);
  };

  return (
    <UploadSubPrescriptionStyled>
      <div className="">
        {addressHide && (
          <>
            <div className="prescription-header">
              <p>Upload Prescription</p>

              {fileData && (
                <button onClick={handleProceedClick}>
                  Proceed <FaArrowRight className="ms-3" />
                </button>
              )}
            </div>
            <div>
              <div className="upload-sub-prescription-div">
                <div className="upload-sub-prescription-left-div">
                  <div className="upload-sub-prescription-banner-text">
                    <p>
                      Make sure the prescription you upload contains the
                      following elements
                    </p>
                    <div className="upload-sub-prescription-banner-img">
                      <img
                        src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1733377933757.png"
                        alt=""
                      />
                      <img
                        src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1733377963151.png"
                        alt=""
                      />
                      <img
                        src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1733377987022.png"
                        alt=""
                      />
                      <img
                        src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1733378013651.png"
                        alt=""
                      />
                      <img
                        src=" https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1733378041608.png"
                        alt=""
                      />
                    </div>
                    <div className="upload-sub-prescription-banner">
                      <p>
                        Our pharmacist will dispense medications only with a
                        valid prescription that complies with all government
                        regulations.
                      </p>
                    </div>
                  </div>
                  <div className="vertical-line"></div>
                  <div className="upload-prescription-image">
                    <p>Sample Prescription</p>
                    <div className="upload-prescription-image-div">
                      <img
                        src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1733725152725.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="upload-prescription-mobile-div">
                  <div className="upload-sub-prescription-right-div">
                    <label htmlFor="dropzone-file" className="upload-container">
                      <div className="flex flex-col items-center justify-center">
                        <img
                          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1733381078387.png"
                          alt=""
                        />
                        <p className="mb-2 text-sm text-black opactiy-80">
                          <span className="poppins-medium">
                            Click to upload
                          </span>
                          <span className="poppins-semibold">
                            or drag and drop
                          </span>
                        </p>
                        <p className="image-format">
                          JPEG, PNG PDF formats up to 10 MB
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        onChange={handleFileChange}
                        type="file"
                        multiple={false}
                        className="hidden"
                      />
                    </label>

                    <div className="savedprescription-main-list-div">
                      {progressContainershow && (
                        <div className="savedprescription-list button-shadow">
                          <div className="Uploaded-prescription-imgdata relative">
                            <div className="d-flex justify-content-between align-items-baseline">
                              <div className="d-flex align-items-baseline">
                                <FaFileInvoice className="me-3" />
                                <p>{fileData?.name}</p>
                              </div>
                              <button
                                className="btn"
                                onClick={handleRemovePrescriptions}
                              >
                                <AiOutlineCloseCircle />
                              </button>
                            </div>
                            <div className="progress-container">
                              <div className="progress-barwrap flex_center flexdirection_col">
                                <div id="progressBar" className="progress-bar">
                                  <div
                                    className="progress-div"
                                    style={{ width: `${currentProgress}%` }}
                                  ></div>
                                </div>
                                {checkmarkShow && (
                                  <div className="flex flex-col items-center mb-10">
                                    <Rreeentick className="progress-icons" />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {fileData && (
                    <div className="mobile-prescription-conf-div">
                      <button onClick={handleProceedClick}>
                        Get a Prescription <FaArrowRight className="ms-3" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
        {!addressHide && (
          <div>
            <div className="prescription-header">
              <p>Select Address</p>
              <button onClick={handleAddNewAddress}>
                Add Address <FaArrowRight className="ms-3" />
              </button>
            </div>
            <p>Deliver To</p>

            <div className="row">
              {userAddress?.map((item: any, index: number) => {
                return (
                  <div className="col-md-6 mb-4" key={index}>
                    <div
                      className="prescription-address-card-div p-3 border"
                      style={{
                        border:
                          selectedCardIndex === index
                            ? "2px solid #7291f4"
                            : "none",
                        cursor: "pointer",
                      }}
                    >
                      <div className="d-flex justify-content-between ">
                        <div
                          className="prescription-address-div"
                          title="Select Address "
                        >
                          <p className="address-text">Name: {item?.name}</p>
                          <p className="address-text">
                            Address: {item?.address}
                          </p>
                          <p className="address-text">
                            House / Building No.: {item?.detail}
                          </p>
                          <p className="address-text">
                            Landmark: {item?.landmark || `NA`}
                          </p>
                          <p className="address-text">Zipcode: {item?.zip}</p>
                          <p className="address-text">City : {item?.city}</p>
                          <p className="address-text">State: {item?.state}</p>
                        </div>
                        <div className="prescription-address-btn-div">
                          <button
                            className="btn prescription-upload-btn"
                            onClick={() => handleAddressCardSelect(index, item)}
                          >
                            Select Address
                          </button>
                          <button
                            className="btn "
                            onClick={() => {
                              handleEditAddress(item);
                            }}
                          >
                            Edit{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="mobile-view-prescription-add-btn">
                <button onClick={handleAddNewAddress}>
                  Add Address <FaArrowRight className="ms-3" />
                </button>
              </div>
            </div>
          </div>
        )}

        <Modal
          show={confPriscriptionShow}
          backdrop="static"
          keyboard={false}
          centered
        >
          <UploadSubPrescriptionStyled>
            <div className="text-center prescription-address-Conf-div p-3 border">
              <h4>Delivering to</h4>
              <h5>{selectedAddress?.name}</h5>
              <p className="text-muted">{selectedAddress?.address}</p>
              <div className="my-4">
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1733736126220.png"
                  alt="Order Confirmation"
                  className="img-fluid"
                />
              </div>
              <h4>We've received the details, our agent will call you by --</h4>
              <p className="text-muted">
                Your order is under review. Please wait for a call from our
                pharmacist to confirm and pay.
              </p>

              <div className="prescription-conf-div">
                <button onClick={handleConformOk}>Back to Home</button>
              </div>
            </div>
          </UploadSubPrescriptionStyled>
        </Modal>

        <AddNewAddress
          show={showAddAddressModel}
          onHide={() => {
            setShowAddAddressModel(false);
          }}
          addUserSuccess={addAddressSuccess}
          selectedAddress={selectedAddress}
        />
        <CustomModal
          show={showSuccessUserPopup}
          titleText={showSuccessUserPopupText}
          deleteText="ok"
          cancelText=""
          onCancel={() => setShowSuccessUserPopup(false)}
          onDelete={() => setShowSuccessUserPopup(false)}
        />
      </div>
    </UploadSubPrescriptionStyled>
  );
};

export default UploadSubPrescription;
