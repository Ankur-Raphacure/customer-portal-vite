import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RadiologyStyled } from "./RadiologyStyled.styled";
import {
  getAllActiveBodyPartAPI,
  getAllCategoriesAPI,
  getAllFilteredTests,
  getAllgetActiveScanTypeAPI,
  getPharmacyCategoriesAPI,
} from "../../redux/slices/labtest/labtestService";
import {
  getAllScansListAPI,
  getAllScansCityAPI,
  getAllScansNearByAPI,
} from "../../redux/slices/ctmri/ctmriService";
import HealthSaverCard from "../../components/HealthSaverCard/HealthSaverCard";
import SideFilterModule from "../Pharmacy/SideFilterModule";
import SearchByTextModule from "../Pharmacy/SearchByTextModule";
import BreadCrumbModule from "../Pharmacy/BreadCrumbModule";
import PriceFilterModule from "./PriceFilterModule";
import ScanCenterCards from "./ScanCenterCards";
import { radiologySearchTextChange } from "../Pharmacy/PharmacyObjectsModule";
import { checkIsMobile } from "../../Scenes/common";
import MobileHeader from "../../components/Header/MobileHeader";

const allTypeList = [
  {
    name: "Male Radiologist",
    id: "male",
    link: `/pharmacy`,
  },
  {
    name: "Female Radiologist",
    id: "female",
    link: `/pharmacy`,
  },
];
const allTimeSlotList = [
  {
    name: "Morning",
    id: "",
    link: ``,
  },
  {
    name: "Afternoon",
    id: "",
    link: ``,
  },
  {
    name: "Evening",
    id: "",
    link: ``,
  },
];
const allDiscountList = [
  {
    name: "Labs Offering Discounts",
    id: "",
    link: ``,
  },
  {
    name: "Free Follow-Up COnsultations",
    id: "",
    link: ``,
  },
];
const patientReviewsList = [
  {
    name: "High Rated Labs",
    id: "",
    link: ``,
  },
  {
    name: "Verified Feedbacks",
    id: "",
    link: ``,
  },
];
const AllScansList = (props: any) => {
  const defaultCount = 9;
  let { sectionName } = props?.match?.params;
  let scanTypeName = props?.location?.state?.name;
  const list = [
    {
      title: "Radiology",
      link: `/radiology`,
    },
    {
      title: scanTypeName,
      link: `/radiology`,
    },
  ];
  const history = useHistory();
  const dispatch = useDispatch();
  const pageSize = 12;
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState("");
  const [minDiscount, setMinDiscount] = useState("");
  const [maxDiscount, setMaxDiscount] = useState("");
  const [categoryFilter, setCategoryFilter] = useState(
    sectionName ? ([Number(sectionName)] as any) : ([] as any)
  );

  const [bodyTypeFilter, setBodyTypeFilter] = useState([] as any);
  const [typeFilter, setTypeFilter] = useState([] as any);
  const [currentCount, setCurrentCount] = useState(defaultCount);
  const [maxLabtestsCount, setMaxLabtestsCount] = useState(20);
  const { allScansNearBy } = useSelector((ReduxState: any) => ReduxState.ctmri);
  const {
    allTestsList,
    MedicinesCount,
    allCategoriesList,
    allActiveBodyPartList,
  } = useSelector((ReduxState: any) => ReduxState.labtest);
  const [visibleCount, setVisibleCount] = useState(1);
  const isNearByAll =
    window.location.pathname === "/radiology/allScansNearMe" ? true : false;
  console.log("isNearByAll", isNearByAll);
  const { userCity } = useSelector((ReduxState: any) => ReduxState.auth);
  useEffect(() => {
    dispatch(getAllScansListAPI());
    dispatch(getPharmacyCategoriesAPI());
  }, []);
  useEffect(() => {
    getLatestData(userCity?.name);
  }, [userCity?.name]);
  const getLatestData = (city = "bengaluru") => {
    dispatch(getAllScansCityAPI({ city: city?.toLowerCase() }));
    dispatch(getAllScansNearByAPI({ city: city?.toLowerCase(), count: 100 }));
  };
  const sections = "ctmri";
  const addPackageToCart = (id: any) => {
    history.push(`/radiology/scan-details/${id}`, sections);
  };
  const navigateToAllScans = (item: any) => {
    history.push(`/labtest/packages/${item?.id}`);
  };
  const handleClearAll = () => {
    setSortBy("");
    setMinPrice(0);
    setMaxPrice("");
    setMinDiscount("");
    setMaxDiscount("");
    setBodyTypeFilter([]);
    setCategoryFilter([]);
    setCurrentCount(defaultCount);
  };
  const handleChangeTypeFilter = (id: any) => {
    const prevcaids = [...typeFilter];
    if (prevcaids?.includes(id)) {
      const findINdex = prevcaids.findIndex((itemId: any) => itemId === id);
      prevcaids.splice(findINdex, 1);
    } else {
      prevcaids.push(id);
    }
    setTypeFilter(prevcaids);
    setBodyTypeFilter([]);
    setMinPrice(0);
    setMaxPrice("");
    setMinDiscount("");
    setMaxDiscount("");
  };
  const handleChangeBodyTypeFilter = (id: any) => {
    const prevcaids = [...bodyTypeFilter];
    if (prevcaids?.includes(id)) {
      const findINdex = prevcaids.findIndex((itemId: any) => itemId === id);
      prevcaids.splice(findINdex, 1);
    } else {
      prevcaids.push(id);
    }
    setBodyTypeFilter(prevcaids);
  };
  const handleChangeCategoryFilter = (id: any) => {
    const prevcaids = [...categoryFilter];
    if (prevcaids?.includes(id)) {
      const findINdex = prevcaids.findIndex((itemId: any) => itemId === id);
      prevcaids.splice(findINdex, 1);
    } else {
      prevcaids.push(id);
    }
    setCategoryFilter(prevcaids);
    setBodyTypeFilter([]);
    setMinPrice(0);
    setMaxPrice("");
    setMinDiscount("");
    setMaxDiscount("");
  };
  const filterPriceRange = (value: any) => {
    setMinPrice(value?.[0] ?? 0);
    setMaxPrice(value?.[1]);
  };
  const handleonFilterDiscount = (value: any) => {
    setMinDiscount(minDiscount != value[0] ? value[0] : "");
    setMaxDiscount(maxDiscount != value[1] ? value[1] : "");
  };
  const handleInputChange = (value: any) => {
    setMinPrice(minDiscount != value[0] ? value[0] : "");
    setMaxPrice(maxDiscount != value[1] ? value[1] : "");
  };
  const handleonFilterName = async (event: any) => {
    setSearchText(event);
    handleClearAll();
  };
  const handleSortChange = (value: any) => {
    setSortBy(value);
  };
  const setSelectedSortOption = (value: any) => {
    setSortBy(value);
  };
  const getAllUsersCall = async () => {
    let body = {} as any;
    if (searchText) {
      body.searchText = searchText;
    }
    if (sortBy) {
      body.sortBy = sortBy;
    }
    if (categoryFilter) {
      body.categoryIds = categoryFilter;
    }
    if (bodyTypeFilter && bodyTypeFilter?.length > 0) {
      body.bodyPart = bodyTypeFilter;
    }
    if (minPrice === 0 || minPrice) {
      body.minPrice = minPrice;
    }
    if (maxPrice) {
      body.maxPrice = maxPrice;
    }
    if (minDiscount) {
      body.minDiscount = minDiscount;
    }
    if (maxDiscount) {
      body.maxDiscount = maxDiscount;
    }
    body.testType = "ctmri";
    await dispatch(
      getAllFilteredTests({
        filters: { ...body, count: currentCount, page: 1, testType: "ctmri" },
      })
    );
  };
  useEffect(() => {
    getAllUsersCall();
    dispatch(getAllCategoriesAPI({ sectionName: "ctmri" }));
  }, [
    visibleCount,
    pageSize,
    JSON.stringify(categoryFilter),
    searchText,
    sortBy,
    maxPrice,
    minPrice,
    maxDiscount,
    minDiscount,
    bodyTypeFilter,
  ]);
  useEffect(() => {
    dispatch(
      getAllgetActiveScanTypeAPI({
        filters: { categoryIds: categoryFilter },
      })
    );
  }, [dispatch, categoryFilter]);
  useEffect(() => {
    dispatch(
      getAllActiveBodyPartAPI({
        filters: { categoryIds: categoryFilter },
      })
    );
  }, [dispatch, categoryFilter]);
  const handleLoadMore = () => {
    const newCount = currentCount + 9;
    setCurrentCount(newCount);
    const body = {
      filters: {
        categoryIds: categoryFilter,
        count: newCount,
        page: 1,
        testType: "ctmri",
      },
    };
    dispatch(getAllFilteredTests(body));
  };
  useEffect(() => {
    if (MedicinesCount) {
      setMaxLabtestsCount(MedicinesCount);
    } else {
      setMaxLabtestsCount(0);
    }
  }, [allTestsList, MedicinesCount]);
  return (
    <RadiologyStyled>
      <div className="all-scans-list-content">
        <div className="container-fluid scan-list-data-content">
          {isNearByAll ? (
            <></>
          ) : (
            <>
              <div className="filter-module-div">
                <SideFilterModule
                  origin={"ctmri"}
                  handleClearAll={handleClearAll}
                  handleChangeCategoryFilter={handleChangeCategoryFilter}
                  handleonFilterDiscount={handleonFilterDiscount}
                  filterPriceRange={filterPriceRange}
                  handleChangeBodyTypeFilter={handleChangeBodyTypeFilter}
                  handleChangeTypeFilter={handleChangeTypeFilter}
                  setSelectedSortOption={setSelectedSortOption}
                  handleInputChange={handleInputChange}
                  allTypeList={allTypeList}
                  allCategoriesList={allCategoriesList}
                  allBodyTypeList={allActiveBodyPartList}
                  allTimeSlotList={allTimeSlotList}
                  allDiscountList={allDiscountList}
                  patientReviewsList={patientReviewsList}
                  bodyTypeFilter={bodyTypeFilter}
                  minDiscount={minDiscount}
                  maxDiscount={maxDiscount}
                  selectedCategories={categoryFilter}
                  pathName={"/radiology"}
                />
              </div>
            </>
          )}

          <div className="filter-List-module-div">
            <BreadCrumbModule list={list} />
            <div className="filter-byname-div">
              <div className="filter-by-name">
                <SearchByTextModule
                  details={radiologySearchTextChange}
                  handleonFilterName={handleonFilterName}
                  setSearchText={setSearchText}
                  searchText={searchText}
                  origin={"Radiology"}
                />
              </div>
              <div className="PriceFilterModule">
                <PriceFilterModule handleSortChange={handleSortChange} />
              </div>
            </div>

            <div>
              {isNearByAll ? (
                <>
                  <div className="page-count-div">
                    <p>
                      Showing 1 to{" "}
                      {Math.min(currentCount, allScansNearBy?.vendorCount)}{" "}
                      Tests of {allScansNearBy?.vendorCount} Labtests
                    </p>
                  </div>
                  <div className="allScansNearBy-main-div">
                    {allScansNearBy?.vendors?.map(
                      (item: any, index: number) => (
                        <ScanCenterCards
                          viewScanCards={item}
                          handleNavigateDetails={navigateToAllScans}
                        />
                      )
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="page-count-div">
                    <p>
                      Showing 1 to {Math.min(currentCount, maxLabtestsCount)}{" "}
                      Tests of {maxLabtestsCount} Labtests
                    </p>
                    <div className="scan-list-data-div">
                      {allTestsList?.data?.map((item: any, index: number) => {
                        if (!item.actual_cost) {
                          return;
                        } else {
                          return (
                            <HealthSaverCard
                              key={item?.service_code || index}
                              title={item?.service_name}
                              featureButtonText={item?.type}
                              reportTime="N/A"
                              originalPrice={(
                                item?.actual_cost || 0
                              ).toString()}
                              discountedPrice={(
                                item?.raphacure_cost ||
                                item?.actual_cost ||
                                0
                              ).toString()}
                              discount={(
                                item?.discount_percentage || 0
                              ).toString()}
                              addToCart={() => {
                                addPackageToCart(item?.service_code);
                              }}
                              section={"radiology"}
                            />
                          );
                        }
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        {currentCount < maxLabtestsCount && (
          <div className="pagination-box-sec-pha">
            <button onClick={handleLoadMore} className="load-more-btn">
              Load More
            </button>
          </div>
        )}
      </div>
    </RadiologyStyled>
  );
};

export default AllScansList;
