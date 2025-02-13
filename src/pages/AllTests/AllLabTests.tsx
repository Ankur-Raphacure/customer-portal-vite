import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { PharmacyStyled } from "./Pharmacy.styled";
import {
  getAllActiveTubes,
  getAllCategoriesAPI,
  getAllFilteredTests,
} from "../../redux/slices/labtest/labtestService";
import { truncateText } from "../../Scenes/common";
import { Select } from "antd";
import Loader from "../../components/Loader/Loader";
import SideFilterModule from "../Pharmacy/SideFilterModule";
import SearchByTextModule from "../Pharmacy/SearchByTextModule";
import { pharmacySearchTextChange } from "../Pharmacy/PharmacyObjectsModule";
import BreadCrumbModule from "../Pharmacy/BreadCrumbModule";
import { AllLabTestsStyled } from "./AllLabTests.styled";
import { LabtestStyled } from "../LabTestv2/LabTest.styled";
import HealthSaverCard from "../../components/HealthSaverCard/HealthSaverCard";
import "antd/dist/antd.css";
import { debounce } from "lodash";
import { Pagination } from "react-bootstrap";
import { toast } from "react-toastify";
import { getAllVendorDetailsAPI } from "../../redux/slices/bookingScreen/bookingScreenService";

const AllLabTest = (props: any) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { cartItems } = useSelector((ReduxState: any) => ReduxState.checkout);
  const pProducts =
    cartItems?.carts?.find((itemv: any) => itemv?.section_key === "labtest") ||
    [];
  const [labtestCategories, setLabtestCategories] = useState([]);
  const [labtestTubes, setLabtestTubes] = useState([]);
  const [minDiscount, setMinDiscount] = useState(0);
  const [maxDiscount, setMaxDiscount] = useState(0);
  const { allTestsList, MedicinesCount } = useSelector(
    (ReduxState: any) => ReduxState.labtest
  );
  const { vendors } = useSelector(
    (ReduxState: any) => ReduxState.bookingReview
  );
  const [maxLabtestsCount, setMaxLabtestsCount] = useState(20);
  const [selectedCategories, setSelectedCategories] = useState<any>([]);
  const [selectedVendors, setSelectedVendors] = useState<any>([]);
  const [selectedTubes, setSelectedTubes] = useState<any>([]);
  const [fastingToggle, setFastingToggle] = useState(false);
  const [currentCount, setCurrentCount] = useState(9);

  const testsPerPage = 9;
  useEffect(() => {
    if (MedicinesCount) {
      setMaxLabtestsCount(MedicinesCount);
    } else {
      setMaxLabtestsCount(0);
    }
  }, [allTestsList, MedicinesCount]);

  useEffect(() => {
    console.log("allTestsList : ", allTestsList);
  }, [allTestsList]);

  const debouncedFetchLabTests = debounce(async (filters, dispatch) => {
    try {
      setIsLoading(true);
      await dispatch(getAllFilteredTests(filters));
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching lab tests:", error);
    }
  }, 300);

  const fetchLabTests = async (filters: any) => {
    setIsLoading(true);
    await debouncedFetchLabTests(filters, dispatch);
    setIsLoading(false);
  };

  const getAllLabtests = () => {
    const body = {
      filters: {
        categoryIds: [],
        count: currentCount,
        page: 1,
      },
    };
    dispatch(getAllFilteredTests(body));
  };

  const handleLoadMore = () => {
    const newCount = currentCount + 9;
    setCurrentCount(newCount);

    const body = {
      filters: {
        categoryIds: [],
        count: newCount,
        page: 1,
      },
    };
    dispatch(getAllFilteredTests(body));
  };

  useEffect(() => {
    getAllLabtests();
  }, []);

  const handleAddToCard = (testId: any) => {
    if (testId) {
      history.push(`/labTestDetils/${testId}`);
    }
  };

  const renderLoadMoreButton = () => {
    if (maxLabtestsCount <= currentCount) return null;

    return (
      <button className="loadMoreBtn mt-4" onClick={handleLoadMore}>
        Load More
      </button>
    );
  };

  const handleSortChange = (value: any) => {
    const filters = {
      filters: {
        sortBy: value,
        count: currentCount,
        page: 1,
      },
    };
    dispatch(getAllFilteredTests(filters));
  };

  const handleRangeChange = (start: any, end: any) => {
    setSelectedCategories([]);
    setSelectedVendors([]);
    setSelectedTubes([]);
    setMinDiscount(0);
    setMaxDiscount(0);
    setFastingToggle(false);
    const updatedFilters = {
      filters: {
        count: currentCount,
        page: 1,
        minPrice: parseInt(start, 10),
        maxPrice: parseInt(end, 10),
      },
    };
    dispatch(getAllFilteredTests(updatedFilters));
  };

  const handleSearchTest = (searchText: any) => {
    const filters = {
      filters: {
        searchText,
        count: currentCount,
        page: 1,
      },
    };
    dispatch(getAllFilteredTests(filters));
  };

  const defaultFilters = {
    filters: {
      count: currentCount,
      page: 1,
    },
  };

  const handleClearAll = () => {
    dispatch(getAllFilteredTests(defaultFilters));
    setSelectedCategories([]);
    setSelectedVendors([]);
    setSelectedTubes([]);
    setMinDiscount(0);
    setMaxDiscount(0);
    setFastingToggle(false);
  };

  const handleDiscountChange = (start: any, end: any) => {
    setSelectedCategories([]);
    setSelectedVendors([]);
    setSelectedTubes([]);
    setFastingToggle(false);
    const filters = {
      filters: {
        minDiscount: parseInt(start, 10),
        maxDiscount: parseInt(end, 10),
        count: currentCount,
        page: 1,
      },
    };
    dispatch(getAllFilteredTests(filters));
  };

  useEffect(() => {
    getLabtestCategoriesAPI();
    getLabtestTubesAPI();
    dispatch(getAllVendorDetailsAPI());
  }, []);

  const getFilteredTubes = (e: any, test: any) => {
    const selected = e.target.checked;
    console.log("selected : ", selected);
    setSelectedCategories([]);
    setSelectedVendors([]);
    setMinDiscount(0);
    setMaxDiscount(0);
    setFastingToggle(false);
    if (!selected) {
      const updatedTubes = selectedTubes.filter(
        (tube: any) => tube !== test.tube_name
      );
      setSelectedTubes(updatedTubes);
      const newFilter = {
        filters: {
          count: currentCount,
          page: 1,
          tubeNames: updatedTubes,
        },
      };
      dispatch(getAllFilteredTests(newFilter));
      return;
    }

    setSelectedTubes((prev: any) => {
      const updated = selected
        ? [...prev, test.tube_name]
        : prev.filter((code: any) => code !== test.tube_name);
      console.log("Selected Tests:", updated);
      return updated;
    });
  };

  useEffect(() => {
    if (selectedTubes?.length > 0) {
      (async () => {
        const res = (await dispatch(
          getAllFilteredTests({
            filters: {
              tubeNames: selectedTubes,
              count: currentCount,
              page: 1,
            },
          })
        )) as any;

        if (res?.error) {
          toast.error(res?.error?.message || "Unknown Error Occurred");
        }
      })();
    }
  }, [selectedTubes]);

  const getFilteredLabtests = async (newCategory: number) => {
    if (!newCategory) return;
    console.log("selectedCategories : ", selectedCategories);
    console.log("newCategory : ", newCategory);

    if (selectedCategories.includes(newCategory)) {
      console.log("contains");

      // Remove newCategory from selectedCategories
      const updatedCategories = selectedCategories.filter(
        (category: any) => category !== newCategory
      );

      setSelectedCategories(updatedCategories);

      const filters = {
        filters: {
          categoryIds: updatedCategories, // Use updated categories
          count: currentCount,
          page: 1,
        },
      };
      dispatch(getAllFilteredTests(filters));
      return;
    }

    const updatedCategories = [...selectedCategories, newCategory]; // Added this line
    setSelectedCategories(updatedCategories); // Added this line
    setSelectedTubes([]);
    setSelectedVendors([]);
    setMinDiscount(0);
    setMaxDiscount(0);
    setFastingToggle(false);
    const filters = {
      filters: {
        categoryIds: updatedCategories, // Now using array with all categories
        count: currentCount,
        page: 1,
      },
    };

    const res = (await dispatch(getAllFilteredTests(filters))) as any;
    if (res?.error) {
      toast.error(res?.error?.message || "Unknown Error Occurred");
    }
  };

  const getFilteredVendorsTests = async (newVendor: number) => {
    if (!newVendor) return;
    console.log("selectedVendors : ", selectedVendors);
    console.log("newVendor : ", newVendor);

    if (selectedVendors.includes(newVendor)) {
      console.log("contains");

      // Remove newVendor from selectedVendors
      const updatedVendors = selectedVendors.filter(
        (vendr: any) => vendr !== newVendor
      );

      setSelectedVendors(updatedVendors);

      const filters = {
        filters: {
          vendorIds: updatedVendors, // Use updated vendors
          count: currentCount,
          page: 1,
          testType: "diagnostic",
        },
      };
      dispatch(getAllFilteredTests(filters));
      return;
    }

    const updatedVendors = [...selectedVendors, newVendor]; // Added this line
    setSelectedVendors(updatedVendors); // Added this line
    setSelectedTubes([]);
    setSelectedCategories([]);
    setMinDiscount(0);
    setMaxDiscount(0);
    setFastingToggle(false);
    const filters = {
      filters: {
        vendorIds: updatedVendors, // Now using array with all categories
        count: currentCount,
        page: 1,
        testType: "diagnostic",
      },
    };

    const res = (await dispatch(getAllFilteredTests(filters))) as any;
    if (res?.error) {
      toast.error(res?.error?.message || "Unknown Error Occurred");
    }
  };

  const getLabtestCategoriesAPI = async () => {
    const res = (await dispatch(
      getAllCategoriesAPI({ sectionName: "labtest" })
    )) as any;
    setLabtestCategories(res?.payload?.data);
  };

  const getLabtestTubesAPI = async () => {
    const res = (await dispatch(getAllActiveTubes({ filters: {} }))) as any;
    setLabtestTubes(res?.payload?.data);
  };

  const handleonFilterDiscount = async (val: number[]) => {
    let start: number = 0;
    let end: number = 0;

    if (val.length === 1) {
      start = 0;
      end = val[0];
    } else if (val.length === 2) {
      start = val[0];
      end = val[1];
    }
    setMaxDiscount(end);
    setMinDiscount(start);

    console.log("Start Discount:", start);
    console.log("End Discount:", end);
    handleDiscountChange(start, end);
  };

  const handleonFilterName = async (event: any) => {
    handleSearchTest(event);
  };

  const onChange = (event: any) => {
    console.log(event, "event");
  };

  const handleInputChange = async (range: any) => {
    console.log("range : ", range);

    if (Array.isArray(range)) {
      console.log("First Index:", range[0]);
      console.log("Second Index:", range[1]);
      const start = range[0];
      const end = range[1];
      if (start !== "" && end !== "") {
        handleRangeChange(start, end);
      }
    } else {
      console.error("Input is not an array:", range);
    }
  };

  const handleToggleChange = async () => {
    setFastingToggle(!fastingToggle);
    setSelectedCategories([]);
    setSelectedVendors([]);
    setSelectedTubes([]);
    setMinDiscount(0);
    setMaxDiscount(0);
    getLabtestCategoriesAPI();
    getLabtestTubesAPI();
    const res = (await dispatch(
      getAllFilteredTests({
        filters: {
          fasting: !fastingToggle,
          count: testsPerPage,
          page: 1,
        },
      })
    )) as any;

    if (res?.error) {
      toast.error(res?.error?.message || "Unknown Error Occured");
    }
  };

  const list = [
    {
      title: "Labtest",
      link: `/labtest`,
    },
    {
      title: "Tests",
      link: `/labtest`,
    },
  ];
  return (
    <LabtestStyled>
      <AllLabTestsStyled>
        {isLoading && <Loader />}
        <div className="all-pharmacy-page-div">
          <div className="filter-module-div">
            <SideFilterModule
              handleonFilterDiscount={handleonFilterDiscount}
              onChange={onChange}
              handleClearAll={handleClearAll}
              handleInputChange={handleInputChange}
              filterPriceRange={handleInputChange}
              minDiscount={minDiscount}
              maxDiscount={maxDiscount}
              allCategoriesList={labtestCategories}
              labtestTubes={labtestTubes}
              selectedTubes={selectedTubes}
              selectedCategories={selectedCategories}
              handleChangeCategoryFilter={getFilteredLabtests}
              handleChangeTubesFilter={getFilteredTubes}
              fastingToggle={fastingToggle}
              handleToggleChange={handleToggleChange}
              handleChangeVendorFilter={getFilteredVendorsTests}
              selectedVendors={selectedVendors}
              allVendors={vendors}
              origin={"labtest"}
            />
          </div>
          <div className="right-card-module-div">
            <BreadCrumbModule
              moduleName={"labtest"}
              medicines={"All"}
              list={list}
            />
            <div className="d-flex flex-row justify-content-between mb-4 searchSort">
              <SearchByTextModule
                details={pharmacySearchTextChange}
                handleonFilterName={handleonFilterName}
                origin={"labtest"}
              />
              <div className="btn-filter-module-div">
                <div className="selector-filter-sub-module-div">
                  <Select
                    // showSearch
                    placeholder="Sort By"
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    defaultValue="discount"
                    onChange={handleSortChange} // Pass value directly
                    options={[
                      { value: "discount", label: "Better Discount" },
                      { value: "desc", label: "Price: High to Low" },
                      { value: "asc", label: "Price: Low to High" },
                    ]}
                  />
                </div>
              </div>
            </div>

            <div className="page-count-div">
              <p>
                Showing 1 to {currentCount} Tests of {maxLabtestsCount} Labtests
              </p>
            </div>

            <div className="healthCards">
              {allTestsList?.data?.length === 0 && (
                <p>No Tests Found for the Selected Filters</p>
              )}
              {(Array.isArray(allTestsList)
                ? allTestsList
                : allTestsList?.data || []
              )?.map((testItem: any, index: any) => {
                const isAddedToCart = pProducts?.tests?.find(
                  (item2: any) => item2?.service_code === testItem?.service_code
                );

                return (
                  <HealthSaverCard
                    key={testItem?.service_code || index}
                    title={testItem?.service_name || "N/A"} // Test name
                    subtitle="Diagnostic Test" // Static subtitle for test cards
                    featureButtonText="Book Test" // Custom button text
                    reportTime="N/A" // Placeholder as report time is not provided
                    testCount="1" // Each test is one item
                    originalPrice={(
                      testItem?.price?.actual_cost ||
                      testItem?.actual_cost ||
                      0
                    ).toString()} // Test's actual cost
                    discountedPrice={(
                      testItem?.price?.discounted_price ||
                      testItem?.raphacure_cost ||
                      0
                    ).toString()} // Discounted price
                    discount={(
                      testItem?.price?.discount_percentage ||
                      testItem?.discount_percentage ||
                      0
                    ).toString()} // Discount percentage
                    hoverTitle={testItem?.service_name}
                    isAddedtoCart={isAddedToCart}
                    addToCart={() => {
                      handleAddToCard(testItem?.service_code);
                    }}
                  />
                );
              })}
            </div>
            <div className="d-flex">{renderLoadMoreButton()}</div>
          </div>
        </div>
      </AllLabTestsStyled>
    </LabtestStyled>
  );
};

export default AllLabTest;
