import React from "react";
import { useState, useEffect } from "react";
import { BlobServiceClient } from "@azure/storage-blob";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CartStyled } from "./Cart.styed";
import group_505 from "../../assets/lego-figure-with-purple-shirt-purple-shirt-with-tie-it 1.png";
import Select from "react-select";
import add_new_member from "../../assets/add_new_member.png";
import {
  getUserWithDependentsAPI,
  getMyAddressQueryAPI,
} from "../../redux/slices/Profile/ProfileService";
import AddNewMember from "../../components/AddNewMember/AddNewMember";
import CustomModal from "../../components/CustomModel";
import {
  updateCheckoutSelectedUser,
  updateCheckoutSelectedAddress,
} from "../../redux/slices/checkout/checkoutSlice";
import AddNewAddress from "../../components/AddNewAddress/AddNewAddress";
import SelectAddress from "../../components/Doctor/SelectAddress/SelectAddress";

import CartItemsSection from "../../components/CartItemsSection/CartItemsSection";
const Cart = () => {
  const [file, setFile] = useState(null);
  const [addressEnabled, setAddressEnabled] = useState(false);
  // const [addressEnabled, setAddressEnabled] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState({} as any);
  const [selectedAddress1, setSelectedAddress1] = useState({} as any);
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);
  const { cartItems } = useSelector((ReduxState: any) => ReduxState.checkout);
  const [showSuccessUserPopupText, setShowSuccessUserPopupText] = useState("");
  const [showSuccessUserPopup, setShowSuccessUserPopup] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showAddAddressModel, setShowAddAddressModel] = useState(false);
  const { selectedCurrentAddress } = useSelector(
    (ReduxState: any) => ReduxState.profile
  );
  const [showAddMemberModel, setShowAddMemberModel] = useState(false);
  const [selectedUser, setSelectedUser] = useState({} as any);
  const { userDependents, userAddress } = useSelector(
    (ReduxState: any) => ReduxState.profile
  );

  const paharmacyProducts = cartItems?.carts?.filter(
    (itemV: any) => itemV.medicines?.length > 0
  );
  useEffect(() => {
    if (cartItems?.carts?.length > 0 && paharmacyProducts?.length === 0) {
      history.push("/checkout");
    } else {
      dispatch(getUserWithDependentsAPI());
      dispatch(getMyAddressQueryAPI());
    }
  }, []);

  useEffect(() => {
    if (userDependents?.length > 0 && !selectedUser?.id) {
      setSelectedUser(userDependents[0]);
    }
    if (userAddress?.length > 0 && !selectedAddress?.id) {
      setSelectedAddress(userAddress[0]);
    }
  }, []);
  useEffect(() => {
    if (selectedUser?.id) {
      dispatch(updateCheckoutSelectedUser(selectedUser));
    }
  }, [selectedUser]);

  useEffect(() => {
    setSelectedAddress(selectedCurrentAddress);
  }, [selectedCurrentAddress]);

  useEffect(() => {
    if (selectedAddress?.id) {
      dispatch(updateCheckoutSelectedAddress(selectedAddress));
    }
  }, [selectedAddress]);

  const handleChange = (e: any) => {
    setFile(e.target.files[0]);
  };
  const navigateToPage = (url: string) => {
    history.push(url);
  };
  const navigateToCartPage = () => {
    setShowErrorMessage(true);
    if (selectedUser?.id && selectedAddress?.id) {
      history.push("/checkout");
    }
  };
  const navigateToHomePage = () => {
    setShowErrorMessage(true);
    history.push("/pharmacy");
  };
  const handleAddNewMember = () => {
    setShowAddMemberModel(true);
    setSelectedUser({});
  };
  const handleEditMember = () => {
    setShowAddMemberModel(true);
    // setSelectedUser(selectedUser);
  };
  const addAddressSuccess = (addedData: any) => {
    setShowAddAddressModel(false);
    dispatch(getMyAddressQueryAPI());
    console.log("addedData", addedData);
    setSelectedAddress(addedData?.address);
  };
  const getProfileImage = (user: any) => {
    return user?.image
      ? user?.image
      : user?.gender === "male"
      ? group_505
      : group_505;
  };
  const handleSelectUser = (user: any) => {
    setSelectedUser(user);
  };
  const addUserSuccess = async (uData: any) => {
    setShowAddMemberModel(false);
    console.log("uData", uData);
    if (uData?.user?.id) {
      setSelectedUser(uData?.user);
    }
    setShowSuccessUserPopup(true);
    const addSucTet = selectedUser?.id
      ? `Successfully Updated the Member Details`
      : `Successfully Added the new Member.`;
    setShowSuccessUserPopupText(addSucTet);
    const newList = (await dispatch(getUserWithDependentsAPI())) as any;
    const sUser = newList?.payload?.data?.me?.dependents?.find(
      (iimm: any) => iimm?.id === selectedUser?.id
    );
    if (sUser?.id) {
      setSelectedUser(sUser);
    }
  };
  const selectSavedAddress = (addss: any) => {
    setSelectedAddress(addss);
  };
  const handleUserAddressAddClick = () => {
    setSelectedAddress({});
    setShowAddAddressModel(true);
    // setSelectedItemForUpdate(index);
  };
  const addressList = [
    {
      label: "Saved Address",
      value: "Saved Address",
    },
    {
      label: "Saved Address Saved Address",
      value: "Saved Address Saved Address",
    },
  ];
  console.log("selectedUser", selectedUser);
  console.log("paharmacyProducts", paharmacyProducts);
  return (
    <CartStyled>
      <div>
        {paharmacyProducts?.length === 0 || !paharmacyProducts?.length ? (
          <div className="no-results-sec">
            <p>No Items found in your cart.</p>
            <button
              onClick={() => {
                history.push("/");
              }}
            >
              Go to home page
            </button>
          </div>
        ) : (
          <div className="cart-full-page">
            <AddNewMember
              show={showAddMemberModel}
              onHide={() => {
                setShowAddMemberModel(false);
              }}
              selectedMember={selectedUser}
              addUserSuccess={addUserSuccess}
            />
            <AddNewAddress
              show={showAddAddressModel}
              onHide={() => {
                setShowAddAddressModel(false);
              }}
              addUserSuccess={addAddressSuccess}
              selectedMember={selectedAddress1}
            />
            <CustomModal
              show={showSuccessUserPopup}
              titleText={showSuccessUserPopupText}
              deleteText="ok"
              cancelText=""
              onCancel={() => setShowSuccessUserPopup(false)}
              onDelete={() => setShowSuccessUserPopup(false)}
            />
            <div className="cart-top-back">
              <span
                onClick={() => {
                  history.goBack();
                }}
                className=" text-xl cursor-pointer top-category-sec font-bold mx-2 back-btn-sec opacity-75 "
              >
                <svg
                  width="21"
                  height="18"
                  viewBox="0 0 21 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.6875 7.7152H4.12125L8.88563 2.10999C9.10841 1.84745 9.21559 1.50898 9.18359 1.16903C9.15159 0.829086 8.98304 0.515513 8.715 0.297298C8.44697 0.0790819 8.10141 -0.0259025 7.75435 0.00544001C7.40729 0.0367826 7.08716 0.201885 6.86437 0.464426L0.301875 8.17802C0.257723 8.23937 0.218242 8.30383 0.18375 8.37086C0.18375 8.43514 0.18375 8.47371 0.0918752 8.53799C0.0323842 8.68539 0.00123522 8.8423 0 9.0008C0.00123522 9.1593 0.0323842 9.31621 0.0918752 9.46362C0.0918752 9.5279 0.0918748 9.56647 0.18375 9.63075C0.218242 9.69778 0.257723 9.76223 0.301875 9.82359L6.86437 17.5372C6.98778 17.6823 7.14231 17.799 7.31699 17.879C7.49166 17.959 7.68218 18.0003 7.875 18C8.18167 18.0006 8.47887 17.896 8.715 17.7043C8.8479 17.5964 8.95776 17.4638 9.03829 17.3143C9.11881 17.1647 9.16842 17.001 9.18427 16.8326C9.20012 16.6643 9.1819 16.4945 9.13065 16.333C9.0794 16.1715 8.99614 16.0215 8.88563 15.8916L4.12125 10.2864H19.6875C20.0356 10.2864 20.3694 10.151 20.6156 9.90986C20.8617 9.66876 21 9.34177 21 9.0008C21 8.65984 20.8617 8.33284 20.6156 8.09175C20.3694 7.85065 20.0356 7.7152 19.6875 7.7152Z"
                    fill="#444444"
                  />
                </svg>{" "}
                &nbsp;
                {` Back`}
              </span>
            </div>
            <div className="cart-page-content">
              <div className="cart-content-left">
                <div className="cart-right-header">
                  Patient Details & Select Time Slot
                </div>
                <div className="cart-right-customers12">
                  {/* {[1, 4, 55].map((item: any) => {
                    return (
                      <div className="customer-box">
                        <div className="customer-box-img">
                          {" "}
                          <img src={group_505} />{" "}
                        </div>
                        <div className="customer-box-name">For Sister</div>
                      </div>
                    );
                  })} */}
                  <div className="depends-user-box-all">
                    {userDependents?.map((user: any) => {
                      return (
                        <div
                          className={
                            user?.id == selectedUser?.id
                              ? "active_user user_sec_user"
                              : "user_sec_user"
                          }
                        >
                          <div
                            onClick={() => {
                              handleSelectUser(user);
                            }}
                            className="profile_imgwrap"
                          >
                            <img
                              className="profile_img"
                              src={getProfileImage(user)}
                              alt={user?.first_name}
                            />
                            <div className="profile_imgname">
                              {user?.relation}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="depends-user-box">
                      <div
                        className="profile_imgwrap"
                        onClick={handleAddNewMember}
                      >
                        <img
                          className="profile_img"
                          src={add_new_member}
                          alt={`Add new Member`}
                        />
                        <div className="profile_imgname">Add Member</div>
                      </div>
                    </div>

                    {/* */}
                  </div>
                </div>
                <div className="cart-right-address">
                  <div className="cart-address-top">
                    <div className="cart-address-left">
                      <p>
                        <span>Full Name</span>
                        <span>
                          :{" "}
                          {`${selectedUser?.first_name} ${selectedUser?.last_name}`}{" "}
                        </span>
                      </p>
                      <p>
                        <span>Gender </span>{" "}
                        <span>: {selectedUser?.gender}</span>
                      </p>
                      <p>
                        <span>Age</span> <span>: {selectedUser?.age}</span>
                      </p>
                      <p>
                        <span> Email ID</span>{" "}
                        <span>: {selectedUser?.email}</span>
                      </p>
                      <p>
                        <span>Phone Number</span>{" "}
                        <span>: +91 {selectedUser?.phone}</span>
                      </p>
                    </div>
                    <div className="cart-address-right">
                      <button onClick={handleEditMember}>Edit</button>
                    </div>
                  </div>
                  <p>
                    <span> Address </span>
                    <span>
                      : {selectedAddress?.address},
                      <br />
                      {selectedAddress?.city} {selectedAddress?.state}{" "}
                      {selectedAddress?.zip}
                    </span>
                  </p>
                </div>
                <div className="cart-right-saved-address">
                  {/* <Select
                    // value={{
                    //   label: signUpData?.studentGrade,
                    //   value: signUpData?.studentGrade,
                    // }}
                    placeholder="Select Class"
                    // onChange={handleChangeGrade}
                    options={addressList}
                    className="rapha-select"
                    classNamePrefix="rapha-select"
                  />
                  <button className="add-new-address-btn">
                    Add New Address
                  </button> */}
                  <SelectAddress
                    index={0}
                    addressList={userAddress}
                    address={selectedAddress}
                    selectSavedAddress={selectSavedAddress}
                  />
                  <button
                    onClick={() => {
                      handleUserAddressAddClick();
                    }}
                  >
                    Add New Address
                  </button>
                </div>
                {showErrorMessage && !selectedAddress?.id && (
                  <p className="error_message"> Please select Address</p>
                )}
                {/* <div className="cart-right-delivery-time">
                  Choose Delivery Time
                </div>
                <div className="cart-right-delivery-slots">
                  {[1, 4, 55].map((item: any) => {
                    return (
                      <div className="slots-box">
                        <div className="slots-box-radio">
                          <input type="radio" />
                        </div>
                        <div className="customer-box-name">
                          <p>Today</p>
                          <p>12 PM to 1 PM</p>
                          <p>Delivery Fee 30.00</p>
                        </div>
                      </div>
                    );
                  })}
                </div> */}
              </div>
              <div className="cart-content-right">
                <div className="cart-content-right-item">
                  <CartItemsSection />
                </div>
                <div className="cart-content-right-actions">
                  <button onClick={navigateToHomePage} className="cancel-btn">
                    Cancel
                  </button>
                  <button onClick={navigateToCartPage} className="save-btn">
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </CartStyled>
  );
};

export default Cart;
