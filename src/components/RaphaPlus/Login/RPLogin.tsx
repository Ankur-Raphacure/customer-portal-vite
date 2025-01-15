import { ReactComponent as GoogleIcon } from "../../../assets/icons/google.svg";
import { ReactComponent as FbIcon } from "../../../assets/icons/fb.svg";
import { ReactComponent as DoctorIcon } from "../../../assets/raphaplus/doctor.svg";
import { ReactComponent as PatientIcon } from "../../../assets/raphaplus/patient.svg";
import { ReactComponent as HRIcon } from "../../../assets/raphaplus/hr.svg";
import { RPLoginStyled } from "./RPLogin.styled";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginComp = ({ setShowLogin }: any) => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState("Patient");

  const handleRoleSelection = (role: any) => {
    setSelectedRole(role);
  };
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="sign-in-container">
          <h1>Sign In</h1>
          <p>Please select your role</p>
          <div className="role-selection">
            <div
              className={`role-option ${
                selectedRole === "Doctor" ? "selected" : ""
              }`}
              onClick={() => handleRoleSelection("Doctor")}
            >
              <DoctorIcon />
            </div>
            <div
              className={`role-option ${
                selectedRole === "Patient" ? "selected" : ""
              }`}
              onClick={() => handleRoleSelection("Patient")}
            >
              <PatientIcon />
            </div>
            <div
              className={`role-option ${
                selectedRole === "HR" ? "selected" : ""
              }`}
              onClick={() => handleRoleSelection("HR")}
            >
              <HRIcon />
            </div>
          </div>
        </div>
        <form className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input type="text" placeholder="Email or phone number" />
          </div>
          <div className="form-group password-group">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="remember-me-container">
            <label className="remember-me">
              <input type="checkbox" />
              Remember me
            </label>
            {/* <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label> */}
            <a href="#">Forgot password?</a>
          </div>
          <button type="button" className="login-button">
            Log in
          </button>
        </form>
        <div className="divider">
          <div className="line"></div>
          <span className="divider-text">OR</span>
          <div className="line"></div>
        </div>
        <div className="social-login-container">
          <button className="social-button google">
            <GoogleIcon /> Log in with Google
          </button>
          <button className="social-button facebook">
            <FbIcon /> Log in with Facebook
          </button>
        </div>
        <p className="signup-text">
          Don’t have an account?{" "}
          <a className="signup-link" onClick={() => setShowLogin(false)}>
            Sign up now
          </a>
        </p>
      </div>
    </div>
  );
};

const RegisterComp = ({ setShowLogin }: any) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <div className="login-card">
        <form className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input type="text" placeholder="Email or phone number" />
          </div>
          <div className="form-group password-group">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
            />
            {/* <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button> */}
          </div>
          <button type="button" className="login-button">
            Sign Up
          </button>
        </form>
        <div className="divider">
          <div className="line"></div>
          <span className="divider-text">OR</span>
          <div className="line"></div>
        </div>
        <div className="social-login-container">
          <button className="social-button google">
            <GoogleIcon /> Sign Up with Google
          </button>
          <button className="social-button facebook">
            <FbIcon /> Sign Up with Facebook
          </button>
        </div>
        <p className="signup-text">
          Already have an account?{" "}
          <a className="signup-link" onClick={() => setShowLogin(true)}>
            Login now
          </a>
        </p>
      </div>
    </div>
  );
};

const RPLogin = () => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <RPLoginStyled>
      <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736415398929.png" alt="Login Hero" />
      <div className="loginRegWrapper">
        {showLogin ? (
          <LoginComp setShowLogin={setShowLogin} />
        ) : (
          <RegisterComp setShowLogin={setShowLogin} />
        )}
      </div>
    </RPLoginStyled>
  );
};

export default RPLogin;
