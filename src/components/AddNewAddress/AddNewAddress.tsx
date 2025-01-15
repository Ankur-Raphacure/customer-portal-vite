import { AddNewAddressStyled } from "./AddNewAddress.styled";
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import { fromPlaceId, setKey } from "react-geocode";

import {
  addNewAddressAPI,
  editDependentAPI,
  editNewAddressAPI,
} from "../../redux/slices/Profile/ProfileService";
import { useHistory, useLocation } from "react-router-dom";
import { GOOGLE_MAP_URL } from "../../config";
import CustomModal from "../CustomModel";

import Modal, { ModalProps } from "react-bootstrap/Modal";
import clsx from "clsx";
import CloseButton from "react-bootstrap/CloseButton";
import ImageUploadModel from "../ImageUploadModel/ImageUploadModel";
import AutocompleteField from "../../components/AutoComplete";
import { parseAddress } from "../../Scenes/common";
// import "./styles.css";
const initVal = {
  address: undefined,
  zip: undefined,
  detail: undefined,
  name: undefined,
  landmark: undefined,
  city: undefined,
  gender: undefined,
};

const initValError = {
  address: false,
  name: false,
  landmark: false,
  zip: false,
  detail: false,
  city: false,
  gender: false,
  // storePostalCode: false,
};
const initValError1 = {
  address: false,
  name: false,
  // landmark: false,
  zip: false,
  detail: false,
  // gender: false,
  city: false,
};

const initValErrorData = {
  address: "Please Enter Address",
  zip: "Please Enter zip Code",
  detail: "Please Detail",
  name: "Please Enter Name",
  landmark: "Please Enter Landmark",
  city: "Please Select City",
  gender: "Please Select Gender",
};
const admissionList = [
  {
    label: "Spouse",
    value: "Spouse",
  },
  {
    label: "Father",
    value: "Father",
  },
  {
    label: "Mother",
    value: "Mother",
  },
  {
    label: "Grand Mother",
    value: "Grand Mother",
  },
  {
    label: "Grand Father",
    value: "Grand Father",
  },
  {
    label: "Child 1",
    value: "Child 1",
  },
  {
    label: "Child 2",
    value: "Child 2",
  },
  {
    label: "Child 3",
    value: "Child 3",
  },
  {
    label: "Sibling",
    value: "Sibling",
  },
  {
    label: "Mother In Law",
    value: "Mother In Law",
  },
  {
    label: "Father In Law",
    value: "Father In Law",
  },
  {
    label: "Other",
    value: "Other",
  },
  // {
  //   label: "Self",
  //   value: "Self",
  // },
  {
    label: "Sister",
    value: "Sister",
  },
  {
    label: "Brother",
    value: "Brother",
  },
  {
    label: "Daughter",
    value: "Daughter",
  },
  {
    label: "Husband",
    value: "Husband",
  },
  {
    label: "Son",
    value: "Son",
  },
  {
    label: "Wife",
    value: "Wife",
  },
];

const AddNewAddress = (props: any) => {
  // console.log("propsprops", props);
  // setKey("AIzaSyBItpkRUSb_676tK37K_3zGTcTVjU--0sw");
  const [isEdit, setIsEdit] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [updateData, setUpdateData] = useState(false);
  const [showImageMoodel, setShowImageMoodel] = useState(false);
  const [relationList, setRelationList] = useState({} as any);

  // const [isEdit, setIsEdit] = useState(false);
  const [signUpData, setSignUpData] = useState(initVal as any);
  const [errorData, setErrorData] = useState(initValError as any);
  const [errorDataValue, setErrorDataValue] = useState(initValErrorData as any);
  const { error, loading, user } = useSelector((Route: any) => Route.auth);
  const history = useHistory();

  const [passError, setPassError] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (props?.show && props?.selectedAddress?.id) {
      const prevD = props?.selectedAddress;
      const addr = { ...signUpData };
      addr.address = prevD?.address;
      addr.zip = prevD?.zip;
      addr.name = prevD?.name;
      addr.landmark = prevD?.landmark;
      addr.detail = prevD?.detail;
      addr.city = prevD?.city;
      addr.latitude = 9.6031088;
      addr.longitude = 77.161458;
      setSignUpData({
        ...addr,
      });
    } else {
      setSignUpData(initVal);
      setUpdateData(!updateData);
    }
  }, [props?.selectedAddress?.id, props?.show]);

  const handlePlaceSelected = (place: any) => {
    let inputRef: any = document.getElementById("address")!;
    console.log("place", place);
    let selectedAddress = inputRef?.value;
    console.log("selectedAddress", selectedAddress);
    let { address1, city, state, country, zipcode } = parseAddress(
      place,
      selectedAddress
    );
    const addr = { ...signUpData };
    const addressNew = {
      ...addr,
      ["address"]: selectedAddress,
      ["city"]: city,
      ["state"]: state,
      // ["country"]: country,
      ["zip"]: zipcode,
      ["detail"]: address1,
      ["latitude"]: 9.6031088,
      ["longitude"]: 77.161458,
    };
    console.log("addressNew", addressNew);
    setSignUpData(addressNew);
    console.log("initValError", initValError);
    setErrorData({ ...initValError });
  };

  const handleChangeValue = (e: any) => {
    setPassError("");
    let { name, value } = e.target;
    var value1 = value;
    if (value.trim() == "") {
      value1 = value.trim();
    }
    const addr = { ...signUpData };
    const addr_error = { ...errorData };

    if (name == "phone" || name == "altphone" || name === "storePostalCode") {
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
      }
    } else if (name === "username" || name == "officeEmail") {
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
  const createAccountData = () => {
    setPassError("");
    var isValid = true;
    var errornew = { ...errorData };
    for (var key in initValError1) {
      if (signUpData[key] === "" || !signUpData[key]) {
        errornew[key] = true;
        isValid = false;
      }
    }
    console.log("errornew", errornew);
    setErrorData({ ...errornew });

    if (isValid) {
      makeSignUpCall(signUpData);
    }
  };

  const makeSignUpCall = async (data: any) => {
    setIsLoading(true);
    const resp = props?.selectedAddress?.id
      ? ((await dispatch(
          editNewAddressAPI({ id: props?.selectedAddress?.id, user: data })
        )) as any)
      : ((await dispatch(addNewAddressAPI({ address: data }))) as any);

    if (resp?.payload?.success) {
      setSignUpData(initVal as any);
      setIsLoading(false);
      props?.addUserSuccess(resp?.payload?.data);
    }
  };
  const validationCheck = () => {
    var formValid = false;
    console.log("signUpData", signUpData);
    console.log("errorData", errorData);
    for (var key in errorData) {
      if (signUpData[key] === "" || !signUpData[key]) {
        formValid = true;
      }
    }
    return formValid;
  };
  const handleOpenImage = () => {
    setShowImageMoodel(true);
  };
  const handleCloseImage = () => {
    setShowImageMoodel(false);
  };
  const handleImageUploadSuccess = (img: any) => {
    console.log("img img img", img);
  };

  return (
    <>
      <ImageUploadModel
        show={showImageMoodel}
        handleClose={handleCloseImage}
        handleImageUploadSuccess={handleImageUploadSuccess}
      />

      <Modal
        {...props}
        size="lg"
        className="add-customer-model-box1 "
        style={{ zIndex: "1055" }}
        centered
      >
        <div className="conformation-model">
          <AddNewAddressStyled>
            <Modal.Body>
              <div className="add-new-user-customer">
                <div className="new-option-header">
                  <h4>
                    {" "}
                    {props?.selectedAddress?.id ? "Update" : "Add New"} Address
                  </h4>
                  <CloseButton onClick={props?.onHide} />
                </div>
                <div className="SignupContainer add-new-user-changes1">
                  <div className="row-item-sec-user address-line1-user">
                    <Form.Group className="signup-md-full" controlId="email">
                      <Form.Label>
                        Enter Address Line 1{" "}
                        <span className="mand-sign-field">*</span>{" "}
                      </Form.Label>
                      <AutocompleteField
                        onPlaceSelected={(place: any) =>
                          handlePlaceSelected(place)
                        }
                        autoFocus={true}
                        name="address"
                        id="address"
                        defaultValue={signUpData?.address}
                        placeholder="Street address, House No"
                        onChange={(e: any) => {
                          // if (!e.target.value) {
                          //   setFieldValue("city", "");
                          //   setFieldValue("state", "");
                          //   setFieldValue("zipCode", "");
                          // }
                          // onChangeValues(e);
                        }}
                      />
                      {errorData.address && (
                        <p className="error_message">
                          {errorDataValue?.address}
                        </p>
                      )}
                    </Form.Group>
                  </div>
                  <div>
                    <Form.Group className="signup-md" controlId="detail">
                      <Form.Label>
                        House/Flat No. & Building Name{" "}
                        <span className="mand-sign-field">*</span>{" "}
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="detail"
                        id="add_customer_detail"
                        value={signUpData?.detail}
                        isInvalid={errorData?.detail}
                        onChange={(e) => handleChangeValue(e)}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errorData?.detail ? (
                          <>{errorDataValue?.detail}</>
                        ) : null}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="signup-md-left" controlId="email">
                      <Form.Label>
                        City <span className="mand-sign-field">*</span>{" "}
                      </Form.Label>
                      <Form.Control
                        name="city"
                        type="text"
                        id="add_customer_city"
                        value={signUpData?.city}
                        onChange={(e) => handleChangeValue(e)}
                        isInvalid={errorData?.city}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errorData?.city ? <>{errorDataValue?.city}</> : null}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <div className="row-item-sec-user">
                    <Form.Group className="signup-md" controlId="email">
                      <Form.Label>
                        Pincode <span className="mand-sign-field">*</span>{" "}
                      </Form.Label>
                      <Form.Control
                        name="zip"
                        type="text"
                        maxLength={6}
                        id="add_customer_zip"
                        value={signUpData?.zip}
                        onChange={(e) => handleChangeValue(e)}
                        isInvalid={errorData?.zip}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errorData?.zip ? <>{errorDataValue?.zip}</> : null}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="signup-md-left">
                      <Form.Label>
                        Landmark
                        {/* <span className="mand-sign-field">*</span> */}
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="addNewUserAdress1"
                        maxLength={100}
                        name="landmark"
                        value={signUpData?.landmark}
                        isInvalid={errorData?.landmark}
                        onChange={(e) => handleChangeValue(e)}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errorData?.landmark ? (
                          <>{errorDataValue?.landmark}</>
                        ) : null}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <div className="row-item-sec-user">
                    <Form.Group className="signup-md" controlId="email">
                      <Form.Label>
                        Home/Office/Others{" "}
                        <span className="mand-sign-field">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        maxLength={100}
                        name="name"
                        id="add_customer_name"
                        value={signUpData?.name}
                        isInvalid={errorData?.name}
                        onChange={(e) => handleChangeValue(e)}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errorData?.name ? <>{errorDataValue?.name}</> : null}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>

                  {passError && <p className="errorMessage">{passError}</p>}
                  {error && !passError && (
                    <p className="errorMessage">{error}</p>
                  )}
                  <div className="add-new-submit-sec">
                    <button className="cancel-btn" onClick={props?.onHide}>
                      Cancel
                    </button>
                    <Button
                      className="save-btn"
                      // disabled={validationCheck()}
                      onClick={() => {
                        createAccountData();
                      }}
                      type="submit"
                    >
                      {loading
                        ? "Loading"
                        : props?.selectedAddress?.id
                        ? "Update Address"
                        : "Add Address"}
                    </Button>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </AddNewAddressStyled>
        </div>
      </Modal>
    </>
  );
};
export default AddNewAddress;
