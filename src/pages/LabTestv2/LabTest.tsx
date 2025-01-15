import React, { useEffect, useRef, useState } from "react";
import { LabtestStyled } from "./LabTest.styled";
import HealthDropIcon from "../../assets/images/labtest/healthdrop.svg";
import TestTubesIcon from "../../assets/images/labtest/testtubes.svg";
import { FaArrowRight } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { HiOutlineMicrophone } from "react-icons/hi";
import HealthSaverCard from "../../components/HealthSaverCard/HealthSaverCard";
import NearbyCard from "../../components/NearbyCard/NearbyCard";
import HeadingBannerModule from "../Pharmacy/HeadingBannerModule";
import { labtestBannerDetails } from "../Pharmacy/PharmacyObjectsModule";
import { Link, useHistory } from "react-router-dom";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { MAP_KEY } from "../../config";
import MultiCarouselModal from "../Home/MultiCarouselModal";
import { useDispatch, useSelector } from "react-redux";
import { getUniversalSearchData } from "../../redux/slices/generic/genericService";
import { IoCloseOutline } from "react-icons/io5";
import { updateUniversalSearchResults } from "../../redux/slices/generic/genericSlice";
import { PharmacyStyled } from "../Pharmacy/Pharmacy.styled";
import {
  getLabTestsNearBy,
  getAllCategoriesAPI,
  getAllFilteredTests,
  getAllFilteredPackages,
} from "../../redux/slices/labtest/labtestService";
import { truncateText } from "../../Scenes/common";
import { toast } from "react-toastify";
import { getNearbyVendorsAPI } from "../../redux/slices/Profile/ProfileService";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const MapComponent = () => {
  const [currentPosition, setCurrentPosition] = useState<any>(null);

  // Load the Google Maps JavaScript API
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: MAP_KEY, // Replace with your API key
  });

  // Get user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          toast.error(`Error fetching geolocation: ${error?.message}`);
          console.error("Error fetching geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mapWrapper">
      {currentPosition ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={currentPosition}
          zoom={15}
        >
          <Marker position={currentPosition} />
        </GoogleMap>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
};

const LabTestV2 = () => {
  const [activeFilter, setActiveFilter] = useState("Woman");
  const [activeFilterTests, setActiveFilterTests] = useState("Heart");
  const [searchText, setSearchText] = useState("");
  const { universalSearchResults } = useSelector(({ generic }: any) => generic);
  const [showSearchPopupModel, setShowSearchPopupModel] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    healthCategoriesList,
    healthPackagesList,
    allTestsList,
    allNearByLabssList,
    allPackagesList,
  } = useSelector((ReduxState: any) => ReduxState.labtest);
  const { userCity, user } = useSelector((ReduxState: any) => ReduxState.auth);
  const [labtestCategories, setLabtestCategories] = useState([]);
  const [labPackageCategories, setLabPackageCategories] = useState([]);
  const [activeLabtestCategory, setActiveLabtestCategory] = useState(0); // Default to the first category
  const [activePackageCategory, setActivePackageCategory] = useState(0); // Default to the first package
  const { selectedCurrentAddress, nearbyVendors } = useSelector(
    (ReduxState: any) => ReduxState.profile
  );

  useEffect(() => {
    console.log("selectedCurrentAddress : ", selectedCurrentAddress);
    const nearbyVendorsBody = {
      latitude: selectedCurrentAddress?.latitude,
      longitude: selectedCurrentAddress?.longitude,
      section_name: "labtest",
    };
    dispatch(getNearbyVendorsAPI(nearbyVendorsBody));
  }, [selectedCurrentAddress]);

  useEffect(() => {
    console.log("nearbyVendors : ", nearbyVendors);
  }, [nearbyVendors]);

  useEffect(() => {
    getAllMasterData();
    getLabtestCategoriesAPI();
    getPackagesCategoriesAPI();
  }, []);

  useEffect(() => {
    const getFilteredLabtests = async () => {
      if (!activeLabtestCategory) {
        return;
      }
      const res = (await dispatch(
        getAllFilteredTests({
          filters: {
            categoryIds: [activeLabtestCategory],
            count: 20,
            page: 1,
          },
        })
      )) as any;
      if (res?.error) {
        toast.error(res?.error?.message || "Unknown Error Occured");
      }
    };
    getFilteredLabtests();
  }, [activeLabtestCategory]);

  useEffect(() => {
    const getFilteredPackages = async () => {
      if (!activePackageCategory) {
        return;
      }
      const res = (await dispatch(
        getAllFilteredPackages({
          filters: {
            categoryIds: [activePackageCategory],
            count: 20,
            isCorporate: false,
            page: 1,
          },
        })
      )) as any;
      if (res?.error) {
        toast.error(res?.error?.message || "Unknown Error Occured");
      }
    };
    getFilteredPackages();
  }, [activePackageCategory]);

  const getLabtestCategoriesAPI = async () => {
    const res = (await dispatch(
      getAllCategoriesAPI({ sectionName: "labtest" })
    )) as any;
    setLabtestCategories(res?.payload?.data?.category_ids);
  };

  const getPackagesCategoriesAPI = async () => {
    const res = (await dispatch(
      getAllCategoriesAPI({ sectionName: "packages" })
    )) as any;
    setLabPackageCategories(res?.payload?.data?.category_ids);
  };

  useEffect(() => {
    console.log("userCity : ", userCity);

    if (userCity?.name) {
      getLatestData(userCity?.id);
    }
  }, [userCity?.name]);

  const getLatestData = (cityN: any) => {
    dispatch(getLabTestsNearBy({ city: cityN, count: 8 }));
  };
  const getAllMasterData = () => {
    dispatch(getAllCategoriesAPI({ sectionName: "labtest" }));
  };
  const getlatestDataOnload = () => {
    const body = {
      filters: {
        categoryIds: [], // Use the derived array here
        count: 20,
        page: 1,
      },
    };
    dispatch(getAllFilteredTests(body));
    dispatch(
      getAllFilteredPackages({
        ...body,
        filters: {
          ...body.filters,
          isCorporate: false,
        },
      })
    );
  };

  useEffect(() => {
    getlatestDataOnload();
  }, [userCity]);

  useEffect(() => {
    console.log("healthCategoriesList : ", healthCategoriesList);
    console.log("allPackagesList : ", allPackagesList);
    console.log("allTestsList : ", allTestsList);
    console.log("allNearByLabssList : ", allNearByLabssList);
  }, [healthCategoriesList, allPackagesList, allTestsList, allNearByLabssList]);

  const handleBuyMedicine = (key: any) => {
    window.scrollTo(0, 400);
    // history.push(`/pharmacy/${key}`);
  };

  const [testProfiles, setTestProfiles] = useState([]);
  useEffect(() => {
    if (allTestsList?.length) {
      const profiles = allTestsList?.map((test: any) => ({
        title: test?.service_name || "N/A", // Use service name as title
        description: `Type: ${test?.type || "N/A"}`, // Use type as description
        id: test?.service_code,
        imgUrl:
          test?.image ||
          "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1732267190133.png", // Default image if not available
      }));
      setTestProfiles(profiles);
    }
  }, [allTestsList]);

  const fetchSearchResults = (searchQuery: any) => {
    const searchObj = {
      searchText: searchQuery,
      type: "dc,ctmri,diagnostic,eye_care,ayurveda,dental_care",
    };
    dispatch(getUniversalSearchData(searchObj));
  };

  const navigateTo = (url: any) => {
    history.push(url);
  };

  const handleSearchGoTo = (item: any) => {
    console.log("item : ", item);
    setShowSearchPopupModel(false);
    dispatch(updateUniversalSearchResults([]));
    if (item?.to_link === "/pharmacy") {
      navigateTo(`/item/generic/${item?.linkable_id}`);
    } else if (item?.linkable_type === "packages") {
      navigateTo(`/labPackageDetils/${item?.linkable_id}`);
    } else if (item?.type === "ctmri") {
      navigateTo(`/radiology/scan-details/${item?.linkable_id}`);
    } else if (item?.linkable_type === "tests") {
      navigateTo(`/labTestDetils/${item?.linkable_id}`);
    } else if (item?.type === "hospital") {
      navigateTo(`/hospital/${item?.linkable_id}`);
    } else {
      navigateTo(`/doctor?q=${searchText}`);
    }
  };

  const addPackageToCart = (testId: any) => {
    if (testId) {
      history.push(`/labPackageDetils/${testId}`);
    }
  };

  const addTestToCart = (testId: any) => {
    if (testId) {
      history.push(`/labTestDetils/${testId}`);
    }
  };
  const recognitionRef = useRef<any>(null);

  const handleVoiceInput = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Sorry, your browser does not support speech recognition.");
      return;
    }
    toast.success("Mic is enabled you can start Talking");

    if (recognitionRef.current) {
      recognitionRef.current.abort();
    }
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognitionRef.current = recognition;

    recognition.start();

    recognition.onresult = (event: any) => {
      const speechToText = event.results[0][0].transcript;
      console.log("speech : ", speechToText);

      if (speechToText) {
        setSearchText(speechToText);
        fetchSearchResults(speechToText);
        setShowSearchPopupModel(true);
      }
    };
    recognition.onerror = (event: any) => {
      alert("Mic is already enabled. You can start talking.");
    };

    recognition.onend = () => {
      recognitionRef.current = null;
    };
  };
  return (
    <LabtestStyled>
      {/* <div className="heroImg">
        <img src={HeroImage} alt="hero" />
        <div className="uploadBtnWrapper d-flex gap-2 align-items-center">
          <h3>Upload Prescription</h3>
          <FaArrowRight />
        </div>
      </div> */}
      <HeadingBannerModule
        details={labtestBannerDetails}
        handleBuyMedicine={handleBuyMedicine}
        section="labtest"
      />

      <div className="searchFeature">
        <div className="searchBar">
          <div className="searchIcon">
            <FaSearch className="icon" color="#fff" />
          </div>
          <input
            type="text"
            value={searchText}
            placeholder="Search"
            onChange={(e) => {
              setSearchText(e.target.value);
              fetchSearchResults(e.target.value);
              setShowSearchPopupModel(true);
            }}
          />
          <HiOutlineMicrophone
            className="icon micIcon cursor-pointer"
            onClick={handleVoiceInput}
          />
        </div>
        <button
          className="featureButton"
          onClick={() => navigateTo("/alllabtests")}
        >
          Lab Tests
          <img src={HealthDropIcon} alt="Lab Tests" />
        </button>
        <button
          className="featureButton"
          onClick={() => navigateTo("/allpackages")}
        >
          Packages
          <img src={TestTubesIcon} alt="Packages" />
        </button>
      </div>

      {showSearchPopupModel && (
        <PharmacyStyled>
          <div className="search-popup" style={{ marginTop: "-60px" }}>
            <div className="search-popup-content">
              <div className="search-heading-text-div">
                <p>Showing Result for LabTests</p>
                <button
                  className="btn"
                  onClick={() => setShowSearchPopupModel(false)}
                >
                  <IoCloseOutline />
                </button>
              </div>
              {universalSearchResults?.length > 0 ? (
                universalSearchResults.map((item: any, index: number) => (
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
                      <p className="search-popup-name">{item?.name}</p>
                      <p className="search-popup-type">
                        <img
                          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1732179533099.png"
                          alt=""
                        />
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div>
                  <div className="search-popup-no-results">
                    <img
                      src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1732181068454.png"
                      alt=""
                    />
                    <p className="search-popup-title">
                      No result found for Labtests
                    </p>
                    <p className="search-popup-sub-title">
                      search with other brand or category
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </PharmacyStyled>
      )}

      <div className="healthSaverSection">
        <div className="header">
          <h2>Top Packages</h2>
          {/* <Link to={"/allpackages"} className="viewAllBtn">
            View All Packages
          </Link> */}
        </div>
        {labPackageCategories?.length > 0 && (
          <div className="packageFilters">
            {labPackageCategories?.slice(0, 10)?.map((item: any, index) => (
              <button
                key={index}
                className={`filterButton ${
                  activePackageCategory === item?.id ? "active" : ""
                }`}
                onClick={() => {
                  setActivePackageCategory(item?.id);
                }}
              >
                {item?.name}
              </button>
            ))}
          </div>
        )}
        <div className="healthCards">
          {allPackagesList?.data?.length > 0 &&
            allPackagesList?.data
              ?.filter(
                (packageItem: any) => packageItem?.price?.actual_cost > 0
              ) // Filter for actual_cost > 0
              ?.slice(0, 6) // Slice the filtered list
              ?.map((packageItem: any, index: any) => (
                <HealthSaverCard
                  key={packageItem?.service_code || index}
                  title={truncateText(packageItem?.service_name, 30)} // Truncate title
                  subtitle={truncateText(packageItem?.description, 30)} // Truncate subtitle
                  featureButtonText="Package" // You can customize this text
                  reportTime="N/A" // If no data provided for report time
                  testCount={(packageItem?.tests?.length || 0).toString()} // Number of tests
                  originalPrice={(
                    packageItem?.price?.actual_cost || 0
                  ).toString()}
                  discountedPrice={(
                    packageItem?.price?.discounted_price || 0
                  ).toString()}
                  discount={(
                    packageItem?.price?.discount_percentage || 0
                  ).toString()}
                  addToCart={() => {
                    addPackageToCart(packageItem?.service_code);
                  }}
                />
              ))}

          {allPackagesList?.data?.length === 0 && <p>No Packages Available</p>}
        </div>
        <Link to={"/allpackages"} className="viewAllBtn ml-auto viewBtn2">
          View All Packages
        </Link>
      </div>

      <div className="healthSaverSection">
        <div className="header">
          <h2>Top Tests</h2>
          {/* <Link to={"/alllabtests"} className="viewAllBtn">
            View All Tests
          </Link> */}
        </div>
        {labtestCategories?.length > 0 && (
          <div className="packageFilters">
            {labtestCategories?.slice(0, 10)?.map((item: any, index) => (
              <button
                key={index}
                className={`filterButton ${
                  activeLabtestCategory === item?.id ? "active" : ""
                }`}
                onClick={() => {
                  setActiveLabtestCategory(item?.id);
                }}
              >
                {item?.name}
              </button>
            ))}
          </div>
        )}
        <div className="healthCards">
          {allTestsList?.data?.length > 0 &&
            allTestsList?.data
              ?.filter(
                (testItem: any) =>
                  testItem?.price?.actual_cost > 0 || testItem?.actual_cost > 0
              )
              ?.slice(0, 6)
              ?.map((testItem: any, index: any) => (
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
                  addToCart={() => {
                    addTestToCart(testItem?.service_code);
                  }}
                />
              ))}
          {allTestsList?.data?.length === 0 && <p>No Labtests Available</p>}
        </div>
        <Link to={"/alllabtests"} className="viewAllBtn viewBtn2 mb-4">
          View All Tests
        </Link>
      </div>

      <div className="nearByLabs">
        <div className="header">
          <h2>Nearby Top Labs</h2>
          <Link to={"/allvendors"} className="viewAllBtn viewBtn2 mb-4">
            View All Vendors
          </Link>
        </div>
        <div className="nearbyCards">
          {nearbyVendors?.filteredVendors || nearbyVendors?.vendors ? (
            (nearbyVendors?.filteredVendors || nearbyVendors?.vendors)
              ?.slice(0, 5)
              .map((vendor: any, index: any) => (
                <NearbyCard
                  key={vendor?.id || index}
                  title={vendor?.name || "N/A"} // Vendor name
                  image={vendor?.image}
                  rating={(vendor?.rating || "0").toString()} // Vendor rating
                  distance={`${parseFloat(vendor?.distance_km || 0).toFixed(
                    2
                  )} Km`}
                  location={truncateText(vendor?.address, 40) || "N/A"} // Vendor address
                  id={vendor?.id}
                />
              ))
          ) : (
            <p>No Nearby Labs Found</p>
          )}
        </div>
      </div>

      <div className="popularCheckups">
        <div className="header">
          <h2>Popular Checkups in City</h2>
        </div>
        <div className="content">
          <MapComponent />
          <div className="imgWrap">
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1732260153906.png"
              alt=""
            />
          </div>
        </div>
        <div className="cardsCarousel">
          <MultiCarouselModal
            itemstoShow={4}
            allLabtests={testProfiles}
            catogorySelect={() => {}}
          />
        </div>
      </div>

      <div className="privacyImg">
        <img
          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1732271995719.png"
          alt=""
        />
      </div>

      <div className="why">
        <div className="contentWrapper">
          <div className="heading">Why RaphaCure</div>
          <img
            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1732273299564.png"
            alt=""
          />
          <div className="desc">
            RaphaCure ensures accurate, convenient tests, transparent pricing,
            and secure data with India's top labs
          </div>
        </div>
        <img
          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1732273200934.png"
          alt=""
        />
      </div>
    </LabtestStyled>
  );
};

export default LabTestV2;
