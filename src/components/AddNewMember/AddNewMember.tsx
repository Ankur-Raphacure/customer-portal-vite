import { AddNewMemberStyled } from "./AddNewMember.styled";
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import {
  createNewDependentAPI,
  editDependentAPI,
} from "../../redux/slices/Profile/ProfileService";
import { useHistory, useLocation } from "react-router-dom";
import { GOOGLE_MAP_URL } from "../../config";
import CustomModal from "../CustomModel";

import Modal, { ModalProps } from "react-bootstrap/Modal";
import clsx from "clsx";
import CloseButton from "react-bootstrap/CloseButton";
// import ImageUploadPopup from "./ImageUploadPopup";
import ImageUploadModel from "../ImageUploadModel/ImageUploadModel";
import { FaUserCircle } from "react-icons/fa";
// import "./styles.css";
const initVal = {
  first_name: undefined,
  last_name: undefined,
  email: undefined,
  phone: undefined,
  age: undefined,
  relation: undefined,
  gender: undefined,
  dob: undefined,
};

const initValError = {
  first_name: false,
  // phone: false,
  age: false,
  last_name: false,
  // email: false,
  relation: false,
  gender: false,
  // storePostalCode: false,
};
const initValError1 = {
  first_name: false,
  // phone: false,
  age: false,
  last_name: false,
  // email: false,
  // gender: false,
  // relation: false,
};

const initValErrorData = {
  first_name: "Please Enter First name",
  last_name: "Please Enter Last name",
  email: "Please Enter Email",
  phone: "Please Enter Phone number",
  age: "Please Enter Age",
  relation: "Please Select Relation",
  gender: "Please Select Gender",
  dob: "Please Select Date of Birth",
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
    label: "Self",
    value: "Self",
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

const AddNewMember = (props: any) => {
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
  const [userImg, setUserImg] = useState(signUpData?.image);
  const [passError, setPassError] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (props?.show && props?.selectedMember?.id) {
      const prevD = props?.selectedMember;
      const addr = { ...signUpData };
      addr.first_name = prevD?.first_name;
      addr.last_name = prevD?.last_name;
      addr.phone = prevD?.phone;
      addr.age = prevD?.age;
      addr.email = prevD?.email;
      addr.relation = prevD?.relation;
      addr.gender = prevD?.gender;
      addr.dob = prevD?.dob;
      // addr.id = prevD?.id;
      addr.image = prevD?.image;
      setSignUpData({
        ...addr,
      });
    } else {
      // console.log("initValinitVal", initVal);
      // console.log("propspropsprops", props);
      setSignUpData(initVal);
      setUpdateData(!updateData);
    }
  }, [props?.selectedMember?.id, props?.show]);

  const handleChangeRelation = (selectedOption: any) => {
    // setInstituteErrorMessage("");
    setRelationList(selectedOption);
    const addr = { ...signUpData };
    setSignUpData({
      ...addr,
      ["relation"]: selectedOption?.label,
    });
    // dispatch(getAllAcademicYears({ studentId: 233, locationId: 1233 }));
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
    console.log("createAccountData");

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
      // signUpData.phone = signUpData.phone;
      // signUpData.doorNo = signUpData?.phone;
      // signUpData.areaOrWard = signUpData?.address2;
      // signUpData.town = signUpData?.city;
      // signUpData.storePostalCode = signUpData?.pinCode;
      // signUpData.storeAreaOrWard = signUpData?.address2;
      var objNew = { ...signUpData };
      if (!objNew?.phone) {
        delete objNew?.phone;
      }
      if (!objNew?.email) {
        delete objNew?.email;
      }
      console.log("objNew : ", objNew);

      // Destructure objNew to exclude the image field
      const { image, ...objWithoutImage } = objNew;

      // Now pass the new object without the image field
      makeSignUpCall(objWithoutImage);

      console.log("signUpData 444", signUpData);
    }
  };
  const makeSignUpCall = async (data: any) => {
    console.log("currdata : ", data);

    setIsLoading(true);
    const resp = props?.selectedMember?.id
      ? ((await dispatch(
          editDependentAPI({ id: props?.selectedMember?.id, user: data }),
        )) as any)
      : ((await dispatch(createNewDependentAPI(data))) as any);
    console.log("vinodddd", resp);
    if (resp?.payload?.success) {
      setSignUpData(initVal as any);
      setIsLoading(false);
      props?.addUserSuccess(resp?.payload?.data);
    } else if (resp?.error?.message) {
      setPassError(resp?.error?.message);
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
  useEffect(() => {
    if (!userImg || userImg === "") {
      if (signUpData.image) {
        setUserImg(signUpData.image);
      }
    }
  }, [signUpData, userImg]);

  console.log("errorDataValue?.first_name", errorDataValue);
  console.log("errorDataValue?.first_name", errorDataValue?.first_name);
  console.log("errorData?.first_name", errorData?.first_name);
  return (
    <>
      <ImageUploadModel
        show={showImageMoodel}
        handleClose={handleCloseImage}
        handleImageUploadSuccess={handleImageUploadSuccess}
        setUserImg={setUserImg}
        selectedMember={props.selectedMember}
      />

      <Modal {...props} size="lg" className="add-customer-model-box1" centered>
        <div className="conformation-model">
          <AddNewMemberStyled>
            <Modal.Body>
              <div className="add-new-user-customer">
                <div className="new-option-header">
                  <h4>
                    {" "}
                    {props?.selectedMember?.id ? "Update" : "Add New"} Member
                  </h4>
                  <CloseButton onClick={props?.onHide} />
                </div>
                <div className="SignupContainer add-new-user-changes1">
                  <div className="userImgWrapper userImgWrapper-sec">
                    {signUpData.image ? (
                      <img src={userImg} alt="" />
                    ) : (
                      <FaUserCircle size={70} />
                    )}
                    <div className="upload-image-sec">
                      <button onClick={handleOpenImage}>Upload Image</button>
                    </div>
                  </div>
                  <div className="row-item-sec-user">
                    <Form.Group className="signup-md" controlId="email">
                      <Form.Label>
                        First Name <span className="mand-sign-field">
                          *
                        </span>{" "}
                      </Form.Label>
                      <Form.Control
                        autoFocus
                        name="first_name"
                        type="text"
                        id="add_customer_first_name"
                        value={signUpData?.first_name}
                        onChange={(e) => handleChangeValue(e)}
                        isInvalid={errorData?.first_name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errorData?.first_name ? (
                          <>{errorDataValue?.first_name}</>
                        ) : null}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="signup-md-left" controlId="email">
                      <Form.Label>
                        Last Name <span className="mand-sign-field">
                          *
                        </span>{" "}
                      </Form.Label>
                      <Form.Control
                        name="last_name"
                        type="text"
                        id="add_customer_last_name"
                        value={signUpData?.last_name}
                        onChange={(e) => handleChangeValue(e)}
                        isInvalid={errorData?.last_name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errorData?.last_name ? (
                          <>{errorDataValue?.last_name}</>
                        ) : null}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <div className="gender-selection-sec1 ">
                      <div>
                        <label>Gender</label>
                      </div>
                      <div className="gender-selection-sec">
                        <button
                          type="button"
                          className={`gender-btn ${
                            signUpData?.gender === "male" ? "selected" : ""
                          }`}
                          onClick={(e) =>
                            handleChangeValue({
                              target: {
                                name: "gender",
                                value: "male",
                              },
                            })
                          }
                        >
                          Male
                        </button>
                        <button
                          type="button"
                          className={`gender-btn ${
                            signUpData?.gender === "female" ? "selected" : ""
                          }`}
                          onClick={(e) =>
                            handleChangeValue({
                              target: {
                                name: "gender",
                                value: "female",
                              },
                            })
                          }
                        >
                          Female
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row-item-sec-user">
                    <Form.Group className="signup-md-left" controlId="email">
                      <Form.Label>
                        Contact Number
                        {/* <span className="mand-sign-field">*</span> */}
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
                    <Form.Group className="signup-md" controlId="email">
                      <Form.Label>
                        Email
                        {/* <span className="mand-sign-field">*</span>{" "} */}
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="email"
                        id="add_customer_email"
                        value={signUpData?.email}
                        isInvalid={errorData?.email}
                        onChange={(e) => handleChangeValue(e)}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errorData?.email ? <>{errorDataValue?.email}</> : null}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>

                  <div className="row-item-sec-user">
                    <Form.Group className="signup-md dob-div" controlId="date">
                      <Form.Label>Date of Birth</Form.Label>
                      <Form.Control
                        type="date"
                        name="dob"
                        id="add_customer_dob"
                        value={signUpData?.dob}
                        onChange={(e) => handleChangeValue(e)}
                        isInvalid={errorData?.dob}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errorData?.dob ? <>{errorDataValue?.dob}</> : null}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="signup-md-left" controlId="email">
                      <Form.Label>
                        Select Relation
                        <span className="mand-sign-field">*</span>
                      </Form.Label>
                      <Select
                        value={{
                          label: signUpData?.relation,
                          value: signUpData?.relation,
                        }}
                        placeholder="Select Class"
                        onChange={handleChangeRelation}
                        options={admissionList}
                        className="delta-select"
                        classNamePrefix="delta-select"
                      />

                      <Form.Control.Feedback type="invalid">
                        {errorData?.relation ? (
                          <>{errorDataValue?.relation}</>
                        ) : null}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </div>
                  <div className="row-item-sec-user">
                    <Form.Group className="signup-md">
                      <Form.Label>
                        Age <span className="mand-sign-field">*</span>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        id="addNewUserAdress1"
                        maxLength={2}
                        name="age"
                        value={signUpData?.age}
                        isInvalid={errorData?.age}
                        onChange={(e) => handleChangeValue(e)}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errorData?.age ? <>{errorDataValue?.age}</> : null}
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
                        : props?.selectedMember?.id
                          ? "Update Member"
                          : "Add Member"}
                    </Button>
                  </div>
                </div>
              </div>
            </Modal.Body>
            {/* <Modal.Footer>
              <div className="new-option-body-actions">
                <Button onClick={handleSubmitFn}>Submit</Button>
              </div>
            </Modal.Footer> */}
          </AddNewMemberStyled>
        </div>
      </Modal>
    </>
  );
};
export default AddNewMember;
