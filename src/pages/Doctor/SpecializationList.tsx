import React, { useEffect, useMemo, useState } from "react";
import { DoctorsStyled } from "./Doctors.styled";
import { CategorySubDivcolors } from "../Home/Home.styled";
import { useHistory } from "react-router-dom";
import SearchByTextModule from "../Pharmacy/SearchByTextModule";
import { doctorSearchTextChange } from "../Pharmacy/PharmacyObjectsModule";
import BreadCrumbModule from "../Pharmacy/BreadCrumbModule";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesAPI } from "../../redux/slices/labtest/labtestService";
import CategorieCard from "../Pharmacy/CategorieCard";

const list = [
  {
    title: "Doctor consultation >",
    link: `/doctor`,
  },
  {
    title: "Specializations",
  },
];
const SpecializationList = (props: any) => {
  const { item } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const count = 8;
  const [page, setPage] = useState(0);
  const [searchText, setSearchText] = useState("");

  const { allCategoriesList } = useSelector(
    (ReduxState: any) => ReduxState.labtest,
  );
  const handleonFilterName = async (event: any) => {
    setSearchText(event);
  };
  const handleSpecializations = (item: any) => {
    // window.location.href = `/doctor/doctorlist/${item?.id}`;
    history.push(`/doctor/doctorlist/${item?.id}`);
  };

  const getSpecializationList = async () => {
    await dispatch(getAllCategoriesAPI({ sectionName: "doctor", count: 100 }));
  };
  useEffect(() => {
    getSpecializationList();
  }, []);

  return (
    <DoctorsStyled>
      <div className="main-doctore-card-div">
        <div>
          <BreadCrumbModule list={list} />
        </div>
        <div className="search-by-text">
          <SearchByTextModule
            details={doctorSearchTextChange}
            handleonFilterName={handleonFilterName}
            setSearchText={setSearchText}
            searchText={searchText}
          />
        </div>
        <div className="page-count-div">
          <p>Showing 1 to {allCategoriesList?.total} Specialization</p>
        </div>
        <div className="doctore-card-div">
          {allCategoriesList?.category_ids?.map((item: any, index: any) => {
            return (
              <div
                className="carousal-main-div"
                onClick={() => handleSpecializations(item)}
              >
                <div className="cardCmp-main-div">
                  <CategorySubDivcolors
                    className="Carousel-sub-cards-div"
                    index={index}
                  >
                    <img
                      src={item?.imageUrl ? item?.imageUrl : item?.image}
                      alt={item?.title ?? ""}
                    />
                  </CategorySubDivcolors>
                </div>
                <div className="renderCard-div">
                  <h5>
                    {item?.title ? item?.title : item?.name}{" "}
                    {item?.count ? `(${item?.count})` : ""}{" "}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mobile-view-categories">
          <CategorieCard
            allCategoriesList={allCategoriesList?.category_ids}
            catogorySelect={handleSpecializations}
          />
        </div>
      </div>
    </DoctorsStyled>
  );
};

export default SpecializationList;
