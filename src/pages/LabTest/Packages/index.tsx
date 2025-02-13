import { PackagesStyled } from "./Packages.styled";
import { useCallback, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateShowLoginModel } from "../../../redux/slices/auth/authSlice";
import { updateDoctordetails } from "../../../redux/slices/bookingScreen/bookingScreenSlice";
import { updateSelectedlabtestDetails } from "../../../redux/slices/labtest/labtestSlice";

import PackageHeader from "./PackageHeader/PackageHeader";
import PackageSelect from "./PackageSelect/PackageSelect";
import PackageReview from "./PackageReview/PackageReview";

import {
  getVendorDetailsAPI,
  getVendorPackageListAPI,
  getVendorTestListAPI,
} from "../../../redux/slices/labtest/labtestService";

const Packages = (props: any) => {
  const filterData = null;
  const history = useHistory();
  const dispatch = useDispatch();
  const tabsList = ["Available Tests", "Packages"];

  const {
    vendorDetails,
    vendorPackageList,
    vendorTestList,
    selectedTest,
    selectedPackage,
  } = useSelector((ReduxState: any) => ReduxState.labtest);

  const { user } = useSelector((ReduxState: any) => ReduxState.auth);

  const [packageSearchText, setpackageSearchText] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const searchText = useRef("");

  const [labBookingList, setlabBookingList] = useState(new Array());
  const [showReview, setshowReview] = useState(false);
  const [initialData, setinitialdata] = useState(false);
  const [fromPackage, setfromPackage] = useState(false);

  useEffect(() => {
    console.log("fromPackage", fromPackage, selectedPackage);
    if (
      !initialData &&
      ((selectedTest && selectedTest?.service_name) ||
        (selectedPackage && selectedPackage?.service_name))
    ) {
      updateLabbooking();
    }
  }, [selectedTest, selectedPackage]);

  useEffect(() => {
    const vendorId = props?.match?.params?.vendorId;
    if (!vendorDetails || vendorDetails?.vendorById !== vendorId) {
      dispatch(getVendorDetailsAPI(vendorId));
    }
  }, []);

  useEffect(() => {
    const vendorId = props?.match?.params?.vendorId;
    if (vendorDetails?.vendorById !== vendorId) {
      const packageRequestOBj = {
        searchText: packageSearchText,
        vendorId: vendorId,
      };
      dispatch(getVendorPackageListAPI(packageRequestOBj));
    }
  }, [packageSearchText, fromPackage]);

  useEffect(() => {
    const vendorId = props?.match?.params?.vendorId;
    if (vendorDetails?.vendorById !== vendorId) {
      const testRequestOBj = {
        searchText: packageSearchText,
        vendorId: vendorId,
      };
      dispatch(getVendorTestListAPI(testRequestOBj));
    }
  }, [packageSearchText, labBookingList]);

  const handleChangeSearchText = (event: any) => {
    setShowErrorMessage(false);
    searchText.current = event.target.value;
    if (event.target.value === "") {
      setpackageSearchText("");
    }
  };

  const updateLabbooking = () => {
    let listData = [...labBookingList];
    if (selectedTest && selectedTest?.service_name) {
      let selectedTestData = {
        ...selectedTest,
        labtestType: "labtest",
      };
      listData.push(selectedTestData);
    } else {
      let selectedPackageData = {
        ...selectedPackage,
        labtestType: "labpackage",
      };
      listData.push(selectedPackageData);
      setfromPackage(true);
    }
    setlabBookingList([...listData]);
    setinitialdata(true);
    setshowReview(true);
  };

  // const handleTestbooknow = async (testObj: any, objType: any) => {
  //   if (!user?.id) {
  //     dispatch(updateShowLoginModel(true));
  //   } else {
  //     let listData = [...labBookingList];
  //     // remove labpackage if any
  //     if (objType === "labpackage") {
  //       let findIndex = listData.findIndex(
  //         (testData: any) => testData?.labtestType === objType
  //       );
  //       if (findIndex >= 0) listData.splice(findIndex, 1);
  //     }
  //     testObj = {
  //       ...testObj,
  //       labtestType: objType,
  //     };
  //     listData.push(testObj);
  //     setlabBookingList([...listData]);

  //     toast.success(
  //       `'${testObj?.service_name}' added for review successfully!`
  //     );
  //     setshowReview(true);
  //   }
  // };

  const handleTestbooknow = async (testObj: any, objType: any) => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      let listData = [...labBookingList];
      testObj = {
        ...testObj,
        labtestType: objType,
      };

      listData.push(testObj);

      setlabBookingList([...listData]);

      toast.success(
        `'${testObj?.service_name}' added for review successfully!`,
      );
      setshowReview(true);
    }
  };

  const handleOnSubmit = (evnt: any) => {
    evnt.preventDefault();
    if (searchText.current && searchText.current.length >= 3) {
      setShowErrorMessage(false);
      setpackageSearchText(searchText.current);
    } else {
      setShowErrorMessage(true);
    }
  };

  const redirectToReview = async () => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      const packageData = { vendor: [], tests: labBookingList };

      await dispatch(
        updateDoctordetails({
          doctorDetails: { ...packageData },
          hospitalDetails: vendorDetails?.vendorById,
          categoryType: "labtest",
          slot1: {},
          slot2: {},
        }),
      );

      // Emtpy selected values
      await dispatch(
        updateSelectedlabtestDetails({
          selectedTest: {},
          selectedPackage: {},
        }),
      );

      history.push(`/labtest/bookingReview`);
    }
  };

  const handleTestRemove = async (testObj: any) => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      let listData = [...labBookingList];
      listData.splice(
        listData.findIndex(
          (testData: any) => testData?.service_code === testObj?.service_code,
        ),
        1,
      );
      setlabBookingList([...listData]);

      toast.error(`'${testObj?.service_name}' removed from review List!`);

      if (labBookingList.length === 0) {
        setshowReview(false);
      }
    }
  };

  return (
    <PackagesStyled>
      <div className="container-fluid container-max package_container">
        <div className="package_backcontainer">
          <button
            className="packageBtnwrap inlineflex_center"
            onClick={() => history.goBack()}
          >
            <div className="back-icon inlineflex_center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="18"
                viewBox="0 0 21 18"
                fill="none"
              >
                <path
                  d="M19.6875 7.7152H4.12125L8.88563 2.10999C9.10841 1.84745 9.21559 1.50898 9.18359 1.16903C9.15159 0.829086 8.98304 0.515513 8.715 0.297298C8.44697 0.0790819 8.10141 -0.0259025 7.75435 0.00544001C7.40729 0.0367826 7.08716 0.201885 6.86437 0.464426L0.301875 8.17802C0.257723 8.23937 0.218242 8.30383 0.18375 8.37086C0.18375 8.43514 0.18375 8.47371 0.0918752 8.53799C0.0323842 8.68539 0.00123522 8.8423 0 9.0008C0.00123522 9.1593 0.0323842 9.31621 0.0918752 9.46362C0.0918752 9.5279 0.0918748 9.56647 0.18375 9.63075C0.218242 9.69778 0.257723 9.76223 0.301875 9.82359L6.86437 17.5372C6.98778 17.6823 7.14231 17.799 7.31699 17.879C7.49166 17.959 7.68218 18.0003 7.875 18C8.18167 18.0006 8.47887 17.896 8.715 17.7043C8.8479 17.5964 8.95776 17.4638 9.03829 17.3143C9.11881 17.1647 9.16842 17.001 9.18427 16.8326C9.20012 16.6643 9.1819 16.4945 9.13065 16.333C9.0794 16.1715 8.99614 16.0215 8.88563 15.8916L4.12125 10.2864H19.6875C20.0356 10.2864 20.3694 10.151 20.6156 9.90986C20.8617 9.66876 21 9.34177 21 9.0008C21 8.65984 20.8617 8.33284 20.6156 8.09175C20.3694 7.85065 20.0356 7.7152 19.6875 7.7152Z"
                  fill="#444444"
                />
              </svg>
            </div>
            <div className="back-text poppins-medium">Back</div>
          </button>
        </div>

        <div className="package_listcontainer">
          {filterData ? <div className="package_filter"> </div> : null}
          <div
            className={
              "package_datacontainer" + (!filterData ? " w-100 px-0" : "")
            }
          >
            <div className="package_header">
              <PackageHeader vendor={vendorDetails?.vendorById} />
            </div>
            <div
              className={
                "package_search" + (!filterData ? " text-center" : "text-left")
              }
            >
              <div className="package_searchbox">
                <form onSubmit={handleOnSubmit}>
                  <input
                    type="text"
                    placeholder="Search Lab Test’s Or Packages"
                    onChange={handleChangeSearchText}
                    className="package_searchInput poppins-regular round-shadow bg-white"
                  />
                  {showErrorMessage && (
                    <p className="error_message">Type atleast 3 characters!!</p>
                  )}
                  <button
                    type="submit"
                    className="package_searchbtn poppins-regular"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
            <div className="package_data">
              <PackageSelect
                tabsList={tabsList}
                packagesList={vendorPackageList}
                testList={vendorTestList}
                labBookingList={labBookingList}
                landToPackage={fromPackage ? 1 : 0}
                testaddToReview={handleTestbooknow}
                testRemoveToReview={handleTestRemove}
                searchText={searchText.current}
              />
            </div>
          </div>
        </div>
        <div className="package_reviewcontainer">
          <PackageReview
            showReview={showReview}
            labBookingList={labBookingList}
            handleTestRemove={handleTestRemove}
            redirectToReview={redirectToReview}
          />
        </div>
      </div>
    </PackagesStyled>
  );
};

export default Packages;
