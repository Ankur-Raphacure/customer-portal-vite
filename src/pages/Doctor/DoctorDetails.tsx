import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosStar,
  IoMdAddCircleOutline,
} from "react-icons/io";
import { DoctorDetailsStyled } from "./DoctorDetails.styled";
import BreadCrumbModule from "../Pharmacy/BreadCrumbModule";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import ContentLoaderSection from "./../../components/ContentLoaderSection/ContentLoaderSection";
import { useHistory, useLocation, useParams } from "react-router-dom";
import {
  getDoctorDetailAPI,
  getDoctorRelatedHospitalAPI,
  getTimeslotsAPI,
} from "../../redux/slices/doctor/doctorService";
import { useDispatch, useSelector } from "react-redux";
import { resetBookingArray } from "../../redux/slices/bookingScreen/bookingScreenSlice";
import Button from "react-bootstrap/Button";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { getAttachmentIds } from "../../Scenes/common";
import {
  getCartItemsAPI,
  handleAddToCartAPI,
} from "../../redux/slices/checkout/checkoutService";
import {
  getMyAddressQueryAPI,
  getUserWithDependentsAPI,
} from "../../redux/slices/Profile/ProfileService";
import { Accordion, Dropdown, DropdownButton, Modal } from "react-bootstrap";
import { Dropdown as DropdownAntd } from "antd";
import { FiEdit2 } from "react-icons/fi";
import { FaPen } from "react-icons/fa6";
import { updateShowLoginModel } from "../../redux/slices/auth/authSlice";

import AddNewAddress from "../../components/AddNewAddress/AddNewAddress";
import CustomModal from "../../components/CustomModel";
import AddNewMember from "../../components/AddNewMember/AddNewMember";
import TimeWithGraph from "./TimeWithGraph";
import ShareModal from "../../components/ShareModal/ShareModal";
import { GoShareAndroid } from "react-icons/go";
import { generateDates } from "./../../Scenes/common";
import MobileHeader from "../../components/Header/MobileHeader";
import virtualIcon from "../../assets/images/virtual.svg";
import clinicIcon from "../../assets/images/clinic.svg";
interface TimeSlot {
  time: string;
  isAvailable: boolean;
}

interface DaySlot {
  date: string;
  slots: TimeSlot[];
}

interface Day {
  date: string;
  slots: { time: string; isAvailable: boolean }[];
}
const defaultDoctImage =
  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/1732785725785EMTYDOCTORIMAGE.png-1732785730293.png";
const defaultUserImage =
  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1737528180590.png";
const DoctorDetails = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams<any>();

  const location = useLocation();
  const { type, selectedHospital } = (location.state || {}) as any;
  const [activeTab, setActiveTab] = useState("Info");
  const [isTooltipVisible, setIsTooltipVisible] = useState(null);
  const [isVirtual, setIsVirtual] = useState<any | "">("VIRTUAL");
  const [selectedSlot, setSelectedSlot] = useState<any | null>([] as any);
  const [selectedSlot1, setSelectedSlot1] = useState<any | null>("" as any);
  const [selectedSlot2, setSelectedSlot2] = useState<any | null>("" as any);
  const [selectedDateForSlot, setSelectedDateForSlot] = useState<any | null>(
    "" as any,
  );
  const [days, setDays] = useState<DaySlot[]>([]);
  const [selectedDay, setSelectedDay] = useState<number>(0);
  const [selectedTimeslots, setSelectedTimeslots] = useState<any>({});
  const [preferredSlotShow, setPreferredSlotShow] = useState(true);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [isSecondSlot, setIsSecondSlot] = useState(false);
  const [showBookingErrorMessage, setshowBookingErrorMessage] = useState("");
  const [selectedClinic, setSelectedClinic] = useState<any>({});
  const [changeClinicPopUp, setChangeClinicPopUp] = useState(true);

  const { doctorDetailList, allDoctorRelatedHospitalList, allTimeslotsIList } =
    useSelector((ReduxState: any) => ReduxState.doctor);
  const vendorId = allDoctorRelatedHospitalList?.[0]?.vendor?.id;
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);
  const { userAddress, userDependents, dependentsData, dependentsUserData } =
    useSelector((ReduxState: any) => ReduxState.profile);
  console.log("allDoctorRelatedHospitalList", allDoctorRelatedHospitalList);
  const doctorDetails = doctorDetailList?.data?.doctorDetails;
  const possibleTypes =
    doctorDetailList?.data?.possibleTypes?.length > 0
      ? doctorDetailList?.data?.possibleTypes
      : [doctorDetails?.type];
  console.log("doctorDetails", doctorDetails);
  const [showSelectedMember, setShowSelectedMember] = useState(false);
  const handleCloseSelectedMember = () => setShowSelectedMember(false);
  const handleShowSelectedMember = () => setShowSelectedMember(true);
  const [selectedAddress, setSelectedAddress] = useState({} as any);
  const [showAddAddressModel, setShowAddAddressModel] = useState(false);
  const [showSuccessUserPopup, setShowSuccessUserPopup] = useState(false);
  const [showSuccessUserPopupText, setShowSuccessUserPopupText] = useState("");
  const [showAddMemberModel, setShowAddMemberModel] = useState(false);
  const [selectedMember, setSelectedMember] = useState<any>({});
  const [selectedUserData, setSelectedUserData] = useState<any>({});
  const [openShareModel, setOpenShareModel] = useState<any>(false);
  const [selectedVirtualType, setSelectedVirtualType] = useState<any>("opd");

  // useEffect(() => {
  //   console.log("possibleTypes", possibleTypes);

  //   if (possibleTypes?.length > 0) {
  //     setSelectedVirtualType(possibleTypes[0]);
  //     setIsVirtual(possibleTypes[0] === "opd" ? "IN_CLINIC" : "VIRTUAL");
  //   }
  // }, [possibleTypes]);
  useEffect(() => {
    if (user?.id) {
      setSelectedUserData(user);
    }
  }, [user]);

  useEffect(() => {
    const formattedDates = generateDates();
    console.log("selectedClinic", selectedClinic);
    console.log("selectedVirtualType", selectedVirtualType);
    console.log("formattedDates", formattedDates);
    if (formattedDates.length > 0) {
      const body: any = {
        doctor_id: id,
        type: selectedVirtualType,
        vendor_id:
          isVirtual === "VIRTUAL"
            ? undefined
            : selectedClinic?.vendor?.id || selectedClinic?.vendor_id,
        body: {
          dates: formattedDates,
        },
      };
      dispatch(getTimeslotsAPI(body));
    }
  }, [selectedVirtualType, selectedClinic, isVirtual]);
  // useEffect(() => {
  //   dispatch(getMyAddressQueryAPI());
  //   dispatch(getUserWithDependentsAPI());
  // }, []);
  useEffect(() => {
    getAllDoctorsList();
    getDoctorRelatedHospitalList();
  }, [id]);
  useEffect(() => {
    if (allDoctorRelatedHospitalList.length > 0) {
      setSelectedClinic(allDoctorRelatedHospitalList[0]);
    }
  }, [allDoctorRelatedHospitalList]);

  const list = [
    {
      title: "Doctor",
      link: `/doctor`,
    },
    {
      title: "Doctor List",
      link: `/doctor/doctorlist`,
    },
    {
      title: doctorDetails?.name,
    },
  ];
  const daySelectorRef = useRef<HTMLDivElement>(null);
  const scrollLeft = () => {
    if (daySelectorRef.current) {
      daySelectorRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    if (daySelectorRef.current) {
      daySelectorRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };
  const handleSlotSelection = (time: string) => {
    if (isSecondSlot) {
      setSelectedSlot2(`${selectedDateForSlot}_${time}`);
    } else {
      setSelectedSlot1(`${selectedDateForSlot}_${time}`);
    }
    setPreferredSlotShow(false);
  };
  const handleMouseEnter = (id: any) => {
    setIsTooltipVisible(id);
  };
  const handleMouseLeave = () => {
    setIsTooltipVisible(null);
  };
  const Banner = ({ rating }: any) => {
    return (
      <div className="bannerWrapper">
        <div className="rectangle">
          <IoIosStar fill="#252B61" className="me-2" /> {rating}
        </div>
        <div className="triangle"></div>
      </div>
    );
  };

  const getAllDoctorsList = async () => {
    setIsPageLoading(true);
    const resp = (await dispatch(getDoctorDetailAPI(id))) as any;
    const possTypes = resp?.payload?.data?.possibleTypes;
    if (possTypes?.length > 0) {
      setSelectedVirtualType(possTypes[0]);
      setIsVirtual(possTypes[0] === "opd" ? "IN_CLINIC" : "VIRTUAL");
    }
    setIsPageLoading(false);
  };
  const getDoctorRelatedHospitalList = async () => {
    await dispatch(getDoctorRelatedHospitalAPI(id));
  };
  const address: any = useMemo(() => {
    let addr = "";
    userAddress?.map((address: any) => {
      if (address?.isDefault) {
        addr = address;
      }
    });
    return addr;
  }, [userAddress]);
  const vendorsId: any = useMemo(() => {
    let vendor_id = "";
    selectedHospital?.map((vendor: any) => {
      if (vendor) {
        vendor_id = vendor;
      }
    });
    return vendor_id;
  }, [selectedHospital]);
  const handleDayChange = (index: number, day: any) => {
    setSelectedDay(index);
    const selectedTimeslots = allTimeslotsIList[index]?.timeslots || [];
    setSelectedTimeslots(selectedTimeslots);
    setSelectedDateForSlot(day?.date);
  };

  const continurBookingtoCart = async (bType: any) => {
    try {
      const neList = [] as any;

      const tempObj = {
        virtual_type:
          selectedVirtualType === "opd" ? null : selectedVirtualType,
        package_code: undefined,
        useWallet: true,
        doctor_id: doctorDetails?.id,
        vendor_id:
          isVirtual === "VIRTUAL"
            ? undefined
            : selectedClinic?.vendor?.id || selectedClinic?.vendor_id,
        address_id: address?.id,
        user_id: parseInt(selectedUserData?.id),
        collection_1_date: selectedSlot1 ? selectedSlot1?.split("_")[0] : null,
        collection_1_slot: selectedSlot1 ? selectedSlot1?.split("_")[1] : null,
        collection_2_date: selectedSlot2 ? selectedSlot2?.split("_")[0] : null,
        collection_2_slot: selectedSlot2 ? selectedSlot2?.split("_")[1] : null,
        attachment_ids: getAttachmentIds("doctor"),
        section_key: "doctor",
      };
      neList.push(tempObj);

      const body1 = {
        carts: neList,
      };
      const resp: any = await dispatch(handleAddToCartAPI(body1));
      if (resp?.payload?.success) {
        handleAddCartSuccess(bType);
      } else {
        setshowBookingErrorMessage(`Error: ${resp?.error?.message}`);
      }
    } catch (error) {
      console.log(error);
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
  const handleBookNow = () => {
    if (user?.id) {
      continurBookingtoCart("booknow");
    } else {
      dispatch(updateShowLoginModel(true));
    }
  };
  const handleEditAddress = (userInfo: any) => {
    setSelectedAddress(userInfo);
    setShowAddAddressModel(true);
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
  const handleAddNewMember = () => {
    setShowAddMemberModel(true);
    setSelectedMember({});
  };
  const addUserSuccess = () => {
    setShowAddMemberModel(false);
    dispatch(getUserWithDependentsAPI());
    setShowSuccessUserPopup(true);
    const addSucTet = selectedMember?.id
      ? `Successfully Updated the Member.`
      : `Successfully Added the new Member.`;
    setShowSuccessUserPopupText(addSucTet);
  };
  const handleToSelectUser = (item: any) => {
    setSelectedUserData(item);
    setShowSelectedMember(false);
  };
  const shareURL = window.location.href;

  useEffect(() => {
    if (allTimeslotsIList && allTimeslotsIList.length > 0) {
      const today = new Date();
      const format = (num: number) => (num <= 9 ? `0${num}` : num);
      const todayDate = `${format(today.getFullYear())}-${format(
        today.getMonth() + 1,
      )}-${format(today.getDate())}`;
      const todayIndex = allTimeslotsIList.findIndex(
        (day: any) => day.total_slots > 0,
      );
      // const todayIndex = allTimeslotsIList.findIndex(
      //   (day: any) => day.date === todayDate
      // );
      // const firstIndex = data.findIndex((item) => item.total_slots > 0);
      if (todayIndex !== -1) {
        setSelectedDay(todayIndex);
        const selectedTimeslots =
          allTimeslotsIList[todayIndex]?.timeslots || [];
        setSelectedTimeslots(selectedTimeslots);
        // setDays(allTimeslotsIList[todayIndex]?.date);
        setSelectedDateForSlot(allTimeslotsIList[todayIndex]?.date);
      }
    }
  }, [allTimeslotsIList]);

  const handleSelectSlot = (item: any, isSeloeF: any) => {
    setPreferredSlotShow(true);
    setIsSecondSlot(isSeloeF);
  };
  const handleClinickCheck = (clinicD: any) => {
    setSelectedClinic(clinicD);
    setChangeClinicPopUp(false);
  };
  function reverseDateFormat(dateStr: any) {
    const [year, month, day] = dateStr.split("-");
    return `${day}-${month}-${year}`;
  }
  const SlotesSelection = (props: any) => {
    const { slots } = props;
    return (
      <>
        {slots?.length > 0 ? (
          <div className="time-slots-div">
            {slots &&
              Array.isArray(slots) &&
              slots?.map((slot: any, idx: any) => {
                return (
                  <button
                    key={idx}
                    className={`slot-button ${slot ? "" : "disabled"} ${
                      selectedSlot === slot ? "selected" : ""
                    }`}
                    onClick={() => handleSlotSelection(slot)}
                  >
                    {slot}
                  </button>
                );
              })}
          </div>
        ) : (
          <>
            {selectedDateForSlot?.length > 0 ? (
              <div className="time-slot-Available-warning">
                <p>No Time Slots Available</p>
              </div>
            ) : (
              <div className="time-slot-Available-warning">
                <p>Select Date</p>
              </div>
            )}
          </>
        )}
      </>
    );
  };
  const formatNumber = (num: number) => String(num).padStart(2, "0");
  const formatDate = (date: Date) =>
    `${date.getFullYear()}-${formatNumber(date.getMonth() + 1)}-${formatNumber(
      date.getDate(),
    )}`;

  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const formattedToday = formatDate(today);
  const formattedTomorrow = formatDate(tomorrow);
  const totalSlots = allTimeslotsIList?.reduce(
    (sum: any, day: any) => sum + day.total_slots,
    0,
  );

  return (
    <DoctorDetailsStyled>
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
      <ShareModal
        show={openShareModel}
        url={shareURL}
        title="Share on"
        handleClose={() => {
          setOpenShareModel(false);
        }}
        onCopyClick={() => {
          navigator.clipboard.writeText(shareURL);
        }}
      />
      {isPageLoading ? (
        <ContentLoaderSection fromPage="doctorDetails" />
      ) : (
        <div className="doc-details-div">
          <div className="bread-crumb-div">
            <BreadCrumbModule list={list} />
          </div>
          <div className="main-container">
            <div className="left-side">
              <div className="cardContainer">
                <div className="header">
                  <div className="profileContainer">
                    <div className="d-flex align-items-center">
                      <div className="profile">
                        <Banner rating={Math.round(doctorDetails?.rating)} />
                        <img
                          src={doctorDetails?.image || defaultDoctImage}
                          alt="Doctor Profile"
                          className="profileImage doctor-main-image-sec"
                        />
                        <div className="exp experience-web-view">
                          <img
                            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735651541375.png"
                            alt=""
                          />
                          <span className="experience ">
                            {doctorDetails?.work_experience_years}+ Years
                            Experience
                          </span>
                        </div>
                      </div>
                      <div className="name-mobile-view ms-2">
                        <h2 className="name ">{doctorDetails?.name}</h2>
                        <p className="title ">
                          {doctorDetails?.specialization}
                        </p>
                      </div>
                    </div>
                    <div className="info">
                      <div className="d-flex justify-content-between align-items-center ">
                        <h2 className="name name-web-view">
                          {doctorDetails?.name}
                        </h2>
                        <button
                          onClick={() => {
                            setOpenShareModel(true);
                          }}
                          className="btn share-btn-icon share-btn-icon-web-view"
                          title="Click to Share"
                        >
                          <GoShareAndroid />
                        </button>
                      </div>
                      <p className="title title-web-view">
                        {doctorDetails?.specialization}
                      </p>
                      {doctorDetails?.highest_education && (
                        <div className="qua">
                          <img
                            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735889830917.png"
                            alt=""
                          />
                          <p className="qualifications">
                            {doctorDetails?.highest_education}
                          </p>
                        </div>
                      )}

                      {doctorDetails?.work_experience_years && (
                        <div className="lang lang-mobile-view">
                          <img
                            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735651541375.png"
                            alt=""
                          />
                          <p className="languages">
                            {doctorDetails?.work_experience_years}+ Years
                            Experience
                          </p>
                        </div>
                      )}

                      {doctorDetails?.languages && (
                        <div className="lang">
                          <img
                            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735652815819.png"
                            alt=""
                          />
                          <p className="languages">
                            {doctorDetails?.languages}
                          </p>
                        </div>
                      )}

                      <div className="veri">
                        <img
                          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735894581102.png"
                          alt=""
                        />
                        <p className="verification">
                          Medical Registration Verified
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="servicesContainer">
                  <div>
                    <h3>Specialization</h3>
                    <div className="serviceListDiv">
                      <ul className="servicesList">
                        <li>{doctorDetails?.specialization}</li>
                      </ul>
                    </div>
                  </div>
                  {doctorDetails?.bio && (
                    <div>
                      <h3>Bio :-</h3>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: doctorDetails?.bio,
                        }}
                      ></div>
                    </div>
                  )}
                  {/* <button className="serviceListAll">View all..</button> */}
                </div>
              </div>
              <div className="hospital-container">
                <div className="tabs">
                  <button
                    className={`tab ${activeTab === "Info" ? "active" : ""}`}
                    onClick={() => setActiveTab("Info")}
                  >
                    Info
                  </button>
                  <button
                    className={`tab ${
                      activeTab === "Consult Q&A" ? "active" : ""
                    }`}
                    onClick={() => setActiveTab("Consult Q&A")}
                  >
                    Consult Q&A
                  </button>
                </div>

                {activeTab === "Info" && (
                  <div className="hospital-list">
                    {Array.isArray(allDoctorRelatedHospitalList) &&
                    allDoctorRelatedHospitalList?.length > 0 ? (
                      allDoctorRelatedHospitalList?.map(
                        (item: any, index: any) => (
                          <div className="hospital-card" key={index}>
                            <div className="hospital-header">
                              <h2 className="hospital-name">
                                {item?.vendor?.name}
                              </h2>
                            </div>
                            <div className="down-part">
                              <div className="left-hospital-side">
                                <div className="hospital-rating">
                                  <span>{item?.vendor?.rating}</span>
                                  <span className="stars">
                                    {"★".repeat(item?.vendor?.rating || 0)}
                                    {"☆".repeat(
                                      5 - (item?.vendor?.rating || 0),
                                    )}
                                  </span>
                                </div>
                                <p className="hospital-address">
                                  {item?.vendor?.address}
                                </p>
                                <p className="hospital-details">
                                  {item?.vendor?.details}
                                </p>
                                <a href="#" className="hospital-directions">
                                  <span>
                                    <img
                                      src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1736000077017.png"
                                      alt=""
                                    />
                                  </span>{" "}
                                  Get Directions
                                </a>
                              </div>
                              <div className="middle">
                                <div className="hospital-timings">
                                  <p>{item?.vendor?.days}</p>
                                  <p>{item?.vendor?.timings}</p>
                                </div>
                              </div>
                              <div className="hospital-footer">
                                <div className="hospital-fee">
                                  <span>{item?.vendor?.fee}</span>
                                  <div
                                    className="info-icon"
                                    onMouseEnter={() =>
                                      handleMouseEnter(item?.vendor?.id)
                                    }
                                    onMouseLeave={handleMouseLeave}
                                  >
                                    i
                                    {isTooltipVisible === item?.vendor?.id && (
                                      <div className="detailTooltip">
                                        <strong>
                                          This fee is indicative and might vary.
                                        </strong>
                                        <br />
                                        <span>
                                          NOTE: Fees are payable at the clinic.
                                          There are NO charges for booking an
                                          appointment.
                                        </span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="footer-part">
                              <div className="hospital-images">
                                {item?.vendor?.images &&
                                  item?.vendor?.images?.map(
                                    (image: any, imgIndex: number) => (
                                      <img
                                        src={image}
                                        alt={`Hospital ${index + 1} - ${
                                          imgIndex + 1
                                        }`}
                                        key={imgIndex}
                                        className="hospital-image"
                                      />
                                    ),
                                  )}
                              </div>
                              <div>
                                <button className="call-now-button mb-2">
                                  Call Now
                                </button>
                              </div>
                            </div>
                          </div>
                        ),
                      )
                    ) : (
                      <div className="vendors-warning-msg">
                        <p>No vendors available</p>
                      </div>
                    )}
                  </div>
                )}
                {activeTab === "Consult Q&A" && (
                  <div className="free-question-card">
                    <div className="icon-section">
                      <img
                        src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735999749446.png"
                        alt="Query Icon"
                        className="query-icon"
                      />
                    </div>
                    <p className="info-text">
                      No query answered by this doctor. Get <br />
                      answers <br />
                      to your health queries now
                    </p>
                    <button
                      className="ask-button"
                      onClick={() => history.push("/chat")}
                    >
                      Ask Free Question
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="right-side">
              <div className="user-add-picker">
                <img
                  src={selectedUserData?.image || defaultUserImage}
                  alt="user_Image"
                />
                <div className="user-data">
                  {selectedUserData?.relation &&
                    selectedUserData?.first_name && (
                      <>
                        {selectedUserData?.first_name}{" "}
                        {selectedUserData?.last_name} (
                        {selectedUserData?.relation})
                      </>
                    )}
                  {address?.address && (
                    <p>
                      <span> {address?.address}</span>
                    </p>
                  )}
                </div>

                {user?.id ? (
                  <button className="btn" onClick={handleShowSelectedMember}>
                    Change
                  </button>
                ) : (
                  <button className="btn" onClick={handleBookNow}>
                    Login
                  </button>
                )}
              </div>

              <div className="time-slot-picker">
                <h2 className="title-slot">Pick a Time Slot</h2>
                <div className="toggle-container">
                  <span
                    className={`toggle-label ${
                      isVirtual == "VIRTUAL" ? "active" : ""
                    } ${
                      doctorDetails?.type === "both" ||
                      doctorDetails?.type === "virtual"
                        ? ""
                        : "disabledTrue"
                    }`}
                    onClick={() => {
                      if (
                        doctorDetails?.type === "both" ||
                        doctorDetails?.type === "virtual"
                      ) {
                        setIsVirtual("VIRTUAL");
                      }
                    }}
                  >
                    <img src={virtualIcon} />
                    Virtual Consult
                  </span>

                  <span
                    className={`toggle-label ${
                      isVirtual == "VIRTUAL" ? "" : "active"
                    } ${
                      doctorDetails?.type === "both" ||
                      doctorDetails?.type === "opd"
                        ? ""
                        : "disabledTrue"
                    }`}
                    onClick={() => {
                      if (
                        doctorDetails?.type === "both" ||
                        doctorDetails?.type === "opd"
                      ) {
                        setIsVirtual("IN_CLINIC");
                      }
                    }}
                  >
                    <img src={clinicIcon} />
                    Clinic Consult
                  </span>
                </div>
                {isVirtual === "VIRTUAL" ? (
                  <>
                    <div className="virtual-types-list-all">
                      {possibleTypes?.map((itemtype: any, indextype: any) => {
                        console.log("itemtype", itemtype);
                        return (
                          <>
                            {itemtype !== "call" && (
                              <div className="virtual-types-list-row">
                                <input
                                  type="radio"
                                  checked={
                                    selectedVirtualType === itemtype
                                      ? true
                                      : false
                                  }
                                  onChange={() =>
                                    setSelectedVirtualType(itemtype)
                                  }
                                  id={`virtual-types-list${indextype}`}
                                  name="virtual-types-list-row-list-radio"
                                  value={itemtype}
                                />
                                <label
                                  htmlFor={`virtual-types-list${indextype}`}
                                >
                                  {itemtype}{" "}
                                  {itemtype === "video"
                                    ? "call"
                                    : itemtype === "instant"
                                      ? "90 Sec"
                                      : ""}
                                </label>
                              </div>
                            )}
                          </>
                        );
                      })}
                    </div>
                    <div className="fee">
                      <h1>Virtual Appointment Fee:</h1>
                      <h2>
                        ₹{" "}
                        {selectedVirtualType === "call"
                          ? doctorDetails?.call_consultation_cost
                          : selectedVirtualType === "chat"
                            ? doctorDetails?.chat_consultation_cost
                            : selectedVirtualType === "video"
                              ? doctorDetails?.virtual_consultation_cost
                              : selectedVirtualType === "instant"
                                ? doctorDetails?.instant_consultation_cost
                                : doctorDetails?.virtual_consultation_cost || 0}
                      </h2>
                    </div>
                    <br />
                  </>
                ) : (
                  <>
                    <div className="fee">
                      <h1>Clinic Appointment Fee: </h1>
                      <h2> ₹ {selectedClinic?.consultation_cost || 0}</h2>
                    </div>
                    <div className="fee mt-4">
                      <div className="clinic-details-sec-all-sa">
                        <p className="clinicc-name">
                          {selectedClinic?.vendor?.name} &nbsp;&nbsp;
                          <span>
                            {selectedClinic?.vendor?.rating}{" "}
                            <span className="stars">★</span>
                          </span>
                        </p>
                        <p className="clinicc-address">
                          {selectedClinic?.vendor?.address}
                        </p>
                      </div>
                      <p></p>
                    </div>
                    {allDoctorRelatedHospitalList?.length > 1 && (
                      <div className="popover-div ">
                        <div className="mb-4">
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="success"
                              id="dropdown-basic"
                            >
                              Change Clinic
                            </Dropdown.Toggle>

                            {allDoctorRelatedHospitalList?.map((item: any) => {
                              return (
                                <Dropdown.Menu>
                                  <Dropdown.Item>
                                    <div
                                      onClick={() => handleClinickCheck(item)}
                                      className="Change-clinic-div"
                                    >
                                      <div className="Change-clinic-title">
                                        <p className="Change-clinic-name">
                                          {item?.vendor?.name}
                                        </p>
                                        <p className="Change-clinic-price">
                                          ₹{item?.vendor?.id}
                                        </p>
                                      </div>

                                      <div className="Change-clinic-addr">
                                        <p>
                                          {item?.vendor?.rating}
                                          <span className="stars ms-2">★</span>
                                        </p>
                                        <p>{item?.vendor?.address}</p>
                                      </div>
                                    </div>
                                  </Dropdown.Item>
                                </Dropdown.Menu>
                              );
                            })}
                          </Dropdown>
                        </div>
                      </div>
                    )}
                  </>
                )}
                {totalSlots > 0 ? (
                  <>
                    <div className="DropdownButton-module-div">
                      <DropdownButton
                        id="dropdown-basic-button"
                        title={
                          <span>
                            <img
                              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1737374782298.png"
                              alt="icon"
                              className="me-3"
                            />
                            Select your Preferred Hour for Consultation
                          </span>
                        }
                      >
                        <Dropdown.Item>
                          Doctors' schedules are dynamic. <br /> Help us by
                          sharing a one-hour window that works for you. <br />{" "}
                          We'll find the best matching slot and confirm back.
                        </Dropdown.Item>
                      </DropdownButton>
                    </div>

                    {preferredSlotShow ? (
                      <>
                        <div className="day-selector-container">
                          <button
                            className="arrow-button left"
                            onClick={scrollLeft}
                          >
                            <IoIosArrowBack />
                          </button>
                          <div className="day-selector" ref={daySelectorRef}>
                            {Array.isArray(allTimeslotsIList) &&
                              allTimeslotsIList?.map(
                                (day: any, index: number) => {
                                  const incommingDate = new Date(day?.date);

                                  const formattedIncoming =
                                    formatDate(incommingDate);

                                  const dayName =
                                    day?.date === formattedToday
                                      ? "Today"
                                      : day?.date === formattedTomorrow
                                        ? "Tomorrow"
                                        : reverseDateFormat(formattedIncoming);
                                  return (
                                    <>
                                      {day?.total_slots > 0 && (
                                        <button
                                          key={index}
                                          className={`day-button ${
                                            selectedDay === index
                                              ? "selected"
                                              : ""
                                          } `}
                                          onClick={() =>
                                            handleDayChange(index, day)
                                          }
                                        >
                                          <div className="day-text">
                                            {dayName}
                                          </div>
                                          <div className="slot-count">
                                            {day?.total_slots} Slots
                                          </div>
                                        </button>
                                      )}
                                    </>
                                  );
                                },
                              )}
                          </div>
                          <button
                            className="arrow-button right"
                            onClick={scrollRight}
                          >
                            <IoIosArrowForward />
                          </button>
                        </div>

                        <div className="accordion-module-div mt-2">
                          <Accordion defaultActiveKey={["0", "1"]}>
                            {selectedTimeslots?.morning?.length > 0 ? (
                              <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                  Morning{" "}
                                  {`(${selectedTimeslots?.morning?.length})`}
                                </Accordion.Header>
                                <Accordion.Body>
                                  <SlotesSelection
                                    slots={selectedTimeslots?.morning}
                                  />
                                </Accordion.Body>
                              </Accordion.Item>
                            ) : (
                              ""
                            )}
                            {selectedTimeslots?.afternoon?.length > 0 ? (
                              <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                  Afternoon{" "}
                                  {`(${selectedTimeslots?.afternoon?.length})`}
                                </Accordion.Header>
                                <Accordion.Body>
                                  <SlotesSelection
                                    slots={selectedTimeslots?.afternoon}
                                  />
                                </Accordion.Body>
                              </Accordion.Item>
                            ) : (
                              ""
                            )}
                            {selectedTimeslots?.evening?.length > 0 ? (
                              <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                  Evening{" "}
                                  {`(${selectedTimeslots?.evening?.length})`}
                                </Accordion.Header>
                                <Accordion.Body>
                                  <SlotesSelection
                                    slots={selectedTimeslots?.evening}
                                  />
                                </Accordion.Body>
                              </Accordion.Item>
                            ) : (
                              ""
                            )}
                          </Accordion>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="main-selectedSlot-div">
                          <div className="selectedSlot-div">
                            <div className="preferred-time-slot-div">
                              <p>Preferred Time 1</p>
                              {selectedSlot2 && <p>Preferred Time 2</p>}
                            </div>
                            <div className="selectedSlot-map-data">
                              <button
                                onClick={() =>
                                  handleSelectSlot(selectedSlot1, false)
                                }
                              >
                                {selectedSlot1?.split("_")[0] === formattedToday
                                  ? "Today"
                                  : selectedSlot1?.split("_")[0] ===
                                      formattedTomorrow
                                    ? "Tomorrow"
                                    : `${reverseDateFormat(
                                        selectedSlot1?.split("_")[0],
                                      )}`}{" "}
                                <span>
                                  {" "}
                                  {`${selectedSlot1?.split("_")[1]}`}
                                </span>
                                <FiEdit2 className="ms-3" />
                              </button>
                              {selectedSlot2 && (
                                <button
                                  onClick={() =>
                                    handleSelectSlot(selectedSlot2, true)
                                  }
                                >
                                  {selectedSlot2?.split("_")[0] ===
                                  formattedToday
                                    ? "Today"
                                    : selectedSlot2?.split("_")[0] ===
                                        formattedTomorrow
                                      ? "Tomorrow"
                                      : `${reverseDateFormat(
                                          selectedSlot2?.split("_")[0],
                                        )}`}{" "}
                                  <span>
                                    {" "}
                                    {`${selectedSlot2?.split("_")[1]}`}
                                  </span>
                                  <FiEdit2 className="ms-3" />
                                </button>
                              )}

                              {/* {selectedSlot?.map((item: any, index: number) => {
                          if (index == 1 && !selectedSlot?.[1]) return <></>;
                          return (
                            <button
                              onClick={() => handleSelectSlot(item, index)}
                            >
                              {item} <FiEdit2 className="ms-3" />
                            </button>
                          );
                        })} */}
                            </div>
                          </div>
                          <div className="book-selectedSlot-div">
                            <p className="Slot-Window">
                              Choose Your Backup Slot Window
                            </p>
                            <p className="Time-Windows">
                              Why Two Time Windows?
                            </p>
                            <p className="options-show">
                              <img
                                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1737376276059.png"
                                alt=""
                              />
                              Increases chances of finding a suitable slot{" "}
                            </p>
                            <p className="options-show">
                              <img
                                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1737376276059.png"
                                alt=""
                              />
                              Provides flexibility for both patient & doctor{" "}
                            </p>
                            <p className="options-show">
                              <img
                                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1737376276059.png"
                                alt=""
                              />
                              Reduces scheduling{" "}
                            </p>

                            <div className="btn-Windows">
                              {!isSecondSlot && (
                                <button
                                  onClick={() => {
                                    setPreferredSlotShow(true);
                                    setIsSecondSlot(true);
                                  }}
                                  className="btn add-more-slot"
                                >
                                  Add Second Slot
                                </button>
                              )}
                              <button
                                className="btn pay-proceed"
                                onClick={handleBookNow}
                                disabled={
                                  !selectedSlot1 || selectedSlot1.length === 0
                                }
                                title={
                                  !selectedSlot1 || selectedSlot1.length === 0
                                    ? "Select a time slot"
                                    : ""
                                }
                              >
                                Proceed to pay
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="no-slots-are-available">
                    <p>
                      No slots are available now. Please check with similar
                      doctors
                    </p>
                    <button
                      onClick={() => {
                        history.push("/doctor/doctorlist");
                      }}
                    >
                      View similar doctors
                    </button>
                  </div>
                )}
              </div>
              {doctorDetails?.available_in_90 && (
                <div className="doctor-card">
                  <div className="doctor-profile">
                    <img
                      src={doctorDetails?.image || defaultDoctImage}
                      alt="Doctor"
                      className="doctor-image"
                    />
                    <div className="doctor-info">
                      <h4 className="doctor-name">{doctorDetails?.name}</h4>
                      <p className="doctor-specialty">
                        {doctorDetails?.specialization}
                      </p>
                    </div>
                  </div>
                  <div className="doctor-connect">
                    <div className="connect-info">
                      <img
                        src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/113945-1735996347890.png"
                        alt="Lightning"
                        className="connect-icon"
                      />
                      <span>
                        Connect With Doctor <br /> in <b>90 seconds</b>
                      </span>
                    </div>

                    <div className="action-buttons">
                      <button className="chat-button">Chat</button>
                      <button className="instant-connect-button">
                        Instant Connect
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <Modal
        show={showSelectedMember}
        onHide={handleCloseSelectedMember}
        backdrop="static"
        keyboard={false}
      >
        <DoctorDetailsStyled>
          <div className="showSelectedMember-main-div">
            <p>Who Is this booking for ?</p>
            <button className="btn" onClick={handleCloseSelectedMember}>
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1737529487635.png"
                alt="user_img"
              />
            </button>
          </div>
          <div className="showSelectedMember-div">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="showSelectedMember-title">Selected Member</p>
              <button
                className="btn showSelectedMember-btn"
                onClick={handleAddNewMember}
              >
                <IoMdAddCircleOutline className="me-2" /> Add Member
              </button>
            </div>
            <div className="selected-member-div">
              <div className="selected-member-detail">
                <img src={selectedUserData?.image || defaultUserImage} alt="" />
                <div className="d-flex">
                  <div className="user-div">
                    <p className="user-name">
                      {selectedUserData?.first_name}{" "}
                      {selectedUserData?.last_name} (
                      {selectedUserData?.relation}) <br />
                    </p>
                    <p className="user-add"> {address?.address}</p>
                  </div>
                  <div>
                    <button
                      className="btn"
                      onClick={() => {
                        handleEditAddress(address);
                      }}
                    >
                      <FaPen />
                    </button>
                  </div>
                </div>
              </div>
              <div className="selected-member-edit"></div>
            </div>
            <p className="showSelectedMember-title mt-3">Saved members</p>
            <div className="select-member-main-div">
              {Array.isArray(userDependents) &&
                userDependents?.map((item: any) => {
                  return (
                    <div className="select-member-div">
                      <img src={item?.image || defaultUserImage} alt="" />
                      <div className="d-flex">
                        <div
                          className="user-div"
                          onClick={() => handleToSelectUser(item)}
                        >
                          <p className="user-name">
                            {item?.first_name} {item?.last_name} (
                            {item?.relation}) <br />
                          </p>
                          <p className="user-add"> {address?.address}</p>
                        </div>
                        <div>
                          <button
                            className="btn"
                            onClick={() => {
                              handleEditAddress(address);
                            }}
                          >
                            <FaPen />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </DoctorDetailsStyled>
      </Modal>

      {/* <TimeWithGraph /> */}
    </DoctorDetailsStyled>
  );
};

export default DoctorDetails;
