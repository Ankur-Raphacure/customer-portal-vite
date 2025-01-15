import { EmpanelWithUsStyled } from "./EmpanelWithUs.styled";
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import {
  createNewEmpanelAPI,
  editEmpanelAPI,
} from "../../redux/slices/Profile/ProfileService";
import { useHistory } from "react-router-dom";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import CloseButton from "react-bootstrap/CloseButton";
import ImageUploadModel from "../ImageUploadModel/ImageUploadModel";
import { ReactComponent as PickupCircle } from "../../assets/icons/pickupCircle.svg";
import AutocompleteField from "../AutoComplete";
import { parseAddress } from "../../Scenes/common";
import { fromPlaceId } from "react-geocode";

const initVal = {
  name: undefined,
  email: undefined,
  phone: undefined,
  alt_phone: undefined,
  city: undefined,
  state: undefined,
  zip: undefined,
  type: undefined,
};

const initValError = {
  name: false,
  phone: false,
  alt_phone: false,
  state: false,
  email: false,
  city: false,
  sip: false,
  type: false,
};
const initValError1 = {
  name: false,
  phone: false,
  email: false,
  city: false,
  state: false,
  zip: false,
  type: false,
};

const initValErrorData = {
  name: "Please Enter First name",
  email: "Please Enter Email",
  phone: "Please Enter Phone number",
  city: "Please Enter City",
  state: "Please Select State",
  zip: "Please Select Zipcode",
  type: "Please Select Empanel Type",
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

const stateList = [
  {
    label: "Andaman and Nicobar Islands",
    value: "Andaman and Nicobar Islands",
  },
  {
    label: "Andhra Pradesh",
    value: "Andhra Pradesh",
  },
  {
    label: "Arunachal Pradesh",
    value: "Arunachal Pradesh",
  },
  {
    label: "Assam",
    value: "Assam",
  },
  {
    label: "Bihar",
    value: "Bihar",
  },
  {
    label: "Chandigarh",
    value: "Chandigarh",
  },
  {
    label: "Chhattisgarh",
    value: "Chhattisgarh",
  },
  {
    label: "Dadra and Nagar Haveli",
    value: "Dadra and Nagar Haveli",
  },
  {
    label: "Daman and Diu",
    value: "Daman and Diu",
  },
  {
    label: "Delhi",
    value: "Delhi",
  },
  {
    label: "Goa",
    value: "Goa",
  },
  {
    label: "Gujarat",
    value: "Gujarat",
  },
  {
    label: "Haryana",
    value: "Haryana",
  },
  {
    label: "Himachal Pradesh",
    value: "Himachal Pradesh",
  },
  {
    label: "Jammu and Kashmir",
    value: "Jammu and Kashmir",
  },
  {
    label: "Jharkhand",
    value: "Jharkhand",
  },
  {
    label: "Karnataka",
    value: "Karnataka",
  },
  {
    label: "Kerala",
    value: "Kerala",
  },
  {
    label: "Lakshadweep",
    value: "Lakshadweep",
  },
  {
    label: "Madhya Pradesh",
    value: "Madhya Pradesh",
  },
  {
    label: "Maharashtra",
    value: "Maharashtra",
  },
  {
    label: "Manipur",
    value: "Manipur",
  },
  {
    label: "Meghalaya",
    value: "Meghalaya",
  },
  {
    label: "Mizoram",
    value: "Mizoram",
  },
  {
    label: "Nagaland",
    value: "Nagaland",
  },
  {
    label: "Odisha",
    value: "Odisha",
  },
  {
    label: "Puducherry",
    value: "Puducherry",
  },
  {
    label: "Punjab",
    value: "Punjab",
  },
  {
    label: "Rajasthan",
    value: "Rajasthan",
  },
  {
    label: "Sikkim",
    value: "Sikkim",
  },
  {
    label: "Tamil Nadu",
    value: "Tamil Nadu",
  },
  {
    label: "Telangana",
    value: "Telangana",
  },
  {
    label: "Tripura",
    value: "Tripura",
  },
  {
    label: "Uttar Pradesh",
    value: "Uttar Pradesh",
  },
  {
    label: "Uttarakhand",
    value: "Uttarakhand",
  },
  {
    label: "West Bengal",
    value: "West Bengal",
  },
];

const EmpanelWithUs = (props: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [updateData, setUpdateData] = useState(false);
  const [showImageMoodel, setShowImageMoodel] = useState(false);
  const [relationList, setRelationList] = useState({} as any);
  const [stateData, setStateData] = useState({} as any);
  const [cityData, setCityData] = useState({} as any);
  const [showCancelReqPopup, setShowCancelReqPopup] = useState(false);
  const [showCancelRidePopup, setShowCancelRidePopup] = useState(false);
  const [fromValue, setFromValue] = useState("");
  const [fromLocation, setFromLocation] = useState({} as any);
  const [fromAddressObj, setFromAddressObj] = useState({} as any);
  const [fromPlaceId1, setFromPlaceId1] = useState("");

  const [signUpData, setSignUpData] = useState(initVal as any);
  const [errorData, setErrorData] = useState(initValError as any);
  const [errorDataValue, setErrorDataValue] = useState(initValErrorData as any);
  const { error, loading, user } = useSelector((Route: any) => Route.auth);

  const [passError, setPassError] = useState("");
  const dispatch = useDispatch();
  const { configInfo } = useSelector((ReduxState: any) => ReduxState.config);
  const data = configInfo;

  const empType = data?.vendorTypes?.map((type: any) => ({
    label: type.name,
    value: type.key,
  }));

  const CityType = data?.cities?.map((city: any) => ({
    label: city.name,
    value: city.name,
  }));

  useEffect(() => {
    if (props?.show && props?.selectedMember?.id) {
      const prevD = props?.selectedMember;
      const addr = { ...signUpData };
      addr.name = prevD?.name;
      addr.phone = prevD?.phone;
      addr.email = prevD?.email;
      addr.city = prevD?.city;
      addr.state = prevD.state;
      addr.zip = prevD.zip;
      addr.type = prevD.type;
      addr.secondary_phone = prevD.alt_phone;

      setSignUpData({
        ...addr,
      });
    } else {
      setSignUpData(initVal);
      setUpdateData(!updateData);
    }
  }, [props?.selectedMember?.id, props?.show]);

  const handleChangeRelation = (selectedOption: any) =>
    handleChange(selectedOption, "type");

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
    setErrorData({ ...errornew });
    if (isValid) {
      makeSignUpCall(signUpData);

      setShowCancelReqPopup(true);
    }
  };

  const HandleSuccessMsg = () => {
    setShowCancelReqPopup(false);
    props?.onHide();
  };

  const makeSignUpCall = async (data: any) => {
    empType.forEach((item: any) => {
      if (data.type === item.label) {
        data.type = item.value;
      }
    });
    setIsLoading(true);
    const resp = props?.selectedMember?.id
      ? ((await dispatch(
          editEmpanelAPI({ id: props?.selectedMember?.id, user: data })
        )) as any)
      : ((await dispatch(createNewEmpanelAPI(data))) as any);
    if (resp?.payload?.success) {
      setSignUpData(initVal as any);
      setIsLoading(false);
      props?.addEmpanelSuccess(resp?.payload?.data);
    }
  };
  const validationCheck = () => {
    var formValid = false;
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

  const handleChange = (selectedOption: any, field: any) => {
    setSignUpData({
      ...signUpData,
      [field]: selectedOption.value,
    });
    setErrorData({
      ...errorData,
      [field]: false,
    });
  };

  const handleChangeState = (selectedOption: any) =>
    handleChange(selectedOption, "state");

  const handleChangeCity = (selectedOption: any) =>
    handleChange(selectedOption, "city");

  const handleChangeValue = (e: any) => {
    setPassError("");
    let { name, value } = e.target;
    var value1 = value;
    if (value.trim() === "") {
      value1 = value.trim();
    }
    const addr = { ...signUpData };
    const addr_error = { ...errorData };

    if (name === "phone" || name === "altphone" || name === "storePostalCode") {
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
    } else if (name === "username" || name === "officeEmail") {
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

  const handlePlaceSelected = (place: any) => {
    let inputRef = document.getElementById("fromAddress") as HTMLInputElement;
    let selectedAddress = inputRef?.value;
    inputRef.value = selectedAddress;
    setFromValue(place?.formatted_address);
    const place_id = place?.place_id;
    fromPlaceId(place_id)
      .then(({ results }) => {
        const { lat, lng } = results[0].geometry.location;
        setFromLocation({ latitude: lat, longitude: lng });
      })
      .catch(console.error);
    let { address1, city, state, country, zipcode } = parseAddress(
      place,
      selectedAddress
    );
    setFromAddressObj({
      address: selectedAddress,
      zip: zipcode,
      city,
      state,
    });

    // Update city and state in the form
    setSignUpData({
      ...signUpData,
      city: city,
      state: state,
      zip: zipcode,
    });
  };

  return (
    <>
      <ImageUploadModel
        show={showImageMoodel}
        handleClose={handleCloseImage}
        handleImageUploadSuccess={handleImageUploadSuccess}
      />

      <Modal {...props} size="lg" className="add-customer-model-box1" centered>
        <div className="conformation-model">
          <EmpanelWithUsStyled>
            <Modal.Body>
              <div className="add-new-user-customer">
                <div className="new-option-header">
                  <h4> Empanel With Us</h4>
                  <CloseButton onClick={props?.onHide} />
                </div>
                <div className="SignupContainer add-new-user-changes1">
                  <div>
                    <p className="sub-header-sec">Personal Details</p>
                  </div>
                  <div className="row-item-sec-user">
                    <Form.Group className="signup-md" controlId="email">
                      <Form.Label>
                        Center Name <span className="mand-sign-field">*</span>{" "}
                      </Form.Label>
                      <Form.Control
                        autoFocus
                        name="name"
                        type="text"
                        id="name"
                        value={signUpData?.name}
                        onChange={(e) => handleChangeValue(e)}
                        isInvalid={errorData?.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errorData?.name ? <>{errorDataValue?.name}</> : null}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="signup-md-left" controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="text"
                        name="email"
                        id="add_customer_email"
                        value={signUpData?.email}
                        // isInvalid={errorData?.email}
                        onChange={(e) => handleChangeValue(e)}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errorData?.email ? <>{errorDataValue?.email}</> : null}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <div className="row-item-sec-user">
                    <Form.Group className="signup-md" controlId="email">
                      <Form.Label>
                        Phone Number <span className="mand-sign-field">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        maxLength={10}
                        name="phone"
                        id="add_customer_phone"
                        value={signUpData?.phone}
                        isInvalid={errorData?.phone}
                        onChange={(e) => handleChangeValue(e)}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errorData?.phone ? <>{errorDataValue?.phone}</> : null}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="signup-md-left" controlId="email">
                      <Form.Label>Alternative Mobile Number </Form.Label>
                      <Form.Control
                        type="text"
                        maxLength={10}
                        name="alt_phone"
                        id="add_customer_alt_phone"
                        value={signUpData?.alt_phone}
                        isInvalid={errorData?.alt_phone}
                        onChange={(e) => handleChangeValue(e)}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errorData?.alt_phone ? (
                          <>{errorDataValue?.alt_phone}</>
                        ) : null}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                </div>

                <div className="mb-3 mt-3">
                  <label className="form-label">Address</label>
                  <div className="input-group">
                    <div className="input-group-text">
                      <PickupCircle />
                    </div>
                    <AutocompleteField
                      onPlaceSelected={(place: any) =>
                        handlePlaceSelected(place)
                      }
                      name="fromAddress"
                      id="fromAddress"
                      value={fromValue}
                      placeholder={fromValue ? fromValue : "Pickup Location"}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="SignupContainer add-new-user-changes1">
                  <div className="row-item-sec-user">
                    <Form.Group className="signup-md" controlId="city">
                      <Form.Label>
                        City
                        <span className="mand-sign-field">*</span>
                      </Form.Label>
                      <Select
                        value={{
                          label: signUpData.city,
                          value: signUpData.city,
                        }}
                        placeholder="Select Class"
                        options={CityType}
                        onChange={handleChangeCity}
                        className="delta-select"
                        classNamePrefix="delta-select"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errorData.city ? <>{errorDataValue.city}</> : null}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="signup-md-left" controlId="email">
                      <Form.Label>
                        State
                        <span className="mand-sign-field">*</span>
                      </Form.Label>
                      <Select
                        value={{
                          label: signUpData.state,
                          value: signUpData.state,
                        }}
                        placeholder="Select Class"
                        onChange={handleChangeState}
                        options={stateList}
                        className="delta-select"
                        classNamePrefix="delta-select"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errorData.state ? <>{errorDataValue.state}</> : null}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <div className="row-item-sec-user">
                    <Form.Group className="signup-md">
                      <Form.Label>
                        Pin code <span className="mand-sign-field">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="addNewUserAdress1"
                        maxLength={100}
                        name="zip"
                        value={signUpData.zip}
                        isInvalid={errorData.zip}
                        onChange={(e) => handleChangeValue(e)}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errorData.zip ? <>{errorDataValue.zip}</> : null}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="signup-md-left" controlId="type">
                      <Form.Label>
                        Empanel type
                        <span className="mand-sign-field">*</span>
                      </Form.Label>
                      <Select
                        value={{
                          label: signUpData.type,
                          value: signUpData.type,
                        }}
                        placeholder="Select Class"
                        options={empType}
                        onChange={handleChangeRelation}
                        className="delta-select"
                        classNamePrefix="delta-select"
                      />
                      <Form.Control.Feedback type="invalid">
                        {errorData.type ? <>{errorDataValue.type}</> : null}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>

                  {passError && <p className="errorMessage">{passError}</p>}
                  {error && !passError && (
                    <p className="errorMessage">{error}</p>
                  )}
                  <div className="add-new-submit-sec">
                    <Button
                      className="save-btn"
                      data-toggle="modal"
                      data-target="#exampleModal"
                      onClick={createAccountData}
                      type="submit"
                    >
                      {loading ? "Loading" : "Submit"}
                    </Button>
                  </div>
                </div>
              </div>
            </Modal.Body>

            {showCancelReqPopup && (
              <div className="Overlay">
                <div className="PopupContainer">
                  <div className="Title">
                    Empanel With Us Created Successful.
                  </div>
                  <div className="ButtonContainer">
                    <button
                      className="btn custom-btn"
                      onClick={HandleSuccessMsg}
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
            )}
          </EmpanelWithUsStyled>
        </div>
      </Modal>
    </>
  );
};
export default EmpanelWithUs;
