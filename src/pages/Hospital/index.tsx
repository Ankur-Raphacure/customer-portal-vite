import { useEffect, useRef, useState } from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import {
  getHospitalDetailsAPI,
  getInHouseDoctorsAPI,
  getHospitalDoctorsListAPI,
} from "../../redux/slices/hospital/hospitalService";
import FilterList from "../../components/Doctor/Filter/Filter";
import { HospitalStyled } from "./Hospital.styled";
import HospitalHeader from "../Hospital/hospitalHeader/hospitalheader";
import AvailableServices from "../Hospital/availableServices/availableServices";
import DoctorsListItem from "./doctorsListItem/doctorsListItem";
import { updateDoctordetails } from "../../redux/slices/bookingScreen/bookingScreenSlice";
import { updateShowLoginModel } from "../../redux/slices/auth/authSlice";
import { getConfigInfoAPI } from "../../redux/slices/config/configService";

const Hospital = (props: any) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { hospitalDetails, doctorsList, doctorsListNew } = useSelector(
    (ReduxState: any) => ReduxState.hospital
  );
  const { configInfo } = useSelector((ReduxState: any) => ReduxState.config);
  const doctorFilters = configInfo?.doctorFilters;

  const [doctorFilterObjectList, setdoctorFilterObjectList] = useState({});

  const { user } = useSelector((ReduxState: any) => ReduxState.auth);
  const [doctorsCurrentPage, setdoctorsCurrentPage] = useState(0);
  const [doctorsNumberPerPage, setdoctorsNumberPerPage] = useState(10);
  const [doctorSearchText, setdoctorSearchText] = useState("");
  const [doctorSpecializationText, setdoctorSpecializationText] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const searchText = useRef("");

  useEffect(() => {
    console.log("doctorsList : ", doctorsList);
    console.log("doctorsListNew : ", doctorsListNew);
  }, [doctorsList, doctorsListNew]);

  useEffect(() => {
    if (!doctorFilters) {
      dispatch(getConfigInfoAPI());
    } else {
      setdoctorFilterObjectList(doctorFilters);
    }
  }, [doctorFilters]);

  useEffect(() => {
    if (props.type === "nearest") {
      dispatch(getHospitalDetailsAPI("2")); // Must be changed later to id of nearest hospital based of curr location
      dispatch(getInHouseDoctorsAPI("2")); // Must be changed later to id of nearest hospital based of curr location
    } else {
      const hospitalId = props?.match?.params?.hospitalId;
      if (!hospitalDetails || hospitalDetails?.vendorById !== hospitalId) {
        dispatch(getHospitalDetailsAPI(hospitalId));
      }
    }
  }, []);

  useEffect(() => {
    let hospitalId;
    if (props.type === "nearest") {
      hospitalId = "2";
    } else {
      hospitalId = props?.match?.params?.hospitalId;
    }
    if (
      hospitalDetails?.vendorById !== hospitalId &&
      doctorFilterObjectList &&
      Object.keys(doctorFilterObjectList).length > 0
    ) {
      const doctorRequestOBj = {
        count: doctorsNumberPerPage,
        page: doctorsCurrentPage,
        searchText: doctorSearchText,
        specialization: doctorSpecializationText,
        hospitalId: hospitalId,
        doctorFilterObject: JSON.stringify(doctorFilterObjectList).replace(
          /"(\w+)"\s*:/g,
          "$1:"
        ),
      };
      dispatch(getHospitalDoctorsListAPI(doctorRequestOBj));
    }
  }, [
    doctorsCurrentPage,
    doctorsNumberPerPage,
    doctorSearchText,
    doctorSpecializationText,
    doctorFilterObjectList,
  ]);

  const doctorsGoToPage = (page: any) => {
    setdoctorsCurrentPage(page);
    scrollToElementId("hospital_detail_container");
  };

  const handleChangeperpage = (event: any) => {
    console.log(event.target.value);
    setdoctorsNumberPerPage(event.target.value);
    scrollToElementId("hospital_detail_container");
  };

  const scrollToElementId = (Id: any) => {
    let el = document.getElementById(Id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  console.log("doctorsListNew", doctorsListNew);
  const doctorsTotalPages = () => {
    return doctorsListNew?.doctorCount
      ? Math.floor(doctorsListNew?.doctorCount / doctorsNumberPerPage)
      : 0;
  };

  const handleBookingClick = (obj: any, consulttype: String) => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      dispatch(
        updateDoctordetails({
          doctorDetails: { ...obj },
          consultationType: props.type === "nearest" ? "inhouse" : consulttype,
          categoryType: "doctor",
          hospitalDetails: {
            vendorId: props?.match?.params?.hospitalId,
            image: hospitalDetails?.vendorById?.image,
            name: hospitalDetails?.vendorById?.name,
            address: hospitalDetails?.vendorById?.address,
          },
          slot1: {},
          slot2: {},
        })
      );
      history.push("/doctor/bookingReview");
    }
  };

  const getFilterList = () => {
    if (hospitalDetails?.vendorById?.doctors) {
      const doctorFilterlist: String[] = [];
      hospitalDetails?.vendorById?.doctors.forEach((doctor: any) => {
        const specializationList = doctor.specialization
          .split(",")
          .map((item: any) => item.trim())
          .filter((item: any) => item !== "");
        doctorFilterlist.push(...specializationList);
      });
      return Array.from(new Set(doctorFilterlist));
    } else {
      if (hospitalDetails?.vendorById?.type === "eye_care") {
        return ["Eye Consultation"];
      } else if (hospitalDetails?.vendorById?.type === "dental_care") {
        return ["Dental Consultation"];
      } else {
        return ["General Consultation"];
      }
    }
  };

  const handleChangeSearchText = (event: any) => {
    setShowErrorMessage(false);
    searchText.current = event.target.value;
    if (event.target.value === "") {
      setdoctorSearchText("");
    }
  };

  const handleOnSubmit = (evnt: any) => {
    evnt.preventDefault();
    if (searchText.current && searchText.current.length >= 3) {
      setShowErrorMessage(false);
      setdoctorSpecializationText("");
      setdoctorSearchText(searchText.current);
    } else {
      setShowErrorMessage(true);
    }
  };

  const handleSpecializationSelect = (eventKey: any) => {
    if (eventKey === doctorSpecializationText) setdoctorSpecializationText("");
    else setdoctorSpecializationText(eventKey);
  };

  const setActiveList = (filterValue: any) => {
    return filterValue === doctorSpecializationText ? true : false;
  };

  const handleonChangeFilter = (event: any) => {
    interface StringIndexedObject {
      [key: string]: any;
    }

    const clonedFilterList: StringIndexedObject = structuredClone(
      doctorFilterObjectList
    );

    for (const key in clonedFilterList) {
      clonedFilterList[key].map((filterData: any) => {
        if (filterData["key"] === event.target.value) {
          if (event.target.checked) filterData["selected"] = true;
          else filterData["selected"] = false;
        }
        return filterData;
      });
    }
    setdoctorFilterObjectList(clonedFilterList);
  };

  return (
    <>
      {console.log(hospitalDetails)}
      <HospitalStyled>
        <div className="container-fluid container-max hospital_container d-flex justify-content-between flex-wrap flex-wrap flex-md-nowrap">
          {props.type !== "nearest" && (
            <div className="filter_container filter_container hidden d-md-block h-100 bg-white">
              <FilterList
                doctorFilters={
                  doctorFilterObjectList ? doctorFilterObjectList : {}
                }
                handleonChangeFilter={handleonChangeFilter}
              />
            </div>
          )}
          <div className="hospital_listcontainer">
            <div className="hospital_header">
              <HospitalHeader hospital={hospitalDetails?.vendorById} />
            </div>
            <div
              id="hospital_detail_container"
              className="hospital_detail w-100 d-flex justify-content-between"
            >
              <div className="hospital_list">
                <div className="hospital_search">
                  <div className="hospital_searchbox">
                    <form onSubmit={handleOnSubmit}>
                      <input
                        type="text"
                        placeholder="Search by specialist or doctor name"
                        onChange={handleChangeSearchText}
                        className="hospital_searchInput poppins-regular round-shadow bg-white"
                      />
                      {}
                      {showErrorMessage && (
                        <p className="error_message">
                          Type atleast 3 characters!!
                        </p>
                      )}
                      <button
                        type="submit"
                        className="hosplital_searchbtn poppins-regular"
                      >
                        Search
                      </button>
                    </form>
                  </div>
                </div>
                {((hospitalDetails?.vendorById?.doctors &&
                  hospitalDetails?.vendorById?.doctors?.length) ||
                  doctorsListNew?.doctors?.length > 0) && (
                  <div className="hospital_doctors">
                    <div className="hospital_doctorstoppanel d-flex justify-content-between align-items-center flex-nowrap">
                      <div className="hospital_doctorstitle poppins-medium">
                        Available Doctors
                      </div>
                      <div className="hospital_doctorsfilter">
                        <Dropdown onSelect={handleSpecializationSelect}>
                          <Dropdown.Toggle variant="white" id="dropdown-basic">
                            <span className="dropdown-text">
                              Filter by specialist
                            </span>
                            <span className="dropdown-icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="10"
                                viewBox="0 0 14 10"
                                fill="none"
                              >
                                <path
                                  opacity="0.65"
                                  d="M7 10C6.72349 9.99857 6.45075 9.93401 6.20159 9.81102C5.95242 9.68802 5.73307 9.50966 5.55945 9.28889L0.999501 3.62222C0.733047 3.28108 0.565371 2.87 0.515581 2.43585C0.465791 2.0017 0.535889 1.56194 0.717889 1.16667C0.865497 0.82314 1.10638 0.530459 1.41176 0.323581C1.71714 0.116702 2.07412 0.00437006 2.44005 0H11.5599C11.9259 0.00437006 12.2829 0.116702 12.5882 0.323581C12.8936 0.530459 13.1345 0.82314 13.2821 1.16667C13.4641 1.56194 13.5342 2.0017 13.4844 2.43585C13.4346 2.87 13.267 3.28108 13.0005 3.62222L8.44055 9.28889C8.26693 9.50966 8.04758 9.68802 7.79841 9.81102C7.54924 9.93401 7.27651 9.99857 7 10Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            {getFilterList().map((filterValue: any) => {
                              return (
                                <Dropdown.Item
                                  eventKey={filterValue}
                                  className="poppins-regular"
                                  active={setActiveList(filterValue)}
                                >
                                  {filterValue}
                                </Dropdown.Item>
                              );
                            })}
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>

                    <div className="hospital_doctorslist">
                      {props.type === "nearest" ? (
                        <>
                          {doctorsListNew &&
                            doctorsListNew?.doctors?.map((doctor: any) => {
                              return (
                                <DoctorsListItem
                                  key={doctor.id}
                                  doctor={doctor}
                                  hospital={hospitalDetails?.vendorById}
                                  handleBookingClick={handleBookingClick}
                                  showBookButton={true}
                                />
                              );
                            })}

                          {!doctorsListNew ||
                          doctorsListNew.doctors?.length === 0 ? (
                            <div className="error_doctorslist">
                              <p className="error_text">
                                {doctorSearchText
                                  ? `No Results found for \`${doctorSearchText}\``
                                  : "No Results found!!"}
                              </p>
                            </div>
                          ) : null}
                        </>
                      ) : (
                        <>
                          {doctorsList &&
                            doctorsList?.doctors?.map((doctor: any) => {
                              return (
                                <DoctorsListItem
                                  key={doctor.id}
                                  doctor={doctor}
                                  hospital={hospitalDetails?.vendorById}
                                  handleBookingClick={handleBookingClick}
                                  showBookButton={true}
                                />
                              );
                            })}

                          {!doctorsList || doctorsList.doctors?.length === 0 ? (
                            <div className="error_doctorslist">
                              <p className="error_text">
                                {doctorSearchText
                                  ? `No Results found for \`${doctorSearchText}\``
                                  : "No Results found!!"}
                              </p>
                            </div>
                          ) : null}
                        </>
                      )}
                    </div>
                    {doctorsListNew?.doctorCount > doctorsNumberPerPage && (
                      <div className="hospital_doctors_pagination">
                        <div className="hospital_doctors_perpage">
                          <span>Doctors per page</span>
                          <select
                            name="count"
                            id="count"
                            className="hospital_doctors_dropdown"
                            value={doctorsNumberPerPage}
                            onChange={handleChangeperpage}
                          >
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                          </select>
                        </div>
                        <div className="hospital_doctors_paginationbtns">
                          {doctorsCurrentPage >= 1 && (
                            <button
                              onClick={() =>
                                doctorsGoToPage(doctorsCurrentPage - 1)
                              }
                              className="hospital_doctors_prevpage round-shadow poppins-medium"
                            >
                              Prev Page
                            </button>
                          )}
                          {doctorsCurrentPage < doctorsTotalPages() && (
                            <button
                              onClick={() =>
                                doctorsGoToPage(doctorsCurrentPage + 1)
                              }
                              className="hospital_doctors_nextpage round-shadow poppins-medium"
                            >
                              Next Page
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              {props.type !== "nearest" && (
                <div className="hospital_availablelist">
                  <AvailableServices />
                </div>
              )}
            </div>
          </div>
        </div>
      </HospitalStyled>
    </>
  );
};

export default Hospital;
