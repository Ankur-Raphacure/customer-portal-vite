import { ContinueBookingStyled } from "./ContinueBooking.styled";
import React, { useState, useEffect } from "react";
import { AmbulanceStyled } from "./Ambulance.styled";
import { FaBars, FaFlag, FaMapMarkerAlt } from "react-icons/fa";
import { ReactComponent as PickupCircle } from "../../assets/icons/pickupCircle.svg";
import { ReactComponent as DestIcon } from "../../assets/icons/destIcon.svg";
import AmbulanceService from "./AmbulanceService";
import styled from "styled-components";
import DropdownPopup from "./DropdownPopup";
import BookingConfirm from "./BookingConfirm";
import { DatePicker, Space } from "antd";
import moment from "moment";
import { GOOGLE_MAP_URL } from "../../config";
import Loader from "../../components/Common/Loader";
import DatePickerComponent from "./DatePickerComponent";
import AutocompleteField from "../../components/AutoComplete";
import { parseAddress } from "../../Scenes/common";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateShowLoginModel } from "../../redux/slices/auth/authSlice";
import { handleAddToCart } from "../../redux/slices/checkout/checkoutSlice";
import {
  handleAddToCartAPI,
  getCartItemsAPI,
} from "../../redux/slices/checkout/checkoutService";
import { updateAllAmbulanceList } from "../../redux/slices/generic/genericSlice";
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
import { getAmbulanceList } from "../../redux/slices/generic/genericService";
import MobileSlider from "./MobileSlider";
const ContinueBooking = ({ setShowContent, picLoc, destLoc }: any) => {
  const [pickup, setPickup] = useState(picLoc);
  const [dest, setDest] = useState(destLoc);
  const [dates, setDates] = useState([]);
  const [times, setTimes] = useState([]);
  const [scheduleOption, setScheduleOption] = useState("Now");
  const [selectedTab, setSelectedTab] = useState("book-ambulance");
  const [fromLocation, setFromLocation] = useState({} as any);
  const [toLocation, setToLocation] = useState({} as any);
  const [startDate, setStartedDate] = useState(null as any);
  const [startedDateValue, setStartedDateValue] = useState("" as any);
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [fromPlaceId1, setFromPlaceId1] = useState("");
  const [toPlaceId, setToPlaceId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [fromAddressObj, setFromAddressObj] = useState({} as any);
  const [toAddressObj, setToAddressObj] = useState({} as any);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();
  const { allAmbulanceList } = useSelector(
    (ReduxState: any) => ReduxState.generic,
  );
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);
  console.log("allAmbulanceList", allAmbulanceList);
  setKey("AIzaSyDiKV3OLHnGFYI4qhcIKjk7tzG-RXeUI5s");
  useEffect(() => {
    // onLoadGoogleMap();
  }, []);

  const onLoadGoogleMap = () => {
    const script = document.createElement("script");
    script.src = GOOGLE_MAP_URL;
    script.id = "googleMaps";
    document.body.appendChild(script);
    script.onload = () => {
      handleScriptLoad();
    };
  };
  const handleScriptLoad = () => {
    try {
      // const google = window.google;
      // if (document.getElementById("editProfileaddCreateUserAdress1")) {
      //   const options = {
      //     componentRestrictions: { country: "ind" },
      //   };
      //   const autocomplete = new google.maps.places.Autocomplete(
      //     document.getElementById("editProfileaddCreateUserAdress1"),
      //     options
      //   );
      //   autocomplete.setFields(["address_components", "formatted_address"]);
      //   autocomplete.addListener("place_changed", () => {
      //     const place = autocomplete.getPlace();
      //     handlePlaceSelect(place);
      //   });
      // }
    } catch (e) {
      console.log("e", e);
    }
  };
  const handlePlaceSelect = (addressObject: any) => {
    var address1 = "";
    let postcode = "";
    let city = "";
    let state = "";
    let address2 = "";
    let address21 = "";
    let country = "";
    console.log("addressObject", addressObject);
    let fullAddress = addressObject?.formatted_address;
    for (const component of addressObject?.address_components) {
      const componentType = component.types[0];
      switch (componentType) {
        case "street_number": {
          address1 = `${component.long_name}`;
          break;
        }
        case "route": {
          address2 = component.short_name;
          break;
        }
        case "postal_code": {
          postcode = `${component.long_name}${postcode}`;
          break;
        }
        case "locality":
          city = component.long_name;
          break;
        case "country":
          country = component.long_name;
          break;
        case "administrative_area_level_1": {
          state = component.long_name;
          break;
        }
        case "sublocality_level_1": {
          address21 = component.long_name;
          break;
        }
      }
    }
    const AddressLine1 = address1 + " " + address2;
    console.log("fullAddress", fullAddress);
    console.log("fullAddress", AddressLine1);
    console.log("fullAddress", address21);
    console.log("fullAddress", city);
    console.log("fullAddress", state);
    console.log("fullAddress", country);
    console.log("fullAddress", postcode);
    // const stateD = getPrevData();
    // stateD["address"] = fullAddress;
    // stateD["address1"] = AddressLine1;
    // stateD["address2"] = address21;
    // stateD["city"] = city;
    // stateD["state"] = state;
    // stateD["county"] = country;
    // stateD["zipCode"] = postcode;
    // console.log("stateDstateD", stateD);
    // setSignUpData(stateD);
  };

  const handlePlaceSelected = (place: any) => {
    setErrorMessage("");
    dispatch(updateAllAmbulanceList({}));
    let inputRef: any = document.getElementById("fromAddress")!;
    console.log("place", place);
    let selectedAddress = inputRef?.value;
    inputRef.value = selectedAddress;
    setFromValue(place?.formatted_address);
    const place_id = place?.place_id;
    fromPlaceId(place_id)
      .then(({ results }) => {
        const { lat, lng } = results[0].geometry.location;
        console.log(lat, lng);
        setFromLocation({ latitude: lat, longitude: lng });
      })
      .catch(console.error);
    let { address1, city, state, country, zipcode } = parseAddress(
      place,
      selectedAddress,
    );
    console.log("zipcode", zipcode);
    setFromAddressObj({ address: selectedAddress, zip: zipcode, city, state });

    // return place?.formatted_address;
  };
  const handlePlaceSelected1 = (place: any) => {
    setErrorMessage("");
    dispatch(updateAllAmbulanceList({}));
    console.log("place", place);
    let inputRe1f: any = document.getElementById("toAddress")!;
    let selectedAddress = inputRe1f?.value;
    inputRe1f.value = selectedAddress;
    setToValue(place?.formatted_address);

    const place_id = place?.place_id;
    // setToPlaceId(place_id);
    fromPlaceId(place_id)
      .then(({ results }) => {
        const { lat, lng } = results[0].geometry.location;
        setToLocation({ latitude: lat, longitude: lng });
      })
      .catch(console.error);
    let { address1, city, state, country, zipcode } = parseAddress(
      place,
      selectedAddress,
    );
    setToAddressObj({ address: selectedAddress, zip: zipcode, city, state });
  };
  useEffect(() => {
    if (fromLocation?.latitude && toLocation?.latitude && startedDateValue) {
      const body = { from: fromLocation, to: toLocation };
      getLatestData(body);
    }
  }, [toLocation, fromLocation, startedDateValue]);
  const getLatestData = async (datebody: any) => {
    setIsLoading(true);
    const resp = (await dispatch(getAmbulanceList(datebody))) as any;
    console.log("resp", resp);
    setIsLoading(false);
    if (resp?.error?.message) {
      setErrorMessage(resp?.error?.message);
    }
  };

  // const onChangeStart = (datev: any) => {
  //   setErrorMessage("");
  //   dispatch(updateAllAmbulanceList({}));
  //   const date2 = new Date(datev);
  //   console.log("date2", date2);
  //   console.log("onChange", datev);
  //   const datav = moment(datev || new Date()).format("YYYY-MM-DD");
  //   console.log("datav", datav);
  //   setStartedDate(datev);
  //   setStartedDateValue(datav);
  // };

  const onChangeStart = (datev: any) => {
    setErrorMessage("");
    dispatch(updateAllAmbulanceList({}));
    const selectedDate = new Date(datev);
    const today = new Date();

    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      setErrorMessage("Select a date greater than or equal to today");
      return; // Exit the function if the selected date is less than today
    }

    const formattedDate = moment(datev || new Date()).format("YYYY-MM-DD");
    setStartedDate(datev);
    setStartedDateValue(formattedDate);
  };
  const handleBooking = (anType: any) => {
    console.log("anType", anType);
    setErrorMessage("");
    addToCart(anType);
  };
  console.log("fromAddressObj", fromAddressObj);
  const addToCart = async (itemR: any) => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      const body1 = {
        carts: [
          {
            collection_1_date: startedDateValue,
            collection_1_slot: null,
            test_code: itemR?.service_code,
            user_id: user?.id,
            useWallet: true,
            // virtual_type: "video",
            address: {
              ...fromAddressObj,
              ...fromLocation,
              latitude: 12.89956873275598,
              longitude: 77.6559502529872,
              address: fromValue,
              zip: fromAddressObj?.zip,
            },
            to_address: {
              ...toAddressObj,
              ...toLocation,
              latitude: 12.89956873275598,
              longitude: 77.6559502529872,
              address: toValue,
            },
            section_key: "ambulance",
          },
        ],
      };
      // const body1 = {
      //   carts: [
      //     {
      //       user_id: user?.id,
      //       useWallet: false,
      //       collection_1_date: null,
      //       collection_1_slot: null,
      //       medicines: medC,
      //     },
      //   ],
      // };
      const prevObject = {
        ...itemR,
        notes: allAmbulanceList?.distance,
        fromAddress: { ...fromAddressObj, ...fromLocation },
        toAddress: { ...toAddressObj, ...toLocation },
        categoryName: "ambulance",
        collection_1_date: startedDateValue,
      };
      console.log("prevObject", prevObject);
      const resp = (await dispatch(handleAddToCartAPI(body1))) as any;
      if (resp?.payload?.success) {
        history.push("/checkout");
      } else {
        setErrorMessage(resp?.error?.message);
      }
      // await dispatch(getCartItemsAPI());

      // await dispatch(
      //   handleAddToCart({
      //     ...itemR,
      //     notes: allAmbulanceList?.distance,
      //     fromAddress: { ...fromAddressObj, ...fromLocation },
      //     toAddress: { ...toAddressObj, ...toLocation },
      //     categoryName: "ambulance",
      //     collection_1_date: startedDateValue,
      //   })
      // );
    }
  };
  // const [trackBooking, setShowContent] = useState(false);
  const tabs = [
    { id: "book-ambulance", label: "Book Ambulance" },
    { id: "air-ambulance", label: "Air Ambulance" },
    { id: "train-ambulance", label: "Train Ambulance" },
    { id: "rent-ambulance", label: "Rent Ambulance" },
  ];

  const renderContent = () => {
    switch (selectedTab) {
      case "book-ambulance":
        return <BookAmbulance setShowContent={setShowContent} />;
      case "air-ambulance":
        return <AirAmbulance setShowContent={setShowContent} />;
      case "train-ambulance":
        return <TrainAmbulance setShowContent={setShowContent} />;
      case "rent-ambulance":
        return <RentAmbulance setShowContent={setShowContent} />;
      default:
        return null;
    }
  };

  const BookAmbulance = ({ setShowContent }: any) => {
    const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
    return (
      <>
        <div className="booking-container">
          {isLoading && <Loader />}

          <form>
            <div className="input-group input-group-key-map">
              <PickupCircle />
              {/* <div>
              <input
                type="text"
                id="pickup_location_input"
                maxLength={500}
                name="pickup_location_input"
                // isInvalid={errorData?.address}
                // value={signUpData?.address}
                // onChange={(e) => handleChangeValue(e)}
              />
            </div> */}
              {/* <AutocompleteField
              onPlaceSelected={(place: any) => handlePlaceSelected(place)}
              autoFocus={false}
              name="fromAddress"
              id="fromAddress"
              value={fromValue}
              placeholder={fromValue ? fromValue : "Pickup Location"}
            /> */}

              <AutocompleteField
                onPlaceSelected={(place: any) => handlePlaceSelected(place)}
                autoFocus={false}
                name="fromAddress"
                id="fromAddress"
                value={fromValue}
                placeholder={fromValue ? fromValue : "Pickup Location"}
              />
            </div>
            <div className="input-group input-group-key-map">
              <DestIcon />
              <AutocompleteField
                onPlaceSelected={(place: any) => handlePlaceSelected1(place)}
                // autoFocus={true}
                name="toAddress"
                id="toAddress"
                value={toValue}
                // defaultValue={signUpData?.address}
                // placeholder="Destination"
                placeholder={toValue ? toValue : "Destination"}
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
            <div className="date-selctor-sec">
              <label> Date: </label>
              <DatePicker value={startDate} onChange={onChangeStart} />
            </div>
            {errorMessage && <p className="error_message">{errorMessage}</p>}
            {/* <div className="input-group selectGroup">
            When
            <div className="card p-1">
              <select
                title="Choose When"
                className="form-control"
                value={scheduleOption}
                onChange={handleOptionChange}
              >
                <option>Now</option>
                <option>Schedule for Later</option>
              </select>
            </div>
          </div> */}
            {scheduleOption === "Schedule for Later" && (
              <div className="input-group selectGroup">
                Depart
                <div className="card p-1 selectWrapper">
                  <select title="Select Date" className="form-control">
                    {dates.map((date, index) => (
                      <option key={index} value={date}>
                        {date}
                      </option>
                    ))}
                  </select>
                  <select title="Select Time" className="form-control">
                    {times.map((time, index) => (
                      <option key={index} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </form>
          {toValue && fromValue && (
            <AmbulanceService
              list={allAmbulanceList?.tests || []}
              distance={allAmbulanceList?.distance || {}}
              setIsBookingConfirmed={setIsBookingConfirmed}
              handleBooking={handleBooking}
            />
          )}

          {isBookingConfirmed && (
            <BookingConfirm
              setShowContent={setShowContent}
              onClose={() => setIsBookingConfirmed(false)}
              bkId={"book111"}
            />
          )}
        </div>
      </>
    );
  };

  const AirAmbulance = ({ setShowContent }: any) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [medicalHistory, setMedicalHistory] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

    const UploadButton = styled.button`
      padding: 10px 20px;
      background-color: #9747ff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      width: 100%;
      &:hover {
        background-color: #673ab7;
      }
    `;

    const handleButtonClick = () => {
      setShowPopup(true);
    };

    const handleClosePopup = () => {
      setShowPopup(false);
    };

    const openDropdownZone = (e: any) => {
      e.preventDefault();
      if (e.target.files && e.target.files.length > 0) {
        setMedicalHistory(e.target.files[0] as any);
      }
    };

    const handleSubmit = (event: any) => {
      event.preventDefault();
      // Handle the form submission logic here
      console.log({
        name,
        age,
        gender,
        medicalHistory,
      });
    };

    return (
      <div className="booking-container">
        <form>
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
          <div className="input-group selectGroup">
            Depart
            <div className="card p-1 selectWrapper">
              <select title="Select Date" className="form-control">
                {dates.map((date, index) => (
                  <option key={index} value={date}>
                    {date}
                  </option>
                ))}
              </select>
              <select title="Select Time" className="form-control">
                {times.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter patient full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="ageWrapper">
            <div className="form-group">
              <input
                type="number"
                placeholder="How old is the patient"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>
            <div className="form-group genderGroup">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
              </label>
            </div>
          </div>

          <div className="form-group">
            <UploadButton type="button" onClick={handleButtonClick}>
              Upload medical history
            </UploadButton>
            {showPopup && <DropdownPopup onClose={handleClosePopup} />}
          </div>
          <button
            type="button"
            className="submit-btn"
            onClick={() => setIsBookingConfirmed(true)}
          >
            BOOK NOW
          </button>
        </form>
        {isBookingConfirmed && (
          <BookingConfirm
            setShowContent={setShowContent}
            onClose={() => setIsBookingConfirmed(false)}
            bkId={"bk11"}
          />
        )}
      </div>
    );
  };

  const TrainAmbulance = ({ setShowContent }: any) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [medicalHistory, setMedicalHistory] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

    const UploadButton = styled.button`
      padding: 10px 20px;
      background-color: #9747ff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      width: 100%;
      &:hover {
        background-color: #673ab7;
      }
    `;

    const handleButtonClick = () => {
      setShowPopup(true);
    };

    const handleClosePopup = () => {
      setShowPopup(false);
    };

    const openDropdownZone = (e: any) => {
      e.preventDefault();
      if (e.target.files && e.target.files.length > 0) {
        setMedicalHistory(e.target.files[0] as any);
      }
    };

    const handleSubmit = (event: any) => {
      event.preventDefault();
      // Handle the form submission logic here
      console.log({
        name,
        age,
        gender,
        medicalHistory,
      });
    };

    return (
      <div className="booking-container">
        <form>
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
          <div className="input-group selectGroup">
            Depart
            <div className="card p-1 selectWrapper">
              <select title="Select Date" className="form-control">
                {dates.map((date, index) => (
                  <option key={index} value={date}>
                    {date}
                  </option>
                ))}
              </select>
              <select title="Select Time" className="form-control">
                {times.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter patient full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="ageWrapper">
            <div className="form-group">
              <input
                type="number"
                placeholder="How old is the patient"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>
            <div className="form-group genderGroup">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
              </label>
            </div>
          </div>

          <div className="form-group">
            <UploadButton type="button" onClick={handleButtonClick}>
              Upload medical history
            </UploadButton>
            {showPopup && <DropdownPopup onClose={handleClosePopup} />}
          </div>
          <button
            type="button"
            className="submit-btn"
            onClick={() => setIsBookingConfirmed(true)}
          >
            BOOK NOW
          </button>
        </form>
        {isBookingConfirmed && (
          <BookingConfirm
            setShowContent={setShowContent}
            onClose={() => setIsBookingConfirmed(false)}
            bkId={"bkAmb11"}
          />
        )}
      </div>
    );
  };

  const RentAmbulance = ({ setShowContent }: any) => {
    const [showAmbulances, setShowAmbulances] = useState(false);
    const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

    return (
      <div className="booking-container">
        <form>
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
          <DatePickerComponent setShowAmbulances={setShowAmbulances} />
          {showAmbulances && (
            <AmbulanceService setIsBookingConfirmed={setIsBookingConfirmed} />
          )}
        </form>
        {isBookingConfirmed && (
          <BookingConfirm
            setShowContent={setShowContent}
            onClose={() => setIsBookingConfirmed(false)}
            bkId={"bkRent111"}
          />
        )}
      </div>
    );
  };

  const handleOptionChange = (event: any) => {
    setScheduleOption(event.target.value);
  };

  useEffect(() => {
    // Generate next 10 days
    const newDates = [];
    const today = new Date();
    for (let i = 0; i < 10; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const day = date.toLocaleDateString("en-US", { weekday: "long" });
      const month = date.toLocaleDateString("en-US", { month: "long" });
      const dayNumber = date.getDate();
      if (i === 0) {
        newDates.push("Today");
      } else if (i === 1) {
        newDates.push("Tomorrow");
      } else {
        newDates.push(`${day} ${dayNumber} ${month}`);
      }
    }
    setDates(newDates as any);

    // Generate times in 30 minute intervals starting from the nearest fresh hour or half-hour mark
    const newTimes = [];
    let currentTime = new Date();
    currentTime.setSeconds(0, 0); // Reset seconds and milliseconds
    let minutes = currentTime.getMinutes();

    if (minutes > 0 && minutes <= 30) {
      currentTime.setMinutes(30);
    } else if (minutes > 30) {
      currentTime.setHours(currentTime.getHours() + 1);
      currentTime.setMinutes(0);
    }

    for (let i = 0; i < 10; i++) {
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();
      const period = hours >= 12 ? "PM" : "AM";
      const displayHours = hours % 12 || 12;
      const displayMinutes = minutes.toString().padStart(2, "0");
      newTimes.push(`${displayHours}:${displayMinutes} ${period}`);
      currentTime.setMinutes(currentTime.getMinutes() + 30);
    }
    setTimes(newTimes as any);
  }, []);

  return (
    <ContinueBookingStyled>
      <div className="mainContent">
        <div className="mainContent-left">
          <div className="tabs">
            {tabs.map((tab: any, index: any) => (
              <button
                title="Choose Tab"
                key={tab.id}
                disabled={index === 0 ? false : true}
                className={`tab ${selectedTab === tab.id ? "selected" : ""}`}
                onClick={() => setSelectedTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {renderContent()}
        </div>

        <MobileSlider />
        {/* <div className="emergencyDiv mainContent-right">
          <img src={leftImage} alt="" />
          <div className="cardContainer">
            <h2>Download App</h2>
            <p>
              Experience the convenience of managing your health with our app.
              Get instant access to our wide range of medical services and stay
              connected with healthcare professionals on the go.
            </p>
            <img className="videoDemo" src={videoDemo} alt="" />
            <img src={downloadApp} alt="" />
          </div>
          <img src={rightImage} alt="" />
        </div> */}
      </div>
    </ContinueBookingStyled>
  );
};

export default ContinueBooking;
