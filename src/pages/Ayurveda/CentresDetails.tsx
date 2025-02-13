import React, { useState } from "react";
import { CentresDetailsstyled } from "./CentresDetails.styled";
import { ReactComponent as Adderess } from "../../../src/assets/icons/address.svg";
import { ReactComponent as Stars } from "../../../src/assets/icons/stars.svg";
import { ReactComponent as Stroke } from "../../../src/assets/icons/stroke.svg";
import { ReactComponent as Share } from "../../../src/assets/icons/share.svg";
import { ReactComponent as Map } from "../../../src/assets/icons/map.svg";
import Phn_img from "../../assets/images/ayurveda/phn_img.png";
import Pl_img from "../../assets/images/ayurveda/pl_img.png";
import a_img from "../../assets/images/ayurveda/a_img.png";
import qr_img from "../../assets/images/ayurveda/qr_img.png";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAyurvedsDiseaseAPI } from "../../redux/slices/generic/genericService";
import TreatmentCard from "./TreatmentCard";

const CentresDetails = (props: any) => {
  console.log("propssss", props);

  const history = useHistory();
  const dispatch = useDispatch();
  const { allAyurvedsDiseaseList } = useSelector(
    (ReduxState: any) => ReduxState.generic,
  );
  const { userCity } = useSelector((ReduxState: any) => ReduxState.auth);
  const [activeButton, setActiveButton] = useState("General Health");
  const item = allAyurvedsDiseaseList?.tests;

  const getLatestData = (city = "bengaluru") => {
    dispatch(getAyurvedsDiseaseAPI({ city: city?.toLowerCase() }));
  };
  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const navigateToPage = (url: string) => {
    history.push(url);
  };
  return (
    <>
      <CentresDetailsstyled>
        <div className=" py-3 p-4">
          <span
            onClick={() => {
              navigateToPage("/ayurveda");
            }}
            className=" text-xl cursor-pointer top-category-sec font-bold mx-2 back-btn-sec opacity-75 "
          >
            <svg
              width="21"
              height="18"
              viewBox="0 0 21 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.6875 7.7152H4.12125L8.88563 2.10999C9.10841 1.84745 9.21559 1.50898 9.18359 1.16903C9.15159 0.829086 8.98304 0.515513 8.715 0.297298C8.44697 0.0790819 8.10141 -0.0259025 7.75435 0.00544001C7.40729 0.0367826 7.08716 0.201885 6.86437 0.464426L0.301875 8.17802C0.257723 8.23937 0.218242 8.30383 0.18375 8.37086C0.18375 8.43514 0.18375 8.47371 0.0918752 8.53799C0.0323842 8.68539 0.00123522 8.8423 0 9.0008C0.00123522 9.1593 0.0323842 9.31621 0.0918752 9.46362C0.0918752 9.5279 0.0918748 9.56647 0.18375 9.63075C0.218242 9.69778 0.257723 9.76223 0.301875 9.82359L6.86437 17.5372C6.98778 17.6823 7.14231 17.799 7.31699 17.879C7.49166 17.959 7.68218 18.0003 7.875 18C8.18167 18.0006 8.47887 17.896 8.715 17.7043C8.8479 17.5964 8.95776 17.4638 9.03829 17.3143C9.11881 17.1647 9.16842 17.001 9.18427 16.8326C9.20012 16.6643 9.1819 16.4945 9.13065 16.333C9.0794 16.1715 8.99614 16.0215 8.88563 15.8916L4.12125 10.2864H19.6875C20.0356 10.2864 20.3694 10.151 20.6156 9.90986C20.8617 9.66876 21 9.34177 21 9.0008C21 8.65984 20.8617 8.33284 20.6156 8.09175C20.3694 7.85065 20.0356 7.7152 19.6875 7.7152Z"
                fill="#444444"
              />
            </svg>{" "}
            &nbsp;
            {` Back`}
          </span>
        </div>
        <div className="flexdesign contenal-1">
          <div className="hospital_item">
            <div className="hospital_img">
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736422837311.png"
                alt=""
                className="custome_img"
              />
            </div>
            <div className="hospital_datalist flex-col inlineflex_start">
              <div className="hospital_data flex-col flex_start">
                <div className="opactiy-95 text-lg poppins-medium">
                  {/* {props.hospital?.name} */}
                  ABC Ayurveda Centre
                </div>
                <div className="opacity-60 text-sm poppins-medium">
                  Serenity Ayurveda, Natural Healing Center
                </div>

                <div className="inlineflex_center hospital_address">
                  <div className="address_icon">
                    <Adderess />
                  </div>
                  <div className="opacity-60 text-sm poppins-medium">
                    {/* {props.hospital?.address ?? props.hospital?.city} */}
                    824 Demond Parks
                  </div>
                </div>

                <div className="hospital_ratingbox inlineflex_center">
                  <div className="hosptial_rating flex_center">
                    <div className="star_icon">
                      <Stars />
                    </div>
                    <div className="stroke_icon">
                      <Stroke />
                    </div>
                  </div>
                  <div className="opacity-70 text-sm poppins-regular">
                    {/* {props.hospital?.rating ?? 4.8} Ratings */}
                    4.8 Ratings
                  </div>
                </div>

                <div className="inlineflex_center hospital_opentime gap-[11px]">
                  <div className="opacity-70 text-sm text-violet poppins-medium">
                    {/* {checkTimes(
                    props.hospital?.slot_start_time,
                    props.hospital?.slot_end_time
                  )}{" "} */}
                    Open Now
                  </div>
                  <div className="opacity-70 text-sm poppins-medium">
                    {/* {formatTime(props.hospital?.slot_start_time) ?? "7:00 AM"} To{" "}
                  {formatTime(props.hospital?.slot_end_time) ?? "9:00 PM"} */}
                    7.00 AM To 9.00 PM
                  </div>
                </div>
              </div>

              <div className="inlineflex_center hospital_helpbox">
                <div className="flex_center hospital_helpdata">
                  <div className="inlineflex_start hospital_helpitem">
                    <div className="hospital_itemdata inlineflex_center">
                      <div className="hospital_helpimg inlineflex_start flex-col">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_700_1487)">
                            <path
                              d="M0.277402 6.422C0.277098 7.51425 0.564723 8.58075 1.11164 9.52078L0.225098 12.7326L3.53766 11.8708C4.45387 12.3657 5.48042 12.625 6.5236 12.6251H6.52634C9.97007 12.6251 12.7733 9.84452 12.7748 6.42688C12.7755 4.7708 12.1261 3.21352 10.9462 2.0419C9.76659 0.870392 8.1977 0.224877 6.52609 0.224121C3.08195 0.224121 0.278875 3.00451 0.277453 6.422"
                              fill="url(#paint0_linear_700_1487)"
                            />
                            <path
                              d="M0.0543359 6.42019C0.0539805 7.55174 0.351914 8.65639 0.918328 9.63008L0 12.957L3.43134 12.0643C4.37679 12.5758 5.44126 12.8455 6.52443 12.8459H6.52722C10.0945 12.8459 12.9985 9.96531 13 6.42533C13.0006 4.70973 12.3279 3.09647 11.1059 1.88288C9.88371 0.66945 8.25871 0.000705426 6.52722 0C2.95933 0 0.0557578 2.88016 0.0543359 6.42019ZM2.09782 9.46239L1.9697 9.26059C1.43112 8.41085 1.14684 7.4289 1.14725 6.42059C1.14837 3.47821 3.5617 1.08434 6.52925 1.08434C7.96636 1.08495 9.31694 1.64082 10.3328 2.64938C11.3485 3.65804 11.9075 4.99885 11.9071 6.42492C11.9058 9.36731 9.49244 11.7615 6.52722 11.7615H6.52509C5.55958 11.761 4.61266 11.5037 3.78686 11.0175L3.59034 10.9019L1.55411 11.4316L2.09782 9.46239Z"
                              fill="url(#paint1_linear_700_1487)"
                            />
                            <path
                              d="M4.90943 3.7361C4.78827 3.46889 4.66076 3.4635 4.54553 3.45881C4.45118 3.45478 4.34332 3.45508 4.23556 3.45508C4.1277 3.45508 3.95246 3.49534 3.80433 3.65583C3.65605 3.81646 3.23822 4.20465 3.23822 4.99417C3.23822 5.78375 3.81779 6.54677 3.89858 6.65394C3.97947 6.76091 5.01744 8.43297 6.66133 9.07622C8.02755 9.61079 8.30558 9.50447 8.60209 9.47766C8.89865 9.45095 9.55901 9.08958 9.69374 8.71484C9.82856 8.34016 9.82856 8.01899 9.78814 7.95187C9.74772 7.88501 9.63986 7.84485 9.47812 7.76463C9.31633 7.68437 8.5212 7.29613 8.37297 7.24257C8.22468 7.18906 8.11688 7.16235 8.00902 7.32304C7.90116 7.48347 7.59144 7.84485 7.49704 7.95187C7.40274 8.05915 7.30834 8.0725 7.14665 7.99223C6.98481 7.91172 6.46395 7.74246 5.84599 7.19581C5.36519 6.77044 5.0406 6.24515 4.94625 6.08446C4.8519 5.92403 4.93614 5.83706 5.01724 5.75709C5.08991 5.68519 5.17903 5.5697 5.25997 5.47603C5.34061 5.38231 5.36753 5.31544 5.42146 5.20842C5.47544 5.1013 5.44842 5.00758 5.40805 4.92731C5.36753 4.84704 5.05324 4.05339 4.90943 3.7361Z"
                              fill="white"
                            />
                          </g>
                          <defs>
                            <linearGradient
                              id="paint0_linear_700_1487"
                              x1="627.711"
                              y1="1251.07"
                              x2="627.711"
                              y2="0.224121"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#1FAF38" />
                              <stop offset="1" stopColor="#60D669" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_700_1487"
                              x1="650"
                              y1="1295.7"
                              x2="650"
                              y2="0"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#F9F9F9" />
                              <stop offset="1" stopColor="white" />
                            </linearGradient>
                            <clipPath id="clip0_700_1487">
                              <rect width="13" height="13" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="opacity-80 text-sm poppins-medium">
                        Need Help?
                      </div>
                    </div>
                  </div>
                  <div className="opacity-60 hospital_share flex_center flex">
                    <div className="share_icon">
                      <Share />
                    </div>
                    <div className="text-black text-sm poppins-medium">
                      Share{" "}
                    </div>
                  </div>
                </div>
                <div className="flex_center hospital_map">
                  <div className="map_icon">
                    <Map />
                  </div>
                  <div className="opacity-70 text-sm poppins-medium">
                    View In Map
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Container d-flex">
            <div className="TextContainer">
              <div className="Heading mt-3">
                Explore <span>Raphacure</span> App
              </div>
              <div className="SubHeading">Available on</div>
              <div className="btns-div">
                <button className="btn btn-dark mb-3 mt-2">
                  <img src={a_img} alt="" className="me-2" />
                  App store
                </button>
                <button className="btn btn-dark">
                  <img src={Pl_img} alt="" className="me-2" />
                  Play Store
                </button>
              </div>

              <div className="qr_code mt-3 ">
                <div className="me-4">
                  <button className="btn custom-btn">Download Now</button>
                </div>
                <div>
                  <img src={qr_img} alt="" />
                </div>
              </div>
            </div>
            <div>
              <img src={Phn_img} alt="" className="Cutome-phone-img mb-3" />
            </div>
          </div>
        </div>

        <div className="search-by-disease">
          <h5>Search</h5>
          <div className=" button-group">
            <button
              className={`btn button me-3 ${
                activeButton === "General Health" ? "active" : ""
              }`}
              onClick={() => handleClick("General Health")}
            >
              General Health
            </button>
            <button
              className={`btn button me-3 ${
                activeButton === "Sexual Health" ? "active" : ""
              }`}
              onClick={() => handleClick("Sexual Health")}
            >
              Sexual Health
            </button>
            <button
              className={`btn button me-3 ${
                activeButton === "Mental Health" ? "active" : ""
              }`}
              onClick={() => handleClick("Mental Health")}
            >
              Mental Health
            </button>
            <button
              className={`btn button me-3 ${
                activeButton === "Cardiovascular" ? "active" : ""
              }`}
              onClick={() => handleClick("Cardiovascular")}
            >
              Cardiovascular
            </button>
            <button
              className={`btn button me-3 ${
                activeButton === "Hair & Skin" ? "active" : ""
              }`}
              onClick={() => handleClick("Hair & Skin")}
            >
              Hair & Skin
            </button>
          </div>
        </div>
        <div className="treatmentWrapper">
          {item?.map((treatment: any, index: any) => {
            return <TreatmentCard mostOrdersSection={true} item={treatment} />;
          })}
        </div>
      </CentresDetailsstyled>
    </>
  );
};

export default CentresDetails;
