import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import { SelectAddressStyled } from "../Doctor/SelectAddress/SelectAddress.styled";
import { IoIosArrowForward } from "react-icons/io";
import { BsPencil } from "react-icons/bs";
import {
  getMyAddressQueryAPI,
  getNearbyVendorsAPI,
} from "../../redux/slices/Profile/ProfileService";
import AddNewAddress from "../AddNewAddress/AddNewAddress";
import {
  updateShowLoginModel,
  updateUserCity,
} from "../../redux/slices/auth/authSlice";
import { updateCityNameAPI } from "../../redux/slices/auth/authService";
import { useDispatch, useSelector } from "react-redux";
import { CityPopupStyled } from "./HeaderAddress.styled";
import { updateSelectedUserAddress } from "../../redux/slices/Profile/ProfileSlice";
import { updateCheckoutSelectedAddress } from "../../redux/slices/checkout/checkoutSlice";
import { toast } from "react-toastify";
import AutocompleteField from "../AutoComplete";
const BreadcrumbRow = styled.div`
  display: flex;
  align-items: center;
  background-color: #f6f9fd;
  cursor: pointer;
  padding: 0px 50px;
  @media (max-width: 768px) {
    padding: 0px 0px;
    background: none !important;
  }
`;
const ItemText = styled.div`
  color: #252b61;
  font-family: Outfit, sans-serif;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.21px;
  cursor: pointer;
  text-decoration: underline;
  text-decoration-color: #252b61;
  @media (max-width: 768px) {
    font-size: 14px;
    display: none;
  }
`;
const ItemSubText = styled.div`
  color: #252b61;
  font-family: Outfit, sans-serif;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.21px;
  cursor: pointer;

  @media (max-width: 768px) {
    .pencil-icon {
      display: none;
    }
    margin-top: 0rem;
    font-size: 14px;
    letter-spacing: 0.02em;
    text-transform: capitalize;
    font-family: Outfit, sans-serif;
    color: #fff;
    opacity: 0.7;
  }
`;

const HeaderAddress = (props: any) => {
  const { address, location } = props;
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    props.handleClose(false);
  };
  const handleShow = () => setShow(true);
  const [showAddAddressModel, setShowAddAddressModel] = useState(false);
  const [selectedAdd, setSelectedAddr] = useState({} as any);
  const [selectedAddress1, setSelectedAddress1] = useState({} as any);
  const { configInfo } = useSelector((ReduxState: any) => ReduxState.config);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAddress, setSelectedAddress] = useState<any>({});
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);
  const { userAddress } = useSelector((ReduxState: any) => ReduxState.profile);
  const { selectedCurrentAddress } = useSelector(
    (ReduxState: any) => ReduxState.profile,
  );
  const selectSavedAddress = (addss: any) => {
    setSelectedAddress(addss);
  };

  useEffect(() => {
    console.log("selectedCurrentAddress : ", selectedCurrentAddress);
  }, [selectedCurrentAddress]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const filteredCities = configInfo?.cities?.filter((city: any) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  useEffect(() => {
    let addr: any = null;
    const storedAddress = localStorage.getItem("selectedAddress");
    if (storedAddress) {
      addr = JSON.parse(storedAddress);
    } else {
      userAddress?.map((address: any) => {
        if (address?.isDefault) {
          addr = address;
        }
      });
    }
    console.log("updateSelectedUserAddress addr : ", addr);

    dispatch(updateSelectedUserAddress(addr));
  }, [userAddress, dispatch]);

  const handleOnchange = async (evt: any, address: any) => {
    console.log(address, "122333");
    localStorage.setItem("selectedAddress", JSON.stringify(address));
    dispatch(updateSelectedUserAddress(address || {}));
    if (address?.id) {
      dispatch(updateCheckoutSelectedAddress(address));
    }
    handleSelectCity(address);
    props.selectSavedAddress({ ...address }, props.index);
    handleClose();
  };
  const handleSelectCity = (item: any) => {
    if (item?.city || item?.id) {
      const newObj = {
        name: item?.city,
        id: item?.city?.toLowerCase(),
      } as any;
      dispatch(updateUserCity(newObj));
      dispatch(
        updateCityNameAPI({ city: item?.city || item?.city?.toLowerCase() }),
      );
    }
  };

  const handleUserAddressAddClick = () => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      setSelectedAddr({});
      setShowAddAddressModel(true);
    }
  };

  const addAddressSuccess = (addedData: any) => {
    setShowAddAddressModel(false);
    dispatch(getMyAddressQueryAPI());
    setSelectedAddr(addedData?.address);
  };

  const getNearbyVendors = (latitude: any, longitude: any) => {
    const pathName = window.location.pathname;
    var sectionName = "";
    if (pathName === "/doctor") {
      sectionName = "doctor";
    } else if (pathName === "/labtest") {
      sectionName = "labtest";
    } else if (pathName === "/radiology") {
      sectionName = "radiology";
    }
    const nearbyVendorsBody = {
      latitude: latitude,
      longitude: longitude,
      section_name: sectionName,
    };
    dispatch(getNearbyVendorsAPI(nearbyVendorsBody));
  };

  const handlePlaceSelected = (place: any) => {
    if (place) {
      // Extract required details
      const name = place.name || "";
      const fullAddress = place.formatted_address;
      const latitude = place.geometry?.location?.lat();
      const longitude = place.geometry?.location?.lng();
      const addressComponents = place.address_components;

      const city = addressComponents?.find((component: any) =>
        component.types.includes("locality"),
      )?.long_name;

      const state = addressComponents?.find((component: any) =>
        component.types.includes("administrative_area_level_1"),
      )?.long_name;

      const country = addressComponents?.find((component: any) =>
        component.types.includes("country"),
      )?.long_name;

      const postalCode = addressComponents?.find((component: any) =>
        component.types.includes("postal_code"),
      )?.long_name;

      const address1 = addressComponents
        ?.filter((component: any) =>
          component.types.some((type: string) =>
            ["street_number", "route", "sublocality", "neighborhood"].includes(
              type,
            ),
          ),
        )
        .map((component: any) => component.long_name)
        .join(", ");

      // Address2 includes sublocality, state, and country
      const sublocality = addressComponents?.find((component: any) =>
        component.types.includes("sublocality"),
      )?.long_name;

      const address2 = [sublocality, state, country]
        .filter((part) => part)
        .join(", ");

      console.log({
        name,
        fullAddress,
        latitude,
        longitude,
        state,
        city,
        country,
        postalCode,
        address1,
        address2,
      });
      if (latitude && longitude) {
        getNearbyVendors(latitude, longitude);
        handleClose();
        const savedAddr = {
          id: null,
          name,
          address,
          address1,
          address2,
          fullAddress,
          landmark: null,
          isDefault: false,
          detail: null,
          city,
          latitude,
          longitude,
          state,
          zip: postalCode,
        };
        handleOnchange(null, savedAddr);
      } else {
        console.error("Unable to get location");
        toast.error("Unable to get location");
      }
    }
  };
  useEffect(() => {
    dispatch(getMyAddressQueryAPI());
  }, []);

  useEffect(() => {
    if (userAddress?.length > 0 && !selectedAddress?.id) {
      setSelectedAddress(userAddress[0]);
    }
  }, [userAddress, selectedAddress]);
  return (
    <>
      <BreadcrumbRow>
        <ItemText className="selectaddress-btn" onClick={handleShow}>
          Select Service Location
          <IoIosArrowForward />
        </ItemText>
        <ItemSubText onClick={handleShow}>
          {selectedCurrentAddress
            ? `${selectedCurrentAddress?.city || ""}, ${
                selectedCurrentAddress?.zip || ""
              }`
            : `${address?.city || address?.name || ""}${
                address?.zip ? "-" : ""
              } ${address?.zip || ""} `}
          <BsPencil className="ms-2 pencil-icon" />
        </ItemSubText>
      </BreadcrumbRow>

      {(show || location) && (
        <Modal
          fullscreen="md-down"
          dialogClassName="custom_addressmodal"
          show={show || location}
          onHide={handleClose}
        >
          <SelectAddressStyled>
            <Modal.Header closeButton>
              <Modal.Title className="poppins-medium">
                Select Addresses
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {props.addressList &&
                props.addressList.length > 0 &&
                props.addressList.map((address: any, index: string) => {
                  return (
                    <label className="addresslist-label">
                      <span className="addresslist-inputspan">
                        {props?.address?.id === address?.id && (
                          <input
                            className="addresslist-input"
                            type="radio"
                            defaultChecked
                            onChange={(e) => handleOnchange(e, address)}
                            name="address-group"
                            value={address?.id}
                          />
                        )}
                        {props?.address?.id !== address?.id && (
                          <input
                            className="addresslist-input"
                            type="radio"
                            name="address-group"
                            onChange={(e) => handleOnchange(e, address)}
                            value={address?.id}
                          />
                        )}
                      </span>
                      <span className="poppins-regular addresslist-text">
                        {address?.address}
                      </span>
                    </label>
                  );
                })}
              {/* {(!props.addressList || props.addressList.length === 0) && (
                <div className="error">
                  Sorry, No Saved Addresses available!!
                </div>
              )} */}
              <AutocompleteField
                onPlaceSelected={(place: any) => handlePlaceSelected(place)}
                autoFocus={true}
                name="address"
                id="address"
                defaultValue={""}
                placeholder="Enter a Place"
                onChange={(e: any) => {}}
              />
              <CityPopupStyled>
                {/* <div className="popular-city-naes-list">
                  <div className="py-1 px-3 mt-4">
                    <h6>Popular Cities</h6>
                    <div className="search-div">
                      <input
                        className="form-control mt-3 mb-3 w-50"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={searchTerm}
                        onChange={handleSearchChange}
                      />
                    </div>
                  </div>

                  <div className="btn-container px-3">
                    {filteredCities?.map((item: any) => (
                      <button
                        onClick={() => {
                          // handleSelectCity(item);
                          handleOnchange("", item);
                        }}
                        className="btn btn-outline-info"
                        key={item.id}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div> */}
              </CityPopupStyled>
            </Modal.Body>
            <div className="btn0sec-bottom">
              <button
                onClick={() => {
                  handleUserAddressAddClick();
                }}
                className="btn"
              >
                Add New Address
              </button>
            </div>
          </SelectAddressStyled>
        </Modal>
      )}

      <AddNewAddress
        show={showAddAddressModel}
        onHide={() => {
          setShowAddAddressModel(false);
        }}
        addUserSuccess={addAddressSuccess}
        selectedMember={selectedAddress1}
      />
    </>
  );
};
export default HeaderAddress;
