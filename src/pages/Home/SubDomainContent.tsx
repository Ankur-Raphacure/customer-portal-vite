import React, { useEffect, useMemo, useState } from "react";

import { Row, Col, Button, Form } from "react-bootstrap";
import "./styles.css";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EmpanelWithUs from "../../components/EmpanelWithUs/EmpanelWithUs";
import banner_img from "../../img/banner_img.png";
import { Space, Table, Tag } from "antd";
import {
  allPackagesList,
  categories,
  getAFixMdPackages,
  subCategories,
} from "./HomeObjClass";
import { CategoryDivcolors } from "./Home.styled";
import { FaArrowRight } from "react-icons/fa6";

import { HomeStyled } from "./Home.styled";
import { checkIfClientUserAvailable } from "../../redux/slices/dashboard/dashboardService";
// import {setallProductsData } from "../../redux/slices/productCart/productCartSlice";
const SubDomainContent = (props: any) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);

  var wid = window.innerWidth;
  var wid1 = wid - 50;
  console.log("wid", wid);
  const { subDomainName, subDomainDetails } = props;

  const redirectList = [
    { title: "Virtual Consultation", link: "/doctor" },
    { title: "OPD Consultation", link: "/doctor?tab=opd" },
    { title: "Diagnostic Tests", link: "/labtest" },
    { title: "Health Checkup", link: "/labtest" },
    { title: "Lab Tests", link: "/labtest" },
    { title: "Diagnostic Test", link: "/labtest" },
    { title: "MRI", link: "/radiology" },
    { title: "Pharmacy", link: "/pharmacy" },
    { title: "Fitness", link: "/Gymlist" },
    { title: "Eye", link: "/eyecare" },
    { title: "Dental", link: "/dentalcare" },
    { title: "Womens ", link: "/womenscare" },
    { title: "Mental", link: "/mentalwellness" },
    { title: "Ambulance", link: "/ambulance" },
    { title: "VIRTUAL", link: "/doctor" },
    { title: "YOGA", link: "/Fitness" },
    { title: "Weight", link: "/Fitness" },
    { title: "Nursing Service", link: "/domiciliaryCare" },
    { title: "Elder Community", link: "/domiciliaryCare" },
    { title: "Round Chair", link: "/domiciliaryCare" },
    { title: "Specialist Consultation", link: "/doctor" },
  ];
  const allLists = [...categories, ...subCategories];
  const getLinktoRedirect = (itemId1: any) => {
    let rLink = "";
    redirectList?.map((ittem: any) => {
      if (
        itemId1?.product_details
          ?.toLowerCase()
          ?.indexOf(ittem?.title?.toLowerCase()) !== -1
      ) {
        rLink = ittem?.link;
        return;
      } else if (
        itemId1?.type?.toLowerCase()?.indexOf(ittem?.title?.toLowerCase()) !==
        -1
      ) {
        rLink = ittem?.link;
        return;
      }
    });
    return rLink;
  };
  const handleBookNow = (itemId1: any) => {
    console.log("vbbbon");
    const rLink = getLinktoRedirect(itemId1);
    if (subDomainName === "ocwen") {
      history.push("/labPackageDetils/oc10090");
    } else if (rLink) {
      history.push(rLink);
    }
  };
  const navigateToPage = (itemd: any) => {
    console.log("urlurl", itemd);
    const newurl = itemd?.to || itemd?.navigatePath;
    history.push(newurl);
  };
  let columns1 = [
    {
      title: "No",
      dataIndex: "no",
      key: "name",
      width: 30,
    },
    {
      title: "Product Details",
      dataIndex: "product_details",
      key: "product_details",
      width: 200,
    },
    {
      title: "Coverage",
      dataIndex: "coverage",
      key: "coverage",
      width: 80,
    },
    {
      title: "Service Details",
      dataIndex: "service_details",
      key: "service_details",
      width: 200,
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      width: 100,
    },
  ] as any;
  const clumens2 = [
    {
      title: "Action",
      key: "limits",
      fixed: "right",
      width: 90,
      render: (itemId: any) => {
        const rrLink = getLinktoRedirect(itemId);
        console.log("getLinktoRedirect", rrLink);
        return (
          <>
            <div>
              <button
                disabled={rrLink === "" ? true : false}
                onClick={() => {
                  handleBookNow(itemId);
                }}
                className="book-now-sec-btn yo"
              >
                Book Now
              </button>
            </div>
          </>
        );
      },
    },
  ];
  var columns = [...columns1, ...clumens2];
  // if (subDomainName === "ocwen") {
  //   columns = [...columns1, ...clumens2];
  // } else {
  //   columns = columns1;
  // }
  console.log("user", user);

  function extractParams(urlString: string) {
    const url = new URL(urlString);
    const params = url.searchParams;
    const userId = params.get("userid")?.replace(/ /g, "+"); // Replace spaces back to +
    const mobileNo = params.get("mobileNo")?.replace(/ /g, "+"); // Replace spaces back to +
    return { userid: userId, mobileNo: mobileNo };
  }

  const pppList = subDomainDetails?.agreed_services?.services;

  // const [services, setServices] = useState([]);
  const [isIndigridUser, setIsIndigridUser] = useState(false);

  const services = useMemo(() => {
    const pppList = subDomainDetails?.agreed_services?.services;
    if (isIndigridUser) return categories;
    if (subDomainDetails?.subdomain_key === "getafixmd")
      return getAFixMdPackages;
    if (!pppList?.length) {
      return user?.email === "indigrid@gmail.com" ||
        user?.phone === "9820799682"
        ? categories
        : allLists;
    }
    return pppList;
  }, [isIndigridUser, subDomainDetails, user, allLists]);

  // const services = useMemo(() => {
  //   const packageDetails =
  //     subDomainDetails?.agreed_services?.package_details || [];

  //   console.log("packageDetails : ", packageDetails);

  //   const matchedArray = allPackagesList.filter((packageItem) =>
  //     packageDetails.some(
  //       (detail: any) =>
  //         detail.service_details
  //           ?.toLowerCase()
  //           ?.includes(packageItem.name?.toLowerCase()) ||
  //         detail.type?.toLowerCase()?.includes(packageItem.name?.toLowerCase())
  //     )
  //   );

  //   return matchedArray;
  // }, [subDomainDetails]);

  useEffect(() => {
    const checkIndigridUser = async () => {
      if (
        subDomainDetails?.subdomain_key !== "indigrid" &&
        subDomainDetails?.subdomain_key !== "wyh"
      ) {
        console.log("not indigrid or wyh");
        return;
      }
      if (!user?.wyhMobileNo && !user?.phone) {
        console.log("phone not found");
        return;
      } else {
        console.log("wyhMobileNo : ", user?.wyhMobileNo || user?.phone);
      }
      try {
        const payload = {
          phone: user?.wyhMobileNo || user?.phone,
          clientId: "4de0b98c-cefa-4f8c-992a-2a3ffd4bdd50",
        };
        const res = (await dispatch(
          checkIfClientUserAvailable(payload)
        )) as any;
        console.log("res : ", res);

        const isUserFound = res?.payload?.data?.isUserFound;
        if (!res?.error) {
          setIsIndigridUser(isUserFound || false);
        }
      } catch (error) {
        console.error("Error checking Indigrid user:", error);
      }
    };
    checkIndigridUser();
  }, [user, dispatch, subDomainDetails]); // Add proper dependencies

  useEffect(() => {
    console.log("subDomainDetails : ", subDomainDetails);
  }, [subDomainDetails]);

  useEffect(() => {
    console.log("services : ", services);
  }, [services]);

  return (
    <>
      <HomeStyled>
        <div className="rapha-main-home-page">
          <div className="subdomain-text-rapha">
            <div>
              <h4>Package Details</h4>
            </div>
            <br />
            <div
              className="table-home-page-sub-domain"
              style={{ maxWidth: `${wid1}px` }}
            >
              <div className="all-services-sec-code-all">
                {services?.map((item: any, index: any) => {
                  const rrLink = getLinktoRedirect(item);
                  const getServiceD = allLists.find(
                    (itm: any) =>
                      itm?.navigatePath?.toLowerCase() ===
                        item?.to?.toLowerCase() ||
                      itm?.navigatePath?.toLowerCase() ===
                        item?.navigatePath?.toLowerCase()
                  ) as any;
                  console.log("item", item);
                  console.log("getServiceD", getServiceD);
                  console.log("allLists", allLists);
                  return (
                    <>
                      {getServiceD?.imageUrl && (
                        <CategoryDivcolors
                          index={index}
                          key={index}
                          className="home-page-card"
                        >
                          <div
                            className="cursor-pointer"
                            onClick={() => {
                              navigateToPage(item);
                            }}
                          >
                            <div className="category mt-4 ggg">
                              {" "}
                              {item?.name || getServiceD?.title}{" "}
                            </div>
                            <div className="home-card-image">
                              <div className="home-card-image-img">
                                {typeof getServiceD?.imageUrl === "string" ? (
                                  <img src={getServiceD?.imageUrl} alt="" />
                                ) : (
                                  <>{getServiceD?.imageUrl}</>
                                )}

                                <div className="mb-3 category-book-app-doctor-btn">
                                  <button className="category-book-app-doctor">
                                    <FaArrowRight />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CategoryDivcolors>
                      )}
                    </>
                  );
                })}
              </div>
              {/* <Table
                columns={columns}
                pagination={false}
                // scroll={{ x: 300, y: 5000 }}
                scroll={{ x: 1200, y: 500 }}
                className="table-home-page-sub-domain-table"
                dataSource={subDomainDetails?.agreed_services?.package_details}
              /> */}
            </div>
          </div>
        </div>
      </HomeStyled>
    </>
  );
};

export default SubDomainContent;
