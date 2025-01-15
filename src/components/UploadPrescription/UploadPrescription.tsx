import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { UploadPrescriptionStyled } from "./UploadPrescription.styled";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import Loader from "../../components/Common/Loader";
import CloseButton from "react-bootstrap/CloseButton";
import { ReactComponent as Rreeentick } from "../../assets/icons/greeen_tick.svg";
import { ReactComponent as Uploadpres } from "../../assets/icons/uploadpres_default.svg";
import { ReactComponent as Uploadpresselected } from "../../assets/icons/uploadpres_selected.svg";
import { ReactComponent as Uploadmenuicon } from "../../assets/icons/upload_menu_icon.svg";
import "./uploadPrescription.css";
import {
  getMyAddressQueryAPI,
  getPrescriptionSignedUrl,
} from "../../redux/slices/Profile/ProfileService";
import axios from "axios";
import { updateShowLoginModel } from "../../redux/slices/auth/authSlice";
import { updateNitifySuccessMessage } from "../../redux/slices/checkout/checkoutSlice";
import SelectAddress from "../Doctor/SelectAddress/SelectAddress";
import { BookingReviewstyled } from "../../pages/Hospital/BookingReview/BookingReview.styled";
import AddNewAddress from "../AddNewAddress/AddNewAddress";
import { FaArrowRight } from "react-icons/fa6";

const UploadPrescription = (props: any) => {
  const { item, index, uploadBtnName } = props;
  const history = useHistory();
  const dispatch = useDispatch();

  const [modelTitle, setModelTitle] = useState("Upload Prescription");
  const [showUploadPecModel, setShowUploadPecModel] = useState(false);
  const [uploadcontainershow, setUploadcontainershow] = useState(true);
  const [progressContainershow, setProgressContainershow] = useState(false);
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

  const fileInput = useRef<HTMLDivElement>(null) as any;
  const { categoryName } = props;
  const raphaPrescriptions: string | null =
    localStorage.getItem("raphaPrescriptions");
  const raphaPrescriptionsSection =
    raphaPrescriptions !== null ? JSON.parse(raphaPrescriptions) : null;
  const [saveprescriptiondata, setSaveprescriptiondata] = useState(
    raphaPrescriptionsSection?.[categoryName]
      ? raphaPrescriptionsSection?.[categoryName]
      : []
  );

  const [deleteIndexArray, setDeleteIndexArray] = useState<any>(null);
  const [selectedUser, setSelectedUser] = useState({} as any);
  const [selectedAddress, setSelectedAddress] = useState({} as any);
  const [showAddAddressModel, setShowAddAddressModel] = useState(false);
  const [selectedItemForUpdate, setSelectedItemForUpdate] = useState(null);
  const [showSuccessUserPopup, setShowSuccessUserPopup] = useState(false);
  const [showSuccessUserPopupText, setShowSuccessUserPopupText] = useState("");
  const [selectedMember, setSelectedMember] = useState({});
  const [warningMessage, setWarningMessage] = useState("");
  const [modalOpacity, setModalOpacity] = useState(1);
  const isNewAddressAdded = useRef(false);
  const addressId = selectedAddress?.id;
  const curentItem = cartItems[index];
  const onHide = () => {
    setShowUploadPecModel(false);
    setTimeout(() => {
      showUploadPrescription();
    }, 100);
  };

  const { userDependents, userAddress } = useSelector(
    (ReduxState: any) => ReduxState.profile
  );

  const path = window.location.pathname?.replace("/", "");
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

  const handleRemovePrescriptions = () => {
    const raphaPrescriptionsL = localStorage.getItem("raphaPrescriptions");
    let prevItems = raphaPrescriptionsL ? JSON.parse(raphaPrescriptionsL) : {};
    const prevItemsCat =
      prevItems && prevItems?.[categoryName] ? prevItems?.[categoryName] : [];
    if (prevItemsCat && prevItemsCat.length) {
      let newItemArray = prevItemsCat.filter((item: any, index: any) => {
        return deleteIndexArray?.indexOf(index) === -1;
      });
      prevItems[categoryName] = newItemArray;
      localStorage.setItem("raphaPrescriptions", JSON.stringify(prevItems));
      setSaveprescriptiondata([...newItemArray]);
      setDeleteButtonDisabled(true);
      setDeleteIndexArray(null);
      if (newItemArray && newItemArray.length === 0) {
        showUploadPrescription();
      }
      return true;
    } else {
      return false;
    }
  };

  const submitUploadForm = async () => {
    const files = fileInput.current;
    const raphaPrescriptionsL: string | null =
      localStorage.getItem("raphaPrescriptions");
    const prevItems = raphaPrescriptionsL
      ? JSON.parse(raphaPrescriptionsL)
      : {};
    const prevItemsCat = prevItems?.[categoryName]
      ? prevItems[categoryName]
      : [];
    const address_id = selectedAddress?.id;
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
        console.log("type : ", type);

        if (filename) {
          const exten1 = filename.split(".");
          const extenName = "." + exten1[exten1.length - 1];
          console.log("extenName", extenName);
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
            dispatch(
              updateNitifySuccessMessage("Prescription Uploaded Successfully")
            );
            setIsLoading(false);
          } else {
            setIsLoading(false);
          }
          console.log("resp1", resp1);
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
    setModelTitle("Upload Prescription");
    setUploadprescriptionshow(true);
    setUploadcontainershow(true);
    setProgressContainershow(false);
    setSubmitButtonDisabled(true);
    setCurrentProgress("0");
    setCheckmarkShow(false);
    setSavedPrescriptionshow(false);
  };

  const showSavedPrescription = () => {
    if (!fileInput.current || fileInput.current?.length === 0) {
      setModelTitle("Saved Prescription");
      setSavedPrescriptionshow(true);
      setUploadprescriptionshow(false);
      setUploadprescriptionshow(false);
    }
  };
  const clearUploadedPrascription = () => {
    fileInput.current = null;
    setCurrentProgress("0");
    showUploadPrescription();
  };
  const handleCheckList = (evt: any, index: any) => {
    let deletedSavedPresIndex = deleteIndexArray ? [...deleteIndexArray] : [];
    const indexInArray = deletedSavedPresIndex.indexOf(index);

    if (evt.target.checked && indexInArray === -1) {
      deletedSavedPresIndex.push(index);
    } else if (!evt.target.checked && indexInArray !== -1) {
      deletedSavedPresIndex.splice(indexInArray, 1);
    }

    setDeleteButtonDisabled(deletedSavedPresIndex.length === 0);
    setDeleteIndexArray(deletedSavedPresIndex);
  };

  const fromCartPage = item?.count ? true : false;
  const item1 = fromCartPage ? item : curentItem;

  const handleUserAddressAddClick = (index: any) => {
    isNewAddressAdded.current = true;
    setShowAddAddressModel(true);
    setSelectedItemForUpdate(index);
    // setModalOpacity(0.2);
  };

  const addAddressSuccess = () => {
    setShowAddAddressModel(false);

    dispatch(getMyAddressQueryAPI());
    setShowSuccessUserPopup(true);
    setShowSuccessUserPopupText("Successfully Added the new Address.");
    isNewAddressAdded.current = true;
  };

  const selectSavedAddress = (addss: any) => {
    setSelectedAddress(addss);
  };

  useEffect(() => {
    if (userDependents?.length > 0 && !selectedUser?.id) {
      setSelectedUser(userDependents[0]);
    }
    if (userAddress?.length > 0 && !selectedAddress?.id) {
      setSelectedAddress(userAddress[0]);
    }
  }, []);

  return (
    <UploadPrescriptionStyled>
      <button
        onClick={() => {
          if (!user?.id) {
            dispatch(updateShowLoginModel(true));
          } else {
            setShowUploadPecModel(true);
          }
        }}
        className="upload-Prescription-btn btn"
      >
        {uploadBtnName === "commonBtn" ? (
          <FaArrowRight className="uploadButtonIcon" />
        ) : (
          <>
            {uploadBtnName}
            <FaArrowRight className="ms-3" />
          </>
        )}
      </button>

      <Modal
        show={showUploadPecModel}
        dialogClassName="upload-prescription-box"
      >
        <div className="conformation-model">
          <Modal.Body>
            <UploadPrescriptionStyled>
              <div
                className="upload-prescriptionwrap"
                style={{ opacity: modalOpacity }}
              >
                <div className="new-option-header">
                  <h4>{modelTitle}</h4>
                  <CloseButton onClick={onHide} />
                </div>
                <div className="upload-pec-main-content">
                  {isLoading && <Loader />}
                  {uploadprescriptionshow && (
                    <div id="uploadprescriptions">
                      <div className="flex items-center justify-center w-full">
                        {uploadcontainershow && (
                          <label
                            htmlFor="dropzone-file"
                            className="upload-container"
                          >
                            <div className="flex flex-col items-center justify-center">
                              <Uploadmenuicon />
                              <p className="mb-2 text-sm text-black opactiy-80">
                                <span className="poppins-medium">
                                  Drag and Drop file here or{" "}
                                </span>
                                <u className="poppins-semibold">Choose file</u>
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
                      </div>
                      <div className="support-text-box-sec">
                        <span className="flex-col">
                          Supported format: PNG, SVG, JPG
                        </span>
                        <span className="flex-col">Maximum size: 20 MB</span>
                      </div>
                      {
                        <div className="remarks-prescription">
                          <span className="poppins-regular">Remarks</span>
                          <textarea
                            name="concerns"
                            id="concerns"
                            className="poppins-regular"
                            value={concernstext}
                            onChange={(e) => setConcernstext(e.target.value)}
                            cols={10}
                            rows={2}
                          ></textarea>

                          <div className="show-add-div">
                            {selectedAddress?.address ? (
                              <h2>Address: {selectedAddress.address}</h2>
                            ) : (
                              warningMessage && <h2>No Address Available</h2>
                            )}
                          </div>
                          <div className="mt-3">
                            <SelectAddress
                              index={0}
                              addressList={userAddress}
                              address={selectedAddress}
                              selectSavedAddress={selectSavedAddress}
                            />
                            <button
                              className="selectaddress-btn mx-4"
                              onClick={() => {
                                handleUserAddressAddClick(index);
                              }}
                            >
                              Add Address
                            </button>

                            <AddNewAddress
                              show={showAddAddressModel}
                              onHide={() => {
                                setShowAddAddressModel(false);
                                // isNewAddressAdded.current = true;
                              }}
                              addUserSuccess={addAddressSuccess}
                              selectedMember={selectedMember}
                            />
                          </div>
                          {warningMessage && (
                            <div className="warning-message">
                              {warningMessage}
                            </div>
                          )}
                        </div>
                      }
                      <div className="flex actions-btn-sec-content">
                        <div className="flex-column">
                          <div className="uploadprescriptions-leftbtns flex_center">
                            <button
                              type="button"
                              onClick={showSavedPrescription}
                              className="saved-prescription-btn poppins-medium"
                            >
                              Saved Prescription
                            </button>
                            <button
                              type="button"
                              onClick={clearUploadedPrascription}
                              className="saved-prescription-btn poppins-medium"
                            >
                              Clear Prescription
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
                  )}
                  {savedPrescriptionshow && (
                    <div
                      className="savedprescription-containerwrap"
                      id="savedprescriptions"
                    >
                      <div className="savedprescription-container w-full">
                        <div className="savedprescription-wrap">
                          {saveprescriptiondata.map(
                            (item: any, index: string) => {
                              console.log("item : ", item);

                              return (
                                <div className="savedprescription-list button-shadow">
                                  <div className="savedprescription-imgdata relative">
                                    {
                                      <img
                                        src={item.prescriptionFileData}
                                        alt={item.filename}
                                        title={item.concerns}
                                        className="savedprescription-img"
                                      />
                                    }
                                    <div className="savedprescription-imgcheck">
                                      <input
                                        type="checkbox"
                                        onClick={(evt) =>
                                          handleCheckList(evt, index)
                                        }
                                        className="hidden peer savedPrescription__list"
                                        id={`prescription-option-${index}`}
                                        checked={
                                          deleteIndexArray?.includes(index) ||
                                          false
                                        }
                                      />
                                      <label
                                        htmlFor={`prescription-option-${index}`}
                                      >
                                        <Uploadpres />
                                        <Uploadpresselected />
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                        <div className="savedprescription-btns flex_wrapbetween">
                          <div className="upload-btnwrap flex-column">
                            <div className="container-fluid p-0">
                              <button
                                type="button"
                                className="poppins-medium"
                                onClick={showUploadPrescription}
                              >
                                Upload Prescription
                              </button>
                            </div>
                          </div>
                          <div className="action-btnwrap flex_start">
                            {/* <button className="cancel-btn poppins-medium button-shadow" type="button" onClick={onHide}>
                              Cancel
                            </button> */}
                            <button
                              id="deleteButton"
                              className="delete-btn poppins-medium button-shadow"
                              type="button"
                              disabled={deleteButtonDisabled}
                              onClick={handleRemovePrescriptions}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </UploadPrescriptionStyled>
          </Modal.Body>
        </div>
      </Modal>
    </UploadPrescriptionStyled>
  );
};

export default UploadPrescription;
