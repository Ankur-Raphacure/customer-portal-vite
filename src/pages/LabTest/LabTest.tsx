import React from "react";
import { useState, useEffect } from "react";
import { BlobServiceClient } from "@azure/storage-blob";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LabTestStyled } from "./LabText.styled";
import {
  getHealthCategoriesAPI,
  getHealthPackagesAPI,
  getAllTestsAPI,
  getLabTestsNearBy,
} from "../../redux/slices/labtest/labtestService";
import BestPackages from "./BestPackages/BestPackages";
import PhamacyHeader from "../../components/PharmacyHeader/PhamacyHeader";
import { checkIsMobile } from "../../Scenes/common";

import LabNearYouCard from "../../components/LabNearYouCard/LabNearYouCard";
import { updateShowLoginModel } from "../../redux/slices/auth/authSlice";

const LabTest = () => {
  const [file, setFile] = useState(null);
  const [addressEnabled, setAddressEnabled] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    healthCategoriesList,
    healthPackagesList,
    allTestsList,
    allNearByLabssList,
  } = useSelector((ReduxState: any) => ReduxState.labtest);
  const { user, userCity } = useSelector((ReduxState: any) => ReduxState.auth);
  const showItemsCount = checkIsMobile() ? 4 : 8;
  useEffect(() => {
    if (userCity?.name) {
      getLatestData(userCity?.id);
    }
  }, [userCity?.name]);

  useEffect(() => {
    dispatch(getHealthCategoriesAPI());
    dispatch(getHealthPackagesAPI());
    const body = {
      type: "diagnostic",
      count: 30,
      page: 0,
      searchText: "",
    };
    dispatch(getAllTestsAPI(body));
  }, []);
  const getLatestData = (cityN: any) => {
    dispatch(getLabTestsNearBy({ city: cityN, count: 8 }));
  };
  console.log("healthCategoriesList", healthCategoriesList?.healthCategories);
  console.log("healthPackagesList", healthPackagesList);
  console.log("allTestsList", allTestsList);
  console.log("allNearByLabssList", allNearByLabssList);

  // useEffect(() => {
  //   if (window.location.pathname === "/labtest") {
  //     const navLinks = document.querySelectorAll(".navbar-nav a");
  //     let targetLink: HTMLAnchorElement | undefined;

  //     navLinks.forEach((link) => {
  //       if (
  //         link instanceof HTMLAnchorElement &&
  //         link.textContent?.trim() === "Lab Test"
  //       ) {
  //         targetLink = link;
  //       }
  //     });

  //     if (targetLink) {
  //       const originalColor = targetLink.style.color;
  //       targetLink.style.color = "rgb(151, 71, 255)";

  //       // Return a cleanup function
  //       return () => {
  //         if (targetLink) {
  //           targetLink.style.color = originalColor || "black";
  //         }
  //       };
  //     } else {
  //       console.log("TargetLink Not Found");
  //     }
  //   }
  // }, []);

  const handleChange = (e: any) => {
    setFile(e.target.files[0]);
  };
  const addToCart = (itemR: any) => {
    console.log("user", user);

    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      history.push(`/labTestDetils/${itemR?.service_code}`);
      // dispatch(handleAddToCart({ ...itemR, categoryName: "labtest" }));
    }
  };
  const addToCart1 = (itemR: any) => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      history.push(`/labPackageDetils/${itemR?.service_code}`);
      // dispatch(handleAddToCart({ ...itemR, categoryName: "labtest" }));
    }
  };

  const navigateToPage = (url: string) => {
    history.push(url);
  };
  const handleBuyMedicine = () => {
    history.push("/labtest/allBodyTests");
  };
  const fetchMore = () => {};
  const handleSubmit = async (e: any) => {
    // e.preventDefault();
    // //process.env.REACT_APP_AZURE_STORAGE_CONNECTION_STRING
    // const blobServiceClient = new BlobServiceClient();
    // const blockBlobClient = blobServiceClient.getBlockBlobClient(file.name);
    // try {
    //   await blockBlobClient.uploadFile(file);
    //   console.log("File uploaded successfully");
    // } catch (err) {
    //   console.error(err);
    // }
  };

  return (
    <LabTestStyled>
      <div>
        <PhamacyHeader
          section="labtest"
          handleBuyMedicine={handleBuyMedicine}
        />
        <div className="container-fluid mt-8884 mx-auto lab-test-data-content">
          <div>
            <div className="mt-4">
              <span className=" text-xl top-category-sec font-bold mx-2 opacity-75 ">
                Category
              </span>
            </div>

            <div className="">
              <div className="list-categories-list">
                {healthCategoriesList?.healthCategories?.map((item: any) => {
                  return (
                    <div className="mx-auto-grid" onClick={handleBuyMedicine}>
                      <div className=" justify-center items-center categoryWrapper">
                        <div
                          className="card-body1 bg-white shadow rounded-xl flex flex-col items-center text-center cursor-pointer"
                          onClick={() => {
                            // navigateToPage("/");
                          }}
                        >
                          <img
                            alt="Image"
                            src={item?.image}
                            className="img-fit"
                          />
                          <h3 className=" my-3"> {item?.name}</h3>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-3 flex best-packages-sec ">
            <span className="text-xl font-bold mx-2 opacity-75">
              Best Packages
            </span>
          </div>
          <div className="list-best-packages-list">
            <BestPackages
              fromPage={`labtest`}
              addToCart={addToCart1}
              list={healthPackagesList?.packages?.slice(0, showItemsCount)}
            />
          </div>
          <div className="flex lg:grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 best-packages-sec-conent-all">
            {/* <LabtestBestPackages
    v-for="packageIt in healthPackageStore.packages"
    :packageItem="packageIt"
    
  /> */}
          </div>
          <div>
            <p className="underline view-all float-right px-4">
              {" "}
              <button
                onClick={() => {
                  navigateToPage("/labtest/allPackages");
                }}
              >
                View All Packages{" "}
              </button>
            </p>
          </div>
          {allNearByLabssList?.vendors?.length > 0 && (
            <>
              <div className="margin-top-bottom-sec">
                <span className="text-xl font-bold opacity-75 labs-near-me-sec-header ">
                  Labs Near You
                </span>
              </div>
              <div className="flex labs-near-you-list">
                <div className="flex labs-near-you-list-all">
                  {allNearByLabssList?.vendors
                    ?.slice(0, showItemsCount)
                    .map((item: any) => {
                      return (
                        <LabNearYouCard addToCart={addToCart} item={item} />
                      );
                    })}
                </div>
              </div>
              <div>
                <p className="underline view-all float-right px-4 ">
                  {" "}
                  <button
                    onClick={() => {
                      navigateToPage("/labtest/allLabs");
                    }}
                  >
                    View All Labs{" "}
                  </button>
                </p>
              </div>
            </>
          )}

          <div className="margin-top-bottom-sec">
            <span className="text-xl font-bold  labs-near-me-sec-header ">
              Most Ordered Tests
            </span>
          </div>
          <div className="flex labs-near-you-list">
            <div className="flex labs-near-you-list-all">
              {allTestsList?.tests
                ?.slice(0, showItemsCount)
                .map((item: any) => {
                  return (
                    <LabNearYouCard
                      addToCart={addToCart}
                      mostOrdersSection={true}
                      item={item}
                    />
                  );
                })}
            </div>
          </div>

          <div>
            <p className="underline view-all float-right px-4 ">
              {" "}
              <button
                onClick={() => {
                  navigateToPage("/labtest/allBodyTests");
                }}
              >
                View All Tests
              </button>
            </p>
          </div>
          <br />
          <br />
          <br />
          <br />
          {/* <LabtestCartButton @openCart="openCartForLabtest"/> */}
        </div>
      </div>
    </LabTestStyled>
  );
};

export default LabTest;
