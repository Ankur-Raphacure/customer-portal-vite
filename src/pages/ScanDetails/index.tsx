import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import test from "../../assets/images/ctmri/test.png";
import { ScanDetailsStyled } from "./ScanDetailsStyled.styled";
import { useDispatch, useSelector } from "react-redux";
import TestTubesIcon from "../../assets/images/labtest/testtubes.svg";

import {
  updateDoctordetails,
  addPackage,
} from "../../redux/slices/bookingScreen/bookingScreenSlice";
import { updateSelectedlabtestDetails } from "../../redux/slices/labtest/labtestSlice";
import {
  updateShowAddressSearchModel,
  updateShowLoginModel,
} from "../../redux/slices/auth/authSlice";
import {
  getCtmriDetailsQueryAPI,
  getPackageDetailsQueryAPI,
} from "../../redux/slices/ctmri/ctmriService";
import Loader from "../../components/Loader/Loader";
import ShareModal from "../../components/ShareModal/ShareModal";
import {
  checkExpressBook,
  getAllPkgVendorsAPI,
  getAllSimilarPackages,
  getAllSimilarTests,
  getPackageDetailsAPI,
  getTestDetailsAPI,
} from "../../redux/slices/labtest/labtestService";
import "./style.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { checkIsMobile, formatStatus, truncateText } from "../../Scenes/common";
import { BsCart2 } from "react-icons/bs";
import { Select, Drawer, Switch, Input, Button as AntdButton } from "antd";
import { toast } from "react-toastify";
import HealthSaverCard from "../../components/HealthSaverCard/HealthSaverCard";
import LineGraphWithLabs from "./LineGraph";
import { TbGenderMale, TbGenderFemale } from "react-icons/tb";
import SimilarPackageTable from "./SimilarPackageTable";
import { GoShareAndroid } from "react-icons/go";
import EmpanelWithUs from "../../components/EmpanelWithUs/EmpanelWithUs";
import MobileHeader from "../../components/Header/MobileHeader";

const allSlotList = [
  {
    name: "Morning",
  },
  {
    name: "Afternoon",
  },
  {
    name: "Evening",
  },
];
const allGenderList = [
  {
    name: "Male Radiologist",
  },
  {
    name: "Female Radiologist",
  },
];
const items = [
  { date: "Sat, Nov 1", price: "₹100" },
  { date: "Sat, Nov 2", price: "₹200" },
  { date: "Sat, Nov 3", price: "₹300" },
  { date: "Sat, Nov 4", price: "₹400" },
  { date: "Sat, Nov 30", price: "₹500" },
  { date: "Sat, Nov 5", price: "₹600" },
];
const Banner = ({ discount }: any) => {
  return (
    <div className="bannerWrapper">
      <div className="rectangle">{discount}% Save</div>
      <div className="triangle"></div>
    </div>
  );
};

const ScanDetails = (props: any) => {
  const history = useHistory();
  const sectionName = props?.location?.state;
  const [categoryId, setCategoryId] = useState([0]);
  const [scanData, setScanData] = useState<any>([]);
  const dispatch = useDispatch();
  const { scanDetails } = useSelector((ReduxState: any) => ReduxState.ctmri);
  const [showOptions, setShowOptions] = useState(false);
  const [showGraph, setShowGraph] = useState(false);
  const [openShareModel, setOpenShareModel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<any>("");
  const [showTimeSlotGraph, setShowTimeSlotGraph] = useState(false);
  const [showEmpanelWithUsModel, setShowEmpanelWithUsModel] = useState(false);
  const { user, userCity, subDomainDetails } = useSelector(
    (ReduxState: any) => ReduxState.auth,
  );
  console.log("subDomainDetails", props);
  const { healthPackagesList, allTestsList, allPackagesList } = useSelector(
    (ReduxState: any) => ReduxState.labtest,
  );
  const { selectedCurrentAddress } = useSelector(
    (ReduxState: any) => ReduxState.profile,
  );
  const [itemCode, setItemCode] = useState(null);
  const [currentItem, setCurrentItem] = useState<any>({});

  useEffect(() => {
    let categoryIds =
      scanDetails?.test?.category_ids || scanDetails?.package?.category_ids;

    console.log("category_ids: ", categoryIds);

    if (categoryIds && categoryIds.length > 0) {
      setCategoryId(categoryIds);
    } else {
      // setCategoryId([0]);
    }

    if (labTestPackageServiceCode) {
      const currPackage = scanData;
      console.log("currPackage : ", currPackage);
      const filteredPackage = {
        service_code: currPackage?.service_code,
        service_name: currPackage?.service_name,
        description: currPackage?.description,
        preperation: currPackage?.preperation,
        search_keys: currPackage?.search_keys,
        sort: currPackage?.sort,
        is_corporate: currPackage?.is_corporate,
        image: currPackage?.image,
        type: currPackage?.type,
        visit_type: currPackage?.visit_type,
        fasting: currPackage?.fasting,
        category_ids: currPackage?.category_ids,
        price: currPackage?.price,
        tests: currPackage?.tests,
        matching_tests: currPackage?.tests?.length || 0,
      };
      setCurrentItem(filteredPackage);
    } else if (labTestServiceCode) {
      const currTest = scanData;
      console.log("currTest : ", currTest);
      const filteredTest = {
        service_code: currTest?.service_code,
        service_name: currTest?.service_name,
        description: currTest?.description,
        preperation: currTest?.preperation,
        search_keys: currTest?.search_keys,
        sort: currTest?.sort,
        is_corporate: currTest?.is_corporate,
        image: currTest?.image,
        type: currTest?.type,
        visit_type: currTest?.visit_type,
        fasting: currTest?.fasting,
        category_ids: currTest?.category_ids,
        price: currTest?.price,
        tests: [],
        matching_tests: 0,
      };
      setCurrentItem(filteredTest);
    }
  }, [scanData]);

  useEffect(() => {
    console.log("categoryId : ", categoryId);
  }, [categoryId]);

  useEffect(() => {
    let id = props?.location?.pathname;
    id = id.split("/")[2];
    if (id) {
      setItemCode(id);
    }
  }, [props]);

  useEffect(() => {
    const foundPackage = healthPackagesList?.packages?.find(
      (pkg: any) => pkg?.service_code === itemCode,
    );
    console.log("foundPackage : ", foundPackage);

    setSelectedPackage(foundPackage);
  }, [itemCode, healthPackagesList]);
  const isPackage = props?.location?.pathname?.includes("labPackageDetils")
    ? true
    : false;
  const {
    slots,
    timeSlotsObj,
    slotTabList,
    doctorDetails,
    hospitalDetails,
    BookingArray,
    selectedProfileIds,
    payloadFromMyPackage,
  } = useSelector((ReduxState: any) => ReduxState.bookingReview);

  const { labTestServiceCode, labTestPackageServiceCode, scanId } =
    props.match?.params;
  console.log("scanDetails", scanDetails, labTestPackageServiceCode);
  console.log("BookingArray scan detaol", BookingArray);
  console.log("hospitalDetails scan detaol", hospitalDetails);

  const [toggleValue, setToggleValue] = useState("center"); // Default to "center"
  const [sortVal, setSortVal] = useState<"asc" | "desc">("asc");
  const [distanceVal, setDistanceVal] = useState(10);

  const getPackageDetails = async (
    pkgId: string,
    distance: number = distanceVal,
    sort: "asc" | "desc" = sortVal,
    collectionType = toggleValue,
  ): Promise<void> => {
    try {
      if (!pkgId) {
        return;
      }

      const requestBody = {
        package_id: pkgId,
        latitude: selectedCurrentAddress?.latitude || null,
        longitude: selectedCurrentAddress?.longitude || null,
        distancewithin: distance,
        sorting: sort,
        collection_type: collectionType,
      };

      const response: any = await dispatch(getPackageDetailsAPI(requestBody));

      if (response?.error) {
        toast.error(response.error.message || "Unknown error occurred");
        return;
      }

      console.log("Package details retrieved:", response);
      if (response?.payload?.data) {
        setScanData(response?.payload?.data);
      }
    } catch (error) {
      console.error("Error fetching package details:", error);
      toast.error("Failed to fetch package details");
    }
  };

  const getTestDetails = async (
    testId: string,
    distance: number = distanceVal,
    sort: "asc" | "desc" = sortVal,
  ): Promise<void> => {
    try {
      if (!testId) {
        return;
      }

      const requestBody = {
        test_id: testId,
        latitude: selectedCurrentAddress?.latitude || null,
        longitude: selectedCurrentAddress?.longitude || null,
        distancewithin: distance,
        sorting: sort,
      };

      const response: any = await dispatch(getTestDetailsAPI(requestBody));

      if (response?.error) {
        toast.error(response.error.message || "Unknown error occurred");
        return;
      }

      console.log("Test details retrieved:", response);
      if (response?.payload?.data) {
        setScanData(response?.payload?.data);
      }
    } catch (error) {
      console.error("Error fetching test details:", error);
      toast.error("Failed to fetch test details");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Show loader
      try {
        if (labTestPackageServiceCode) {
          // await getPackageInfo();
          getPackageDetails(labTestPackageServiceCode);
        } else if (labTestServiceCode) {
          // await getTestPackageInfo();
          getTestDetails(labTestServiceCode);
        } else if (scanId) {
          console.log("scanId : ", scanId);
          await getTestPackageInfo();
          getTestDetails(scanId);
        }
      } catch (error) {
        console.error("Error fetching scan details:", error);
        // Handle error if needed
      } finally {
        setLoading(false); // Hide loader
      }
    };

    fetchData();
  }, [
    labTestPackageServiceCode,
    labTestServiceCode,
    scanId,
    selectedCurrentAddress,
  ]);

  const getTestPackageInfo = async () => {
    setLoading(true);
    await dispatch(
      getCtmriDetailsQueryAPI({
        service_code: labTestServiceCode || scanId,
        city: userCity?.id ?? "",
      }),
    );
    setLoading(false);
  };
  const getPackageInfo = async () => {
    setLoading(true); // Show loader
    try {
      await dispatch(
        getPackageDetailsQueryAPI({
          service_code: labTestPackageServiceCode,
          city: userCity?.id ?? "",
          collection_type: toggleValue,
          sort: sortVal,
        }),
      );
    } catch (error) {
      console.error("Error fetching package details:", error);
      // Handle error if needed
    } finally {
      setLoading(false); // Hide loader
    }
  };

  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => {
    setShow(false);
    setSubmitted(false); // Reset submission state when modal is closed
  };

  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const navigateToBack = () => {
    history.goBack();
  };

  const handleAddToCart = async (
    evnt: any,
    obj: any,
    expressAvailable = false,
  ) => {
    const testId = obj?.id;
    const pathName = window.location.pathname;
    console.log("pathName : ", pathName);
    console.log("obj : ", obj);
    console.log("scanData : ", scanData);
    // scanDetails
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      if (pathName.includes(`/radiology/scan-details/`)) {
        const testD = scanData;
        const testD1 = { ...testD, vendors: [], tests: [] };
        console.log("ctmri scanId : ", scanId);
        console.log("ctmri testD : ", testD);
        console.log("ctmri obj : ", obj);

        await dispatch(
          updateDoctordetails({
            doctorDetails: {
              ...testD1,
              labtestType: "",
            },
            hospitalDetails: obj,
            categoryType: "ctmri",
            slot1: {},
            slot2: {},
          }),
        );
        history.push(`/ctmri/bookingReview`);
      } else if (pathName.includes(`/labTestDetils/`)) {
        console.log("found");
        await dispatch(
          updateSelectedlabtestDetails({
            selectedTest: { ...scanData },
            selectedPackage: { ...scanData },
          }),
        );
        history.push(`/labtest/packages/${obj?.id}`);
      } else if (pathName.includes(`/labPackageDetils/`)) {
        if (scanData && scanData?.service_name) {
          let listData = [];
          let selectedPackageData = {
            ...scanData,
            labtestType: "labpackage",
          };
          listData.push(selectedPackageData);
          const packageData = { tests: listData };

          await dispatch(
            updateDoctordetails({
              doctorDetails: { ...packageData },
              hospitalDetails: obj,
              categoryType: "labtest",
              expressBook: expressAvailable,
              slot1: {},
              slot2: {},
            }),
          );
          history.push(`/labtest/bookingReview`);
        }
      }
    }
  };

  const handleBookingClick = async (evnt: any, obj: any) => {
    console.log("handleBookingClick");
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      if (scanId) {
        const testD = scanDetails?.test;
        const testD1 = { ...testD, vendors: [], tests: [] };

        await dispatch(
          updateDoctordetails({
            doctorDetails: {
              ...testD1,
              labtestType: "",
            },
            hospitalDetails: obj,
            categoryType: "ctmri",
            slot1: {},
            slot2: {},
          }),
        );
        history.push(`/ctmri/bookingReview`);
      } else {
        let expressChecked = evnt.target
          .closest(".check-pin-div")
          .querySelector('.checkbox input[type="checkbox"]');
        if (
          payloadFromMyPackage &&
          payloadFromMyPackage?.doctorDetails?.tests[0]?.service_code ===
            labTestPackageServiceCode
        ) {
          dispatch(
            addPackage({
              hospitalDetails: obj,
              categoryType: "labtest",
              expressBook: expressChecked.checked,
            }),
          );
          history.push(`/labtest/bookingReview`);
        } else {
          if (scanDetails?.package && scanDetails?.package?.service_name) {
            let listData = [];
            let selectedPackageData = {
              ...scanDetails?.package,
              labtestType: "labpackage",
            };
            listData.push(selectedPackageData);
            const packageData = { tests: listData };

            await dispatch(
              updateDoctordetails({
                doctorDetails: { ...packageData },
                hospitalDetails: obj,
                categoryType: "labtest",
                expressBook: expressChecked.checked,
                slot1: {},
                slot2: {},
              }),
            );
            history.push(`/labtest/bookingReview`);
          } else {
            if (expressChecked.checked) {
              let listData = [];
              let selectedTestsData = {
                ...scanDetails?.test,
                labtestType: "labtest",
              };
              listData.push(selectedTestsData);
              const testData = { tests: listData };

              await dispatch(
                updateDoctordetails({
                  doctorDetails: { ...testData },
                  hospitalDetails: obj,
                  categoryType: "labtest",
                  expressBook: expressChecked.checked,
                  slot1: {},
                  slot2: {},
                }),
              );
              history.push(`/labtest/bookingReview`);
            } else {
              await dispatch(
                updateSelectedlabtestDetails({
                  selectedTest: { ...scanDetails?.test },
                  selectedPackage: { ...scanDetails?.package },
                }),
              );
              history.push(`/labtest/packages/${obj?.id}`);
            }
          }
        }
      }
    }
  };

  // const scanData =
  //   scanDetails?.tests || scanDetails?.package || scanDetails?.test;
  console.log("scandata : ", scanData);
  const scData = props?.match?.params;
  const isRadiologyScanDetails =
    window.location.pathname === "/radiology/acns-details";
  const isLabTestDetils =
    window.location.pathname === `/labPackageDetils/${scData.scanId}`;
  const isCtmri010 =
    window.location.pathname === `/radiology/scan-details/${scData.scanId}`;

  const shouldShowContent = !isLabTestDetils;

  const graphData = scanData?.vendors;
  console.log(isCtmri010, "isCtmri010");
  console.log(isLabTestDetils, "isLabTestDetils");

  const handleButtonClick = () => {
    setShowOptions(!showOptions);
  };
  const handleShowGraph = () => {
    setShowGraph(!showGraph);
  };

  const shareURL = window.location.href;
  const chunkArray = (array: any, chunkSize: any) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };
  const chunkSize = 8; // Size of each chunk

  const chunkedTests = chunkArray(scanData?.tests || [], chunkSize);
  const totalChunkedTests = chunkedTests?.length;
  console.log(scanData, "scanData");

  const [similarTests, setSimilarTests] = useState([]);
  const [similarPackages, setSimilarPackages] = useState([]);
  useEffect(() => {
    console.log("similarPackages : ", similarPackages);
  }, [similarPackages]);

  const getSimilarTests = async () => {
    console.log("labTestServiceCode : ", labTestServiceCode);
    if (!labTestServiceCode) {
      return;
    }
    const res: any = await dispatch(getAllSimilarTests(labTestServiceCode));
    console.log("res : ", res);
    if (res?.payload) {
      setSimilarTests(res?.payload);
    }
  };

  const getSimilarPackages = async () => {
    console.log("labTestPackageServiceCode : ", labTestPackageServiceCode);
    if (!labTestPackageServiceCode) {
      return;
    }
    const res: any = await dispatch(
      getAllSimilarPackages(labTestPackageServiceCode),
    );
    console.log("res : ", res);
    if (res?.payload) {
      setSimilarPackages(res?.payload);
    }
  };

  const getAllSimilarItems = async () => {
    console.log("getAllSimilarItems");
    if (labTestPackageServiceCode) {
      getSimilarPackages();
    }
    if (labTestServiceCode) {
      getSimilarTests();
    }
  };

  const [availablePkgVendors, setAvailablePkgVendors] = useState<any>([]);
  const getAllPackageVendors = async (pkgCode: any) => {
    const res = (await dispatch(getAllPkgVendorsAPI(pkgCode))) as any;
    console.log("getAllPackageVendors : ", res);
    setAvailablePkgVendors(res?.payload?.data?.data);
  };

  const getAllTestVendors = async (testCode: any) => {};

  useEffect(() => {
    if (labTestPackageServiceCode) {
      getAllPackageVendors(labTestPackageServiceCode);
    } else if (labTestServiceCode) {
      getAllTestVendors(labTestServiceCode);
    } else if (scanId) {
      // radiology
      getAllTestVendors(scanId);
    }
  }, [labTestServiceCode, labTestPackageServiceCode, scanId]);

  useEffect(() => {
    getAllSimilarItems();
  }, [labTestServiceCode, labTestPackageServiceCode, dispatch, categoryId]);

  const handleSortChange = async (value: any) => {
    console.log("value : ", value);
    setSortVal(value);
    if (labTestPackageServiceCode) {
      getPackageDetails(labTestPackageServiceCode, distanceVal, value);
    } else if (labTestServiceCode) {
      getTestDetails(labTestServiceCode, distanceVal, value);
    } else if (scanId) {
      await getTestPackageInfo();
      getTestDetails(scanId, distanceVal, value);
    }
  };

  const handleDistanceChange = async (val: any) => {
    const value = parseInt(val || 0);
    console.log("value : ", value);
    setDistanceVal(value);
    if (labTestPackageServiceCode) {
      getPackageDetails(labTestPackageServiceCode, value, sortVal);
    } else if (labTestServiceCode) {
      getTestDetails(labTestServiceCode, value, sortVal);
    } else if (scanId) {
      await getTestPackageInfo();
      getTestDetails(scanId, value, sortVal);
    }
  };

  const handleToggleChange = async (checked: any) => {
    const value = checked ? "center" : "home";
    setToggleValue(value);
    if (labTestPackageServiceCode) {
      getPackageDetails(labTestPackageServiceCode, distanceVal, sortVal, value);
    }
    console.log("Selected toggle value:", value); // Log the selected value
  };

  const handleShowTimeGraph = (item: any) => {
    setShowTimeSlotGraph((prev) => !prev);
  };

  useEffect(() => {}, []);

  const DiagnosticCard = ({
    labName,
    price,
    originalPrice,
    discount,
    address,
    nextSlot,
    logo,
    handleAddToCart,
    item,
    from = "org",
  }: any) => {
    const [pinCode, setPinCode] = useState("");
    const [expressAvailable, setExpressAvailable] = useState(false);
    const [disabled, setDisabled] = useState(true);
    console.log("DiagnosticCard item : ", item);

    let matchedAvailableVendor;
    if (labTestPackageServiceCode) {
      matchedAvailableVendor = availablePkgVendors.find(
        (vendor: any) => item?.id === vendor?.vendor?.id,
      );
    } else if (labTestServiceCode) {
      matchedAvailableVendor = item;
    } else if (scanId) {
      matchedAvailableVendor = item;
    }

    console.log("matchedAvailableVendor : ", matchedAvailableVendor);

    const handlePinCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (value.length <= 6) {
        setPinCode(value);
      }
    };

    const handleCheck = async () => {
      console.log("Entered Pin Code:", pinCode);
      const id =
        scanId || isCtmri010 || labTestPackageServiceCode || labTestServiceCode;
      console.log("handleCheck id : ", id);

      const res = await handleExpressCheck(pinCode, id);
      console.log("res : ", res);
      setExpressAvailable(res);
      setDisabled(false);
    };

    return (
      <div className="diagnostic-card">
        <Banner discount={discount} />
        <div className="card-content">
          <div
            className="card-logo"
            // onClick={() => handleShowTimeGraph(item)}
          >
            <img src={item?.image ? item?.image : logo} alt="Lab Logo" />
          </div>

          <div className="card-details">
            <h3>{labName}</h3>
            <div className="card-prices">
              <span className="current-price">
                ₹
                {item?.price?.discounted_price
                  ? item?.price?.discounted_price
                  : price}
              </span>
              {/* <span className="original-price j">
                ₹
                {item?.price?.actual_cost
                  ? item?.price?.actual_cost
                  : originalPrice}
              </span> */}
              {/* <span className="discount-text">
                {item?.price?.discount_percentage
                  ? item?.price?.discount_percentage
                  : discount}
                % Off
              </span> */}
            </div>
            <div className="card-info">
              <div className="info-item-address-sec">
                <span>
                  <FaMapMarkerAlt />
                </span>
                {item?.distance_km && (
                  <>
                    <span className="km_distance_sec">
                      {Math.round(item?.distance_km)} Km away
                    </span>
                    , &nbsp;
                  </>
                )}
                <span className="addres-sec-all-content">{item?.address}</span>
              </div>
              {/* <div className="info-item">
              <AiOutlineCalendar /> Next Slot {nextSlot}
            </div> */}
            </div>

            <div className="pin-code-checker">
              {labTestPackageServiceCode && (
                <>
                  <Input
                    type="number"
                    placeholder="Enter Pin Code"
                    value={pinCode}
                    onChange={handlePinCodeChange}
                    style={{ width: "150px", marginRight: "10px" }}
                  />
                  <AntdButton type="primary" onClick={handleCheck}>
                    Check
                  </AntdButton>
                </>
              )}
              <button
                className="add-btn-package-sec-code"
                onClick={(evnt: any) =>
                  handleAddToCart(evnt, item, expressAvailable)
                }
                // disabled={labTestServiceCode ? false : disabled}
              >
                Add
                <BsCart2 />
              </button>
            </div>

            <div className="bottomWrapper">
              {item.available_in_90 === "true" && (
                <div className="availableIn90">
                  <img
                    src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733316202523.png"
                    alt=""
                  />
                  in <span>90 Minutes</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="time-slots-container">
          {/* <p>Morning Slot</p> */}
          {matchedAvailableVendor?.mor_start_Time &&
            matchedAvailableVendor?.mor_end_Time && (
              <div className="slot-row">
                <div className="time-section time-section1">
                  <span> {matchedAvailableVendor?.mor_start_Time}</span>
                  {` `}to
                </div>
                <div className="time-section">
                  {matchedAvailableVendor?.mor_end_Time}
                </div>
                <div>{`->`}</div>
                <div className="otherInfo">
                  <div className="price-section">
                    ₹ {matchedAvailableVendor?.mor_selling_price}
                  </div>
                  <div className="gender-section">
                    {matchedAvailableVendor?.mor_female_available ===
                      "true" && (
                      <TbGenderFemale size={32} title="Female Available" />
                    )}
                    {matchedAvailableVendor?.mor_male_available === "true" && (
                      <TbGenderMale size={32} title="Male Available" />
                    )}
                  </div>
                  <div className="bottomWrapper">
                    <button
                      onClick={(evnt: any) =>
                        handleAddToCart(evnt, item, expressAvailable)
                      }
                    >
                      BooK Now
                    </button>
                  </div>
                </div>
              </div>
            )}
          {/* <p>Afternoon Slot</p> */}
          {matchedAvailableVendor?.aft_start_Time &&
            matchedAvailableVendor?.aft_end_Time && (
              <div className="slot-row">
                <div className="time-section time-section1">
                  {/* <Text>Start Time</Text> */}
                  <span>{matchedAvailableVendor?.aft_start_Time}</span>
                  {` `}
                  {` `}to
                </div>
                <div className="time-section">
                  {/* <Text>End Time</Text> */}
                  <span>{matchedAvailableVendor?.aft_end_Time}</span>
                </div>
                <div>{`->`}</div>
                <div className="otherInfo">
                  <div className="price-section">
                    {/* <Text title="Buying Price">Price</Text> */}₹{" "}
                    <span>{matchedAvailableVendor?.aft_selling_price}</span>
                  </div>

                  <div className="gender-section">
                    {matchedAvailableVendor?.aft_female_available ===
                      "true" && (
                      <TbGenderFemale size={32} title="Female Available" />
                    )}
                    {matchedAvailableVendor?.aft_male_available === "true" && (
                      <TbGenderMale size={32} title="Male Available" />
                    )}
                  </div>
                </div>
                <div className="bottomWrapper">
                  <button
                    onClick={(evnt: any) =>
                      handleAddToCart(evnt, item, expressAvailable)
                    }
                  >
                    BooK Now
                  </button>
                </div>
              </div>
            )}
          {/* <p>Evening Slot</p> */}
          {matchedAvailableVendor?.eve_start_Time &&
            matchedAvailableVendor?.eve_end_Time && (
              <div className="slot-row">
                <div className="time-section time-section1">
                  <span> {matchedAvailableVendor?.eve_start_Time}</span>
                  to
                </div>
                <div className="time-section">
                  {matchedAvailableVendor?.eve_end_Time}
                </div>
                <div>{`->`}</div>
                <div className="otherInfo">
                  {/* <div className="price-section">
                <Text title="Buying Price">BP</Text>
                <Input
                  type="text"
                  readOnly
                  value={matchedAvailableVendor?.eve_buying_price || "N/A"}
                />
              </div> */}
                  <div className="price-section">
                    ₹{` `} {matchedAvailableVendor?.eve_selling_price}
                  </div>
                  <div className="gender-section">
                    {matchedAvailableVendor?.eve_female_available ===
                      "true" && (
                      <TbGenderFemale size={32} title="Female Available" />
                    )}
                    {matchedAvailableVendor?.eve_male_available === "true" && (
                      <TbGenderMale size={32} title="Male Available" />
                    )}
                  </div>
                </div>
                <div className="bottomWrapper">
                  <button
                    onClick={(evnt: any) =>
                      handleAddToCart(evnt, item, expressAvailable)
                    }
                  >
                    BooK Now
                  </button>
                </div>
              </div>
            )}
        </div>
      </div>
    );
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

  const CheckupCard = ({ scanDetails }: any) => {
    const {
      service_name = "",
      description = "",
      preperation = "",
      price = {},
      fasting = "",
      visit_type = "",
      tests,
      vendors = [],
    } = scanDetails || {};
    console.log("scanDetails : ", scanDetails);

    const [isDrawerVisible, setIsDrawerVisible] = useState(false);

    const showDrawer = () => {
      setIsDrawerVisible(true);
    };

    const closeDrawer = () => {
      setIsDrawerVisible(false);
    };

    console.log(sectionName, "sectionName");

    return (
      <>
        <div className="checkup-card">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="checkup-title">{service_name}</h1>
            <button
              onClick={() => {
                setOpenShareModel(true);
              }}
              className="btn share-btn-icon"
              title="Click to Share"
            >
              <GoShareAndroid />
            </button>
          </div>

          <p
            // className="checkup-description"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
          {tests?.length > 0 && (
            <button className="checkup-button" onClick={showDrawer}>
              + {tests?.length || 1} Tests
            </button>
          )}
          <div className="checkup-details">
            <div className="price-container">
              <div className="price-info">
                <span className="original-price h">₹{price?.actual_cost}</span>
                <span className="discounted-price">
                  ₹{price?.discounted_price}
                </span>
                <span className="discount-badge">
                  {price?.discount_percentage}% Off
                </span>

                <div className="divider"></div>
              </div>
              {/* <span className="report-time">Report Within 7 Hours</span> */}
            </div>
            <p className="prep">
              <strong>Preparation:</strong>
              <span
                dangerouslySetInnerHTML={{
                  __html: preperation,
                }}
              ></span>
            </p>
            {sectionName === "ctmri" ? null : (
              <>
                <p>
                  <strong>Fasting Required:</strong> {fasting ? "Yes" : "No"}
                </p>
                <p>
                  <strong>Visit Type:</strong> {formatStatus(visit_type || "")}
                </p>
              </>
            )}
          </div>
          {sectionName === "ctmri" ? (
            <></>
          ) : (
            <div className="checkup-video">
              <video
                src={
                  fasting
                    ? "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/videos/fasting.mp4"
                    : "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/videos/nonfasting.mp4"
                }
                autoPlay
                loop
                muted
                controls={false}
              ></video>
            </div>
          )}
        </div>

        <Drawer
          title={
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src={TestTubesIcon}
                alt="Test Tubes"
                style={{ width: "24px", height: "24px" }}
              />
              <span>Packages Includes {tests?.length} Tests</span>
            </div>
          }
          placement="right"
          onClose={closeDrawer}
          visible={isDrawerVisible}
          width={400} // Adjust the width as needed
        >
          <div className="drawer">
            <ul style={{ paddingLeft: "20px", lineHeight: "1.8" }}>
              {tests?.map((test: any, index: any) => (
                <li key={index} style={{ listStyleType: "disc" }}>
                  {test.service_name}
                </li>
              ))}
            </ul>
          </div>
        </Drawer>
      </>
    );
  };

  const handleExpressCheck = async (pin: any, vendorId: string) => {
    let body = {} as any;
    body.vendorId = vendorId;
    body.data = {} as any;
    body.data.zip = pin;
    if (labTestPackageServiceCode) {
      body.data.package_code = labTestPackageServiceCode;
    } else {
      body.data.test_code = labTestServiceCode;
    }

    const response = (await dispatch(checkExpressBook(body))) as any;
    console.log("response Expresss bOOk", response);
    if (response?.payload?.success) {
      toast.success("The Express Book is available for the given pincode!");
      return true;
    } else {
      toast.error(
        "Sorry, Express Book is not available for the given pincode!",
      );
      return false;
    }
  };

  return (
    <ScanDetailsStyled>
      <EmpanelWithUs
        sectionName={"labtest"}
        show={showEmpanelWithUsModel}
        onHide={() => {
          setShowEmpanelWithUsModel(false);
        }}
      />
      <div>
        <ShareModal
          show={openShareModel}
          url={shareURL}
          title="Share on"
          handleClose={() => {
            setOpenShareModel(false);
          }}
          onCopyClick={() => {
            navigator.clipboard.writeText(shareURL);
          }}
        />
        {loading && <Loader />}
        <Container fluid className="scanDetailsContainer">
          <p
            className=" text-xl d-flex align-items-center cursor-pointer top-category-sec font-bold mx-2 back-btn-sec opacity-75 "
            onClick={() => navigateToBack()}
          >
            <svg
              width="21"
              height="18"
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.6875 7.7152H4.12125L8.88563 2.10999C9.10841 1.84745 9.21559 1.50898 9.18359 1.16903C9.15159 0.829086 8.98304 0.515513 8.715 0.297298C8.44697 0.0790819 8.10141 -0.0259025 7.75435 0.00544001C7.40729 0.0367826 7.08716 0.201885 6.86437 0.464426L0.301875 8.17802C0.257723 8.23937 0.218242 8.30383 0.18375 8.37086C0.18375 8.43514 0.18375 8.47371 0.0918752 8.53799C0.0323842 8.68539 0.00123522 8.8423 0 9.0008C0.00123522 9.1593 0.0323842 9.31621 0.0918752 9.46362C0.0918752 9.5279 0.0918748 9.56647 0.18375 9.63075C0.218242 9.69778 0.257723 9.76223 0.301875 9.82359L6.86437 17.5372C6.98778 17.6823 7.14231 17.799 7.31699 17.879C7.49166 17.959 7.68218 18.0003 7.875 18C8.18167 18.0006 8.47887 17.896 8.715 17.7043C8.8479 17.5964 8.95776 17.4638 9.03829 17.3143C9.11881 17.1647 9.16842 17.001 9.18427 16.8326C9.20012 16.6643 9.1819 16.4945 9.13065 16.333C9.0794 16.1715 8.99614 16.0215 8.88563 15.8916L4.12125 10.2864H19.6875C20.0356 10.2864 20.3694 10.151 20.6156 9.90986C20.8617 9.66876 21 9.34177 21 9.0008C21 8.65984 20.8617 8.33284 20.6156 8.09175C20.3694 7.85065 20.0356 7.7152 19.6875 7.7152Z"
                fill="#444444"
              />
            </svg>{" "}
            &nbsp;
            {`  Back`}
          </p>

          <Row className="mainWrapperContainer">
            <Col>
              <CheckupCard
                scanDetails={scanId ? scanDetails?.test : scanData}
              />
            </Col>
            <Col className="rightContainer">
              <div className="headWrapper">
                {labTestPackageServiceCode && (
                  <div className="toggle-filter">
                    <span>Home Collection</span>
                    <Switch
                      defaultChecked={toggleValue === "center"} // "Center" is default
                      onChange={handleToggleChange}
                    />
                    <span>Center</span>
                  </div>
                )}
                <div className="btn-filter-module-div">
                  {/* Select Dropdown Section */}

                  <button
                    className="btn my-prefrance-btn"
                    onClick={() => {
                      setShowEmpanelWithUsModel(true);
                    }}
                  >
                    My Preference
                  </button>
                  {selectedCurrentAddress?.latitude &&
                    selectedCurrentAddress?.longitude && (
                      <>
                        <div className="selector-filter-sub-module-div">
                          <Select
                            showSearch
                            placeholder="Sort By Price"
                            filterOption={(input, option) =>
                              (option?.label ?? "")
                                .toLowerCase()
                                .includes(input.toLowerCase())
                            }
                            defaultValue="asc"
                            onChange={handleSortChange}
                            style={{ borderRadius: "10px", width: "200px" }}
                            options={[
                              { value: "desc", label: "Price: High to Low" },
                              { value: "asc", label: "Price: Low to High" },
                            ]}
                          />
                        </div>

                        <div className="selector-filter-sub-module-div">
                          <Select
                            showSearch
                            placeholder="Sort By Distance"
                            filterOption={(input, option) =>
                              (option?.label ?? "")
                                .toLowerCase()
                                .includes(input.toLowerCase())
                            }
                            defaultValue={10}
                            onChange={handleDistanceChange}
                            style={{ borderRadius: "10px", width: "200px" }}
                            options={[
                              { value: 5, label: "5 Km" },
                              { value: 10, label: "10 Km" },
                              { value: 20, label: "20 Km" },
                              { value: 50, label: "50 Km" },
                              { value: 100, label: "100 Km" },
                              { value: 500, label: "500 Km" },
                              { value: 700, label: "700 Km" },
                              { value: 1000, label: "1000 Km" },
                              { value: 5000, label: "5000 Km" },
                            ]}
                          />
                        </div>
                      </>
                    )}
                </div>
              </div>
              {selectedCurrentAddress?.latitude &&
              selectedCurrentAddress?.longitude ? (
                <Col className="availableCentersRow">
                  {scanData?.vendors?.map((item: any, index: any) => {
                    console.log("item : ", item);

                    return (
                      <DiagnosticCard
                        labName={truncateText(item?.name, 50)}
                        price={item?.price?.discounted_price}
                        originalPrice={item?.price?.actual_cost}
                        discount={item?.price?.discount_percentage}
                        address={truncateText(item?.address, 20)}
                        nextSlot="Today, 11:00 AM"
                        logo={test} // Replace with actual logo URL
                        handleAddToCart={handleAddToCart}
                        item={item}
                        from="availableVendors"
                      />
                    );
                  })}
                </Col>
              ) : (
                <button
                  className="btn my-prefrance-btn m-auto"
                  onClick={() => {
                    dispatch(updateShowAddressSearchModel(true));
                  }}
                >
                  Please Select a Service Location
                </button>
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              {sectionName === "ctmri" ? (
                <></>
              ) : (
                <div className="similarItems">
                  {labTestPackageServiceCode && (
                    <>
                      {similarPackages?.length > 0 ? (
                        <SimilarPackageTable
                          packages={similarPackages}
                          currentItem={currentItem}
                          type={"package"}
                        />
                      ) : (
                        <p>No Similar Packages Found</p>
                      )}
                    </>
                  )}

                  {labTestServiceCode && (
                    <>
                      {similarTests?.length > 0 ? (
                        <SimilarPackageTable
                          packages={similarTests}
                          currentItem={currentItem}
                          type={"test"}
                        />
                      ) : (
                        <p>No Similar Tests Found</p>
                      )}
                    </>
                  )}
                </div>
              )}
            </Col>
          </Row>

          <Row className="marginclass"></Row>
          <Row className="searchRow mt-6"></Row>
          {showTimeSlotGraph && (
            <div className="timeslot-graph-div">
              <p>Time Based Price</p>
              <div className="d-flex graph-main-div">
                <div className="left-slot-filter">
                  <div className="left-slot-filter-card">
                    <div className="d-flex justify-content-between align-items-center">
                      <p>Filters</p>
                      <p>CLEAR ALL</p>
                    </div>
                    <div className="filter-checkbox">
                      {allSlotList?.map((item: any) => {
                        return (
                          <div>
                            <input
                              title="Checkbox"
                              type="checkbox"
                              className="me-3"
                            />
                            {item?.name}
                          </div>
                        );
                      })}
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <p>Radiologist</p>
                    </div>
                    <div className="filter-checkbox ">
                      {allGenderList?.map((item: any) => {
                        return (
                          <div>
                            <input
                              title="Checkbox"
                              type="checkbox"
                              className="me-3"
                            />
                            {item?.name}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="right-slot-filter">
                  <div className="slot-carousel-container">
                    <button className="arrow-btn left">{`<`}</button>
                    <div className="vertical-line"></div>
                    {items.map((item, index) => (
                      <>
                        <div className="carousel">
                          <div key={index} className="carousel-item">
                            <span className="item-date">{item.date}</span>

                            <span className="item-price">{item.price}</span>
                          </div>
                        </div>
                        <div className="vertical-line"></div>
                      </>
                    ))}
                    <button className="arrow-btn right">{`>`}</button>
                  </div>

                  <div className="graph-container">
                    <LineGraphWithLabs />
                  </div>
                </div>
              </div>
            </div>
          )}
        </Container>
      </div>
    </ScanDetailsStyled>
  );
};

export default ScanDetails;
