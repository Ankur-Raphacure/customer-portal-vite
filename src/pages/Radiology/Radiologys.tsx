import React, { useEffect, useState } from "react";
import { RadiologyStyled } from "./RadiologyStyled.styled";
import HeadingBannerModule from "../Pharmacy/HeadingBannerModule";
import {
  radiologyBannerDetails,
  radiologySearchTextChange,
} from "../Pharmacy/PharmacyObjectsModule";
import SearchByTextModule from "../Pharmacy/SearchByTextModule";
import MultiCarouselModal from "../Home/MultiCarouselModal";
import { useDispatch, useSelector } from "react-redux";
import HealthSaverCard from "../../components/HealthSaverCard/HealthSaverCard";
import ScanCenterCards from "./ScanCenterCards";
import { checkIsMobile } from "../../Scenes/common";
import {
  getAllCategoriesListAPI,
  getAllScansCityAPI,
  getAllScansListAPI,
  getAllScansNearByAPI,
} from "../../redux/slices/ctmri/ctmriService";
import BottomBanner from "./BottomBanner";
import { useHistory } from "react-router-dom";
import {
  getAllCategoriesAPI,
  getAllFilteredTests,
} from "../../redux/slices/labtest/labtestService";
import { IoCloseOutline } from "react-icons/io5";
import useHandleImageUrl from "../../components/hooks/useHandleImageUrl";
import NearbyCard from "../../components/NearbyCard/NearbyCard";
import { truncateText } from "../../Scenes/common";
import { LabtestStyled } from "../LabTestv2/LabTest.styled";
import { getNearbyVendorsAPI } from "../../redux/slices/Profile/ProfileService";
import MobileTopBanner from "../../components/Header/MobileTopBanner";
import { updateShowLoginModel } from "../../redux/slices/auth/authSlice";
import CategorieCard from "../Pharmacy/CategorieCard";

const Radiologys = () => {
  const parameter = "Book Scan";
  const sectionImg =
    "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1733743522813.png";
  const history = useHistory();
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [showSearchPopupModel, setShowSearchPopupModel] = useState(false);
  const sectionName = "ctmri";
  const { userCity, user } = useSelector((ReduxState: any) => ReduxState.auth);
  const { allScansNearBy } = useSelector((ReduxState: any) => ReduxState.ctmri);
  const { allTestsList, allCategoriesList } = useSelector(
    (ReduxState: any) => ReduxState.labtest
  );
  const { getFirstImageUrl } = useHandleImageUrl();
  const getLatestData = (city = "bengaluru") => {
    dispatch(getAllScansCityAPI({ city: city?.toLowerCase() }));
    dispatch(getAllScansNearByAPI({ city: city?.toLowerCase(), count: 4 }));
  };
  const { nearbyVendors, selectedCurrentAddress } = useSelector(
    (ReduxState: any) => ReduxState.profile
  );
  const handleBuyMedicine = (item: any) => {
    history.push(`/radiology/allScans/${item?.id}`, item);
  };
  const navigateTo = (id: any) => {
    history.push(`/radiology/scan-details/${id}`, sectionName);
  };
  const navigateToAllScans = (item: any) => {
    history.push(`/labtest/packages/${item?.id}`);
  };
  const addPackageToCart = (option: any) => {
    navigateTo(option);
  };
  useEffect(() => {
    getLatestData(userCity?.name);
  }, [userCity?.name]);
  useEffect(() => {
    dispatch(getAllScansListAPI());
  }, []);
  const handleonFilterName = async (event: any) => {
    setSearchText(event);
  };
  const getAllRadiologyData = () => {
    const body = {
      filters: {
        testType: "ctmri",
        searchText,
      },
    };
    dispatch(getAllFilteredTests(body));
  };

  useEffect(() => {
    console.log("selectedCurrentAddress : ", selectedCurrentAddress);
    const nearbyVendorsBody = {
      latitude: selectedCurrentAddress?.latitude,
      longitude: selectedCurrentAddress?.longitude,
      section_name: "radiology",
    };
    dispatch(getNearbyVendorsAPI(nearbyVendorsBody));
  }, [selectedCurrentAddress]);

  useEffect(() => {
    getAllRadiologyData();
    dispatch(getAllCategoriesAPI({ sectionName: "ctmri" }));
    dispatch(getAllCategoriesListAPI());
  }, [searchText]);
  const handleSearchGoTo = (searR: any) => {
    history.push(`/radiology/scan-details/${searR}`);
  };

  const handleShowSearchPopupModel = () => {
    if (!showSearchPopupModel) {
      setShowSearchPopupModel(false);
      console.log(showSearchPopupModel, "showSearchPopupModel");
    }
  };

  const handleToPharmacyUploadPrescription = () => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      history.push("/uploadprescription");
    }
  };
  return (
    <RadiologyStyled>
      <div>
        <div className="headeing-banner-web">
          <HeadingBannerModule
            details={radiologyBannerDetails}
            section="ctmri"
          />
        </div>
        <div className="headeing-banner-mobile">
          {/* <PharmacyBannerImage /> */}
          {checkIsMobile() && (
            <MobileTopBanner
              details={radiologyBannerDetails}
              handleonFilterName={handleonFilterName}
              setSearchText={setSearchText}
              searchText={searchText}
              searchedData={allTestsList?.data}
              handleSearchGoTo={handleSearchGoTo}
              showSearchPopupModel={showSearchPopupModel}
              // handleToClosePopUp={handleToClosePopUp}
              parameter={parameter}
              sectionName={"ctmri"}
              sectionImg={sectionImg}
            />
          )}
        </div>

        <div className="mobileview-uploadprescription">
          <div className="Upload-Prescription-mobile-btn ">
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1734771002662.png"
              alt="upload_icon"
            />
            <p>Order With Prescription</p>
            <button
              className="btn"
              onClick={handleToPharmacyUploadPrescription}
            >
              Order Now
            </button>
          </div>
        </div>

        <div className="search-by-name">
          <SearchByTextModule
            details={radiologySearchTextChange}
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
              {searchText?.length > 2 && allTestsList?.data?.length > 0 ? (
                allTestsList?.data?.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="search-popup-item"
                    onClick={() => handleSearchGoTo(item?.service_code)}
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
        <div className="radiology-heading-div">
          <p>Explore by Scan Category</p>
        </div>
        <div className="Scan-Category-MultiCarouselModal">
          <MultiCarouselModal
            itemstoShow={5}
            catogorySelect={handleBuyMedicine}
            allCategoriesList={allCategoriesList?.category_ids}
          />
        </div>
        <div className="mobile-view-categories">
          <CategorieCard
            allCategoriesList={allCategoriesList?.category_ids}
            catogorySelect={handleBuyMedicine}
          />
        </div>
        <div className="radiology-cards-main-div">
          <div className="radiology-sub-cards-title-div">
            <h5>Targeted Body Scans</h5>
            <button
              className=" radiology-sub-cards-All-btn btn"
              onClick={() => {
                history.push("/radiology/allScans");
              }}
            >
              View All
            </button>
          </div>
          <div className="healthCards">
            {allTestsList?.data
              ?.slice(0, 4)
              .map((packageItem: any, index: any) => (
                <HealthSaverCard
                  key={packageItem?.service_code || index}
                  title={packageItem?.service_name}
                  featureButtonText={packageItem?.type}
                  reportTime="N/A"
                  originalPrice={(packageItem?.actual_cost || 0).toString()}
                  discountedPrice={(
                    packageItem?.raphacure_cost ||
                    packageItem?.actual_cost ||
                    0
                  ).toString()}
                  discount={(packageItem?.discount_percentage || 0).toString()}
                  addToCart={() => {
                    addPackageToCart(packageItem?.service_code);
                  }}
                  section={"radiology"}
                />
              ))}
          </div>
        </div>

        <div className="Centers-cards-main-div">
          <div className="common-sub-cards-main-div">
            <div className="common-sub-cards-title-div">
              <h5>Best Scan Centers Near You</h5>
              <button
                className="btn"
                onClick={() => {
                  history.push("/radiology/allScansNearMe");
                }}
              >
                View All
              </button>
            </div>
            <LabtestStyled>
              <div className="nearbyCards">
                {nearbyVendors?.filteredVendors || nearbyVendors?.vendors ? (
                  (nearbyVendors?.filteredVendors || nearbyVendors?.vendors)
                    ?.slice(0, 5)
                    .map((vendor: any, index: any) => (
                      <NearbyCard
                        key={vendor?.id || index}
                        title={vendor?.name || "N/A"} // Vendor name
                        image={vendor?.image}
                        rating={(vendor?.rating || "0").toString()}
                        distance={`${parseFloat(
                          vendor?.distance_km || 0
                        ).toFixed(2)} Km`}
                        location={truncateText(vendor?.address, 40) || "N/A"}
                        id={vendor?.id}
                      />
                    ))
                ) : (
                  <p> No Nearby Radiology Centres Found</p>
                )}
              </div>
            </LabtestStyled>
          </div>
        </div>

        <div className="bottom-banner">
          <BottomBanner />
        </div>
      </div>
    </RadiologyStyled>
  );
};

export default Radiologys;
