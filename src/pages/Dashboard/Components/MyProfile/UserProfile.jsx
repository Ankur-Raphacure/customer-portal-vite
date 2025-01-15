import React, { useEffect, useState } from "react";

import { Row, Col, Button, Form } from "react-bootstrap";
import "./styles.css";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { getStoreDetails } from "./../../../../redux/slices/auth/authService";
import {
  getStoreDetails,
  updateUserDetails,
} from "../../../../redux/slices/auth/authService";
// import { updateIsParentSiteOnly } from "../../../../redux/slices/auth/authSlice";
import { GOOGLE_MAP_URL } from "../../../../config";
import Loader from "../../../../components/Common/Loader";
import CustomModal from "../../../../components/CustomModel";
// import { triggerMixpanelEvent } from "../../Scenes/common";
// import Switch from "react-switch";
// import { checkIsParentsPortalOnly } from "../../Scenes/common";

// const initVal = {
//   firstName: undefined,
//   lastName: undefined,
//   phoneNumber: undefined,
//   email: undefined,
//   companyName: undefined,
//   GSTNo: undefined,
//   officeNo: undefined,
//   officeEmail: undefined,
//   PANNo: undefined,
//   companyRegNo: undefined,
//   city: undefined,
// };
const initVal = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  companyName: "Focus Next ",
  GSTNo: "",
  officeNo: "",
  officeEmail: "",
  PANNo: undefined,
  companyRegNo: undefined,
  city: "",
};

const initValError = {
  storeName: undefined,
  storeEmail: undefined,
  storeMobileNo: undefined,
  address: undefined,
  firstName: undefined,
  // mobileNumber: undefined,
  email: undefined,
};
const initValError1 = {
  firstName: undefined,
  lastName: undefined,
  // storeMobileNo: undefined,
  // address: undefined,
  // firstName: undefined,
  // mobileNumber: undefined,
  email: undefined,
};
const UserProfile = () => {
  const [signUpData, setSignUpData] = useState(initVal);
  const [errorData, setErrorData] = useState(initValError);
  const [isLoading, setIsLoading] = useState(false);
  const [siteSwitchState, setSiteSwitchState] = useState(true);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { error, loading, user, loginStoreDetails, isParentSite } = useSelector(
    ({ auth }) => auth
  );
  const sDetails = loginStoreDetails;
  const [isProfileEdit, setIsProfileEdit] = useState(true);
  console.log("user", user);
  console.log("isParentSite", isParentSite);
  console.log("loginStoreDetails", loginStoreDetails);
  useEffect(() => {
    // dispatch(getStoreDetails(user?._id));
  }, []);
  useEffect(() => {
    setSiteSwitchState(true);
  }, []);

  useEffect(() => {
    if (user?._id) {
      // dispatch(getStoreDetails(user?._id));
    }
  }, [user?._id]);
  useEffect(() => {
    const initVal = {
      firstName: loginStoreDetails?.firstName,
      lastName: loginStoreDetails?.lastName,
      mobileNumber: loginStoreDetails?.mobileNumber,
      email: loginStoreDetails?.email,
      address: loginStoreDetails?.address,
      address1: loginStoreDetails?.address1,
      address2: loginStoreDetails?.address2,
      city: loginStoreDetails?.city,
      state: loginStoreDetails?.state,
      zipCode: loginStoreDetails?.zipCode,
    };
    setSignUpData({ ...initVal });
    setErrorData(initValError);
    onLoadGoogleMap();
  }, [loginStoreDetails]);
  const handleUpdate = (e) => {
    const { name, value } = e.target;
    var value1 = value;
    if (value.trim() == "") {
      value1 = value.trim();
    }
    const addr = { ...signUpData };
    const addr_error = { ...errorData };
    if (name == "phoneNumber" || name == "officeNo") {
      const re = /^[0-9\b]+$/;
      if (value1 === "" || re.test(value1)) {
        setSignUpData({
          ...addr,
          [name]: value1,
        });
        setErrorData({
          ...addr_error,
          [name]: false,
        });
      } else {
        setErrorData({
          ...addr_error,
          [name]: true,
        });
      }
    } else if (name === "email" || name === "officeEmail") {
      setSignUpData({
        ...addr,
        [name]: value1,
      });
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (emailRegex.test(String(value).toLowerCase())) {
        setErrorData({
          ...addr_error,
          [name]: false,
        });
      } else {
        setErrorData({
          ...addr_error,
          [name]: true,
        });
      }
    } else {
      setSignUpData({
        ...addr,
        [name]: value1,
      });
      setErrorData({
        ...addr_error,
        [name]: false,
      });
    }
  };
  const onLoadGoogleMap = () => {
    const script = document.createElement("script");
    script.src = GOOGLE_MAP_URL;
    script.id = "googleMaps";
    document.body.appendChild(script);
    script.onload = () => {
      handleScriptLoad();
    };
  };
  const handleChangeSwitch = (e) => {
    console.log("e", e);
    setSiteSwitchState(e);
    const sText = e ? "Yes" : "No";
    localStorage.setItem("isParentsPortalOnly", sText);
    // dispatch(updateIsParentSiteOnly(e));
  };

  const handleScriptLoad = () => {
    try {
      const google = window.google;
      if (document.getElementById("editProfileaddCreateUserAdress1")) {
        const options = {
          componentRestrictions: { country: "ind" },
        };
        const autocomplete = new google.maps.places.Autocomplete(
          document.getElementById("editProfileaddCreateUserAdress1"),
          options
        );
        autocomplete.setFields(["address_components", "formatted_address"]);
        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          handlePlaceSelect(place);
        });
      }
    } catch (e) {
      console.log("e", e);
    }
  };
  const handlePlaceSelect = (addressObject) => {
    var address1 = "";
    let postcode = "";
    let city = "";
    let state = "";
    let address2 = "";
    let address21 = "";
    let country = "";
    console.log("addressObject", addressObject);
    let fullAddress = addressObject?.formatted_address;
    for (const component of addressObject?.address_components) {
      const componentType = component.types[0];
      switch (componentType) {
        case "street_number": {
          address1 = `${component.long_name}`;
          break;
        }
        case "route": {
          address2 = component.short_name;
          break;
        }
        case "postal_code": {
          postcode = `${component.long_name}${postcode}`;
          break;
        }
        case "locality":
          city = component.long_name;
          break;
        case "country":
          country = component.long_name;
          break;
        case "administrative_area_level_1": {
          state = component.long_name;
          break;
        }
        case "sublocality_level_1": {
          address21 = component.long_name;
          break;
        }
      }
    }
    const AddressLine1 = address1 + " " + address2;

    const stateD = getPrevData();
    stateD["address"] = fullAddress;
    stateD["address1"] = AddressLine1;
    stateD["address2"] = address21;
    stateD["city"] = city;
    stateD["state"] = state;
    stateD["county"] = country;
    stateD["zipCode"] = postcode;
    console.log("stateDstateD", stateD);
    setSignUpData(stateD);
  };
  const getPrevData = () => {
    const initValStorePrev = {
      firstName: undefined,
      lastName: undefined,
      mobileNumber: undefined,
      email: undefined,
    };
    const prevVaaa = { ...signUpData };
    for (var key in initValStorePrev) {
      if (document.getElementById(key).value) {
        prevVaaa[key] = document.getElementById(key).value;
      }
    }

    console.log("signUpData prevVaaa", prevVaaa);
    return prevVaaa;
  };

  const saveUserDetails = async () => {
    var isValid = true;
    var errornew = { ...initValError1 };
    for (var key in errornew) {
      if (signUpData[key] === "" || !signUpData[key]) {
        errornew[key] = true;
        isValid = false;
      }
    }
    setErrorData({ ...errornew });
    if (isValid) {
      const body = { ...signUpData, _id: user?._id };
      setIsLoading(true);
      const resp = await dispatch(updateUserDetails(body));
      console.log("resp", resp);
      setIsLoading(false);
      // setShowSuccessMessage(true);
      if (resp?.payload?.success) {
        dispatch(getStoreDetails(user?._id));
        setShowSuccessMessage(true);
      }
    }
  };
  const handleSelectSiteType = (e) => {
    const { checked } = e.target;
  };
  console.log("signUpData", signUpData);
  return (
    <>
      <div className="userProfile-wrapper">
        {isLoading && <Loader />}

        <CustomModal
          show={showSuccessMessage}
          titleText={`Profile Information Successfully Updated.`}
          deleteText="Ok"
          cancelText=""
          onDelete={() => {
            setShowSuccessMessage(false);
            setIsProfileEdit(false);
            // history.push("/jobcardsummary");
          }}
        />
        <div className="profileinfoHeader">
          <span>Profile Information</span>

          {isProfileEdit ? (
            <span
              className="profileEdit"
              onClick={() => {
                setIsProfileEdit(false);
              }}
            >
              Cancel
            </span>
          ) : (
            <span
              className="profileEdit"
              onClick={() => {
                setIsProfileEdit(true);
              }}
            >
              Edit Profile
            </span>
          )}
        </div>
        <div className="user-details-row">
          <div>
            <div className="profileHeaderSec">
              <span className="headerText">
                First Name <span className="mand-sign-field">*</span>
              </span>
            </div>
            <div className="namesSection">
              <input
                value={signUpData?.firstName}
                disabled={!isProfileEdit}
                className={errorData?.firstName && "hasError"}
                type="text"
                name="firstName"
                id="firstName"
                onChange={handleUpdate}
              />
            </div>
          </div>
          <div>
            <div className="profileHeaderSec">
              <span className="headerText">
                Last Name <span className="mand-sign-field">*</span>
              </span>
            </div>
            <div className="namesSection">
              <input
                value={signUpData?.lastName}
                disabled={!isProfileEdit}
                className={errorData?.lastName && "hasError"}
                type="text"
                name="lastName"
                id="lastName"
                onChange={handleUpdate}
              />
            </div>
          </div>
        </div>
        <div className="user-details-row">
          <div>
            <div className="profileHeaderSec">
              <span className="headerText">
                Mobile Number <span className="mand-sign-field">*</span>
              </span>
            </div>
            <div className="namesSection">
              <input
                value={signUpData?.mobileNumber || user?.mobileNumber}
                // disabled={!isProfileEdit}
                className={errorData?.mobileNumber && "hasError"}
                type="text"
                disabled={true}
                maxLength={10}
                onChange={handleUpdate}
                name="mobileNumber"
                id="mobileNumber"
              />
            </div>
          </div>
          <div>
            <div className="profileHeaderSec">
              <span className="headerText">
                Email Id <span className="mand-sign-field">*</span>
              </span>
            </div>
            <div className="namesSection">
              <input
                value={signUpData?.email}
                disabled={!isProfileEdit}
                className={errorData?.email && "hasError"}
                type="text"
                name="email"
                id="email"
                onChange={handleUpdate}
              />
            </div>
          </div>
        </div>
        <div className="address-profile-edit-section">
          <div>
            <div className="profileHeaderSec">
              <span className="headerText">
                Address <span className="mand-sign-field">*</span>
              </span>
            </div>
            <div className="namesSection">
              <input
                value={signUpData?.address}
                id="editProfileaddCreateUserAdress1"
                disabled={!isProfileEdit}
                className={errorData?.address && "hasError"}
                type="text"
                name="address"
                onChange={handleUpdate}
              />
            </div>
          </div>
        </div>

        <div className="user-details-row user-details-row-save">
          {isProfileEdit && (
            <div className="profileEditSave">
              <Button onClick={saveUserDetails}>Save</Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserProfile;
