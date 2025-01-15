

import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import SignInTab from "./components/SingInTab";
import SignUpTab from "./components/SignUpTab";

import "./styles.css";

const Signin = (props) => {
  // local state

  const [activeTab, setActiveTab] = useState(0);
  const [loginFormTitle, setLoginFormTitle] = useState('Sign in to your existing account.');
  // local state
  let location = useLocation();

  useEffect(() => {
    let urlQueryString = location.search;
    let signInType = new URLSearchParams(urlQueryString).get('returnUrl');

  }, [location.search])
  const gotoDelivery = ()=>{
      console.log("vino")
    props?.updateStep('delivery');
  }

  return (
    <div className="loginsignupContainer">
    <div className="data-loginsignupContainer">

   
        <div className="freshbag_signin_header">
          {activeTab === 0
            ? loginFormTitle
            : "Create an account for faster ."}
            {/* future Checkouts */}
        </div>
        <Row className={"tabHeaderDesktop"}>
          <Col xs={6} onClick={() => setActiveTab(0)} className={activeTab === 0 ? " tabActive" : "tabInActive"}>
            <span >
              Sign In
            </span>
          </Col>
          <Col xs={6} onClick={() => setActiveTab(1)} className={activeTab === 1 ? " tabActive" : "tabInActive"}>
            <span >
              Create Account
            </span>
          </Col>
        </Row>
        {activeTab === 0 && <SignInTab gotoDelivery={gotoDelivery} />}
        {activeTab === 1 && (
          <SignUpTab onSignUpSuccess={() => setActiveTab(0)} />
        )}
     
    </div>
    </div>
  );
};

export default Signin;
