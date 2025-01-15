import React, { useEffect, useState } from "react";

import { Row, Col, Button, Form } from "react-bootstrap";
import "./styles.css";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Profile_pp from "../../img/Profile_pp.png";

const MyProfile = () => {
  const [addressEnabled, setAddressEnabled] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { error, loading, user } = useSelector(({ auth }) => auth);
  const [currentStep, setCurrentStep] = useState("profile");

  useEffect(() => {}, []);
  const orderIcon =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDI0IDE4Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04LjY5NCAtMTEpIj48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjxwYXRoIGZpbGw9IiMyODc0RjEiIGQ9Ik05IDExdjE3LjEwOGMwIC40OTMuNDEuODkyLjkxOC44OTJoNC45M3YtNS4yNTdoLTMuMDMzbDQuOTEyLTQuNzcgNC45NzIgNC44M2gtMy4wMzVWMjloMTIuNDE3Yy41MDcgMCAuOTE4LS40LjkxOC0uODkyVjExSDl6Ii8+PC9nPjwvc3ZnPg==";
  const userImage =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIyIDIxIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05LjY5NCAtMTApIj48cGF0aCBmaWxsPSIjMjg3NEYwIiBkPSJNMTQuMjc1IDIyLjcwNGMyLjI3Mi0uNDEyIDQuMzQ3LS42MTggNi4yMjUtLjYxOCAxLjg3OCAwIDMuOTUzLjIwNiA2LjIyNS42MThhNS4xNSA1LjE1IDAgMCAxIDQuMjMgNS4wNjhWMzFoLTIwLjkxdi0zLjIyOGE1LjE1IDUuMTUgMCAwIDEgNC4yMy01LjA2OHptMS4yNzQtNy43MjRjMC0yLjU4IDIuMTYzLTQuNjczIDQuODMyLTQuNjczIDIuNjY3IDAgNC44MyAyLjA5MiA0LjgzIDQuNjczIDAgMi41OC0yLjE2MyA0LjY3My00LjgzIDQuNjczLTIuNjcgMC00LjgzMy0yLjA5Mi00LjgzMy00LjY3M3oiLz48ZWxsaXBzZSBjeD0iMjAuNTU3IiBjeT0iMjAiIHJ4PSIyMC41NTciIHJ5PSIyMCIvPjwvZz48L3N2Zz4=";

  const onClickInfo = (val) => {
    setCurrentStep(val);
  };
  const gotoPage = (url) => {
    history.push(url);
  };
  return (
    <>
      <div className="myProfile-wrapper">
        <div className="myProfile-text">
          <div className="myProfile-container">
            <div className="profile-left-container">
              <div className="profile-top">
                <div className="profile-image">
                  {/* className="imageIcon" height="50px" width="50px" */}
                  <img
                    className="imageIcon"
                    height="50px"
                    width="50px"
                    src={Profile_pp}
                    alt=""
                  />
                  <div className="profile-name">
                    <p className="profile-hello">Hello,</p>
                    <p className="profile-username">{`${user?.data?.firstName} ${user?.data?.lastName}`}</p>
                  </div>
                </div>
              </div>

              <div className="profile-menu">
                <div className="orderSection ordersectionpage">
                  <div className="ordersecimage">
                    <img src={orderIcon} alt="" />
                  </div>
                  <div
                    className="orderSection-row"
                    onClick={() => {
                      gotoPage("/orderHistory");
                    }}
                  >
                    <span>My Orders</span>
                    <span>
                      <svg
                        width="16"
                        height="27"
                        viewBox="0 0 16 27"
                        xmlns="http://www.w3.org/2000/svg"
                        className="HQ6J2h"
                      >
                        <path
                          d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
                          fill="#878787"
                          className=""
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="orderSection ">
                  <div className="ordersecimage">
                    <img src={userImage} />
                  </div>
                  <div className="orderSection-row">
                    <span>ACCOUNT SETTINGS</span>
                    <span></span>
                  </div>
                </div>
                <div className="list-menu-items">
                  <div
                    className={
                      currentStep == "profile"
                        ? "list-menu-item selected"
                        : "list-menu-item"
                    }
                    onClick={() => {
                      onClickInfo("profile");
                    }}
                  >
                    Profile Information 1
                  </div>
                  <div
                    className={
                      currentStep == "address"
                        ? "list-menu-item selected"
                        : "list-menu-item"
                    }
                    onClick={() => {
                      onClickInfo("address");
                    }}
                  >
                    Manage Addresses
                  </div>
                  <div
                    className={
                      currentStep == "pancard"
                        ? "list-menu-item selected"
                        : "list-menu-item"
                    }
                    onClick={() => {
                      onClickInfo("pancard");
                    }}
                  >
                    Business Information
                  </div>
                </div>

                <div className="orderSection logoutsectionpage">
                  <div className="ordersecimage">
                    <svg
                      width="24"
                      height="24"
                      className=""
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#2874F0"
                        strokeWidth="0.3"
                        stroke="#2874F0"
                        d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"
                      ></path>
                    </svg>
                  </div>
                  <div className="orderSection-row">
                    <span>Log out</span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-right-container">
              <div className="profile-content">
                {/* {currentStep === "profile" ? <>
                  <UserProfile />
                </>
                  : currentStep === "address" ?
                    <ManageAddresses />
                    : <PanCardInformation />
                } */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
