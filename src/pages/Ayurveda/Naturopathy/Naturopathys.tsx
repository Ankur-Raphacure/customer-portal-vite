import React, { useEffect, useState } from "react";
import { NaturopathyStyled } from "./Naturopathys.styled";
import { BiArrowBack } from "react-icons/bi";
import CentresCard from "../CentresCard";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAyurvedsNaturopathyAPI } from "../../../redux/slices/generic/genericService";

const Naturopathys = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { allNaturopathyList } = useSelector(
    (ReduxState: any) => ReduxState.generic
  );
  const { userCity } = useSelector((ReduxState: any) => ReduxState.auth);
  const [activeButton, setActiveButton] = useState("Physio Therapy");

  const navigateToPage = (url: string) => {
    history.push(url);
  };

  const getLatestData = (city = "bengaluru") => {
    dispatch(getAyurvedsNaturopathyAPI({ city: city?.toLowerCase() }));
  };

  useEffect(() => {
    getLatestData(userCity?.name);
  }, [userCity?.name]);

  const handleClick = (buttonName: any) => {
    setActiveButton(buttonName);
  };
  return (
    <NaturopathyStyled>
      <div className="container mt-4">
        <button
          className="btn back-btn mb-3"
          onClick={() => {
            navigateToPage("/ayurveda");
          }}
        >
          <BiArrowBack className="icon-btn me-1" />
          Back
        </button>
        <div className="btn-div">
          <button
            className={`btn Custome-btn ${
              activeButton === "Physio Therapy" ? "active" : ""
            }`}
            onClick={() => handleClick("Physio Therapy")}
          >
            Physio Therapy
          </button>
          <button
            className={`btn Custome-btn ${
              activeButton === "Mud Therapy" ? "active" : ""
            }`}
            onClick={() => handleClick("Mud Therapy")}
          >
            Mud Therapy
          </button>
          <button
            className={`btn Custome-btn ${
              activeButton === " Massage Therapy" ? "active" : ""
            }`}
            onClick={() => handleClick(" Massage Therapy")}
          >
            Massage Therapy
          </button>
          <button
            className={`btn Custome-btn ${
              activeButton === "Aroma Therapy" ? "active" : ""
            }`}
            onClick={() => handleClick("Aroma Therapy")}
          >
            Aroma Therapy
          </button>
          <button
            className={`btn Custome-btn ${
              activeButton === "Helio Therapy" ? "active" : ""
            }`}
            onClick={() => handleClick("Helio Therapy")}
          >
            Helio Therapy
          </button>
          <button
            className={`btn Custome-btn ${
              activeButton === "Diet Therapy" ? "active" : ""
            }`}
            onClick={() => handleClick("Diet Therapy")}
          >
            Diet Therapy
          </button>
          <button
            className={`btn Custome-btn ${
              activeButton === "Fasting Therapy" ? "active" : ""
            }`}
            onClick={() => handleClick("Fasting Therapy")}
          >
            Fasting Therapy
          </button>
          <button
            className={`btn Custome-btn ${
              activeButton === "Hydro Therapy" ? "active" : ""
            }`}
            onClick={() => handleClick("Hydro Therapy")}
          >
            Hydro Therapy
          </button>
        </div>

        <div className="container mt-4">
          <form className="form-inline my-2 my-lg-0 w-50">
            <div className="input-group w-100">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-outline custom-search" type="submit">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="container mt-4">
          <h4 className="mb-4">{`Available ${activeButton} Centers`}</h4>
          <div className="row">
            {allNaturopathyList?.vendors?.map((item: any, index: number) => {
              return (
                <div className="col-md-3 mb-4" key={index}>
                  <CentresCard item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </NaturopathyStyled>
  );
};

export default Naturopathys;
