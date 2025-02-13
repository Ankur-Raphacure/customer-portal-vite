import React, { useEffect } from "react";
import Filters from "../../components/Doctor/Filter/Filter";
import NurseCard from "./NurseCard";
import { DomiciliaryCareStyled } from "./DomiciliaryCare.styled";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllDomiciliaryNursesAPI } from "../../redux/slices/generic/genericService";

const NursesHome = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { allDomiciliaryNursesAPI } = useSelector(
    (ReduxState: any) => ReduxState.generic,
  );
  const { userCity } = useSelector((ReduxState: any) => ReduxState.auth);
  const item = allDomiciliaryNursesAPI?.nurses;

  const getLatestData = (city = "bengaluru") => {
    dispatch(getAllDomiciliaryNursesAPI(100));
  };

  useEffect(() => {
    getLatestData(userCity?.name);
  }, [userCity?.name]);

  const handleBackClick = () => {
    history.push("/domiciliarycare");
  };

  return (
    <DomiciliaryCareStyled>
      <div className="Nurses-Home container-fluid">
        <div className="row">
          <div className="col-lg-2 text-center mt-3">
            <button className="back-btn" onClick={handleBackClick}>
              Back
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <Filters />
          </div>
          <div className="row">
            {item?.map((treatment: any, index: any) => {
              return (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                  <NurseCard mostOrdersSection={true} item={treatment} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </DomiciliaryCareStyled>
  );
};

export default NursesHome;
