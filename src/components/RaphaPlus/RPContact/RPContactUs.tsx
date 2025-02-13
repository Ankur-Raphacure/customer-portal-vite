import React from "react";
import { RPContactUsstyled } from "./RPContactUs.styled";
import { MdWifiCalling3 } from "react-icons/md";
import { RiMapPin2Fill } from "react-icons/ri";
import { IoMail } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const RPContactUs = () => {
  return (
    <RPContactUsstyled>
      <div className="mainDiv">
        <div className="card">
          <div className="rightDiv">
            <h2>Contact Information</h2>
            <h5>Say something to start a live chat!</h5>
            <div className="addressDiv">
              <p>
                <span>
                  <MdWifiCalling3 className="me-4" />
                </span>
                +91 95551 66000
              </p>
            </div>
            <div className="addressDiv">
              <p>
                <span>
                  <IoMail className="me-4" />
                </span>
                wellness@raphaplus.com
              </p>
            </div>
            <div className="addressDiv">
              <div>
                <span>
                  <RiMapPin2Fill className="me-4" />
                </span>
              </div>
              <div>
                <p>
                  38/3, 6th Cross, Vibgyor High School Road, opp. Thomas Square,
                  HSR Extension, Reliable Tranquil Layout, Bengaluru,
                  Karnataka-560102.
                </p>
              </div>
            </div>
            <div>
              <ul className="wrapper">
                <li className="icon facebook">
                  <span className="tooltip">Facebook</span>
                  <FaFacebookF />
                </li>
                <li className="icon twitter">
                  <span className="tooltip">Twitter</span>
                  <FaTwitter />
                </li>
                <li className="icon instagram">
                  <span className="tooltip">Instagram</span>
                  <FaInstagram />
                </li>
              </ul>
            </div>
          </div>
          <div className="leftDiv">
            <div className="input-main-div mt-4">
              <div className="input-container col-md-5">
                <input
                  placeholder="First Name"
                  className="input-field"
                  type="text"
                />
                <label className="input-label">First Name</label>
                <span className="input-highlight"></span>
              </div>
              <div className="input-container col-md-5">
                <input
                  placeholder="Last Name"
                  className="input-field"
                  type="text"
                />
                <label className="input-label">Last Name</label>
                <span className="input-highlight"></span>
              </div>
            </div>

            <div className="input-main-div">
              <div className="input-container col-md-5">
                <input
                  placeholder="Email"
                  className="input-field"
                  type="text"
                />
                <label className="input-label">Email</label>
                <span className="input-highlight"></span>
              </div>
              <div className="input-container col-md-5">
                <input
                  placeholder="Phone Number"
                  className="input-field"
                  type="text"
                />
                <label className="input-label">Phone Number</label>
                <span className="input-highlight"></span>
              </div>
            </div>
            <div className="option-div mt-4">
              <h5 className="">Select Subject?</h5>

              <div className="input-main-div">
                <label className="radio-button">
                  <input type="radio" name="example-radio" value="option1" />
                  <span className="radio"></span>

                  <p className="opt-div"> General Inquiry</p>
                </label>

                <label className="radio-button">
                  <input type="radio" name="example-radio" value="option2" />
                  <span className="radio"></span>
                  <p className="opt-div">General Inquiry</p>
                </label>
                <label className="radio-button">
                  <input type="radio" name="example-radio" value="option2" />
                  <span className="radio"></span>
                  <p className="opt-div">General Inquiry</p>
                </label>
                <label className="radio-button">
                  <input type="radio" name="example-radio" value="option2" />
                  <span className="radio"></span>
                  <p className="opt-div"> General Inquiry</p>
                </label>
              </div>

              <div className="input-container col-md-11 mt-4">
                <input
                  placeholder="Write your message.."
                  className="input-field"
                  type="text"
                />
                <label className="input-label">Message</label>
                <span className="input-highlight"></span>
              </div>

              <div className="custom-btn ">
                <button className="">Send Message</button>
              </div>
              <div className="img-div">
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736415549127.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </RPContactUsstyled>
  );
};

export default RPContactUs;
