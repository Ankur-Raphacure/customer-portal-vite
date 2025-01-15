import React, { useState } from "react";
import { GymlistStyled } from "./GymlistStyled.Styled";
import SearchBar from "./SearchBar";
import GymlistDetail from "./GymlistDetail";
import Gymcard from "./Gymcard";
import Filterbtn from "./Filterbtn";
import GymIndex from "../../GymIndex";

const Gymlist = () => {
  const [vendorInfo, setVendorInfo] = useState({} as any);
  const [updateState, setUpdateState] = useState(false);

  const handleJonNow = (vendor: any) => {
    console.log("vendor", vendor);
    setVendorInfo(vendor);
    setUpdateState(!updateState);
  };
  console.log("vendorInfo", vendorInfo);
  return (
    <>
      <GymlistStyled>
        <div className="gymlist-wrapper">
          <div className="gymrow">
            <div className="leftsec">
              <SearchBar />
              <Filterbtn />
              <GymlistDetail
                vendorInfo={vendorInfo}
                handleJonNow={handleJonNow}
              />
            </div>
            {/* <div className="rightsec">
            <Gymcard />
          </div> */}
          </div>
        </div>
        {/* <GymIndex /> */}
      </GymlistStyled>
    </>
  );
};

export default Gymlist;
