import React, { useEffect, useRef, useState } from "react";
import { GymIndexStyled } from "../GymIndex.styled";
import GymModuleCards from "../GymModule/GymModuleCards";
import { ReactComponent as Direaction } from "../../../assets/icons/Direction_icon.svg";
import { ReactComponent as Call } from "../../../assets/icons/Call_icon.svg";
import { ReactComponent as Share } from "../../../assets/icons/Share_icon.svg";
import { ReactComponent as Yoga } from "../../../assets/icons/Yoga_icon.svg";
import { ReactComponent as Zumba } from "../../../assets/icons/Zumba_icon.svg";
import { ReactComponent as Aerobic } from "../../../assets/icons/Aerobic_icon.svg";
import { ReactComponent as Gym } from "../../../assets/icons/Gym_icon.svg";
import { useHistory, useLocation } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { GymModuleCardsStyled } from "../GymModule/GymModuleCards.styled";
import { useDispatch, useSelector } from "react-redux";
import { getAllFitnessAPI } from "../../../redux/slices/generic/genericService";

const GymViewDetails = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const bookNowRef = useRef<any>(null);
  const item = location.state as any;

  const { allFitnessList } = useSelector(
    (ReduxState: any) => ReduxState.generic
  );
  const allFitnessData = allFitnessList?.vendors;

  const [activeButton, setActiveButton] = useState("Gym");
  const stars = Array.from({ length: 5 }, (_, index) =>
    index < item?.rating ? "⭐" : "☆"
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

  return (
    <GymIndexStyled>
      <div className="p-5 ">
        <div className="mx-4 back-btn-gym-div">
          <h5
            onClick={() => history.push("/Gymlist/gymcenterlist")}
          >{`< Back`}</h5>
        </div>
        <div className="gym-banner-wrapper banner-style">
          <div className="gym1-banner-div">
            <div className="gym-left-content-view-div">
              <img
                src={item?.image ? item?.image : "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736403457823.png"}
                alt=""
                className="w-100"
              />
            </div>
            <div className="gym-right-content-view-div d-flex">
              <div className="d-flex">
                <div className="column-images d-flex flex-column me-4">
                  <img src={"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736403220159.png"} alt="Gym View 1" className="mb-3" />{" "}
                  <img src={"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736403595320.png"} alt="Gym View 2" className="mb-3" />
                </div>
                <div className="final-column-images">
                  <img src={"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736403538735.png"} alt="Gym View 3" />
                  <div className="d-flex justify-content-between align-items-center  mt-4">
                    <p className="gym-media-icon-div">
                      <Direaction className="me-1" />
                      Direction
                    </p>
                    <p className="gym-media-icon-div">
                      <Call className="me-1" />
                      Call
                    </p>
                    <p className="gym-media-icon-div">
                      <Share className="me-1" />
                      Share
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gym-banner-wrapper banner-style">
          <div className="btn-add-gym-div">
            <div className="add-gym-div">
              <h4 className="gym-view-title-div">{item?.name}</h4>
              <p className="gym-view-param-div">
                <CiLocationOn className="add-location-icon" /> #{item?.address},{" "}
                {item?.city}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="gym-view-title-div">Services</h4>
            <div className="gym-facilities-cards">
              <div className="gym-facilities-cards-text">
                {item?.services?.map((service: any, index: any) => (
                  <div className="gym-view-param-div mt-2" key={index}>
                    <span>•</span>
                    <span className="service-text">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h4 className="gym-view-title-div">Facilities</h4>
              <div className="gym-facilities-cards">
                <div className="gym-facilities-cards-text">
                  {item?.facilities?.map((facilities: any, index: any) => (
                    <div className="gym-view-param-div mt-2" key={index}>
                      <span>•</span>
                      <span className="service-text">{facilities}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <GymModuleCardsStyled>
              <div className="mt-4">
                <h4 className="gym-view-title-div">Packages</h4>
                <div className="SubscriptionCardsContainer-1">
                  {item?.tests?.map((item: any, index: any) => (
                    <div className="SubscriptionCard" key={index}>
                      <div className="gym-plan-Card">
                        <p className="Badge">{stars.join("")}</p>
                        <p className="PlanDetails">
                          {item?.service_name
                            .split(" ")
                            .map((word: any, index: any) => {
                              return index === 2 ? (
                                <span key={index} style={{ color: "#9747ff" }}>
                                  {word}
                                </span>
                              ) : (
                                <span key={index}> {word} </span>
                              );
                            })}
                        </p>
                        <div className="Rating">
                          <p className="Price">{item?.price?.actual_cost}/-</p>
                          <p className="DiscountedPrice">
                            {item?.price?.discounted_price}/-
                          </p>
                        </div>
                        <div className="Features">
                          <h5 className="FeatureItem">
                            {item?.service_name.split(" ")[0]} Months plan
                          </h5>
                          <h5 className="FeatureItem">Flexible Schedule</h5>
                        </div>
                        <div className="more-labs-action-btns mt-3">
                          <button
                            className="view-details-btn"
                            // onClick={() => handleToNavigateDetailPage(item)}
                          >
                            Add To Cart
                          </button>
                          <button
                            className="add-to-cart-btn"
                            // onClick={() => handleToNavigate(item)}
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </GymModuleCardsStyled>

            <div className="mt-5">
              <h4 className="gym-view-title-div">Similar Gym</h4>
              <div className="">
                <GymModuleCards item={allFitnessData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </GymIndexStyled>
  );
};

export default GymViewDetails;
