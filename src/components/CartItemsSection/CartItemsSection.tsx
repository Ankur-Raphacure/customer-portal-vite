import React from "react";
import { useState } from "react";
import { BlobServiceClient } from "@azure/storage-blob";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CartItemsSectionStyled } from "./CartItemsSection.styled";
import group_505 from "../../assets/lego-figure-with-purple-shirt-purple-shirt-with-tie-it 1.png";
import minus_icon from "../../assets/minus1.png";
import add_icon from "../../assets/add.png";
import Select from "react-select";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import {
  updateItemQuantity,
  handleRemoveItem,
  updateNitifySuccessMessage,
} from "../../redux/slices/checkout/checkoutSlice";
import {
  deleteCartItemAPI,
  getCartItemsAPI,
} from "../../redux/slices/checkout/checkoutService";
import { updateShowLoginModel } from "../../redux/slices/auth/authSlice";
import QuantityButton from "./../QuantityButton/QuantityButton";
import CustomModal from "../CustomModel";
import Loader from "../Loader/Loader";
const CartItemsSection = () => {
  const [file, setFile] = useState(null);
  const [addressEnabled, setAddressEnabled] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);
  const { cartItems } = useSelector((ReduxState: any) => ReduxState.checkout);
  const [showConformMessageModel, setShowConformMessageModel] =
    useState<boolean>();
  const [showConformMessageModelTest, setShowConformMessageModelTest] =
    useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [removingItem, setRemovingItem] = useState<any>();
  const pProducts =
    cartItems?.carts?.find((itemv: any) => itemv?.section_key === "pharmacy") ??
    [];

  const paharmacyProducts = cartItems?.carts?.filter(
    (itemV: any) => itemV.medicines?.length > 0
  );
  // console.log("cartItems", cartItems);
  // const addToCartAdd = (itemR: any) => {
  //   if (!user?.id) {
  //     dispatch(updateShowLoginModel(true));
  //   } else {
  //     dispatch(updateItemQuantity({ ...itemR, count: itemR?.count + 1 }));
  //   }
  // };
  // const addToCartMinus = (itemR: any) => {
  //   if (itemR?.count > 1) {
  //     if (!user?.id) {
  //       dispatch(updateShowLoginModel(true));
  //     } else {
  //       dispatch(updateItemQuantity({ ...itemR, count: itemR?.count - 1 }));
  //     }
  //   } else {
  //     // dispatch(updateNitifySuccessMessage(`Minimum 1 quantity is required`));
  //   }
  // };

  // const handleRemove = async (itemR: any) => {
  //   if (itemR?.id) {
  //     await dispatch(deleteCartItemAPI(itemR?.id));
  //     await dispatch(getCartItemsAPI());
  //   }
  // };

  const handleRemoveSectionConform = async () => {
    const itemR = removingItem;

    if (itemR?.count > 1) {
      if (!user?.id) {
        dispatch(updateShowLoginModel(true));
      } else {
        if (pProducts?.id) {
          setShowConformMessageModel(true);
          const newitebb = `${pProducts?.id}?service_code=${itemR?.service_code}`;
          setIsLoading(true);
          await dispatch(deleteCartItemAPI(newitebb));
          await dispatch(getCartItemsAPI());
          setShowConformMessageModel(false);
          setIsLoading(false);
        }
      }
    } else if (itemR?.count === 1) {
      if (pProducts?.id) {
        const newitebb = `${pProducts?.id}?service_code=${itemR?.service_code}`;
        setIsLoading(true);
        await dispatch(deleteCartItemAPI(newitebb));
        await dispatch(getCartItemsAPI());
        setIsLoading(false);
      }
    }
  };

  console.log(pProducts, "pProducts");

  const totalPrice = () => {
    let totalamount = 0;
    pProducts?.medicines?.map((item1: any) => {
      totalamount = item1?.price?.discounted_price * item1?.count + totalamount;
    });
    return totalamount;
  };

  return (
    <CartItemsSectionStyled>
      {isLoading && <Loader />}
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
      <div className="cart-items-list">
        {pProducts?.medicines?.map((item: any) => {
          return (
            <div className="cart-item-box">
              <div>
                <p className="item-name">
                  <img src={item.image[0]} />
                  <span>{item?.service_name}</span>
                </p>
                <p className="item-type">{item?.unit}</p>
                <p className="item-remove">
                  <span
                    onClick={() => {
                      setRemovingItem(item);
                      setShowConformMessageModel(true);
                      setShowConformMessageModelTest(
                        `Are you sure, Do you want to delete ${item?.service_name} Section?`
                      );
                    }}
                  >
                    Remove
                  </span>
                </p>
              </div>
              <div>
                <p className="item-total-price">
                  <MdOutlineCurrencyRupee />
                  {item?.price?.discounted_price * item?.count}.00
                </p>
                <p className="item-total-per-price">
                  <MdOutlineCurrencyRupee />
                  {item?.price?.discounted_price}.00 / <span>each</span>
                </p>
                <QuantityButton item={item} />
                {/* <div className="cart-update-quantity-sec">
                  <span
                    onClick={() => {
                      addToCartMinus(item);
                    }}
                    className="minus-quantity"
                  >
                    <img src={minus_icon} />
                  </span>
                  <span className="current-quantity">{item?.count}</span>
                  <span
                    onClick={() => {
                      addToCartAdd(item);
                    }}
                    className="plus-quantity"
                  >
                    <img src={add_icon} />
                  </span>
                </div> */}
              </div>
            </div>
          );
        })}
        <div className="total-price-sec">
          <p className="total-amount-total">Total Amount</p>
          <p className="total-amount-num">
            <MdOutlineCurrencyRupee /> {totalPrice()}
          </p>
        </div>
      </div>
    </CartItemsSectionStyled>
  );
};

export default CartItemsSection;
