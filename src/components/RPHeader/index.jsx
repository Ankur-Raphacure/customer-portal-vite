import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./styles.css";
import { getConfigInfoAPI } from "./../../redux/slices/config/configService";
import LoginModel from "./../../components/LoginModel/LoginModel";
import { updateShowLoginModel } from "../../redux/slices/auth/authSlice";
import { updateNitifySuccessMessage } from "../../redux/slices/checkout/checkoutSlice";
import cart_icon from "../../assets/icons8-cart-32.png";

import logo_design from "../../assets/r_logo.png";
import { getUniversalSearchData } from "../../redux/slices/generic/genericService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { checkIsMobile } from "../../Scenes/common";
import CityDialogList from "../../pages/CityDialog/CityDialogList";
import {
  getUserWithDependentsAPI,
  getMyAddressQueryAPI,
} from "../../redux/slices/Profile/ProfileService";
import "./styles.css";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import { updateUniversalSearchResults } from "../../redux/slices/generic/genericSlice";

const finalList = [
  { name: "Home", to: "/home" },
  { name: "Doctor Consultation", to: "/doctor" },
  { name: "Connect Us", to: "/connectus" },

  // { name: "About Us", to: "/aboutUs" },
  // { name: "Contact Us", to: "/radiology" },
];

const RPHeader = (props) => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const ref = useRef();

  const {
    error,
    loading,
    subDomainDetails,
    user,
    userCity,
    showLoginModel,
    rpSubDomainDetails,
  } = useSelector(({ auth }) => auth);
  const { cartItems, nitifySuccessMessage } = useSelector(
    (startR) => startR?.checkout,
  );
  const { configInfo } = useSelector(({ config }) => config);
  const { universalSearchResults } = useSelector(({ generic }) => generic);
  const [isOpen, setIsOpen] = useState(false);

  const [showSearchPopupModel, setShowSearchPopupModel] = useState(false);
  const [showLoginPopupModel, setShowLoginPopupModel] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [show, setShow] = useState(false);
  const [headerList, setHeaderList] = useState(
    rpSubDomainDetails?.id ? finalList?.slice(0, 1) : finalList?.slice(0, 20),
  );
  const [headerSelectList, setHeaderSelectList] = useState(
    finalList?.slice(20, 40),
  );
  const [selectedNavItem, setSelectedNavItem] = useState("");
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
  const [shows, setShows] = useState(false);

  const handleCloses = () => setShows(false);
  const handleShows = () => setShows(true);

  const type = "md";

  console.log("configInfo", configInfo);
  console.log("useruseruser", user);
  console.log("cartItems", cartItems);
  useEffect(() => {
    dispatch(getConfigInfoAPI());
    dispatch(getUserWithDependentsAPI());
    dispatch(getMyAddressQueryAPI());
  }, []);

  // useEffect(() => {
  //   const checkIfClickedOutside = (e) => {
  //     if (
  //       showSearchPopupModel &&
  //       ref.current &&
  //       !ref.current.contains(e.target)
  //     ) {
  //       setShowSearchPopupModel(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", checkIfClickedOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", checkIfClickedOutside);
  //   };
  // }, [showSearchPopupModel]);

  useEffect(() => {
    if (subDomainDetails?.id) {
      updateMenuLinks();
    }
  }, [subDomainDetails?.id]);

  console.log("showLoginModel", showLoginModel);

  useEffect(() => {
    if (nitifySuccessMessage) {
      dispatch(updateNitifySuccessMessage(null));
      showNitiMessage(nitifySuccessMessage);
    }
  }, [nitifySuccessMessage]);
  const updateMenuLinks = () => {
    const sLinkns = subDomainDetails?.agreed_services?.services;
    const mainLinks = checkIsMobile()
      ? sLinkns?.slice(1, 40)
      : sLinkns?.slice(1, 2);
    const subLinks = sLinkns?.slice(2, 20);
    if (mainLinks) {
      setHeaderList(mainLinks);
    }
    if (subLinks) {
      setHeaderSelectList(subLinks);
    }
  };
  const showNitiMessage = (msg) => {
    toast(msg, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });
  };
  const gotoCartPage = (url) => {
    setIsOpen(false);
    history.push(url);
  };
  const getShortName = () => {
    var shortname = "";
    try {
      var firstName = user?.data?.firstName
        ? user?.data?.firstName.charAt(0).toUpperCase()
        : "";
      var lastName = user?.data?.lastName
        ? user?.data?.lastName.charAt(0).toUpperCase()
        : "";
      shortname = firstName + lastName;
    } catch (error) {}
    return shortname;
  };
  const togglePopover = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    localStorage.clear();
    // history.push("/");
    window.location.href = "/";
  };
  const navigateToPage = (pageu) => {
    if (pageu) {
      navigateTo(pageu);
    }
  };
  const handleSearchBox = (e) => {
    console.log("handleSearchBox", e.target.value);
    dispatch(getUniversalSearchData({ searchText: e.target.value }));
  };
  const navigateToHome = (url) => {
    navigateTo("/");
  };

  const navigateToDashboard = (url) => {
    navigateTo("/dashboard");
    handleCloses();
  };
  const gotoCart = (url) => {
    navigateTo("/cart");
    handleCloses();
  };
  const handleSearchGoTo = (searR) => {
    console.log("searR", searR);
    setShowSearchPopupModel(false);
    dispatch(updateUniversalSearchResults([]));
    if (searR?.to_link == "/pharmacy") {
      navigateTo(`/item/generic/${searR?.linkable_id}`);
    } else if (searR?.linkable_type == "packages") {
      navigateTo(`/labPackageDetils/${searR?.linkable_id}`);
    } else if (searR?.linkable_type == "tests") {
      navigateTo(`/labTestDetils/${searR?.linkable_id}`);
    } else if (searR?.type == "hospital") {
      navigateTo(`/hospital/${searR?.linkable_id}`);
    } else {
      navigateTo(`/doctor`);
    }
  };
  const navigateTo = (url) => {
    history.push(url);
  };
  const getImageUrl = () => {
    return user?.image;
  };
  const handleLogin = () => {
    dispatch(updateShowLoginModel(true));
  };
  const handleClose = () => {
    setShowLoginPopupModel(false);
  };
  const fullName = `${user?.first_name} ${user?.last_name}`;
  const [uName, setUName] = useState(window.location.pathname.toLowerCase());

  useEffect(() => {
    setUName(location.pathname.toLowerCase());
  }, [location.pathname]);

  useEffect(() => {
    console.log("uName : ", uName);
  }, [uName]);

  const isSubPage =
    uName?.includes("/checkout") ||
    uName?.includes("/cart") ||
    uName?.includes("/dashboard")
      ? true
      : true;

  const handleSelectChange = (event) => {
    const selectedLink = event.target.value;
    if (selectedLink) {
      history.push(selectedLink);
    }
  };

  const handleHeaderClick = (link, name) => {
    setSelectedItem(null);
    navigateTo(link);
    setSelectedNavItem(name);
  };

  const handleMoreClick = (name, link) => {
    setSelectedItem(name);
    navigateTo(link);
    setSelectedNavItem(name);
  };

  const handleBook = (e) => {
    e.preventDefault();
    setShow((prevShow) => !prevShow);
  };

  const handleMenuItemClick = (itemTo, itemName) => {
    handleHeaderClick(itemTo, itemName);
    setIsNavbarCollapsed(true);
    handleCloses();
  };

  const handleMoreItemClick = (itemName, itemTo) => {
    handleMoreClick(itemName, itemTo);
    setIsNavbarCollapsed(true);
    handleCloses();
  };

  return (
    <>
      <div>
        <ToastContainer />
        <Navbar expand={type} className="bg-body-tertiary mb-0 nav_bar">
          <Container fluid>
            <Navbar.Brand href="#">
              <a className="navbar-brand left-image-sec-logo" href="#">
                <img
                  onClick={navigateToHome}
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76907-1733226880282.png"
                  className="brandImg"
                  alt="RaphaCure"
                  width="160"
                  height="60"
                />
                {subDomainDetails?.logo_url && (
                  <img
                    onClick={navigateToHome}
                    src={subDomainDetails?.logo_url}
                    alt={subDomainDetails?.name}
                    width="140"
                    height="50"
                  />
                )}
              </a>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${type}`}
              onClick={handleShows}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${type}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${type}`}
              show={shows}
              onHide={handleCloses}
              // placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${type}`}>
                  <a className="navbar-brand left-image-sec-logo" href="#">
                    <img
                      onClick={navigateToHome}
                      src={logo_design}
                      className="brandImg"
                      alt="RaphaCure"
                      width="160"
                      height="60"
                    />
                    {subDomainDetails?.logo_url && (
                      <img
                        onClick={navigateToHome}
                        src={subDomainDetails?.logo_url}
                        alt={subDomainDetails?.name}
                        width="140"
                        height="50"
                      />
                    )}
                  </a>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-5">
                  {/* {headerList?.map((item, index) => (
                    <Nav.Link
                      className={`nav-item ${
                        uName === "/"
                          ? "no-active"
                          : uName === item?.to || !uName?.indexOf(item?.to)
                          ? "active fw-bold"
                          : "no-active"
                      }`}
                      onClick={() => handleMenuItemClick(item?.to, item?.name)}
                      key={index}
                      style={{
                        color:
                          uName === "/"
                            ? "black"
                            : selectedNavItem === item.name
                            ? "#9747ff"
                            : "black",
                      }}
                    >
                      {item?.name}
                    </Nav.Link>
                  ))} */}
                  {selectedItem && (
                    <Nav.Link
                      className="nav-link custome-edit-text fw-bold"
                      aria-current="page"
                      style={{
                        color:
                          selectedItem === selectedItem ? "#9747ff" : "black",
                      }}
                    >
                      {" "}
                      {selectedItem}
                    </Nav.Link>
                  )}

                  {/* <NavDropdown
                    title="More"
                    id={`offcanvasNavbarDropdown-expand-${type}`}
                  >
                    {headerSelectList?.map((item, index) => (
                      <NavDropdown.Item
                        className="nav-item "
                        key={index}
                        onClick={() => handleMoreItemClick(item.name, item.to)}
                      >
                        {" "}
                        {item?.name}
                      </NavDropdown.Item>
                    ))}

                    <NavDropdown.Divider />
                  </NavDropdown> */}

                  {/* ============== */}
                  {headerSelectList?.length > 0 && (
                    <div className="dropdown">
                      <button className="dropbtn">
                        More <span>{""}</span> <span aria-hidden>▾</span>
                      </button>
                      <div className="dropdown-content">
                        {headerSelectList?.map((item, index) => (
                          <NavDropdown.Item
                            className="nav-item "
                            key={index}
                            onClick={() =>
                              handleMoreItemClick(item.name, item.to)
                            }
                          >
                            {" "}
                            {item?.name}
                          </NavDropdown.Item>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* <UniversalStyled>
                    <div className="search-component-sec" ref={ref}>
                      {showSearchPopupModel && (
                        <input
                          onChange={handleSearchBox}
                          className="search-boc-header"
                          placeholder="Search"
                          type="text"
                        />
                      )}
                      <button
                        onClick={() => {
                          setShowSearchPopupModel(true);
                        }}
                        className={
                          showSearchPopupModel
                            ? "search_icon_sec1"
                            : "search_icon_sec"
                        }
                      >
                        <img src={search_icon} />
                      </button>
                      {universalSearchResults?.length > 0 &&
                        showSearchPopupModel && (
                          <div className="search-list-sec">
                            <div>
                              {universalSearchResults?.map((item) => {
                                return (
                                  <div className="search-list-sec-box-parent">
                                    <div
                                      className="search-list-sec-box"
                                      onClick={() => {
                                        handleSearchGoTo(item);
                                      }}
                                    >
                                      <p className="search-sec01">
                                        {item?.linkable_type}:
                                      </p>
                                      {item?.image && (
                                        <p>
                                          <img src={item?.image} />
                                        </p>
                                      )}

                                      <p>{item?.name}</p>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                    </div>
                  </UniversalStyled> */}
                </Nav>

                <Form className="d-flex">
                  {/* <Button
                    variant="btn btn-custom-city me-3"
                    onClick={handleBook}
                  >
                    {" "}
                    {userCity?.name ? userCity?.name : "Select City"}
                  </Button> */}
                  <a className="navbar-brand" onClick={gotoCart}>
                    <img src={cart_icon} alt="Cart" width="30" height="24" />
                    <span className="mt-2">{cartItems?.length}</span>
                  </a>
                  {user?.id ? (
                    <div
                      className="d-flex align-items-center me-2 cursor-pointer"
                      onClick={navigateToDashboard}
                    >
                      <a className="navbar-brand me-3">
                        <img
                          src={getImageUrl()}
                          className="object-cover object-center w-8 h-8 rounded-full user-img"
                          alt="User"
                        />
                      </a>
                      <span className="login-user-fnhidden me-2">
                        {user?.first_name
                          ? user?.first_name?.split(" ")[0]
                          : "Dashboard"}
                      </span>
                    </div>
                  ) : (
                    <Button
                      variant="outline"
                      className="btn-custom-city-1 me-2"
                      onClick={handleLogin}
                    >
                      Login
                    </Button>
                  )}
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>
      {!isSubPage ? (
        <div className="rapha-header-sec">
          <div className="rapha-header-sec-left"></div>
          <div className="rapha-header-sec-center">
            <div className="rectangle-3 header-text-center1">
              <form
                id="form"
                role="search"
                className="justify-centent-sm-center p-2"
              >
                <input
                  type="search"
                  id="query"
                  name="q"
                  placeholder="Search for Medicine, Doctor, Hospital"
                  aria-label="Search through site content"
                  className=" border-0 w-full"
                />
                <button>
                  <div className="vector-4"></div>
                  <div className="vector-5"></div>
                </button>
              </form>
              <div className="margin-top-button-sec"></div>
            </div>
          </div>
          <div className="rapha-header-sec-right">
            {user?.id ? (
              <div className="flex items-center float-right">
                <div
                  className="flex items-center mr-2 cursor-pointer"
                  onClick={navigateToDashboard}
                >
                  <img
                    src={getImageUrl()}
                    className="object-cover object-center w-8 h-8 rounded-full"
                  />
                  <span className="hidden sm:inline mr-2">{fullName}</span>
                </div>
                <div
                  onClick={handleLogout}
                  className="focus:outline-none mr-2 cursor-pointer hover:text-green-500"
                >
                  logout
                </div>
              </div>
            ) : (
              <button className="handle-login-btn" onClick={handleLogin}>
                Login
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="empty-page-sub-header"></div>
      )}
      {show && (
        <CityDialogList
          handleClose={() => {
            setShow(false);
          }}
          setShow={setShow}
          element={show}
        />
      )}
    </>
  );
};

export default RPHeader;
