import React, { useEffect } from "react";
import { PanchakarmasStyled } from "./Panchakarmas.styled";
import { useHistory } from "react-router-dom";
import Components from "./Components";
import Benefits from "./Benefits";
import CentresCard from "../CentresCard";
import { useDispatch, useSelector } from "react-redux";
import { getAyurvedsPanchakarmaAPI } from "../../../redux/slices/generic/genericService";
import { BiArrowBack } from "react-icons/bi";

const Panchakarmas = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { allPanchakarmaList } = useSelector(
    (ReduxState: any) => ReduxState.generic,
  );
  const { userCity } = useSelector((ReduxState: any) => ReduxState.auth);

  const navigateToPage = (url: string) => {
    history.push("/ayurveda");
  };

  const getLatestData = (city = "bengaluru") => {
    dispatch(getAyurvedsPanchakarmaAPI({ city: city?.toLowerCase() }));
  };

  useEffect(() => {
    getLatestData(userCity?.name);
  }, [userCity?.name]);

  return (
    <PanchakarmasStyled>
      <div className="mt-2">
        <button
          className="btn back-btn mb-3 "
          onClick={() => {
            navigateToPage("/ayurveda");
          }}
        >
          <BiArrowBack className="icon-btn me-1" />
          Back
        </button>
      </div>
      <div className="ayurvedaWrapper">
        <header className="header">
          <div className="header-content">
            <h1>
              Introducing <span>Panchakarma</span>
            </h1>
            <p>
              Panchakarma, a cornerstone of Ayurvedic healing, is a
              comprehensive detoxification program designed to cleanse <br />
              the body and mind. Derived from the Sanskrit words "Pancha"
              meaning five, and "Karma" meaning actions, <br /> Panchakarma
              consists of five therapeutic treatments aimed at removing
              deep-seated toxins, restoring balance, <br /> and promoting
              overall health.
            </p>
            <div className="btnWrapper">
              <button className="explore-btn">Explore Ayurveda</button>
            </div>
          </div>
        </header>
        <Components />
        <Benefits />
        <div className="container mt-4">
          <h4>Find Panchakarma Near Me</h4>
          <div className="row">
            {allPanchakarmaList?.vendors?.map((item: any, index: number) => {
              return (
                <div className="col-md-3 mb-4" key={index}>
                  <CentresCard item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PanchakarmasStyled>
  );
};

export default Panchakarmas;
