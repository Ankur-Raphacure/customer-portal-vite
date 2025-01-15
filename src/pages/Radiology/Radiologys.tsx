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

const Radiologys = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [showSearchPopupModel, setShowSearchPopupModel] = useState(false);
  const sectionName = "ctmri";
  const { userCity } = useSelector((ReduxState: any) => ReduxState.auth);
  const { allScansNearBy } = useSelector((ReduxState: any) => ReduxState.ctmri);
  const { allTestsList, allCategoriesList } = useSelector(
    (ReduxState: any) => ReduxState.labtest
  );
  const { getFirstImageUrl } = useHandleImageUrl();
  const getLatestData = (city = "bengaluru") => {
    dispatch(getAllScansCityAPI({ city: city?.toLowerCase() }));
    dispatch(getAllScansNearByAPI({ city: city?.toLowerCase(), count: 4 }));
  };
  const handleBuyMedicine = (item: any) => {
    history.push(`/radiology/allScans/${item?.id}`, item);
  };
  const navigateTo = (id: any) => {
    history.push(`/radiology/scan-details/${id}`, sectionName);
  };
  const navigateToAllScans = (id: any) => {
    history.push(`/labtest/packages/${id}`);
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
  return (
    <RadiologyStyled>
      <div>
        <HeadingBannerModule details={radiologyBannerDetails} section="ctmri" />

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
            <div className="allScansNearBy-main-div">
              {allScansNearBy?.vendors
                ?.slice(0, 4)
                .map((item: any, index: number) => (
                  <ScanCenterCards
                    viewScanCards={item}
                    handleNavigateDetails={navigateToAllScans}
                  />
                ))}
            </div>
          </div>
        </div>

        <BottomBanner />
      </div>
    </RadiologyStyled>
  );
};

export default Radiologys;
