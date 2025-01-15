import React, { useState } from "react";
import { PackageListStyled } from "./PackageList.styled";
import HArticle_3 from "../../assets/images/healtharticle/Article-1.png";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
const PackageList = (props: any) => {
  const { mostOrdersSection, item, addToCart } = props;
  const [file, setFile] = useState(null);
  const [addressEnabled, setAddressEnabled] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const navigateToselectedlabdetail = () => {};
  const handleChange = (e: any) => {
    setFile(e.target.files[0]);
  };
  return (
    <PackageListStyled>
      <div>
        <div className="near-you-item">
          <div className=" cardstyle px-2 py-2 flex  flex-col">
            <div className="relative imgspace">
              <img
                src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736332821023.png"
                alt="Health360"
                className="w-full h-full object-cover rounded-t-xl w-xl"
              />
            </div>
            <div className="rating-sec-box">
              <span className="rating-sec-box-text">
                <span className="ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                  >
                    <path
                      d="M2.48625 12.5L3.5425 8.06316L0 5.07895L4.68 4.68421L6.5 0.5L8.32 4.68421L13 5.07895L9.4575 8.06316L10.5137 12.5L6.5 10.1474L2.48625 12.5Z"
                      fill="#FFD233"
                    />
                  </svg>
                </span>
                <span className="rating">{`3.1 (234)`}</span>
              </span>
            </div>
            <div className=" heading-name-rating flex flex-col mt-1">
              {!mostOrdersSection ? (
                <>
                  <div>
                    <div className="">
                      <h6 className="float-left1 text-sm heading text-bold">
                        Alb/Glb ratio
                        {/* {item?.service_name || `Lab Name`} */}
                      </h6>
                    </div>
                    <div>
                      <p className="tests-include-list">1 Test Included</p>
                      <p className="amount-box">
                        <svg
                          width="8"
                          height="11"
                          viewBox="0 0 8 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.9"
                            d="M0.727273 0H8L7.27273 1.22222H4.90182C5.25091 1.57667 5.51273 1.99222 5.66545 2.44444H8L7.27273 3.66667H5.81818C5.7278 4.42849 5.33387 5.14235 4.70025 5.69251C4.06663 6.24267 3.23046 6.5969 2.32727 6.69778V6.72222H1.81818L6.18182 11H4.36364L0 6.72222V5.5H1.81818C3.09818 5.5 4.16 4.70556 4.33455 3.66667H0L0.727273 2.44444H4.11636C3.70909 1.72333 2.83636 1.22222 1.81818 1.22222H0L0.727273 0Z"
                            fill="black"
                          />
                        </svg>{" "}
                        100.00 {/* {item?.price?.discounted_price}.00{" "} */}
                        <svg
                          width="13"
                          className="svg-info-icon"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            opacity="0.5"
                            d="M7.15 3.25H5.85V7.15H7.15V3.25ZM6.5 8.45C6.31584 8.45 6.16135 8.5124 6.03655 8.6372C5.91175 8.762 5.84957 8.91627 5.85 9.1C5.85044 9.28373 5.91284 9.438 6.0372 9.5628C6.16157 9.6876 6.31584 9.75 6.5 9.75C6.68417 9.75 6.83844 9.6876 6.9628 9.5628C7.08717 9.438 7.14957 9.28373 7.15 9.1C7.15044 8.91627 7.08804 8.76178 6.9628 8.63655C6.83757 8.51132 6.6833 8.44913 6.5 8.45ZM6.5 3.8147e-06C7.39917 3.8147e-06 8.24417 0.170737 9.035 0.512204C9.82583 0.85367 10.5138 1.31669 11.0988 1.90125C11.6838 2.48582 12.1468 3.17374 12.4878 3.965C12.8288 4.75627 12.9996 5.60127 13 6.5C13.0004 7.39874 12.8297 8.24373 12.4878 9.035C12.1459 9.82627 11.6829 10.5142 11.0988 11.0988C10.5146 11.6833 9.8267 12.1463 9.035 12.4878C8.2433 12.8293 7.3983 13 6.5 13C5.6017 13 4.75671 12.8293 3.96501 12.4878C3.17331 12.1463 2.48539 11.6833 1.90126 11.0988C1.31712 10.5142 0.85389 9.82627 0.511558 9.035C0.169225 8.24373 -0.00129223 7.39874 7.62939e-06 6.5C0.00130749 5.60127 0.172041 4.75627 0.512207 3.965C0.852374 3.17374 1.31539 2.48582 1.90126 1.90125C2.48712 1.31669 3.17504 0.853455 3.96501 0.511555C4.75497 0.169655 5.59997 -0.000863075 6.5 3.8147e-06ZM6.5 1.3C5.04834 1.3 3.81876 1.80375 2.81126 2.81125C1.80376 3.81875 1.30001 5.04834 1.30001 6.5C1.30001 7.95167 1.80376 9.18125 2.81126 10.1888C3.81876 11.1963 5.04834 11.7 6.5 11.7C7.95167 11.7 9.18125 11.1963 10.1888 10.1888C11.1963 9.18125 11.7 7.95167 11.7 6.5C11.7 5.04834 11.1963 3.81875 10.1888 2.81125C9.18125 1.80375 7.95167 1.3 6.5 1.3Z"
                            fill="black"
                          />
                        </svg>{" "}
                      </p>
                    </div>
                    <div className="more-labs-action-btns">
                      <button className="view-details-btn">View Details</button>
                      <button
                        className="add-to-cart-btn"
                        // onClick={() => {
                        //   addToCart(item);
                        // }}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex">
                    <h3 className="float-left22 text-sm heading text-bold">
                      Json's
                      {/* {item?.service_name || `Lab Name`} */}
                    </h3>
                  </div>
                  <div className="flex locatio-name-sec-row mt-2">
                    <span className="flex float-left labs-near-sec-name text-sm opacity-70 text-overflow   ">
                      <img src={HArticle_3} className="w-5 h-5 flex " />
                      &nbsp; {`HSR, Bengaluru, Karnataka`}
                    </span>
                  </div>
                  <div className=" locatio-name-sec-row flex">
                    <span className="flex  labs-near-sec-name float-left text-sm opacity-70 overflow-x-hidden text-overflow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                      >
                        <path
                          opacity="0.5"
                          d="M12.6 3.3H9.8V1.9C9.8 1.13 9.17 0.5 8.4 0.5H5.6C4.83 0.5 4.2 1.13 4.2 1.9V3.3H1.4C0.63 3.3 0 3.93 0 4.7V13.1C0 13.87 0.63 14.5 1.4 14.5H12.6C13.37 14.5 14 13.87 14 13.1V4.7C14 3.93 13.37 3.3 12.6 3.3ZM5.6 1.9H8.4V3.3H5.6V1.9ZM9.8 9.6H7.7V11.7H6.3V9.6H4.2V8.2H6.3V6.1H7.7V8.2H9.8V9.6Z"
                          fill="black"
                        />
                      </svg>{" "}
                      &nbsp;{`Radiology, Cardiology, Ophtho.`}
                    </span>
                  </div>

                  <button
                    // onClick={navigateToselectedlabdetail}
                    className="btn-view-text"
                  >
                    View Test
                  </button>
                </>
              )}
            </div>
          </div>
        </div>{" "}
      </div>
    </PackageListStyled>
  );
};

export default PackageList;
