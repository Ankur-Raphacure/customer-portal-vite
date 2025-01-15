import React, { useState , useEffect} from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";

import Button from "react-bootstrap/Button";
import {loginUser} from "../../../../redux/slices/auth/authService";
// import "./styles.css";
import { useHistory, useLocation } from "react-router-dom";
const SignInTab = (props) => {
  const {gotoDelivery} = props;
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errorMobileNumber, setErrorMobileNumber] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const { error, loading, user } = useSelector(({ auth }) => auth);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
      if(user?.data?._id){
        history.push("/products");
      }
  }, [user]);

  function handleSubmit(event) {
    event.preventDefault();
  }
  const gotoValidateLogin = ()=>{
    if(password===""){
      setErrorPassword(true);
    }
     if(mobileNumber===""){
      setErrorMobileNumber(true);
    }
    if(password!=="" && mobileNumber!==""){
      signInCall()
      // gotoDelivery();
    }
  }
  const signInCall = ()=>{
    console.log("vvvv")
    const body  = {
      email: mobileNumber,
      password
    }
    dispatch(loginUser(body));
  }
  const handleChangeValue = e => {
    let { name, value } = e.target;
   
    setErrorMobileNumber(false);
    setMobileNumber(value);
    // if (name == 'mobileNumber') {
    //     const re = /^[0-9\b]+$/;
    //     if (value === '' || re.test(value)) {
        
    //     }
    // }
};

  return (
     
          <div className="LoginContainer">
        <Form.Group size="lg" controlId="mobileNumber">
          <Form.Label>EMail</Form.Label>
          <Form.Control
            autoFocus
            name="mobileNumber"
            type="text"
            // maxLength={10}
            value={mobileNumber}
            className={errorMobileNumber ? "error": ""}
            onChange={(e) => {handleChangeValue(e); }}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            className={errorPassword ? "error": ""}
            onChange={(e) => {setPassword(e.target.value);setErrorPassword(false);}}
          />
        </Form.Group>
        {error && (<p  className="errorMessage">{error}</p>)}
        <Button onClick={()=>{gotoValidateLogin()}} block size="lg" type="submit">
          {loading ? "Loading" : "Login"}
        </Button>
        <p>Forgot Password?</p>
    </div>

       
   
  );
}

export default SignInTab;
