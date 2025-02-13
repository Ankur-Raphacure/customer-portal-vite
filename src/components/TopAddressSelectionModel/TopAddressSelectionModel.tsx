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
import { CityPopupStyled } from "./TopAddressSelectionModel.styled";
import { updateSelectedUserAddress } from "../../redux/slices/Profile/ProfileSlice";
import { updateCheckoutSelectedAddress } from "../../redux/slices/checkout/checkoutSlice";
import { toast } from "react-toastify";
import AutocompleteField from "../AutoComplete";

const TopAddressSelectionModel = (props: any) => {
  const { address, location, show } = props;
  const dispatch = useDispatch();

  const [showAddAddressModel, setShowAddAddressModel] = useState(false);
  const [selectedAddress1, setSelectedAddress1] = useState({} as any);
  const { configInfo } = useSelector((ReduxState: any) => ReduxState.config);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAddress, setSelectedAddress] = useState<any>({});
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);
  const { userAddress } = useSelector((ReduxState: any) => ReduxState.profile);
  const { selectedCurrentAddress } = useSelector(
    (ReduxState: any) => ReduxState.profile
  );
  useEffect(() => {
    dispatch(getMyAddressQueryAPI());
  }, []);

  const handleOnchange = async (evt: any, address: any) => {
    // console.log(address, "122333");
    dispatch(updateSelectedUserAddress(address || {}));
    props?.handleClose();
  };

  const handleUserAddressAddClick = () => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      setShowAddAddressModel(true);
    }
  };

  const addAddressSuccess = (addedData: any) => {
    setShowAddAddressModel(false);
    dispatch(getMyAddressQueryAPI());
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
        component.types.includes("locality")
      )?.long_name;

      const state = addressComponents?.find((component: any) =>
        component.types.includes("administrative_area_level_1")
      )?.long_name;

      const country = addressComponents?.find((component: any) =>
        component.types.includes("country")
      )?.long_name;

      const postalCode = addressComponents?.find((component: any) =>
        component.types.includes("postal_code")
      )?.long_name;

      const address1 = addressComponents
        ?.filter((component: any) =>
          component.types.some((type: string) =>
            ["street_number", "route", "sublocality", "neighborhood"].includes(
              type
            )
          )
        )
        .map((component: any) => component.long_name)
        .join(", ");

      // Address2 includes sublocality, state, and country
      const sublocality = addressComponents?.find((component: any) =>
        component.types.includes("sublocality")
      )?.long_name;

      const address2 = [sublocality, state, country]
        .filter((part) => part)
        .join(", ");

      if (latitude && longitude) {
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

  return (
    <>
      {show && (
        <Modal
          fullscreen="md-down"
          dialogClassName="custom_addressmodal"
          show={show}
          onHide={props?.handleClose}
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

              {(selectedCurrentAddress?.fullAddress ||
                selectedCurrentAddress?.address) && (
                <p className="p-4">
                  Current Address :-{" "}
                  {selectedCurrentAddress?.fullAddress ||
                    selectedCurrentAddress?.address}
                </p>
              )}

              <AutocompleteField
                onPlaceSelected={(place: any) => handlePlaceSelected(place)}
                autoFocus={true}
                name="address"
                id="address"
                defaultValue={""}
                placeholder="Enter a Place"
                onChange={(e: any) => {}}
              />
              <CityPopupStyled></CityPopupStyled>
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
export default TopAddressSelectionModel;
