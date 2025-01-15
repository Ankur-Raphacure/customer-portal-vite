// CategoryCards.js
import React from "react";
import { ReactComponent as Location } from "../../../../assets/icons/location.svg";

const SearchBar = () => (
  <div className="container">
    <div className="search-wrapper">
      <div className="location-col">
        <button className="location-btn">
          <Location />
          Location
        </button>
      </div>

      <div className="search-col">
        <input
          type="text"
          className="search-bar"
          placeholder="Search Gym , Swimming , Sports wear"
        />
      </div>
    </div>
  </div>
);

export default SearchBar;
