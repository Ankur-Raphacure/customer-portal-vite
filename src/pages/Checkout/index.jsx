import React, { useMemo } from "react";
import { useState, useEffect } from "react";
import { BlobServiceClient } from "@azure/storage-blob";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CheckoutStyled } from "./Checkout.styed";
import group_505 from "../../assets/lego-figure-with-purple-shirt-purple-shirt-with-tie-it 1.png";
import group_edit from "../../assets/Group-edit.png";
import ellipse1 from "../../assets/Ellipse1.png";
import Select from "react-select";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import Loader from "./../../components/Common/Loader";
import CartItemsSection from "../../components/CartItemsSection/CartItemsSection";
import {
  createBookingAPI,
  createCartBookingAPI,
  updateOrderDetailsAPI,
} from "../../redux/slices/checkout/checkoutService";
import {
  updateCheckoutSelectedUser,
  updateCheckoutSelectedAddress,
} from "../../redux/slices/checkout/checkoutSlice";
import { getAttachmentIds } from "../../Scenes/common";

import {
  deleteCartItemAPI,
  getCartItemsAPI,
  updateWalletCartAPI,
} from "../../redux/slices/checkout/checkoutService";
import { updateCartItems } from "../../redux/slices/checkout/checkoutSlice";
import CustomModal from "../../components/CustomModel";
import OrderConformation from "./OrderConformation/OrderConformation";
import { RAZORPAY_KEY } from "../../config";
import { getAllSubscriptions } from "../../redux/slices/dashboard/dashboardService";
import { Button } from "antd";
import Comorbidities from "../Hospital/BookingReview/Comorbidities";

const Checkout = () => {
  const [file, setFile] = useState(null);
  const [addressEnabled, setAddressEnabled] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showSuccessMessageText, setShowSuccessMessageText] = useState(false);
  const [deleteConformSection, setDeleteConformSection] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [paymentObj, setPaymentObj] = useState({});

  const [showConformMessageModel, setShowConformMessageModel] = useState(false);
  const [showConformMessageModelTest, setShowConformMessageModelTest] =
    useState("");
  const [finaWalletList, setFinaWalletList] = useState([]);

  const history = useHistory();
  const dispatch = useDispatch();
  let doctorMale =
    "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338140063.png";
  let doctorFemale =
    "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338333932.png";

  let imageMale =
    "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338140063.png";
  let imageFemale =
    "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338333932.png";
  const { user, isRaphaPlus, subDomainDetails, subDomainName } = useSelector(
    (ReduxState) => ReduxState.auth
  );
  const {
    cartItems,
    bookingInfo,
    checkoutSelectedAddress,
    checkoutSelectedUser,
  } = useSelector((ReduxState) => ReduxState.checkout);
  const { userDependents, userAddress } = useSelector(
    (ReduxState) => ReduxState.profile
  );
  const { myAllSubscriptions } = useSelector(
    (ReduxState) => ReduxState.dashboard
  );
  console.log("cartItems : ", cartItems);
  const hide_price = subDomainDetails?.agreed_services?.hide_price;
  const [cartFinalList, setCartFinalList] = useState([]);
  const pProducts =
    cartItems?.carts?.find((itemv) => itemv?.section_key === "pharmacy") ?? [];

  const total = pProducts?.medicines?.length;
  const [hasPharmacyItem, setHasPharmacyItem] = useState(false);
  const [renderPatientHistoryModal, setRenderPatientHistoryModal] =
    useState(false);
  const [selectedCartItemId, setSelectedCartItemId] = useState("");
  const [allCartItems, setAllCartItems] = useState([]);
  const [allowCod, setAllowCod] = useState(false);

  useEffect(() => {
    setAllCartItems(cartItems);
  }, [cartItems]);

  useEffect(() => {
    const isPharmacyItemPresent = cartItems?.carts?.some(
      (cart) => cart?.section_key === "pharmacy"
    );
    setHasPharmacyItem(isPharmacyItemPresent);
  }, [cartItems?.carts]);

  const [isLoading, setIsLoading] = useState(false);
  const [showConformationModel, setShowConformationModel] = useState(false);

  const [itemsTotalAmount, setItemsTotalAmount] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);
  const [finalPayAmount, setFinalPayAmount] = useState(0);
  const discountAmount = itemsTotalAmount - finalAmount;
  const fullName = `${user?.first_name} ${user?.last_name}`;
  console.log("bookingInfo", bookingInfo);
  console.log("myAllSubscriptions", myAllSubscriptions);
  console.log("cartItems", cartItems);
  useEffect(() => {
    dispatch(getAllSubscriptions());
    updatedAddressDetails();
    dispatch(getCartItemsAPI());
    if (window && typeof window.PhonePeCheckout === "undefined") {
      loadJS("https://mercury-stg.phonepe.com/web/bundle/checkout.js", true);
    }
  }, []);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      console.log("Razorpay script loaded successfully");
    };
    script.onerror = (err) => {
      console.error("Error loading Razorpay script:", err);
    };
    document.body.appendChild(script);

    // Cleanup the script when component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const calulateDiscountPrice = (price, discountObj) => {
    var ddAmount = 0;
    if (discountObj?.amount) {
      console.log("discountObj discountObj", discountObj);
      if (discountObj?.is_checked) {
        console.log("discountObj discountObj", true);
        if (price >= discountObj?.amount) {
          ddAmount = price - discountObj?.amount;
        } else if (price < discountObj?.amount) {
          ddAmount = 0;
        }
      } else {
        ddAmount = price;
        console.log("discountObj discountObj", false);
      }
    } else if (discountObj?.discount_percentage) {
      console.log("finalAmount1");
      ddAmount = price * ((100 - discountObj?.discount_percentage) / 100);
      ddAmount = ddAmount ? parseInt(ddAmount?.toFixed(2)) : 0;
    }
    return ddAmount;
    // var totalValue = price * ((100 - discount) / 100);
    // return totalValue ? totalValue.toFixed(2) : 0;
  };
  const getFinalAmout = (ssName) => {
    let finalAmount1 = 0;
    cartItems?.carts?.map((ittem) => {
      if (ssName === ittem?.categoryName) {
        if (ittem?.categoryName == "pharmacy") {
          finalAmount1 =
            ittem?.price?.discounted_price * ittem?.count + finalAmount1;
        } else if (ittem?.categoryName == "doctor") {
          let finalTemp1 = 0;
          if (ittem?.consultationType === "OPD")
            finalTemp1 = ittem?.doctorDetails?.consultation_cost || 0;
          else if (ittem?.consultationType === "CHAT")
            finalTemp1 = ittem?.doctorDetails?.chat_consultation_cost || 0;
          else
            finalTemp1 = ittem?.doctorDetails?.virtual_consultation_cost || 0;

          finalAmount1 = finalTemp1 + finalAmount1;
        } else {
          console.log("vinod ittem", ittem);
          const isApplyDiscount =
            ittem.patientsDetails?.relation === "Self"
              ? true
              : ittem.doctorDetails?.price?.discount_for_dependents
              ? true
              : false;
          let finalTemp1 = isApplyDiscount
            ? ittem?.doctorDetails?.price?.discounted_price
            : ittem?.doctorDetails?.price?.actual_cost;
          let finalTemp12 = finalTemp1 || 0;
          finalAmount1 = finalTemp12 + finalAmount1;
        }
      }
    });
    return finalAmount1;
  };
  const getFinalAmoutOPD = (ssName) => {
    let finalAmount1 = 0;
    cartItems?.carts?.map((ittem) => {
      if (ssName === ittem?.categoryName && ittem?.hospitalDetails?.vendorId) {
        var finalTemp1 =
          ittem?.doctorDetails?.price?.discounted_price ||
          ittem?.doctorDetails?.virtual_consultation_cost ||
          ittem?.doctorDetails?.consultation_cost ||
          0;
        finalAmount1 = finalTemp1 + finalAmount1;
      }
    });
    return finalAmount1;
  };
  const getFinalAmoutVirtual = (ssName) => {
    let finalAmount1 = 0;
    cartItems?.carts?.map((ittem) => {
      if (ssName === ittem?.categoryName && !ittem?.hospitalDetails?.vendorId) {
        var finalTemp1 =
          ittem?.doctorDetails?.price?.discounted_price ||
          ittem?.doctorDetails?.virtual_consultation_cost ||
          ittem?.doctorDetails?.consultation_cost ||
          0;
        finalAmount1 = finalTemp1 + finalAmount1;
      }
    });
    return finalAmount1;
  };

  const handleSlectWallet = async (e, itemW) => {
    setErrorMessage("");
    console.log("itemWitemW", itemW);
    console.log("e", e);
    const prevList = [];
    if (itemW?.id) {
      setIsLoading(true);
      const body = { walletId: itemW?.id, useWallet: e.target.checked };
      await dispatch(updateWalletCartAPI(body));
      await dispatch(getCartItemsAPI());
      setIsLoading(false);
    }
    // finaWalletList.map((itms1) => {
    //   if (itms1?.id === itemW?.id) {
    //     prevList.push({ ...itms1, is_checked: e.target.checked });
    //   } else {
    //     prevList.push(itms1);
    //   }
    // });
    // const idx = prevList.findIndex((itms1) => itms1?.id === itemW?.id);
    // prevList[idx][`is_checked`] = e.target.checked;
    // console.log("prevListprevList", prevList);
    // console.log("prevListprevList", itemW);
    // console.log("prevListprevList", e.target.checked);
    // console.log("prevList", prevList);
    // setFinaWalletList(prevList);
  };
  useEffect(() => {
    console.log("cartItemscartItems vinod 1111", cartItems);
    if (cartItems?.carts?.length > 0) {
      let itemsTotalAmount1 = 0;
      let finalAmount1 = 0;
      let allSecNames = [];
      console.log("cartItemscartItems vinod", cartItems);
      cartItems?.carts?.map((ittem) => {
        if (ittem?.section_key === "pharmacy") {
          finalAmount1 =
            ittem?.price?.discounted_price * ittem?.count + finalAmount1;
          itemsTotalAmount1 =
            ittem?.price?.actual_cost * ittem?.count + itemsTotalAmount1;
          console.log("itemsTotalAmount1", itemsTotalAmount1);
        } else {
          var totalTemp1 = 0;
          if (ittem?.section_key === "doctor") {
            if (ittem?.consultationType === "OPD")
              totalTemp1 = ittem?.doctorDetails?.consultation_cost || 0;
            else if (ittem?.consultationType === "CHAT")
              totalTemp1 = ittem?.doctorDetails?.chat_consultation_cost || 0;
            else
              totalTemp1 = ittem?.doctorDetails?.virtual_consultation_cost || 0;
          } else if (ittem?.categoryName === "labtest") {
            if (
              ittem?.doctorDetails?.tests &&
              ittem?.doctorDetails?.tests.length > 0
            ) {
              ittem?.doctorDetails?.tests.forEach((Ddetail) => {
                totalTemp1 += Ddetail?.price?.actual_cost;
              });
            }
          } else {
            totalTemp1 =
              ittem?.price?.actual_cost ||
              ittem?.doctorDetails?.price?.actual_cost ||
              0;
          }

          itemsTotalAmount1 = totalTemp1 + itemsTotalAmount1;

          var finalTemp1 = 0;
          if (ittem?.section_key === "doctor") {
            if (ittem?.consultationType === "OPD")
              finalTemp1 = ittem?.doctorDetails?.consultation_cost || 0;
            else if (ittem?.consultationType === "CHAT")
              finalTemp1 = ittem?.doctorDetails?.chat_consultation_cost || 0;
            else
              finalTemp1 = ittem?.doctorDetails?.virtual_consultation_cost || 0;
          } else if (ittem?.categoryName === "labtest") {
            let isApplyDiscount = false;
            if (
              ittem?.doctorDetails?.tests &&
              ittem?.doctorDetails?.tests.length > 0
            ) {
              ittem?.doctorDetails?.tests.forEach((Ddetail) => {
                isApplyDiscount =
                  ittem.patientsDetails?.relation === "Self"
                    ? true
                    : Ddetail?.price?.discount_for_dependents
                    ? true
                    : false;
                finalTemp1 += isApplyDiscount
                  ? Ddetail?.price?.discounted_price
                  : Ddetail?.price?.actual_cost;
              });
            }
          } else {
            const isApplyDiscount =
              ittem.patientsDetails?.relation === "Self"
                ? true
                : ittem.doctorDetails?.price?.discount_for_dependents
                ? true
                : false;

            finalTemp1 = isApplyDiscount
              ? ittem?.price?.discounted_price ||
                ittem?.doctorDetails?.price?.discounted_price
              : ittem?.price?.actual_cost ||
                ittem?.doctorDetails?.price?.actual_cost ||
                0;
            // let finalTemp12 = finalTemp1 || 0;
          }

          finalAmount1 = finalTemp1 + finalAmount1;
          console.log("ittemittem", ittem);
          console.log("itemsTotalAmount1", itemsTotalAmount1);
          console.log("finalAmount1", finalAmount1);
        }

        if (!allSecNames.includes(ittem?.section_key)) {
          allSecNames.push(ittem?.section_key);
        }
      });

      let finalList = [];
      allSecNames.map((ittem) => {
        const values = cartItems?.carts?.filter(
          (itemV) => ittem === itemV.section_key
        );
        finalList.push({ section_key: ittem, products: values });
      });
      console.log("allSecNames", allSecNames);
      console.log("finalList", finalList);
      setItemsTotalAmount(itemsTotalAmount1);
      setFinalAmount(finalAmount1);
      setFinalPayAmount(finalAmount1);
      setCartFinalList(finalList);
    }
  }, [cartItems?.carts?.length, finaWalletList, cartItems]);
  console.log("CartFinalList", cartFinalList);
  useEffect(() => {
    var finalPayAmount1 = finalAmount;
    cartFinalList?.map((ittem11) => {
      const isn = ittem11?.categoryName;
      var cPrice = getFinalAmout(isn);
      var opdPrice = getFinalAmoutOPD(isn);
      var virtualPrice = getFinalAmoutVirtual(isn);
      console.log("isnisn section", isn);
      console.log("cPrice", cPrice);
      console.log("opdPrice", opdPrice);
      console.log("virtualPrice", virtualPrice);
      // "dental_consultation",
      // "eye_consultation",

      if (cPrice > 0) {
        finaWalletList.map((item5) => {
          if (item5?.type === "pharmacy" && isn === "pharmacy") {
            const dPrice = calulateDiscountPrice(cPrice, item5);
            const finalDprice = cPrice - dPrice;
            finalPayAmount1 = finalPayAmount1 - finalDprice;
          } else if (item5?.type === "ctmri_tests" && isn === "ctmri") {
            const dPrice = calulateDiscountPrice(cPrice, item5);
            const finalDprice = cPrice - dPrice;
            finalPayAmount1 = finalPayAmount1 - finalDprice;
          } else if (
            item5?.type === "dental_consultation" &&
            isn === "dentalcare"
          ) {
            const dPrice = calulateDiscountPrice(cPrice, item5);
            const finalDprice = cPrice - dPrice;
            finalPayAmount1 = finalPayAmount1 - finalDprice;
          } else if (item5?.type === "gym_subscription" && isn === "gym") {
            const dPrice = calulateDiscountPrice(cPrice, item5);
            const finalDprice = cPrice - dPrice;
            finalPayAmount1 = finalPayAmount1 - finalDprice;
          } else if (item5?.type === "eye_consultation" && isn === "eyecare") {
            const dPrice = calulateDiscountPrice(cPrice, item5);
            const finalDprice = cPrice - dPrice;
            finalPayAmount1 = finalPayAmount1 - finalDprice;
          } else if (item5?.type === "diagnostic_tests" && isn === "labtest") {
            const dPrice = calulateDiscountPrice(cPrice, item5);
            const finalDprice = cPrice - dPrice;
            finalPayAmount1 = finalPayAmount1 - finalDprice;
          } else if (item5?.type === "ambulance" && isn === "ambulance") {
            const dPrice = calulateDiscountPrice(cPrice, item5);
            const finalDprice = cPrice - dPrice;
            finalPayAmount1 = finalPayAmount1 - finalDprice;
          } else if (item5?.type === "opd_consultation" && isn === "doctor") {
            if (opdPrice > 0) {
              const dPrice = calulateDiscountPrice(opdPrice, item5);
              console.log("dPricedPrice", dPrice);
              const finalDprice = opdPrice - dPrice;
              finalPayAmount1 = finalPayAmount1 - finalDprice;
            }
          } else if (
            item5?.type === "virtual_consultation" &&
            isn === "doctor"
          ) {
            if (virtualPrice > 0) {
              const dPrice = calulateDiscountPrice(virtualPrice, item5);
              const finalDprice = parseInt(virtualPrice) - dPrice;
              finalPayAmount1 = finalPayAmount1 - finalDprice;
            }
            // const dPrice = calulateDiscountPrice(cPrice, item5);
          }
        });
      }
    });
    setFinalPayAmount(finalPayAmount1);
  }, [cartFinalList, finaWalletList]);
  useEffect(() => {
    const finalWList = [];
    if (
      finaWalletList?.length === 0 &&
      cartItems?.carts?.length > 0 &&
      myAllSubscriptions?.wallets?.length > 0
    ) {
      const allWallets = myAllSubscriptions?.wallets;
      allWallets.map((ittem1) => {
        var cartObj = {};
        if (ittem1?.type == "opd_consultation") {
          cartObj = cartItems?.carts?.find(
            (item3) =>
              item3?.hospitalDetails?.vendorId &&
              item3?.section_key === "doctor"
          );
        } else if (ittem1?.type == "virtual_consultation") {
          cartObj = cartItems?.carts?.find(
            (item3) =>
              !item3?.hospitalDetails?.vendorId &&
              item3?.section_key === "doctor"
          );
        } else if (ittem1?.type == "ctmri_tests") {
          cartObj = cartItems?.carts?.find(
            (item3) => item3?.section_key === "ctmri"
          );
        } else if (ittem1?.type == "dental_consultation") {
          cartObj = cartItems?.carts?.find(
            (item3) => item3?.section_key === "dentalcare"
          );
        } else if (ittem1?.type == "gym_subscription") {
          cartObj = cartItems?.carts?.find(
            (item3) => item3?.section_key === "gym"
          );
        } else if (ittem1?.type == "eye_consultation") {
          cartObj = cartItems?.carts?.find(
            (item3) => item3?.section_key === "eyecare"
          );
        } else if (ittem1?.type == "diagnostic_tests") {
          cartObj = cartItems?.carts?.find(
            (item3) => item3?.section_key === "labtest"
          );
        } else if (ittem1?.type == "ambulance") {
          cartObj = cartItems?.carts?.find(
            (item3) => item3?.section_key === "ambulance"
          );
        } else if (ittem1?.type == "pharmacy") {
          cartObj = cartItems?.carts?.find(
            (item3) => item3?.section_key === "pharmacy"
          );
        }

        // console.log("cartObj", cartObj);
        // console.log("ittem1", ittem1);
        // if (ittem1?.hospitalDetails?.vendorId) {
        //   walletObj = cartItems?.find(
        //     (item3) => item3?.type == "opd_consultation"
        //   );
        // } else {
        //   walletObj = cartItems?.find(
        //     (item3) => item3?.type == "virtual_consultation"
        //   );
        // }

        if (cartObj?.section_key) {
          finalWList.push(ittem1);
        }
      });
      setFinaWalletList(finalWList);
    }
  }, [myAllSubscriptions?.wallets, cartItems?.length]);

  const updatedAddressDetails = () => {
    console.log("userDependents", userDependents);
    console.log("userDependcheckoutSelectedUserents", checkoutSelectedUser);
    if (userDependents?.length > 0 && !checkoutSelectedUser?.id) {
      dispatch(updateCheckoutSelectedUser(userDependents[0]));
    }
    if (userAddress?.length > 0 && !checkoutSelectedAddress?.id) {
      dispatch(updateCheckoutSelectedAddress(userAddress[0]));
    }
  };
  const handleRemoveSection = (sName) => {
    setDeleteConformSection(sName);
    setShowConformMessageModel(true);
    setShowConformMessageModelTest(
      `Are you sure, Do you want to delete ${getDisplayName(sName)} Section?`
    );
  };

  const handleEditSection = (sName) => {
    history.push("/editcart/sName");
  };
  const handleRemoveSectionConform = async () => {
    console.log("deleteConformSection", deleteConformSection);
    if (deleteConformSection) {
      console.log("cartitems", cartItems);
      // const newList = [];
      // cartItems?.carts?.map((ittem) => {
      //   if (ittem?.categoryName !== deleteConformSection) {
      //     newList.push(ittem);
      //   }
      // });
      // dispatch(updateCartItems(newList));
      setIsLoading(true);
      await dispatch(deleteCartItemAPI(deleteConformSection));
      await dispatch(getCartItemsAPI());
      setIsLoading(false);
    }
  };
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  const navigateToPage = (url) => {
    history.push(url);
  };
  const gotoCartPage = () => {
    history.push("/cart");
  };
  const gotoDashboard = () => {
    history.push("/dashboard");
  };

  const getUseWalletFalg = (cartItem) => {
    var returnF = false;
    finaWalletList.map((itms1) => {
      if (
        itms1?.type == "opd_consultation" &&
        cartItem?.categoryName === "doctor" &&
        cartItem?.hospitalDetails?.vendorId
      ) {
        if (itms1?.discount_percentage > 0 || itms1?.is_checked) {
          returnF = true;
        }
      } else if (
        itms1?.type == "virtual_consultation" &&
        !cartItem?.hospitalDetails?.vendorId &&
        cartItem?.categoryName === "doctor"
      ) {
        if (itms1?.discount_percentage > 0 || itms1?.is_checked) {
          returnF = true;
        }
      } else if (
        itms1?.type == "ctmri_tests" &&
        cartItem?.categoryName === "ctmri"
      ) {
        if (itms1?.discount_percentage > 0 || itms1?.is_checked) {
          returnF = true;
        }
      } else if (
        itms1?.type == "diagnostic_tests" &&
        cartItem?.categoryName === "labtest"
      ) {
        if (itms1?.discount_percentage > 0 || itms1?.is_checked) {
          returnF = true;
        }
      } else if (
        itms1?.type == "ambulance" &&
        cartItem?.categoryName === "ambulance"
      ) {
        if (itms1?.discount_percentage > 0 || itms1?.is_checked) {
          returnF = true;
        }
      } else if (
        itms1?.type == "dental_consultation" &&
        cartItem?.categoryName === "dentalcare"
      ) {
        if (itms1?.discount_percentage > 0 || itms1?.is_checked) {
          returnF = true;
        }
      } else if (
        itms1?.type == "gym_subscription" &&
        cartItem?.categoryName === "gym"
      ) {
        if (itms1?.discount_percentage > 0 || itms1?.is_checked) {
          returnF = true;
        }
      } else if (
        itms1?.type == "eye_consultation" &&
        cartItem?.categoryName === "eyecare"
      ) {
        if (itms1?.discount_percentage > 0 || itms1?.is_checked) {
          returnF = true;
        }
      } else if (
        itms1?.type == "pharmacy" &&
        cartItem?.categoryName === "pharmacy"
      ) {
        if (itms1?.discount_percentage > 0 || itms1?.is_checked) {
          returnF = true;
        }
      }
    });
    return returnF;
  };
  const loadJS = (FILE_URL, async = true) => {
    let scriptEle = document.createElement("script");

    scriptEle.setAttribute("src", FILE_URL);
    scriptEle.setAttribute("type", "text/javascript");
    scriptEle.setAttribute("async", async);

    document.body.appendChild(scriptEle);

    // success event
    scriptEle.addEventListener("load", () => {
      console.log("File loaded");
      if (window && window.PhonePeCheckout && window.PhonePeCheckout.transact) {
        window.PhonePeCheckout.transact(window.phonePeObj);
      }
    });
    // error event
    scriptEle.addEventListener("error", (ev) => {
      console.log("Error on loading file", ev);
    });
  };
  const handlePhoePecheckout = (paymentObj) => {
    console.log("phonepe paymentObj : ", paymentObj);

    if (!paymentObj?.order_data?.instrumentResponse?.redirectInfo?.url) {
      console.log("going to dashboard");
      closedWithoutPayment();
    } else {
      window.phonePecallback = (response) => {
        if (response === "USER_CANCEL") {
          closedWithoutPayment();
          return;
        } else if (response === "CONCLUDED") {
          console.log("going to dashboard");
          localStorage.removeItem("raphaCart");
          dispatch(updateCartItems([]));
          setPaymentObj(paymentObj);
          setShowConformationModel(true);
          return;
        }
      };
      if (paymentObj?.order_data?.instrumentResponse?.redirectInfo?.url) {
        if (
          window &&
          window.PhonePeCheckout &&
          window.PhonePeCheckout.transact
        ) {
          window.PhonePeCheckout.transact({
            tokenUrl:
              paymentObj?.order_data?.instrumentResponse?.redirectInfo?.url,
            callback: window?.phonePecallback,
            type: "IFRAME",
          });
        } else {
          window.phonePeObj = {
            tokenUrl:
              paymentObj?.order_data?.instrumentResponse?.redirectInfo?.url,
            callback: window.phonePecallback,
            type: "IFRAME",
          };
          loadJS(
            "https://mercury-stg.phonepe.com/web/bundle/checkout.js",
            true
          );
        }
      }
    }
  };

  const handlePayNow = async (merchant, isCod = false) => {
    setErrorMessage("");
    let itemsTotalAmount1 = 0;
    let medicinesObj = [];
    let finalJson1 = [];
    var pharmacyFlag = false;
    allCartItems?.carts?.map((ittem) => {
      const wallet_flag = getUseWalletFalg(ittem);
      if (ittem?.categoryName === "pharmacy") {
        medicinesObj.push({
          ...ittem,
          isCod: ittem?.isCod || false,
          attachmentImages: ittem?.attachmentImages || [],
          comments: ittem?.comments || "",
        });
        pharmacyFlag = wallet_flag;
      } else if (ittem?.categoryName === "ambulance") {
        const lempObj = {
          test_code: ittem?.service_code,
          useWallet: wallet_flag, //false,
          address: ittem?.fromAddress,
          to_address: ittem?.toAddress,
          address_id: ittem?.address?.id,
          user_id: user?.id,
          // notes: ittem?.notes,
          collection_1_date: ittem?.collection_1_date,
        };
        finalJson1.push(lempObj);
      } else if (ittem?.categoryName === "gym") {
        const lempObj = {
          test_code: ittem?.doctorDetails?.service_code,
          useWallet: wallet_flag, //false,
          user_id: user?.id,
          vendor_id:
            ittem?.hospitalDetails?.vendorId || ittem?.hospitalDetails?.id,
          collection_1_date: ittem?.slot1?.dateStr,
          collection_1_slot: ittem?.slot1?.slot?.slot,
          collection_2_date: ittem?.slot2?.dateStr,
          collection_2_slot: ittem?.slot2?.slot?.slot,
        };
        finalJson1.push(lempObj);
      } else if (ittem?.categoryName === "labtest") {
        let testcodes = [];
        let testpackagecode = undefined;
        if (
          ittem.doctorDetails?.tests &&
          ittem.doctorDetails?.tests.length > 0
        ) {
          ittem.doctorDetails?.tests.forEach((Ddetail) => {
            if (Ddetail?.labtestType === "labpackage") {
              testpackagecode = Ddetail?.service_code;
            } else {
              testcodes.push(Ddetail?.service_code);
            }
          });
        }
        const lempObj = {
          test_code: undefined,
          package_code: testpackagecode,
          test_codes: testcodes?.length > 0 ? testcodes : undefined,
          useWallet: wallet_flag, //false,
          vendor_id:
            ittem?.hospitalDetails?.vendorId || ittem?.hospitalDetails?.id,
          address_id: ittem?.address?.id,
          user_id: ittem?.patientsDetails?.id,
          collection_1_date: ittem?.slot1?.dateStr,
          collection_1_slot: ittem?.slot1?.slot?.slot,
          collection_2_date: ittem?.slot2?.dateStr,
          collection_2_slot: ittem?.slot2?.slot?.slot,
          attachment_ids: getAttachmentIds(ittem?.section_key),
          isCod: ittem?.isCod || false,
          attachmentImages: ittem?.attachmentImages || [],
          comments: ittem?.comments || "",
        };
        finalJson1.push(lempObj);
      } else {
        const lempObj = {
          virtual_type: ittem?.categoryName === "doctor" ? "video" : undefined,
          // service_code: ittem?.doctorDetails?.service_code,
          test_code: ittem?.doctorDetails?.service_code
            ? ittem?.doctorDetails?.service_code
            : undefined,
          package_code: undefined,
          useWallet: wallet_flag, //false,
          doctor_id: ittem?.doctorDetails?.id,
          vendor_id:
            ittem?.hospitalDetails?.vendorId || ittem?.hospitalDetails?.id,
          address_id: ittem?.address?.id,
          user_id: ittem?.patientsDetails?.id,
          collection_1_date: ittem?.slot1?.dateStr,
          collection_1_slot: ittem?.slot1?.slot?.slot,
          collection_2_date: ittem?.slot2?.dateStr,
          collection_2_slot: ittem?.slot2?.slot?.slot,
          attachment_ids: getAttachmentIds(ittem?.section_key),
          isCod: ittem?.isCod,
          attachmentImages: ittem?.attachmentImages,
          comments: ittem?.comments,
        };
        finalJson1.push(lempObj);
      }
    });
    const lempMObj = {
      medicines: medicinesObj,
      useWallet: pharmacyFlag,
      address_id: checkoutSelectedAddress?.id,
      user_id: checkoutSelectedUser?.id,
      collection_1_date: null,
      collection_1_slot: null,
      collection_2_date: null,
      collection_2_slot: null,
      attachment_ids: getAttachmentIds("pharmacy"),
      isCod: medicinesObj?.isCod || false,
      attachmentImages: medicinesObj?.attachmentImages || [],
      comments: medicinesObj?.comments || "",
    };
    if (medicinesObj?.length > 0) {
      finalJson1.unshift(lempMObj);
    }
    if (isCod) {
      finalJson1 = finalJson1.map((item) => ({
        ...item,
        isCod: true, // Add or update isCod to true
      }));
    }

    console.log("finalJson1", finalJson1);
    // return false;
    setIsLoading(true);
    // https://api.raphacure.co.in/api/v1/cart/book' \
    const resp = await dispatch(
      createCartBookingAPI({ bookings: finalJson1, merchant: merchant || "" })
    );
    const res = await dispatch(getCartItemsAPI());
    // const resp = await dispatch(createBookingAPI({ bookings: finalJson1 }));
    setIsLoading(false);
    console.log("finalJson1", finalJson1);
    console.log("resp resp", resp);
    if (resp?.payload?.success) {
      localStorage.removeItem("raphaPrescriptions");
      console.log(
        "resp?.payload?.data?.bookings?.id",
        resp?.payload?.data?.bookings?.id
      );
      if (
        !isCod &&
        !resp?.payload?.data?.payment?.instanceBooking &&
        resp?.payload?.data?.payment
      ) {
        let paymentObj = resp?.payload?.data?.payment;
        if (paymentObj.razorpay_order_id) {
          openPaymentBox(resp?.payload?.data?.payment);
        } else {
          handlePhoePecheckout(resp?.payload?.data?.payment);
        }
        console.log("payload?.data?.payments");
      } else {
        console.log("going to dashboard");
        localStorage.removeItem("raphaCart");
        dispatch(updateCartItems([]));
        setPaymentObj(resp?.payload?.data?.payment);
        setShowConformationModel(true);
        // showAlertMessage("Booking created successfully");
        // toast.add({ title: "Booking created successfully", color: "accent" });
        // gotoDashboard();
      }
    } else if (resp?.error?.message) {
      setErrorMessage(resp?.error?.message);
      console.log("resp?.error?.message", resp?.error?.message);
    }
  };

  const openPaymentBox = async (payment) => {
    console.log("openPaymentBox vinod");
    try {
      // TODO - Call backend to create order
      //const order = await axios.post('/create-order', { amount: 500 }); // Amount should be dynamic based on actual usage

      const options = {
        key: RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
        amount: payment.amount, //order.data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: payment.currency, //order.data.currency,
        name: "Raphacure",
        description: "Booking Transactions",
        image: "https://placehold.co/128x128.png",
        order_id: payment.razorpay_order_id,
        handler: function (response) {
          /*{razorpay_payment_id: 'pay_NzhHE5w6TkpQGe', razorpay_order_id: 'order_Nzh0BDacK8XfXu', razorpay_signature: '63d4e358e86caaaec40b1b3405f943a837b37f38650d49d32f139ba5e2565410'}
           */
          updateOrder(payment.id, response);
        },
        //TODO - change the prefills
        prefill: {
          name: fullName,
          email: user?.email,
          contact: user?.phone,
        },
        theme: {
          color: "#9747ff",
        },
        modal: {
          ondismiss: function () {
            closedWithoutPayment();
          },
        },
      };

      const rzp1 = new window.Razorpay(options);
      // displayRazorpay(options);
      console.log("rzp1rzp1rzp1", rzp1);
      rzp1.open();
    } catch (error) {
      console.error("Error: rzp1", error);
    }
  };

  const updateOrder = async (id, data) => {
    console.log("id", id);
    console.log("datadata", data);
    const body = { body: { order: data }, id: id };
    try {
      setIsLoading(true);
      const resp = await dispatch(updateOrderDetailsAPI(body));
      setIsLoading(false);
      console.log("respres presp", resp?.payload.data.response);
      const orderRes = resp?.payload?.data?.response;

      if (resp?.payload?.success) {
        // toast.add({ title: "Booking created successfully", color: "accent" });
        // gotoDashboard();
        // showAlertMessage(
        //   "Booking created successfully. Please check order status from dashboard"
        // );
        localStorage.removeItem("raphaCart");
        dispatch(updateCartItems([]));
        setPaymentObj(orderRes);
        setShowConformationModel(true);
      } else {
        showAlertMessage("Booking created successfully");
        // toast.add({ title: "Booking created successfully", color: "accent" });
        // gotoDashboard();
        console.log("going to dashboard");
      }
    } catch (e) {
      console.log("error", e);
    }
  };
  const showAlertMessage = (msg) => {
    setShowSuccessMessageText(msg);
    setShowSuccessMessage(true);
  };
  console.log("subDomainName", subDomainName);
  const handleOrderTracking = () => {
    if (user?.from_hr && subDomainName !== "wyh") {
      if (user?.loginType == "doctorDashboard") {
        window.location.href = "https://www.clinic.raphacure.com/Orders";
      } else {
        window.location.href = "https://www.hrms.raphacure.com/Bookings";
      }
    } else {
      history.push(`/dashboard/bookings`);
    }
  };
  const closedWithoutPayment = () => {
    // gotoDashboard();
    showAlertMessage("Payment failed. Please retry from patient dashboard");
    // toast.add({
    //   title: "Payment failed. Please retry from patient dashboard",
    //   color: "red",
    // });
  };

  const getDisplayName = (cName) => {
    if (cName === "pharmacy") {
      return "Medicines";
    } else if (cName === "labtest") {
      return "Lab Test";
    } else if (cName === "eyecare") {
      return "Eye Care";
    } else if (cName === "dentalcare") {
      return "Dental Care";
    } else if (cName === "ctmri") {
      return "CTMRI";
    } else if (cName === "ambulance") {
      return "Ambulance";
    } else if (cName === "gym") {
      return "GYM";
    } else if (cName === "domiciliarycare") {
      return "Domiciliary Care";
    } else if (cName === "doctor") {
      return "Doctor";
    } else {
      return cName;
    }
  };

  // const finaList = myAllSubscriptions?.wallets?.filter(
  //   (ittm) => ittm?.amount > 0
  // );
  // const finaList = myAllSubscriptions?.wallets;
  const disAmm = cartItems?.actual_cost - cartItems?.final_cost;

  const showLocalStorageDetails = useMemo(
    () => (localStorage?.getItem("raphaPrescriptions") ? true : false),
    []
  );
  const sectionName = "pharmacy";
  const isPrescriptionFound = useMemo(() => {
    let isPrescriptionFound = false;
    if (!Array.isArray(cartFinalList)) return isPrescriptionFound;
    cartFinalList?.forEach((item) => {
      item?.products?.forEach((product) => {
        product?.medicines?.forEach((medicine) => {
          if (medicine?.counter_type == "Prescription") {
            isPrescriptionFound = true;
          }
        });
      });
    });
    return isPrescriptionFound;
  }, [JSON.stringify(cartFinalList)]);

  const handleOpenComorbidities = async (id) => {
    setSelectedCartItemId(id);
    setRenderPatientHistoryModal(true);
  };

  useEffect(() => {
    console.log("cartFinalList : ", cartFinalList);
    console.log("allCartItems : ", allCartItems);
  }, [cartFinalList, allCartItems]);

  const handleSavePastMedicalData = (data) => {
    const updatedCarts = allCartItems.carts.map((cart) => {
      if (cart.id === data.id) {
        const formatIssues = (issues) =>
          issues?.map((issue, index) => `${index + 1}. ${issue}`).join("\n") ||
          "";

        return {
          ...cart,
          isCod: false,
          attachmentImages: data.imageUrls || [],
          comments: `
Past Issues :-
${formatIssues(data.pastIssues)}
Present Issues :-
${formatIssues(data.issues)}
    `.trim(),
        };
      }
      return cart;
    });

    const updatedCartItems = {
      ...allCartItems,
      carts: updatedCarts,
    };
    console.log("updatedCartItems : ", updatedCartItems);
    setAllCartItems(updatedCartItems);
  };

  useEffect(() => {
    const isCodAllowed =
      (cartFinalList.length === 1 &&
        (cartFinalList[0].section_key === "pharmacy" ||
          cartFinalList[0].section_key === "labtest")) ||
      (cartFinalList.length === 2 &&
        cartFinalList.some((section) => section.section_key === "pharmacy") &&
        cartFinalList.some((section) => section.section_key === "labtest"));

    setAllowCod(isCodAllowed);
  }, [cartFinalList]);

  return (
    <CheckoutStyled>
      <div>
        <CustomModal
          show={showSuccessMessage}
          titleText={showSuccessMessageText}
          deleteText="Ok"
          cancelText=""
          onDelete={() => {
            setShowSuccessMessage(false);
            handleOrderTracking();
            // history.push("/dashboard/bookings");
          }}
        />
        <CustomModal
          show={showConformMessageModel}
          titleText={showConformMessageModelTest}
          deleteText="Confirm"
          cancelText="Cancel"
          onCancel={() => {
            setShowConformMessageModel(false);
          }}
          onDelete={() => {
            setShowConformMessageModel(false);
            handleRemoveSectionConform();
          }}
        />
        <OrderConformation
          showModal={showConformationModel}
          // titleText={showSuccessMessageText}
          // deleteText="Ok"
          user={user}
          // cancelText=""
          handleOrderTracking={handleOrderTracking}
          paymentObj={paymentObj}
          subDomainDetails={subDomainDetails}
          handleModalShow={() => {
            setShowConformationModel(false);
            handleOrderTracking();
            // history.push("/dashboard/bookings");
          }}
        />
        {isLoading && <Loader />}
        {cartItems?.carts?.length === 0 || !cartItems?.carts?.length ? (
          <div className="no-results-sec">
            <p>No Items found in your cart.</p>
            <button
              onClick={() => {
                history.push("/");
              }}
            >
              Go to home page
            </button>
          </div>
        ) : (
          <div className="cart-full-page checkout-page-design1">
            <div className="cart-top-back">
              <span className="your-cart-sec">
                Your Cart ({cartFinalList?.length})
              </span>
            </div>
            <div className="cart-page-content">
              <div className="cart-content-left ">
                <div className="checkout-items-all">
                  {cartFinalList?.map((item1) => {
                    return (
                      <div className="checkout-item-box">
                        <div className="checkout-item-box-header">
                          <p className="item-box-left">
                            {getDisplayName(item1?.section_key)} (
                            {item1?.products?.length})
                          </p>
                          <p className="item-box-right">
                            {/*<span
                              onClick={() => {
                                handleEditSection(item1?.categoryName);
                              }}
                            >
                               Edit
                            </span>*/}
                          </p>
                        </div>
                        <div className="checkout-item-box-main">
                          {item1?.section_key === "pharmacy" ? (
                            <>
                              <div>
                                <CartItemsSection />
                                <div className="checkout-pha-items-footer">
                                  <div>
                                    <p className="d-paha-name">
                                      Delivering to
                                      {` ${checkoutSelectedUser?.first_name} ${checkoutSelectedUser?.last_name}`}
                                    </p>
                                    <p className="d-paha-address">
                                      {checkoutSelectedAddress?.address}
                                    </p>
                                  </div>
                                  <div>
                                    <span onClick={gotoCartPage}>Change</span>
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : item1?.section_key === "ambulance" ? (
                            <>
                              {item1?.products?.map((item) => {
                                return (
                                  <div className="checkout-item-box-body">
                                    <div className="checkout-box-body-top">
                                      <div className="body-top-left">
                                        <div className="body-top-left-header">
                                          <p className="vir-name-sec-left">
                                            Type: Ambulance
                                          </p>
                                          <div>
                                            <span
                                              className="remove-sec-cont1"
                                              onClick={() => {
                                                handleRemoveSection(item?.id);
                                              }}
                                            >
                                              Remove
                                            </span>
                                          </div>
                                        </div>
                                        <div>
                                          <p className="vir-name-sec-left">
                                            Service Name:{" "}
                                            {item?.service_name ||
                                              item?.test?.service_name}
                                          </p>
                                        </div>
                                        <div className="checkout-name-sec">
                                          <span>Date</span>
                                          <span>
                                            : {item?.collection_1_date}
                                          </span>
                                        </div>
                                        {!hide_price && (
                                          <div className="dr-content-sec-content">
                                            <div className="checkout-name-sec checkout-final-amount-sec checkout-final-amount-sec-ambulance">
                                              <span>Amount</span>
                                              <span>
                                                :<MdOutlineCurrencyRupee />
                                                {item?.price?.actual_cost
                                                  ?.toFixed(2)
                                                  ?.toLocaleString("en-US")}
                                              </span>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </>
                          ) : item1?.section_key === "doctor" ? (
                            <>
                              {item1?.products?.map((item) => {
                                console.log("itemitem : ", item);
                                return (
                                  <div className="checkout-item-box-body">
                                    <div className="checkout-box-body-top">
                                      <div className="body-top-left">
                                        <div className="body-top-left-header">
                                          <p className="vir-name-sec-left">
                                            {item?.type ===
                                            "virtual_consultation"
                                              ? "Virtual Consultation"
                                              : item?.type ===
                                                "opd_consultation"
                                              ? "OPD Consultation"
                                              : item?.doctor?.name ||
                                                item?.test?.service_name}
                                          </p>
                                          <div>
                                            {/* <p>
                                              <img src={group_edit} />
                                            </p> */}
                                            <span
                                              className="remove-sec-cont1"
                                              onClick={() => {
                                                handleRemoveSection(item?.id);
                                              }}
                                            >
                                              Remove
                                            </span>
                                          </div>
                                        </div>
                                        <div className="dr-content-sec-content">
                                          <div className="dr-content-sec-full">
                                            <div className="dr-img 1">
                                              <img
                                                alt=""
                                                src={
                                                  item?.doctorDetails?.image ||
                                                  item?.doctor?.gender ===
                                                    "male"
                                                    ? imageMale
                                                    : imageFemale
                                                }
                                              />
                                            </div>
                                            <div className="dr-content">
                                              <p className="dr-name">
                                                {item?.doctor?.name ||
                                                  item?.doctor?.service_name}
                                              </p>
                                              <p className="dr-caregory">
                                                {item?.doctor?.specialization}
                                              </p>
                                            </div>
                                          </div>
                                          <div className="dr-content-sec-full">
                                            <div className="pat-img">
                                              <img
                                                alt=""
                                                src={
                                                  item?.user?.image ||
                                                  user?.image ||
                                                  group_505
                                                }
                                              />
                                            </div>
                                            <div className="pat-content">
                                              <p className="pat-name">
                                                For{` `}
                                                {item?.user?.relation}
                                              </p>
                                            </div>
                                          </div>
                                          <div className="checkout-name-sec">
                                            <span>Date</span>
                                            <span>
                                              : {item?.collection_1_date}
                                            </span>
                                          </div>
                                          {item?.collection_1_slot && (
                                            <div className="checkout-name-sec">
                                              <span>Time</span>
                                              <span>
                                                : {item?.collection_1_slot}
                                              </span>
                                            </div>
                                          )}
                                          {item?.collection_2_date &&
                                            item?.collection_2_slot && (
                                              <>
                                                <div className="checkout-name-sec">
                                                  <span>Date</span>
                                                  <span>
                                                    : {item?.collection_2_date}
                                                  </span>
                                                </div>
                                                {item?.collection_2_slot && (
                                                  <div className="checkout-name-sec">
                                                    <span>Time</span>
                                                    <span>
                                                      :{" "}
                                                      {item?.collection_2_slot}
                                                    </span>
                                                  </div>
                                                )}
                                              </>
                                            )}
                                          {!hide_price && (
                                            <div className="checkout-name-sec checkout-final-amount-sec">
                                              <span>Amount</span>
                                              <span>
                                                :<MdOutlineCurrencyRupee />
                                                {item?.price?.actual_cost
                                                  ?.toFixed(2)
                                                  ?.toLocaleString("en-US")}
                                              </span>
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </>
                          ) : item1?.section_key === "labtest" ? (
                            <>
                              {item1?.products.map((item) => {
                                return (
                                  <div className="checkout-item-box-body">
                                    <div className="checkout-box-body-top">
                                      <div className="body-top-left">
                                        <div className="body-top-left-header">
                                          <p className="vir-name-sec-left">
                                            {item?.vendor?.name}
                                            {", "}
                                            {item?.vendor?.city}
                                          </p>
                                          <div>
                                            {/* <p>
                                              <img src={group_edit} />{" "}
                                            </p> */}
                                            <span
                                              className="remove-sec-cont1"
                                              onClick={() => {
                                                handleRemoveSection(item?.id);
                                              }}
                                            >
                                              Remove
                                            </span>
                                          </div>
                                        </div>
                                        <div className="dr-content-sec-content">
                                          <div className="dr-content-sec-list">
                                            {item?.type ===
                                              "package_booking" && (
                                              <div className="dr-content-sec-full">
                                                <div className="dr-img">
                                                  <img
                                                    src={
                                                      item?.package?.image ??
                                                      "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736494444858.png"
                                                    }
                                                    alt={
                                                      item?.package
                                                        ?.service_name
                                                    }
                                                  />
                                                </div>
                                                <div className="dr-content">
                                                  <p className="dr-name">
                                                    {
                                                      item?.package
                                                        ?.service_name
                                                    }
                                                  </p>
                                                  <p className="dr-caregory">
                                                    {
                                                      item?.package
                                                        ?.service_code
                                                    }
                                                  </p>
                                                </div>
                                              </div>
                                            )}
                                            {item.tests &&
                                              item.tests.length > 0 &&
                                              item.tests.map((Ddetail) => {
                                                return (
                                                  <div className="dr-content-sec-full">
                                                    <div className="dr-img">
                                                      <img
                                                        src={
                                                          Ddetail?.image ??
                                                          "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736494444858.png"
                                                        }
                                                        alt={
                                                          Ddetail?.service_name
                                                        }
                                                      />
                                                    </div>
                                                    <div className="dr-content">
                                                      <p className="dr-name">
                                                        {Ddetail?.service_name}
                                                      </p>
                                                      <p className="dr-caregory">
                                                        {Ddetail?.service_code}
                                                      </p>
                                                    </div>
                                                  </div>
                                                );
                                              })}
                                          </div>
                                          <div className="dr-content-sec-full">
                                            <div className="pat-img">
                                              <img src={group_505} />
                                            </div>
                                            <div className="pat-content">
                                              <p className="pat-name">
                                                For {item?.user?.relation}
                                              </p>
                                            </div>
                                          </div>
                                          <div className="checkout-name-sec">
                                            <span>Date</span>{" "}
                                            <span>
                                              : {item?.collection_1_date}
                                            </span>
                                          </div>
                                          {item?.collection_1_slot && (
                                            <div className="checkout-name-sec">
                                              <span>Time</span>{" "}
                                              <span>
                                                : {item?.collection_1_slot}
                                              </span>
                                            </div>
                                          )}
                                          {item?.collection_2_date &&
                                            item?.collection_2_slot && (
                                              <>
                                                <div className="checkout-name-sec">
                                                  <span>Date</span>{" "}
                                                  <span>
                                                    : {item?.collection_2_date}
                                                  </span>
                                                </div>
                                                {item?.collection_2_slot && (
                                                  <div className="checkout-name-sec">
                                                    <span>Time</span>{" "}
                                                    <span>
                                                      :{" "}
                                                      {item?.collection_2_slot}
                                                    </span>
                                                  </div>
                                                )}
                                              </>
                                            )}
                                          {!hide_price && (
                                            <div className="checkout-name-sec checkout-final-amount-sec">
                                              <span>Amount</span>{" "}
                                              <span>
                                                :<MdOutlineCurrencyRupee />
                                                {item?.price?.actual_cost
                                                  ?.toFixed(2)
                                                  ?.toLocaleString("en-US")}
                                              </span>
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </>
                          ) : (
                            <>
                              {item1?.products?.map((item) => {
                                console.log("itemitemitem products", item);
                                const isApplyDiscount =
                                  item.patientsDetails?.relation === "Self"
                                    ? true
                                    : item.doctorDetails?.price
                                        ?.discount_for_dependents
                                    ? true
                                    : false;
                                const proceDisplay = isApplyDiscount
                                  ? item?.doctorDetails?.price?.discounted_price
                                  : item?.doctorDetails?.price?.actual_cost ||
                                    item?.price?.actual_cost;

                                return (
                                  <div className="checkout-item-box-body">
                                    <div className="checkout-box-body-top">
                                      <div className="body-top-left">
                                        <div className="body-top-left-header">
                                          <p className="vir-name-sec-left">
                                            {item?.doctor?.name ||
                                              item?.test?.service_name}
                                          </p>
                                          <div>
                                            {/* <p>
                                              <img src={group_edit} />
                                            </p> */}
                                            <span
                                              className="remove-sec-cont1"
                                              onClick={() => {
                                                handleRemoveSection(item?.id);
                                              }}
                                            >
                                              Remove
                                            </span>
                                          </div>
                                        </div>
                                        <div className="dr-content-sec-content">
                                          <div className="dr-content-sec-full">
                                            <div className="dr-img">
                                              <img
                                                src={
                                                  item?.doctor?.image ||
                                                  ellipse1
                                                }
                                              />
                                            </div>
                                            <div className="dr-content">
                                              <p className="dr-name">
                                                {item?.doctor?.name ||
                                                  item?.test?.service_name}
                                              </p>
                                              <p className="dr-caregory">
                                                {
                                                  item?.doctorDetails
                                                    ?.specialization
                                                }
                                              </p>
                                            </div>
                                          </div>
                                          <div className="dr-content-sec-full">
                                            <div className="pat-img">
                                              <img
                                                src={
                                                  item?.user?.image || group_505
                                                }
                                              />
                                            </div>
                                            <div className="pat-content">
                                              <p className="pat-name">
                                                For{` `}
                                                {item?.user?.relation}
                                              </p>
                                            </div>
                                          </div>
                                          <div className="checkout-name-sec">
                                            <span>Date</span>
                                            <span>
                                              : {item?.collection_1_date}
                                            </span>
                                          </div>
                                          {item?.collection_1_slot && (
                                            <div className="checkout-name-sec">
                                              <span>Time</span>
                                              <span>
                                                : {item?.collection_1_slot}
                                              </span>
                                            </div>
                                          )}
                                          {item?.collection_1_date &&
                                            item?.collection_2_slot && (
                                              <>
                                                <div className="checkout-name-sec">
                                                  <span>Date</span>
                                                  <span>
                                                    : {item?.collection_1_date}
                                                  </span>
                                                </div>
                                                {item?.collection_2_slot && (
                                                  <div className="checkout-name-sec">
                                                    <span>Time</span>
                                                    <span>
                                                      :{" "}
                                                      {item?.collection_2_slot}
                                                    </span>
                                                  </div>
                                                )}
                                              </>
                                            )}
                                          {!hide_price && (
                                            <div className="checkout-name-sec checkout-final-amount-sec">
                                              <span>Amount </span>
                                              <span>
                                                :<MdOutlineCurrencyRupee />
                                                {item?.price?.actual_cost
                                                  ?.toFixed(2)
                                                  ?.toLocaleString("en-US")}
                                              </span>
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </>
                          )}
                          {(item1?.section_key === "pharmacy" ||
                            item1?.section_key === "doctor" ||
                            item1?.section_key === "labtest") && (
                            <Button
                              className="medRecords"
                              onClick={() => {
                                if (
                                  item1?.products &&
                                  item1.products.length > 0
                                ) {
                                  handleOpenComorbidities(item1.products[0].id);
                                } else {
                                  console.error(
                                    "No products available to add past medical history."
                                  );
                                }
                              }}
                            >
                              Enter Medical Records
                            </Button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="cart-content-right ">
                <div className="sec-right-content-box">
                  <h3>Billing Details</h3>
                  <div className="billing-details-sec">
                    {cartFinalList?.map((item1) => {
                      let totalamount = 0;
                      item1?.products?.map((itemA1) => {
                        // if (item1?.section_key === "pharmacy") {
                        //   totalamount = itemA1?.price?.actual_cost;
                        // } else if (item1?.section_key === "ambulance") {
                        //   totalamount =
                        //     itemA1?.price?.actual_cost + totalamount;
                        // } else if (item1?.section_key === "doctor") {
                        //   let totaltempamount = 0;
                        //   if (itemA1?.consultationType === "OPD")
                        //     totaltempamount =
                        //       itemA1?.doctorDetails?.consultation_cost || 0;
                        //   else if (itemA1?.consultationType === "CHAT")
                        //     totaltempamount =
                        //       itemA1?.doctorDetails?.chat_consultation_cost ||
                        //       0;
                        //   else
                        //     totaltempamount =
                        //       itemA1?.doctorDetails
                        //         ?.virtual_consultation_cost || 0;
                        //   totalamount = totaltempamount + totalamount;
                        // } else {
                        //   var totaltempamount =
                        //     itemA1?.doctorDetails?.price?.actual_cost;
                        //   totalamount = totaltempamount + totalamount;
                        // }
                        totalamount = itemA1?.price?.actual_cost + totalamount;
                      });
                      // const itmsCount = item1?.products?.length;
                      const itmsCount = item1?.products?.length;
                      return (
                        <p>
                          <span>
                            {getDisplayName(item1?.section_key)} ({itmsCount}
                            {itmsCount === 1 ? " Item" : " Items"})
                          </span>
                          <span>
                            ₹{" "}
                            {hide_price
                              ? "0.00"
                              : totalamount?.toFixed(2).toLocaleString("en-US")}
                          </span>
                        </p>
                      );
                    })}
                    {cartItems?.instant_booking_fees > 0 && (
                      <p className="tot-amt-expressbook">
                        <span>Express Booking Fees</span>
                        <span>
                          ₹
                          {cartItems?.instant_booking_fees
                            ?.toFixed(2)
                            .toLocaleString("en-US")}
                        </span>
                      </p>
                    )}
                    <p className="tot-amt-pmt">
                      <span>Total Amount</span>
                      <span>
                        ₹
                        {hide_price
                          ? "0.00"
                          : cartItems?.actual_cost
                              ?.toFixed(2)
                              .toLocaleString("en-US")}
                      </span>
                    </p>
                    {!hide_price && (
                      <p className="final-dis-pmt">
                        <span>RaphaCure Discount</span>
                        <span>
                          - ₹{disAmm?.toFixed(2).toLocaleString("en-US")}
                        </span>
                      </p>
                    )}

                    {cartItems?.platform_fees > 0 && (
                      <p className="tot-amt-pmt">
                        <span>Platform Fees</span>
                        <span>
                          ₹
                          {cartItems?.platform_fees
                            ?.toFixed(2)
                            .toLocaleString("en-US")}
                        </span>
                      </p>
                    )}
                    {hasPharmacyItem && (
                      <>
                        <p className="final-dis-pmt">
                          <span>Shipping Charges</span>
                          <span>- ₹0</span>
                        </p>
                        <p className="final-pmt">
                          <span>Final Payment Amount</span>
                          <span>
                            ₹
                            {cartItems?.final_cost
                              ?.toFixed(2)
                              .toLocaleString("en-US")}
                          </span>
                        </p>
                      </>
                    )}
                  </div>
                </div>
                {/* <div className="coupon-sec-checkout space-between d-flex">
                <div>
                  <p>Apply Coupon</p>
                  <p>check available offers</p>
                </div>
                <div> {`->`}</div>
              </div> */}
                {cartItems?.wallets?.length > 0 && (
                  <>
                    <div className="sec-right-content-box wallet-sec-cont">
                      <h3>Avaiable Wallets</h3>
                      <div className="billing-details-sec">
                        {cartItems?.wallets?.map((itemd) => {
                          return (
                            <p>
                              <span>{itemd?.name}</span>
                              <span>
                                {itemd?.amount ? (
                                  <>
                                    <span> ₹{itemd?.amount}</span>
                                    {/* <input
                                      type="checkbox"
                                      className="wallet_checbox_box"
                                      onChange={(e) => {
                                        handleSlectWallet(e, itemd);
                                      }}
                                    /> */}
                                  </>
                                ) : (
                                  <>
                                    {itemd?.discount_percentage && (
                                      <> {itemd?.discount_percentage}%</>
                                    )}
                                  </>
                                )}
                              </span>
                            </p>
                          );
                        })}
                      </div>
                    </div>
                    {/* <div className="billing-details-sec">
                      <p className="final-pmt">
                        <span>Wallet Discount Amount</span>
                        <span>
                          ₹
                          {(finalAmount - finalPayAmount)
                            ?.toFixed(2)
                            .toLocaleString("en-US")}
                        </span>
                      </p>
                    </div>
                    <br /> */}
                  </>
                )}
                {errorMessage && (
                  <div>
                    <p className="error_message"> {errorMessage}</p>
                  </div>
                )}
                <div className="checkout-pay-buttom-cont">
                  {cartItems?.final_cost < 1 ? (
                    <>
                      <div className="checkout-pay-buttom checkout-btn-blue">
                        <button onClick={() => handlePayNow("")}>
                          Create Booking
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      {isPrescriptionFound && !showLocalStorageDetails && (
                        <div className="checkout-pay-buttom checkout-btn-yallow">
                          <button
                            className="btn"
                            onClick={() =>
                              history.push(
                                "/uploadprescription/uploadsubprescription",
                                sectionName
                              )
                            }
                          >
                            Upload a Prescription
                          </button>
                        </div>
                      )}
                      {(showLocalStorageDetails || !isPrescriptionFound) && (
                        <>
                          <div className="checkout-pay-buttom checkout-btn-blue">
                            <button onClick={() => handlePayNow("")}>
                              Pay with Razorpay ₹{" "}
                              {cartItems?.final_cost
                                ?.toFixed(2)
                                .toLocaleString("en-US")}
                            </button>
                          </div>
                          {!isRaphaPlus && (
                            <div className="checkout-pay-buttom">
                              <button onClick={() => handlePayNow("phonePe")}>
                                Pay with PhonePe ₹{" "}
                                {cartItems?.final_cost
                                  ?.toFixed(2)
                                  .toLocaleString("en-US")}
                              </button>
                            </div>
                          )}
                          <div className="checkout-pay-buttom checkout-btn-green">
                            <button
                              onClick={() => handlePayNow("", true)}
                              disabled={!allowCod}
                            >
                              Cash On Delivery
                            </button>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>
                {hasPharmacyItem && (
                  <div className="delivery-time">
                    <h2>
                      Get It Delivered by{" "}
                      <span className="time-delivery">-pm, Today</span>
                    </h2>
                    <p>Delivering to (pincode), (place)</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <Comorbidities
          show={renderPatientHistoryModal}
          onClose={() => setRenderPatientHistoryModal(false)}
          handleSavePastData={(data) => {
            handleSavePastMedicalData(data);
          }}
          selectedCartItemId={selectedCartItemId}
        />
      </div>
    </CheckoutStyled>
  );
};

export default Checkout;
