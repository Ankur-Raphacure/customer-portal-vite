import React, { useEffect, useState, useRef, useCallback } from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import dummy_doc from "../../assets/images/home/dummy_doc.png";
import EmpanelWithUs from "../../components/EmpanelWithUs/EmpanelWithUs";
import { getUniversalSearchData } from "../../redux/slices/generic/genericService";
import { updateUniversalSearchResults } from "../../redux/slices/generic/genericSlice";
import { HomeStyled } from "./Home.styled";
import SubDomainContent from "./SubDomainContent";
import Marquee from "react-fast-marquee";
import { getDoctorsListAPI } from "../../redux/slices/doctor/doctorService";
import { FaArrowRight } from "react-icons/fa6";
import { categories, mobileCategories, subCategories } from "./HomeObjClass";
import { topHealthcareSpecialist, berryBoxCategories } from "./HomeObjClass";
import { data } from "./HomeObjClass";
import { items } from "./HomeObjClass";
import { CategoryDivcolors } from "./Home.styled";
import { AbhaCardImg } from "./HomeObjClass";
import MultiCarouselModal from "./MultiCarouselModal";
import RPHomeV2 from "../../components/RaphaPlus/RPHomeV2/RPHomeV2";
import SearchByTextModule from "../Pharmacy/SearchByTextModule";
import { debounce } from "lodash";
import { checkIsMobile } from "../../Scenes/common";
import { ReactComponent as RoundImgFrame } from "../../assets/icons/roundImgFrame.svg";
import { ReactComponent as RoundIcon } from "../../assets/icons/roundIcon.svg";
import DoctorDetailsCard from "./DoctorDetailsCard";
import MobileTopBanner from "../../components/Header/MobileTopBanner";
import SearchComponent from "./SearchComponent";
import { IoCloseOutline } from "react-icons/io5";
import { pharmacySearchTextChange } from "../Pharmacy/PharmacyObjectsModule";

const MobileDomainHome = () => {
  const ref = useRef(null) as any;
  const history = useHistory();
  const dispatch = useDispatch();
  const [showSearchData, setShowSearchData] = useState(false);
  const [showEmpanelWithUsModel, setShowEmpanelWithUsModel] = useState(false);
  const [searchText, setSearchText] = useState<any>("");
  const [showSearchPopupModel, setShowSearchPopupModel] = useState(false);
  var sowLabTest = false;
  const sectionImg =
    "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1738229659292.png";
  const parameter = "Your Path to Wellness Begins Here";
  const {
    subDomainName,
    subDomainDetails,
    isRaphaPlus,
    rpSubDomainDetails,
    rpSubDomainName,
  } = useSelector((ReduxState: any) => ReduxState.auth);
  const { universalSearchResults } = useSelector(
    (ReduxState: any) => ReduxState?.generic
  );
  const aggservice = subDomainDetails?.agreed_services?.services?.find(
    (itttm: any) => itttm?.to == "/labtest"
  );
  if (!subDomainDetails?.id || aggservice) {
    sowLabTest = true;
  }
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);

  useEffect(() => {
    dispatch(
      getDoctorsListAPI({
        count: 10,
        page: 0,
        searchText: "",
      })
    );
  }, []);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (showSearchData && ref.current && !ref.current.contains(e.target)) {
        setShowSearchData(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showSearchData]);

  const navigateToPage = (url: string) => {
    history.push(url);
  };

  useEffect(() => {
    if (!searchText) return;
    fetchSearchResults1(searchText);
  }, [searchText]);
  const fetchSearchResults1 = (searchQuery: any) => {
    dispatch(getUniversalSearchData({ searchText: searchQuery }));
  };
  const debouncedSearch1 = useCallback(
    debounce((searchQuery) => setSearchText(searchQuery), 500),
    []
  );
  const navigateTo = (url: any) => {
    history.push(url);
  };

  const handleClickPlay = () => {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.cognonta.raphacure";
  };

  const handleClickApp = () => {
    window.location.href =
      "https://apps.apple.com/in/app/raphacure/id1637246098";
  };

  const handleToClosePopUp = () => {
    setShowSearchPopupModel(false);
  };
  const HomeTopBanner = (props: any) => {
    const { showEmpanelWithUsModel, setShowEmpanelWithUsModel } = props;
    return <></>;
  };

  return (
    <>
      <HomeStyled>
        <div className="rapha-main-home-page">
          <div className="main-welcome-text-rapha">
            <div className="welcome-text-rapha-mobile-viwe">
              <MobileTopBanner
                details={pharmacySearchTextChange}
                setSearchText={debouncedSearch1}
                searchText={searchText}
                searchedData={universalSearchResults}
                showSearchPopupModel={showSearchPopupModel}
                handleToClosePopUp={handleToClosePopUp}
                parameter={parameter}
                sectionName={"home"}
                sectionImg={sectionImg}
              />
            </div>
          </div>

          <SubDomainContent
            isMobile={true}
            subDomainName={subDomainName}
            subDomainDetails={subDomainDetails}
          />

          {subDomainDetails?.subdomain_key === "berrybox" && (
            <div className="OurServices-mobile-view">
              <div className="our-services-sec">
                <h5 className=""> Other Services</h5>
                <div className="our-services-all">
                  {berryBoxCategories?.map((category: any, index: any) => (
                    <div>
                      <CategoryDivcolors
                        index={index}
                        key={index}
                        className="home-page-card"
                      >
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            navigateToPage(category.navigatePath);
                          }}
                        >
                          <div className="home-card-image">
                            <div className="home-card-image-img">
                              <img src={category.imageUrl} className="mt-2" />
                            </div>
                          </div>
                        </div>
                      </CategoryDivcolors>
                      <p className="category-mobile-wiew1 ">{category?.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {subDomainDetails?.subdomain_key !== "indigrid" && (
            <div className="abha-card-div">
              <div className="abha-sub-card-div">
                <div className="abha-sub-card-right-div">
                  <h5 className="mt-3">
                    Create ABHA Card (Ayushman <br />
                    Bharat Health Account) Online
                  </h5>
                  <p className="mt-3">
                    Create and download your ABHA Card to securely store and
                    share <br /> health data Follow simple steps to generate and
                    access your ABHA ID.
                  </p>
                  <div className="d-flex justify-content-between align-items-center abha-sub-card-right-img-div">
                    {AbhaCardImg.map((item: any) => {
                      return <img src={item?.img} alt="" />;
                    })}
                  </div>
                  <div className="d-flex align-items-center">
                    <button
                      className="btn mt-4"
                      onClick={() => {
                        navigateToPage(`/abhahealths`);
                      }}
                    >
                      Create ABHA
                      <FaArrowRight className="ms-3" />
                    </button>
                  </div>
                </div>
                <div className="abha-sub-card-left-div">
                  <div className="main-abha-image-div">
                    <img
                      src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1730872390411.png"
                      alt=""
                      className="abha-image-div"
                    />
                  </div>
                </div>
              </div>

              <div className="abha-sub-card-mobile-div">
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1738235749179.png"
                  alt=""
                />
                <button
                  className="btn mt-4"
                  onClick={() => {
                    navigateToPage(`/abhahealths`);
                  }}
                >
                  Create ABHA
                  <FaArrowRight className="ms-3" />
                </button>
              </div>
            </div>
          )}

          {subDomainDetails?.subdomain_key === "indigrid" &&
            subDomainDetails?.logo_url && (
              <div className="subdomainImg">
                <img
                  onClick={() => {
                    navigateTo("/");
                  }}
                  src={subDomainDetails?.logo_url}
                  alt={subDomainDetails?.name}
                  width="180"
                  height="80"
                />
              </div>
            )}

          <div className="hospital-specislist-main-div">
            <div className="d-flex justify-content-between align-items-center hospital-specislist-sub-main-div ">
              <h5 className="hospital-specislist-h5-div">
                Our Top Healthcare Specialist
              </h5>
              {/* <div className="hospital-specislist-p-div">
                      <p onClick={() => history.push("/doctor")}>View All</p>
                    </div> */}
            </div>
            <div className="doctore-card-div ">
              {topHealthcareSpecialist?.map((item: any, index: any) => (
                <DoctorDetailsCard item={item} />
              ))}
            </div>
          </div>

          {!subDomainDetails?.subdomain_key && (
            <>
              <div className="download-home-page-div">
                <div className="download-inner-home-page-div ">
                  <div className="download-inner-home-title-div">
                    <EmpanelWithUs
                      show={showEmpanelWithUsModel}
                      onHide={() => {
                        setShowEmpanelWithUsModel(false);
                      }}
                    />
                    <h5 className="download-text-div">Download</h5>
                    <h5 className="download-text-div">
                      <span>RaphaCure</span> App Now
                    </h5>
                    <p className="download-sub-text-div">
                      Experience top-tier healthcare services at your
                      fingertips. Manage doctor consultations, <br /> lab tests,
                      and more, all in one place. Stay connected to your
                      health—anytime, anywhere
                    </p>
                  </div>
                  <div className="welcome-text-rapha-right mt-4">
                    <img
                      src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1730875100062.png"
                      alt="RaphaCure"
                      className="phone-img"
                    />
                  </div>
                </div>
                <div className="book-app-doctor-actions-btn-div">
                  <button
                    onClick={handleClickPlay}
                    className=" btn Google-Play me-4"
                  >
                    <img
                      src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1729773317660.png"
                      alt=""
                      className="me-1"
                    />
                    Google Play
                  </button>

                  {sowLabTest && (
                    <button
                      onClick={handleClickApp}
                      className=" btn Google-Play "
                    >
                      <img
                        src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1730874372832.png"
                        alt=""
                        className="me-1"
                      />
                      App Store
                    </button>
                  )}
                </div>
              </div>

              <div className="download-home-page-mobile-viwe-div">
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1737118539689.png"
                  alt=""
                />
                <div className="book-app-doctor-actions-btn-mobile-viwe">
                  <button
                    onClick={handleClickPlay}
                    className=" btn Google-Play me-2 ms-3"
                  >
                    <img
                      src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1729773317660.png"
                      alt=""
                      className="me-1"
                    />
                    Google Play
                  </button>

                  {sowLabTest && (
                    <button
                      onClick={handleClickApp}
                      className=" btn Google-Play "
                    >
                      <img
                        src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1730874372832.png"
                        alt=""
                        className="me-1"
                      />
                      App Store
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </HomeStyled>
    </>
  );
};

export default MobileDomainHome;
