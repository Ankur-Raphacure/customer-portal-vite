import React, { useEffect, useState } from "react";
import { ReactComponent as PickupCircle } from "../../assets/icons/pickupCircle.svg";
import { ReactComponent as DestIcon } from "../../assets/icons/destIcon.svg";
import { ContinueBookingStyled } from "./ContinueBooking.styled";
import { TrackBookingPageStyled } from "./TrackBookingPage.styled";
import GoogleMapReact from "google-map-react";
import ConfirmPage from "./ConfirmPage";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

const TrackBookingPage = ({ setShowContent, picLoc, destLoc }: any) => {
  const [pickup, setPickup] = useState(picLoc);
  const [dest, setDest] = useState(destLoc);
  const [coupoun, setCoupoun] = useState(destLoc);
  const [confirmBook, setConfirmBook] = useState(false);

  useEffect(() => {
    setPickup(picLoc);
    setDest(destLoc);
  }, [picLoc, destLoc]);

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <ContinueBookingStyled>
      <TrackBookingPageStyled>
        <div className="mainContent">
          <div className="booking-container">
            <div className="mapsLocation">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyBItpkRUSb_676tK37K_3zGTcTVjU--0sw",
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
              </GoogleMapReact>
            </div>
            {!confirmBook ? (
              <form className="locationForm">
                <div className="input-group">
                  <PickupCircle />
                  <input
                    type="text"
                    value={pickup}
                    onChange={(e) => setPickup(e.target.value)}
                    placeholder="Pickup location"
                    className="input-field"
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
                <div className="input-group">
                  <p>Fare</p>
                  <div className="fareGroup">
                    <h2>₹380</h2>
                    <h3>Total Fare</h3>
                  </div>
                </div>
                <div className="input-group">
                  <p>Pay by</p>
                  <div className="card p-1 selectWrapper">
                    <select title="Select Time" className="form-control">
                      <option value={"cash"}>Cash</option>
                      <option value={"wallet"}>Rapha Wallet</option>
                    </select>
                  </div>
                </div>
                <div className="input-group">
                  <p>Coupon</p>
                  <input
                    type="text"
                    value={coupoun}
                    onChange={(e) => setCoupoun(e.target.value)}
                    placeholder="Enter Code"
                    className="input-field"
                  />
                </div>
                <button
                  type="button"
                  className="track-button"
                  onClick={() => setConfirmBook(true)}
                >
                  Confirm & Book
                </button>
              </form>
            ) : (
              <ConfirmPage pickup={pickup} dest={dest} />
            )}
          </div>
          <div className="emergencyDiv">
            {/* <div className="leftImage"></div> */}
            <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736510420528.png" alt="" />
            <div className="cardContainer">
              <h2>Download App</h2>
              <p>
                Experience the convenience of managing your health with our app.
                Get instant access to our wide range of medical services and
                stay connected with healthcare professionals on the go.
              </p>
              <img className="videoDemo" src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736510471957.png" alt="" />
              <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736510499783.png" alt="" />
            </div>
            <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736425965406.png" alt="" />
          </div>
        </div>
      </TrackBookingPageStyled>
    </ContinueBookingStyled>
  );
};

export default TrackBookingPage;
