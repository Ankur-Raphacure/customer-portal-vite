import React, { useEffect, useState } from "react";
import { DoctorsStyled } from "./Doctors.styled";
import HeadingBannerModule from "../Pharmacy/HeadingBannerModule";
import {
  doctorBannerDetails,
  doctorSearchTextChange,
} from "../Pharmacy/PharmacyObjectsModule";
import SearchByTextModule from "../Pharmacy/SearchByTextModule";
import MultiCarouselModal from "../Home/MultiCarouselModal";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesAPI } from "../../redux/slices/labtest/labtestService";
import DoctorDetailsCard from "../Home/DoctorDetailsCard";
import ScanCenterCards from "../Radiology/ScanCenterCards";
import { getAllScansNearByAPI } from "../../redux/slices/ctmri/ctmriService";
import ButtomBanner from "../Radiology/BottomBanner";
import { FaArrowRight } from "react-icons/fa6";
import { useHistory } from "react-router-dom";
import { getAllDoctorAPI } from "../../redux/slices/doctor/doctorService";
import { IoCloseOutline } from "react-icons/io5";
import useHandleImageUrl from "../../components/hooks/useHandleImageUrl";

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

const specializationList = [
  { name: "General physician", img: "" },
  { name: "Gynaecology", img: "" },
  { name: "Sexology", img: "" },
  { name: "Dermatology", img: "" },
  { name: "Psychiatrist", img: "" },
  { name: "Neurologist", img: "" },
  { name: "Cardiologist", img: "" },
  { name: "ENT Specialist", img: "" },
  { name: "Oncologist", img: "" },
  { name: "Pediatrician", img: "" },
];
const Doctors = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { getFirstImageUrl } = useHandleImageUrl();
  const [searchText, setSearchText] = useState("");
  const [showSearchPopupModel, setShowSearchPopupModel] = useState(false);
  const { allCategoriesList } = useSelector(
    (ReduxState: any) => ReduxState.labtest
  );
  const { allScansNearBy } = useSelector((ReduxState: any) => ReduxState.ctmri);

  const getLatestData = (city = "bengaluru") => {
    dispatch(getAllScansNearByAPI({ city: city?.toLowerCase(), count: 4 }));
  };

  useEffect(() => {
    getLatestData();
    dispatch(getAllCategoriesAPI({ sectionName: "ctmri" }));
  }, []);

  const navigateToDetails = (id: any) => {
    history.push(`/doctor/doctorlist`);
  };

  const handleonFilterName = async (event: any) => {
    setSearchText(event);
  };
  const handleShowSearchPopupModel = () => {
    if (!showSearchPopupModel) {
      setShowSearchPopupModel(false);
      console.log(showSearchPopupModel, "showSearchPopupModel");
    }
  };
  const handleSearchGoTo = (searR: any) => {
    history.push(`/doctor/doctordetails/${searR}`);
  };
  const { allDoctorList } = useSelector((ReduxState: any) => ReduxState.doctor);
  const getSearchDoctorsList = async () => {
    let body = {} as any;
    if (searchText) {
      body.searchText = searchText;
    }
    await dispatch(
      getAllDoctorAPI({
        filters: {
          ...body,
          status: "approved",
        },
      })
    );
  };
  const getAllDoctorsList = async () => {
    let body = {} as any;

    await dispatch(
      getAllDoctorAPI({
        filters: {
          ...body,
          status: "approved",
          availableIn90: true,
        },
      })
    );
  };
  useEffect(() => {
    if (searchText) {
      getSearchDoctorsList();
    } else {
      getAllDoctorsList();
    }
  }, [searchText]);

  return (
    <DoctorsStyled>
      <HeadingBannerModule details={doctorBannerDetails} section="doctor" />
      <div className="search-By-text">
        <SearchByTextModule
          details={doctorSearchTextChange}
          handleonFilterName={handleonFilterName}
          setSearchText={setSearchText}
          searchText={searchText}
        />
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
            {searchText?.length > 2 && allDoctorList?.doctors?.length > 0 ? (
              allDoctorList?.doctors?.map((item: any, index: number) => (
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
              ))
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
        <div className=" specialization-title-div">
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
            allCategoriesList={specializationList}
          />
        </div>
      </div>
      <div className="doctor-consult">
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
            allDoctorList?.doctors?.slice(0, 5).map((item: any) => {
              return <DoctorDetailsCard item={item} sectionName="doctor" />;
            })}
        </div>
      </div>

      <div className="nearby-doctor-hospitals">
        <div className="d-flex justify-content-between align-items-center">
          <p className="nearby-doctor-title">Nearby Hospitals</p>
          <button
            className="btn nearby-doctor-view-btn"
            onClick={() => history.push("/doctor/doctorlist")}
          >
            View all
          </button>
        </div>
        <div className="nearby-hospitals-list">
          {allScansNearBy?.vendors
            ?.slice(0, 5)
            .map((item: any, index: number) => (
              <ScanCenterCards
                viewScanCards={item}
                sectionName="doctor"
                handleNavigateDetails={navigateToDetails}
              />
            ))}
        </div>
      </div>

      <div className="doctor-video-section">
        <div className="doctor-video-sub-section">
          <div className="text-div">
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
            <button className="btn explore-more-btn">
              Explore More <FaArrowRight className="ms-2" />
            </button>
          </div>
          <div className="video-div"></div>
        </div>
      </div>
      <ButtomBanner />
    </DoctorsStyled>
  );
};

export default Doctors;
