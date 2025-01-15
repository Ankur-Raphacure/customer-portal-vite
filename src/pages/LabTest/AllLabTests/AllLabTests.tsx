import React from "react";
import { useState, useEffect } from "react";
import { BlobServiceClient } from "@azure/storage-blob";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LabTestStyled } from "./../LabText.styled";
import {
  getHealthCategoriesAPI,
  getHealthPackagesAPI,
  getAllTestsAPI,
  getLabTestsNearBy,
} from "../../../redux/slices/labtest/labtestService";
import BestPackages from "./../BestPackages/BestPackages";
import { updateShowLoginModel } from "../../../redux/slices/auth/authSlice";

import LabNearYouCard from "../../../components/LabNearYouCard/LabNearYouCard";
const AllLabTests = (props: any) => {
  const sectionName = props?.match?.path;
  console.log("sectionName", sectionName, props?.match);

  // labtest / allLabs;
  const [file, setFile] = useState(null);
  const [searchText, setSearchText] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    healthCategoriesList,
    healthPackagesList,
    allTestsList,
    allNearByLabssList,
  } = useSelector((ReduxState: any) => ReduxState.labtest);
  const { userCity, user } = useSelector((ReduxState: any) => ReduxState.auth);

  useEffect(() => {
    if (userCity?.name) {
      getLatestData(userCity?.id);
    }
  }, [userCity?.name]);

  useEffect(() => {
    getlatestDataOnload();
  }, []);
  useEffect(() => {
    console.log("searchText : ", searchText);
    getlatestDataOnload();
  }, [searchText]);
  const getlatestDataOnload = () => {
    dispatch(getHealthCategoriesAPI());
    dispatch(getHealthPackagesAPI());
    const body = {
      type: "diagnostic",
      count: 30,
      page: 0,
      searchText: searchText,
    };
    dispatch(getAllTestsAPI(body));
  };
  const handleSearchValue = (val: any) => {
    console.log("val : ", val);

    setSearchText(val);
  };
  const getLatestData = (cityN: any) => {
    dispatch(getLabTestsNearBy({ city: cityN, count: 50 }));
  };
  const addToCart1 = (itemR: any) => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      history.push(`/labPackageDetils/${itemR?.service_code}`);
      // dispatch(handleAddToCart({ ...itemR, categoryName: "labtest" }));
    }
  };
  console.log("healthCategoriesList", healthCategoriesList?.healthCategories);
  console.log("healthPackagesList", healthPackagesList);
  console.log("allTestsList", allTestsList);

  const handleChange = (e: any) => {
    setFile(e.target.files[0]);
  };
  const navigateToPage = (url: string) => {
    history.push(url);
  };
  const fetchMore = () => {};

  return (
    <LabTestStyled>
      <div>
        <div className="container-fluid mt-334 mx-auto lab-test-data-content">
          <div>
            <div className="mt-4">
              <span
                onClick={() => {
                  navigateToPage("/labtest");
                }}
                className=" text-xl cursor-pointer top-category-sec font-bold mx-2 back-btn-sec opacity-75 "
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
                {` Back`}
              </span>
            </div>
            <div className="mt-4">
              <span className=" text-xl top-category-sec font-bold mx-2 opacity-75 ">
                {sectionName === "/labtest/allBodyTests"
                  ? "All Lab Tests"
                  : "All Labs"}
              </span>
            </div>
            <div className="labs-search-section">
              <div className="labs-search-section-input">
                <input
                  onChange={(e) => {
                    handleSearchValue(e.target.value);
                  }}
                  type="text"
                  placeholder="Search Test Name"
                />
                <button type="submit">Search</button>
              </div>
              <div className="labs-search-section-links"></div>
            </div>
          </div>

          {sectionName === "/labtest/allBodyTests" ? (
            <div className="flex labs-near-you-list">
              <div className="flex labs-near-you-list-all">
                {allTestsList?.tests?.map((item: any) => {
                  return (
                    <LabNearYouCard mostOrdersSection={true} item={item} />
                  );
                })}
              </div>
            </div>
          ) : sectionName === "/labtest/allLabs" ? (
            <div className="flex labs-near-you-list">
              <div className="flex labs-near-you-list-all">
                {allNearByLabssList?.vendors?.map((item: any) => {
                  return <LabNearYouCard item={item} />;
                })}
              </div>
            </div>
          ) : (
            <>
              <BestPackages
                fromPage={`labtest`}
                addToCart={addToCart1}
                list={healthPackagesList?.packages}
                mostOrdersSection={true}
              />
              {/* <p>No data found.</p> */}
            </>
          )}

          {/* <LabtestCartButton @openCart="openCartForLabtest"/> */}
        </div>
      </div>
    </LabTestStyled>
  );
};

export default AllLabTests;
