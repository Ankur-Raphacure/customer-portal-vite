import { useEffect, useState } from "react";
import styled from "styled-components";
import { Modal } from "react-bootstrap";
import { SelectAddressStyled } from "../Doctor/SelectAddress/SelectAddress.styled";
import { IoIosArrowForward } from "react-icons/io";
import { BsPencil } from "react-icons/bs";
import { getMyAddressQueryAPI } from "../../redux/slices/Profile/ProfileService";
import AddNewAddress from "../AddNewAddress/AddNewAddress";
import { updateUserCity } from "../../redux/slices/auth/authSlice";
import { updateCityNameAPI } from "../../redux/slices/auth/authService";
import { useDispatch, useSelector } from "react-redux";
import { CityPopupStyled } from "./HeaderAddress.styled";
import { updateSelectedUserAddress } from "../../redux/slices/Profile/ProfileSlice";
import { updateCheckoutSelectedAddress } from "../../redux/slices/checkout/checkoutSlice";
const BreadcrumbRow = styled.div`
  display: flex;
  align-items: center;
  background-color: #f6f9fd;
  cursor: pointer;
  padding: 0px 50px;
  @media (max-width: 768px) {
    padding: 0px 20px;
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
    margin-top: 0rem;
  }
`;

const HeaderAddress = (props: any) => {
  const { address } = props;
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showAddAddressModel, setShowAddAddressModel] = useState(false);
  const [selectedAdd, setSelectedAddr] = useState({} as any);
  const [selectedAddress1, setSelectedAddress1] = useState({} as any);
  const { configInfo } = useSelector((ReduxState: any) => ReduxState.config);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const filteredCities = configInfo?.cities?.filter((city: any) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOnchange = async (evt: any, address: any) => {
    console.log("address : ", address);
    dispatch(updateSelectedUserAddress(address || {}));
    if (address?.id) {
      dispatch(updateCheckoutSelectedAddress(address));
    }
    handleSelectCity(address);
    props.selectSavedAddress({ ...address }, props.index);
    handleClose();
  };
  const handleSelectCity = (item: any) => {
    console.log("item address", item?.city);
    console.log("item address", item);
    if (item?.city || item?.id) {
      const newObj = {
        name: item?.city,
        id: item?.city?.toLowerCase(),
      } as any;
      dispatch(updateUserCity(newObj));
      dispatch(
        updateCityNameAPI({ city: item?.city || item?.city?.toLowerCase() })
      );
    }
  };

  const handleUserAddressAddClick = () => {
    setSelectedAddr({});
    setShowAddAddressModel(true);
  };

  const addAddressSuccess = (addedData: any) => {
    setShowAddAddressModel(false);
    dispatch(getMyAddressQueryAPI());
    setSelectedAddr(addedData?.address);
  };

  return (
    <>
      <BreadcrumbRow>
        <ItemText className="selectaddress-btn" onClick={handleShow}>
          Select Service Location
          <IoIosArrowForward />
        </ItemText>
        <ItemSubText onClick={handleShow}>
          {`${address?.city || address?.name || ""}${address?.zip ? "-" : ""} ${
            address?.zip || ""
          } `}
          <BsPencil className="ms-2" />
        </ItemSubText>
      </BreadcrumbRow>

      {show && (
        <Modal
          fullscreen="md-down"
          dialogClassName="custom_addressmodal"
          show={show}
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
              {(!props.addressList || props.addressList.length === 0) && (
                <div className="error">
                  Sorry, No Saved Addresses available!!
                </div>
              )}
              <CityPopupStyled>
                <div className="popular-city-naes-list">
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
                  <div className="py-1 px-3 mt-4">
                    <h6>Popular Cities</h6>
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
                </div>
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
