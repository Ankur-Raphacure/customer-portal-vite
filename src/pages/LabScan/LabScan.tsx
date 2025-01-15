import React from "react";
import { LabScanStyled } from "./LabScan.styled";
import HospitalList from "../Doctor/hospitalList/hospitalList";
import Filter from "../../components/Doctor/Filter/Filter";
import MainHelthCard from "../HealthArticles/MainHelthCard";
import HospitalHeader from "../Hospital/hospitalHeader/hospitalheader";
import LabScanHeader from "./LabScanHeader";
import index from "../Doctor/index";
import DoctorStyled from "../../pages/Doctor/index";
import DynamicSelect from "./DynamicSelect";
import AvailableTests from "./AvailableTests";

const LabScan = () => {
  return (
    <LabScanStyled>
      <div className="container-1">
        <div className="main-card">
          {/* <div className="filter-card">
            <Filter/>
          </div> */}
          <div className="container-2">
            <LabScanHeader />

            <div className="input-group mb-3 mt-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search Lab Test’s Or Packages"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <button type="button" className="btn btn-success">
                search
              </button>
            </div>
            <DynamicSelect />
            <div
              className="PaginationWrapper"
              aria-label="Page navigation example"
            >
              <ul className="pagination">
                <li className="page-item disabled">
                  <a
                    className="page-link"
                    href="#"
                    //   tabIndex="-1"
                    aria-disabled="true"
                  >
                    Next Page
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    6
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    7
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    8
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    9....
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Go to Last Page
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </LabScanStyled>
  );
};

export default LabScan;
