import React, { useEffect, useRef, useState } from "react";
import { BlobServiceClient } from "@azure/storage-blob";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BookingReviewstyled } from "./EditCart.styled";
import AddNewMember from "../../../components/AddNewMember/AddNewMember";
import CustomModal from "../../../components/CustomModel";
import AddNewAddress from "../../../components/AddNewAddress/AddNewAddress";
import SelectAddress from "../../../components/Doctor/SelectAddress/SelectAddress";
import CloseButton from "react-bootstrap/CloseButton";

import hospitalimg from "../../../assets/images/doctor/hospital_blue-icon.png";
import {
  getUserWithDependentsAPI,
  createNewDependentAPI,
  getMyAddressQueryAPI,
} from "../../../redux/slices/Profile/ProfileService";
import { setNelyAdedUserFlg } from "../../../redux/slices/Profile/ProfileSlice";

import SlotSelectionPopup from "../../../components/slotSelectionPopup/slotSelectionPopup";
import { handleAddToCartDoctor } from "../../../redux/slices/checkout/checkoutSlice";
import {
  updateBookingSlot1,
  updateBookingSlot2,
  updateBookingDoctordetails,
  updateBookingAddress,
  addBooking,
  removeBooking,
  updateIdxforDoctorChange,
} from "../../../redux/slices/bookingScreen/bookingScreenSlice";
import { MdBatchPrediction } from "react-icons/md";
let doctorMale =
  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338140063.png";
let doctorFemale =
  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338333932.png";
let imageMale =
  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338140063.png";
let imageFemale =
  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338333932.png";
const BookingReview = (props: any) => {
  const {
    doctorDetails,
    hospitalDetails,
    consultationType,
    BookingArray,
    selectedProfileIds,
    idxforDoctorChange,
  } = useSelector((ReduxState: any) => ReduxState.bookingReview);
  const { ProfileData, dependentsData, isNelyAdedUser, userAddress } =
    useSelector((ReduxState: any) => ReduxState.profile);
  const [showAddMemberModel, setShowAddMemberModel] = useState(false);
  const [showAddAddressModel, setShowAddAddressModel] = useState(false);
  const [selectedItemForUpdate, setSelectedItemForUpdate] = useState(null);
  const isNewAddressAdded = useRef(false);
  const [showSuccessUserPopup, setShowSuccessUserPopup] = useState(false);
  const [showSuccessUserPopupText, setShowSuccessUserPopupText] = useState("");
  const [selectedMember, setSelectedMember] = useState({});
  const [newProfile, setNewProfile] = useState({});
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const { bookingtype } = props.match?.params;

  console.log("hospitalId", bookingtype);
  console.log("hospitalDetails", hospitalDetails);
  console.log("doctorDetails", doctorDetails);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!ProfileData) {
      dispatch(getUserWithDependentsAPI());
    }
    if (!userAddress || (userAddress && userAddress.length === 0)) {
      dispatch(getMyAddressQueryAPI());
    }
    console.log("BookingArray vinod", BookingArray);
    console.log("BookingArray vinod", BookingArray);
    if (BookingArray && BookingArray.length && doctorDetails) {
      let indexforUpdate = 0;
      if (idxforDoctorChange != null && idxforDoctorChange >= 0) {
        indexforUpdate = idxforDoctorChange;
      } else {
        indexforUpdate = BookingArray.findIndex(
          (item: any) => item?.patientsDetails?.relation === "Self",
        );
      }
      if (indexforUpdate >= 0) {
        handleUpdateItem(indexforUpdate);
      } else {
        handleUpdateItem(0);
      }
    }
  }, []);

  useEffect(() => {
    if (isNelyAdedUser) {
      handleAddItem(dependentsData[dependentsData.length - 1]);
      setNewProfile({});
      dispatch(setNelyAdedUserFlg(false));
    }
  }, [isNelyAdedUser]);

  useEffect(() => {
    if (isNewAddressAdded.current && userAddress.length) {
      handleAddAddressItem(
        userAddress[userAddress.length - 1],
        selectedItemForUpdate,
      );
      setSelectedItemForUpdate(null);
    }
  }, [userAddress]);

  useEffect(() => {
    if (
      (!selectedProfileIds ||
        (selectedProfileIds && selectedProfileIds.length === 0)) &&
      dependentsData &&
      dependentsData.length
    ) {
      handleAddItem(dependentsData[0]);
    }
  }, [dependentsData]);

  const handleUserProfileAddClick = () => {
    setShowAddMemberModel(true);
  };
  const handleUserAddressAddClick = (index: any) => {
    isNewAddressAdded.current = true;
    setShowAddAddressModel(true);
    setSelectedItemForUpdate(index);
  };
  const handleAddProfileSubmit = () => {
    dispatch(createNewDependentAPI(newProfile));
  };
  const callSetNewProfile = (evt: any, key: any) => {
    setNewProfile({ ...newProfile, [key]: evt.target.value });
  };

  const getDoctorImage = (doctorDetailsObj: any) => {
    return (
      doctorDetailsObj?.image ??
      (doctorDetailsObj?.gender === "male" ? doctorMale : doctorFemale)
    );
  };

  const getHospitalImage = () => {
    return hospitalDetails?.image ?? hospitalimg;
  };

  const getProfileImage = (image: any) => {
    return image
      ? image
      : props.doctor?.gender === "male"
        ? imageMale
        : imageFemale;
  };

  const constructUserProfileEle = () => {
    let profileListEle = [];
    let classNames =
      "accountProfileListItm round-shadow inlineflex_center flexdirection_col";
    profileListEle = dependentsData
      ?.filter(
        (item: any) =>
          selectedProfileIds && selectedProfileIds.indexOf(item.id) === -1,
      )
      .map((item: any, index: any) => {
        return (
          <button
            className={classNames}
            onClick={() => {
              handleAddItemFromProfile(item);
            }}
          >
            <img
              className="accountProfileListImg"
              src={getProfileImage(item?.image)}
              alt="{item?.first_name}"
            />
            <div className="accountProfileListName poppins-medium">
              {item?.first_name}
            </div>
          </button>
        );
      });
    let AddMoreEle = (
      <button
        className="accountProfileListItm round-shadow inlineflex_center flexdirection_col"
        onClick={() => {
          handleUserProfileAddClick();
        }}
      >
        <div className="accountProfileListImg accountProfileListImgmore">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="33"
              height="33"
              rx="16.5"
              stroke="black"
            />
            <path
              d="M17 10V24M10 17H24"
              stroke="#444444"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="accountProfileListName poppins-medium">Add Member</div>
      </button>
    );
    if (!profileListEle) {
      profileListEle = [];
    }
    profileListEle?.push(AddMoreEle);
    return profileListEle;
  };

  const displaySelectedProfile = (
    patientsDetailsObj: any,
    index: any,
    address: any,
  ) => {
    let selectedProfileEle = patientsDetailsObj ? (
      <div className="SelectedProfileDetails inlineflex_start flexdirection_col">
        <div className="basic_details flex_center">
          <div className="profile_imgwrap round-shadow inlineflex_center flexdirection_col">
            <img
              className="profile_img"
              src={getProfileImage(patientsDetailsObj?.image)}
              alt={patientsDetailsObj?.first_name}
            />
            <div className="profile_imgname poppins-medium">
              {patientsDetailsObj?.first_name}
            </div>
          </div>
          <div className="basic_detail">
            <div className="poppins-regular text-xs flex_start">
              <span className="profilekey">Name : </span>
              <span className="profilevalue">
                {Capitalize(patientsDetailsObj?.first_name ?? "")}{" "}
                {patientsDetailsObj?.last_name}
              </span>
            </div>
            <div className="poppins-regular text-xs flex_start">
              <span className="profilekey">Gender : </span>
              <span className="profilevalue">
                {Capitalize(patientsDetailsObj?.gender ?? "")}
              </span>
            </div>
            <div className="poppins-regular text-xs flex_start">
              <span className="profilekey">Age : </span>
              <span className="profilevalue">{patientsDetailsObj?.age}</span>
            </div>
            <div className="poppins-regular text-xs flex_start">
              <span className="profilekey">Number : </span>
              <span className="profilevalue">
                {patientsDetailsObj?.phoneNumber}
              </span>
            </div>
          </div>
        </div>
        <div className="address_details">
          {address && (
            <div className="poppins-regular text-xs inlineflex_start flexdirection_col">
              <span className="profilekey">Address : </span>
              <span className="profilevalue">{address?.address}</span>
            </div>
          )}
          <div
            className={
              showErrorMessage && !address?.id
                ? "address-btns flex_start poppins-regular address-field-error"
                : "address-btns flex_start poppins-regular"
            }
          >
            <SelectAddress
              index={index}
              addressList={userAddress}
              address={address}
              selectSavedAddress={selectSavedAddress}
            />
            <button
              onClick={() => {
                handleUserAddressAddClick(index);
              }}
            >
              Add Address
            </button>
          </div>
          {showErrorMessage && !address?.id && (
            <p className="error_message"> Please Select Address</p>
          )}
        </div>
      </div>
    ) : null;
    return selectedProfileEle;
  };
  const handleChooseDoctor = (index: any, hospitalId: any) => {
    dispatch(updateIdxforDoctorChange(index));
    if (hospitalId) {
      history.push(`/hospital/${hospitalId}/`);
    } else {
      history.push(`/doctor/`);
    }
  };
  const handleChooseCenter = (index: any) => {
    dispatch(updateIdxforDoctorChange(index));
    history.goBack();
  };
  const displayDoctorDetails = (item: any, index: any) => {
    let doctorDetailsObj = item.doctorDetails;
    let hospitalDetailsObj = item.hospitalDetails;
    let doctorDetailsEle = doctorDetailsObj ? (
      <div className="doctorDetailsSection">
        <div className="doctor-details-top inlineflex_start flexdirection_col">
          {hospitalDetailsObj?.name && (
            <div className="hospital-detailwrap flex_center">
              <div className="hospital-img inlineflex_center">
                <img className="round-shadow" src={getHospitalImage()} alt="" />
              </div>
              <div className="hospital-detail inlineflex_start flexdirection_col">
                <div className="hospital-basic inlineflex_start flexdirection_col">
                  <div className="hospital-name poppins-semibold text-xs">
                    {hospitalDetailsObj?.name}
                  </div>
                  <div className="hospital-address poppins-medium">
                    <span className="hospital-addimg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 8 12"
                        fill="none"
                      >
                        <path
                          d="M4 5.725C3.62112 5.725 3.25776 5.58013 2.98985 5.32227C2.72194 5.06441 2.57143 4.71467 2.57143 4.35C2.57143 3.98533 2.72194 3.63559 2.98985 3.37773C3.25776 3.11987 3.62112 2.975 4 2.975C4.37888 2.975 4.74224 3.11987 5.01015 3.37773C5.27806 3.63559 5.42857 3.98533 5.42857 4.35C5.42857 4.53057 5.39162 4.70937 5.31983 4.87619C5.24804 5.04301 5.14281 5.19459 5.01015 5.32227C4.8775 5.44995 4.72001 5.55123 4.54669 5.62033C4.37337 5.68944 4.1876 5.725 4 5.725ZM4 0.5C2.93913 0.5 1.92172 0.905624 1.17157 1.62764C0.421427 2.34965 0 3.32892 0 4.35C0 7.2375 4 11.5 4 11.5C4 11.5 8 7.2375 8 4.35C8 3.32892 7.57857 2.34965 6.82843 1.62764C6.07828 0.905624 5.06087 0.5 4 0.5Z"
                          fill="#444444"
                        />
                      </svg>
                    </span>
                    <span>{hospitalDetailsObj?.address}</span>
                  </div>
                </div>
                <div className="hospital-btns flex_start">
                  <button className="hospital-viewbtn poppins-medium">
                    View Centre
                  </button>
                  <button className="hospital-chngbtn poppins-medium">
                    Change Centre
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="doctor-detailwrap flex_center ">
            <div className="doctor-img inlineflex_center">
              <img src={getDoctorImage(doctorDetailsObj)} alt="" />
            </div>
            <div className="doctor-detail inlineflex_start flexdirection_col">
              <div className="doctor-name poppins-semibold text-xs">
                Dr.{doctorDetailsObj.name}
              </div>
              <div className="doctor-department poppins-medium">
                {doctorDetailsObj.specialization}
              </div>
            </div>
          </div>
        </div>
        {showErrorMessage && !doctorDetailsObj?.id && (
          <p className="error_message error_message1">
            Please Select the Doctor
          </p>
        )}
        <div className="doctor-details-bottom flex_wrapbetween">
          <div className="doctor-consultation">
            Mode:{" "}
            {hospitalDetailsObj?.vendorId
              ? "OPD Consultation"
              : "Virtual Consultation"}
          </div>
          <div className="change-doctor">
            <button
              className="changedoctor_btn"
              type="button"
              onClick={() =>
                handleChooseDoctor(index, hospitalDetailsObj?.vendorId)
              }
            >
              <div className="changedoctor_btnwrap">
                <div className="changedoctor_btntxt poppins-regular">
                  Change Doctor
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    ) : (
      <>
        <div className="doctorDetailsSection">
          <div className="doctor-details-top inlineflex_start flexdirection_col">
            <button
              className="choosedoctor_btn"
              onClick={() => handleChooseDoctor(index, "")}
            >
              <div className="choosedoctor_btnwrap">
                <div className="choosedoctor_btntxt poppins-semibold">
                  Choose Doctor
                </div>
              </div>
            </button>
          </div>
          <div className="doctor-details-bottom flex_wrapbetween">
            <div className="doctor-consultation doctor-consultationchoose">
              Mode:{" "}
              {hospitalDetailsObj?.vendorId
                ? "OPD Consultation"
                : "Virtual Consultation"}
            </div>
          </div>
        </div>
      </>
    );
    return doctorDetailsEle;
  };

  const displayLabTestDetails = (doctorDetailsObj: any, index: any) => {
    const dDetails = doctorDetailsObj?.doctorDetails;
    const hDetails = doctorDetailsObj?.hospitalDetails;
    let doctorDetailsEle = doctorDetailsObj ? (
      <div className="doctorDetailsSection">
        <div className="doctor-detailwrap flex_center ">
          <div className="doctor-img inlineflex_center">
            <img src={getDoctorImage(hDetails)} alt="" />
          </div>
          <div className="doctor-detail inlineflex_start flexdirection_col">
            <div className="doctor-name poppins-semibold text-xs">
              {" "}
              {hDetails?.name}
            </div>
            <div className="doctor-department poppins-medium">
              <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736498912733.png" />{" "}
              {hDetails?.address}, {hDetails?.city}
            </div>
          </div>
        </div>
        {showErrorMessage && !dDetails?.service_code && (
          <p className="error_message error_message1">
            {" "}
            Please Select the Labtest
          </p>
        )}
        <div className="doctor-details-bottom flex_wrapbetween">
          <div className="doctor-consultation">
            <p> Name: {dDetails?.service_name}</p>
            <p> Description: {dDetails?.description}</p>
          </div>
          <div className="change-doctor">
            <button
              className="changedoctor_btn"
              type="button"
              onClick={() => handleChooseCenter(index)}
            >
              <div className="changedoctor_btnwrap">
                <div className="changedoctor_btntxt poppins-regular">
                  Change Lab test
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    ) : (
      <></>
    );
    return doctorDetailsEle;
  };

  const handleRemoveItem = (index: any) => {
    dispatch(removeBooking(index));
  };

  const handleAddAddressItem = (address: any, index: any) => {
    let bookingObject = {
      idx: index,
      address: { ...address },
    };
    dispatch(updateBookingAddress(bookingObject));
  };

  const handleAddItem = (selectedDependentObj: any) => {
    let bookingObject = {
      doctorDetails: { ...doctorDetails },
      hospitalDetails: { ...hospitalDetails },
      consultationType: consultationType,
      patientsDetails: { ...selectedDependentObj },
    };
    console.log("bookingObject", bookingObject);
    dispatch(addBooking(bookingObject));
  };

  const handleAddItemFromProfile = (selectedDependentObj: any) => {
    let bookingObject = {
      consultationType: consultationType,
      patientsDetails: { ...selectedDependentObj },
    };
    console.log("bookingObject", bookingObject);
    dispatch(addBooking(bookingObject));
  };
  const handleUpdateItem = (idx: any) => {
    let bookingObject = {
      doctorDetails: { ...doctorDetails },
      hospitalDetails: { ...hospitalDetails },
      idx: idx,
      consultationType: consultationType,
    };
    dispatch(updateBookingDoctordetails(bookingObject));
  };

  const addUserSuccess = () => {
    setShowAddMemberModel(false);
    dispatch(getUserWithDependentsAPI());
    setShowSuccessUserPopup(true);
    const addSucTet = (selectedMember as any)?.id
      ? `Successfully Updated the Member.`
      : `Successfully Added the new Member.`;
    setShowSuccessUserPopupText(addSucTet);
  };

  const addAddressSuccess = () => {
    setShowAddAddressModel(false);

    dispatch(getMyAddressQueryAPI());
    setShowSuccessUserPopup(true);
    setShowSuccessUserPopupText("Successfully Added the new Address.");
    isNewAddressAdded.current = true;
  };
  const handleAddtoCart = () => {
    if (isValidateBookings()) {
      continurBookingtoCart("addtocart");
    }
  };
  const handleEditCartCancel = () => {
    history.goBack();
  };
  const continurBookingtoCart = async (bType: any) => {
    const cName =
      bookingtype == "ctmri"
        ? "ctmri"
        : bookingtype == "labtest"
          ? "labtest"
          : "doctor";
    const neList = [] as any;
    BookingArray.map((itemB: any) => {
      neList.push({
        ...itemB,
        categoryName: cName,
      });
    });
    await dispatch(handleAddToCartDoctor(neList));
    if (bType === "booknow") {
      history.push("/checkout");
    } else {
      history.goBack();
    }
  };
  console.log("BookingArray", BookingArray);
  const isValidateBookings = () => {
    console.log("BookingArray", BookingArray);
    let isValid = false;
    BookingArray.map((itemB: any) => {
      if (
        itemB?.address?.id &&
        itemB?.patientsDetails?.id &&
        (itemB.consultationType === "OPD"
          ? itemB?.hospitalDetails?.vendorId || itemB?.hospitalDetails?.id
          : true) &&
        (itemB?.doctorDetails?.id || itemB?.doctorDetails?.service_code) &&
        ((itemB?.slot1?.dateStr && itemB?.slot1?.slot?.slot) ||
          itemB?.doctorDetails?.service_code)
      ) {
        isValid = true;
      } else {
        setShowErrorMessage(true);
      }
      console.log("itemB", itemB);
    });
    return isValid;
  };
  const selectSavedAddress = (address: any, index: any) => {
    handleAddAddressItem(address, index);
  };

  const Capitalize = (str: String) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <BookingReviewstyled>
      <AddNewMember
        show={showAddMemberModel}
        onHide={() => {
          setShowAddMemberModel(false);
        }}
        addUserSuccess={addUserSuccess}
        selectedMember={selectedMember}
      />
      <AddNewAddress
        show={showAddAddressModel}
        onHide={() => {
          setShowAddAddressModel(false);
          isNewAddressAdded.current = true;
        }}
        addUserSuccess={addAddressSuccess}
        selectedMember={selectedMember}
      />

      <CustomModal
        show={showSuccessUserPopup}
        titleText={showSuccessUserPopupText}
        deleteText="ok"
        cancelText=""
        onCancel={() => setShowSuccessUserPopup(false)}
        onDelete={() => setShowSuccessUserPopup(false)}
      />
      <div className="container-max">
        <div className="bookingContainer">
          <button
            className="bookingBtnwrap inlineflex_center"
            onClick={() => history.goBack()}
          >
            <div className="back-icon inlineflex_center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M5.61538 10.5L1 6L5.61538 1.5M1.64103 6H11"
                  stroke="#444444"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="back-text poppins-medium text-sm">Back</div>
          </button>

          <div className="bookinglistcontainer">
            <div className="title poppins-semibold opacity-50">
              Patient Details & Select Time Slot
            </div>

            <div className="bookinglistwrap">
              {BookingArray && BookingArray.length > 0 && (
                <div className="bookinglist">
                  <div className="bookingItems inlineflex_start flexdirection_col">
                    {BookingArray?.map((item: any, index: any) => {
                      return (
                        <div className="bookingItem flex_center round-shadow">
                          <CloseButton
                            className="removeBookingItem"
                            onClick={(e) => handleRemoveItem(index)}
                          />
                          {displaySelectedProfile(
                            item.patientsDetails,
                            index,
                            item.address,
                          )}
                          <div className="doctor-divider-profile"></div>

                          <div className="doctor-container">
                            {bookingtype == "labtest" ||
                            bookingtype == "ctmri" ? (
                              <> {displayLabTestDetails(item, index)}</>
                            ) : (
                              <>{displayDoctorDetails(item, index)}</>
                            )}
                          </div>
                          <div className="doctor-divider-doctor"></div>
                          <div className="slotprice-container inlineflex_start flexdirection_col">
                            <div className="slots inlineflex_start flexdirection_col">
                              {
                                <SlotSelectionPopup
                                  item={item}
                                  index={index}
                                  consultation={
                                    hospitalDetails?.vendorId
                                      ? "OPD Consultation"
                                      : "Virtual Consultation"
                                  }
                                />
                              }
                              {showErrorMessage &&
                                (!item?.slot1?.dateStr ||
                                  !item?.slot1?.slot?.slot) && (
                                  <p className="error_message">
                                    {" "}
                                    Please Select the Time Slot Details
                                  </p>
                                )}
                            </div>
                            <div className="price-container inlineflex_start flexdirection_col">
                              <div className="original-value flex_wrapbetween poppins-regular">
                                <span className="price-text">Price</span>
                                <span className="price-value">
                                  {(
                                    (item?.doctorDetails
                                      ?.virtual_consultation_cost ||
                                      item?.doctorDetails?.actual_cost) ??
                                    0
                                  )
                                    ?.toFixed(2)
                                    ?.toLocaleString("en-US")}
                                </span>
                              </div>
                              <div className="discount-value flex_wrapbetween poppins-regular">
                                <span className="price-text">Discount</span>
                                <span className="price-value">0.00</span>
                              </div>
                              <div className="total-value flex_wrapbetween poppins-semibold">
                                <span className="price-text">Total Price</span>
                                <span className="price-value">
                                  {(
                                    (item?.doctorDetails
                                      ?.virtual_consultation_cost ||
                                      item?.doctorDetails?.discounted_price) ??
                                    0
                                  )
                                    ?.toFixed(2)
                                    ?.toLocaleString("en-US")}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              <div className="patientDetails">
                <div className="accountProfileList flex_start">
                  {constructUserProfileEle()}
                </div>
              </div>
            </div>
          </div>
          <div className="booking-page-actions">
            <button
              onClick={handleEditCartCancel}
              className="secoundary-button"
            >
              Cancel
            </button>
            <button onClick={handleAddtoCart} className="primary-button">
              Update Cart
            </button>
          </div>
        </div>
      </div>
    </BookingReviewstyled>
  );
};

export default BookingReview;
