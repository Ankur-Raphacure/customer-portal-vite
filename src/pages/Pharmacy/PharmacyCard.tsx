import React from "react";
import { useState } from "react";
import { BlobServiceClient } from "@azure/storage-blob";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import QuantityButton from "../../components/QuantityButton/QuantityButton";
const PharmacyCard = (props: any) => {
  const { mostOrdersSection, item, addToCart, isAddedtoCart, type } = props;
  const [file, setFile] = useState(null);
  const [addressEnabled, setAddressEnabled] = useState(false);
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);
  const history = useHistory();
  const dispatch = useDispatch();
  const navigateToselectedlabdetail = () => {};
  const handleChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  return (
    // <PharmacyStyled>
    <div className="pharmacy-card-box">
      <div className="pharmacy-box-top">
        <img
          alt="Image"
          src={item?.image}
          className="itemImg"
          onClick={() => history.push(`/item/${type}/${item.service_code}`)}
        />
      </div>
      <div className="pharmacy-box-bottom">
        <div className="pharmacy-box-price-sex">
          <p className="name">{item?.service_name}.</p>
          <p className="price">
            <svg
              width="9"
              height="14"
              viewBox="0 0 9 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M0.818182 0H9L8.18182 1.55556H5.51454C5.90727 2.00667 6.20182 2.53556 6.37364 3.11111H9L8.18182 4.66667H6.54545C6.44378 5.63627 6.00061 6.5448 5.28779 7.24501C4.57496 7.94522 3.63427 8.39606 2.61818 8.52444V8.55556H2.04545L6.95455 14H4.90909L0 8.55556V7H2.04545C3.48545 7 4.68 5.98889 4.87636 4.66667H0L0.818182 3.11111H4.63091C4.17273 2.19333 3.19091 1.55556 2.04545 1.55556H0L0.818182 0Z"
                fill="black"
              />
            </svg>{" "}
            {item?.price?.discounted_price}.00
          </p>
        </div>
        <div className="pharmacy-box-button-sec">
          <div className="p-button-sec-left">
            <p className="caregory-key-name">{item?.category_key} Medicine</p>
            <p>{item?.unit}</p>
          </div>
          <div className="p-button-sec-right">
            {!isAddedtoCart?.service_code ? (
              <button
                onClick={() => {
                  addToCart(item);
                }}
              >
                ADD
              </button>
            ) : (
              <QuantityButton index={isAddedtoCart} item={item} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmacyCard;
