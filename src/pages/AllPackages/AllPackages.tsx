import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { PharmacyStyled } from "./Pharmacy.styled";
import {
  getAllCategoriesAPI,
  getAllFilteredPackages,
  getAllFilteredTests,
} from "../../redux/slices/labtest/labtestService";
import { truncateText } from "../../Scenes/common";
import { Select } from "antd";
import Loader from "../../components/Loader/Loader";
import SideFilterModule from "../Pharmacy/SideFilterModule";
import SearchByTextModule from "../Pharmacy/SearchByTextModule";
import { pharmacySearchTextChange } from "../Pharmacy/PharmacyObjectsModule";
import BreadCrumbModule from "../Pharmacy/BreadCrumbModule";
import { AllPackagesStyled } from "./AllPackages.styled";
import { LabtestStyled } from "../LabTestv2/LabTest.styled";
import HealthSaverCard from "../../components/HealthSaverCard/HealthSaverCard";
import "antd/dist/antd.css";
import { debounce } from "lodash";
import { Pagination } from "react-bootstrap";
import { toast } from "react-toastify";
import { getAllVendorDetailsAPI } from "../../redux/slices/bookingScreen/bookingScreenService";

const AllPackages = (props: any) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { cartItems } = useSelector((ReduxState: any) => ReduxState.checkout);
  const pProducts =
    cartItems?.carts?.find((itemv: any) => itemv?.section_key === "labtest") ||
    [];
  const { configInfo } = useSelector((ReduxState: any) => ReduxState.config);
  const { selectedFilterType } = useSelector(
    (ReduxState: any) => ReduxState.generic
  );
  const [minDiscount, setMinDiscount] = useState(0);
  const [maxDiscount, setMaxDiscount] = useState(0);
  console.log(selectedFilterType, "allPharmacyCategoriesList");
  const [labPackageCategories, setLabPackageCategories] = useState([]);
  const { allPackagesList, allTestsList } = useSelector(
    (ReduxState: any) => ReduxState.labtest
  );
  const { vendors } = useSelector(
    (ReduxState: any) => ReduxState.bookingReview
  );
  const [maxLabPackagesCount, setMaxLabPackagesCount] = useState(20); // total num of labtest available, to be used for pagination
  const [selectedCategories, setSelectedCategories] = useState<any>([]);
  const [fastingToggle, setFastingToggle] = useState(false);
  const [corpToggle, setCorpToggle] = useState(false);
  const [selectedVendors, setSelectedVendors] = useState<any>([]);
  const [testsList, setTestsList] = useState<any>([]);
  const [selectedTests, setSelectedTests] = useState<string[]>([]);
  const [currentCount, setCurrentCount] = useState(9);

  const testsPerPage = 9;
  useEffect(() => {
    if (allPackagesList?.pagination?.total) {
      setMaxLabPackagesCount(allPackagesList?.pagination?.total);
    } else {
      setMaxLabPackagesCount(0);
    }
  }, [allPackagesList]);

  useEffect(() => {
    console.log("allPackagesList : ", allPackagesList);
  }, [allPackagesList]);

  const debouncedFetchLabPackages = debounce(async (filters, dispatch) => {
    try {
      setIsLoading(true);
      await dispatch(getAllFilteredPackages(filters));
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching lab tests:", error);
    }
  }, 300);

  const fetchLabPackages = async (filters: any) => {
    setIsLoading(true);
    await debouncedFetchLabPackages(filters, dispatch);
    setIsLoading(false);
  };

  const getAllPackagess = () => {
    const body = {
      filters: {
        categoryIds: [], // Use the derived array here
        count: currentCount,
        isCorporate: false,
        page: 1,
      },
    };
    dispatch(getAllFilteredPackages(body));
  };

  const handleLoadMore = () => {
    const newCount = currentCount + 9;
    setCurrentCount(newCount);

    const body = {
      filters: {
        categoryIds: [],
        count: newCount,
        isCorporate: false,
        page: 1,
      },
    };
    dispatch(getAllFilteredPackages(body));
  };

  useEffect(() => {
    getAllPackagess();
  }, []);

  const handleAddToCard = (testId: any) => {
    if (testId) {
      history.push(`/labPackageDetils/${testId}`);
    }
  };

  const renderLoadMoreButton = () => {
    if (maxLabPackagesCount <= currentCount) return null;

    return (
      <button className="loadMoreBtn" onClick={handleLoadMore}>
        Load More
      </button>
    );
  };

  const handleSortChange = (value: any) => {
    const filters = {
      filters: {
        count: currentCount,
        page: 1,
        isCorporate: false,
        sortBy: value,
      },
    };
    dispatch(getAllFilteredPackages(filters));
  };

  const handleRangeChange = (start: any, end: any) => {
    setSelectedCategories([]);
    setSelectedVendors([]);
    setSelectedTests([]);
    setMinDiscount(0);
    setMaxDiscount(0);
    setFastingToggle(false);
    setCorpToggle(false);
    const filters = {
      filters: {
        count: currentCount,
        page: 1,
        isCorporate: false,
        minPrice: parseInt(start, 10),
        maxPrice: parseInt(end, 10),
      },
    };
    dispatch(getAllFilteredPackages(filters));
  };

  const handleSearchTest = (searchText: any) => {
    const filters = {
      filters: {
        count: currentCount,
        page: 1,
        isCorporate: corpToggle,
        searchText,
      },
    };
    dispatch(getAllFilteredPackages(filters));
  };

  const defaultFilters = {
    filters: {
      categoryIds: [],
      count: currentCount,
      isCorporate: false,
      page: 1,
      searchText: "",
    },
  };

  const handleClearAll = () => {
    dispatch(getAllFilteredPackages(defaultFilters));
    setSelectedCategories([]);
    setSelectedVendors([]);
    setSelectedTests([]);
    setMinDiscount(0);
    setMaxDiscount(0);
    setFastingToggle(false);
    setCorpToggle(false);
  };

  const handleDiscountChange = (start: any, end: any) => {
    setSelectedCategories([]);
    setSelectedVendors([]);
    setSelectedTests([]);
    setFastingToggle(false);
    setCorpToggle(false);
    const filters = {
      filters: {
        count: currentCount,
        page: 1,
        minDiscount: parseInt(start, 10),
        isCorporate: false,
        maxDiscount: parseInt(end, 10),
      },
    };

    dispatch(getAllFilteredPackages(filters));
  };

  useEffect(() => {
    getPackagesCategoriesAPI();
    dispatch(getAllVendorDetailsAPI());
  }, []);

  useEffect(() => {
    console.log("vendors : ", vendors);
  }, [vendors]);

  const getFilteredPackages = async (newCategory: number) => {
    if (!newCategory) return;

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
    setSelectedVendors([]);
    setSelectedTests([]);
    setMinDiscount(0);
    setMaxDiscount(0);
    setFastingToggle(false);
    setCorpToggle(false);
    const filters = {
      filters: {
        categoryIds: updatedCategories, // Now using array with all categories
        count: currentCount,
        isCorporate: false,
        page: 1,
      },
    };

    const res = (await dispatch(getAllFilteredPackages(filters))) as any;
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
          isCorporate: false,
          page: 1,
        },
      };
      dispatch(getAllFilteredPackages(filters));
      return;
    }

    const updatedVendors = [...selectedVendors, newVendor]; // Added this line
    setSelectedVendors(updatedVendors); // Added this line
    setSelectedCategories([]);
    setMinDiscount(0);
    setMaxDiscount(0);
    setFastingToggle(false);
    const filters = {
      filters: {
        vendorIds: updatedVendors, // Now using array with all categories
        count: currentCount,
        isCorporate: false,
        page: 1,
      },
    };

    const res = (await dispatch(getAllFilteredPackages(filters))) as any;
    if (res?.error) {
      toast.error(res?.error?.message || "Unknown Error Occurred");
    }
  };

  const getPackagesCategoriesAPI = async () => {
    const res = (await dispatch(
      getAllCategoriesAPI({ sectionName: "packages" })
    )) as any;
    setLabPackageCategories(res?.payload?.data);
  };

  const handleonFilterDiscount = async (val: any) => {
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

  useEffect(() => {
    (async () => {
      const res = (await dispatch(
        getAllFilteredTests({
          filters: {},
        })
      )) as any;

      if (res?.error) {
        toast.error(res?.error?.message || "Unknown Error Occurred");
      }
    })();
  }, [dispatch]);

  useEffect(() => {
    sanitizeTestsList();
    console.log("allTestsList : ", allTestsList);
  }, [allTestsList]);

  const handleTestsSelect = (e: any, test: any) => {
    const selected = e.target.checked;
    console.log("selected : ", selected);
    setSelectedCategories([]);
    setSelectedVendors([]);
    setMinDiscount(0);
    setMaxDiscount(0);
    setFastingToggle(false);
    setCorpToggle(false);
    if (!selected) {
      const updatedTests = selectedTests.filter(
        (currTest: any) => currTest !== test.service_code
      );
      console.log("updatedTests : ", updatedTests);

      setSelectedTests(updatedTests);
      const newFilter = {
        filters: {
          count: currentCount,
          page: 1,
          isCorporate: false,
          testIds: updatedTests,
        },
      };
      dispatch(getAllFilteredPackages(newFilter));
      return;
    }

    setSelectedTests((prev) => {
      const updated = selected
        ? [...prev, test.service_code]
        : prev.filter((code) => code !== test.service_code);
      console.log("Selected Tests:", updated);
      return updated;
    });
  };

  useEffect(() => {
    if (selectedTests?.length > 0) {
      (async () => {
        const res = (await dispatch(
          getAllFilteredPackages({
            filters: {
              testIds: selectedTests,
              count: currentCount,
              isCorporate: false,
              page: 1,
            },
          })
        )) as any;

        if (res?.error) {
          toast.error(res?.error?.message || "Unknown Error Occurred");
        }
      })();
    }
  }, [selectedTests]);

  const sanitizeTestsList = async () => {
    if (
      !Array.isArray(allTestsList?.data) ||
      allTestsList?.data?.length === 0
    ) {
      return;
    }
    console.log("allTestsList : ", allTestsList);

    const sanitizedTestsList = allTestsList?.data?.map((test: any) => ({
      service_code: test.service_code,
      service_name: test.service_name,
    }));

    setTestsList(sanitizedTestsList);
  };

  useEffect(() => {
    console.log("pProducts : ", pProducts);
  }, [pProducts]);

  const handleToggleChange = async () => {
    setFastingToggle(!fastingToggle);
    setSelectedCategories([]);
    setSelectedVendors([]);
    setSelectedTests([]);
    setMinDiscount(0);
    setMaxDiscount(0);
    setCorpToggle(false);
    getPackagesCategoriesAPI();

    const res = (await dispatch(
      getAllFilteredPackages({
        filters: {
          fasting: !fastingToggle,
          count: testsPerPage,
          isCorporate: false,
          page: 1,
        },
      })
    )) as any;

    if (res?.error) {
      toast.error(res?.error?.message || "Unknown Error Occured");
    }
  };

  const handleCorpToggleChange = async () => {
    console.log("handleCorpToggleChange");

    setCorpToggle(!corpToggle);
    setSelectedCategories([]);
    setSelectedVendors([]);
    setSelectedTests([]);
    setMinDiscount(0);
    setMaxDiscount(0);
    setFastingToggle(false);
    getPackagesCategoriesAPI();
    const res = (await dispatch(
      getAllFilteredPackages({
        filters: {
          isCorporate: !corpToggle,
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
      title: "Packages",
      link: `/labtest`,
    },
  ];
  return (
    <LabtestStyled>
      <AllPackagesStyled>
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
              allCategoriesList={labPackageCategories}
              selectedCategories={selectedCategories}
              selectedTests={selectedTests}
              handleChangeCategoryFilter={getFilteredPackages}
              fastingToggle={fastingToggle}
              corpToggle={corpToggle}
              handleToggleChange={handleToggleChange}
              handleCorpToggleChange={handleCorpToggleChange}
              testsList={testsList}
              handleTestsSelect={handleTestsSelect}
              selectedVendors={selectedVendors}
              handleChangeVendorFilter={getFilteredVendorsTests}
              allVendors={vendors}
              origin={"package"}
            />
          </div>
          <div className="right-card-module-div">
            <BreadCrumbModule
              moduleName={"Labtest"}
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
                Showing 1 to {Math.min(currentCount, maxLabPackagesCount)}{" "}
                Package of {maxLabPackagesCount} Lab Packages
              </p>
            </div>

            <div className="healthCards">
              {allPackagesList?.data?.length === 0 && (
                <p>No Tests Found for the Selected Filters</p>
              )}
              {(Array.isArray(allPackagesList)
                ? allPackagesList
                : allPackagesList?.data || []
              )?.map((testItem: any, index: any) => {
                console.log("testItem : ", testItem);

                return (
                  <HealthSaverCard
                    key={testItem?.service_code || index}
                    title={truncateText(testItem?.service_name, 15) || "N/A"} // Test name
                    subtitle="Diagnostic Test" // Static subtitle for test cards
                    featureButtonText="Book Test" // Custom button text
                    reportTime="N/A" // Placeholder as report time is not provided
                    testCount={testItem?.tests?.length || "1"} // Each test is one item
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
      </AllPackagesStyled>
    </LabtestStyled>
  );
};

export default AllPackages;
