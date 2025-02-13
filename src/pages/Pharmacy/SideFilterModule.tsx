import React, { useEffect, useMemo, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Select, Slider, Switch } from "antd";
import { SideFilterModuleStyled, SidebarMenu } from "./SideFilterModule.styled";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { IoIosArrowDown, IoIosArrowForward, IoIosSearch } from "react-icons/io";

import { useSelector } from "react-redux";
import { IoArrowBackOutline } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import MobileTopBanner from "../../components/Header/MobileTopBanner";
import { checkIsMobile } from "../../Scenes/common";
const filterDiscount = [
  { value: ["10", "20"], label: "10 % To 20 %" },
  { value: ["20", "30"], label: "20 % To 30 %" },
  { value: ["30", "40"], label: "30 % To 40 %" },
  { value: ["40", "50"], label: "40 % To 50 %" },
  { value: ["50"], label: "Upto 50 %" },
];

const SideFilterModule = (props: any) => {
  const {
    allCategoriesList,
    labtestTubes,
    handleChangeTubesFilter,
    selectedTubes,
    selectedCategories,
    selectedVendors,
    selectedTests,
    categoryFilter,
    allBrandsList,
    brandFilter,
    bodyTypeFilter,
    minDiscount,
    maxDiscount,
    allTypeList,
    typeFilter,
    fastingToggle,
    corpToggle,
    handleToggleChange,
    handleCorpToggleChange,
    testsList,
    handleTestsSelect,
    allVendors,
    handleChangeVendorFilter,
    allTimeSlotList,
    allDiscountList,
    patientReviewsList,
    allBodyTypeList,
    doctorFilter,
    doctorFiltersMethod,
    selectedCheckBox,
    consultType,
    specialization,
    pathName,
    selectedServiceType,
  } = props;

  const { user } = useSelector((ReduxState: any) => ReduxState.auth);
  const history = useHistory();
  const [selectedDiscount, setSelectedDiscount] = useState<string | null>(null);
  const [range, setRange] = useState<[number, number]>([0, 5000]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState("");

  const [isGenderOpen, setIsGenderOpen] = useState(true);
  const [isSpecializationOpen, setIsSpecializationOpen] = useState(true);
  const [isConsultantTypeOpen, setIsConsultantTypeOpen] = useState(true);
  const [isPriceRangeOpen, setIsPriceRangeOpen] = useState(true);

  const [selectedGender, setSelectedGender] = useState<string[]>([]);
  const [selectedSpecialization, setSelectedSpecialization] = useState<
    string[]
  >([]);
  const [selectedConsultantType, setSelectedConsultantType] = useState<
    string[]
  >([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string | null>(
    null
  );
  const filterLabels = useMemo(() => {
    if (consultType?.includes("virtual")) {
      return [
        "Specialization",
        "Type",
        "Available by 90",
        "Gender",
        "Languages",
        "Ratings",
        "Experience",
      ];
    }

    return [
      "Specialization",
      "Type",
      "Gender",
      "Languages",
      "Ratings",
      "Experience",
    ];
  }, [consultType]);

  const handleClearAll = () => {
    // Reset all selected states
    setSelectedGender([]);
    setSelectedSpecialization([]);
    setSelectedConsultantType([]);
    setSelectedPriceRange(null);
  };

  const handleCheckboxChange = (
    value: any,
    setter: any,
    selectedState: any
  ) => {
    if (selectedState.includes(value)) {
      setter(selectedState.filter((item: any) => item !== value));
    } else {
      setter([...selectedState, value]);
    }
  };

  const [originPage, setOriginPage] = useState("");
  useEffect(() => {
    setOriginPage(props?.origin || "");
  }, [props]);

  const handleSliderChange = (value: [number, number]) => {
    setRange(value);
    props?.filterPriceRange(value);
  };
  // document.querySelectorAll('.dropdown-toggle').forEach(button => {
  //   button.addEventListener('click', () => {
  //     const content = button.nextElementSibling as HTMLElement;
  //     content.style.display = content.style.display === 'block' ? 'none' : 'block';
  //   });
  // });

  // const genderOptions = [
  //   { value: "male", label: "Male" },
  //   { value: "female", label: "Female" },
  // ];

  // const specializationOptions = [
  //   { value: "general-surgeon", label: "General Surgeon" },
  //   { value: "dentist", label: "Dentist" },
  // ];

  // const consultantTypeOptions = [
  //   { value: "online", label: "Online Consultant" },
  //   { value: "opd", label: "OPD Consultant" },
  // ];

  // const priceSortOptions = [
  //   { value: "low-to-high", label: "Low to High" },
  //   { value: "high-to-low", label: "High to Low" },
  // ];

  const handleTypeChange = (id: string) => {
    props.handleChangeTypeFilter(id);
  };
  const handleCategoryChange = (id: string) => {
    props.handleChangeCategoryFilter(id);
  };
  const handleBrandChange = (id: string) => {
    props.handleChangeBrandFilter(id);
  };
  const handleBodyTypeChange = (id: string) => {
    props.handleChangeBodyTypeFilter(id);
  };

  const clearFilters = () => {
    props.handleClearAll();
    setSelectedDiscount("");
    setRange([0, 5000]);
    handleClearAll();
  };

  const handleSortOptionClick = (option: any) => {
    setSelectedSortOption(option?.label);
    props.setSelectedSortOption(option?.value);
    setIsSortDropdownOpen(false);
  };

  return (
    <SideFilterModuleStyled className="sideFilterModule">
      {/* <div className="sort-filter-container-header">
        <div className="sort-filter-sub-header">
          <button className="btn" onClick={() => history.push(pathName)}>
            <IoArrowBackOutline />
          </button>
          <button className="btn">
            <IoIosSearch />
          </button>
        </div>
      </div> */}
      {/* {checkIsMobile() && <MobileTopBanner pathName={"common"} />} */}
      <div className="main-sort-filter-container cursor-pointer">
        <div className="sort-filter-container">
          <div
            className="sort-section"
            onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
          >
            <i className="sort-icon">⇅</i>
            <span>{selectedSortOption || "Sort"}</span>
            {isSortDropdownOpen && (
              <div className="sort-dropdown">
                <div
                  className="sort-option"
                  onClick={() =>
                    handleSortOptionClick({
                      value: "desc",
                      label: "High to Low",
                    })
                  }
                >
                  High to Low
                </div>
                <div
                  className="sort-option"
                  onClick={() =>
                    handleSortOptionClick({
                      value: "asc",
                      label: "Low to High",
                    })
                  }
                >
                  Low to High
                </div>
              </div>
            )}
          </div>

          <div className="divider"></div>
          <div className="filter-section" onClick={() => setIsMenuOpen(true)}>
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1734779473619.png"
              alt="filter-icon"
              className="filter-icon"
            />
            <span>Filter</span>
          </div>
        </div>
      </div>

      <SidebarMenu
        sMenuOpen={isMenuOpen || window.outerWidth >= 768}
        className="sidebarMenu"
      >
        <div
          className="CloseButton"
          onClick={() => {
            setIsMenuOpen(false);
          }}
        >
          <AiOutlineCloseCircle />
        </div>
        <div className="main-filter-module-div">
          <div className="filter-title-div">
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731929868166.png"
              alt=""
              className="me-3"
            />
            <p>Filters</p>
          </div>
          <div className="clear-filter-btn">
            <button className="btn" onClick={clearFilters}>
              Clear All
            </button>
          </div>
        </div>

        {/* Filter by Type */}
        {originPage === "pharmacy" && (
          <>
            <div className="filter-by-type-div">
              {/* {originPage === "ctmri" ? ( */}
              {/* <p className="filter-by-title">Type of Radiologist</p> */}
              {/* ) : ( */}
              <p className="filter-by-title">By Type</p>
              {/* )} */}

              {allTypeList?.map((item: any) => {
                return (
                  <div className="select-checkbox-div" key={item.id}>
                    <input
                      type="checkbox"
                      // checked={typeFilter === item?.id}
                      onChange={() => {
                        setRange([0, 5000]);
                        handleTypeChange(item?.id);
                      }}
                      // id={`checkbox-${item.id}`}
                    />
                    <label htmlFor={`checkbox-${item.id}`}>
                      <p>{`${item?.name}`}</p>
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="horizontal-line"></div>
          </>
        )}

        {originPage === "labtest" && (
          <>
            <div className="toggle-filter d-flex flex-row gap-2 w-full ">
              <Switch
                checked={fastingToggle} // "Center" is default
                onChange={() => {
                  setRange([0, 5000]);
                  handleToggleChange();
                }}
              />
              <span>Fasting</span>
            </div>
            <div className="horizontal-line"></div>
          </>
        )}

        {originPage === "package" && (
          <>
            <div className="toggle-filter d-flex flex-row gap-2 w-full ">
              <Switch
                checked={corpToggle} // "Center" is default
                disabled={
                  !user?.roles ||
                  user?.roles.length === 0 ||
                  user?.roles[0].role !== "client_user"
                }
                onChange={() => {
                  setRange([0, 5000]);
                  handleCorpToggleChange();
                }}
              />
              <span>Corporate</span>
            </div>
            <div className="horizontal-line"></div>
          </>
        )}

        {/* Filter by Category */}
        {originPage === "bookAppointment" && (
          <>
            {/* Gender Filter */}
            <div className="filter-section">
              <div className="head">
                <div
                  className="filter-header"
                  onClick={() => setIsGenderOpen(!isGenderOpen)}
                >
                  <p>Gender</p>
                  {isGenderOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}
                </div>
              </div>
              {isGenderOpen && (
                <div className="filter-content">
                  <label>
                    <input
                      type="checkbox"
                      value="male"
                      checked={selectedGender.includes("male")}
                      onChange={() =>
                        handleCheckboxChange(
                          "male",
                          setSelectedGender,
                          selectedGender
                        )
                      }
                    />{" "}
                    Male
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="female"
                      checked={selectedGender.includes("female")}
                      onChange={() =>
                        handleCheckboxChange(
                          "female",
                          setSelectedGender,
                          selectedGender
                        )
                      }
                    />{" "}
                    Female
                  </label>
                </div>
              )}
            </div>

            {/* Specialization Filter */}
            <div className="filter-section">
              <div className="head">
                <div
                  className="filter-header"
                  onClick={() => setIsSpecializationOpen(!isSpecializationOpen)}
                >
                  <p>Specialization</p>
                  {isSpecializationOpen ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowForward />
                  )}
                </div>
              </div>
              {isSpecializationOpen && (
                <div className="filter-content">
                  <label>
                    <input
                      type="checkbox"
                      value="general-surgeon"
                      checked={selectedSpecialization.includes(
                        "general-surgeon"
                      )}
                      onChange={() =>
                        handleCheckboxChange(
                          "general-surgeon",
                          setSelectedSpecialization,
                          selectedSpecialization
                        )
                      }
                    />{" "}
                    General Surgeon
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="dentist"
                      checked={selectedSpecialization.includes("dentist")}
                      onChange={() =>
                        handleCheckboxChange(
                          "dentist",
                          setSelectedSpecialization,
                          selectedSpecialization
                        )
                      }
                    />{" "}
                    Dentist
                  </label>
                </div>
              )}
            </div>

            {/* Consultant Type Filter */}
            <div className="filter-section">
              <div className="head">
                <div
                  className="filter-header"
                  onClick={() => setIsConsultantTypeOpen(!isConsultantTypeOpen)}
                >
                  <p>Consultant Type</p>
                  {isConsultantTypeOpen ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowForward />
                  )}
                </div>
              </div>
              {isConsultantTypeOpen && (
                <div className="filter-content">
                  <label>
                    <input
                      type="checkbox"
                      value="online"
                      checked={selectedConsultantType.includes("online")}
                      onChange={() =>
                        handleCheckboxChange(
                          "online",
                          setSelectedConsultantType,
                          selectedConsultantType
                        )
                      }
                    />{" "}
                    Online Consultant
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="opd"
                      checked={selectedConsultantType.includes("opd")}
                      onChange={() =>
                        handleCheckboxChange(
                          "opd",
                          setSelectedConsultantType,
                          selectedConsultantType
                        )
                      }
                    />{" "}
                    OPD Consultant
                  </label>
                </div>
              )}
            </div>

            {/* Price Range Filter */}
            <div className="filter-section">
              <div className="head">
                <div
                  className="filter-header"
                  onClick={() => setIsPriceRangeOpen(!isPriceRangeOpen)}
                >
                  <p>Price Range</p>
                  {isPriceRangeOpen ? (
                    <IoIosArrowDown />
                  ) : (
                    <IoIosArrowForward />
                  )}
                </div>
              </div>
              {isPriceRangeOpen && (
                <div className="filter-content">
                  <label>
                    <input
                      type="radio"
                      name="price-sort"
                      value="low-to-high"
                      checked={selectedPriceRange === "low-to-high"}
                      onChange={() => setSelectedPriceRange("low-to-high")}
                    />{" "}
                    Low to High
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="price-sort"
                      value="high-to-low"
                      checked={selectedPriceRange === "high-to-low"}
                      onChange={() => setSelectedPriceRange("high-to-low")}
                    />{" "}
                    High to Low
                  </label>
                </div>
              )}
            </div>
          </>
        )}

        {originPage !== "bookAppointment" && originPage !== "doctor" && (
          <>
            <div className="filter-by-type-div">
              {originPage === "ctmri" ? (
                <p className="filter-by-title"> By Scan Type</p>
              ) : (
                <p className="filter-by-title">By Category</p>
              )}
              <div className="alltests">
                {allCategoriesList?.category_ids?.map((item: any) => {
                  if (!item?.name) {
                    return null;
                  }
                  console.log(selectedCategories, item.id);

                  return (
                    <div className="select-checkbox-div" key={item.id}>
                      <input
                        type="checkbox"
                        checked={selectedCategories?.includes(item.id)}
                        onChange={() => {
                          setRange([0, 5000]);
                          handleCategoryChange(item?.id);
                        }}
                        id={`checkbox-${item.id}`}
                      />

                      <label
                        htmlFor={`checkbox-${item.id}`}
                        title={item?.name || "Unnamed Category"}
                      >
                        <p title={item?.name}>{`${
                          item?.name || "Unnamed Category"
                        } (${item?.count}) `}</p>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="horizontal-line"></div>
          </>
        )}

        {/* Filter by Vendors */}
        {originPage !== "ctmri" &&
          originPage !== "pharmacy" &&
          originPage !== "doctor" &&
          originPage !== "bookAppointment" &&
          originPage !== "vendor" && (
            <>
              <div className="filter-by-type-div">
                <p className="filter-by-title">By Vendors</p>
                <div className="alltests">
                  {allVendors?.map((item: any) => {
                    if (!item?.name) {
                      return null;
                    }
                    return (
                      <div className="select-checkbox-div" key={item.id}>
                        <input
                          type="checkbox"
                          checked={selectedVendors?.includes(item.id)}
                          onChange={() => {
                            setRange([0, 5000]);
                            props?.handleChangeVendorFilter(item?.id);
                          }}
                          id={`checkbox-${item.id}`}
                        />
                        <label
                          htmlFor={`checkbox-${item.id}`}
                          title={item?.name || "Unnamed Vendor"}
                        >
                          <p
                            title={`${item?.name || "Unnamed Vendor"} (${
                              originPage === "labtest"
                                ? item?.tests?.length || 0
                                : originPage === "package"
                                ? item?.packages?.length || 0
                                : 0
                            }) `}
                          >{`${item?.name || "Unnamed Vendor"} (${
                            originPage === "labtest"
                              ? item?.tests?.length || 0
                              : originPage === "package"
                              ? item?.packages?.length || 0
                              : 0
                          }) `}</p>
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="horizontal-line"></div>
            </>
          )}

        {/* Filter by Tube */}
        {originPage === "labtest" && labtestTubes?.length > 0 && (
          <>
            <div className="filter-by-type-div">
              <p className="filter-by-title">By Tubes</p>
              <div className="alltests">
                {labtestTubes?.map((tube: any, idx: any) => (
                  <div className="select-checkbox-div" key={idx}>
                    <input
                      type="checkbox"
                      checked={selectedTubes?.includes(tube.tube_name)}
                      onChange={(e) => {
                        setRange([0, 5000]);
                        handleChangeTubesFilter(e, tube);
                      }}
                      id={`checkbox-${idx}`}
                    />
                    <label
                      htmlFor={`checkbox-${idx}`}
                      title={`${tube?.tube_name || "Unnamed Category"} (${
                        tube?.total
                      }) `}
                    >
                      <p>{`${tube?.tube_name || "Unnamed Category"} (${
                        tube?.total
                      }) `}</p>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="horizontal-line"></div>
          </>
        )}

        {originPage === "package" && testsList?.length > 0 && (
          <>
            <div className="filter-by-type-div">
              <p className="filter-by-title">By Tests</p>
              <div className="alltests">
                {testsList?.map((test: any) => (
                  <div className="select-checkbox-div" key={test.service_code}>
                    <input
                      type="checkbox"
                      checked={selectedTests?.includes(test.service_code)}
                      onChange={(e) => {
                        setRange([0, 5000]);
                        handleTestsSelect(e, test);
                      }}
                      id={`checkbox-${test.service_code}`}
                    />
                    <label
                      htmlFor={`checkbox-${test.service_code}`}
                      title={test.service_name}
                    >
                      <p>{test.service_name}</p>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div className="horizontal-line"></div>
          </>
        )}

        {/* Body Part API Itegration */}
        {originPage === "ctmri" && (
          <>
            <div className="filter-by-type-div">
              <p className="filter-by-title">By Body Parts</p>
              <div className="alltests">
                {Array.isArray(allBodyTypeList) &&
                  allBodyTypeList?.map((item: any) => {
                    if (!item?.title) {
                      return null;
                    }
                    return (
                      <div className="select-checkbox-div" key={item.title}>
                        <input
                          type="checkbox"
                          checked={bodyTypeFilter?.includes(item.title)}
                          onChange={() => handleBodyTypeChange(item?.title)}
                          id={`checkbox-${item.title}`}
                        />
                        <label htmlFor={`checkbox-${item.title}`}>
                          <p title={item?.title}>{`${
                            item?.title || "Unnamed Category"
                          } (${item?.count}) `}</p>
                        </label>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="horizontal-line"></div>
          </>
        )}
        {originPage === "pharmacy" && (
          <>
            <div className="filter-by-type-div">
              <p className="filter-by-title">By Brand</p>
              <div className="alltests">
                {allBrandsList?.data?.slice(0, 15).map((item: any) => {
                  if (!item?.name) {
                    return null;
                  }
                  return (
                    <div className="select-checkbox-div" key={item.name}>
                      <input
                        type="checkbox"
                        checked={brandFilter?.includes(item?.id)}
                        onChange={() => handleBrandChange(item?.name)}
                        id={`checkbox-${item?.name}`}
                      />
                      <label htmlFor={`checkbox-${item.name}`}>
                        <p title={item?.name}>{`${
                          item?.name || "Unnamed Category"
                        } (${item?.count}) `}</p>
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="horizontal-line"></div>
          </>
        )}

        {/* Doctor Filters */}
        {originPage === "doctor" && (
          <>
            {filterLabels.map((title) => {
              if (!Array.isArray(doctorFilter?.[title])) return null;

              return (
                <div className="filter-by-type-div" key={title}>
                  <p className="filter-by-title mt-3">
                    By {title.charAt(0).toUpperCase() + title.slice(1)}
                  </p>
                  <div className="alltests">
                    {doctorFilter?.[title]?.map((item: any, index: number) => {
                      if (!item?.name || item?.name == "other") return null;
                      return (
                        <div
                          className="select-checkbox-div"
                          key={`${title}-${index}`}
                        >
                          <input
                            type="checkbox"
                            checked={selectedCheckBox(title, item?.name, item)}
                            id={`checkbox-${title}-${index}`}
                            onChange={() => {
                              doctorFiltersMethod(title, item?.name, item);
                            }}
                          />
                          <label
                            htmlFor={`checkbox-${title}-${index}`}
                            title={item?.name}
                          >
                            <p title={String(item?.name)}>
                              {typeof item?.name === "string"
                                ? item?.name?.charAt(0).toUpperCase() +
                                  item?.name?.slice(1)
                                : String(item?.name).charAt(0).toUpperCase() +
                                  String(item?.name).slice(1)}{" "}
                              {selectedServiceType !== "clinic"
                                ? `(${item?.count})`
                                : ""}
                            </p>
                          </label>
                        </div>
                      );
                    })}
                  </div>
                  <div className="horizontal-line"></div>
                </div>
              );
            })}
          </>
        )}

        {/* Time Slot Div */}
        {/* {originPage === "ctmri" && (
          <>
            <div className="filter-by-type-div">
              <p className="filter-by-title"> Time Slot Availability</p>

              {allTimeSlotList?.slice(0, 15).map((item: any) => {
                if (!item?.name) {
                  return null;
                }
                return (
                  <div className="select-checkbox-div" key={item.name}>
                    <input
                      type="checkbox"
                      checked={brandFilter?.includes(item.name)}
                      onChange={() => handleBrandChange(item?.name)}
                      id={`checkbox-${item.name}`}
                    />
                    <label htmlFor={`checkbox-${item.name}`}>
                      <p title={item?.name}>{`${
                        item?.name || "Unnamed Category"
                      } `}</p>
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="horizontal-line"></div>
          </>

        )}

        )} */}

        {/* Price Range */}
        {originPage !== "vendor" && (
          <>
            <div className="filter-by-type-div">
              {originPage === "doctor" ? (
                <p className="filter-by-title">Consultation Fee</p>
              ) : (
                <p className="filter-by-title">Price Range</p>
              )}

              <div className="range-slider">
                <Slider
                  range
                  min={0}
                  max={10000}
                  value={range}
                  onChange={handleSliderChange}
                  onAfterChange={(value) => {
                    props?.handleInputChange(value);
                  }}
                />
                <div className="selected-range-value-div mt-3">
                  <p>₹{range[0]}</p> - <p>₹{range[1]}</p>
                </div>
                <div className="input-fields">
                  <div className="d-flex">
                    <InputGroup className="me-2">
                      <Form.Control
                        type="number"
                        placeholder="Min"
                        value={range[0] === 0 ? "" : range[0]}
                        onChange={(e) => {
                          const newMin =
                            e.target.value === "" ? 0 : Number(e.target.value);
                          const updatedRange = [newMin, range[1]] as any;
                          handleSliderChange(updatedRange);
                          props?.handleInputChange(updatedRange);
                        }}
                      />
                    </InputGroup>
                    To
                    <InputGroup className="ms-2">
                      <Form.Control
                        type="number"
                        placeholder="Max"
                        value={range[1] === 0 ? "" : range[1]}
                        onChange={(e) => {
                          const newMax =
                            e.target.value === "" ? 0 : Number(e.target.value);
                          const updatedRange = [range[0], newMax] as any;
                          handleSliderChange(updatedRange);
                          props?.handleInputChange(updatedRange);
                        }}
                      />
                    </InputGroup>
                  </div>
                </div>
              </div>
            </div>
            {originPage !== "doctor" && <div className="horizontal-line"></div>}
          </>
        )}

        {/* Discount & Offers */}
        {/* {originPage === "ctmri" && (
          <>
            <div className="filter-by-type-div">
              <p className="filter-by-title"> Discount & Offers</p>

              {allDiscountList?.slice(0, 15).map((item: any) => {
                if (!item?.name) {
                  return null;
                }
                return (
                  <div className="select-checkbox-div" key={item.name}>
                    <input
                      type="checkbox"
                      checked={brandFilter?.includes(item.name)}
                      onChange={() => handleBrandChange(item?.name)}
                      id={`checkbox-${item.name}`}
                    />
                    <label htmlFor={`checkbox-${item.name}`}>
                      <p title={item?.name}>{`${
                        item?.name || "Unnamed Category"
                      } `}</p>
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="horizontal-line"></div>
          </>
        )} */}
        {/* Patient Reviews */}
        {/* {originPage === "ctmri" && (
          <>
            <div className="filter-by-type-div">
              <p className="filter-by-title"> Patient Reviews</p>
              {patientReviewsList?.slice(0, 15).map((item: any) => {
                if (!item?.name) {
                  return null;
                }
                return (
                  <div className="select-checkbox-div" key={item.name}>
                    <input
                      type="checkbox"
                      checked={brandFilter?.includes(item.name)}
                      onChange={() => handleBrandChange(item?.name)}
                      id={`checkbox-${item.name}`}
                    />
                    <label htmlFor={`checkbox-${item.name}`}>
                      <p title={item?.name}>{`${
                        item?.name || "Unnamed Category"
                      } `}</p>
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="horizontal-line"></div>
          </>
        )} */}

        {/* Discount Range */}
        {originPage !== "bookAppointment" && originPage !== "doctor" && (
          // <div className="filter-by-type-div">
          //   <p className="filter-by-title">Discount Range</p>
          //   {filterDiscount?.map((item: any) => {
          //     return (
          //       <div className="select-checkbox-div" key={item.value}>
          //         <input
          //           type="checkbox"
          //           checked={
          //             minDiscount == item?.value[0] &&
          //             maxDiscount == item.value[1]
          //           }
          //           onChange={() => props.handleonFilterDiscount(item?.value)}
          //           id={`checkbox-${item.label}`}
          //         />

          <div className="filter-by-type-div">
            <p className="filter-by-title">Discount Range</p>
            {filterDiscount?.map((item: any) => {
              return (
                <div className="select-checkbox-div" key={item.value}>
                  <input
                    type="checkbox"
                    checked={
                      minDiscount === item?.value[0] &&
                      maxDiscount === item.value[1]
                    }
                    onChange={() => {
                      setRange([0, 5000]);
                      props.handleonFilterDiscount(item?.value);
                    }}
                    id={`checkbox-${item.label}`}
                  />

                  <label htmlFor={`checkbox-${item.label}`}>
                    <p>{item?.label}</p>
                  </label>
                </div>
              );
            })}
          </div>
        )}
      </SidebarMenu>
      {(isMenuOpen || window.outerWidth >= 768) && (
        <div className="btnWrapperDiv">
          <button
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Close
          </button>
          <button
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            Apply
          </button>
        </div>
      )}
    </SideFilterModuleStyled>
  );
};

export default SideFilterModule;
