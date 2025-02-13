import React, { useEffect, useState } from "react";

// import "./styles.css";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MyProfileStyled } from "./MyProfile.styled";
// import Profile_pp from "../../img/Profile_pp.png";
import AddNewMember from "../../../../components/AddNewMember/AddNewMember";
import AddNewAddress from "../../../../components/AddNewAddress/AddNewAddress";

import UserProfile from "./UserProfile";
import {
  getUserWithDependentsAPI,
  getMyAddressQueryAPI,
  defaultAddressAPI,
  deleteAddressAPI,
} from "../../../../redux/slices/Profile/ProfileService";
import CustomModal from "../../../../components/CustomModel";
import EmpanelWithUs from "../../../../components/EmpanelWithUs/EmpanelWithUs";
import Loader from "../../../../components/Loader/Loader";
import ProfileCard from "./ProfileCard";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import ConfirmModal from "../../../../components/ConfirmModal/ConfirmModal";
// import { triggerMixpanelEvent } from "../../Scenes/common";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const MyProfile = () => {
  const [showAddMemberModel, setShowAddMemberModel] = useState(false);
  const [showAddAddressModel, setShowAddAddressModel] = useState(false);

  const [selectedMember, setSelectedMember] = useState({});
  const [selectedAddress, setSelectedAddress] = useState({});

  const [showSuccessUserPopup, setShowSuccessUserPopup] = useState(false);
  const [showSuccessUserPopupText, setShowSuccessUserPopupText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAddId, setSelectedAddId] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const [currentStep, setCurrentStep] = useState("profile");
  const { user } = useSelector((ReduxState) => ReduxState.auth);
  console.log("user : ", user);
  const { cartItems } = useSelector((ReduxState) => ReduxState.checkout);
  const { userDependents, userAddress } = useSelector(
    (ReduxState) => ReduxState.profile,
  );
  const { myBookings } = useSelector((ReduxState) => ReduxState.dashboard);
  const query1 = useQuery();
  const updateProfilev = query1.get("updateProfile");
  const [isNewUser, setIsNewUser] = useState(false);
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [selectedDeleteAddress, setSelectedDeleteAddress] = useState(null);

  useEffect(() => {
    const urlObj = new URL(window.location.href);
    const newUser = urlObj.searchParams.get("newUser");
    setIsNewUser(newUser === "true");
  }, []);

  useEffect(() => {
    const fName = userDependents[0]?.first_name;
    if (updateProfilev == "1" && userDependents?.length > 0 && !fName) {
      handleEditUser(userDependents[0]);
    }
  }, [userDependents]);
  console.log("user", user);
  const onClickInfo = (val) => {
    setCurrentStep(val);
  };
  const gotoPage = (url) => {
    history.push(url);
  };
  const handleAddNewMember = () => {
    setShowAddMemberModel(true);
    setSelectedMember({});
  };
  const handleEditUser = (userInfo) => {
    setSelectedMember(userInfo);
    setShowAddMemberModel(true);
  };
  const handleEditAddress = (userInfo) => {
    console.log(userInfo, "userInfo12");

    setSelectedAddress(userInfo);
    setShowAddAddressModel(true);
  };
  const addUserSuccess = () => {
    setShowAddMemberModel(false);
    dispatch(getUserWithDependentsAPI());
    setShowSuccessUserPopup(true);
    const addSucTet = selectedMember?.id
      ? `Successfully Updated the Member.`
      : `Successfully Added the new Member.`;
    setShowSuccessUserPopupText(addSucTet);
  };
  const addAddressSuccess = () => {
    setShowAddAddressModel(false);
    dispatch(getMyAddressQueryAPI());
    setShowSuccessUserPopup(true);
    const addSucTet = selectedAddress?.id
      ? `Successfully Updated the Address.`
      : `Successfully Added the new Address.`;

    setShowSuccessUserPopupText(addSucTet);
  };
  const handleAddNewAddress = () => {
    setShowAddAddressModel(true);
    setSelectedAddress({});
  };
  // const dlist = [
  //   ...userDependents?.me?.dependents,
  //   ...userDependents?.me?.dependents,
  // ];

  useEffect(() => {
    if (isNewUser === true && userDependents?.length > 0) {
      handleEditUser(userDependents[0]);
    }
  }, [isNewUser, userDependents]);

  const handleSelectDefaultAdd = async (addId) => {
    setIsLoading(true);
    try {
      const resp = addId?.id
        ? await dispatch(defaultAddressAPI({ id: addId?.id }))
        : null;

      if (resp?.payload?.success) {
        setSelectedAddId(addId?.id);
      }
      setIsLoading(false);
      dispatch(getMyAddressQueryAPI());
    } catch (error) {
      console.error("Error during handleSelectDefaultAdd:", error);
    }
  };

  useEffect(() => {
    handleSelectDefaultAdd();
  }, [selectedAddId]);

  const handleDeleteAddress = async (addId) => {
    setIsLoading(true);
    const resp = await dispatch(deleteAddressAPI({ id: addId?.id }));
    if (resp?.payload?.success) {
      setShowSuccessUserPopup(true);
      setShowSuccessUserPopupText("Successfully Deleted The Address");
    }
    setIsLoading(false);
    dispatch(getMyAddressQueryAPI());
  };

  return (
    <>
      <div className="myProfile-wrapper">
        {isLoading && <Loader />}
        <MyProfileStyled>
          <AddNewMember
            show={showAddMemberModel}
            onHide={() => {
              setShowAddMemberModel(false);
            }}
            addUserSuccess={addUserSuccess}
            selectedMember={selectedMember}
          />
          <AddNewAddress
            show={showAddAddressModel}
            onHide={() => {
              setShowAddAddressModel(false);
            }}
            addUserSuccess={addAddressSuccess}
            selectedAddress={selectedAddress}
          />

          <ConfirmModal
            show={showDeleteConfirmModal}
            title={"Delete Address"}
            description={"Are you sure you want to delete this address?"}
            onClose={() => setShowDeleteConfirmModal(false)}
            onConfirm={() => handleDeleteAddress(selectedDeleteAddress)}
          />

          <CustomModal
            show={showSuccessUserPopup}
            titleText={showSuccessUserPopupText}
            deleteText="ok"
            cancelText=""
            onCancel={() => setShowSuccessUserPopup(false)}
            onDelete={() => setShowSuccessUserPopup(false)}
          />
          <div className="full-profile-sec-all">
            <div className="orders-header">
              <h3>Your Dependents</h3>
              <button className="addMemberBtn" onClick={handleAddNewMember}>
                Add New Member
              </button>
              {/* <div className="search-container">
                <input
                  type="text"
                  placeholder="Search for all Dependents"
                  className="search-input"
                />
                <FaSearch className="search-icon" />
              </div> */}
            </div>
            <div className="all-depends-content">
              <div className="depends-users-all">
                {userDependents?.map((user) => {
                  return (
                    <ProfileCard user={user} handleEditUser={handleEditUser} />
                  );
                })}
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="full-profile-sec-all">
            <div className="orders-header">
              <h3>Your Address</h3>
              <button className="addMemberBtn" onClick={handleAddNewAddress}>
                Add New Address
              </button>
            </div>
            <div className="all-depends-content">
              <div className="depends-users-all">
                {userAddress?.map((item) => {
                  return (
                    <div className="depends-user-box">
                      <div className="user-box-left">
                        <div className="box-left-info">
                          <p> {item?.name}</p>

                          <div className="d-flex" key={item.id}>
                            <div className="default-add-radio-btn me-3">
                              <input
                                type="radio"
                                checked={
                                  selectedAddId
                                    ? selectedAddId === item.id
                                    : item?.isDefault
                                }
                                onChange={() => handleSelectDefaultAdd(item)}
                              />
                            </div>
                            <div className="user-box-right me-3">
                              <span onClick={() => handleEditAddress(item)}>
                                <div className="d-flex flex-row align-items-center gap-1">
                                  <MdEdit />
                                  Edit
                                </div>
                              </span>
                            </div>
                            {item?.isDefault ||
                              (selectedAddId !== item.id && (
                                <div className="user-box-right">
                                  <span
                                    onClick={() => {
                                      setShowDeleteConfirmModal(true);
                                      setSelectedDeleteAddress(item);
                                    }}
                                  >
                                    <div className="d-flex flex-row align-items-center gap-1">
                                      <MdDeleteOutline />
                                      Delete
                                    </div>
                                  </span>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>

                      <div>
                        <p>
                          <span className="title">Address</span>
                          <span>: {item?.address}</span>
                        </p>
                        <p>
                          <span className="title">City</span>
                          <span>: {item?.city}</span>
                        </p>
                        <p>
                          <span className="title">State</span>
                          <span>: {item?.state}</span>
                        </p>
                        <p>
                          <span className="title">Zipcode</span>
                          <span>: {item?.zip}</span>
                        </p>
                        <p>
                          <span className="title">Landmark</span>
                          <span>: {item?.landmark}</span>
                        </p>
                        <p>
                          <span className="title">House / Building No.</span>
                          <span>: {item?.detail}</span>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </MyProfileStyled>
        {/* <div className="myProfile-text">
          <div className="myProfile-container">
            <div className="profile-right-container">
              <div className="profile-content">
                <UserProfile />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default MyProfile;
