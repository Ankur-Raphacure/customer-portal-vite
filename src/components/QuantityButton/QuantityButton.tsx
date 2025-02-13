import React from "react";
import { useState } from "react";
import { BlobServiceClient } from "@azure/storage-blob";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { QuantityButtonStyled } from "./QuantityButton.styled";
import minus_icon from "../../assets/minus1.png";
import icons8_delete from "../../assets/icons8-delete-32.png";
import add_icon from "../../assets/add.png";
import Loader from "./../../components/Common/Loader";
import { getAttachmentIds } from "../../Scenes/common";

import {
  updateItemQuantity,
  handleRemoveItem,
} from "../../redux/slices/checkout/checkoutSlice";
import { updateShowLoginModel } from "../../redux/slices/auth/authSlice";
import {
  deleteCartItemAPI,
  getCartItemsAPI,
  handleAddToCartAPI,
} from "../../redux/slices/checkout/checkoutService";

const QuantityButton = (props: any) => {
  const { item, index } = props;
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);
  const { cartItems } = useSelector((ReduxState: any) => ReduxState.checkout);
  console.log("cartItems", cartItems);
  console.log("index", index);
  const pProducts = cartItems?.carts?.find(
    (itemv: any) => itemv?.section_key === "pharmacy",
  );
  console.log("pProducts", pProducts);
  const curentItem = pProducts?.medicines?.find(
    (itemv: any) => itemv?.service_code === item.service_code,
  ); //cartItems[index];
  console.log("curentItem", curentItem);

  const addToCartAdd = (itemR: any) => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      updateItemQuantity1({ ...itemR, count: itemR?.count + 1 });
    }
  };
  const addToCartMinus = async (itemR: any) => {
    if (itemR?.count > 1) {
      if (!user?.id) {
        dispatch(updateShowLoginModel(true));
      } else {
        updateItemQuantity1({ ...itemR, count: itemR?.count - 1 });
      }
    } else {
      if (pProducts?.id) {
        setIsLoading(true);
        const newitebb = `${pProducts?.id}?service_code=${itemR?.service_code}`;
        await dispatch(deleteCartItemAPI(newitebb));
        await dispatch(getCartItemsAPI());
        setIsLoading(false);
      }
      // dispatch(handleRemoveItem(itemR));
    }
  };
  const updateItemQuantity1 = async (itemR: any) => {
    console.log("item2", itemR);
    const medC = [{ service_code: itemR?.service_code, count: itemR?.count }];
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
    setIsLoading(true);
    await dispatch(handleAddToCartAPI(body1));
    await dispatch(getCartItemsAPI());
    setIsLoading(false);
  };
  const fromCartPage = item?.count ? true : false;
  const item1 = fromCartPage ? item : curentItem;
  console.log(item1, "item1");

  return (
    <QuantityButtonStyled>
      <div className="cart-update-quantity-sec">
        {isLoading && <Loader />}
        <span
          onClick={() => {
            addToCartMinus(item1);
          }}
          className="minus-quantity"
        >
          <img
            alt="Image"
            className={`delete_image_no ${item1?.count}`}
            src={item1?.count == "1" ? icons8_delete : minus_icon}
          />
        </span>
        <span className="current-quantity">{item1?.count}</span>
        <span
          onClick={() => {
            addToCartAdd(item1);
          }}
          className="plus-quantity"
        >
          <img alt="Image" src={add_icon} />
        </span>
      </div>
    </QuantityButtonStyled>
  );
};

export default QuantityButton;
