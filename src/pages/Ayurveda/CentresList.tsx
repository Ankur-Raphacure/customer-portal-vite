import React, { useEffect, useState } from "react";
import CentresCard from "./CentresCard";
import { useDispatch, useSelector } from "react-redux";
import { getAyurvedsCenterAPI } from "../../redux/slices/generic/genericService";
import { useHistory } from "react-router-dom";

const CentresList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [activeButton, setActiveButton] = useState("Nearest");
  const { allAyurvedsCenterList } = useSelector(
    (ReduxState: any) => ReduxState.generic,
  );
  const { userCity } = useSelector((ReduxState: any) => ReduxState.auth);

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };
  const getLatestData = (city = "bengaluru") => {
    dispatch(getAyurvedsCenterAPI({ city: city?.toLowerCase() }));
  };

  const navigateToPage = (url: string) => {
    history.push(url);
  };
  useEffect(() => {
    getLatestData(userCity?.name);
  }, [userCity?.name]);

  return (
    <section className="treatments centres">
      <div className="search-by-disease">
        <h5>Ayurveda Centres near me</h5>
        <div className="button-group">
          <button
            className={`button ${activeButton === "Nearest" ? "active" : ""}`}
            onClick={() => handleClick("Nearest")}
          >
            Nearest
          </button>
          <button
            className={`button ${activeButton === "Rating" ? "active" : ""}`}
            onClick={() => handleClick("Rating")}
          >
            Rating
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
      <div className="treatment-cards centre-cards">
        {allAyurvedsCenterList?.vendors
          ?.slice(0, 4)
          ?.map((treatment: any, index: any) => (
            <CentresCard mostOrdersSection={true} item={treatment} />
          ))}
      </div>
      {/* <div
        onClick={() => {
          navigateToPage("/ayurveda/allcentrelist");
        }}
      >
        <h6 className="view-all-btn">View All</h6>
      </div> */}

      <div>
        <p className="underline view-all float-right px-4">
          {" "}
          <button
            onClick={() => {
              navigateToPage("/ayurveda/allcentrelist");
            }}
            className="btn"
          >
            View All Ayurveda Centres
          </button>
        </p>
      </div>
    </section>
  );
};

export default CentresList;
