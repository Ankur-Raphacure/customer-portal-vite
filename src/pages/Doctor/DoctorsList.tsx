import React, { useEffect, useState } from "react";
import { DoctorsStyled } from "./Doctors.styled";
import SideFilterModule from "../Pharmacy/SideFilterModule";
import BreadCrumbModule from "../Pharmacy/BreadCrumbModule";
import DoctorCardModule from "./DoctorCardModule";
import SearchByTextModule from "../Pharmacy/SearchByTextModule";
import { doctorsSearchTextChange } from "../Pharmacy/PharmacyObjectsModule";
import { useDispatch, useSelector } from "react-redux";
import { getAllDoctorAPI } from "../../redux/slices/doctor/doctorService";

const list = [
  {
    title: "Doctor",
    link: `/doctor`,
  },
  {
    title: "Virtual Consultation",
  },
];

const DoctorsList = () => {
  const dispatch = useDispatch();
  const count = 8;
  const [maxLabPackagesCount, setMaxLabPackagesCount] = useState(20);
  const [page, setPage] = useState(0);
  const [searchText, setSearchText] = useState("");
  const { allDoctorList } = useSelector((ReduxState: any) => ReduxState.doctor);

  const handleonFilterName = async (event: any) => {
    setSearchText(event);
    // handleClearAll();
  };
  const getAllDoctorsList = async () => {
    let body = {} as any;
    if (searchText) {
      body.searchText = searchText;
    }
    body.count = count;
    body.page = page + 1;
    setPage(page + 1);

    await dispatch(
      getAllDoctorAPI({
        filters: { ...body, status: "approved" },
      })
    );
  };
  useEffect(() => {
    getAllDoctorsList();
  }, [searchText]);

  return (
    <DoctorsStyled>
      <div className="BreadCrumbModule">
        <BreadCrumbModule list={list} />
      </div>
      <div className="doctor-list-main-div">
        <div className="side-filter-p-div">
          <SideFilterModule origin="doctor" />
        </div>
        <div className="doctor-list-p-div">
          <div className="search-by-text">
            <SearchByTextModule
              details={doctorsSearchTextChange}
              // details={pharmacySearchTextChange}
              handleonFilterName={handleonFilterName}
              setSearchText={setSearchText}
              searchText={searchText}
            />
          </div>

          <div className="page-count-div">
            <p>
              Showing 1 to {count * page} Doctors of {allDoctorList?.totalCount}{" "}
              Doctors
            </p>
          </div>
          {Array.isArray(allDoctorList?.doctors) &&
            allDoctorList?.doctors?.map((item: any) => {
              return (
                <DoctorCardModule
                  appointment={{
                    id: item?.id,
                    name: item?.name,
                    department: item?.specialization,
                    experience: item?.work_experience_years,
                    languages: item?.languages,
                    education: item?.highest_education,
                    inClinicFee: item?.name,
                    videoConsultFee: item?.minutes_before_virtual,
                    gender: item?.gender,
                    consultantType: item?.name,
                    specialization: item?.specialization,
                    slots: item?.name,
                    rating: item?.rating,
                    image: item?.image,
                    availableIn90: item?.availableIn90,
                  }}
                />
              );
            })}
          <div className="d-flex mt-4">
            {allDoctorList?.totalCount <= page * count ? (
              <></>
            ) : (
              <button className="loadMoreBtn" onClick={getAllDoctorsList}>
                Load More
              </button>
            )}
          </div>
        </div>

        <div className="suggution-doctor-list-p-div"></div>
      </div>
    </DoctorsStyled>
  );
};

export default DoctorsList;
