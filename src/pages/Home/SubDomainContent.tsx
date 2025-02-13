import React, { useEffect, useMemo, useState } from "react";

import { Row, Col, Button, Form, Modal } from "react-bootstrap";
import "./styles.css";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EmpanelWithUs from "../../components/EmpanelWithUs/EmpanelWithUs";
import banner_img from "../../img/banner_img.png";
import { Space, Table, Tag } from "antd";
import MobileTopBanner from "../../components/Header/MobileTopBanner";

import {
  allPackagesList,
  categories,
  getAFixMdPackages,
  indigridDiscountedPackages,
  indigridPackages,
  indigridPackagesMobile,
  mobileCategories,
  subCategories,
  wyhPackages,
} from "./HomeObjClass";
import { CategoryDivcolors } from "./Home.styled";
import { FaArrowRight } from "react-icons/fa6";

import { HomeStyled } from "./Home.styled";
import { checkIfClientUserAvailable } from "../../redux/slices/dashboard/dashboardService";
import { checkIsMobile } from "../../Scenes/common";
// import {setallProductsData } from "../../redux/slices/productCart/productCartSlice";
const SubDomainContent = (props: any) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);
  const [showAddonModal, setShowAddonModal] = useState(false);

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
    const newurl = itemd?.to || itemd?.navigatePath || itemd;
    history.push(newurl);
  };

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
    console.log("pppList", pppList);

    if (subDomainDetails?.subdomain_key === "getafixmd")
      return getAFixMdPackages;
    if (subDomainDetails?.subdomain_key === "indigrid") return indigridPackages;
    if (!pppList?.length) {
      return user?.email === "indigrid@gmail.com" ||
        user?.phone === "9820799682"
        ? categories
        : allLists;
    }

    // Add instant connect fields for specific services
    return pppList.map((service: any) => {
      if (service.to === "/doctor") {
        return {
          ...service,
          instantConnect: true,
          instantTime: "90 Sec",
        };
      }
      if (service.to === "/labtest") {
        return {
          ...service,
          instantConnect: true,
          instantTime: "60 Min",
        };
      }
      if (service.to === "/pharmacy") {
        return {
          ...service,
          instantConnect: true,
          instantTime: "90 Min",
        };
      }
      return service;
    });
  }, [subDomainDetails, user, allLists]);

  useEffect(() => {
    console.log("subDomainDetails : ", subDomainDetails);
  }, [subDomainDetails]);

  useEffect(() => {
    console.log("services : ", services);
  }, [services]);
  console.log("services", services);
  const ServicesTabs = ({ services, discountedServices = false }: any) => {
    return (
      <div className="subdomain-text-rapha">
        {/* <div>
          <h4>{discountedServices ? "" : "Services Covered"}</h4>
        </div> */}
        <br />
        {checkIsMobile() ? (
          <div className="mobile-our-services-all">
            {(subDomainDetails?.subdomain_key === "wyh"
              ? wyhPackages
              : subDomainDetails?.subdomain_key === "indigrid"
              ? indigridPackagesMobile
              : mobileCategories
            ).map((category: any, index: any) => {
              if (Array.isArray(category)) {
                return (
                  <div className="sub-mobile-our-services-all" key={index}>
                    {category?.map((catg: any, i: any) => (
                      <div className="mobile-sub-home-page-card" key={i}>
                        <div
                          className="mobile-cursor-pointer"
                          onClick={() => {
                            navigateToPage(catg.navigatePath);
                          }}
                        >
                          <div>
                            <div className="sub-mobile-category">
                              {catg.title}
                            </div>
                            <p className="mobile-category-p">
                              {catg.description}
                            </p>
                          </div>
                          <div className="mobile-sub-home-card-image">
                            <div className="mobile-home-card-image-sub-img">
                              <img
                                src={catg.imageUrl}
                                className=""
                                alt={catg.title}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }

              return (
                <div key={index}>
                  <div className="mobile-home-page-card">
                    <div
                      className="cursor-pointer"
                      onClick={() => {
                        navigateToPage(category.navigatePath);
                      }}
                    >
                      <div className="mobile-category">{category.title}</div>
                      <div className="mobile-category-p">
                        {category.description}
                      </div>
                      <div className="home-card-image">
                        <div className="mobile-home-card-image-img">
                          {category?.instantConnect && (
                            <div className="offer-banner">
                              <span>
                                <img
                                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1738761212902.png"
                                  alt="Offer"
                                />
                              </span>
                              <span className="offer-banner-text">
                                {category?.instantTime || ""}
                              </span>
                            </div>
                          )}
                          <img
                            src={category.imageUrl}
                            className="mt-2 cat-img"
                            alt={category.title}
                          />
                          <div className="mb-3 category-book-app-doctor-btn">
                            <button className="category-book-app-doctor">
                              <FaArrowRight />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div
            className="table-home-page-sub-domain"
            style={{ maxWidth: `${wid1}px` }}
          >
            <div className="all-services-sec-code-all">
              {services?.map((item: any, index: any) => {
                const rrLink = getLinktoRedirect(item);
                console.log("item", item);
                const newurl33 = item?.to || item?.navigatePath;

                const imgLisnl = allLists?.find(
                  (itttm: any) => itttm?.navigatePath == newurl33
                ) as any;
                console.log("imgLisnl", imgLisnl);
                const newimgURL = imgLisnl?.imageUrl || item?.imageUrl;
                return (
                  <>
                    {newimgURL && (
                      <>
                        {checkIsMobile() ? (
                          <HomeStyled
                            key={index}
                            className="home-page-card mobileCards"
                          >
                            <div className="mobile-home-page-card">
                              <div
                                className="cursor-pointer"
                                onClick={() => {
                                  if (item?.title === "Addon Services") {
                                    setShowAddonModal(true);
                                  } else {
                                    navigateToPage(item);
                                  }
                                }}
                              >
                                <div className="mobile-category">
                                  {item?.name || item?.title || imgLisnl?.title}{" "}
                                </div>
                                <div className="mobile-category-p">
                                  {item?.description}
                                </div>
                                <div className="home-card-image">
                                  <div className="mobile-home-card-image-img">
                                    {item?.instantConnect && (
                                      <div className="offer-banner">
                                        <span>
                                          <img
                                            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1738761212902.png"
                                            alt="Offer"
                                          />
                                        </span>
                                        <span className="offer-banner-text">
                                          {item?.instantTime || ""}
                                        </span>
                                      </div>
                                    )}
                                    {typeof newimgURL === "string" ? (
                                      <img src={newimgURL} alt="" />
                                    ) : (
                                      <>{newimgURL}</>
                                    )}
                                    <div className="mb-3 category-book-app-doctor-btn">
                                      <button className="category-book-app-doctor">
                                        <FaArrowRight />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </HomeStyled>
                        ) : (
                          <CategoryDivcolors
                            index={index}
                            key={index}
                            className="home-page-card"
                          >
                            <div
                              className="cursor-pointer"
                              onClick={() => {
                                if (item?.title === "Addon Services") {
                                  setShowAddonModal(true);
                                } else {
                                  navigateToPage(item);
                                }
                              }}
                            >
                              <div className="category mt-4 ggg">
                                {" "}
                                {item?.name ||
                                  item?.title ||
                                  imgLisnl?.title}{" "}
                              </div>
                              <div className="home-card-image">
                                <div className="home-card-image-img">
                                  {typeof newimgURL === "string" ? (
                                    <img src={newimgURL} alt="" />
                                  ) : (
                                    <>{newimgURL}</>
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
                    )}
                  </>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  };
  return (
    <>
      <HomeStyled>
        {/* <MobileTopBanner /> */}
        <div className="rapha-main-home-page">
          <ServicesTabs services={services} />
        </div>

        <Modal
          fullscreen="md-down"
          dialogClassName="custom_addressmodal"
          show={showAddonModal}
          onHide={() => {
            setShowAddonModal(false);
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title className="poppins-medium">Addon Services</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <HomeStyled>
              {subDomainDetails?.subdomain_key === "indigrid" && (
                <div className="subdomain-text-rapha discountedServices">
                  <ServicesTabs
                    services={indigridDiscountedPackages}
                    discountedServices={true}
                  />
                </div>
              )}
            </HomeStyled>
          </Modal.Body>
        </Modal>
      </HomeStyled>
    </>
  );
};

export default SubDomainContent;
