import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContentLoader from "react-content-loader";

import {
  getPharmacyCategoriesAPI,
  getSimilarMedicinesAPI,
  getDeliveryTimeByItemID,
  getOrdersCountByItem,
} from "../../redux/slices/labtest/labtestService";
import { ItemStyled } from "./Item.styled";
import { useHistory } from "react-router-dom";
import { updateShowLoginModel } from "../../redux/slices/auth/authSlice";
import {
  getAttachmentIds,
  parseAddress,
  getUserDeliveryTime,
} from "../../Scenes/common";
import MedicineCardModule from "./../Pharmacy/MedicineCardModule";

import QuantityButton from "../../components/QuantityButton/QuantityButton";
import {
  handleAddToCartAPI,
  getCartItemsAPI,
} from "../../redux/slices/checkout/checkoutService";
import UploadPrescription from "../../components/UploadPrescription/UploadPrescription";
import { Select } from "antd";
import BreadCrumbModule from "../Pharmacy/BreadCrumbModule";
import Loader from "../../components/Loader/Loader";
import AutocompleteField from "../../components/AutoComplete";
import { getMyAddressQueryAPI } from "../../redux/slices/Profile/ProfileService";
import { useLocation } from "react-router-dom";
import { getAllMedicineAPI } from "../../redux/slices/labtest/labtestService";
import useHandleImageUrl from "../../components/hooks/useHandleImageUrl";
import { GoShareAndroid } from "react-icons/go";
import ShareModal from "../../components/ShareModal/ShareModal";
import MobileHeader from "../../components/Header/MobileHeader";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Item = (props: any) => {
  const inputRef = useRef<any>(null);
  const { itemId, category } = props.match?.params;
  const query = useQuery();
  const subcategoryids = query.get("subcategoryids");

  const dispatch = useDispatch();
  const [itemDetail, setItemDetail] = useState<any>(null);
  const [medicines, setMedicines] = useState<any>(null);
  const [isAddressChecked, setAddressChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [selectAdderss, setselectAdderss] = useState("");
  const [selectedAddressVal, setSelectedAddressVal] = useState("");
  const [openShareModel, setOpenShareModel] = useState<any>(false);
  const [selectPinCode, setSelectPinCode] = useState("");
  const history = useHistory();
  const { cartItems } = useSelector((ReduxState: any) => ReduxState.checkout);
  const { user, userCity } = useSelector((ReduxState: any) => ReduxState.auth);
  const { allSimilarMedicinesList } = useSelector(
    (ReduxState: any) => ReduxState.labtest
  );
  const { userAddress } = useSelector((ReduxState: any) => ReduxState.profile);
  const getAllSimilarMedicinesList =
    allSimilarMedicinesList?.medicineById?.substitutes;

  const { allMedicinesList, ordersCountByItemDetails, deliveryTimeData } =
    useSelector((ReduxState: any) => ReduxState.labtest);
  const pProducts =
    cartItems?.carts?.find((itemv: any) => itemv?.section_key === "pharmacy") ||
    [];
  const isAddedtoCart =
    pProducts &&
    pProducts?.medicines?.find(
      (item2: any) => item2?.service_code === itemDetail?.service_code
    );
  let urlParams = new URLSearchParams(window?.location?.search);
  let categoryIds = urlParams.get("categoryids");
  let firstCategoryId = categoryIds?.split(",")[0];
  const userDeliveryTime = getUserDeliveryTime(deliveryTimeData, selectPinCode);
  console.log(
    "selectPinCode",
    selectPinCode,
    userDeliveryTime,
    isAddressChecked
  );
  const list = [
    {
      title: "Pharmacy",
      link: `/pharmacy`,
    },
    {
      title: itemDetail?.category_key,
      link: `/pharmacy/${firstCategoryId}`,
    },
    {
      title: itemDetail?.service_name,
    },
  ];
  useEffect(() => {
    let userPincode = "560068";
    if (userAddress?.length > 0) {
      const ddAdd = userAddress.find((itmm: any) => itmm.isDefault);
      userPincode = userAddress[0]?.zip;
      console.log("cccpincode", ddAdd);
      const newAddress = ddAdd?.zip ? ddAdd : userAddress[0];
      if (newAddress?.zip) {
        const addNeww = `${newAddress?.city} - ${newAddress?.zip}`;
        setselectAdderss(addNeww);
        // setAddressChecked(true);
        setSelectPinCode(newAddress?.zip);
        setSelectedAddressVal(addNeww);
      }
    }
  }, [userAddress?.length]);

  useEffect(() => {
    if (allSimilarMedicinesList?.medicineById) {
      setItemDetail(allSimilarMedicinesList?.medicineById);
    }
  }, [allSimilarMedicinesList]);

  useEffect(() => {
    if (itemDetail?.category_ids?.length > 0) {
      let body = {} as any;
      body.categoryIds = itemDetail?.category_ids;
      body.count = 16;
      body.page = 1;
      dispatch(getAllMedicineAPI(body));
    }
    if (itemDetail?.vendor_ids?.length > 0) {
      dispatch(
        getDeliveryTimeByItemID({
          vendor_ids: itemDetail?.vendor_ids?.join(","),
        })
      );
    }
    if (itemDetail?.service_code) {
      const body1 = {
        section_name: "pharmacy",
        itemId: itemDetail?.service_code,
        startDate: "2024-04-01",
        endDate: "2024-12-13",
      };
      dispatch(getOrdersCountByItem(body1));
    }
  }, [itemDetail?.service_code]);
  console.log("ordersCountByItemDetails", ordersCountByItemDetails);
  useEffect(() => {
    getMDetailsCall();
    // dispatch(getMyAddressQueryAPI());
  }, [itemId]);
  const getMDetailsCall = async () => {
    setIsPageLoading(true);
    await dispatch(
      getSimilarMedicinesAPI({
        medicineId: itemId,
      })
    );
    setIsPageLoading(false);
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
          section_key: "pharmacy",
          attachment_ids: getAttachmentIds("pharmacy"),
        },
      ],
    };
    console.log("body1", body1);
    await dispatch(handleAddToCartAPI(body1));
    await dispatch(getCartItemsAPI());
  };
  const addToCart = async (itemR: any) => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      handleAddtoCartCall(itemR);
      const isAdded = pProducts?.medicines?.findIndex(
        (item2: any) => item2?.service_code === itemDetail?.service_code
      );
    }
  };
  const handleCheck = () => {
    if (selectAdderss === "") {
      setAddressChecked(false);
    } else {
      setAddressChecked(true);
    }
  };
  const handleChangePincCode = () => {
    setAddressChecked(false);
  };

  const handleAddToCart = (item: any) => {
    setIsLoading(true);
    history.push(`/item/${item.category_key}/${item.service_code}`);
    setIsLoading(false);
  };

  const handlePlaceSelected = (place: any) => {
    console.log("placeplaceplaceplace", place);
    let inputRef: any = document.getElementById("address")!;
    let selectedAddress = inputRef?.value;
    setselectAdderss(selectedAddress);
    setSelectedAddressVal(selectedAddress);
    let postcode = "";
    for (const component of place?.address_components) {
      const componentType = component.types[0];
      switch (componentType) {
        case "postal_code": {
          postcode = `${component.long_name}`;
          break;
        }
      }
    }
    setSelectPinCode(postcode);
  };
  useEffect(() => {
    handleCheck();
  }, [selectPinCode]);
  const { getFirstImageUrl, getUrls } = useHandleImageUrl();

  const newurl11 = getUrls(itemDetail?.image);
  console.log("itemDetail", newurl11, itemDetail);

  const resentOrdercount =
    ordersCountByItemDetails?.count === "0"
      ? Math.floor(Math.random() * 10) + 1
      : ordersCountByItemDetails?.count;
  const shareURL = window.location.href;
  return (
    <ItemStyled>
      {isLoading && <Loader />}
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
      {!isPageLoading ? (
        <>
          {itemDetail ? (
            <>
              <div className="item-detail-main-div">
                <BreadCrumbModule
                  itemDetail={itemDetail}
                  itemModuleName={"Pharmacy"}
                  list={list}
                />
                <div className="item-sub-detail-main-div">
                  <div className="item-related-img-div">
                    {newurl11?.map((iimage: any) => (
                      <>
                        {iimage !== "NULL" && iimage && (
                          <img
                            key={`${itemDetail.service_code}`}
                            src={iimage}
                            alt={itemDetail.service_name}
                            className="suggestedImg"
                          />
                        )}
                      </>
                    ))}
                  </div>

                  <div className="main-div-card">
                    <div className="item-img-div">
                      <div className="discount-banner-main-div">
                        <div className="discount-banner-div">
                          <p>{itemDetail.price.discount_percentage}% Save</p>
                        </div>
                      </div>
                      <img
                        className="mainImg"
                        src={getFirstImageUrl(itemDetail?.image?.[0])}
                        alt={itemDetail.service_name}
                      />
                    </div>

                    <div className="item-main-detail-div">
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="item-title-detail">
                          {itemDetail.service_name}
                        </p>
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
                      <p className="item-tablet-detail">{itemDetail?.unit}</p>
                      {itemDetail?.salt_key && (
                        <p>Salt Key: {itemDetail.salt_key}</p>
                      )}
                      {itemDetail?.company && (
                        <p>Brand: {itemDetail.company}</p>
                      )}
                      {itemDetail?.inventory && (
                        <p>Available Quantity: {itemDetail.inventory}</p>
                      )}
                    </div>
                  </div>

                  <div className="item-detail-div">
                    <p className="recent-order-number">
                      <img
                        src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731570818886.png"
                        alt=""
                        className="me-3"
                      />
                      {resentOrdercount} People Ordered Recently
                    </p>
                    <hr className="horizental-line" />
                    <p className="price-section">
                      MRP{" "}
                      <span className="line-through me-3">
                        {`₹${itemDetail.price.actual_cost}.00`}
                      </span>
                      <span className="product-price me-3">
                        {`₹${itemDetail.price.discounted_price}.00`}
                      </span>
                      <span className="product-price-title">
                        Inclusive of all taxes
                      </span>
                    </p>

                    {!isAddressChecked || userDeliveryTime === 1 ? (
                      <>
                        <AutocompleteField
                          onPlaceSelected={(place: any) => {
                            handlePlaceSelected(place);
                          }}
                          autoFocus={true}
                          name="address"
                          value={selectedAddressVal}
                          id="address"
                          placeholder="Enter Pincode"
                          className="pincode-input"
                        />
                        <button onClick={handleCheck} className="check-button">
                          CHECK
                        </button>
                        {userDeliveryTime === 1 && (
                          <div>
                            <p className="delivered-add-text">
                              Please enter another pincode
                            </p>
                          </div>
                        )}
                      </>
                    ) : (
                      <div ref={inputRef}>
                        {userDeliveryTime > 5 && (
                          <>
                            {" "}
                            <p className="delivered-date-text">
                              Get Delivered by:{" "}
                              <span className="delivery0time-sec-note">
                                {" "}
                                {userDeliveryTime} Mins
                              </span>
                            </p>
                            <p className="delivered-add-text">
                              Delivering to: <span>{selectAdderss}</span>
                            </p>
                          </>
                        )}

                        <p>
                          <button
                            className="change-pin-code-sec"
                            onClick={handleChangePincCode}
                          >
                            Change Pincode
                          </button>
                        </p>
                      </div>
                    )}

                    <p className="select-tablets">
                      {/* <Select
                    showSearch
                    placeholder="Sort By"
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        ?.toLowerCase()
                        ?.includes(input?.toLowerCase())
                    }
                    defaultValue={"recommended"}
                    options={[
                      { value: "recommended", label: "1 Strip" },
                      { value: "better_discount", label: "2 Strip" },
                      { value: "high-to-low", label: "3 Strip" },
                      { value: "low-to-high", label: "4 Strip" },
                      { value: "custome-rating", label: "5 Strip" },
                    ]}
                  /> */}
                      <span className="ms-3">{itemDetail?.unit}</span>
                    </p>
                    <div className="add-to-cart-btn">
                      {!isAddedtoCart?.service_code ? (
                        <button
                          className="btn"
                          onClick={() => {
                            addToCart(itemDetail);
                          }}
                        >
                          Add To Cart
                        </button>
                      ) : (
                        <QuantityButton
                          index={isAddedtoCart}
                          item={itemDetail}
                        />
                      )}
                    </div>
                  </div>
                </div>
                <p className="prescription-title">
                  <img
                    src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731577428281.png"
                    alt=""
                    className="me-2"
                  />
                  Prescription Required
                </p>
                <div className="overview-main-div">
                  <div className="overview-left-div">
                    <p className="overview-heading-text1"> Counter Type</p>
                    <p className="overview-text">
                      <br />
                      <span>{itemDetail?.counter_type || "- NA"}</span>
                    </p>
                    <p className="overview-heading-text"> Quick Overview</p>
                    <p className="overview-text">
                      <div
                        className="comment-text-terms-con-sec"
                        dangerouslySetInnerHTML={{
                          __html: `${itemDetail?.product_highlights?.replace(
                            /\n/g,
                            "<br>"
                          )}`,
                        }}
                      ></div>
                      {/* <span>{itemDetail?.product_highlights || "- NA"}</span> */}
                    </p>
                    <p className="overview-heading-text1">
                      {" "}
                      Product Introduction
                    </p>
                    <p className="overview-text">
                      <br />
                      <div
                        className="comment-text-terms-con-sec"
                        dangerouslySetInnerHTML={{
                          __html: `${itemDetail?.information?.replace(
                            /\n/g,
                            "<br>"
                          )}`,
                        }}
                      ></div>
                      {/* <span>{itemDetail?.information || "- NA"}</span> */}
                    </p>
                    <p className="overview-heading-text1">
                      {" "}
                      Safety Instruction
                    </p>
                    <p className="overview-text">
                      <br />
                      <div
                        className="comment-text-terms-con-sec"
                        dangerouslySetInnerHTML={{
                          __html: `${itemDetail?.safety_instruction?.replace(
                            /\n/g,
                            "<br>"
                          )}`,
                        }}
                      ></div>
                      {/* <span>{itemDetail?.safety_instruction || "- NA"}</span> */}
                    </p>
                  </div>
                  <div className="overview-right-div">
                    <div>
                      <p className="doctor-overview-text">
                        Need a <span>Prescription</span>?
                      </p>
                      <li className="doctor-overview-sub-text">
                        Connect instantly with <span>certified doctors</span>
                      </li>
                      <li className="doctor-overview-sub-text">
                        Receive your <span>prescription</span> right away
                      </li>
                    </div>
                    <div className="doctor-prescription">
                      <div className="doctor-prescription-btn">
                        <button
                          className="btn"
                          onClick={() =>
                            history.push("/doctor?q=General Physician")
                          }
                        >
                          Get a Prescription
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="similar-product-main-div">
                  <p className="similar-product-title">
                    Compare With Similar Products
                  </p>
                  <div className="card-module-div">
                    {allMedicinesList?.map((item: any) => {
                      const isAddedToCart = pProducts?.medicines?.find(
                        (item2: any) =>
                          item2?.service_code === item.service_code
                      );
                      return (
                        <MedicineCardModule
                          key={item.service_code}
                          medicineDetail={item}
                          isAddedtoCart={isAddedToCart}
                          addToCart={addToCart}
                          type="pharmacy"
                        />
                      );
                    })}
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />

                  {/* <section className="similar-product-section">
                <div className="similar-product-column"></div>
                <div className="similar-recommendations-column">
                  <div className="d-flex Horozental-line">
                    <h2 className="similar-product-section-title">
                      This Item <hr className="similar-product-holizental" />
                    </h2>

                    <h2 className="similar-product-section-title">
                      Recommendations
                      <hr className="similar-product-holizental1" />
                    </h2>
                  </div>
                  <div className="similar-product-cards">
                    {getAllSimilarMedicinesList
                      ?.slice(0, 4)
                      ?.map((item: any, index: any) => {
                        return (
                          <div key={index} className="similar-product-card">
                            <div className="similar-product-img-card">
                              <img
                                src={item?.image}
                                alt="Recommended Product"
                                className="similar-product-imgs"
                              />
                            </div>

                            <p>{item?.service_name}</p>

                            {!isAddedtoCart?.service_code ? (
                              <button
                                className="btn"
                                onClick={(e: any) => handleAddToCart(item)}
                              >
                                Add
                              </button>
                            ) : (
                              <QuantityButton
                                index={isAddedtoCart}
                                item={itemDetail}
                              />
                            )}
                          </div>
                        );
                      })}
                  </div>
                </div>
              </section> */}
                </div>
              </div>
              {/* <table className="compare-details-table">
            <tbody>
              <tr className="compare-table-row">
                <th className="compare-table-cell header">Price</th>

                {getAllSimilarMedicinesList
                  ?.slice(0, 4)
                  ?.map((item: any, index: any) => {
                    return (
                      <td className="compare-table-cell-amount">
                        <span className="compare-table-cell-discount">
                          -{item?.price?.discount_percentage}%
                        </span>
                        {"  "}
                        {item?.price?.discounted_price}.00
                        <br />
                        <span className="compare-table-cell-mrp-amount">
                          MRP: <span> ₹{item?.price?.actual_cost}.00</span>
                        </span>
                      </td>
                    );
                  })}
              </tr>
              <tr className="compare-table-row">
                <th className="compare-table-cell header">Delivered By</th>

                {getAllSimilarMedicinesList
                  ?.slice(0, 4)
                  ?.map((item: any, index: any) => {
                    return (
                      <td className="compare-table-cell-title">0 Minutes</td>
                    );
                  })}
              </tr>
              <tr className="compare-table-row">
                <th className="compare-table-cell header">Manufacturer</th>
                {getAllSimilarMedicinesList
                  ?.slice(0, 4)
                  ?.map((item: any, index: any) => {
                    return <td className="compare-table-cell-title">-</td>;
                  })}
              </tr>
              <tr className="compare-table-row">
                <th className="compare-table-cell header">Type</th>

                {getAllSimilarMedicinesList
                  ?.slice(0, 4)
                  ?.map((item: any, index: any) => {
                    return (
                      <td className="compare-table-cell-title">
                        {item?.category_key?.charAt(0).toUpperCase() +
                          item?.category_key?.slice(1)}
                      </td>
                    );
                  })}
              </tr>
              <tr className="compare-table-row">
                <th className="compare-table-cell header">Qantity</th>

                {getAllSimilarMedicinesList
                  ?.slice(0, 4)
                  ?.map((item: any, index: any) => {
                    return (
                      <td className="compare-table-cell-title">{item?.unit}</td>
                    );
                  })}
              </tr>
              <tr className="compare-table-row">
                <th className="compare-table-cell header">Salt Name</th>
                {getAllSimilarMedicinesList
                  ?.slice(0, 4)
                  ?.map((item: any, index: any) => {
                    return <td className="compare-table-cell-title">-</td>;
                  })}
              </tr>
            </tbody>
          </table> */}
            </>
          ) : (
            <>Item Details Not Available</>
          )}
        </>
      ) : (
        <div className="new-loader-sec">
          <ContentLoader viewBox="0 0 800 400" height={400} width={800}>
            <rect x="470" y="104" rx="5" ry="5" width="220" height="10" />
            <rect x="470" y="124" rx="5" ry="5" width="220" height="10" />
            <rect x="470" y="144" rx="5" ry="5" width="220" height="10" />
            <rect x="64" y="18" rx="0" ry="0" width="346" height="200" />
            <rect x="229" y="300" rx="0" ry="0" width="0" height="0" />
            <rect x="111" y="340" rx="0" ry="0" width="0" height="0" />
            <rect x="121" y="342" rx="0" ry="0" width="0" height="0" />
            <rect x="470" y="18" rx="0" ry="0" width="300" height="25" />
            <rect x="470" y="58" rx="0" ry="0" width="300" height="6" />
            <rect x="470" y="68" rx="0" ry="0" width="300" height="6" />
            <rect x="470" y="78" rx="0" ry="0" width="300" height="6" />
            <rect x="798" y="135" rx="0" ry="0" width="0" height="0" />
            <rect x="731" y="132" rx="0" ry="0" width="0" height="0" />
            <rect x="470" y="179" rx="0" ry="0" width="70" height="30" />
            <rect x="560" y="179" rx="0" ry="0" width="70" height="30" />
            <rect x="112" y="250" rx="5" ry="5" width="60" height="60" />
            <rect x="198" y="250" rx="5" ry="5" width="60" height="60" />
            <rect x="295" y="250" rx="5" ry="5" width="60" height="60" />
            <rect x="70" y="340" rx="0" ry="0" width="131" height="12" />
            <rect x="70" y="370" rx="0" ry="0" width="566" height="12" />
            <rect x="70" y="390" rx="0" ry="0" width="566" height="12" />
          </ContentLoader>
        </div>
      )}
    </ItemStyled>
  );
};

export default Item;
