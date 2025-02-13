import React, { useEffect, useState } from "react";
import { NetworkListStyled } from "./NetworkList.styled";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorsListAPI } from "../../redux/slices/doctor/doctorService";
import DoctoreNetwork from "./DoctoreNetwork";
import NetwokStyle from "./NetwokStyle";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Import icons
import { Form, InputGroup } from "react-bootstrap";

const NetworkList = (props: any) => {
  const [placeholder, setPlaceholder] = useState("Search");
  const [searchQuery, setSearchQuery] = useState("");
  const [scrollToTop, setScrollToTop] = useState(false);

  const handleButtonClick = (newPlaceholder: any) => {
    setPlaceholder(newPlaceholder);
  };

  const dispatch = useDispatch();
  const [doctorsCurrentPage, setDoctorsCurrentPage] = useState(1);
  const [doctorsNumberPerPage, setDoctorsNumberPerPage] = useState(10);
  const [doctorsCount, setDoctorsCount] = useState(0);

  const { hospitalList, doctorsList, tablist } = useSelector(
    (ReduxState: any) => ReduxState.doctor,
  );

  useEffect(() => {
    const doctorRequestObj = {
      count: doctorsNumberPerPage,
      page: doctorsCurrentPage - 1,
      searchText: searchQuery,
    };
    const getDocsApi = async () => {
      const res = await dispatch(getDoctorsListAPI(doctorRequestObj));
      const resStr = JSON.stringify(res);
      const resJson = JSON.parse(resStr);
      setDoctorsCount(resJson.payload.data?.doctorCount);
      console.log(resJson.payload.data.doctors.slice(0, 10));
    };
    getDocsApi();
  }, [dispatch, doctorsCurrentPage, doctorsNumberPerPage, searchQuery]);

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
    setDoctorsCurrentPage(1);
  };

  const totalPageCount = Math.ceil(doctorsCount / doctorsNumberPerPage);
  const startPage = Math.max(1, doctorsCurrentPage - 5);
  const endPage = Math.min(totalPageCount, doctorsCurrentPage + 4);

  const handlePageChange = (page: number) => {
    setDoctorsCurrentPage(page);
    setScrollToTop(true);
  };

  useEffect(() => {
    if (scrollToTop) {
      window.scrollTo({ top: 1, behavior: "smooth" });
      setScrollToTop(false);
    }
  }, [scrollToTop]);

  const renderContent = () => {
    switch (placeholder) {
      case "Search Gym":
        return <div>Gym Page Content</div>;
      case "Search Labs":
        return <div>Labs Page Content</div>;
      case "Search Ayurveda":
        return <div>Ayurveda Page Content</div>;
      case "Search Pharmacy":
        return <div>Pharmacy Page Content</div>;
      case "Search Doctor":
        return (
          <div>
            {doctorsList &&
              doctorsList.doctors?.length > 0 &&
              doctorsList.doctors?.map((doctor: any) => (
                <DoctoreNetwork key={doctor.id} doctor={doctor} />
              ))}
          </div>
        );
      default:
        return (
          <div>
            {doctorsList &&
              doctorsList.doctors?.length > 0 &&
              doctorsList.doctors?.map((doctor: any) => (
                <DoctoreNetwork key={doctor.id} doctor={doctor} />
              ))}
          </div>
        );
    }
  };

  return (
    <NetworkListStyled>
      <div className="networkWrapper">
        <NetwokStyle />

        <div className="listContainer">
          <div className="d-flex custom-card-height">
            <div className="card w-50 me-4">
              <div className="card-body card-div">
                <div className="input-group input-group">
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="input-group-sm"
                    placeholder={placeholder}
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <button
                    className="input-group-text"
                    id="input-group-sm-example"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>

            <div className="custom-btn">
              <button
                className="btn custom-edit-btn"
                onClick={() => handleButtonClick("Search Gym")}
              >
                Gym
              </button>
              <button
                className="btn custom-edit-btn"
                onClick={() => handleButtonClick("Search Ayurveda")}
              >
                Ayurveda
              </button>
              <button
                className="btn custom-edit-btn"
                onClick={() => handleButtonClick("Search Pharmacy")}
              >
                Pharmacy
              </button>
              <button
                className="btn custom-edit-btn"
                onClick={() => handleButtonClick("Search Labs")}
              >
                Labs
              </button>
              <button
                className="btn custom-edit-btn"
                onClick={() => handleButtonClick("Search Doctor")}
              >
                Doctor
              </button>
            </div>
          </div>

          {renderContent()}

          <div className="pagination d-flex justify-content-between">
            <div>
              <h6>{`Page ${doctorsCurrentPage} of ${totalPageCount} pages`}</h6>
            </div>
            <div>
              {doctorsCurrentPage > 1 && (
                <button
                  onClick={() => handlePageChange(doctorsCurrentPage - 1)}
                  className="btn btn-outline-dark me-3"
                >
                  <FaArrowLeft />
                </button>
              )}
              {Array.from({ length: endPage - startPage + 1 }, (_, i) => (
                <button
                  key={startPage + i}
                  onClick={() => handlePageChange(startPage + i)}
                  className={`btn btn-outline-dark ${
                    doctorsCurrentPage === startPage + i ? "active" : ""
                  }`}
                >
                  {startPage + i}
                </button>
              ))}
              {doctorsCurrentPage < totalPageCount && (
                <button
                  onClick={() => handlePageChange(doctorsCurrentPage + 1)}
                  className="btn btn-outline-dark ms-3"
                >
                  <FaArrowRight />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </NetworkListStyled>
  );
};

export default NetworkList;
