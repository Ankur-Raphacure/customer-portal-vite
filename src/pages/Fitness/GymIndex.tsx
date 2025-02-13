import React, { useEffect } from "react";

import GymGategoryList from "./GymCategory/GymGategoryList";

import GymModuleCards from "./GymModule/GymModuleCards";
import { GymIndexStyled } from "./GymIndex.styled";
import { useDispatch, useSelector } from "react-redux";
import { getAllFitnessAPI } from "../../redux/slices/generic/genericService";

const workout = [
  {
    title: "Improved Physical Health",
    sub_title:
      "Strengthens muscles, improves heart health, and reduces disease risk.",

    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736404812651.png",
  },
  {
    title: "Enhanced Mental Well-being",
    sub_title:
      "Exercise releases endorphins, reducing stress, anxiety, and depression",

    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736404871261.png",
  },
  {
    title: "Increased Energy Levels",
    sub_title: " helping you feel more energized throughout the day.",

    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736404960564.png",
  },
  {
    title: "Weight Management",
    sub_title: "Helps with weight loss and metabolism.",

    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736404112974.png",
  },
  {
    title: "Better Sleep Quality",
    sub_title: "Promotes deeper, more restful sleep.",

    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736404282669.png",
  },
];

const allNearByLabssList = [
  {
    service_code: 1,
    service_name: "Golden Gym",
    address: "Hsr Layout Banglore[1Km Away]",
    price: {
      discounted_price: 999,
    },
  },
  {
    service_code: 4,
    service_name: "Golden Gym",
    address: "Hsr Layout Banglore[1Km Away]",
    price: {
      discounted_price: 999,
    },
  },
  {
    service_code: 2,
    service_name: "Golden Gym",
    address: "Hsr Layout Banglore[1Km Away]",
    price: {
      discounted_price: 999,
    },
  },
  {
    service_code: 3,
    service_name: "Golden Gym",
    address: "Hsr Layout Banglore[1Km Away]",
    price: {
      discounted_price: 999,
    },
  },
];

const GymIndex = () => {
  const dispatch = useDispatch();
  const { allFitnessList } = useSelector(
    (ReduxState: any) => ReduxState.generic,
  );

  useEffect(() => {
    const body = {
      type: "gym",
      count: 30,
      page: 0,
      // count: treatmentNumberPerPage,
      // page: treatmentCurrentPage,
      searchText: "",
    };
    dispatch(getAllFitnessAPI(body));
  }, []);
  const allFitnessData = allFitnessList?.vendors;
  return (
    <GymIndexStyled>
      <div className="banner-wrapper">
        <div className="banner">
          <div className="sub-banner">
            <div className="left-content">
              <h2>
                JOIN THE{" "}
                <span className="left-content-span">FITNESS ELITE</span> BOOK{" "}
                <br />
                YOUR GYM WORKOUT AND <br /> ELEVATE YOUR HEALTH TODAY!
              </h2>
              <p className="ptext">
                Achieve your fitness goals with expert guidance and personalized
                workout <br /> plans. Don't miss out on transforming your body
                and mind-reserve your <br /> spot today!
              </p>

              <button className="subscribe btn ">Book Now</button>
            </div>
            <div className="right-content">
              <div className="fitness-img-div">
                <img
                  src={
                    "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736406643600.png"
                  }
                  alt="fitness"
                  className="fitness-girl-img"
                />
                <img
                  src={
                    "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736403350158.png"
                  }
                  alt="fitness"
                  className="fitness-text-img"
                />
              </div>
            </div>
          </div>
          <div className="banner-1">
            <div className="banner-1-text-div">
              <h4>1500+ </h4>
              <h5>Fitness Centres</h5>
            </div>
          </div>
        </div>
        <div className="banner-2">
          <div className="banner-3">
            <div className="banner-1-text-div"></div>
          </div>
          <div className="gym-cards-div">
            <GymGategoryList />
          </div>
          <div className="banner-4">
            <div className="banner-4-text-div">
              <h4>Key Health Gains from </h4>
              <h4>
                <span>Regular Workouts</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="Banner">
          {workout?.map((item, index) => {
            return (
              <div className="WorkoutDiv" key={index}>
                <div>
                  <img src={item.img} alt={item.title} />
                  <h4>{item.title}</h4>
                  <h6>{item.sub_title}</h6>
                </div>
              </div>
            );
          })}
        </div>
        <div className="gym-banner-wrapper banner-style">
          <div className="gym1-banner-div">
            <div className="gym-left-content">
              <h2>
                Crazy Deals <span>60%</span> <br /> <span>Off</span> Treadmills
              </h2>
              <p className="gym-ptext-div">
                Enhance your fitness journey with top-quality treadmills at
                amazing prices. <br /> Experience the convenience of home
                workouts without breaking the bank- <br />
                shop now and start your fitness transformation
              </p>

              <button className="shopnow">SHOP NOW</button>
            </div>
            <div className="right-content">
              <img
                src={
                  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736406171478.png"
                }
                alt="fitness"
              />
            </div>
          </div>
        </div>

        <div className="gym-near-me-card-div">
          <div className="row ">
            <h4 className="gym-near-me">Gym’s Near Me</h4>
            <div className="row">
              {/* {allNearByLabssList?.map((item: any, index: number) => ( */}
              <div>
                <GymModuleCards item={allFitnessData} />
              </div>
              {/* // ))} */}
            </div>
          </div>
        </div>
      </div>
    </GymIndexStyled>
  );
};

export default GymIndex;
