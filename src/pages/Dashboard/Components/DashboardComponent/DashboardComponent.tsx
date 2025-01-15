import React, { useState } from "react";
import { DashboardComponentStyled } from "./DashboardComponent.styled";
import PulseRate from "./PulseRate";
import Haemoglobin from "./Haemoglobin";
import SugarLevels from "./SugarLevels";
import { FaHeartbeat, FaMicrophone, FaSearch } from "react-icons/fa";
import { IoMaleFemale, IoWater } from "react-icons/io5";
import { FaBottleWater } from "react-icons/fa6";
import RecentOrders from "./RecentOrders";

const DashboardComponent = () => {
  const [pulseData, setPulseData] = useState([
    { name: "Sun", pulse: 65 },
    { name: "Mon", pulse: 55 },
    { name: "Tue", pulse: 45 },
    { name: "Wed", pulse: 50 },
    { name: "Thu", pulse: 60 },
    { name: "Fri", pulse: 75 },
    { name: "Sat", pulse: 80 },
  ]);

  const [haemoglobinData, setHaemoglobinData] = useState([
    { name: "Mon", pulse: 60 },
    { name: "Tue", pulse: 65 },
    { name: "Wed", pulse: 55 },
    { name: "Thu", pulse: 75 },
  ]);

  const [sugarData, setSugarData] = useState([
    { name: "A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "C", uv: 2000, pv: 5800, amt: 2290 },
    { name: "D", uv: 2780, pv: 3908, amt: 2000 },
  ]);

  return (
    <DashboardComponentStyled>
      <div className="userDetails">
        {/* <div className="search-bar borderShadow">
          <input type="text" placeholder="Search" className="search-input" />
          <FaSearch className="search-icon" />
          <div className="separator"></div>
          <FaMicrophone className="microphone-icon" />
        </div> */}
        <div className="healthInfo">
          <div className="borderShadow healthItem">
            <div className="icon">
              <p>Heart Rate</p>
              <div>
                <FaHeartbeat className="healthIcon" size={30} />
              </div>
              <h2>
                0<span>bpm</span>
              </h2>
            </div>
          </div>
          <div className="borderShadow healthItem">
            <div className="icon">
              <p>Blood Pressure</p>
              <div>
                <IoWater className="healthIcon" size={30} />
              </div>
              <h2>
                0 <span>mmHp</span>
              </h2>
            </div>
          </div>
          <div className="borderShadow healthItem">
            <div className="icon">
              <p>Oxygen</p>
              <div>
                <FaBottleWater className="healthIcon" size={30} />
              </div>
              <h2>
                0% <span>SpO2</span>
              </h2>
            </div>
          </div>
        </div>
        <div className="pulseRate borderShadow">
          <div className="selectContainer pulseRate">
            <label htmlFor="day">Pulse Rate</label>
            <select name="day" id="day">
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
          </div>
          <PulseRate data={pulseData} />
        </div>
        <div className="levelsGraphs">
          <div className="borderShadow">
            <div className="selectContainer haemoglobin">
              <label htmlFor="day">Haemoglobin</label>
              <select name="day" id="day">
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
            </div>
            <h4>
              0 <span>g/dL</span>
            </h4>
            <Haemoglobin data={haemoglobinData} />
          </div>
          <div className="borderShadow">
            <div className="selectContainer sugarLevels">
              <label htmlFor="day">SugarLevels</label>
              <select name="day" id="day">
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
            </div>
            <h4>
              0 <span>mg/dL</span>
            </h4>
            <SugarLevels data={sugarData} />
          </div>
        </div>
      </div>
      <div className="recentOrders borderShadow">
        <h2>Recent Orders</h2>
        <RecentOrders />
      </div>
    </DashboardComponentStyled>
  );
};

export default DashboardComponent;
