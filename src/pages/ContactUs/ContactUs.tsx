import React, { useState } from "react";
import ContactBannerImg from "../../assets/images/contactusbanner.png";
import { ContactUsStyled } from "./ContactUs.styled";
import googlePlay from "../../assets/images/googleplay.png"; // Replace with actual path
import appStore from "../../assets/images/appstore.png"; // Replace with actual path
import qrCode1 from "../../assets/images/playstoreqr.png"; // Replace with actual path
import qrCode2 from "../../assets/images/appstoreqr.png"; // Replace with actual path
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { Checkbox } from "antd";

const ContactUs = () => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = (e: any) => {
    setIsCheckboxChecked(e.target.checked);
  };

  return (
    <ContactUsStyled>
      <div className="banner">
        <img src={ContactBannerImg} alt="" />
      </div>
      <div className="contact-form-container">
        <div className="contact-info-section">
          <h1>We're Here to Help</h1>
          <p>
            Reach out to us for any inquiries, support, or feedback. We look
            forward to connecting with you!
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <FaLocationDot fill="#9747FF" size={30} />
              <span>
                38/3, 6th cross, road, opp. Thomas Square, HSR Extension,
                VIBGYOR High school, Reliable Tranquil Layout, Bengaluru,
                Karnataka 560102
              </span>
            </div>
            <div className="contact-item">
              <FaPhoneAlt fill="#9747FF" size={20} />
              <span>+91 9555166000</span>
            </div>
            <div className="contact-item">
              <MdMail fill="#9747FF" size={20} />
              <span>wellness@raphacure.com</span>
            </div>
          </div>
          <div className="app-links">
            <img src={googlePlay} alt="Google Play" className="app-icon" />
            <img src={appStore} alt="App Store" className="app-icon" />
          </div>
          <div className="qr-codes">
            <img src={qrCode1} alt="QR Code 1" className="qr-code" />
            <img src={qrCode2} alt="QR Code 2" className="qr-code" />
          </div>
        </div>
        <div className="form-section">
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="First Name*" required />
              <input type="text" placeholder="Last Name*" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email*" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Phone Number*" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Your message..." required></textarea>
            </div>
            <div className="form-group">
              <Checkbox onChange={handleCheckboxChange}>
                By submitting this form, you hereby grant us permission to
                contact you via SMS, WhatsApp, RCS, Email, and any other
                channel.
              </Checkbox>
            </div>
            <button
              type="submit"
              className="submit-button"
              disabled={!isCheckboxChecked}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </ContactUsStyled>
  );
};

export default ContactUs;
