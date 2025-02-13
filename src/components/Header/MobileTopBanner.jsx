import { MdKeyboardArrowDown } from "react-icons/md";
import "./mobileTopBanner.css";
import SearchByTextModule from "../../pages/Pharmacy/SearchByTextModule";
import { pharmacySearchTextChange } from "../../pages/Pharmacy/PharmacyObjectsModule";
import HeaderAddress from "../HeaderAddress/HeaderAddress";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { updateShowAddressSearchModel } from "../../redux/slices/auth/authSlice";
import { IoCloseOutline } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import { updateShowLoginModel } from "../../redux/slices/auth/authSlice";
import LoginModel from "../LoginModel/LoginModel";
import SearchComponent from "./../../pages/Home/SearchComponent";
import { getFormatedAddress } from "../../Scenes/common";
import { checkIsMobile } from "../../Scenes/common";

import { getMyAddressQueryAPI } from "../../redux/slices/Profile/ProfileService";
const MobileTopBanner = (props) => {
  const {
    debouncedSearch1,
    searchText,
    searchedData,
    showSearchPopupModel,
    parameter,
    sectionName,
    sectionImg,
    pathName,
  } = props;

  const dispatch = useDispatch();
  const history = useHistory();
  const isMobile = checkIsMobile();
  const [selectedAddress, setSelectedAddress] = useState({});
  const [showLoginPopupModel, setShowLoginPopupModel] = useState(false);
  const [location, setLocation] = useState(false);

  const { user, subDomainDetails } = useSelector(
    (ReduxState) => ReduxState.auth,
  );
  const { selectedCurrentAddress } = useSelector(
    (ReduxState) => ReduxState.profile,
  );
  const selectSavedAddress = (addss) => {
    setSelectedAddress(addss);
  };
  const openAddressModel = () => {
    dispatch(updateShowAddressSearchModel(true));
  };

  const handleEditUser = (userInfo) => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      history.push("/dashboard");
    }
  };
  console.log("subDomainDetails", subDomainDetails?.background_color);
  return (
    <div
      style={
        subDomainDetails?.background_color
          ? { background: subDomainDetails?.background_color }
          : null
      }
      className={
        pathName !== "common" ? `banner-main-div` : `banner-common-main-div`
      }
    >
      <div
        className={
          pathName !== "common"
            ? `banner-profile-div`
            : `banner-common-profile-div`
        }
      >
        <div className="banner-profile-icon">
          <img
            src={
              "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1738228321143.png"
            }
            alt="user"
            onClick={() => openAddressModel()}
          />
          <div
            className="banner-profile-title mobile-top-add-sec-content ms-2"
            onClick={() => openAddressModel()}
          >
            <p className="banner-profile-name">Select Address</p>
            <p className="selected-addres-sec-con">
              {getFormatedAddress(selectedCurrentAddress, false)}
            </p>
          </div>
        </div>
        <div className="banner-profile-image" onClick={() => handleEditUser()}>
          <img
            src={
              user?.image ||
              "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1738228709246.png"
            }
            alt=""
          />
        </div>
      </div>

      {pathName !== "common" && <SearchComponent />}

      <div className="mobile-content-div">
        {sectionName == "pharmacy" ||
        sectionName == "ctmri" ||
        sectionName == "labtest" ? (
          <p className="section-parameter">{parameter}</p>
        ) : (
          <p>{parameter}</p>
        )}
        <img src={sectionImg} alt="" />
      </div>
    </div>
  );
};
export default MobileTopBanner;
