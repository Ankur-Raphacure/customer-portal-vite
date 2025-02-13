import React, { useEffect, useState } from "react";
import GymModuleCards from "../GymModule/GymModuleCards";
import { GymIndexStyled } from "../GymIndex.styled";
import { Link, useHistory } from "react-router-dom";
import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllFitnessAPI } from "../../../redux/slices/generic/genericService";

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
const cards = [
  {
    id: 1,
    title: "Card 1",
    text: "GYM Centres",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736332914307.png",
    link: "Fitness",
  },
  {
    id: 2,
    title: "Card 2",
    text: "Yoga",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736332798973.png",
    link: "/mallikarjun",
  },
  {
    id: 3,
    title: "Card 3",
    text: "Zumba",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736333038341.png",
    link: "/mallikarjun",
  },
  {
    id: 4,
    title: "Card 4",
    text: "Aerobic",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736333398364.png",
    link: "/mallikarjun",
  },
  {
    id: 5,
    title: "Card 5",
    text: "Courses",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736336866436.png",
    link: "/mallikarjun",
  },
];
const checkBoxData = [
  { name: "Cardio Equipment" },
  { name: "Strength Training Equipment" },
  { name: "Swimming Pool" },
  { name: "Parking" },
  { name: "Locker&Shower Facilities" },
  { name: "Women Friendly" },
];
const Price = [
  { amount: "Less Than 2000" },
  { amount: "2000 To 5000" },
  { amount: "5000 & Above" },
];
const GymCenterList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [selectedCardName, setSelectedCardName] = useState("Gym Centres");

  const { allFitnessList } = useSelector(
    (ReduxState: any) => ReduxState.generic,
  );
  const allFitnessData = allFitnessList?.vendors;

  console.log(allFitnessData, "allFitnessData");

  const handleCardClicks = (cardName: any) => {
    setSelectedCardName(cardName);
  };

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

  return (
    <GymIndexStyled>
      <>
        <div className="gym-back-btn-div">
          <h5 onClick={() => history.push("/newGymlist")}>Back</h5>
        </div>
        <div className="container">
          <div className="row filter-container-div">
            <div className="col-md-4 col-sm-12 filter-gym-div">
              <div className="container">
                <div className="row">
                  {cards.map((card) => (
                    <div className="col-md-10 col-sm-6 p-0" key={card.id}>
                      <button
                        onClick={() => handleCardClicks(card.text)}
                        className="card-link-btn "
                      >
                        <div className="filter-catCardDiv">
                          <div className="filter-imageDiv me-3">
                            <Image
                              src={card.img}
                              className="filter-gym-image-img me-3"
                            />
                          </div>
                          <div>
                            <p
                              className="filter-image-Name"
                              style={{
                                color:
                                  selectedCardName === card.text
                                    ? "#9747ff"
                                    : "black",
                              }}
                            >
                              {card.text}
                            </p>
                          </div>
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
                <div className="row">
                  <div className="col-md-10 col-sm-6 p-0">
                    <div className="filter-catCardDiv">
                      <div className="row ">
                        <h5 className="col-12 d-flex justify-content-start align-items-center mx-3 p-1 mt-2 filter-cat-Card-Div">
                          Facilities and Equipment
                        </h5>
                        {checkBoxData?.map((item, index) => (
                          <div
                            className="col-12 d-flex justify-content-start align-items-center mx-3 p-1"
                            key={index}
                          >
                            <input type="checkbox" className="me-2" />
                            <p className="mb-0 filter-subtitle-cat-Card-Div">
                              {item?.name}
                            </p>
                          </div>
                        ))}
                        <h5 className="col-12 d-flex justify-content-start align-items-center mx-3 p-1 mt-2 filter-cat-Card-Div">
                          Budget-Monthly
                        </h5>
                        {Price?.map((item, index) => (
                          <div
                            className="col-12 d-flex justify-content-start align-items-center mx-3 p-1"
                            key={index}
                          >
                            <input type="checkbox" className="me-2" />
                            <p className="mb-0 filter-subtitle-cat-Card-Div">
                              {item?.amount}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-sm-12 filter-gym-near-me-card-div">
              <div className="d-flex align-items-center">
                <h4 className="gym-near-me">{selectedCardName}</h4>
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control shadow-none"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  Search
                </span>
              </div>

              <div className="">
                {/* {allFitnessData?.map((item: any, index: number) => ( */}
                {/* <div> */}
                <GymModuleCards item={allFitnessData} />
                {/* </div> */}
                {/* // ))} */}
              </div>
            </div>
          </div>
        </div>
      </>
    </GymIndexStyled>
  );
};

export default GymCenterList;
