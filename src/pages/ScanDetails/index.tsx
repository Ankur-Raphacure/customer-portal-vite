import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Modal, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import test from "../../assets/images/ctmri/test.png";
import scanDesp from "../../assets/images/ctmri/scanDesp.png";
import { ScanDetailsStyled } from "./ScanDetailsStyled.styled";
import { useDispatch, useSelector } from "react-redux";
import { FaHome } from "react-icons/fa";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import TestTubesIcon from "../../assets/images/labtest/testtubes.svg";

import {
  updateDoctordetails,
  addPackage,
} from "../../redux/slices/bookingScreen/bookingScreenSlice";
import { updateSelectedlabtestDetails } from "../../redux/slices/labtest/labtestSlice";
import { updateShowLoginModel } from "../../redux/slices/auth/authSlice";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import {
  getCtmriDetailsQueryAPI,
  getPackageDetailsQueryAPI,
} from "../../redux/slices/ctmri/ctmriService";
import ScanGraph from "./ScanGraph";
import { IoMdFemale, IoMdMale } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
import Loader from "../../components/Loader/Loader";
import ShareModal from "../../components/ShareModal/ShareModal";
import {
  checkExpressBook,
  getAllFilteredPackages,
  getAllFilteredTests,
  getAllPkgVendorsAPI,
  getAllSimilarPackages,
  getAllSimilarTests,
  getHealthPackagesAPI,
} from "../../redux/slices/labtest/labtestService";
import { ReactComponent as Checkbox } from "../../assets/icons/checkbox.svg";
import "./style.css";
import Thankyou from "../../assets/images/thankyou.png";
import RefranceGraph from "./RefranceGraph";
import { MdOutlineDateRange } from "react-icons/md";
import ExpressCheck from "./ExpressCheck/ExpressCheck";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { formatStatus, truncateText } from "../../Scenes/common";
import { BsCart2 } from "react-icons/bs";
import {
  Select,
  Drawer,
  Switch,
  Input,
  Button as AntdButton,
  Typography,
} from "antd";
import { toast } from "react-toastify";
import HealthSaverCard from "../../components/HealthSaverCard/HealthSaverCard";
import Graph from "../Womenscare/BMIHealthJourney/Graph";
import LineGraphWithLabs from "./LineGraph";
import { TbGenderMale, TbGenderFemale } from "react-icons/tb";

const { Text } = Typography;
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

  const dispatch = useDispatch();
  const { scanDetails } = useSelector((ReduxState: any) => ReduxState.ctmri);
  const [showOptions, setShowOptions] = useState(false);
  const [showGraph, setShowGraph] = useState(false);
  const [openShareModel, setOpenShareModel] = useState(false);
  const [pin, setPin] = useState<any>("");
  const [error, setError] = useState<any>("");
  const [loading, setLoading] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<any>("");
  const [showTimeSlotGraph, setShowTimeSlotGraph] = useState(false);
  const { user, userCity, subDomainDetails } = useSelector(
    (ReduxState: any) => ReduxState.auth
  );
  console.log("subDomainDetails", props);
  const { healthPackagesList, allTestsList, allPackagesList } = useSelector(
    (ReduxState: any) => ReduxState.labtest
  );
  const [itemCode, setItemCode] = useState(null);
  useEffect(() => {
    dispatch(getHealthPackagesAPI());
  }, []);

  useEffect(() => {
    let categoryIds =
      scanDetails?.test?.category_ids || scanDetails?.package?.category_ids;

    console.log("category_ids: ", categoryIds);

    if (categoryIds && categoryIds.length > 0) {
      setCategoryId(categoryIds);
    } else {
      // setCategoryId([0]);
    }
  }, [scanDetails]);

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
      (pkg: any) => pkg?.service_code === itemCode
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
  const [sortVal, setSortVal] = useState("discount");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Show loader
      try {
        if (labTestPackageServiceCode) {
          await getPackageDetails();
        } else {
          await getTestPackageDetails();
        }
      } catch (error) {
        console.error("Error fetching scan details:", error);
        // Handle error if needed
      } finally {
        setLoading(false); // Hide loader
      }
    };

    fetchData();
  }, [labTestPackageServiceCode, labTestServiceCode, scanId]);

  useEffect(() => {
    if (labTestPackageServiceCode) {
      getPackageDetails();
    } else {
      getTestPackageDetails();
    }
  }, [userCity?.name]);
  const getTestPackageDetails = async () => {
    setLoading(true);
    await dispatch(
      getCtmriDetailsQueryAPI({
        service_code: labTestServiceCode || scanId,
        city: userCity?.id ?? "",
      })
    );
    setLoading(false);
  };
  const getPackageDetails = async () => {
    setLoading(true); // Show loader
    try {
      await dispatch(
        getPackageDetailsQueryAPI({
          service_code: labTestPackageServiceCode,
          city: userCity?.id ?? "",
          collection_type: toggleValue,
          sort: sortVal,
        })
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
    expressAvailable = false
  ) => {
    const testId = obj?.id;
    const pathName = window.location.pathname;
    console.log("pathName : ", pathName);
    console.log("obj : ", obj);
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      if (pathName.includes(`/radiology/scan-details/`)) {
        const testD = scanDetails?.test;
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
          })
        );
        history.push(`/ctmri/bookingReview`);
      } else if (pathName.includes(`/labTestDetils/`)) {
        console.log("found");
        await dispatch(
          updateSelectedlabtestDetails({
            selectedTest: { ...scanDetails?.test },
            selectedPackage: { ...scanDetails?.package },
          })
        );
        history.push(`/labtest/packages/${obj?.id}`);
      } else if (pathName.includes(`/labPackageDetils/`)) {
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
              expressBook: expressAvailable,
              slot1: {},
              slot2: {},
            })
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
          })
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
            })
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
              })
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
                })
              );
              history.push(`/labtest/bookingReview`);
            } else {
              await dispatch(
                updateSelectedlabtestDetails({
                  selectedTest: { ...scanDetails?.test },
                  selectedPackage: { ...scanDetails?.package },
                })
              );
              history.push(`/labtest/packages/${obj?.id}`);
            }
          }
        }
      }
    }
  };

  const scanData =
    scanDetails?.tests || scanDetails?.package || scanDetails?.test;
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
      getAllSimilarPackages(labTestPackageServiceCode)
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
      await dispatch(
        getPackageDetailsQueryAPI({
          service_code: labTestPackageServiceCode,
          city: userCity?.id ?? "",
          collection_type: toggleValue,
          sort: value,
        })
      );
    } else if (labTestServiceCode || scanId) {
      await dispatch(
        getCtmriDetailsQueryAPI({
          service_code: labTestServiceCode || scanId,
          city: userCity?.id ?? "",
          sort: value,
        })
      );
    }
  };

  const handleToggleChange = async (checked: any) => {
    const value = checked ? "center" : "home";
    setToggleValue(value);
    await dispatch(
      getPackageDetailsQueryAPI({
        service_code: labTestPackageServiceCode,
        city: userCity?.id ?? "",
        collection_type: value,
        sort: sortVal,
      })
    );
    console.log("Selected toggle value:", value); // Log the selected value
  };

  const handleShowTimeGraph = (item: any) => {
    setShowTimeSlotGraph((prev) => !prev);
  };

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
  }: any) => {
    const [pinCode, setPinCode] = useState("");
    const [expressAvailable, setExpressAvailable] = useState(false);
    const [disabled, setDisabled] = useState(true);

    let matchedAvailableVendor;
    if (labTestPackageServiceCode) {
      matchedAvailableVendor = availablePkgVendors.find(
        (vendor: any) => item?.id === vendor?.vendor?.id
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
              <span className="original-price">
                ₹
                {item?.price?.actual_cost
                  ? item?.price?.actual_cost
                  : originalPrice}
              </span>
              <span className="discount-text">
                {item?.price?.discount_percentage
                  ? item?.price?.discount_percentage
                  : discount}
                % Off
              </span>
            </div>
            <div className="card-info">
              <div className="info-item">
                <FaMapMarkerAlt /> {address}
              </div>
              {/* <div className="info-item">
              <AiOutlineCalendar /> Next Slot {nextSlot}
            </div> */}
            </div>
            {labTestPackageServiceCode && (
              <div className="pin-code-checker">
                <Input
                  type="number"
                  placeholder="Enter Pin Code"
                  value={pinCode}
                  onChange={handlePinCodeChange}
                  style={{ width: "200px", marginRight: "10px" }}
                />
                <AntdButton type="primary" onClick={handleCheck}>
                  Check
                </AntdButton>
              </div>
            )}
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
              <button
                onClick={(evnt: any) =>
                  handleAddToCart(evnt, item, expressAvailable)
                }
                // disabled={labTestServiceCode ? false : disabled}
              >
                Add
                <BsCart2 />
              </button>
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
      type = "",
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
          <h1 className="checkup-title">{service_name}</h1>
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
            {/* <p>
              <strong>Ideal For:</strong>
              <div>
                <IoMdMale color="#252B61" />
                Men
              </div>
              <div>
                <IoMdFemale color="#F08FBE" />
                Women
              </div>
            </p>
            <p>
              <strong>Recommended Age:</strong> 18-50
            </p> */}
            <div className="price-container">
              <div className="price-info">
                <span className="original-price">₹{price?.actual_cost}</span>
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
                  <strong>Visit Type:</strong> {formatStatus(type)}
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
        "Sorry, Express Book is not available for the given pincode!"
      );
      return false;
    }
  };

  return (
    <ScanDetailsStyled>
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
            // setIsCopied(true);
            // setTimeout(() => {
            //   setIsCopied(false);
            // }, 5000);
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
                scanDetails={
                  scanDetails?.tests ||
                  scanDetails?.package ||
                  scanDetails?.test
                }
              />
              {/* <Row className="bodyScanDiv">
                <Col className="imageparentDiv">
                  <img src={scanDetails?.package?.image || test} alt="" />
                  <div className="imageTextDiv">
                    <p className="bodyScanTxt">{scanData?.service_name}</p>
                    <p className="orderPeoples">
                      213 Peoples Ordered Recently
                    </p>
                    <p>
                      <FaHome className="hm-icon" />
                      {selectedPackage?.visit_type && (
                        <span className="hm-txt">
                          {selectedPackage.visit_type} Collection
                        </span>
                      )}
                    </p>
                  </div>
                </Col>
                <Row className="scanDescriptionRow">
                  <Col>
                    <p className="scanDesTitle">
                      Preparation needed for checkup
                    </p>
                    <p className="waterLevel">{scanData?.preperation}</p>
                    <p className="scanDesTitle">Description</p>
                    <p className="scanDespTxt">{scanData?.description}</p>

                    <Row>
                      {chunkedTests.map((chunk, index) => (
                        <Col key={index}>
                          <ul>
                            {chunk.map((item: any, idx: number) => (
                              <li key={idx}>{item?.service_name}</li>
                            ))}
                          </ul>
                        </Col>
                      ))}
                    </Row>
                  </Col>
                </Row>

                <Row className="scanDespVideoRow p-0">
                  <Col className="p-2 d-flex">
                    <div className="scDepVdDiv">
                      <img src={scanDesp} alt="scan description" />
                    </div>
                    <div className="d-flex align-items-end">
                      <div className="d-flex">
                        <button
                          onClick={() => {
                            setOpenShareModel(true);
                          }}
                          className="btn"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                          >
                            <path
                              d="M28 14L18.6667 4.66663V9.99996C9.33333 11.3333 5.33333 18 4 24.6666C7.33333 20 12 17.8666 18.6667 17.8666V23.3333L28 14Z"
                              fill="#444444"
                            />
                          </svg>

                          <ul className="socials">
                            <li>
                              <IoLogoInstagram />
                            </li>

                            <li>
                              <FaTwitter />
                            </li>
                            <li>
                              <FaFacebook />
                            </li>
                          </ul>
                        </button>
                        <button className="btn">
                          <FaHeart className="icon" />
                        </button>
                      </div>
                      <div className="needHelpDiv">
                        <div
                          onClick={() => history.push("/chat")}
                          className="sub-needHelpDiv"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="21"
                            viewBox="0 0 21 21"
                            fill="none"
                          >
                            <path
                              d="M0.427989 9.98596C0.427519 11.6843 0.871283 13.3426 1.71509 14.8043L0.34729 19.7984L5.4581 18.4583C6.87168 19.2278 8.4555 19.6311 10.065 19.6312H10.0692C15.3824 19.6312 19.7074 15.3077 19.7097 9.99356C19.7107 7.41849 18.7088 4.99706 16.8885 3.17531C15.0684 1.35371 12.6479 0.349991 10.0688 0.348816C4.755 0.348816 0.430261 4.67207 0.428067 9.98596"
                              fill="url(#paint0_linear_182_989)"
                            />
                            <path
                              d="M0.0838326 9.98281C0.0832841 11.7423 0.542953 13.4599 1.41685 14.9739L0 20.147L5.29407 18.7589C6.75275 19.5542 8.39509 19.9735 10.0663 19.9742H10.0706C15.5744 19.9742 20.0548 15.4952 20.0571 9.99081C20.0581 7.32321 19.0201 4.81473 17.1348 2.92772C15.2491 1.04093 12.742 0.00109687 10.0706 0C4.56582 0 0.0860263 4.47838 0.0838326 9.98281ZM3.23664 14.7132L3.03897 14.3994C2.20801 13.0781 1.76942 11.5513 1.77004 9.98344C1.77177 5.4083 5.49519 1.68605 10.0737 1.68605C12.291 1.68699 14.3747 2.55133 15.942 4.11955C17.5092 5.68792 18.3716 7.77277 18.371 9.99018C18.369 14.5653 14.6455 18.288 10.0706 18.288H10.0673C8.57764 18.2873 7.11668 17.8872 5.84258 17.1312L5.53937 16.9514L2.39777 17.7751L3.23664 14.7132Z"
                              fill="url(#paint1_linear_182_989)"
                            />
                            <path
                              d="M7.57453 5.80939C7.38759 5.39391 7.19086 5.38553 7.01309 5.37824C6.86752 5.37197 6.70111 5.37244 6.53485 5.37244C6.36844 5.37244 6.09806 5.43504 5.86952 5.68458C5.64074 5.93436 4.99609 6.53795 4.99609 7.76559C4.99609 8.99331 5.89028 10.1797 6.01493 10.3464C6.13974 10.5127 7.74118 13.1126 10.2775 14.1128C12.3853 14.944 12.8143 14.7787 13.2718 14.737C13.7293 14.6955 14.7482 14.1336 14.956 13.5509C15.164 12.9683 15.164 12.4689 15.1017 12.3646C15.0393 12.2606 14.8729 12.1981 14.6234 12.0734C14.3737 11.9486 13.147 11.3449 12.9183 11.2616C12.6895 11.1784 12.5232 11.1369 12.3567 11.3868C12.1903 11.6362 11.7125 12.1981 11.5668 12.3646C11.4214 12.5314 11.2757 12.5521 11.0262 12.4273C10.7765 12.3021 9.97293 12.0389 9.01951 11.1889C8.27771 10.5275 7.77691 9.71074 7.63134 9.46089C7.48576 9.21143 7.61574 9.0762 7.74087 8.95186C7.85298 8.84006 7.99048 8.66048 8.11537 8.51483C8.23979 8.36911 8.28131 8.26514 8.36452 8.09873C8.4478 7.93216 8.40612 7.78643 8.34383 7.66162C8.28131 7.53681 7.79641 6.30275 7.57453 5.80939Z"
                              fill="white"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_182_989"
                                x1="968.469"
                                y1="1945.3"
                                x2="968.469"
                                y2="0.348816"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#1FAF38" />
                                <stop offset="1" stop-color="#60D669" />
                              </linearGradient>
                              <linearGradient
                                id="paint1_linear_182_989"
                                x1="1002.86"
                                y1="2014.7"
                                x2="1002.86"
                                y2="0"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#F9F9F9" />
                                <stop offset="1" stop-color="white" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <span>Need Help ?</span>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Row> */}
            </Col>
            <Col className="rightContainer">
              {/* {showGraph ? (
                <div className="Grph-btn1">
                  <button className="close-btn" onClick={handleShowGraph}>
                    <IoIosCloseCircleOutline />
                  </button>
                </div>
              ) : (
                <div className="Grph-btn">
                  <button className="" onClick={handleShowGraph}>
                    {" "}
                    <img src={grp_1} alt="" className="me-2" />
                    View Graph
                  </button>
                </div>
              )}

              {showGraph && (
                <div>
                  <ScanGraph item={graphData} />
                </div>
              )} */}
              <div className="headWrapper">
                {/* <p className="availablecentersTxt">
                  Available {scanId ? "Scan Centres" : "Labs"}
                </p> */}
                <div className="btn-filter-module-div">
                  {/* Toggle Section */}
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

                  {/* Select Dropdown Section */}
                  <div className="selector-filter-sub-module-div">
                    <Select
                      showSearch
                      placeholder="Sort By"
                      filterOption={(input, option) =>
                        (option?.label ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      defaultValue="discount"
                      onChange={handleSortChange}
                      style={{ borderRadius: "10px", width: "200px" }}
                      options={[
                        { value: "discount", label: "Discount" },
                        { value: "desc", label: "Price: High to Low" },
                        { value: "asc", label: "Price: Low to High" },
                      ]}
                    />
                  </div>
                </div>
              </div>
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
                    />
                    // <div className="availCenterContainer" key={item?.id}>
                    //   <Row className="availCenterRow">
                    //     <div className="d-flex">
                    //       <div className="availCenterLogoCol">
                    //         <div className="scanCenterLogoDiv">
                    //           <img
                    //             src={item?.image ? item?.image : test}
                    //             alt={item?.name}
                    //           />
                    //         </div>
                    //       </div>
                    //       <div className="scanCenterLogoTxt mt-2 col-md-6">
                    //         <p className="centerName">{item?.name}</p>
                    //         <p className="centerPlace centerPlace1">
                    //           {item?.address} [1KmAway]
                    //         </p>

                    //         {!isRadiologyScanDetails && !isCtmri010 && (
                    //           <ExpressCheck
                    //             item={item}
                    //             labTestPackageServiceCode={
                    //               labTestPackageServiceCode
                    //             }
                    //             labTestServiceCode={labTestServiceCode}
                    //           />
                    //         )}
                    //       </div>
                    //     </div>
                    //     <div className="d-flex mt-3">
                    //       <p className="reportHours1 me-4">
                    //         {!isRadiologyScanDetails && !isCtmri010 && (
                    //           <>Tat within 2 Hour</>
                    //         )}
                    //       </p>
                    //       {!isRadiologyScanDetails && !isCtmri010 && (
                    //         <p className="reportHours1">
                    //           Report <span>8 Hours</span>
                    //         </p>
                    //       )}
                    //     </div>
                    //   </Row>
                    //   <Row className="scanViewGrapRow">
                    //     <Col className="availCenterLogoCol">
                    //       <div className="check-pin-div">
                    //         {!isRadiologyScanDetails && !isCtmri010 && (
                    //           <div className="checkbox">
                    //             <input
                    //               id={"form-checkbox-" + index}
                    //               name="checkbox"
                    //               type="checkbox"
                    //             />
                    //             <label htmlFor={"form-checkbox-" + index}>
                    //               <Checkbox className="check-box" />
                    //               <span>
                    //                 {!isRadiologyScanDetails && !isCtmri010 && (
                    //                   <div className="align-items-center me-2">
                    //                     <p className="reportHours2">
                    //                       Express Book 90 Min's Collections
                    //                     </p>
                    //                     <p className="reportHours1">
                    //                       Extra 99.00 for express Booking
                    //                     </p>
                    //                   </div>
                    //                 )}
                    //               </span>
                    //             </label>
                    //           </div>
                    //         )}

                    //         <div className="details-page-price-list-sec">
                    //           <div className="me-3 p-2 price-div">
                    //             {!subDomainDetails?.agreed_services
                    //               ?.hide_price && (
                    //               <h6>
                    //                 Price: <MdOutlineCurrencyRupee />
                    //                 {item?.price?.discounted_price ||
                    //                   scanData?.price?.discounted_price}
                    //               </h6>
                    //             )}
                    //           </div>
                    //           <div className="me-3-2-2">
                    //             <button
                    //               className="select-Center-Btn"
                    //               onClick={(evnt: any) =>
                    //                 handleBookingClick(evnt, item)
                    //               }
                    //             >
                    //               Add To Cart
                    //             </button>
                    //           </div>
                    //         </div>
                    //       </div>
                    //     </Col>
                    //   </Row>
                    // </div>
                  );
                })}
              </Col>
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
                        <>
                          <p>Similar Packages</p>
                          <div className="healthCards">
                            {similarPackages?.length > 0 &&
                              similarPackages
                                ?.slice(0, 8)
                                .map((packageItem: any, index: any) => (
                                  <HealthSaverCard
                                    key={packageItem?.service_code || index}
                                    title={truncateText(
                                      packageItem?.service_name,
                                      30
                                    )} // Truncate title
                                    subtitle={truncateText(
                                      packageItem?.description,
                                      30
                                    )} // Truncate subtitle
                                    featureButtonText="Package" // You can customize this text
                                    reportTime="N/A" // If no data provided for report time
                                    testCount={(
                                      packageItem?.tests?.length || "N/A"
                                    ).toString()} // Number of tests
                                    originalPrice={(
                                      packageItem?.price?.actual_cost || "N/A"
                                    ).toString()}
                                    discountedPrice={(
                                      packageItem?.price?.discounted_price ||
                                      "N/A"
                                    ).toString()}
                                    discount={(
                                      packageItem?.price?.discount_percentage ||
                                      0
                                    ).toString()}
                                    addToCart={() => {
                                      addPackageToCart(
                                        packageItem?.service_code
                                      );
                                    }}
                                  />
                                ))}
                          </div>
                        </>
                      ) : (
                        <p>No Similar Packages Found</p>
                      )}
                    </>
                  )}

                  {labTestServiceCode && (
                    <>
                      {similarTests?.length > 0 ? (
                        <>
                          <p>Similar Tests</p>
                          <div className="healthCards">
                            {similarTests?.length > 0 &&
                              similarTests
                                ?.slice(0, 8)
                                .map((testItem: any, index: any) => (
                                  <HealthSaverCard
                                    key={testItem?.service_code || index}
                                    title={truncateText(
                                      testItem?.service_name,
                                      30
                                    )} // Truncate title
                                    subtitle={truncateText(
                                      testItem?.description,
                                      30
                                    )} // Truncate subtitle
                                    featureButtonText="Package" // You can customize this text
                                    reportTime="N/A" // If no data provided for report time
                                    testCount={(
                                      testItem?.tests?.length || 0
                                    ).toString()} // Number of tests
                                    originalPrice={(
                                      testItem?.price?.actual_cost || 0
                                    ).toString()}
                                    discountedPrice={(
                                      testItem?.price?.discounted_price || 0
                                    ).toString()}
                                    discount={(
                                      testItem?.price?.discount_percentage || 0
                                    ).toString()}
                                    addToCart={() => {
                                      addPackageToCart(testItem?.service_code);
                                    }}
                                  />
                                ))}
                          </div>
                        </>
                      ) : (
                        <p>No Similar Tests Found</p>
                      )}
                    </>
                  )}

                  {/* {labTestPackageServiceCode && (
                    <>
                      <div className="healthCards">
                        {allPackagesList?.data?.length > 0 &&
                          allPackagesList?.data
                            ?.slice(0, 8)
                            .map((packageItem: any, index: any) => (
                              <HealthSaverCard
                                key={packageItem?.service_code || index}
                                title={truncateText(
                                  packageItem?.service_name,
                                  30
                                )} // Truncate title
                                subtitle={truncateText(
                                  packageItem?.description,
                                  30
                                )} // Truncate subtitle
                                featureButtonText="Package" // You can customize this text
                                reportTime="N/A" // If no data provided for report time
                                testCount={(
                                  packageItem?.tests?.length || 0
                                ).toString()} // Number of tests
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
                      </div>
                    </>
                  )}
                  {labTestServiceCode && (
                    <>
                      <div className="healthCards">
                        {allTestsList?.data?.length > 0 &&
                          allTestsList?.data
                            ?.slice(0, 8)
                            .map((testItem: any, index: any) => (
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
                      </div>
                    </>
                  )} */}
                </div>
              )}
            </Col>
          </Row>
          {/* <Row>
            <Col className="d-flex justify-content-end">
              <button className="myPreference" onClick={handleShow}>
                My Preference
              </button>
            </Col>

            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton>
                <Modal.Title>{submitted ? "" : "My Preference"}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {submitted ? (
                  <div className="thank-you-message">
                    <img
                      src={Thankyou}
                      alt="Thank You"
                      className="thank-you-image"
                    />
                    <h4>Thank you for adding your preferred center</h4>
                    <p>
                      We’ll contact you shortly and confirm the booking with
                      your preferred center
                    </p>
                  </div>
                ) : (
                  <Form>
                    <Row>
                      <Col md={6}>
                        <Form.Group controlId="formScanCentreName">
                          <Form.Label>Name Of Scan Centre</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Name Of Scan Centre"
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group controlId="formContactNumber">
                          <Form.Label>Contact Number</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Contact Number"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group controlId="formLocation" className="mt-3">
                      <Form.Label>Enter Location Manually</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter Location Manually"
                      />
                    </Form.Group>

                    <Button variant="success" className="mt-3 mb-3">
                      <i className="bi bi-geo-alt"></i> Use Current Location
                    </Button>
                  </Form>
                )}
              </Modal.Body>
              <Modal.Footer>
                {submitted ? (
                  <Button variant="primary" onClick={handleClose}>
                    Close
                  </Button>
                ) : (
                  <>
                    <Button variant="outline-secondary" onClick={handleClose}>
                      Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                      Save
                    </Button>
                  </>
                )}
              </Modal.Footer>
            </Modal>
          </Row> */}

          {/* {!isPackage && (
            <>
              {" "}
              <div className="grph-div mt-4">
                <div className="sub-grph-div">
                  <p>
                    Note: Prices may vary depending on the selected time and
                    date. Please review the pricing details carefully before
                    confirming your booking.
                  </p>
                  <div className="d-flex justify-content-between">
                    <div className="btn-div">
                      <button className="btn custom-btn">Today</button>
                      <button className="btn custom-btn">Tomorrow</button>
                      <button className="btn custom-btn">11 June</button>
                      <button className="btn custom-btn">12 June</button>
                      <button className="btn custom-btn">13 June</button>
                      <button className="btn custom-btn">14 June</button>
                      <button className="btn custom-btn">15 June</button>
                    </div>
                    <div>
                      <button className="btn date-btns">
                        <MdOutlineDateRange />
                        Select Date
                      </button>
                    </div>
                  </div>

                  <div>
                    <RefranceGraph />
                  </div>
                </div>
              </div>
            </>
          )} */}

          <Row className="marginclass"></Row>
          <Row className="searchRow mt-6">
            {/* <Col>
              <Row className="searchBoxDiv">
                <Col md={12} className=" p-0 d-flex ">
                  <span className=" attachedIcon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="13"
                      viewBox="0 0 10 13"
                      fill="none"
                    >
                      <path
                        opacity="0.5"
                        d="M4.90175 12.6291C2.1989 12.6291 0 10.4302 0 7.72736V2.58867C0 1.16129 1.16129 0 2.58867 0H5.2602C6.68761 0 7.84887 1.16129 7.84887 2.58867V6.9285C7.84887 8.35591 6.68758 9.51717 5.2602 9.51717C3.83281 9.51717 2.6715 8.35588 2.6715 6.9285V3.53867C2.6715 3.18934 2.95467 2.90617 3.30399 2.90617C3.65332 2.90617 3.93648 3.18934 3.93648 3.53867V6.9285C3.93648 7.6584 4.5303 8.25221 5.2602 8.25221C5.9901 8.25221 6.58391 7.6584 6.58391 6.9285V2.58867C6.58391 1.85877 5.9901 1.26496 5.2602 1.26496H2.58867C1.85877 1.26496 1.26496 1.85877 1.26496 2.58867V7.72734C1.26496 9.73268 2.89641 11.3641 4.90175 11.3641C6.90709 11.3641 8.53854 9.73268 8.53854 7.72734V3.3072C8.53854 2.95788 8.8217 2.67471 9.17103 2.67471C9.52033 2.67471 9.80352 2.95788 9.80352 3.3072V7.72736C9.80349 10.4302 7.60457 12.6291 4.90175 12.6291Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="favorSearchBox  border-0"
                    placeholder="Eg,  I have fever What Lab tests are required? "
                  />
                  <span className="speackerIcon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="19"
                      viewBox="0 0 14 19"
                      fill="none"
                    >
                      <path
                        opacity="0.5"
                        d="M7 0C7.79565 0 8.55871 0.316071 9.12132 0.87868C9.68393 1.44129 10 2.20435 10 3V9C10 9.79565 9.68393 10.5587 9.12132 11.1213C8.55871 11.6839 7.79565 12 7 12C6.20435 12 5.44129 11.6839 4.87868 11.1213C4.31607 10.5587 4 9.79565 4 9V3C4 2.20435 4.31607 1.44129 4.87868 0.87868C5.44129 0.316071 6.20435 0 7 0ZM14 9C14 12.53 11.39 15.44 8 15.93V19H6V15.93C2.61 15.44 0 12.53 0 9H2C2 10.3261 2.52678 11.5979 3.46447 12.5355C4.40215 13.4732 5.67392 14 7 14C8.32608 14 9.59785 13.4732 10.5355 12.5355C11.4732 11.5979 12 10.3261 12 9H14Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                  <div className="shareIcon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <path
                        d="M14.9213 1.71471C15.2893 0.696661 14.3028 -0.289867 13.2849 0.0790162L0.843191 4.57888C-0.178209 4.94861 -0.301732 6.34236 0.637889 6.88674L4.60934 9.18608L8.1557 5.63952C8.31637 5.48434 8.53155 5.39847 8.75491 5.40041C8.97827 5.40235 9.19193 5.49195 9.34988 5.6499C9.50782 5.80785 9.59741 6.02153 9.59936 6.2449C9.6013 6.46827 9.51543 6.68347 9.36026 6.84414L5.81389 10.3907L8.11396 14.3624C8.65746 15.302 10.0511 15.1777 10.4208 14.1571L14.9213 1.71471Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </Col>
              </Row>
              <Col md={12} className="d-flex justify-content-end mt-3">
                <p className="askAITxt">
                  Ask For <span>AI</span> Assistant
                </p>
              </Col>
            </Col> */}
            {/* <Col className="d-flex justify-content-end">
              <Button className="myPreference"> My Preference</Button>
            </Col> */}
          </Row>
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
