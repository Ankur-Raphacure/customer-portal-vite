// CategoryCards.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as Badgetwo } from "../../../../assets/icons/badgetwo.svg";
import { handleAddToCart } from "../../../../redux/slices/checkout/checkoutSlice";
import { updateShowLoginModel } from "../../../../redux/slices/auth/authSlice";
import {
  getCategoriesAPI,
  getGymVendorsAPI,
} from "../../../../redux/slices/generic/genericService";
import { handleAddToCartDoctor } from "../../../../redux/slices/checkout/checkoutSlice";
import { updateDoctordetails } from "../../../../redux/slices/bookingScreen/bookingScreenSlice";

const gymlist = [
  {
    id: 1,
    gymname: "Gold Gym1111",
    activity: "Zumba , Aerobic , Gym",
    location: "Hsr Layout 1st main road ",
    facility: "31",
    price: 199,
    distance: 1,
  },
  {
    id: 1,
    gymname: "Gold Gym",
    activity: "Zumba , Aerobic , Gym",
    location: "Hsr Layout 1st main road ",
    facility: "31",
    price: 199,
    distance: 1,
  },
  {
    id: 1,
    gymname: "Gold Gym",
    activity: "Zumba , Aerobic , Gym",
    location: "Hsr Layout 1st main road ",
    facility: "31",
    price: 199,
    distance: 1,
  },
];

const GymlistDetail = (props: any) => {
  const { handleJonNow, vendorInfo } = props;
  const [addressEnabled, setAddressEnabled] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { allGymVendorsList, allGymCategoriesList } = useSelector(
    (ReduxState: any) => ReduxState.generic
  );
  const { userCity, user } = useSelector((ReduxState: any) => ReduxState.auth);
  console.log("allGymVendorsList", allGymVendorsList);
  console.log("allGymCategoriesList", allGymCategoriesList);
  // useEffect(() => {
  //   // dental_care
  //   console.log("propsprops", props);
  //   getLatestData(userCity?.name);
  // }, []);
  useEffect(() => {
    getLatestData(userCity?.name);
  }, [userCity?.name]);

  const getLatestData = (city = "bengaluru") => {
    // dispatch(getGymVendorsAPI({ type: "gym", city: city?.toLowerCase() }));
    dispatch(getCategoriesAPI({ type: "gym", city: city?.toLowerCase() }));
  };
  const handleBookNow = async (test: any, vendor: any) => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      await dispatch(
        updateDoctordetails({
          doctorDetails: test,
          hospitalDetails: vendor,
          categoryType: "gym",
          slot1: {},
          slot2: {},
        })
      );
      history.push(`/gym/bookingReview`);
    }

    // const cName = "gym";
    // const neList = [] as any;
    // neList.push({
    //   doctorDetails: test,
    //   hospitalDetails: vendor,
    //   categoryName: cName,
    // });
    // await dispatch(handleAddToCartDoctor(neList));
    // history.push("/checkout");
  };
  console.log("vendorInfo", vendorInfo);
  return (
    <div className="container">
      <div className="gymdetail-wrapper">
        {allGymCategoriesList?.vendors?.map((item: any) => (
          <div className="gyminside">
            <div className="item">
              <div className="column image">
                <img src={"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736336185030.png"} alt="Gym Details Image" />
                <div className="image-caption">
                  <Badgetwo /> 20% Saving Use Coupon Rapha 4
                </div>
              </div>

              <div className="column text">
                <h2 className="gymname">{item.name}</h2>
                <br />
                <p className="activities">Address: {item.address}</p>
                <p className="location">City: {item.city}</p>
                <p className="location">Type: {`GYM`} Facility</p>
                {/* <p className="price">
                  <span className="pricecolor">{item.price?.actual_cost}</span>/
                  Month <sup className="gst">+ GST</sup>
                </p>
                <p className="price">
                  <span className="pricecolor">
                    {item.price?.discounted_price}
                  </span>
                  / Month <sup className="gst">+ GST</sup>
                </p> */}
                <div className="parent-gym-button">
                  {vendorInfo?.id !== item?.id && (
                    <button
                      className="primary-button"
                      onClick={() => {
                        handleJonNow(item);
                      }}
                    >
                      Join Now
                    </button>
                  )}
                </div>
              </div>
              <div className="column buttongym">
                <p className="distance">{item.distance} Km Away</p>

                {/* <Link className="joinbtn" to={`/Detailedgym`} key={item.id}>
                  Join Now
                </Link> */}
              </div>
            </div>
            {vendorInfo?.id === item?.id && (
              <div className="gym-tests-all">
                {vendorInfo?.tests?.map((item1: any) => {
                  console.log("item1", item1);
                  return (
                    <div className="gym-tests-box">
                      <div>
                        <h6>{item1?.service_name}</h6>
                        <div className="gym-box-sec-bot">
                          <div>
                            <p className="hide-opacity">{item1?.description}</p>
                            <p>
                              <span className="hide-opacity">Price:</span> ₹
                              {item1?.price?.discounted_price
                                ?.toFixed(2)
                                ?.toLocaleString("en-US")}
                            </p>
                          </div>
                          <button
                            className="primary-button"
                            onClick={() => {
                              handleBookNow(item1, item);
                            }}
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div></div>
              </div>
            )}
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GymlistDetail;
