import React, { useState } from "react";
import { AmbulanceStyled } from "./Ambulance.styled";
import { FaBars, FaFlag, FaMapMarkerAlt } from "react-icons/fa";
import { ReactComponent as PickupCircle } from "../../assets/icons/pickupCircle.svg";
import { ReactComponent as DestIcon } from "../../assets/icons/destIcon.svg";
import ContinueBooking from "./ContinueBooking";
import TrackBookingPage from "./TrackBookingPage";
import AutocompleteField from "../../components/AutoComplete";
import { parseAddress } from "../../Scenes/common";
import {
  setKey,
  setDefaults,
  setLanguage,
  setRegion,
  fromAddress,
  fromLatLng,
  fromPlaceId,
  setLocationType,
  geocode,
  RequestType,
} from "react-geocode";

const Ambulance = () => {
  const [pickup, setPickup] = useState("");
  const [dest, setDest] = useState("");
  const [showContent, setShowContent] = useState("continueBooking");
  setKey("AIzaSyDiKV3OLHnGFYI4qhcIKjk7tzG-RXeUI5s");
  const handlePlaceSelected = (place: any) => {
    const place_id = place?.place_id;
    fromPlaceId(place_id)
      .then(({ results }) => {
        const { lat, lng } = results[0].geometry.location;
        console.log(lat, lng);
      })
      .catch(console.error);

    let inputRef: any = document.getElementById("address")!;
    console.log("place", place);
    let selectedAddress = inputRef?.value;
    console.log("selectedAddress", selectedAddress);
    let { address1, city, state, country, zipcode } = parseAddress(
      place,
      selectedAddress
    );
    // fromPlaceId(place?.place_id)
    //   .then(({ results }) => {
    //     const { lat, lng } = results[0].geometry.location;
    //     console.log(lat, lng);
    //   })
    //   .catch(console.error);

    // const addr = { ...signUpData };
    // const addressNew = {
    //   ...addr,
    //   ["address"]: selectedAddress,
    //   ["city"]: city,
    //   ["state"]: state,
    //   // ["country"]: country,
    //   ["zip"]: zipcode,
    //   ["detail"]: address1,
    //   ["latitude"]: 9.6031088,
    //   ["longitude"]: 77.161458,
    // };
    // console.log("addressNew", addressNew);
    // setSignUpData(addressNew);
    // // inputRef.value = selectedAddress;
    // console.log("initValError", initValError);
    // setErrorData({ ...initValError });
  };
  return (
    <AmbulanceStyled>
      <FaBars />
      {showContent === "mainContent" && (
        <div className="mainContent">
          <div className="booking-container">
            <h2>Rapid Response: Locate and Book Your Ambulance Now!</h2>
            <p>Enter Pickup and Drop-off Locations</p>
            <form>
              <div className="input-group ">
                <PickupCircle />
                {/* <input
                  type="text"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  placeholder="Pickup location"
                  className="input-field"
                /> */}
                <AutocompleteField
                  onPlaceSelected={(place: any) => handlePlaceSelected(place)}
                  autoFocus={true}
                  name="fromAddress"
                  id="fromAddress"
                  // defaultValue={signUpData?.address}
                  placeholder="Street address, House No"
                  onChange={(e: any) => {
                    // if (!e.target.value) {
                    //   setFieldValue("city", "");
                    //   setFieldValue("state", "");
                    //   setFieldValue("zipCode", "");
                    // }
                    // onChangeValues(e);
                  }}
                />
              </div>
              <div className="input-group">
                <DestIcon />
                <input
                  type="text"
                  value={dest}
                  onChange={(e) => setDest(e.target.value)}
                  placeholder="Destination"
                  className="input-field"
                />
              </div>
              <button
                type="submit"
                className="continue-button"
                onClick={() => setShowContent("continueBooking")}
              >
                Continue
              </button>
            </form>
          </div>
          <div className="emergencyDiv">
            {/* <div className="leftImage"></div> */}
            {/* <img src={leftImage} alt="" /> */}
            <div className="cardContainer">
              <h2>Are you in an emergency?</h2>
              <p>
                Enter details and submit by sos button. We get back to you soon{" "}
              </p>
              <form>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="input-field"
                  />
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Enter Mobile"
                    className="input-field"
                  />
                </div>
                <button type="submit" className="continue-button">
                  Continue
                </button>
              </form>
            </div>
            <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736425965406.png" alt="" />
          </div>
        </div>
      )}
      {showContent === "continueBooking" && (
        <ContinueBooking
          setShowContent={setShowContent}
          destLoc={dest}
          picLoc={pickup}
        />
      )}
      {showContent === "trackBooking" && (
        <TrackBookingPage
          setShowContent={setShowContent}
          destLoc={dest}
          picLoc={pickup}
        />
      )}
    </AmbulanceStyled>
  );
};

export default Ambulance;
