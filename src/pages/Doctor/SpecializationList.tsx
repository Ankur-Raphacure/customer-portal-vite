import React from "react";
import { DoctorsStyled } from "./Doctors.styled";
import { CategorySubDivcolors } from "../Home/Home.styled";
import { useHistory } from "react-router-dom";
import SearchByTextModule from "../Pharmacy/SearchByTextModule";
import { doctorSearchTextChange } from "../Pharmacy/PharmacyObjectsModule";
import BreadCrumbModule from "../Pharmacy/BreadCrumbModule";

const specializationList = [
  { name: "General physician", img: "" },
  { name: "Gynaecology", img: "" },
  { name: "Sexology", img: "" },
  { name: "Dermatology", img: "" },
  { name: "Psychiatrist", img: "" },
  { name: "Neurologist", img: "" },
  { name: "Cardiologist", img: "" },
  { name: "ENT Specialist", img: "" },
  { name: "Oncologist", img: "" },
  { name: "Pediatrician", img: "" },
];
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
  const history = useHistory();
  return (
    <DoctorsStyled>
      <div className="main-doctore-card-div">
        <div>
          <BreadCrumbModule list={list} />
        </div>
        <div className="search-by-text">
          <SearchByTextModule details={doctorSearchTextChange} />
        </div>
        <div className="doctore-card-div">
          {specializationList?.map((item: any, index: any) => {
            return (
              <div className="carousal-main-div">
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
                  <h5>{item?.title ? item?.title : item?.name}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DoctorsStyled>
  );
};

export default SpecializationList;
