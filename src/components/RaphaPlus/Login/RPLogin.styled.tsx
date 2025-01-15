import styled from "styled-components";

export const RPLoginStyled = styled.div`
  /* height: 100%;
  width: 100%; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;
  padding-left: 0;
  padding-bottom: 2rem;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  & > img {
    width: 100%;
    margin: auto;
    height: 100%;
  }
  & > div {
    width: 100%;
  }
  input {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 0.8rem;
    width: 100%;
  }

  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-card {
    background: linear-gradient(180deg, #27b3a4, rgba(255, 255, 255, 0));
    border-radius: 15px;
    padding: 20px;
    width: fit-content;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .login-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .password-group {
    position: relative;
  }

  .password-group input {
    /* padding-right: 40px; */
  }

  .toggle-password {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-20%);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2em;
  }

  .remember-me-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .remember-me {
    display: flex;
    align-items: center;
    gap: 10px;
    text-wrap: nowrap;
  }

  .login-button {
    background: linear-gradient(135deg, #2bb3a5, #001e3a);
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    color: white;
    font-size: 1em;
    cursor: pointer;
    white-space: nowrap;
  }

  .login-button:hover {
    background: #1f8c89;
  }

  .divider {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 10px 0;
  }

  .line {
    flex: 1;
    height: 1px;
    background: #ccc;
  }

  .divider-text {
    font-size: 0.9em;
    color: #666;
  }

  .social-login-container {
    display: flex;
    justify-content: space-evenly;
    gap: 10px;
  }

  .social-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: white;
    color: black;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 0.7rem;
    cursor: pointer;
    white-space: nowrap;
    /* flex: 1; */
  }

  .social-button:hover {
    background: #f0f0f0;
  }

  .signup-text {
    font-size: 0.9em;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
  }

  .signup-link {
    color: #2bb3a5;
    text-decoration: none;
  }

  .signup-link:hover {
    text-decoration: underline;
  }
  .loginRegWrapper {
    display: flex;
  }
  .loginRegWrapper > div {
    margin: auto;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  .sign-in-container {
    text-align: center;
    font-family: Arial, sans-serif;
  }

  .role-selection {
    display: flex;
    justify-content: center;
    margin-top: 5px;
  }

  .role-option {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 20px;
    height: 100%;
    border: 2px solid transparent;
    border-radius: 10px;
    cursor: pointer;
    transition: border-color 0.3s;
  }

  .role-option.selected {
    border-color: #27b3a4;
  }

  .role-option img {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }

  h1 {
    font-size: 1.5rem;
    text-align: left;
    font-weight: bold;
    color: #403f5e;
  }
  p {
    font-size: 1rem;
    text-align: left;
    font-weight: bold;
    margin-bottom: 0;
  }
`;
