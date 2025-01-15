import React, { useCallback, useMemo, useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PharmacyStyled } from "./Pharmacy.styled";
import {
  getAllMedicineAPI,
  getAllTopMedicineAPI,
  getAllSubCategoriesAPI,
  getPharmacyCategoriesAPI,
  getAllCompareMedicineAPI,
  getAllSaltCategoriesAPI,
  getAllBrandedMedicineAPI,
  getAllWellnessMedicines,
} from "../../redux/slices/labtest/labtestService";
import { getAttachmentIds } from "../../Scenes/common";
import { updateShowLoginModel } from "../../redux/slices/auth/authSlice";
import {
  handleAddToCartAPI,
  getCartItemsAPI,
} from "../../redux/slices/checkout/checkoutService";
import { headingBannerDetails } from "./PharmacyObjectsModule";
import { pharmacySearchTextChange } from "./PharmacyObjectsModule";
import MultiCarouselModal from "../Home/MultiCarouselModal";
import { advertisementMedicineImg } from "./PharmacyObjectsModule";
import HeadingBannerModule from "./HeadingBannerModule";
import SearchByTextModule from "./SearchByTextModule";
import { FaArrowRight } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import Loader from "../../components/Loader/Loader";
import { toast, ToastContainer } from "react-toastify";
import ComparisonMedicineCardModule from "./ComparisonMedicineCardModule";
import useHandleImageUrl from "../../components/hooks/useHandleImageUrl";
import { ReactComponent as PharmacyBannerImage } from "../../assets/icons/pharmacyBannerImage.svg";

const Pharmacy = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [showSearchPopupModel, setShowSearchPopupModel] = useState(false);
  const [searchText, setSearchText] = useState<any>("");
  const [categoryId, setCategoryId] = useState([] as any);
  const [btnCategoryId, setBtnCategoryId] = useState([] as any);
  const [typeFilter, setTypeFilter] = useState("branded");

  const {
    allMedicinesList,
    allSubCategoriesList,
    allCompareMedicineList,
    allTopMedicineList,
    allSaltCategoryList,
    allBrandedMedicineList,
    allWellnessMedicines,
  } = useSelector((ReduxState: any) => ReduxState.labtest);
  const { cartItems } = useSelector((ReduxState: any) => ReduxState.checkout);
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);
  const pProducts =
    cartItems?.carts?.find((itemv: any) => itemv?.section_key === "pharmacy") ||
    [];
  const isAddedtoCart =
    pProducts &&
    pProducts?.medicines?.find((item2: any) => item2?.service_code);
  interface Medicinedetails {
    MedicineCarddetails: any;
  }
  const CompareMedicineList = useMemo(() => {
    if (!Array.isArray(allCompareMedicineList)) return [];
    return allCompareMedicineList?.map((ele: any) => ele?.medicines);
  }, [allCompareMedicineList]);

  useEffect(() => {
    const objBody = {
      categorieId: "",
    };
    getAllMedicineList();
    dispatch(getAllSubCategoriesAPI(objBody));
    const objBody1 = {
      categorieId: "",
      pageNo: 1,
      pageSize: 3,
    };
    dispatch(getAllSaltCategoriesAPI(objBody1));
    const wellBody = {
      categoryIds: [28],
      minPrice: 0,
      count: 12,
      page: 1,
      status: "active",
    };
    dispatch(getAllWellnessMedicines(wellBody));
  }, []);

  useEffect(() => {
    getAllCompareProductsCall();
  }, [btnCategoryId]);

  useEffect(() => {
    getAllBrandedMedicine();
  }, [typeFilter]);

  const handleClick = (btnName: any) => {
    const prevcaids = [...btnCategoryId];
    if (prevcaids?.includes(btnName)) {
      const findINdex = prevcaids.findIndex(
        (itemId: any) => itemId === btnName
      );
      prevcaids.splice(findINdex, 1);
    } else {
      prevcaids.push(btnName);
    }
    setBtnCategoryId(prevcaids);
  };
  const getAllCompareProductsCall = async () => {
    setIsLoading(true);
    await dispatch(
      getAllCompareMedicineAPI({
        status: "active",
        categoryIds: btnCategoryId,
        count: 3,
        page: 1,
      })
    );
    setIsLoading(false);
  };
  const addToCart = async (itemR: any) => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      toast(`${itemR?.service_name}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      handleAddtoCartCall(itemR);
    }
  };
  const handleAddtoCartCall = async (itemR: any) => {
    const medC = [{ service_code: itemR?.service_code, count: 1 }];
    const body1 = {
      carts: [
        {
          user_id: user?.id,
          useWallet: true,
          collection_1_date: null,
          collection_1_slot: null,
          medicines: medC,
          attachment_ids: getAttachmentIds("pharmacy"),
          section_key: "pharmacy",
        },
      ],
    };
    console.log("body1", body1);
    await dispatch(handleAddToCartAPI(body1));
    await dispatch(getCartItemsAPI());
  };
  console.log("allWellnessMedicines", allWellnessMedicines);
  const handleBuyMedicine = (item: any) => {
    setCategoryId(item?.id);
    history.push(`/pharmacy/${item?.id}`, item);
  };
  const handleViewAllSalt = (item: any) => {
    history.push(`/pharmacy/allProductsBySalt`);
  };
  const gotoNewPage = (url1: any) => {
    history.push(url1);
  };

  const navigateToCall = (itemR: any) => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      history.push(`/chat`);
    }
  };
  const handleonFilterName = (e: any) => {
    setShowSearchPopupModel(true);
    setSearchText(e);
    getAllUsersCall(e);
  };
  const handleSearchGoTo = (searR: any) => {
    history.push(
      `/item/${searR?.category_key}/${
        searR?.service_code
      }?categoryids=${searR?.category_ids?.join(",")}`
    );
  };
  const getAllMedicineList = async () => {
    let body = { displayOrder: [1, 2, 3] } as any;
    await dispatch(getAllTopMedicineAPI(body));
  };
  const getAllUsersCall = async (searchText1: any) => {
    let body = {} as any;
    if (searchText1) {
      body.searchText = searchText1;
    }
    await dispatch(getAllMedicineAPI(body));
  };
  const getAllBrandedMedicine = async () => {
    let body = {} as any;
    if (typeFilter) {
      body.medicineType = typeFilter;
    }

    await dispatch(getAllBrandedMedicineAPI(body));
  };
  const { getFirstImageUrl } = useHandleImageUrl();

  const handleToPharmacyUploadPrescription = () => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      history.push("/uploadprescription");
    }
  };

  return (
    <PharmacyStyled>
      <ToastContainer />
      <div>{isLoading && <Loader />}</div>
      <>
        {isLoading && <Loader />}

        <div className="header-banner-filter-div">
          <div className="Upload-Prescription-mobile-btn ">
            <button
              className="btn"
              onClick={handleToPharmacyUploadPrescription}
            >
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1734771002662.png"
                alt="upload_icon"
                className="me-3"
              />
              Upload Prescription for quick Order{" "}
            </button>
          </div>
          <div className="web-viwe-div">
            <HeadingBannerModule
              details={headingBannerDetails}
              handleBuyMedicine={handleBuyMedicine}
              section="pharmacy"
            />
          </div>
          <div className="mobile-viwe-div">
            <PharmacyBannerImage />
          </div>
          <div className="filter-by-name">
            <SearchByTextModule
              details={pharmacySearchTextChange}
              handleonFilterName={handleonFilterName}
              setSearchText={setSearchText}
              searchText={searchText}
            />
          </div>
        </div>

        {(searchText?.length > 0 || showSearchPopupModel) && (
          <div className="search-popup">
            <div className="search-popup-content">
              <div className="search-heading-text-div">
                <p>Showing Result for {searchText}</p>
                <button
                  className="btn"
                  onClick={() => setShowSearchPopupModel(false)}
                >
                  <IoCloseOutline />
                </button>
              </div>
              {searchText?.length > 2 && allMedicinesList?.length > 0 ? (
                allMedicinesList.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="search-popup-item"
                    onClick={() => handleSearchGoTo(item)}
                  >
                    {item?.image && (
                      <div className="search-popup-image">
                        <img
                          src={getFirstImageUrl(item?.image)}
                          alt={item?.name || "Search Result"}
                        />
                      </div>
                    )}
                    <div className="search-popup-details">
                      <p className="search-popup-name">
                        {item?.name || item?.service_name}
                      </p>
                      <p className="search-popup-type">
                        <img
                          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1732179533099.png"
                          alt=""
                        />
                      </p>
                    </div>
                  </div>
                ))
              ) : searchText?.length > 3 ? (
                <div className="search-popup-no-results">
                  <p className="search-popup-title">
                    No result found for {searchText}
                  </p>
                  <p className="search-popup-sub-title">
                    Search with another brand or category
                  </p>
                  <img
                    src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1732181068454.png"
                    alt=""
                  />
                </div>
              ) : null}
            </div>
          </div>
        )}

        <div className="Category-heading-div">
          <p>Top Category's</p>
        </div>
        <div className="Top-Category-MultiCarouselModal">
          <MultiCarouselModal
            itemstoShow={5}
            allCategoriesList={allSubCategoriesList?.category_ids}
            catogorySelect={handleBuyMedicine}
          />
          <br />
          <div className="view-all-salt">
            <button
              onClick={() => {
                gotoNewPage("/pharmacy/all");
              }}
            >
              View All
            </button>
          </div>
        </div>

        <div className=" comparison-carousel-div">
          <p className=" comparison-carousel-title">
            Compare Generic & Branded
          </p>
          <div className=" comparison-carousel-filter-btn">
            {allSaltCategoryList?.category_ids?.map(
              (label: any, index: any) => {
                if (!label?.name) {
                  return null;
                }
                const isActive = btnCategoryId.includes(label.id);
                return (
                  <button
                    key={index}
                    onClick={() => handleClick(label.id)}
                    className={isActive ? "active btn" : "btn"}
                    style={{
                      backgroundColor: btnCategoryId.includes(label.id)
                        ? "#252b61"
                        : "white",
                      color: btnCategoryId.includes(label.id)
                        ? "white"
                        : "black",
                    }}
                  >
                    {label?.name}
                  </button>
                );
              }
            )}
          </div>
        </div>
        {CompareMedicineList?.length > 0 ? (
          <div>
            <div>
              <div className="all-compare-medicines-list">
                {CompareMedicineList?.map((item: any, index: any) => {
                  const totLen = item?.length;
                  const totLen1 = totLen - 1;

                  const item2 = [...item];
                  item2.sort(
                    (a: any, b: any) => a.discounted_price - b.discounted_price
                  );
                  const isAddedToCarts = pProducts?.medicines;
                  return (
                    <ComparisonMedicineCardModule
                      key={index}
                      addToCart={addToCart}
                      isAddedtoCart={isAddedToCarts}
                      generic={item2?.[1]}
                      branded={item2?.[totLen1]}
                    />
                  );
                })}
              </div>
            </div>
            <div className="view-all-salt">
              <button onClick={handleViewAllSalt}>View All</button>
            </div>
          </div>
        ) : (
          <>
            <div className="no-comparision-found-sec">
              <h5>No Comparision found</h5>
            </div>
          </>
        )}

        <div className="common-cards-main-div">
          <div className="common-sub-cards-main-div">
            <h5>
              <span>Branded</span> Medicines
            </h5>
            <p className="common-sub-cards-text-main-div">
              High-quality, trusted medicines from renowned brands, ensuring
              safety, <br /> reliability, and effective care for your health
              needs.
            </p>
            <div className="Branded-Medicines-MultiCarouselModal">
              <MultiCarouselModal
                allTypeMedicineDetail={allBrandedMedicineList}
                isAddedtoCart={isAddedtoCart}
                addToCart={addToCart}
                itemstoShow={5}
                pProducts={pProducts}
                categoryId={categoryId}
              />
            </div>
          </div>
          <br />
          <div className="view-all-salt">
            <button
              onClick={() => {
                gotoNewPage("/pharmacy/all");
              }}
            >
              View All
            </button>
          </div>
        </div>
        <div className="common-cards-main-div">
          <div className="common-sub-cards-main-div">
            <h5>
              <span>Wellness</span> Medicines
            </h5>
            <p className="common-sub-cards-text-main-div">
              High-quality, trusted medicines from renowned brands, ensuring
              safety, <br /> reliability, and effective care for your health
              needs.
            </p>
            <div className="Branded-Medicines-MultiCarouselModal">
              <MultiCarouselModal
                allTypeMedicineDetail={allWellnessMedicines?.data}
                isAddedtoCart={isAddedtoCart}
                addToCart={addToCart}
                itemstoShow={5}
                pProducts={pProducts}
                categoryId={categoryId}
              />
            </div>
          </div>
          <br />
          <div className="view-all-salt">
            <button
              onClick={() => {
                gotoNewPage(`/pharmacy/28`);
              }}
            >
              View All
            </button>
          </div>
        </div>

        <div className="video-main-div">
          <div className="video-main-left-div">
            <div className="comming-soon">
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731423200540.png"
                alt=""
              />
            </div>
            <div className="video-main-left-title-div">
              <p className="video-main-left-title">Scan your skin Now</p>
              <p className="video-main-left-sub-title">
                Unlock personalized skincare with our advanced AI technology.
                Just one scan to get insights on acne, dark spots, wrinkles, and
                more
              </p>

              <div className="mobile-view-video-main-right-div">
                <video
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/videos/NEW+SKIN+SCAN+.mov"
                  autoPlay
                  loop
                  muted
                  className="video"
                />
              </div>
              <div className="mt-3">
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731423317814.png"
                  alt=""
                  className="me-4"
                />
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731423347099.png"
                  alt=""
                  className="me-4"
                />
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731423383859.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="video-main-right-div">
            <video
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/videos/NEW+SKIN+SCAN+.mov"
              autoPlay
              loop
              muted
              className="video"
            />
          </div>
        </div>

        <div className="common-cards-main-div">
          <div className="common-sub-cards-main-div">
            <h5>
              <span>Cancer Awareness</span> for Better health
            </h5>
            <p className="common-sub-cards-text-main-div">
              Empower yourself with cancer knowledge and take proactive steps
              towards early <br />
              detection and prevention. Discover our range of medications to
              support your health.
            </p>
            <div className="Branded-Medicines-MultiCarouselModal">
              <MultiCarouselModal
                allTypeMedicineDetail={allTopMedicineList}
                isAddedtoCart={isAddedtoCart}
                addToCart={addToCart}
                itemstoShow={5}
                pProducts={pProducts}
                categoryId={categoryId}
              />
            </div>

            <br />
            <div className="view-all-salt">
              <button
                onClick={() => {
                  gotoNewPage("/pharmacy/all");
                }}
              >
                View All
              </button>
            </div>
            <br />
          </div>
        </div>

        <div className="advertisement-main-div">
          <div className="advertisement-main-left-div">
            <p className="advertisement-main-title">
              Branded or Generic? We’ve Got Both!
            </p>
            <p className="advertisement-main-sub-title">
              Affordable generic medicines or trusted branded options—your
              choice for better health!
            </p>
            <div className="advertisement-main-img">
              {advertisementMedicineImg?.map((img: any) => {
                return <img src={img?.img} alt="" />;
              })}
            </div>
          </div>
          <div className="advertisement-main-right-div">
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731476132269.png"
              alt=""
            />
          </div>
        </div>

        <div className="assistance-main-div">
          <p className="assistance-main-title">Need Assistance </p>
          <div className="assistance-sub-main-div">
            <div className="assistance-left-card-div">
              <div>
                <p className="assistance-left-card-title">
                  Need a Prescription?
                </p>
                <p className="assistance-left-card-sub-title">
                  Skip the Wait! Get an Instant Prescription from a Doctor
                  Online
                </p>
              </div>
              <button
                className="btn Assistance-cl-btn"
                onClick={() => history.push("/doctor?q=General Physician")}
              >
                <FaArrowRight className="Assistance-cl-btn-icon" />
              </button>
            </div>
            <div className="assistance-right-card-div">
              <div>
                <p className="assistance-left-card-title">
                  Call us and place your order
                </p>
                <p className="assistance-left-card-sub-title">
                  Need help placing an order? Give us a call, and we’ll take
                  care of everything for you
                </p>
              </div>
              <button
                className="btn Assistance-cl-btn"
                onClick={navigateToCall}
              >
                <FaArrowRight className="Assistance-cl-btn-icon" />
              </button>
            </div>
          </div>
        </div>
      </>
    </PharmacyStyled>
  );
};

export default Pharmacy;
