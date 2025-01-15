import React from "react";
import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PackagesStyled } from "./Packages.styled";
import {
  getAllSubscriptions,
  getMyPackageDetailsAPI,
} from "./../../../../redux/slices/dashboard/dashboardService";
import { Space, Table, Tag } from "antd";
import "antd/dist/antd.css";
import add_new_member from "../../../../assets/add_new_member.png";
import {
  getUserWithDependentsAPI,
  getMyAddressQueryAPI,
} from "../../../../redux/slices/Profile/ProfileService";
import { updatePayloadFromMyPackage } from "../../../../redux/slices/bookingScreen/bookingScreenSlice";
import AddNewMember from "../../../../components/AddNewMember/AddNewMember";
import CustomModal from "../../../../components/CustomModel";
import BestPackages from "../../../LabTest/BestPackages/BestPackages";
import { updateShowLoginModel } from "../../../../redux/slices/auth/authSlice";
import { getHealthPackagesAPI } from "../../../../redux/slices/labtest/labtestService";
import { getAllScansCityAPI } from "../../../../redux/slices/ctmri/ctmriService";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "../../../Radiology/Cards/Cards";
import allscan from "../../../../assets/images/ctmri/allscan.png";
import { RadiologyStyled } from "../../../Radiology/RadiologyStyled.styled";
import { LabTestStyled } from "../../../LabTest/LabText.styled";

let imageMale =
  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338140063.png";
let imageFemale =
  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338333932.png";

const Packages = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showSuccessUserPopupText, setShowSuccessUserPopupText] = useState("");
  const [showSuccessUserPopup, setShowSuccessUserPopup] = useState(false);

  const [showAddMemberModel, setShowAddMemberModel] = useState(false);
  const [selectedUser, setSelectedUser] = useState({} as any);
  const { userDependents, userAddress } = useSelector(
    (ReduxState: any) => ReduxState.profile
  );
  const { myAllPackages } = useSelector(
    (ReduxState: any) => ReduxState.dashboard
  );
  console.log("myAllPackages", myAllPackages);
  console.log("userDependents", userDependents);
  useEffect(() => {
    dispatch(getUserWithDependentsAPI());
    dispatch(getMyPackageDetailsAPI());
  }, []);
  useEffect(() => {
    setSelectedUser(userDependents[0]);
  }, [userDependents]);
  const handleAddNewMember = () => {
    setShowAddMemberModel(true);
    setSelectedUser({});
  };
  const getProfileImage = (user: any) => {
    return user?.image
      ? user?.image
      : user?.gender === "male"
      ? imageMale
      : imageFemale;
  };
  const handleSelectUser = (user: any) => {
    setSelectedUser(user);
  };
  const addUserSuccess = () => {
    setShowAddMemberModel(false);
    dispatch(getUserWithDependentsAPI());
    setShowSuccessUserPopup(true);
    const addSucTet = `Successfully Added the new Member.`;
    setShowSuccessUserPopupText(addSucTet);
  };
  const addPackage = (item: any) => {
    let listData = [];
    let selectedPackageData = {
      ...item,
      labtestType: "labpackage",
    };
    listData.push(selectedPackageData);
    const packageData = { tests: listData };

    dispatch(
      updatePayloadFromMyPackage({
        patientsDetails: { ...selectedUser },
        doctorDetails: { ...packageData },
      })
    );
    history.push(`/labPackageDetils/${item?.service_code}`);
  };

  const { userCity, user } = useSelector((ReduxState: any) => ReduxState.auth);
  const { healthPackagesList } = useSelector(
    (ReduxState: any) => ReduxState.labtest
  );
  const { allCityList } = useSelector((ReduxState: any) => ReduxState.ctmri);
  console.log("allCityList : ", allCityList);
  const getLatestData = (city = "bengaluru") => {
    dispatch(getAllScansCityAPI({ city: city?.toLowerCase() }));
  };

  useEffect(() => {
    getLatestData(userCity?.name);
  }, [userCity?.name]);

  useEffect(() => {
    dispatch(getHealthPackagesAPI());
  }, []);

  const medicinBoxSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        opacity="0.5"
        d="M12.6 2.8H9.8V1.4C9.8 0.63 9.17 0 8.4 0H5.6C4.83 0 4.2 0.63 4.2 1.4V2.8H1.4C0.63 2.8 0 3.43 0 4.2V12.6C0 13.37 0.63 14 1.4 14H12.6C13.37 14 14 13.37 14 12.6V4.2C14 3.43 13.37 2.8 12.6 2.8ZM5.6 1.4H8.4V2.8H5.6V1.4ZM9.8 9.1H7.7V11.2H6.3V9.1H4.2V7.7H6.3V5.6H7.7V7.7H9.8V9.1Z"
        fill="black"
      />
    </svg>
  );

  const addToCart1 = (itemR: any) => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      history.push(`/labPackageDetils/${itemR?.service_code}`);
    }
  };

  const navigateTo = (id: string) => {
    history.push(`/radiology/scan-details/${id}`);
  };

  return (
    <div>
      <PackagesStyled>
        <br />
        <AddNewMember
          show={showAddMemberModel}
          onHide={() => {
            setShowAddMemberModel(false);
          }}
          addUserSuccess={addUserSuccess}
        />
        <CustomModal
          show={showSuccessUserPopup}
          titleText={showSuccessUserPopupText}
          deleteText="ok"
          cancelText=""
          onCancel={() => setShowSuccessUserPopup(false)}
          onDelete={() => setShowSuccessUserPopup(false)}
        />
        <div>
          <h4>My Packages</h4>
        </div>
        <div>
          <div className="depends-user-box-all">
            {userDependents?.map((user: any, idx: any) => {
              return (
                <div
                  key={idx}
                  className={user?.id == selectedUser?.id ? "active_user" : ""}
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
                    <div className="profile_imgname">{user?.relation}</div>
                  </div>
                </div>
              );
            })}
            <div className="depends-user-box">
              <div className="profile_imgwrap" onClick={handleAddNewMember}>
                <img
                  className="profile_img"
                  src={add_new_member}
                  alt={`Add new Member`}
                />
                <div className="profile_imgname">Add More</div>
              </div>
            </div>

            {/* */}
          </div>
        </div>
        <br />
        <div>
          <h4>Assigned Packages</h4>
          <div>
            <div className="list-cards-sec-all-dashboard">
              {/* <BestPackages
                fromP="dashboard"
                addToCart={addToCart}
                list={myAllPackages?.packages}
              /> */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                {myAllPackages?.packages?.map((item: any) => {
                  return (
                    <div className="cardstyle">
                      <h3 className="service text-left block z-1">
                        {item?.service_name}
                      </h3>
                      <div className="flex img-content-sec">
                        <div>
                          <p className="text-left block ">
                            {item?.description}
                          </p>
                          <span className="text-left block rate">
                            {item?.price?.discount_percentage > 0 && (
                              <>
                                <span className="line-through price">
                                  ₹ {item?.price?.actual_cost}
                                </span>{" "}
                                <br />
                              </>
                            )}

                            <span className="final-price">
                              ₹ {item?.price?.discounted_price}
                            </span>
                          </span>
                          {item?.tests?.length > 0 && (
                            <p className="text-left block ">
                              {`${item?.tests?.length} Tests Included`}
                            </p>
                          )}
                        </div>

                        <div className="justify-center w-50">
                          <div>
                            <img
                              src={item?.image}
                              alt="Image"
                              className="img-size"
                            />
                          </div>

                          {/* <div className="border-line"></div> */}
                        </div>
                      </div>
                      <div
                        className="btnWrapper"
                        onClick={() => {
                          addPackage(item);
                        }}
                      >
                        <button className="secoundary-button1">
                          View Details
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
              {myAllPackages?.packages?.length === 0 && (
                <div>
                  <LabTestStyled>
                    <div className="mt-3 flex best-packages-sec ">
                      <span className="text-xl font-bold mx-2 opacity-75">
                        Best Labtest Packages
                      </span>
                    </div>
                    <div className="list-best-packages-list">
                      <BestPackages
                        addToCart={addPackage}
                        list={healthPackagesList?.packages?.slice(0, 4)}
                      />
                    </div>
                  </LabTestStyled>
                  <RadiologyStyled>
                    <Container fluid className="scanCeContainer">
                      <Row>
                        <Col className="scanCeBtnCol">
                          <p className="scanCeText">Scan Centre's Near Me </p>
                          <button className="scanSgtBtn">Popular</button>
                          <button className="scanSgtBtn">Rating</button>
                          <button className="scanSgtBtn">Nearest</button>
                          <button className="scanSgtBtn">24*7</button>
                        </Col>
                      </Row>
                      <Row className="scanCeRow ">
                        {allCityList?.tests?.slice(0, 4)?.map((item: any) => (
                          <Col key={item.service_name}>
                            <Cards
                              title={item.service_name}
                              cardTxtOne={item.city}
                              vendors={item.vendores}
                              cardTxtTwo={item.type}
                              cardBdImgUrl={allscan}
                              navigateTo={() => {
                                navigateTo(item?.service_code);
                              }}
                              from="scanCenter"
                              isRating={true}
                              cardTxtOneImgIsPresent={true}
                              cardTxtOneImgClassName={"scanCenterTxtOneBefImg"}
                              cardTxtOneImg="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736498912733.png"
                              cardTxtOneTxtClassName={
                                "scanCenterCardTxtOneSpan"
                              }
                              cardTxtTwoImgIsPresent={true}
                              cardTxtTwoImgClassName={"scanCenterTxtTwoBefImg"}
                              cardTxtTwoImg={medicinBoxSvg}
                              cardTxtTwoTxtClassName={
                                "scanCenterCardTxtTwoSpan"
                              }
                              cardBtnBtmTxt={"View Scans"}
                              cardBtnBtmClassName={"scanCenterCardButton"}
                            />
                          </Col>
                        ))}
                      </Row>
                      <Row className="viewAllSec d-flex justify-content-end pt-4">
                        <span>View All</span>
                      </Row>
                    </Container>
                  </RadiologyStyled>
                </div>
              )}
            </div>
          </div>
        </div>
        <div></div>
      </PackagesStyled>
    </div>
  );
};

export default Packages;
