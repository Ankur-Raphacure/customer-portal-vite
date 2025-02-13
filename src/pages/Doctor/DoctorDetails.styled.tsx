import styled from "styled-components";

export const DoctorDetailsStyled = styled.div`
  .doc-details-div {
    padding: 28px 60px 52px 60px;
    padding-bottom: 0;
  }
  .MobileHeader-main-div {
    display: none;
  }
  .bread-crumb-div {
    margin-bottom: 28px;
  }
  .main-container {
    display: flex;
    flex-direction: row;
  }
  .doctor-main-image-sec {
    max-width: 300px;
    object-fit: fill;
  }
  .virtual-types-list-all {
    display: flex;
    margin-top: 30px;
    margin-left: 30px;
    gap: 24px;
    label {
      font-size: 24px;
      text-transform: capitalize;
      padding-left: 7px;
      cursor: pointer;
    }
    input {
      height: 18px;
      width: 18px;
      cursor: pointer;
    }
  }
  .left-side {
    width: 60%;
  }
  .right-side {
    width: 40%;
    // position: sticky;
    // top: 150px;
    // height: 1000px;
  }
  .cardContainer {
    width: 100%;
    border: none;
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    padding: 30px;
    padding-bottom: 10px;
    font-family: Arial, sans-serif;
    background-color: #fff;
  }

  .header {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    margin-bottom: 16px;
  }

  .profile {
    display: flex;
    flex-direction: column;
  }
  .ratingContainer {
    background-color: #007aff;
    color: #fff;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
  }

  .profileContainer {
    display: flex;
    width: 100%;
  }
  .share-btn-icon svg {
    height: 1.5rem;
    width: 1.5rem;
    opacity: 0.5;
  }

  .profileImage {
    /* width: 100%; */
    height: 240px;
    border-radius: 25px;
    margin-right: 16px;
  }

  .info {
    flex: 1;
  }

  .name {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    font-size: 26px;
    letter-spacing: 0.02em;
    font-weight: 600;
    font-family: Inter;
    color: #000;
    margin-bottom: 0px;
  }

  .bannerWrapper {
    position: absolute;
    top: 14rem;
    left: 4.8rem;
    width: 3rem;
    .rectangle {
      background: #92bdf6;
      padding: 2px 4px;
      border-radius: 10px 45px 45px 0;
      font-size: 16px;
      font-weight: 500;
      font-family: Outfit, sans-serif;
      color: #252b61;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .triangle {
      width: 0;
      height: 0;
      border-left: 1rem solid transparent;
      border-top: 0.8rem solid #92bdf6;
    }
  }

  .title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    font-size: 18px;
    letter-spacing: 0.02em;
    font-family: Inter;
    color: #252b61;
    margin-bottom: 5px;
  }

  .qua {
    display: flex;
    flex-direction: row;
    gap: 6px;
    margin-top: 16px;

    img {
      width: 6%;
      height: 22.3px;
    }
  }

  .qualifications {
    font-size: 16px;
    font-family: Inter;
    color: #000;
    text-align: left;
    opacity: 0.5;
    line-height: 1.2;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 12px;
  }

  .lang {
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: baseline;
    /* align-items: center; */

    img {
      width: 19.4px;
      height: 14.8px;
      margin-left: 5px;
    }

    .languages {
      font-size: 16px;
      font-family: Inter;
      color: #000;
      text-align: left;
      opacity: 0.5;
      margin-bottom: 7px;
    }
  }

  .veri {
    display: flex;
    flex-direction: row;
    margin-left: 3px;
    align-items: center;
    gap: 9px;

    img {
      height: 21px;
    }
  }

  .verification {
    font-size: 16px;
    font-family: Inter;
    color: #000;
    text-align: left;
    opacity: 0.5;
    margin-bottom: 7px;
    margin-bottom: 0px;
  }

  .exp {
    display: flex;
    gap: 5px;
    justify-content: center;
    margin-top: 10px;

    img {
      width: 6%;
      height: 21px;
    }
  }

  .experience {
    font-size: 16px;
    font-family: Outfit;
    color: #000;
    text-align: left;
    opacity: 0.5;
  }

  .experienceContainer {
    background-color: #f8f8f8;
    padding: 8px;
    border-radius: 8px;
    margin-bottom: 16px;
    text-align: center;
    font-weight: bold;
    color: #444;
  }

  .servicesContainer {
    border-radius: 15px;
    background-color: rgba(146, 189, 246, 0.2);
    margin-top: 16px;
    opacity: 1;
    padding: 40px;
    padding-bottom: 20px;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h3 {
      font-size: 18px;
      margin-bottom: 5px;
      font-weight: 500;
      font-family: Inter;
      color: #252b61;
      text-align: left;
    }
  }

  .serviceListDiv {
    margin-left: 20px;
  }

  .servicesList {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0px;
    list-style: disc;
    padding: 0;
    margin: 0;
  }

  .servicesList li {
    width: 15rem;
    font-size: 16px;
    letter-spacing: 0.02em;
    font-family: Inter;
    color: #000;
    text-align: left;
  }
  li::marker {
    font-size: 1.5rem;
  }

  .serviceListAll {
    width: fit-content;
    margin-left: auto;
    font-size: 16px;
    text-decoration: underline;
    font-family: Inter;
    color: #71aeff;
    text-align: left;
    border: none;
    background: none;
  }

  /* left-side bottom Hospitals details design */

  .hospital-container {
    margin-top: 35px;
    font-family: Arial, sans-serif;
    background-color: #fff;
    padding: 15px 80px 15px 35px;
    width: 100%;
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    margin-bottom: 3rem;
  }

  .tabs {
    display: flex;
    gap: 20px;
    /* border-bottom: 2px solid #ddd; */
    /* margin-bottom: 16px; */
  }

  .tab {
    background: none;
    border: none;
    font-size: 18px;
    font-weight: 500;
    font-family: Inter;
    text-align: center;
    padding-bottom: 8px;
    cursor: pointer;
    opacity: 0.5;
  }

  .tab.active {
    color: #252b61;
    border-bottom: 4px solid #252b61;
    opacity: 0.9;
  }

  .hospital-list {
    overflow-y: scroll;
    height: auto;
    padding-right: 16px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .hospital-list::-webkit-scrollbar {
    display: none;
  }

  .hospital-card {
    background-color: #fff;
    border-bottom: 2px solid #e0e0e0;
    padding: 16px 0px 0px 0px;
  }

  .info-icon {
    display: inline-block;
    margin-left: 5px;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    border: 2px solid #ccc;
    color: #ccc;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    line-height: 20px;
    cursor: pointer;
    position: relative;
  }

  .detailTooltip {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 8px;
    background-color: #e0e0e0;
    color: #000;
    padding: 12px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-size: 14px;
    text-align: left;
    white-space: normal;
    width: 250px;
    z-index: 1000;
  }

  .detailTooltip::before {
    content: "";
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent #e0e0e0 transparent;
  }
  .down-part {
    display: flex;
    flex-direction: row;
  }

  .hospital-header {
    display: flex;
    flex-direction: column;
  }

  .left-hospital-side {
    width: 29%;
  }

  .middle {
    margin-left: 60px;
  }
  .hospital-name {
    margin-bottom: -10px;
    font-size: 18px;
    font-weight: 500;
    font-family: Inter;
    color: #4a98ff;
    text-align: left;
    margin: 0;
  }

  .hospital-rating {
    font-size: 16px;
    font-family: Inter;
    color: #000;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .stars {
    color: gold;
    font-size: 1.2rem;
  }
  .type-doctor-call-div {
    display: flex;
    margin: 10px 30px;
    gap: 1rem;
  }
  .hospital-address {
    font-size: 16px;
    font-family: Inter;
    color: #000;
    text-align: left;
    width: 100%;
    margin-bottom: 0px;
    display: flex;
    align-items: center;
  }
  .hospital-details {
    font-size: 14px;
    font-family: Inter;
    color: #000;
    text-align: left;
    opacity: 0.5;
  }

  .hospital-directions {
    font-size: 16px;
    font-weight: 500;
    font-family: Inter;
    color: #176cdc;
    text-align: left;
    display: flex;
    align-items: center;
    gap: 5px;

    span img {
      height: 18px;
    }
  }

  .hospital-images {
    display: flex;
    gap: 17px;
    margin: 16px 0;
  }

  .hospital-image {
    width: 70px;
    height: 46.7px;
    border-radius: 5px;
    object-fit: cover;
  }

  .hospital-footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-left: 60px;
  }

  .hospital-timings {
    font-size: 16px;
    font-family: Inter;
    color: #000;
    text-align: left;

    p {
      margin-bottom: 0px;
    }
  }

  .hospital-fee {
    font-size: 1rem;
    font-weight: bold;
    span {
      font-size: 16px;
      font-weight: 600;
      font-family: Inter;
      color: #000;
    }
  }

  .call-now-button {
    border-radius: 45px;
    background-color: #a3dac2;
    font-size: 14px;
    font-weight: 500;
    font-family: Poppins;
    color: #252b61;
    /* height: 100%; */
    border: none;
    padding: 12px 34px;
    cursor: pointer;
  }
  .footer-part {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .call-now-button:hover {
    background-color: #81e6d9;
  }

  .free-question-card {
    width: 300px;
    margin: 0 auto;
    text-align: center;
    font-family: "Arial", sans-serif;
    color: #333;
  }

  .icon-section {
    margin-bottom: 16px;
  }

  .query-icon {
    width: 124.6px;
    height: 124.6px;
  }

  .info-text {
    font-size: 13px;
    font-weight: 500;
    font-family: Inter;
    color: #000;
    text-align: center;
    display: inline-block;
    opacity: 0.5;
  }

  .ask-button {
    background-color: #001f60;
    color: white;
    font-size: 14px;
    padding: 12px 20px;
    border: none;
    border-radius: 45px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .ask-button:hover {
    background-color: #003d99;
  }
  .popover-div {
    width: 100%;
    margin: 10px 30px;
    button {
      color: #71aeff;
      font-family: Outfit, sans-serif;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      width: 50%;
      background-color: #fff;
      display: flex;
      align-items: center;
      border: none;
      padding: 0px;
    }
    .MdKeyboardArrowDown {
      color: #71aeff;
    }
  }
  .vendors-warning-msg {
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    padding-bottom: 8px;
    cursor: pointer;
    opacity: 0.5;
  }
  .dropdown-menu.show {
    padding: 0.5rem;
    height: 10rem;
    overflow: scroll;
  }
  .dropdown-item {
    padding: 0px !important;
  }
  .Change-clinic-div {
    width: 100%;
    cursor: pointer;
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    background-color: #fff;
    border: 0.5px solid #e4e4e4;
    margin-bottom: 1rem;
  }
  .Change-clinic-title {
    padding: 10px 10px 0px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .Change-clinic-name {
    font-size: 16px;
    font-family: Outfit, sans-serif;
    color: #000;
    opacity: 0.6;
    font-weight: 500;
  }
  .Change-clinic-price {
    font-size: 16px;
    font-weight: 600;
    font-family: Outfit, sans-serif;
    color: #000;
    opacity: 0.6;
  }
  .Change-clinic-addr {
    padding: 0px 10px 10px 10px;
    gap: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 12px;
      font-family: Outfit, sans-serif;
      color: #000;
      opacity: 0.5;
      margin: 0px;
    }
  }
  /* Time - slot calendar css ---------------------------------------------------------------------------------------*/

  .ant-dropdown-menu-item {
    border-radius: 4px !important;
    border: 0.5px solid #e4e4e4 !important;
    background: #fff !important;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1) !important;
  }
  .user-add-picker {
    padding: 1rem;
    /* border-radius: 20px; */
    border: 1px solid rgba(234, 210, 210, 0.5);
    background: #edf8f3;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 92px;
    flex-shrink: 0;
    margin-left: 16.23px;
    margin-bottom: 36px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 3rem;
      height: 3rem;
      border-radius: 10px;
      margin-right: 8px;
    }
    p {
      width: 22rem;
      color: #000;
      font-family: Outfit, sans-serif;
      font-size: 18px;
      font-weight: 500;
      letter-spacing: 0.5px;
      margin: 0px;
      line-height: 22px;
      span {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 1;
        color: #726666;
        font-family: Outfit, sans-serif;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 1px;
        width: 12rem;
      }
    }
    button {
      border-radius: 20px;
      border: 1px solid #036;
      color: #252b61;
      font-size: 16px;
      letter-spacing: 1px;
    }
  }
  .showSelectedMember-main-div {
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    box-shadow: 2px 2px 19px 0px rgba(0, 0, 0, 0.1);
    height: 66px;
    p {
      padding: 20px 20px;
      margin: 0px;
      color: #1e1e1e;
      font-family: Outfit, sans-serif;
      font-size: 20px;
      font-weight: 500;
    }
  }
  .showSelectedMember-div {
    height: 500px;
    background: #f8f8ff;
    padding: 20px 20px;
  }
  .selected-member-div {
    border-radius: 10px;
    border: 1px solid rgba(228, 228, 228, 0.6);
    background: rgba(197, 226, 204, 0.6);
  }
  .user-div {
    cursor: pointer;
  }
  .select-member-div {
    border-radius: 10px;
    border: 1px solid rgba(228, 228, 228, 0.6);
    background: #fff;
    height: 109px;
    cursor: pointer;
  }
  .select-member-main-div {
    height: 16rem;
    overflow: scroll;
  }
  .showSelectedMember-title {
    color: rgba(0, 0, 0, 0.7);
    font-family: Outfit, sans-serif;
    font-size: 18px;
    font-weight: 500;
    letter-spacing: 0.27px;
    margin: 0px;
  }
  .showSelectedMember-btn {
    border-radius: 25px;
    background: #252b61;
    color: #f8f8ff;
    font-family: Outfit, sans-serif;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.24px;
    display: flex;
    align-items: center;
  }
  .selected-member-detail {
    display: flex;
    align-items: center;
    padding: 21px 21px;
    img {
      width: 3rem;
      height: 3rem;
      border-radius: 10px;
      margin-right: 8px;
    }
    /* p {
      color: #000;
      font-family: Outfit, sans-serif;
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 0.3px;
      line-height: 15px;
      margin: 0px; */

    span {
      color: #726666;
      font-family: Outfit, sans-serif;
      font-size: 13px;
      font-weight: 400;
      letter-spacing: 1px;
    }
    /* } */
  }
  .select-member-div {
    display: flex;
    align-items: center;
    padding: 21px 21px;
    margin-bottom: 1rem;
    img {
      width: 3rem;
      height: 3rem;
      border-radius: 10px;
      margin-right: 8px;
    }
  }
  .user-name {
    color: #000;
    font-family: Outfit, sans-serif;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.3px;
    margin: 0px;
    margin-bottom: 5px;
  }

  .user-add {
    color: #726666;
    font-family: Outfit, sans-serif;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 1px;
    line-height: 15px;
    margin: 0px;
  }
  .clinic-change-div {
    display: flex;
    align-items: center;
    margin: 0px;
  }
  .time-slot-picker {
    margin-left: 16.23px;
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    border: none;
    font-family: Arial, sans-serif;
    width: 100%;
    padding: 20px 0px;
    background-color: #fff;
  }

  .toggle-container {
    position: relative;
    box-shadow: 2px 2px 18px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    height: 45px;
    overflow: hidden;
    text-align: left;
    font-size: 18px;
    color: #808080;
    font-family: Outfit, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    gap: 64px;
  }

  /* Toggle Labels */
  .toggle-label {
    font-size: 12px;
    letter-spacing: 0.02em;
    font-weight: 500;
    font-family: Inter;
    color: #808080;
    transition: color 0.3s;
    cursor: pointer;
    opacity: 0.5;
  }
  .clinic-details-sec-all-sa {
    text-align: left;
    .clinicc-name {
      margin-bottom: 2px;
    }
    .clinicc-address {
      font-weight: 400;
      font-size: 14px;
    }
  }
  .toggle-label.active {
    font-size: 18px;
    letter-spacing: 0.02em;
    font-family: "Inter", serif;
    color: #252b61;
    border-radius: 1.5px;
    border: none;
    background-color: unset;
    border-bottom: 3px solid #252b61;
    opacity: 1;
    cursor: pointer;
  }
  .disabledTrue {
    cursor: auto;
  }

  /* Toggle Switch */
  .toggle-switch {
    width: 40px;
    height: 20px;
    border-radius: 10px;
    background-color: #252b61;
    position: relative;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .toggle-switch.virtual {
    background-color: #ffffff;
  }

  .toggle-switch.clinic {
    background-color: #ffffff;
  }

  /* Toggle Circle */
  .toggle-circle {
    width: 16px;
    height: 16px;
    background-color: #252b61;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: transform 0.3s;
  }

  .toggle-switch.virtual .toggle-circle {
    transform: translateX(0);
  }

  .toggle-switch.clinic .toggle-circle {
    transform: translateX(20px);
  }

  .day-selector-container {
    padding: 0px 10px;
    box-shadow: 0px 12px 19px -9px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
  }

  /* Arrows */
  .arrow-button {
    background-color: transparent;
    border: none;
    font-size: 37px;
    color: #252b61;
    cursor: pointer;
    padding: 5px;
    user-select: none;
  }

  /* Scrollable Day Selector */
  .day-selector {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    scroll-behavior: smooth;
    white-space: nowrap;
    flex: 1;
  }

  .day-selector::-webkit-scrollbar {
    display: none; /* Hide scrollbar for better design */
  }

  /* Day Button Styling */
  .day-button {
    flex-shrink: 0;
    padding: 10px 20px;
    border: none;
    background-color: unset;
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.3s;

    .day-text {
      font-size: 14px;
      font-family: Inter;
      color: #000;
      text-align: center;
    }

    .slot-count {
      font-size: 12px;
      font-family: Inter;
      color: #1aad69;
    }
  }

  .day-button.selected {
    border-radius: 1.5px;
    border: none;
    background-color: unset;
    border-bottom: 3px solid #252b61;
  }

  .title-slot {
    padding: 0px 27px;
    font-size: 26px;
    letter-spacing: 0.02em;
    font-weight: 500;
    font-family: Inter;
    color: #131313;
    text-align: left;
    margin-bottom: 16px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .fee {
    margin-top: 2rem !important;
    display: flex;
    text-align: center;
    margin: 0px 30px;
    font-size: 16px;
    font-weight: bold;
    color: #555;
    justify-content: space-between;

    h1 {
      font-size: 21px;
      letter-spacing: 0.02em;
      font-family: Inter;
      color: #000;
      opacity: 0.7;
    }

    h2 {
      font-size: 14px;
      letter-spacing: 0.02em;
      font-weight: 500;
      font-family: Inter;
      color: #000;
      margin-right: 0;
    }
  }

  .day-selector {
    display: flex;
    justify-content: space-between;
  }

  .time-slot-container {
    max-height: 15rem;
    overflow-y: auto;
    padding: 10px 10px 10px 47.5px;
    background: #fff;
    border-radius: 6px;
  }

  .time-slot-section {
    margin-bottom: 15px;
  }

  .section-header {
    justify-content: space-between;
    display: flex;
    margin-bottom: 10px;

    p {
      display: flex;
      align-items: center;
      gap: 5px;
      margin-bottom: 0px;

      h1 {
        font-size: 18px;
        font-family: Inter;
        color: #000;
        font-weight: 400;
      }

      h2 {
        font-size: 16px;
        font-family: Inter;
        color: #000;
        opacity: 0.5;
      }
    }
  }

  .slots {
    display: grid;
    /* grid-template-columns: repeat(3, 1fr); */
    gap: 16px 30px;
    padding: 0px 40px 0px 0px;
    p {
      margin-top: 0.5rem;
      margin-bottom: 0px;
      font-size: 16px;
      font-family: Inter;
      color: #000;
      opacity: 0.5;
    }
  }
  .time-slots-div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px 30px;
    padding: 0px 40px 0px 0px;
    height: 10rem;
    overflow: scroll;
  }

  .slot-button {
    width: 100%;
    padding: 8px;
    border: none;
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    background-color: #fff;
    cursor: pointer;
    transition: background-color 0.3s;
    height: 49.8px;
    font-size: 14px;
    font-family: Outfit, sans-serif;
    color: #252b61;
    text-align: center;
  }

  .slot-button.selected {
    background-color: #a3dac2;
    color: #ffffff;
  }

  .slot-button.disabled {
    background-color: #edecec;
    color: #ffffff;
    cursor: not-allowed;
  }

  .time-slot-container::-webkit-scrollbar {
    width: 8px;
  }

  .time-slot-container::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 4px;
  }

  .time-slot-container::-webkit-scrollbar-track {
    background: #f9f9f9;
    margin-top: 10px;
  }

  .book-button {
    width: 90%;
    margin: 0px 27px;
    padding: 18px;
    border: none;
    margin-top: 30px;
    font-weight: 500;
    font-family: Outfit;
    border-radius: 43px;
    height: 63.3px;
    overflow: hidden;
    text-align: center;
    font-size: 18px;
    background-color: #252b61;
    color: #ffffff;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .book-button:disabled {
    background-color: #252b61;
    color: #ffffff;

    cursor: not-allowed;
  }
  .accordion-module-div {
    padding: 0px 30px 30px 30px;
  }
  .accordion-item {
    border: none;
  }
  .accordion-button:not(.collapsed) {
    background-color: #fff;
  }
  button:focus:not(:focus-visible) {
    box-shadow: none;
  }
  .DropdownButton-module-div {
    padding: 0px 30px 30px 30px;
    button {
      width: 100%;
      text-align: start;
      background-color: rgba(240, 218, 105, 0.3);
      border: none;
      font-size: 17px;
      letter-spacing: 0.02em;
      font-weight: 500;
      font-family: Outfit, sans-serif;
      color: #131313;
    }
  }

  .dropdown-menu.show {
    width: 100%;
  }
  .dropdown,
  .dropdown-center,
  .dropend,
  .dropstart,
  .dropup,
  .dropup-center {
    width: 100% !important;
  }
  .no-slots-are-available {
    padding: 30px;
    // text-align: center;
    border-top: 1px solid #e2e2e2;
    p {
      font-size: 18px;
      letter-spacing: 0.02em;
      font-family: Inter;
      color: #000;
      opacity: 0.6;
    }
    button {
      border-radius: 45px;
      border: none;
      /* width: 100%; */
      font-size: 18px;
      color: #252b61;
      font-family: Outfit, sans-serif;
      background: #252b61;
      color: #fff;
      padding: 5px 20px;
    }
  }
  .main-selectedSlot-div {
    padding: 0px 30px 30px 30px;
  }
  .selectedSlot-div {
    display: flex;
    justify-content: space-between;
    p {
      font-size: 21px;
      font-family: Outfit, sans-serif;
      color: #000;
      white-space: pre-wrap;
      margin: 0px;
    }
    button {
      border-radius: 12px;
      background-color: rgba(163, 218, 194, 0.5);
      border: 0.6px solid #252b61;
      box-sizing: border-box;
      width: fit-content;
      height: 43px;
      text-align: center;
      font-size: 16px;
      color: #252b61;
      font-family: Outfit, sans-serif;
      padding: 0px 14px;
      span {
        text-transform: uppercase;
      }
    }
  }
  .book-selectedSlot-div {
    margin-top: 2rem;
    padding: 20px 30px;
    width: 100%;
    border-radius: 6px;
    background-color: rgba(240, 218, 105, 0.3);
  }
  .Slot-Window {
    font-size: 20px;
    letter-spacing: 1.5px;
    font-weight: 600;
    font-family: Outfit, sans-serif;
    color: #252b61;
  }
  .Time-Windows {
    font-size: 26px;
    letter-spacing: 0.02em;
    font-weight: 600;
    font-family: Outfit, sans-serif;
    color: rgba(0, 0, 0, 0.7);
  }
  .options-show {
    font-size: 18px;
    letter-spacing: 0.02em;
    line-height: 32px;
    font-family: Outfit, sans-serif;
    color: #000;
    img {
      height: 16px;
      margin-right: 10px;
    }
  }
  .btn-Windows {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin-top: 2rem;
  }
  .add-more-slot {
    border-radius: 45px;
    border: 1px solid #252b61;
    width: 100%;
    font-size: 18px;
    color: #252b61;
    font-family: Outfit, sans-serif;
  }
  .pay-proceed {
    border-radius: 45px;
    border: none;
    width: 100%;
    font-size: 18px;
    color: #252b61;
    font-family: Outfit, sans-serif;
    background: #252b61;
    color: #fff;
  }
  .selectedSlot-map-data {
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 1rem;
  }
  .time-slot-Available-warning {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 18px;
      font-weight: 400;

      padding-bottom: 8px;
      opacity: 0.5;
    }
  }
  .preferred-time-slot-div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  /* Doctor's card CSS --------------------------------------------------------------------------------- */

  .doctor-card {
    width: 100%;
    margin-left: 16.23px;
    margin-top: 35px;
    box-shadow: 2px 2px 19px rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    background-color: rgba(191, 219, 255, 0.6);
    padding: 30px 37px;
    font-family: "Arial", sans-serif;
    display: flex;
    flex-direction: column;
    gap: 30.34px;
    margin-bottom: 54px;
  }

  .doctor-profile {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    border-radius: 17px;
    background-color: #fff;
    height: 102px;
    padding: 0px 10px;
  }

  .doctor-image {
    width: 80px;
    height: 80px;
    margin-right: 12px;
  }

  .doctor-info {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  .doctor-name {
    font-size: 18px;
    letter-spacing: 0.02em;
    font-weight: 600;
    font-family: Inter;
    color: #000;
    text-align: left;
    opacity: 0.8;
    margin: 0;
  }

  .doctor-specialty {
    font-size: 18px;
    letter-spacing: 0.02em;
    font-family: Inter;
    color: #252b61;
    text-align: left;
    margin-top: 12px;
  }

  .doctor-connect {
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 32.33px;
  }

  .connect-info {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    margin-left: 20px;
    font-size: 14px;
    color: #333;
    gap: 20px;

    span {
      line-height: 1.2;
      font-size: 24px;
      color: #252b61;
      text-align: left;
      font-family: Inter;
    }
  }

  .connect-icon {
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }

  .action-buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 16px;
  }

  .chat-button,
  .instant-connect-button {
    flex: 1;
    padding: 18px 30px;
    font-size: 18px;
    font-family: Inter;
    border: none;
    border-radius: 45px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .chat-button {
    background-color: #fff;
    color: #252b61;
  }

  .instant-connect-button {
    background-color: #001f60;
    color: #fff;
  }
  .name-mobile-view {
    display: none;
  }
  .lang-mobile-view {
    display: none;
  }
  @media (max-width: 768px) {
    .virtual-types-list-row {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10px;
      label {
        font-size: 14px;
        font-size: 14px;
        margin-bottom: 0;
        padding: 0;
      }
    }
    .MobileHeader-main-div {
      display: block;
    }
    .selectedSlot-div {
      button {
        font-size: 13px;
      }
    }
    .languages {
      display: none;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 1;
      width: 100%;
    }
    .user-data {
      width: 13rem;
    }
    .user-add-picker p {
      width: 100%;
    }
    .add-more-slot,
    .pay-proceed {
      font-size: 17px;
    }
    .doc-details-div {
      padding: 10px 10px;
      padding-bottom: 0px;
    }
    .cardContainer {
      padding: 10px;
    }
    .profileContainer {
      flex-direction: column;
    }
    .bannerWrapper {
      display: none;
    }
    .left-side {
      width: 100%;
    }
    .title-web-view,
    .info-web-view,
    .experience-web-view,
    .share-btn-icon-web-view,
    .name-web-view {
      display: none;
    }
    .hospital-container {
      padding: 10px;
    }
    .tabs {
      justify-content: space-around;
    }
    .hospital-address {
      width: 20rem;
    }
    .hospital-directions {
      width: 8rem !important;
    }
    .main-container {
      flex-direction: column-reverse;
    }
    .bread-crumb-div {
      margin: 0;
    }
    .toggle-container {
      height: 100%;
      background: #f0f0f5;
      border-radius: 20px;
      padding: 0.7rem;
      width: fit-content;
      margin: auto;
      span.toggle-label.active {
        background: #fff;
        border-radius: 10px;
        padding: 0.5rem;
        border-bottom: 0;
        font-weight: 800;
      }
    }
    .right-side {
      width: 100%;
    }
    .DropdownButton-module-div {
      display: none;
    }
    .profile {
      background: #e3e3e3;
      height: 7rem;
      width: 7rem;
      border-radius: 7rem;
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0px;
    }
    .profileImage {
      height: 6rem;
      width: 6rem;
      border-radius: 6rem;
      margin-right: 0px;
    }
    .name-mobile-view {
      display: block;
    }
    .profile {
      display: flex;
    }
    .user-add-picker,
    .time-slot-picker {
      margin-left: 0px;
    }
    .time-slot-picker {
      margin-bottom: 30px;
    }
    .toggle-label {
      display: flex;
      flex-direction: row;
      gap: 10px;
      text-wrap: nowrap;
    }
    .toggle-label.active {
      font-size: 12px;
    }
    .fee {
      margin: 0px 10px;
    }
    .fee h1 {
      font-size: 14px;
    }
    .select-member-div {
      height: 100%;
    }
    .showSelectedMember-div {
      height: 100%;
    }
    .lang-mobile-view {
      display: flex;
    }
    .servicesContainer {
      padding: 10px !important;
    }
    .time-slots-div {
      padding: 10px;
      gap: 10px 10px;
    }
    .servicesList {
      grid-template-columns: repeat(1, 1fr) !important;
    }
    .accordion-module-div {
      padding: 0px;
    }
    .query-icon {
      width: 105.6px;
      margin-top: 1rem;
      height: 105.6px;
    }
    .main-selectedSlot-div {
      padding: 0px;
    }
    .selectedSlot-div,
    .book-selectedSlot-div {
      padding: 5px 10px;
    }
    .selectedSlot-map-data {
      align-items: flex-end;
    }
    .selectedSlot-div p {
      font-size: 17px;
    }
    .Slot-Window {
      font-size: 17px;
    }
    .Time-Windows {
      font-size: 18px;
      margin: 0px;
    }
    .options-show {
      font-size: 14px;
      margin: 0px;
    }
    .btn-Windows {
      margin-bottom: 1rem;
    }
  }
  @media (max-width: 480px) {
    .toggle-container {
      /* flex-direction: column; */
      justify-content: center;
      gap: 1rem;
    }
  }
`;
