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
import { categories, subCategories } from "./HomeObjClass";
import { topHealthcareSpecialist } from "./HomeObjClass";
import { data } from "./HomeObjClass";
import { items } from "./HomeObjClass";
import { CategoryDivcolors } from "./Home.styled";
import { AbhaCardImg } from "./HomeObjClass";
import MultiCarouselModal from "./MultiCarouselModal";
import RPHomeV2 from "../../components/RaphaPlus/RPHomeV2/RPHomeV2";
import SearchByTextModule from "../Pharmacy/SearchByTextModule";
import { debounce } from "lodash";
import { IoCloseOutline } from "react-icons/io5";
import { pharmacySearchTextChange } from "../Pharmacy/PharmacyObjectsModule";
import { checkIsMobile } from "../../Scenes/common";
import { ReactComponent as BottomHomeBanner } from "../../assets/icons/download banner app.svg";
import { ReactComponent as HomeBanner } from "../../assets/icons/main banner mob view svg (1).svg";
import { ReactComponent as RoundImgFrame } from "../../assets/icons/roundImgFrame.svg";
import { ReactComponent as RoundIcon } from "../../assets/icons/roundIcon.svg";
import DoctorDetailsCard from "./DoctorDetailsCard";

const Home = () => {
  const ref = useRef() as any;
  const history = useHistory();
  const dispatch = useDispatch();
  const [showSearchData, setShowSearchData] = useState(false);
  const [showEmpanelWithUsModel, setShowEmpanelWithUsModel] = useState(false);
  const [searchText, setSearchText] = useState<any>("");
  const [showSearchPopupModel, setShowSearchPopupModel] = useState(false);
  var sowLabTest = false;

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

  const handleonFilterName = async (event: any) => {
    setShowSearchPopupModel(true);
    debouncedSearch1(event);
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

  const handleSearchGoTo = (searR: any) => {
    setShowSearchData(false);
    dispatch(updateUniversalSearchResults([]));
    if (searR?.to_link == "/pharmacy") {
      navigateTo(`/item/generic/${searR?.linkable_id}`);
    } else if (searR?.linkable_type == "packages") {
      navigateTo(`/labPackageDetils/${searR?.linkable_id}`);
    } else if (searR?.linkable_type == "tests") {
      navigateTo(`/labTestDetils/${searR?.linkable_id}`);
    } else if (searR?.type == "hospital") {
      navigateTo(`/hospital/${searR?.linkable_id}`);
    } else {
      navigateTo(`/doctor`);
    }
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
    return (
      <>
        <div className="welcome-text-rapha">
          <div className="welcome-text-rapha-left">
            <EmpanelWithUs
              show={showEmpanelWithUsModel}
              onHide={() => {
                setShowEmpanelWithUsModel(false);
              }}
            />
            <h3>
              Your Path to Wellness <br /> Begins Here
            </h3>
            <p className="banner-text">
              Your health is your greatest asset, and at RaphaCure, we're here
              to safeguard it. <br />
              With excellence and a passion for personalized care, we're your
              trusted partner in health.
            </p>

            <p className="sub-banner-text">
              Your health is priceless. RaphaCure ensures it with care and
              excellence.
            </p>
            <div className="book-app-doctor-actions">
              <button
                onClick={() => {
                  history.push("/doctor");
                }}
                className="consult-doctor"
              >
                Consult Doctor
                <FaArrowRight className="ms-3" />
              </button>
            </div>
          </div>
          <div className="welcome-text-rapha-right">
            <img
              // src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1734604420242.png"
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1730870595281.png"
              alt="RaphaCure"
              className="welcome-text-rapha-img"
            />
            {/* <HomeDoctorImage className="welcome-text-rapha-img" /> */}
          </div>
        </div>
        <div className="welcome-text-rapha-mobile-viwe">
          <HomeBanner />
        </div>
      </>
    );
  };
  return (
    <>
      {isRaphaPlus && !rpSubDomainDetails?.id ? (
        <RPHomeV2 />
      ) : (
        <HomeStyled>
          <div className="rapha-main-home-page">
            {rpSubDomainDetails?.id ? (
              <>
                <div className="rapha-plus-home-page-top">
                  <div>
                    <img src={rpSubDomainDetails?.logo_url || "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736409761417.png"} />
                  </div>
                  <div className="rapha-main-home-search-section">
                    <div className="rapha-main-home-search">
                      <input
                        // onChange={handleSearchBox}
                        className="search-boc-header"
                        placeholder="Search"
                        type="text"
                      />
                    </div>

                    {/* {universalSearchResults?.length > 0 && showSearchData && (
                      <UniversalStyled>
                        <div className="search-list-sec" ref={ref}>
                          <div>
                            {universalSearchResults?.map((item: any) => {
                              return (
                                <div className="search-list-sec-box-parent">
                                  <div
                                    className="search-list-sec-box"
                                    onClick={() => {
                                      handleSearchGoTo(item);
                                    }}
                                  >
                                    <p className="search-sec01">
                                      {item?.linkable_type}:
                                    </p>
                                    {item?.image && (
                                      <p>
                                        <img src={item?.image} />
                                      </p>
                                    )}

                                    <p>{item?.name}</p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </UniversalStyled>
                    )} */}
                  </div>
                </div>
                {rpSubDomainDetails?.id && (
                  <div className="rp-subdomain-packages">
                    <SubDomainContent
                      subDomainName={subDomainName}
                      subDomainDetails={rpSubDomainDetails}
                    />
                  </div>
                )}
              </>
            ) : (
              <div className="main-welcome-text-rapha">
                {(!subDomainDetails?.id || !checkIsMobile()) && (
                  <HomeTopBanner
                    showEmpanelWithUsModel={showEmpanelWithUsModel}
                    setShowEmpanelWithUsModel={setShowEmpanelWithUsModel}
                  />
                )}

                <div className="perent-search-div perent-search-div1">
                  <SearchByTextModule
                    details={pharmacySearchTextChange}
                    handleonFilterName={handleonFilterName}
                    setSearchText={debouncedSearch1}
                    searchText={searchText}
                  />

                  {showSearchPopupModel && (
                    <div className="search-popup">
                      <div className="search-popup-content">
                        <div className="search-heading-text-div">
                          <p>Showing Result for {searchText}</p>
                          <button className="btn" onClick={handleToClosePopUp}>
                            <IoCloseOutline />
                          </button>
                        </div>
                        {searchText?.length > 2 &&
                        universalSearchResults?.length > 0 ? (
                          universalSearchResults.map(
                            (item: any, index: number) => (
                              <div
                                key={index}
                                className="search-popup-item"
                                onClick={() => handleSearchGoTo(item)}
                              >
                                {item?.image && (
                                  <div className="search-popup-image">
                                    <img
                                      src={item?.image}
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
                </div>
              </div>
            )}
            {subDomainDetails?.id ? (
              <SubDomainContent
                subDomainName={subDomainName}
                subDomainDetails={subDomainDetails}
              />
            ) : (
              <>
                <div className="our-services-sec">
                  <h5 className="">Top Category</h5>
                  <div className="our-services-all">
                    {categories.map((category, index: any) => (
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
                          <div className="category mt-4">{category.title} </div>
                          <p className="category-p">{category.description}</p>
                          <div className="home-card-image">
                            <div className="home-card-image-img">
                              {/* <img src={category.imageUrl} className="mt-2" /> */}
                              <div className="catg-image-div">
                                {category.imageUrl}
                              </div>
                              <div className="mb-3 category-book-app-doctor-btn">
                                <button className="category-book-app-doctor">
                                  <FaArrowRight />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CategoryDivcolors>
                    ))}
                  </div>
                </div>
                <div className="our-services-sec1">
                  <h5>Revolutionizing Healthcare</h5>
                  <div className="row our-services-sec1-row">
                    {data.map((item, index) => (
                      <div
                        key={item.id}
                        className={`our-services-card ${
                          index === 1 || index === 4
                            ? "justify-center"
                            : index === 2 || index === 5
                            ? "justify-end"
                            : ""
                        }`}
                      >
                        <div className="Revolutionizing-div">
                          <div className="Revolutionizing-image-div me-3">
                            {item.img}
                          </div>
                          <div className="Revolutionizing-text-div">
                            <h5>{item.title}</h5>
                            <p>{item.subtitle}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="multi-carousel-modal">
                  <p className="Our-Services-title">Our Services</p>
                  <MultiCarouselModal
                    allCategoriesList={subCategories}
                    itemstoShow={5}
                  />
                </div>
                <div className="abha-card-div">
                  <div className="abha-sub-card-div">
                    <div className="abha-sub-card-right-div">
                      <h5 className="mt-3">
                        Create ABHA Card (Ayushman <br />
                        Bharat Health Account) Online
                      </h5>
                      <p className="mt-3">
                        Create and download your ABHA Card to securely store and
                        share <br /> health data Follow simple steps to generate
                        and access your ABHA ID.
                      </p>
                      <div className="d-flex justify-content-between align-items-center abha-sub-card-right-img-div">
                        {AbhaCardImg.map((item: any, index:any) => {
                          return <img src={item?.img} alt="" key={index} />;
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
                </div>
                <div className="associated-with-div">
                  <h5>We are associated with</h5>

                  <Marquee>
                    {items.map((item, index) => {
                      return (
                        <div key={index}>
                          <img src={item?.img} alt="" />
                        </div>
                      );
                    })}
                  </Marquee>
                </div>
                <div className="Testimonials-main-div">
                  <div className="testimoials-sub-main-div">
                    <div className="left-testimoials-sub-main-div">
                      <p>Testimonials</p>
                      <h5>
                        What our client think <br />
                        about Us?
                      </h5>
                    </div>
                    <div className="right-testimoials-sub-main-div">
                      <img src={dummy_doc} alt="testimoials_image" />

                      <RoundImgFrame className="round-img-frame" />
                      <RoundIcon className="round-img-icon" />
                      <p>
                        "RaphaCure has transformed how I manage my healthcare.
                        Booking doctor consultations and lab tests is now quick
                        and hassle-free. The platform’s convenience, efficiency,
                        and access to medical records make it a one-stop
                        solution for all my healthcare needs. I couldn't be more
                        satisfied!"
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hospital-specislist-main-div">
                  <div className="d-flex justify-content-between align-items-center hospital-specislist-sub-main-div ">
                    <h5 className="hospital-specislist-h5-div">
                      Our Top Healthcare Specialist
                    </h5>
                    <div className="hospital-specislist-p-div">
                      <p onClick={() => history.push("/doctor")}>View All</p>
                    </div>
                  </div>
                  <div className="doctore-card-div ">
                    {topHealthcareSpecialist?.map((item: any, index: any) => (
                      <DoctorDetailsCard item={item} key={index} />
                    ))}
                  </div>
                </div>
                {!rpSubDomainDetails?.id && (
                  <>
                    <div className="empanel-network-div">
                      <div
                        className="empanel-main-card-div"
                        onClick={() => {
                          setShowEmpanelWithUsModel(true);
                        }}
                      >
                        <div className="empanel-sec-content-left-div">
                          <h5>Empanel With Us</h5>
                          <p>Become a Part of Network Hospitals</p>
                        </div>
                        <div className="empanel-sec-content-right popup-link">
                          <button className="category-book-app-doctor">
                            <FaArrowRight />
                          </button>
                        </div>
                      </div>
                      <div
                        className="empanel-main-card-div"
                        onClick={() => {
                          history.push("/networklist");
                        }}
                      >
                        <div className="empanel-sec-content-left-div">
                          <h5>Rapha Network</h5>
                          <p>
                            Search For The Nearest Network Hospital to go
                            cashless
                          </p>
                        </div>
                        <div className="empanel-sec-content-right">
                          <button className="category-book-app-doctor">
                            <FaArrowRight />
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
            {rpSubDomainDetails?.id ? (
              <>
                <div className="rapha-plus-home-page-bottom">
                  <div>
                    <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736415936837.png" />
                  </div>
                </div>
              </>
            ) : (
              <>
                {(!subDomainDetails?.id || !checkIsMobile()) && (
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
                            fingertips. Manage doctor consultations, <br /> lab
                            tests, and more, all in one place. Stay connected to
                            your health—anytime, anywhere
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
                      <BottomHomeBanner />
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
              </>
            )}
          </div>
        </HomeStyled>
      )}
    </>
  );
};

export default Home;
