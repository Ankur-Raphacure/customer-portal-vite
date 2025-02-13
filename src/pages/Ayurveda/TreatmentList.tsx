import React, { useEffect, useState } from "react";
import TreatmentCard from "./TreatmentCard";
import treatImage from "../../assets/images/home/Worthy4.png";
import { useDispatch, useSelector } from "react-redux";
import { getAyurvedsDiseaseAPI } from "../../redux/slices/generic/genericService";
import { useHistory } from "react-router-dom";

const TreatmentList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [activeButton, setActiveButton] = useState("General Health");
  const [showDetails, setShowDetails] = useState(false);
  const { allAyurvedsDiseaseList } = useSelector(
    (ReduxState: any) => ReduxState.generic,
  );
  const { userCity } = useSelector((ReduxState: any) => ReduxState.auth);
  const item = allAyurvedsDiseaseList?.tests;
  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const getLatestData = (city = "bengaluru") => {
    dispatch(getAyurvedsDiseaseAPI({ city: city?.toLowerCase() }));
  };

  const navigateToPage = (url: string) => {
    history.push(url);
  };

  const addToCart = (itemR: any) => {};

  useEffect(() => {
    getLatestData(userCity?.name);
  }, [userCity?.name]);

  return (
    <section className="treatments">
      <div className="search-by-disease">
        <h5>Search By Disease</h5>
        <div className="button-group">
          <button
            className={`button ${
              activeButton === "General Health" ? "active" : ""
            }`}
            onClick={() => handleClick("General Health")}
          >
            General Health
          </button>
          <button
            className={`button ${
              activeButton === "Sexual Health" ? "active" : ""
            }`}
            onClick={() => handleClick("Sexual Health")}
          >
            Sexual Health
          </button>
          <button
            className={`button ${
              activeButton === "Mental Health" ? "active" : ""
            }`}
            onClick={() => handleClick("Mental Health")}
          >
            Mental Health
          </button>
          <button
            className={`button ${
              activeButton === "Cardiovascular" ? "active" : ""
            }`}
            onClick={() => handleClick("Cardiovascular")}
          >
            Cardiovascular
          </button>
          <button
            className={`button ${
              activeButton === "Hair & Skin" ? "active" : ""
            }`}
            onClick={() => handleClick("Hair & Skin")}
          >
            Hair & Skin
          </button>
        </div>
      </div>

      <div className="treatment-cards">
        {item?.slice(0, 4)?.map((treatment: any, index: any) => {
          return (
            <TreatmentCard
              addToCart={addToCart}
              mostOrdersSection={true}
              item={treatment}
            />
          );
        })}
      </div>

      <div>
        <p className="underline view-all float-right px-4">
          {" "}
          <button
            onClick={() => {
              navigateToPage("/ayurveda/alltreatmentlist");
            }}
            className="btn"
          >
            View All Disease
          </button>
        </p>
      </div>
    </section>
  );
};

export default TreatmentList;
