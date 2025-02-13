import { useHistory } from "react-router-dom";
import "./mobileTopBanner.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Alert, Button, Offcanvas } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import LoginModel from "../LoginModel/LoginModel";
import { MdKeyboardArrowDown } from "react-icons/md";
import HeaderAddress from "../HeaderAddress/HeaderAddress";
import {
  updateShowLoginModel,
  updateShowAddressSearchModel,
} from "../../redux/slices/auth/authSlice";
import { useDispatch } from "react-redux";
import { getFormatedAddress } from "../../Scenes/common";
import { IoArrowBack } from "react-icons/io5";

const MobileHeader = (props) => {
  const { pathName, sectionName } = props;
  const history = useHistory();
  const { user, showLoginModel } = useSelector((ReduxState) => ReduxState.auth);
  const { userAddress, selectedCurrentAddress } = useSelector(
    (ReduxState) => ReduxState.profile
  );

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const [selectedAddress, setSelectedAddress] = useState({});
  const [showLoginPopupModel, setShowLoginPopupModel] = useState(false);
  console.log("showLoginModel", showLoginModel);
  console.log("mobilepathName", pathName);

  const navBarMoreData = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Pharmacy",
      path: "/pharmacy",
    },
    {
      name: "Lab Test",
      path: "/labtest",
    },
    {
      name: "Cart",
      path: "/cart",
    },
    {
      name: "Doctor Consult",
      path: "/doctor",
    },
    {
      name: "Radiology",
      path: "/radiology",
    },
    {
      name: "Ambulance",
      path: "/ambulance",
    },
    {
      name: "Gymlist",
      path: "/Gymlist",
    },
    {
      name: "Womenscare",
      path: "/womenscare",
    },
    {
      name: "Eyecare",
      path: "/eyecare",
    },
    {
      name: "Dentalcare",
      path: "/dentalcare",
    },
    {
      name: "Mentalwellness",
      path: "/mentalwellness",
    },
    {
      name: "Ayurveda",
      path: "/ayurveda",
    },
    {
      name: "DomiciliaryCare",
      path: "/domiciliaryCare",
    },
    {
      name: "Bloodbank",
      path: "/bloodbank",
    },
  ];

  const handletoNavigate = (url) => {
    history.push(url);
  };
  const handleLogin = () => {
    dispatch(updateShowLoginModel(true));
  };
  const showAddressModel = () => {
    dispatch(updateShowAddressSearchModel(true));
  };

  const handleEditUser = (userInfo) => {
    if (!user?.id) {
      handleLogin();
    } else {
      history.push("/dashboard");
    }
  };
  return (
    <>
      <div className="sort-filter-container-header">
        <div className="mobile-header">
          <>
            <div
              className={
                pathName !== "common"
                  ? `mobile-header-profile-div`
                  : `banner-common-profile-div`
              }
            >
              <div className="banner-profile-icon">
                <img
                  src={
                    "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1738228321143.png"
                  }
                  alt="user"
                  onClick={() => showAddressModel()}
                />
                <div
                  className="banner-profile-title mobile-top-add-sec-content ms-2"
                  onClick={() => showAddressModel()}
                >
                  <p className="banner-profile-name">Select Address</p>
                  <p className="selected-addres-sec-con">
                    {getFormatedAddress(selectedCurrentAddress, false)}
                  </p>
                </div>
              </div>
              <div
                className="banner-profile-image"
                onClick={() => handleEditUser()}
              >
                <img
                  src={
                    user?.image ||
                    "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1738228709246.png"
                  }
                  alt=""
                />
              </div>
            </div>
          </>

          {/* // )} */}
          {sectionName == "detailPage" && (
            <button className="btn" onClick={() => history.push(pathName)}>
              <IoArrowBackOutline />
            </button>
          )}
          {sectionName == "detailPage" && (
            <button className="btn" onClick={handleShow}>
              <AiOutlineMenuFold />
            </button>
          )}
        </div>
      </div>

      <Offcanvas
        placement="end"
        show={show}
        onHide={handleClose}
        responsive="lg"
      >
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          {navBarMoreData?.map((item) => {
            return (
              <div>
                <p
                  className="mb-0"
                  onClick={() => handletoNavigate(item?.path)}
                >
                  {item?.name}
                </p>
              </div>
            );
          })}
          <div className="login-btn-div">
            {!user?.id ? (
              <p className="banner-profile-name" onClick={() => handleLogin()}>
                Login
              </p>
            ) : (
              <div className="banner-profile-img">
                <img
                  src={
                    user?.image ||
                    "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1738228709246.png"
                  }
                  alt=""
                />
              </div>
            )}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default MobileHeader;
