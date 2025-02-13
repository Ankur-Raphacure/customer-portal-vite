import React from "react";
import { TimeWithGraphStyled } from "./TimeWithGraph.styled";
import LineGraphWithLabs from "../ScanDetails/LineGraph";

const allSlotList = [
  {
    name: "Morning",
  },
  {
    name: "Afternoon",
  },
  {
    name: "Evening",
  },
];
const allGenderList = [
  {
    name: "Male Radiologist",
  },
  {
    name: "Female Radiologist",
  },
];
const items = [
  { date: "Sat, Nov 1", price: "₹100" },
  { date: "Sat, Nov 2", price: "₹200" },
  { date: "Sat, Nov 3", price: "₹300" },
  { date: "Sat, Nov 4", price: "₹400" },
  { date: "Sat, Nov 30", price: "₹500" },
  { date: "Sat, Nov 5", price: "₹600" },
];
const TimeWithGraph = () => {
  return (
    <TimeWithGraphStyled>
      <div className="timeslot-graph-div">
        <p>Time Based Price</p>
        <div className="d-flex graph-main-div">
          <div className="left-slot-filter">
            <div className="left-slot-filter-card">
              <div className="d-flex justify-content-between align-items-center">
                <p>Filters</p>
                <p>CLEAR ALL</p>
              </div>
              <div className="filter-checkbox">
                {allSlotList?.map((item: any) => {
                  return (
                    <div>
                      <input
                        title="Checkbox"
                        type="checkbox"
                        className="me-3"
                      />
                      {item?.name}
                    </div>
                  );
                })}
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <p>Radiologist</p>
              </div>
              <div className="filter-checkbox ">
                {allGenderList?.map((item: any) => {
                  return (
                    <div>
                      <input
                        title="Checkbox"
                        type="checkbox"
                        className="me-3"
                      />
                      {item?.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="right-slot-filter">
            <div className="slot-carousel-container">
              <button className="arrow-btn left">{`<`}</button>
              <div className="vertical-line"></div>
              {items.map((item, index) => (
                <>
                  <div className="carousel">
                    <div key={index} className="carousel-item">
                      <span className="item-date">{item.date}</span>

                      <span className="item-price">{item.price}</span>
                    </div>
                  </div>
                  <div className="vertical-line"></div>
                </>
              ))}
              <button className="arrow-btn right">{`>`}</button>
            </div>

            <div className="graph-container">
              <LineGraphWithLabs />
            </div>
          </div>
        </div>
      </div>
    </TimeWithGraphStyled>
  );
};

export default TimeWithGraph;
