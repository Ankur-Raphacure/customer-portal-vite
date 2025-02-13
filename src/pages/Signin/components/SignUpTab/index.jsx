import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../../../../redux/slices/auth/authService";
import { useHistory, useLocation } from "react-router-dom";

// import "./styles.css";
const initVal = {
  firstName: undefined,
  lastName: undefined,
  phoneNumber: undefined,
  email: undefined,
  password: undefined,
  conformPassword: undefined,
  companyName: undefined,
  GSTNo: undefined,
  // officeNo: undefined,
  city: undefined,
  officeEmail: undefined,
  PANNo: undefined,
  companyRegNo: undefined,
};

const initValError = {
  firstName: false,
  lastName: false,
  phoneNumber: false,
  email: false,
  password: false,
  conformPassword: false,
  companyName: false,
  GSTNo: false,
  // officeNo: false,
  city: false,
  officeEmail: false,
  PANNo: false,
  companyRegNo: false,
};

const initValErrorData = {
  firstName: "Please Enter First name",
  lastName: "Please Enter Last name",
  phoneNumber: "Please Enter Phone number",
  email: "Please Enter valid email",
  password: "Please Enter Password",
  conformPassword: "Please Enter Conform Password",
  companyName: "Please Enter Company Name",
  GSTNo: "Please Enter GST No",
  // officeNo: "Please Enter Office No",
  city: "Please select the City name",
  officeEmail: "Please Enter Office Email",
  PANNo: "Please Enter PAN No",
  companyRegNo: "Please Enter Company Reg No",
};

const SignUpTab = () => {
  const [signUpData, setSignUpData] = useState(initVal);
  const [errorData, setErrorData] = useState(initValError);
  const [errorDataValue, setErrorDataValue] = useState(initValErrorData);
  const { error, loading, user } = useSelector(({ auth }) => auth);
  const history = useHistory();
  const [passError, setPassError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user?.data?._id) {
      history.push("/products");
    }
  }, [user]);

  const handleChangeValue = (e) => {
    let { name, value } = e.target;
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
      }
    } else if (name === "email" || name == "officeEmail") {
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
    }
  };
  const createAccountData = () => {
    setPassError(null);
    var isValid = true;
    var errornew = { ...errorData };
    for (var key in signUpData) {
      if (signUpData[key] === "" || !signUpData[key]) {
        errornew[key] = true;
        isValid = false;
      }
    }
    console.log("errornew", errornew);
    setErrorData({ ...errornew });

    if (signUpData?.password !== signUpData?.conformPassword) {
      isValid = false;
      setPassError(
        "Password and Confirm Password fields value must be matched.",
      );
    } else if (signUpData?.password.length < 6) {
      isValid = false;
      setPassError("Password requires 6 characters minimum.");
    }

    if (isValid) {
      makeSignUpCall(signUpData);
      console.log("signUpData", signUpData);
    }
  };
  const makeSignUpCall = (data) => {
    dispatch(signUpUser(data));
    console.log("vinodddd");
  };
  const validationCheck = () => {
    var formValid = false;
    console.log("signUpData", signUpData);
    for (var key in signUpData) {
      if (signUpData[key] === "" || !signUpData[key]) {
        formValid = true;
      }
    }
    return formValid;
  };
  const allCitys = [
    { id: 45, name: "Bangalore" },
    { id: 45, name: "Hyderabad" },
    { id: 45, name: "Mumbai" },
    { id: 45, name: "Delhi" },
  ];

  console.log("errorData?.email", errorData);
  return (
    <div className="SignupContainer">
      <Form.Group className="signup-md" size="lg" controlId="email">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          autoFocus
          name="firstName"
          type="email"
          value={signUpData?.firstName}
          onChange={(e) => handleChangeValue(e)}
        />
        <Form.Control.Feedback type="invalid">
          {errorData?.firstName ? <>{errorDataValue?.firstName}</> : null}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="signup-md-left" size="lg" controlId="email">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="email"
          name="lastName"
          value={signUpData?.lastName}
          onChange={(e) => handleChangeValue(e)}
        />
        <Form.Control.Feedback type="invalid">
          {errorData?.lastName ? <>{errorDataValue?.lastName}</> : null}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="signup-md" size="lg" controlId="email">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="email"
          maxLength={10}
          name="phoneNumber"
          value={signUpData?.phoneNumber}
          onChange={(e) => handleChangeValue(e)}
        />
        <Form.Control.Feedback type="invalid">
          {errorData?.phoneNumber ? <>{errorDataValue?.phoneNumber}</> : null}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="signup-md-left" size="lg" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={signUpData?.email}
          onChange={(e) => handleChangeValue(e)}
        />
        <Form.Control.Feedback type="invalid">
          {errorData?.email ? <>{errorDataValue?.email}</> : null}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="signup-md" size="lg" controlId="companyName">
        <Form.Label>Company Name</Form.Label>
        <Form.Control
          type="email"
          maxLength={50}
          name="companyName"
          value={signUpData?.companyName}
          onChange={(e) => handleChangeValue(e)}
        />
        <Form.Control.Feedback type="invalid">
          {errorData?.companyName ? <>{errorDataValue?.companyName}</> : null}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="signup-md-left" size="lg" controlId="GSTNo">
        <Form.Label>GST No</Form.Label>
        <Form.Control
          type="email"
          maxLength={20}
          name="GSTNo"
          value={signUpData?.GSTNo}
          onChange={(e) => handleChangeValue(e)}
        />
        <Form.Control.Feedback type="invalid">
          {errorData?.GSTNo ? <>{errorDataValue?.GSTNo}</> : null}
        </Form.Control.Feedback>
      </Form.Group>

      {/* <Form.Group className="signup-md" size="lg" controlId="officeNo">
          <Form.Label>Office No</Form.Label>
          <Form.Control
            type="email"
            maxLength={10}
            name="officeNo"
            value={signUpData?.officeNo}
            onChange={(e) => handleChangeValue(e)}
          />
          <Form.Control.Feedback type="invalid">
                 {errorData?.officeNo ? <>
                 {errorDataValue?.officeNo}
                 </> : null}
             </Form.Control.Feedback>
        </Form.Group> */}

      <Form.Group className="signup-md" size="lg" controlId="city">
        <Form.Label>City</Form.Label>

        <Form.Control
          name="city"
          // isInvalid={x.cityError}
          value={signUpData?.city}
          onChange={(e) => handleChangeValue(e)}
          as="select"
        >
          <option name="">Select</option>
          {(allCitys || []).map((item, key) => {
            return (
              <>
                <option selected={false} name={item.id} value={item.name}>
                  {item.name}
                </option>
              </>
            );
          })}
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          {errorData?.city ? <>{errorDataValue?.city}</> : null}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="signup-md-left" size="lg" controlId="officeEmail">
        <Form.Label>Office Email</Form.Label>
        <Form.Control
          type="email"
          maxLength={100}
          name="officeEmail"
          value={signUpData?.officeEmail}
          onChange={(e) => handleChangeValue(e)}
        />
        <Form.Control.Feedback type="invalid">
          {errorData?.officeEmail ? <>{errorDataValue?.officeEmail}</> : null}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="signup-md" size="lg" controlId="PANNo">
        <Form.Label>PAN No</Form.Label>
        <Form.Control
          type="email"
          maxLength={10}
          name="PANNo"
          value={signUpData?.PANNo}
          onChange={(e) => handleChangeValue(e)}
          isInvalid={errorData?.PANNo}
        />
        <Form.Control.Feedback type="invalid">
          {errorData?.PANNo ? <>{errorDataValue?.PANNo}</> : null}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="signup-md-left" size="lg" controlId="companyRegNo">
        <Form.Label>Company Reg No</Form.Label>
        <Form.Control
          type="email"
          maxLength={50}
          name="companyRegNo"
          value={signUpData?.companyRegNo}
          onChange={(e) => handleChangeValue(e)}
          isInvalid={errorData?.companyRegNo}
        />
        <Form.Control.Feedback type="invalid">
          {errorData?.companyRegNo ? <>{errorDataValue?.companyRegNo}</> : null}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="signup-md" size="lg" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          isInvalid={errorData?.password}
          value={signUpData?.password}
          onChange={(e) => handleChangeValue(e)}
        />
        <Form.Control.Feedback type="invalid">
          {errorData?.password ? <>{errorDataValue?.password}</> : null}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="signup-md-left" size="lg" controlId="password">
        <Form.Label>Conform Password</Form.Label>
        <Form.Control
          type="password"
          name="conformPassword"
          value={signUpData?.conformPassword}
          onChange={(e) => handleChangeValue(e)}
        />
      </Form.Group>

      {passError && <p className="errorMessage">{passError}</p>}
      {error && !passError && <p className="errorMessage">{error}</p>}

      <Button
        disabled={validationCheck()}
        onClick={() => {
          createAccountData();
        }}
        block
        size="lg"
        type="submit"
      >
        {loading ? "Loading" : "Create Account"}
      </Button>
    </div>
  );
};

export default SignUpTab;
