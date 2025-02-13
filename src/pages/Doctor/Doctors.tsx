import React, { useEffect, useMemo, useState } from "react";
import { DoctorsStyled } from "./Doctors.styled";
import HeadingBannerModule from "../Pharmacy/HeadingBannerModule";
import {
  doctorBannerDetails,
  doctorSearchTextChange,
} from "../Pharmacy/PharmacyObjectsModule";
import { updateSelectedHospitalData } from "../../redux/slices/doctor/doctorSlice";
import { checkIsMobile } from "../../Scenes/common";
import SearchByTextModule from "../Pharmacy/SearchByTextModule";
import MultiCarouselModal from "../Home/MultiCarouselModal";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesAPI } from "../../redux/slices/labtest/labtestService";
import DoctorDetailsCard from "../Home/DoctorDetailsCard";
import ScanCenterCards from "../Radiology/ScanCenterCards";
import ButtomBanner from "../Radiology/BottomBanner";
import { FaArrowRight } from "react-icons/fa6";
import { useHistory } from "react-router-dom";
import {
  getAllDoctorAPI,
  getNearByHospitalAPI,
  getSearchAllDoctorAPI,
  getSpecializationAPI,
} from "../../redux/slices/doctor/doctorService";
import { IoCloseOutline } from "react-icons/io5";
import useHandleImageUrl from "../../components/hooks/useHandleImageUrl";
import { updateShowLoginModel } from "../../redux/slices/auth/authSlice";
import {
  getCartItemsAPI,
  handleAddToCartAPI,
} from "../../redux/slices/checkout/checkoutService";
import { getAttachmentIds, truncateText } from "../../Scenes/common";
import { resetBookingArray } from "../../redux/slices/bookingScreen/bookingScreenSlice";
import NearbyCard from "../../components/NearbyCard/NearbyCard";
import { LabtestStyled } from "../LabTestv2/LabTest.styled";
import MobileTopBanner from "../../components/Header/MobileTopBanner";
import CategorieCard from "../Pharmacy/CategorieCard";

const chatDetails = [
  {
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736153632811.png",
    name: "Instant Connection",
  },
  {
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736153660247.png",
    name: "Chat With Doctor",
  },
  {
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736153684211.png",
    name: "Hassle-Free Support",
  },
  {
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736153710402.png",
    name: "Secure Consultations",
  },
];
const videoDetails = [
  {
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736230619073.png",
    name: "Affordable Plan",
  },
  {
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736230690062.png",
    name: "24/7 Expert Access",
  },
  {
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736230736596.png",
    name: "Comprehensive Care",
  },
];
const parameter = "CONSULT DOCTOR";
const sectionImg =
  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1738390968445.png";

const Doctors = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { getFirstImageUrl } = useHandleImageUrl();
  const [searchText, setSearchText] = useState("");
  const [doctorDetails, setDoctorDetails] = useState<any>({});
  const [showBookingErrorMessage, setshowBookingErrorMessage] = useState("");
  const [showSearchPopupModel, setShowSearchPopupModel] = useState(false);
  const { userAddress, nearbyVendors } = useSelector(
    (ReduxState: any) => ReduxState.profile
  );

  const {
    allDoctorList,
    allSearchAllDoctorList,
    allSpecializationList,
    allNearByHospitalList,
  } = useSelector((ReduxState: any) => ReduxState.doctor);
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);
  const [selectedUserData, setSelectedUserData] = useState<any>(user);
  const { allCategoriesList } = useSelector(
    (ReduxState: any) => ReduxState.labtest
  );

  useEffect(() => {
    console.log("allNearByHospitalList : ", allNearByHospitalList);
  }, [allNearByHospitalList]);

  const { selectedCurrentAddress } = useSelector(
    (ReduxState: any) => ReduxState.profile
  );

  const navigateToDetails = (item: any) => {
    history.push(`/doctor/doctorlist`, item);
  };
  const handleonFilterName = async (event: any) => {
    setSearchText(event);
  };
  const handleShowSearchPopupModel = () => {
    if (!showSearchPopupModel) {
      setShowSearchPopupModel(false);
    }
  };
  const handleSearchGoTo = (searR: any) => {
    history.push(`/doctor/doctordetails/${searR}`);
  };

  const getSearchDoctorsList = async () => {
    let body = {} as any;
    if (searchText) {
      body.searchText = searchText;
    }
    await dispatch(
      getSearchAllDoctorAPI({
        filters: {
          ...body,
          status: ["approved"],
          availabilities: true,
        },
      })
    );
  };
  const getAllDoctorsList = async () => {
    let body = {} as any;

    await dispatch(
      getAllDoctorAPI({
        body: {
          filters: {
            ...body,
            status: ["approved"],
            availableIn90: true,
            availabilities: true,
          },
        },
      })
    );
  };
  const getSpecializationLsit = async () => {
    await dispatch(getSpecializationAPI());
  };
  const getNearByHospitalnLsit = async () => {
    const body = {
      latitude: selectedCurrentAddress?.latitude,
      longitude: selectedCurrentAddress?.longitude,
      section_name: "doctor",
    };
    await dispatch(getNearByHospitalAPI(body));
  };
  const getSpecializationList = async () => {
    await dispatch(getAllCategoriesAPI({ sectionName: "doctor" }));
  };
  useEffect(() => {
    getNearByHospitalnLsit();
  }, [selectedCurrentAddress]);

  console.log(selectedCurrentAddress, "selectedCurrentAddress");

  useEffect(() => {
    if (searchText) {
      getSearchDoctorsList();
    } else {
      getAllDoctorsList();
      getSpecializationLsit();
      getSpecializationList();
    }
  }, [searchText]);

  const handleSpecializations = (item: any) => {
    // window.location.href = `/doctor/doctorlist/${item?.id}`;
    history.push(`/doctor/doctorlist/${item?.id}`);
  };
  const handleViewAllNearbyHospitals = (item: any) => {
    dispatch(updateSelectedHospitalData({}));
    history.push(`/doctor/nearbyhospitals`);
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

  const continurBookingtoCart = async (
    bType: any,
    docDetails = doctorDetails
  ) => {
    try {
      const neList = [] as any;
      console.log("docDetails : ", docDetails);

      const tempObj = {
        virtual_type: "instant",
        package_code: undefined,
        useWallet: true,
        doctor_id: docDetails?.id,
        address_id: address?.id,
        user_id: parseInt(selectedUserData?.id || user?.id),
        collection_1_date: null,
        collection_1_slot: null,
        collection_2_date: null,
        collection_2_slot: null,
        attachment_ids: getAttachmentIds("doctor"),
        section_key: "doctor",
      };
      neList.push(tempObj);

      const body1 = {
        carts: neList,
      };
      const resp: any = await dispatch(handleAddToCartAPI(body1));
      console.log("resp : ", resp);

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
  const handleBookNow = (docDetails: any) => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      setDoctorDetails(docDetails);
      continurBookingtoCart("booknow", docDetails);
    }
  };
  console.log("searchText", searchText);
  return (
    <DoctorsStyled>
      <div className="web-view">
        <HeadingBannerModule details={doctorBannerDetails} section="doctor" />
      </div>

      <div className="search-By-text">
        <SearchByTextModule
          details={doctorSearchTextChange}
          handleonFilterName={handleonFilterName}
          setSearchText={setSearchText}
          searchText={searchText}
        />
      </div>
      {checkIsMobile() && (
        <div className="mobile-view">
          <MobileTopBanner
            details={doctorSearchTextChange}
            handleonFilterName={handleonFilterName}
            setSearchText={setSearchText}
            searchText={searchText}
            searchedData={allDoctorList?.doctors}
            handleSearchGoTo={handleSearchGoTo}
            showSearchPopupModel={showSearchPopupModel}
            // handleToClosePopUp={handleToClosePopUp}
            parameter={parameter}
            sectionName={"pharmacy"}
            sectionImg={sectionImg}
          />
        </div>
      )}

      <div className="main-Upload-Prescription-mobile">
        <div className="Upload-Prescription-mobile-btn ">
          <p>Schedule Consult</p>
          <button
            className="btn"
            onClick={() => history.push("/doctor/doctorlist")}
          >
            Schedule Now
          </button>
        </div>
      </div>

      {(searchText?.length > 0 || showSearchPopupModel) && (
        <div className="search-popup">
          <div className="search-popup-content">
            <div className="search-heading-text-div">
              <p>Showing Result for {searchText}</p>
              <button className="btn" onClick={handleShowSearchPopupModel}>
                <IoCloseOutline />
              </button>
            </div>
            {searchText?.length > 2 &&
            allSearchAllDoctorList?.doctors?.length > 0 ? (
              allSearchAllDoctorList?.doctors?.map(
                (item: any, index: number) => (
                  <div
                    key={index}
                    className="search-popup-item"
                    onClick={() => handleSearchGoTo(item?.id)}
                  >
                    {item?.image && (
                      <div className="search-popup-image">
                        <img
                          src={getFirstImageUrl(item?.image)}
                          alt={item?.name || "Search Result"}
                        />
                      </div>
                    )}
                    <div className="search-popup-details">
                      <p className="search-popup-name">
                        {item?.name || item?.service_name}
                      </p>
                      <p className="search-popup-type">
                        <img
                          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1732179533099.png"
                          alt=""
                        />
                      </p>
                    </div>
                  </div>
                )
              )
            ) : searchText?.length > 3 ? (
              <div className="search-popup-no-results">
                <p className="search-popup-title">
                  No result found for {searchText}
                </p>
                <p className="search-popup-sub-title">
                  Search with another brand or category
                </p>
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1732181068454.png"
                  alt=""
                />
              </div>
            ) : null}
          </div>
        </div>
      )}

      <div className="doctor-specialization">
        <div className="specialization-title-div">
          <p>Specialization</p>
          <button
            className="btn"
            onClick={() => history.push("/doctor/specializationList")}
          >
            View all
          </button>
        </div>

        <div className="parent-multicurosal-module">
          <MultiCarouselModal
            itemstoShow={5}
            allCategoriesList={allCategoriesList?.category_ids}
            catogorySelect={handleSpecializations}
          />
        </div>

        <div className="mobile-view-categories">
          <CategorieCard
            allCategoriesList={allCategoriesList?.category_ids?.slice(0, 4)}
            catogorySelect={handleSpecializations}
          />
        </div>
      </div>
      <div className="doctor-consult" id="instantConnect">
        <div className="d-flex justify-content-between align-items-center">
          <p className="doctor-consult-text">Consult / Chat In 90 Seconds</p>
          <button
            className="btn view-all-btn"
            onClick={() => history.push("/doctor/doctorlist")}
          >
            View all
          </button>
        </div>
        <p className="doctor-consult-sub-text">
          Connect with a professional and get expert advice or support within
          just 90 <br /> seconds—fast, reliable, and tailored to your needs
        </p>

        <p className="doctor-consult-sub-text-mobile-view">
          Get expert advice or support in just 90 <br />
          seconds—fast, reliable, and tailored to you
        </p>

        <div className="doctor-consult-options">
          {chatDetails?.map((item: any, index: number) => {
            return (
              <div key={index} className="doctor-consult-options-map">
                <img src={item?.img} alt="" className="consult-option-img" />
                <p>{item?.name}</p>
              </div>
            );
          })}
        </div>

        <div className="doctor-consult-list">
          {Array.isArray(allDoctorList?.doctors) &&
            allDoctorList?.doctors?.slice(0, 4).map((item: any) => {
              return (
                <DoctorDetailsCard
                  item={item}
                  sectionName="doctor"
                  handleToBookSlot={handleBookNow}
                />
              );
            })}
        </div>
      </div>

      <div className="nearby-doctor-hospitals">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <p className="nearby-doctor-title">Nearby Hospitals</p>
          <p
            className="btn nearby-doctor-view-btn"
            onClick={handleViewAllNearbyHospitals}
          >
            View all
          </p>
        </div>
        <LabtestStyled>
          <div className="nearbyCards near-by-doctors-sec">
            {allNearByHospitalList?.vendors?.length > 0 ? (
              allNearByHospitalList?.vendors
                .slice(0, 5)
                .map((vendor: any, index: any) => (
                  <NearbyCard
                    fromSection="doctor"
                    item={vendor}
                    key={vendor?.id || index}
                    title={vendor?.name || "N/A"}
                    image={vendor?.image}
                    rating={(vendor?.rating || "0").toString()}
                    distance={`${parseFloat(vendor?.distance_km || 0).toFixed(
                      2
                    )} Km`}
                    location={truncateText(vendor?.address, 40) || "N/A"}
                    id={vendor?.id}
                  />
                ))
            ) : (
              <p> No Nearby Hospitals Found</p>
            )}
          </div>
        </LabtestStyled>
      </div>

      <div className="doctor-video-section">
        <div className="doctor-video-sub-section">
          <div className="text-div mobile-view-text-div ">
            <p className="video-text-div">Annual Plan for Unlimited</p>
            <p className="video-text-div">
              <span>Doctor Consultations</span> Made Easy
            </p>
            <div className="video-option-div">
              {videoDetails?.map((item: any) => {
                return (
                  <div className="video-sub-option-div">
                    <img src={item?.img} alt="" />
                    <p>{item?.name}</p>
                  </div>
                );
              })}
            </div>

            <p className="start-from-text">Start from 1000</p>

            <div className="mobile-video-view">
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1737883285953.png"
                alt=""
              />
            </div>
            <button className="btn explore-more-btn">
              Explore More <FaArrowRight className="ms-2" />
            </button>
          </div>
          <div className="video-div"></div>
        </div>
      </div>
      <div className="mobile-ButtomBanner">
        <ButtomBanner />
      </div>

      {/* <div className="download-home-page-mobile-viwe-div">
        <img
          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1737118539689.png"
          alt=""
        />
        <div className="book-app-doctor-actions-btn-mobile-viwe">
          <button className=" btn Google-Play me-2 ms-3">
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1729773317660.png"
              alt=""
              className="me-1"
            />
            Google Play
          </button>
          <button className=" btn Google-Play ">
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1730874372832.png"
              alt=""
              className="me-1"
            />
            App Store
          </button>
        </div>
      </div> */}
    </DoctorsStyled>
  );
};

export default Doctors;
