import { useEffect, useRef, useState, useCallback } from "react";
import { debounce } from "lodash";
import "./styles.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HospitalList from "./hospitalList/hospitalList";
import VirtualDoctorsList from "./virtualDoctorsList/virtualDoctorsList";
import FilterList from "../../components/Doctor/Filter/Filter";
import PopularContent from "./popularContent/popularContent";
import Loader from "../../components/Common/Loader";

import { getConfigInfoAPI } from "../../redux/slices/config/configService";
import {
  getDoctorsListAPI,
  getHospitalListAPI,
} from "../../redux/slices/doctor/doctorService";
import { useLocation } from "react-router-dom";

import { DoctorStyled } from "./Doctor.styled";
import InOfficeClinic from "./InOfficeClinic/InOfficeClinic";
import { AutoComplete, Input } from "antd";
import Doctors from "./Doctors";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Doctor = (props: any) => {
  const [type, setType] = useState(props.type);
  let [tabValue, setTabsValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const query1 = useQuery();
  const searchq = query1.get("q");
  console.log("searchq", searchq);
  const currTab = props?.location?.search?.replace("?tab=", "");
  useEffect(() => {
    if (currTab === "opd") {
      setTabsValue(2);
    } else {
      setTabsValue(0);
    }
  }, [currTab]);
  useEffect(() => {
    if (searchq) {
      // doctorsearchText.current = searchq;
      setvirtualdoctorSearchText(searchq);
    }
  }, [searchq]);

  const history = useHistory();
  const dispatch = useDispatch();

  const { configInfo } = useSelector((ReduxState: any) => ReduxState.config);
  const doctorFilters = configInfo?.doctorFilters;

  const [doctorFilterObjectList, setdoctorFilterObjectList] = useState({});
  const [doctorsCurrentPage, setdoctorsCurrentPage] = useState(0);
  const [doctorsNumberPerPage, setdoctorsNumberPerPage] = useState(10);

  const [virtualdoctorSearchText, setvirtualdoctorSearchText] = useState("");
  const [virtualdoctorshowErrorMessage, setvirtualdoctorShowErrorMessage] =
    useState(false);
  const doctorsearchText = useRef("");

  const [hospitalsCurrentPage, sethospitalsCurrentPage] = useState(0);
  const [hospitalsNumberPerPage, sethospitalsNumberPerPage] = useState(10);

  const [hospitalSearchText, sethospitalSearchText] = useState("");
  const [hospitalshowErrorMessage, sethospitalShowErrorMessage] =
    useState(false);
  const hospitalistsearchText = useRef("");

  const { hospitalList, doctorsList, tablist } = useSelector(
    (ReduxState: any) => ReduxState.doctor,
  );

  const { subDomainName, subDomainDetails, userCity } = useSelector(
    (ReduxState: any) => ReduxState.auth,
  );

  useEffect(() => {
    if (!doctorFilters) {
      setIsLoading(false);
      dispatch(getConfigInfoAPI());
      setIsLoading(true);
    } else {
      setdoctorFilterObjectList(doctorFilters);
    }
  }, [doctorFilters]);

  useEffect(() => {
    if (
      doctorFilterObjectList &&
      Object.keys(doctorFilterObjectList).length > 0
    ) {
      getHospitalCall(hospitalSearchText);
    }
  }, [
    hospitalsCurrentPage,
    hospitalsNumberPerPage,
    userCity?.id,
    doctorFilterObjectList,
  ]);

  useEffect(() => {
    if (
      doctorFilterObjectList &&
      Object.keys(doctorFilterObjectList).length > 0
    ) {
      getvertivalCall(virtualdoctorSearchText);
    }
  }, [doctorsCurrentPage, doctorsNumberPerPage, doctorFilterObjectList]);
  const getHospitalCall = async (searV: any) => {
    setIsLoading(true);
    const hospitalRequestOBj = {
      cityId: userCity?.id ?? "",
      count: hospitalsNumberPerPage,
      page: hospitalsCurrentPage,
      searchText: searV || hospitalSearchText,
      doctorFilterObject: JSON.stringify(doctorFilterObjectList).replace(
        /"(\w+)"\s*:/g,
        "$1:",
      ),
    };
    dispatch(getHospitalListAPI(hospitalRequestOBj));
    setIsLoading(false);
  };
  const fetchSearchResults1 = (searchQuery: any) => {
    getvertivalCall(searchQuery);
  };

  const debouncedSearch1 = useCallback(
    debounce((searchQuery) => fetchSearchResults1(searchQuery), 500),
    [],
  );
  const getvertivalCall = async (searV: any) => {
    setIsLoading(true);
    const doctorRequestOBj = {
      count: doctorsNumberPerPage,
      page: doctorsCurrentPage,
      searchText: searV || virtualdoctorSearchText,
      doctorFilterObject: JSON.stringify(doctorFilterObjectList).replace(
        /"(\w+)"\s*:/g,
        "$1:",
      ),
    };
    dispatch(getDoctorsListAPI(doctorRequestOBj));
    setIsLoading(false);
  };
  const fetchSearchResults = (searchQuery: any) => {
    getvertivalCall(searchQuery);
  };

  const debouncedSearch = useCallback(
    debounce((searchQuery) => fetchSearchResults(searchQuery), 500),
    [],
  );

  const doctorsGoToPage = (page: any) => {
    setdoctorsCurrentPage(page);
    scrollToElementId("doctor_container");
  };

  const handleDoctorChangeSearchText = (value: string) => {
    setvirtualdoctorShowErrorMessage(false);
    doctorsearchText.current = value;
    setvirtualdoctorSearchText(value);
    filterDoctorSuggestions(value);
    debouncedSearch(value);
  };

  const handleHospitalChangeSearchText = (value: string) => {
    sethospitalShowErrorMessage(false);
    hospitalistsearchText.current = value;
    sethospitalSearchText(value);
    filterHospitalSuggestions(value);
    debouncedSearch1(value);
  };

  const [filteredDoctorSuggestions, setFilteredDoctorSuggestions] = useState(
    [],
  );
  const [filteredHospitalSuggestions, setFilteredHospitalSuggestions] =
    useState([]);

  const filterDoctorSuggestions = (searchText: string) => {
    if (searchText.length > 0) {
      const filtered = doctorsList.doctors.filter(
        (doctor: any) =>
          doctor.name.toLowerCase().includes(searchText.toLowerCase()) ||
          doctor.specialization
            .toLowerCase()
            .includes(searchText.toLowerCase()),
      );
      setFilteredDoctorSuggestions(filtered);
    } else {
      setFilteredDoctorSuggestions([]);
    }
  };

  const filterHospitalSuggestions = (searchText: string) => {
    if (searchText.length > 0) {
      const filtered = hospitalList.vendors.filter((hospital: any) =>
        hospital.name.toLowerCase().includes(searchText.toLowerCase()),
      );
      setFilteredHospitalSuggestions(filtered);
    } else {
      setFilteredHospitalSuggestions([]);
    }
  };

  const handleDoctorSuggestionClick = (suggestion: string) => {
    setvirtualdoctorSearchText(suggestion);
    setFilteredDoctorSuggestions([]);
  };

  const handleHospitalSuggestionClick = (suggestion: string) => {
    sethospitalSearchText(suggestion);
    setFilteredHospitalSuggestions([]);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (doctorsearchText.current.length >= 1) {
        setvirtualdoctorSearchText(doctorsearchText.current);
      }
    }, 300); // 300ms debounce delay
    return () => clearTimeout(timeoutId);
  }, [doctorsearchText.current]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (hospitalistsearchText.current.length >= 1) {
        sethospitalSearchText(hospitalistsearchText.current);
      }
    }, 300); // 300ms debounce delay
    return () => clearTimeout(timeoutId);
  }, [hospitalistsearchText.current]);

  const handleChangeperpage = (event: any) => {
    console.log(event.target.value);
    setdoctorsNumberPerPage(event.target.value);
    scrollToElementId("doctor_container");
  };

  const handleHospitalChangeperpage = (event: any) => {
    sethospitalsNumberPerPage(event.target.value);
    scrollToElementId("doctor_container");
  };

  const scrollToElementId = (Id: any) => {
    let el = document.getElementById(Id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const doctorsTotalPages = () => {
    return Math.floor(doctorsList?.doctorCount / doctorsNumberPerPage);
  };

  const hospitalsTotalPages = () => {
    return Math.floor(hospitalList?.vendorCount / hospitalsNumberPerPage);
  };

  const hospitalsGoToPage = (page: any) => {
    sethospitalsCurrentPage(page);
    scrollToElementId("doctor_container");
  };

  const handleonChangeFilter = (event: any) => {
    interface StringIndexedObject {
      [key: string]: any;
    }
    const clonedFilterList: StringIndexedObject = structuredClone(
      doctorFilterObjectList,
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
      {/* <Doctors /> */}
      <DoctorStyled>
        <div className="container-fluid container-max w-100 d-flex flex-wrap flex-md-nowrap">
          {type !== "minimal" && (
            <div className="filter_container hidden d-md-block h-100 bg-white">
              <FilterList
                doctorFilters={
                  doctorFilterObjectList ? doctorFilterObjectList : {}
                }
                handleonChangeFilter={handleonChangeFilter}
              />
            </div>
          )}
          <div id="doctor_container" className="content_container">
            <div className="content_tabNav">
              {tablist?.map((item: any, index: any) => {
                if (type !== "minimal" && item === "In Office Clinic") {
                  return null;
                }
                return (
                  <button
                    className={
                      index === tabValue
                        ? "content_tabNav_item selected"
                        : "content_tabNav_item"
                    }
                    onClick={() => setTabsValue(index)}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
            {tabValue === 0 && (
              <>
                <div className="virutual_doctors_list">
                  <div className="virtual_doctors_search">
                    <div className="virtual_doctors_searchbox">
                      <AutoComplete
                        options={filteredDoctorSuggestions.map(
                          (suggestion: any) => ({
                            value: suggestion.name,
                            label: `${suggestion.name} - ${suggestion.specialization}`,
                          }),
                        )}
                        onSelect={handleDoctorSuggestionClick}
                        onSearch={handleDoctorChangeSearchText}
                        value={virtualdoctorSearchText}
                        style={{ width: "100%" }}
                      >
                        <Input.Search
                          placeholder="Search by specialist or doctor name"
                          className="virtual_doctors_searchInput poppins-regular round-shadow bg-white"
                        />
                      </AutoComplete>
                      {virtualdoctorshowErrorMessage && (
                        <p className="error_message">
                          Type atleast 1 character!!
                        </p>
                      )}
                    </div>
                  </div>
                  {isLoading && <Loader />}
                  {doctorsList &&
                    doctorsList.doctors?.length > 0 &&
                    doctorsList.doctors?.map((doctor: any) => {
                      return (
                        <VirtualDoctorsList key={doctor.id} doctor={doctor} />
                      );
                    })}

                  {!doctorsList || doctorsList.doctors?.length === 0 ? (
                    <div className="error_vdoctorslist">
                      <p className="error_text">
                        {virtualdoctorSearchText
                          ? `No Results found for \`${virtualdoctorSearchText}\``
                          : "No Results found!!"}
                      </p>
                    </div>
                  ) : null}
                </div>
                {doctorsList?.doctorCount > doctorsNumberPerPage && (
                  <div className="virtual_doctors_pagination">
                    <div className="virtual_doctors_perpage">
                      <span>Doctors per page</span>
                      <select
                        name="count"
                        id="count"
                        className="virtual_doctors_dropdown"
                        value={doctorsNumberPerPage}
                        onChange={handleChangeperpage}
                      >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                      </select>
                    </div>
                    <div className="virtual_doctors_paginationbtns">
                      {doctorsCurrentPage >= 1 && (
                        <button
                          onClick={() =>
                            doctorsGoToPage(doctorsCurrentPage - 1)
                          }
                          className="virtual_doctors_prevpage round-shadow poppins-medium"
                        >
                          Prev Page
                        </button>
                      )}
                      {doctorsCurrentPage < doctorsTotalPages() && (
                        <button
                          onClick={() =>
                            doctorsGoToPage(doctorsCurrentPage + 1)
                          }
                          className="virtual_doctors_nextpage round-shadow poppins-medium"
                        >
                          Next Page
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </>
            )}
            {tabValue === 2 && (
              <>
                <div className="hospitals_list">
                  <div className="hospitals_search">
                    <div className="hospitals_searchbox">
                      <AutoComplete
                        options={filteredHospitalSuggestions.map(
                          (suggestion: any) => ({
                            value: suggestion.name,
                            label: suggestion.name,
                          }),
                        )}
                        onSelect={handleHospitalSuggestionClick}
                        onSearch={handleHospitalChangeSearchText}
                        value={hospitalSearchText}
                        style={{ width: "100%" }}
                      >
                        <Input.Search
                          placeholder="Search for hospitals by name"
                          className="hospitals_searchInput poppins-regular round-shadow bg-white"
                        />
                      </AutoComplete>
                      {hospitalshowErrorMessage && (
                        <p className="error_message">
                          Type atleast 1 character!!
                        </p>
                      )}
                    </div>
                  </div>
                  {isLoading && <Loader />}
                  {hospitalList && hospitalList.vendors?.length
                    ? hospitalList.vendors?.map((hospital: any) => {
                        return (
                          <HospitalList
                            key={hospital?.id}
                            hospital={hospital}
                          />
                        );
                      })
                    : null}

                  {!hospitalList || hospitalList.vendors?.length === 0 ? (
                    <div className="error_hospitallist">
                      <p className="error_text">
                        {hospitalSearchText
                          ? `No Results found for \`${hospitalSearchText}\``
                          : "No Results found!!"}
                      </p>
                    </div>
                  ) : null}
                </div>
                {hospitalList?.vendorCount > hospitalsNumberPerPage && (
                  <div className="hospitals_pagination">
                    <div className="hospitals_perpage">
                      <span>Hospitals per page</span>
                      <select
                        name="count"
                        id="count"
                        className="hospitals_dropdown"
                        value={hospitalsNumberPerPage}
                        onChange={handleHospitalChangeperpage}
                      >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                      </select>
                    </div>
                    <div className="hospitals_paginationbtns">
                      {hospitalsCurrentPage >= 1 && (
                        <button
                          onClick={() =>
                            hospitalsGoToPage(hospitalsCurrentPage - 1)
                          }
                          className="hospitals_prevpage round-shadow poppins-medium"
                        >
                          Prev Page
                        </button>
                      )}
                      {hospitalsCurrentPage < hospitalsTotalPages() && (
                        <button
                          onClick={() =>
                            hospitalsGoToPage(hospitalsCurrentPage + 1)
                          }
                          className="hospitals_nextpage round-shadow poppins-medium"
                        >
                          Next Page
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </>
            )}
            {tabValue === 1 && <InOfficeClinic />}
          </div>
          {/* {type !== "minimal" && (
            <div className="right_container">
              <PopularContent />
            </div>
          )} */}
        </div>
      </DoctorStyled>
    </>
  );
};

export default Doctor;
