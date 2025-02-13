import React, { useEffect, useRef, useState } from "react";
import { BlobServiceClient } from "@azure/storage-blob";
import { useHistory, useLocation } from "react-router-dom";
import { MdOutlineCurrencyRupee } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { BookingReviewstyled } from "./BookingReview.styled";
import AddNewMember from "../../../components/AddNewMember/AddNewMember";
import CustomModal from "../../../components/CustomModel";
import AddNewAddress from "../../../components/AddNewAddress/AddNewAddress";
import SelectAddress from "../../../components/Doctor/SelectAddress/SelectAddress";
import CloseButton from "react-bootstrap/CloseButton";
import { ReactComponent as Booking } from "../../../assets/icons/booking.svg";
import { ReactComponent as Hospitaladd } from "../../../assets/icons/hospitaladd.svg";
import { ReactComponent as Back } from "../../../assets/icons/back.svg";
import {
  handleAddToCartAPI,
  getCartItemsAPI,
  deleteCartItemAPI,
  handleGetPriceAPI,
} from "../../../redux/slices/checkout/checkoutService";
import { getAttachmentIds } from "../../../Scenes/common";
import hospitalimg from "../../../assets/images/doctor/hospital_blue-icon.png";
import {
  getUserWithDependentsAPI,
  getMyAddressQueryAPI,
} from "../../../redux/slices/Profile/ProfileService";
import { setNelyAdedUserFlg } from "../../../redux/slices/Profile/ProfileSlice";

import SlotSelectionPopup from "../../../components/slotSelectionPopup/slotSelectionPopup";
import {
  handleAddToCartDoctor,
  updateCartItems,
} from "../../../redux/slices/checkout/checkoutSlice";

import {
  createBookingAPI,
  updateOrderDetailsAPI,
} from "../../../redux/slices/checkout/checkoutService";
import {
  updateCheckoutSelectedUser,
  updateCheckoutSelectedAddress,
} from "../../../redux/slices/checkout/checkoutSlice";

import {
  updateBookingSlot1,
  updateBookingSlot2,
  updateBookingDoctordetails,
  updateBookingAddress,
  addBooking,
  removeBooking,
  updateIdxforDoctorChange,
  resetBookingArray,
} from "../../../redux/slices/bookingScreen/bookingScreenSlice";
import { MdBatchPrediction } from "react-icons/md";
import EmpanelWithUs from "../../../components/EmpanelWithUs/EmpanelWithUs";
import Comorbidities from "./Comorbidities";
import { toast } from "react-toastify";

let imageMale =
  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338140063.png";
let imageFemale =
  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338333932.png";
let doctorMale =
  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338140063.png";
let doctorFemale =
  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338333932.png";
const BookingReview = (props: any) => {
  const {
    doctorDetails,
    hospitalDetails,
    consultationType,
    BookingArray,
    selectedProfileIds,
    idxforDoctorChange,
    nurseDetails,
    expressBook,
  } = useSelector((ReduxState: any) => ReduxState.bookingReview);
  const { cartItems, priceinfo } = useSelector(
    (ReduxState: any) => ReduxState.checkout
  );
  const { user, subDomainDetails } = useSelector(
    (ReduxState: any) => ReduxState.auth
  );

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
  const [showBookingErrorMessage, setshowBookingErrorMessage] = useState("");
  const [showConfirmMessageModel, setshowConfirmMessageModel] = useState(false);
  const [showConfirmMessageModelText, setshowConfirmMessageModelText] =
    useState("");
  const [confirmBookingType, setconfirmBookingType] = useState("");
  const [removeCartItems, setremoveCartItems] = useState([] as any);
  const [errorBookItems, seterrorBookItems] = useState([] as any);
  const { bookingtype } = props.match?.params;
  const timeSlotEnabled = bookingtype !== "gym";
  const isOtherBookings =
    bookingtype == "ctmri" ||
    bookingtype == "labtest" ||
    bookingtype == "gym" ||
    bookingtype == "eyecare" ||
    bookingtype == "dentalcare" ||
    bookingtype == "domiciliarycare"
      ? true
      : false;
  // const isAddressNotRequired =
  //   itemB?.doctorDetails?.visit_type === "home" ? true : false;
  console.log("hospitalId", bookingtype);
  console.log("hospitalDetails", hospitalDetails);
  console.log("doctorDetails", doctorDetails);
  console.log("nurseDetails", nurseDetails);
  console.log("bookingtype", bookingtype);

  const dispatch = useDispatch();
  const history = useHistory();
  const [showPatientHistory, setShowPatientHistory] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!ProfileData) {
      dispatch(getUserWithDependentsAPI());
    }
    if (!userAddress || (userAddress && userAddress?.length === 0)) {
      dispatch(getMyAddressQueryAPI());
    }
    console.log("BookingArray", BookingArray);
    console.log("isOtherBookings", isOtherBookings);
    console.log("doctorDetails", doctorDetails);

    if (BookingArray && BookingArray?.length && doctorDetails) {
      let indexforUpdate = 0;
      if (idxforDoctorChange != null && idxforDoctorChange >= 0) {
        indexforUpdate = idxforDoctorChange;
      } else {
        indexforUpdate = BookingArray.findIndex(
          (item: any) => item?.patientsDetails?.relation === "Self"
        );
      }

      if (indexforUpdate >= 0 && BookingArray?.length === 1) {
        indexforUpdate = 0;
      }

      if (indexforUpdate >= 0) {
        handleUpdateItem(indexforUpdate);
      } else {
        handleUpdateItem(0);
      }
    }
  }, []);

  useEffect(() => {
    if (BookingArray) {
      getPriceForReview();
    }
  }, [BookingArray]);

  useEffect(() => {
    if (isNelyAdedUser) {
      handleAddItem(dependentsData[dependentsData?.length - 1]);
      setNewProfile({});
      dispatch(setNelyAdedUserFlg(false));
    }
  }, [isNelyAdedUser]);

  useEffect(() => {
    if (isNewAddressAdded.current && userAddress?.length) {
      handleAddAddressItem(
        userAddress[userAddress?.length - 1],
        selectedItemForUpdate
      );
      setSelectedItemForUpdate(null);
    }
  }, [userAddress]);

  useEffect(() => {
    if (
      (!selectedProfileIds ||
        (selectedProfileIds && selectedProfileIds?.length === 0)) &&
      dependentsData &&
      dependentsData?.length
    ) {
      handleAddItem(dependentsData[0]);
    }
  }, [dependentsData]);

  useEffect(() => {
    console.log("BookingarrayValidate", BookingArray);
    if (BookingArray && BookingArray?.length) labtestValidateonCart();
  }, [BookingArray]);

  const handleUserProfileAddClick = () => {
    setShowAddMemberModel(true);
  };
  const handleUserAddressAddClick = (index: any) => {
    isNewAddressAdded.current = true;
    setShowAddAddressModel(true);
    setSelectedItemForUpdate(index);
  };
  const callUpdateBookingSlot1 = (bookingObj: any) => {
    console.log("callUpdateBookingSlot1", bookingObj);
    dispatch(updateBookingSlot1(bookingObj));
  };
  const callUpdateBookingSlot2 = (bookingObj: any) => {
    dispatch(updateBookingSlot2(bookingObj));
  };

  const customUpdateSlot1 = (bookingIndex: any) => {
    let slotStr = "slot1";
    let bookingObject = {
      idx: bookingIndex,
      [slotStr]: {
        date: new Date(),
        dateStr: getDateStr(new Date()),
      },
    };
    callUpdateBookingSlot1(bookingObject);
  };

  const getDateStr = (dateValue: any) => {
    const year = dateValue.getFullYear();
    const month = dateValue.getMonth() + 1;
    const date = dateValue.getDate();
    const dateStr = `${year}-${month > 9 ? month : "0" + month}-${
      date > 9 ? date : "0" + date
    }`;
    return dateStr;
  };

  const getSlotValues = () => {
    let slotStarttime = new Date().toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    });
    let slotEndtime = new Date(
      new Date().setMinutes(new Date().getMinutes() + 90)
    ).toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
    });

    return {
      duration_minutes: 90,
      start_time: slotStarttime,
      slot: `${slotStarttime} to ${slotEndtime}`,
    };
  };

  const getDoctorImage = (doctorDetailsObj: any) => {
    return (
      doctorDetailsObj?.image ??
      (doctorDetailsObj?.gender === "male" ? doctorMale : doctorFemale)
    );
  };

  const getHospitalImage = (hospitalDetailsObj: any) => {
    return hospitalDetailsObj?.image || hospitalDetails?.image || hospitalimg;
  };

  const getProfileImage = (patientsDetailsObj: any) => {
    return patientsDetailsObj?.image
      ? patientsDetailsObj?.image
      : patientsDetailsObj?.gender === "male"
      ? imageMale
      : imageFemale;
  };

  const isObject = (ObjData: any) => {
    return (
      typeof ObjData === "object" && !Array.isArray(ObjData) && ObjData !== null
    );
  };

  const constructUserProfileEle = () => {
    let profileListEle = [];
    let classNames =
      "accountProfileListItm round-shadow inlineflex_center flexdirection_col";
    profileListEle = dependentsData
      ?.filter(
        (item: any) =>
          selectedProfileIds && selectedProfileIds.indexOf(item.id) === -1
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
              src={getProfileImage(item)}
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
          <Booking />
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

  const handleToViewCentre = (vendorId: any) => {
    history.push(`/hospital/${vendorId}`);
  };
  const handleToChangeCentre = () => {
    history.push(`/doctor`);
  };

  const SelectedProfileDetails = ({
    patientsDetailsObj,
    index,
    address,
    doctorDetails,
  }: {
    patientsDetailsObj: any;
    index: any;
    address: any;
    doctorDetails: any;
  }) => {
    return (
      <div className="SelectedProfileDetails inlineflex_start flexdirection_col">
        <div className="basic_details flex_center">
          <div className="profile_imgwrap round-shadow inlineflex_center flexdirection_col">
            <img
              className="profile_img"
              src={getProfileImage(patientsDetailsObj)}
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
                {patientsDetailsObj?.phoneNumber || patientsDetailsObj?.phone}
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
              showErrorMessage &&
              !address?.id &&
              doctorDetails?.visit_type === "home"
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
          {showErrorMessage &&
            ((bookingtype === "labtest" &&
              !isLabTestValid({ address, doctorDetails })) ||
              !isAddressValid({ address, doctorDetails }) ||
              !address) && (
              <p className="error_message"> Please Select Address</p>
            )}
        </div>
      </div>
    );
  };

  const displaySelectedProfile = (
    patientsDetailsObj: any,
    index: any,
    address: any,
    doctorDetails: any
  ) => {
    let selectedProfileEle = patientsDetailsObj ? (
      <SelectedProfileDetails
        patientsDetailsObj={patientsDetailsObj}
        index={index}
        address={address}
        doctorDetails={doctorDetails}
      />
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
    let consultType = item.consultationType;
    let doctorDetailsEle = doctorDetailsObj ? (
      <div className="doctorDetailsSection">
        <div className="doctor-details-top inlineflex_start flexdirection_col">
          {hospitalDetailsObj?.name && (
            <div className="hospital-detailwrap flex_center">
              <div className="hospital-img inlineflex_center imgBkReview">
                <img
                  className="round-shadow"
                  src={getHospitalImage(hospitalDetailsObj)}
                  alt=""
                />
              </div>
              <div className="hospital-detail inlineflex_start flexdirection_col">
                <div className="hospital-basic inlineflex_start flexdirection_col">
                  <div className="hospital-name poppins-semibold text-xs">
                    {hospitalDetailsObj?.name}
                  </div>
                  <div className="hospital-address poppins-medium">
                    <span className="hospital-addimg">
                      <Hospitaladd />
                    </span>
                    <span>
                      {hospitalDetailsObj?.address ?? hospitalDetailsObj?.city}
                    </span>
                  </div>
                </div>
                <div className="hospital-btns flex_start mt-2">
                  <button
                    className="hospital-viewbtn poppins-medium"
                    onClick={() => {
                      handleToViewCentre(hospitalDetailsObj?.vendorId);
                    }}
                  >
                    View Centre
                  </button>
                  <button
                    className="hospital-chngbtn poppins-medium"
                    onClick={() => handleToChangeCentre()}
                  >
                    Change Centre
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="doctor-detailwrap flex_center ">
            <div className="doctor-img inlineflex_center imgBkReview">
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
            {consultType && consultType === "OPD"
              ? "OPD Consultation"
              : consultType === "CHAT"
              ? "Chat Consultation"
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
            {showErrorMessage && !doctorDetailsObj?.id && (
              <p className="error_message error_message1">
                Please Select the Doctor
              </p>
            )}
          </div>
          <div className="doctor-details-bottom flex_wrapbetween">
            <div className="doctor-consultation doctor-consultationchoose">
              Mode:{" "}
              {consultType && consultType === "OPD"
                ? "OPD Consultation"
                : consultType === "CHAT"
                ? "Chat Consultation"
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
    console.log("dDetails", dDetails);
    console.log("hDetails", hDetails);
    console.log("dDetails", dDetails);
    let doctorDetailsEle = dDetails ? (
      <div className="doctorDetailsSection">
        {hDetails?.name && (
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
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736498912733.png"
                  alt=""
                />{" "}
                {hDetails?.address ?? hDetails?.city}
              </div>
            </div>
          </div>
        )}

        {showErrorMessage &&
          !(dDetails?.tests && dDetails?.tests?.length > 0) &&
          !dDetails?.service_code && (
            <p className="error_message error_message1">
              {" "}
              Please Select the Centre
            </p>
          )}
        <div className="doctor-details-bottom flex_wrapbetween">
          {dDetails?.tests && dDetails?.tests?.length > 0 ? (
            <>
              <div className="doctor-testslist">
                {dDetails?.tests.map((Ddetail: any) => {
                  return (
                    <>
                      {isObject(Ddetail) && Ddetail && (
                        <div className="doctor-consultation">
                          <p>
                            {" "}
                            {Ddetail?.labtestType?.Ddetail?.labtestType ===
                            "labpackage"
                              ? "Package "
                              : "Test "}
                            Name: {Ddetail?.service_name}
                          </p>
                          <p> Description: {Ddetail?.description}</p>
                        </div>
                      )}
                    </>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <div className="doctor-consultation">
                <p> Name: {dDetails?.service_name}</p>
                {
                  hDetails?.type === "gym" 
                  ? 
                  (
                    <p> Description: <p dangerouslySetInnerHTML={{__html:dDetails?.description}}/></p>
                  )
                  :
                  (
                    <p> Description: {dDetails?.description}</p>
                  )
                }
                
              </div>
            </>
          )}
          <div className="change-doctor">
            <button
              className="changedoctor_btn"
              type="button"
              onClick={() => handleChooseCenter(index)}
            >
              <div className="changedoctor_btnwrap">
                <div className="changedoctor_btntxt poppins-regular">
                  Change {bookingtype}
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
              onClick={() => handleChooseCenter(index)}
            >
              <div className="choosedoctor_btnwrap">
                <div className="choosedoctor_btntxt poppins-semibold">
                  Choose Centre
                </div>
              </div>
            </button>
          </div>
          <div className="doctor-details-bottom flex_wrapbetween">
            {showErrorMessage && (
              <p className="error_message error_message1">
                {" "}
                Please Select the Centre
              </p>
            )}
          </div>
        </div>
      </>
    );
    return doctorDetailsEle;
  };

  const handleRemoveBookingItem = (index: any) => {
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
      categoryType: bookingtype,
      expressBook: expressBook,
    };
    console.log("bookingObject", bookingObject);
    dispatch(addBooking(bookingObject));
  };

  const handleAddItemFromProfile = (selectedDependentObj: any) => {
    let bookingObject = {
      consultationType: consultationType,
      patientsDetails: { ...selectedDependentObj },
      categoryType: bookingtype,
      expressBook: expressBook,
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
      categoryType: bookingtype,
      expressBook: expressBook,
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
    console.log("isValidateBookings()", isValidateBookings());
    if (isValidateBookings()) {
      if (bookingtype === "labtest") {
        validateOnCartItems("addtocart");
      } else {
        continurBookingtoCart("addtocart");
      }
    }
  };
  const handleBookNow = () => {
    if (isValidateBookings()) {
      if (bookingtype === "labtest") {
        validateOnCartItems("booknow");
      } else {
        continurBookingtoCart("booknow");
      }
    }
  };

  const labtestValidateonCart = () => {
    console.log("cartItems", cartItems);

    let bookErrorItems = [] as any;

    BookingArray.forEach((bookingItem: any, index: string) => {
      let errorBookItem = {} as any;
      if (bookingItem?.categoryType === "labtest") {
        cartItems?.carts?.length &&
          cartItems?.carts.forEach((cartItem: any) => {
            if (
              cartItem?.section_key === "labtest" &&
              bookingItem?.patientsDetails?.id === cartItem?.user?.id
            ) {
              if (
                bookingItem?.hospitalDetails?.id !== Number(cartItem?.vendor_id)
              ) {
                errorBookItem.errorLabchange = true;
                errorBookItem.patientsDetails = bookingItem?.patientsDetails;
                errorBookItem.hospitalDetails = cartItem?.vendor;
              } else {
                if (cartItem?.type === "package_booking") {
                  bookingItem?.doctorDetails?.tests.forEach(
                    (bookTestItem: any) => {
                      if (bookTestItem?.labtestType === "labpackage") {
                        errorBookItem.errorPackageavailable = true;
                        errorBookItem.patientsDetails =
                          bookingItem?.patientsDetails;
                        errorBookItem.hospitalDetails =
                          bookingItem?.hospitalDetails;
                      }
                    }
                  );
                }
              }
            }
          });
      }
      bookErrorItems[index] = errorBookItem;
    });

    seterrorBookItems(bookErrorItems);
  };

  const validateOnCartItems = (bookingType: string) => {
    // check cart have any labtest package
    let removecitems = [] as any;

    BookingArray.forEach((bookingItem: any) => {
      if (bookingItem?.categoryType === "labtest") {
        cartItems?.carts?.length &&
          cartItems?.carts.forEach((cartItem: any) => {
            if (
              cartItem?.section_key === "labtest" &&
              bookingItem?.patientsDetails?.id === cartItem?.user?.id
            ) {
              if (
                bookingItem?.hospitalDetails?.id !== Number(cartItem?.vendor_id)
              ) {
                removecitems.push({ ...cartItem });
              } else {
                if (cartItem?.type === "package_booking") {
                  bookingItem?.doctorDetails?.tests.forEach(
                    (bookTestItem: any) => {
                      if (bookTestItem?.labtestType === "labpackage") {
                        removecitems.push({ ...cartItem });
                      }
                    }
                  );
                }
              }
            }
          });
      }
    });

    if (removecitems?.length > 0) {
      setremoveCartItems(removecitems);
      setconfirmBookingType(bookingType);
      setshowConfirmMessageModel(true);

      setshowConfirmMessageModelText(
        `The User(s) had already booked Tests/Packages in the cart. Are you sure you want to replace the Cart Items?`
      );
    } else {
      continurBookingtoCart(bookingType);
    }
  };

  const handleRemoveAddCart = async () => {
    if (removeCartItems?.length > 0 && confirmBookingType) {
      removeCartItems.forEach(async (removeCartItem: any) => {
        if (removeCartItem?.id)
          await dispatch(deleteCartItemAPI(removeCartItem?.id));
      });
      await dispatch(getCartItemsAPI());
    }
    continurBookingtoCart(confirmBookingType);
  };
  const getPriceForReview = async () => {
    const cName = isOtherBookings ? bookingtype : "doctor";

    // const neList = [] as any;
    // BookingArray.map((itemB: any) => {
    //   neList.push({
    //     ...itemB,
    //     categoryName: cName,
    //   });
    // });
    // await dispatch(handleAddToCartDoctor(neList));

    console.log("BookingArray", BookingArray);
    const neList = [] as any;
    BookingArray.map((ittem: any) => {
      console.log("ittemittem", ittem);
      let testcodes = [] as any;
      let testpackagecode = undefined;
      if (
        ittem.doctorDetails?.tests &&
        ittem.doctorDetails?.tests?.length > 0
      ) {
        ittem.doctorDetails?.tests.forEach((Ddetail: any) => {
          if (Ddetail?.labtestType === "labpackage") {
            testpackagecode = Ddetail?.service_code;
          } else {
            testcodes.push(Ddetail?.service_code);
          }
        });
      }

      let tempObj;
      if (
        (testpackagecode && testpackagecode !== undefined) ||
        testcodes?.length > 0
      ) {
        if (testpackagecode && testpackagecode !== undefined) {
          tempObj = {
            virtual_type: null,
            test_code: undefined,
            package_code: testpackagecode,
            useWallet: true, //false,
            doctor_id: undefined,
            vendor_id:
              ittem?.hospitalDetails?.vendorId || ittem?.hospitalDetails?.id,
            user_id: parseInt(user?.id || ittem?.patientsDetails?.id),
            collection_1_date: ittem?.slot1?.dateStr,
            collection_1_slot: ittem?.slot1?.slot?.slot,
            collection_2_date: ittem?.slot2?.dateStr,
            collection_2_slot: ittem?.slot2?.slot?.slot,
            instant_booking: ittem.expressBook || null,
          };
          neList.push(tempObj);
        }

        if (testcodes?.length > 0) {
          tempObj = {
            virtual_type: null,
            test_codes: testcodes,
            package_code: undefined,
            useWallet: true, //false,
            doctor_id: undefined,
            vendor_id:
              ittem?.hospitalDetails?.vendorId || ittem?.hospitalDetails?.id,
            user_id: parseInt(user?.id || ittem?.patientsDetails?.id),
            collection_1_date: ittem?.slot1?.dateStr,
            collection_1_slot: ittem?.slot1?.slot?.slot,
            collection_2_date: ittem?.slot2?.dateStr,
            collection_2_slot: ittem?.slot2?.slot?.slot,
            instant_booking: ittem.expressBook || null,
          };
          neList.push(tempObj);
        }
      } else {
        tempObj = {
          virtual_type:
            ittem.consultationType === "VIRTUAL_INSTANT"
              ? "instant"
              : ittem.consultationType === "VIRTUAL"
              ? "video"
              : null,
          test_code:
            ittem?.categoryType === "gym"
              ? undefined
              : ittem?.doctorDetails?.service_code
              ? ittem?.doctorDetails?.service_code
              : undefined,
          package_code:
            ittem?.categoryType === "gym"
              ? ittem?.doctorDetails?.service_code
              : undefined,
          useWallet: true, //false,
          doctor_id: ittem?.doctorDetails?.id,
          vendor_id:
            ittem?.hospitalDetails?.vendorId || ittem?.hospitalDetails?.id,
          user_id: parseInt(user?.id || ittem?.patientsDetails?.id),
          collection_1_date: ittem?.slot1?.dateStr,
          collection_1_slot: ittem?.slot1?.slot?.slot,
          collection_2_date: ittem?.slot2?.dateStr,
          collection_2_slot: ittem?.slot2?.slot?.slot,
          instant_booking: ittem.expressBook || null,
        };
        neList.push(tempObj);
      }
    });
    const body1 = {
      services: neList,
    };
    console.log("addtocartBody", body1);
    const resp = (await dispatch(handleGetPriceAPI(body1))) as any;
    console.log("resprespresp", resp);
    if (resp?.payload?.success) {
    } else {
    }
  };
  const continurBookingtoCart = async (bType: any) => {
    const cName = isOtherBookings ? bookingtype : "doctor";

    // const neList = [] as any;
    // BookingArray.map((itemB: any) => {
    //   neList.push({
    //     ...itemB,
    //     categoryName: cName,
    //   });
    // });
    // await dispatch(handleAddToCartDoctor(neList));

    console.log("BookingArray", BookingArray);
    const neList = [] as any;
    BookingArray.map((ittem: any) => {
      console.log("ittemittem", ittem);
      let testcodes = [] as any;
      let testpackagecode = undefined;
      if (
        ittem.doctorDetails?.tests &&
        ittem.doctorDetails?.tests?.length > 0
      ) {
        ittem.doctorDetails?.tests.forEach((Ddetail: any) => {
          if (Ddetail?.labtestType === "labpackage") {
            testpackagecode = Ddetail?.service_code;
          } else {
            testcodes.push(Ddetail?.service_code);
          }
        });
      }

      let tempObj;
      if (
        (testpackagecode && testpackagecode !== undefined) ||
        testcodes?.length > 0
      ) {
        if (testpackagecode && testpackagecode !== undefined) {
          tempObj = {
            virtual_type: null,
            test_code: undefined,
            package_code: testpackagecode,
            useWallet: true, //false,
            doctor_id: undefined,
            vendor_id:
              ittem?.hospitalDetails?.vendorId || ittem?.hospitalDetails?.id,
            address_id: ittem?.address?.id,
            user_id: parseInt(user?.id || ittem?.patientsDetails?.id),
            collection_1_date: ittem?.slot1?.dateStr,
            collection_1_slot: ittem?.slot1?.slot?.slot,
            collection_2_date: ittem?.slot2?.dateStr,
            collection_2_slot: ittem?.slot2?.slot?.slot,
            attachment_ids: getAttachmentIds(cName),
            section_key: cName,
            instant_booking: ittem.expressBook,
          };
          neList.push(tempObj);
        }

        if (testcodes?.length > 0) {
          tempObj = {
            virtual_type: null,
            test_codes: testcodes,
            package_code: undefined,
            useWallet: true, //false,
            doctor_id: undefined,
            vendor_id:
              ittem?.hospitalDetails?.vendorId || ittem?.hospitalDetails?.id,
            address_id: ittem?.address?.id,
            user_id: parseInt(user?.id || ittem?.patientsDetails?.id),
            collection_1_date: ittem?.slot1?.dateStr,
            collection_1_slot: ittem?.slot1?.slot?.slot,
            collection_2_date: ittem?.slot2?.dateStr,
            collection_2_slot: ittem?.slot2?.slot?.slot,
            attachment_ids: getAttachmentIds(cName),
            section_key: cName,
            instant_booking: ittem.expressBook,
          };
          neList.push(tempObj);
        }
      } else {
        tempObj = {
          virtual_type:
            ittem.consultationType === "VIRTUAL_INSTANT"
              ? "instant"
              : ittem.consultationType === "VIRTUAL"
              ? "video"
              : ittem.consultationType === "inhouse"
              ? "inhouse"
              : null,
          test_code: ittem?.doctorDetails?.service_code
            ? ittem?.doctorDetails?.service_code
            : undefined,
          package_code: undefined,
          useWallet: true, //false,
          doctor_id: ittem?.doctorDetails?.id,
          vendor_id:
            ittem?.hospitalDetails?.vendorId || ittem?.hospitalDetails?.id,
          address_id: ittem?.address?.id,
          user_id: parseInt(user?.id || ittem?.patientsDetails?.id),
          collection_1_date: ittem?.slot1?.dateStr,
          collection_1_slot: ittem?.slot1?.slot?.slot,
          collection_2_date: ittem?.slot2?.dateStr,
          collection_2_slot: ittem?.slot2?.slot?.slot,
          attachment_ids: getAttachmentIds(cName),
          section_key: cName,
        };
        neList.push(tempObj);
      }
    });
    const body1 = {
      carts: neList,
    };
    const resp = (await dispatch(handleAddToCartAPI(body1))) as any;
    console.log("resprespresp", resp);
    if (resp?.payload?.success) {
      handleAddCartSuccess(bType);
    } else {
      setshowBookingErrorMessage(`Error: ${resp?.error?.message}`);
    }
  };

  const handleAddCartSuccess = async (bType: any) => {
    await dispatch(getCartItemsAPI());
    await dispatch(resetBookingArray({}));
    if (bType === "booknow") {
      history.push("/checkout");
    } else {
      history.goBack();
    }
  };

  const isLabTestValid = (item: any) => {
    let isLabtestValid = true;
    let isTestAvailable =
      item?.doctorDetails !== undefined &&
      item?.doctorDetails?.tests &&
      item?.doctorDetails?.tests?.length > 0;
    if (isTestAvailable) {
      item?.doctorDetails?.tests.forEach((item1: any) => {
        if (
          item1?.visit_type &&
          item1?.visit_type === "home" &&
          !item?.address?.id
        ) {
          isLabtestValid = false;
        }
      });
    }
    return isLabtestValid && isTestAvailable;
  };
  const isAddressValid = (item: any) => {
    return (
      item?.doctorDetails?.visit_type !== "home" ||
      (item?.doctorDetails?.visit_type === "home" && item?.address?.id)
    );
  };
  const isDoctorObjValid = (item: any) => {
    let isOPD =
      item.consultationType === "OPD" && item?.hospitalDetails?.vendorId;
    let isVirtual =
      item.consultationType !== "OPD" &&
      (item?.hospitalDetails?.id ||
        item.consultationType === "VIRTUAL" ||
        item.consultationType === "VIRTUAL_INSTANT" ||
        item.consultationType === "inhouse" ||
        item.consultationType === "CHAT");
    return isOPD || isVirtual;
  };
  const isValidateBookings = () => {
    const isOtherItemsValid = (item: any) => {
      return item?.doctorDetails?.id || item?.doctorDetails?.service_code;
    };

    const isDateAndTimeValid = (item: any) => {
      if (item.expressBook) return true;
      else if (item.consultationType === "VIRTUAL_INSTANT") return true;
      else
        return (
          item?.slot1?.dateStr &&
          (timeSlotEnabled ? item?.slot1?.slot?.slot : true)
        );
    };

    const isDependentValid = (item: any) => {
      return item?.patientsDetails?.id;
    };

    let isValid = false;
    console.log("expressbookingarray", BookingArray);
    BookingArray.forEach((itemB: any) => {
      if (!itemB.address) {
        isValid = false;
        setShowErrorMessage(true);
      } else if (itemB?.doctorDetails !== undefined) {
        let isCommonMandatoryFieldsValid =
          isAddressValid(itemB) &&
          isDateAndTimeValid(itemB) &&
          isDependentValid(itemB);
        let isCategorySpecificObjValid = false;
        switch (bookingtype) {
          case "labtest":
            isCategorySpecificObjValid = isLabTestValid(itemB);
            break;
          case "doctor":
            isCategorySpecificObjValid = isDoctorObjValid(itemB);
            break;
          case "gym":
          case "eyecare":
          case "dentalcare":
          case "domiciliarycare":
          case "ctmri":
            isCategorySpecificObjValid = isOtherItemsValid(itemB);
            break;
          default:
            isCategorySpecificObjValid = isOtherItemsValid(itemB);
            break;
        }
        if (isCommonMandatoryFieldsValid && isCategorySpecificObjValid) {
          isValid = true;
          setShowErrorMessage(false);
        } else {
          isValid = false;
          setShowErrorMessage(true);
        }
      } else {
        isValid = false;
        setShowErrorMessage(true);
      }
    });
    return isValid;
  };
  const selectSavedAddress = (address: any, index: any) => {
    handleAddAddressItem(address, index);
  };

  const Capitalize = (str: String) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const getExpressBookAmountByAPI = (itemObj: any, index: any) => {
    if (priceinfo && priceinfo?.length && priceinfo[index]?.price) {
      return priceinfo[index]?.price?.instant_booking_fees;
    } else {
      return 0.0;
    }
  };
  const getConsultationCostByAPI = (
    doctorObj: any,
    consulttype: any,
    otherBooking: boolean,
    otherBookingType: String,
    isApplyDiscount: boolean,
    isexpressBook: boolean,
    index: any
  ) => {
    if (priceinfo && priceinfo?.length && priceinfo[index]?.price) {
      return priceinfo[index]?.price?.actual_cost;
    } else {
      return 0.0;
    }
  };
  const getDiscountedPriceByAPI = (bookingObj: any, index: any) => {
    if (priceinfo && priceinfo?.length && priceinfo[index]?.price) {
      return (
        priceinfo[index].price.actual_cost -
        priceinfo[index].price.discounted_price
      );
    } else {
      return 0.0;
    }
  };
  const getTotalAmountByAPI = (
    item: any,
    otherBooking: boolean,
    otherBookingType: String,
    isApplyDiscount: boolean,
    index: any
  ) => {
    if (priceinfo && priceinfo?.length && priceinfo[index]?.price) {
      console.log(
        "priceinfo[index]?.price.final_cost",
        priceinfo[index]?.price.final_cost
      );
      return priceinfo[index]?.price.final_cost || 0.0;
    } else {
      return 0.0;
    }
  };
  const getTotalAmount = (
    item: any,
    otherBooking: boolean,
    otherBookingType: String,
    isApplyDiscount: boolean,
    index: any
  ) => {
    return (
      getConsultationCost(
        item?.doctorDetails,
        item?.consultationType,
        isOtherBookings,
        "actual_cost",
        isApplyDiscount,
        item?.expressBook
      ) -
      // Discount
      parseFloat(
        !isApplyDiscount
          ? "0.00"
          : isOtherBookings
          ? getDiscountedPrice(item?.doctorDetails)?.toFixed(2)
          : bookingtype === "doctor"
          ? getDiscountedPrice(item)?.toFixed(2)
          : "0.00"
      )
    );
  };
  const getExpressBookAmount = (itemObj: any) => {
    return itemObj?.expressBook ? 99 : 0;
  };

  const getConsultationCost = (
    doctorObj: any,
    consulttype: any,
    otherBooking: boolean,
    otherBookingType: String,
    isApplyDiscount: boolean,
    isexpressBook: boolean
  ) => {
    if (otherBooking) {
      if (
        bookingtype === "labtest" &&
        doctorObj?.tests &&
        doctorObj?.tests?.length > 0
      ) {
        let actual_cost = 0;
        doctorObj?.tests.forEach((Ddetail: any) => {
          if (isObject(Ddetail) && Ddetail?.price) {
            actual_cost +=
              otherBookingType === "actual_cost"
                ? Ddetail?.price?.actual_cost
                : isApplyDiscount
                ? Ddetail?.price?.discounted_price
                : Ddetail?.price?.actual_cost;
          }
        });

        if (isexpressBook) {
          actual_cost += 99;
        }

        return actual_cost;
      } else {
        return otherBookingType === "actual_cost"
          ? doctorObj?.price?.actual_cost
          : isApplyDiscount
          ? doctorObj?.price?.discounted_price
          : doctorObj?.price?.actual_cost;
      }
    } else {
      if (consulttype === "OPD") return doctorObj?.consultation_cost || 0;
      else if (consulttype === "CHAT")
        return doctorObj?.chat_consultation_cost || 0;
      else return doctorObj?.virtual_consultation_cost || 0;
    }
  };

  const getDiscountedPrice = (bookingObj: any) => {
    if (
      bookingtype === "labtest" &&
      bookingObj?.tests &&
      bookingObj?.tests?.length > 0
    ) {
      let discounted_price = 0;
      bookingObj?.tests.forEach((bookDetail: any) => {
        if (isObject(bookDetail) && bookDetail?.price) {
          discounted_price +=
            bookDetail?.price?.actual_cost -
            bookDetail?.price?.discounted_price;
        }
      });
      return discounted_price;
    } else if (bookingtype === "domiciliarycare") {
      if (bookingObj?.service_code === "dc01") {
        // discount for short term nursing care
        return 0.2 * bookingObj?.price?.actual_cost;
      }
      if (bookingObj?.service_code === "dc02") {
        // discount for visiting care
        return 0.5 * bookingObj?.price?.actual_cost;
      }
      if (bookingObj?.service_code === "dc03") {
        // discount for physiotherapy
        return 0.3 * bookingObj?.price?.actual_cost;
      } else return 0;
    } else {
      if (bookingObj?.doctorDetails?.price) {
        return (
          bookingObj?.doctorDetails?.price?.actual_cost -
          bookingObj?.doctorDetails?.price?.discounted_price
        );
      } else {
        return 0;
      }
    }
  };
  console.log("isOtherBookings", isOtherBookings);
  const handlePatientHistoryClick = async () => {
    if (isValidateBookings()) {
      setShowPatientHistory(true);
    }
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

      <CustomModal
        show={showConfirmMessageModel}
        titleText={showConfirmMessageModelText}
        deleteText="Confirm"
        cancelText="Cancel"
        onCancel={() => {
          setshowConfirmMessageModel(false);
        }}
        onDelete={() => {
          setshowConfirmMessageModel(false);
          handleRemoveAddCart();
        }}
      />
      <div className="container-max">
        <div className="bookingContainer">
          <button
            className="bookingBtnwrap inlineflex_center"
            onClick={() => history.goBack()}
          >
            <div className="back-icon inlineflex_center">
              <Back />
            </div>
            <div className="back-text poppins-medium text-sm">Back</div>
          </button>

          <div className="bookinglistcontainer">
            <div className="title poppins-semibold opacity-50">
              Patient Details & Select Time Slot
            </div>

            <div className="bookinglistwrap">
              {BookingArray && BookingArray?.length > 0 && (
                <div className="bookinglist">
                  <div className="bookingItems inlineflex_start flexdirection_col">
                    {BookingArray?.map((item: any, index: any) => {
                      const isApplyDiscount =
                        item.patientsDetails?.relation === "Self"
                          ? true
                          : item.doctorDetails?.price?.discount_for_dependents
                          ? true
                          : false;
                      console.log("expressBook : ", item.expressBook);
                      const isExpressBookingAvailable = item.expressBook;

                      const tcode1 =
                        item?.doctorDetails?.tests?.[0]?.service_code;
                      console.log("tcode1", tcode1);
                      return (
                        <>
                          <div className="bookingItem flex_center round-shadow">
                            {errorBookItems &&
                              errorBookItems?.length > 0 &&
                              errorBookItems[index] && (
                                <div className="labtest_error">
                                  {errorBookItems[index].errorLabchange && (
                                    <p className="error_text">
                                      The Patient
                                      {errorBookItems[index]?.patientsDetails
                                        ?.first_name
                                        ? "(" +
                                          errorBookItems[index]?.patientsDetails
                                            ?.first_name +
                                          ")"
                                        : ""}{" "}
                                      already had Tests/Packages from `
                                      {errorBookItems[index]?.hospitalDetails
                                        ?.name
                                        ? errorBookItems[index]?.hospitalDetails
                                            ?.name
                                        : "another Lab"}
                                      ` in the cart.
                                    </p>
                                  )}
                                  {errorBookItems[index]
                                    .errorPackageavailable && (
                                    <p className="error_text">
                                      The Patient
                                      {errorBookItems[index]?.patientsDetails
                                        ?.first_name
                                        ? "(" +
                                          errorBookItems[index]?.patientsDetails
                                            ?.first_name +
                                          ")"
                                        : ""}{" "}
                                      already had One Package from `
                                      {errorBookItems[index]?.hospitalDetails
                                        ?.name
                                        ? errorBookItems[index]?.hospitalDetails
                                            ?.name
                                        : "Same Lab"}
                                      ` in the cart.
                                    </p>
                                  )}
                                </div>
                              )}
                            <CloseButton
                              className="removeBookingItem"
                              onClick={(e) => handleRemoveBookingItem(index)}
                            />
                            {displaySelectedProfile(
                              item.patientsDetails,
                              index,
                              item.address,
                              item.doctorDetails
                            )}
                            <div className="doctor-divider-profile"></div>

                            <div className="doctor-container">
                              {isOtherBookings ? (
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
                                    tcode1={tcode1}
                                    updateBookingSlot1={callUpdateBookingSlot1}
                                    updateBookingSlot2={callUpdateBookingSlot2}
                                    customUpdateSlot1={customUpdateSlot1}
                                    slotSelectionEnabled={
                                      timeSlotEnabled &&
                                      !isExpressBookingAvailable
                                    }
                                    expressBook={isExpressBookingAvailable}
                                    consultationType={item?.consultationType}
                                    consultation={
                                      isOtherBookings
                                        ? "Select Your Preferred Slot"
                                        : item?.consultationType === "OPD"
                                        ? "Select Your OPD Consultation Slot"
                                        : item?.consultationType === "CHAT"
                                        ? "Select Your Chat Consultation Slot"
                                        : "Select Your Virtual Consultation Slot"
                                    }
                                  />
                                }
                                {showErrorMessage &&
                                  !item?.expressBook &&
                                  (!item?.slot1?.dateStr ||
                                    (timeSlotEnabled &&
                                      !item?.slot1?.slot?.slot)) && (
                                    <p className="error_message">
                                      {" "}
                                      Please Select the Time Slot Details
                                    </p>
                                  )}
                              </div>

                              <div className="price-container inlineflex_start flexdirection_col">
                                {subDomainDetails?.agreed_services
                                  ?.hide_price ? (
                                  <div className="total-value flex_wrapbetween poppins-semibold">
                                    <span className="price-text">
                                      Total Price
                                    </span>
                                    <span className="price-value">
                                      <MdOutlineCurrencyRupee /> 0.00
                                    </span>
                                  </div>
                                ) : (
                                  <>
                                    <div className="original-value flex_wrapbetween poppins-regular">
                                      <span className="price-text">Price</span>
                                      <span className="price-value">
                                        <MdOutlineCurrencyRupee />{" "}
                                        {getConsultationCostByAPI(
                                          item?.doctorDetails,
                                          item?.consultationType,
                                          isOtherBookings,
                                          "actual_cost",
                                          isApplyDiscount,
                                          false,
                                          index
                                        )?.toFixed(2) ?? "0.00"}
                                      </span>
                                    </div>
                                    <div className="discount-value flex_wrapbetween poppins-regular">
                                      <span className="price-text ">
                                        Discount
                                      </span>
                                      <span className="price-value">
                                        <MdOutlineCurrencyRupee />{" "}
                                        {!isApplyDiscount
                                          ? 0
                                          : isOtherBookings
                                          ? getDiscountedPriceByAPI(
                                              item?.doctorDetails,
                                              index
                                            )?.toFixed(2)
                                          : bookingtype === "doctor"
                                          ? getDiscountedPriceByAPI(
                                              item,
                                              index
                                            )?.toFixed(2)
                                          : "0.00"}
                                      </span>
                                    </div>
                                    {item.expressBook && (
                                      <div className="original-value expressbook-value flex_wrapbetween poppins-regular">
                                        <span className="price-text">
                                          Express Booking Price
                                        </span>
                                        <span className="price-value">
                                          <MdOutlineCurrencyRupee />{" "}
                                          {getExpressBookAmountByAPI(
                                            item,
                                            index
                                          )?.toFixed(2)}
                                        </span>
                                      </div>
                                    )}
                                    <div className="total-value flex_wrapbetween poppins-semibold">
                                      <span className="price-text">
                                        Total Price
                                      </span>
                                      <span className="price-value">
                                        <MdOutlineCurrencyRupee />{" "}
                                        {getTotalAmountByAPI(
                                          item,
                                          isOtherBookings,
                                          "actual_cost",
                                          isApplyDiscount,
                                          index
                                        )?.toFixed(2)}
                                      </span>
                                    </div>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </>
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
            <button onClick={handleAddtoCart} className="secoundary-button">
              Add To Cart
            </button>
            <button onClick={handleBookNow} className="primary-button">
              Book Now
            </button>
          </div>

          {showBookingErrorMessage && showBookingErrorMessage !== "" && (
            <div className="booking-error-text">{showBookingErrorMessage}</div>
          )}
        </div>
      </div>
    </BookingReviewstyled>
  );
};

export default BookingReview;
