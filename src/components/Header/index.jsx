import React, {
  Component,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { useHistory, useLocation } from "react-router-dom";
import * as ReactPopOver from "react-popover";
import logo from "../../assets/images/logo.webp";
import { UniversalStyled } from "./UniveralSearch.styled";
import { CiSearch } from "react-icons/ci";
import { IoLanguageOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

import {
  Row,
  Col,
  Button,
  InputGroup,
  Dropdown,
} from "react-bootstrap";
import "./styles.css";
import { updateUserDetails } from "../../redux/slices/auth/authSlice";
import { getConfigInfoAPI } from "./../../redux/slices/config/configService";
import LoginModel from "./../../components/LoginModel/LoginModel";
import { updateShowLoginModel } from "../../redux/slices/auth/authSlice";
import { getCityNameAPI } from "../../redux/slices/auth/authService";
// import GoogleTranslate from "./GoogleTranslate";
// import { updateNitifySuccessMessage } from "../../redux/slices/checkout/checkoutSlice";
import cart_icon from "../../assets/icons8-cart-32.png";
// import search_icon from "../../assets/icon  s8-search-30.png";
import logo_design from "../../assets/r_logo.png";

import SearchModel from "../../components/SearchModel/SearchModel";
import { getUniversalSearchData } from "../../redux/slices/generic/genericService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import arrow from "../../assets/images/Icons/Down.png";
import { checkIsMobile, decryptWyhData } from "../../Scenes/common";
import CityDialogList from "../../pages/CityDialog/CityDialogList";
import {
  getUserWithDependentsAPI,
  getMyAddressQueryAPI,
} from "../../redux/slices/Profile/ProfileService";
import "./styles.css";
// import AddNewMember from "../../components/AddNewMember/AddNewMember";
import { debounce } from "lodash";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { getCartItemsAPI } from "../../redux/slices/checkout/checkoutService";
import { updateUniversalSearchResults } from "../../redux/slices/generic/genericSlice";
import Marquee from "react-fast-marquee";
import { MdOutlineLogout } from "react-icons/md";
import HeaderAddress from "../HeaderAddress/HeaderAddress";

const Header = (props) => {
  const [finalList, setFinalList] = useState([
    { name: "Doctor Consultation", to: "/doctor" },
    { name: "Mental Wellness", to: "/mentalwellness" },
    { name: "Women’s Care", to: "/womenscare" },
    { name: "Lab Test", to: "/labtest" },
    { name: "Radiology", to: "/radiology" },
    { name: "Pharmacy", to: "/pharmacy" },
    { name: "Ayurveda", to: "/ayurveda" },
    { name: "Fitness", to: "/Gymlist" },
    { name: "Eye Care", to: "/eyecare" },
    { name: "Dental Care", to: "/dentalcare" },
    { name: "Ambulance", to: "/ambulance" },

    { name: "Domiciliary Care", to: "/domiciliarycare" },

    { name: "Blood Bank", to: "/bloodbank" },
  ]);

  const [headerDropdownList, setHeaderDropdownList] = useState([
    {
      headerName: "Consultation",
      headerNameList: [
        { name: "Doctor Consultation", to: "/doctor" },
        { name: "Mental Wellness", to: "/mentalwellness" },
        { name: "Women’s Care", to: "/womenscare" },
      ],
    },
    {
      headerName: "Diagnostic",
      headerNameList: [
        { name: "Lab Test", to: "/labtest" },
        { name: "Radiology", to: "/radiology" },
        { name: "Eye Care", to: "/eyecare" },
        { name: "Dental Care", to: "/dentalcare" },
      ],
    },
    {
      headerName: "Medicines",
      headerNameList: [
        { name: "Pharmacy", to: "/pharmacy" },
        { name: "Ayurveda", to: "/ayurveda" },
      ],
    },
    {
      headerName: "Emergency",
      headerNameList: [
        { name: "Ambulance", to: "/ambulance" },
        { name: "Blood Bank", to: "/bloodbank" },
      ],
    },
    {
      headerName: "Fitness",
      headerNameList: [
        { name: "Fitness", to: "/Gymlist" },
        { name: "Mental Wellness", to: "/mentalwellness" },
      ],
    },
  ]);

  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const ref = useRef();
  const wyhUserIdFetched = useRef(false);
  const [selectedAddress, setSelectedAddress] = useState({});
  const [selectedUser, setSelectedUser] = useState({});
  const { userDependents, userAddress } = useSelector(
    (ReduxState) => ReduxState.profile
  );
  const {
    error,
    loading,
    subDomainDetails,
    user,
    userCity,
    showLoginModel,
    subDomainName,
  } = useSelector(({ auth }) => auth);
  const { cartItems, nitifySuccessMessage } = useSelector(
    (startR) => startR?.checkout
  );

  useEffect(() => {
    if (subDomainDetails?.subdomain_key === "wyh") {
      setFinalList([{ name: "Doctor Consultation", to: "/doctor" }]);
      setHeaderDropdownList([
        {
          headerName: "Consultation",
          headerNameList: [{ name: "Doctor Consultation", to: "/doctor" }],
        },
      ]);
    }
    else if (subDomainDetails?.subdomain_key === "getafixmd") {
      setFinalList([{ name: "Doctor Consultation", to: "/doctor" }, { name: "Lab Test", to: "/labtest" }, { name: "Pharmacy", to: "/pharmacy" }]);
      setHeaderDropdownList([
        {
          headerName: "Consultation",
          headerNameList: [{ name: "Doctor Consultation", to: "/doctor" }],
        },
        {
          headerName: "Diagnostic",
          headerNameList: [{ name: "Lab Test", to: "/labtest" }],
        },
        {
          headerName: "Medicines",
          headerNameList: [{ name: "Pharmacy", to: "/pharmacy" }],
        },
      ]);
    }
  }, [subDomainDetails]);

  useEffect(() => {
    console.log("subDomainDetails : ", subDomainDetails);

    // Call storeWyhUserId only if user exists, is not an empty object,
    // and the subdomain_key matches "wyh".
    if (
      !wyhUserIdFetched.current &&
      subDomainDetails?.subdomain_key === "wyh" &&
      Object.keys(user).length > 0
    ) {
      storeWyhUserId();
      wyhUserIdFetched.current = true; // Mark as executed
    }
  }, [subDomainDetails, user]);

  function extractParams(urlString) {
    const url = new URL(urlString);
    const params = url.searchParams;
    const userId = params.get("userid")?.replace(/ /g, "+"); // Replace spaces back to +
    const mobileNo = params.get("mobileNo")?.replace(/ /g, "+"); // Replace spaces back to +
    return { userid: userId, mobileNo: mobileNo };
  }

  const storeWyhUserId = async () => {
    const query = window.location.search;
    const params = extractParams(window.location.href);

    if (query.includes("userid=") || query.includes("mobileNo=")) {
      // NOTE : Custom Algo because directly using params.get('userid') is unable to get some special characters
      // const userIdStart = query.indexOf("userid=") + "userid=".length;
      // const userIdEnd = query.indexOf("&", userIdStart);
      // const userId =
      //   userIdEnd === -1
      //     ? query.substring(userIdStart)
      //     : query.substring(userIdStart, userIdEnd);

      const userId = params.userid;
      const mobileNo = params.mobileNo;
      const decryptMobileNum = await decryptWyhData(mobileNo);

      console.log("user : ", user);
      console.log("UserId : ", userId);
      console.log("MobileNo : ", decryptMobileNum);
      if (userId) {
        console.log("UserId found : ", userId);

        dispatch(
          updateUserDetails({
            ...user,
            wyhUserId: userId,
            wyhMobileNo: decryptMobileNum,
          })
        );
      }
    } else {
      console.log("UserId not found in URL");
    }
  };
  const { configInfo } = useSelector(({ config }) => config);
  const { universalSearchResults } = useSelector(({ generic }) => generic);
  const [isOpen, setIsOpen] = useState(false);

  const [showSearchPopupModel, setShowSearchPopupModel] = useState(false);
  const [showLoginPopupModel, setShowLoginPopupModel] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [LocalSelectedItem, setLocalSelectedItem] = useState(null);
  const [show, setShow] = useState(false);
  const [headerList, setHeaderList] = useState(
    checkIsMobile() ? finalList?.slice(0, 40) : finalList?.slice(0, 2)
  );
  const [headerSelectList, setHeaderSelectList] = useState(
    finalList?.slice(2, 20)
  );

  const [selectedNavItem, setSelectedNavItem] = useState("");
  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [isSideNavVisible, setIsSideNavVisible] = useState(true);
  const [shows, setShows] = useState(false);

  const handleCloses = () => setShows(false);
  const handleShows = () => setShows(true);

  const type = "md";
  const items = [
    "Up to 20% Off First Health Checkup",
    "Flat 20% Off On Doctor Consultation",
    "Delivery for medicines",
    "Up to 20% Off First Health Checkup",
    "Flat 20% Off On Doctor Consultation",
    "Delivery for medicines",
  ];

  const repeatCount = 5000;
  let marqueeContent = [];

  useEffect(() => {
    if (user?.id) {
      dispatch(getCartItemsAPI());
      dispatch(getCityNameAPI());
      if (!subDomainDetails?.name && (!user?.first_name || !user?.last_name)) {
        // history.push("/dashboard/myProfile?updateProfile=1");
      }
      getUserInfo();
    }
  }, [user?.id]);
  // useEffect(() => {
  //   getUserInfo();
  // }, []);

  const getUserInfo = () => {
    dispatch(getConfigInfoAPI());
    dispatch(getUserWithDependentsAPI());
    dispatch(getMyAddressQueryAPI());
  };
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

  useEffect(() => {
    if (showLoginModel) {
      dispatch(updateShowLoginModel(false));
      handleLogin();
    }
  }, [showLoginModel]);

  // useEffect(() => {
  //   if (nitifySuccessMessage) {
  //     dispatch(updateNitifySuccessMessage(null));
  //     showNitiMessage(nitifySuccessMessage);
  //   }
  // }, [nitifySuccessMessage]);

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

  // const showNitiMessage = (msg) => {
  //   toast(msg, {
  //     position: "top-right",
  //     autoClose: 2000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //     // transition: Bounce,
  //   });
  // };
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
    } catch (error) { }
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
    setShowSearchPopupModel(true);
    setSearchText(e.target.value);
    debouncedSearch1(e.target.value);
    // dispatch(getUniversalSearchData({ searchText: e.target.value }));
  };
  const fetchSearchResults1 = (searchQuery) => {
    dispatch(getUniversalSearchData({ searchText: searchQuery }));
  };

  const debouncedSearch1 = useCallback(
    debounce((searchQuery) => fetchSearchResults1(searchQuery), 500),
    []
  );

  const navigateToHome = (url) => {
    navigateTo("/");
  };

  const navigateToDashboard = (url) => {
    console.log("navigateToDashboard");
    console.log("user?.from_hr : ", user?.from_hr);

    if (!user?.from_hr || subDomainName === "wyh") {
      navigateTo("/dashboard");
      handleCloses();
    }
  };
  const gotoCart = (url) => {
    navigateTo("/cart");
    handleCloses();
  };
  const handleSearchGoTo = (searR) => {
    setShowSearchPopupModel(false);
    dispatch(updateUniversalSearchResults([]));
    if (searR?.to_link == "/pharmacy") {
      navigateTo(`/item/generic/${searR?.linkable_id}`);
    } else if (searR?.linkable_type == "packages") {
      navigateTo(`/labPackageDetils/${searR?.linkable_id}`);
    } else if (searR?.type == "ctmri") {
      navigateTo(`/radiology/scan-details/${searR?.linkable_id}`);
    } else if (searR?.linkable_type == "tests") {
      navigateTo(`/labTestDetils/${searR?.linkable_id}`);
    } else if (searR?.type == "hospital") {
      navigateTo(`/hospital/${searR?.linkable_id}`);
    } else {
      navigateTo(`/doctor?q=${searchText}`);
    }
  };
  const navigateTo = (url) => {
    history.push(url);
  };
  const getImageUrl = () => {
    return null;
  };
  const handleLogin = () => {
    setShowLoginPopupModel(true);
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
    const isList1 = headerSelectList?.find(
      (item3) => item3?.to?.toUpperCase() === uName?.toUpperCase()
    );
    const isList2 = headerList?.find(
      (item3) => item3?.to?.toUpperCase() === uName?.toUpperCase()
    );
    if (!isList1?.name && !isList2?.name) {
      setSelectedItem(null);
      setLocalSelectedItem(null);
      setSelectedNavItem("");
    } else {
      setSelectedNavItem(isList2?.name);
    }
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
    setLocalSelectedItem(null);
    localStorage.removeItem("selectedNavItem");
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

  const handleMoreItemClick = (itemName, itemTo, to) => {
    handleMoreClick(itemName, itemTo);
    localStorage.setItem("selectedNavItem", itemName);
    setIsNavbarCollapsed(true);
    handleCloses();
    history.push(to);
  };

  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  const handleMouseEnter = (headerName) => {
    setHoveredDropdown(headerName);
  };

  const handleMouseLeave = () => {
    setHoveredDropdown(null);
  };

  const languages = ["English", "Spanish", "French", "German", "Chinese"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (language) => {
    setIsOpen(false);
  };

  useEffect(() => {
    const savedItem = localStorage.getItem("selectedNavItem");
    if (savedItem) {
      setLocalSelectedItem(savedItem);
    }
    // handleIconClick();
  }, []);
  const ccName = userCity?.name || userCity?.city;
  const isSubHeader = false;

  const [showInput, setShowInput] = useState(false);
  const [showHeading, setShowHeading] = useState(true);
  const inputRef = useRef(null);
  const headingRef = useRef(null);

  // Show input when icon is clicked
  const handleIconClick = () => {
    setShowInput(!showInput);
    setShowHeading(!showHeading);
  };

  const handleClick = () => {
    history.push("/");
  };

  // // Hide input when clicking outside
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (inputRef.current && !inputRef.current.contains(event.target)) {
  //       setShowInput(false);
  //       setShowHeading(true);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (headingRef.current && !headingRef.current.contains(event.target)) {
  //       setShowHeading(true);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  const logoutGotoNewPage = () => {
    var userC = localStorage.getItem("userCity");
    const userC1 = userC ? userC : "";
    localStorage.clear();
    localStorage.setItem("userCity", userC1);
    window.location.href = "/";
  };
  const gotoNewPage = (url) => {
    history.push(url);
    handleCloses();
  };

  const selectSavedAddress = (addss) => {
    setSelectedAddress(addss);
  };

  useEffect(() => {
    if (userDependents?.length > 0 && !selectedUser?.id) {
      setSelectedUser(userDependents[0]);
    }
    if (userAddress?.length > 0 && !selectedAddress?.id) {
      setSelectedAddress(userAddress[0]);
    }
  }, []);

  return (
    <>
      <div className="nav_bar">
        <LoginModel show={showLoginPopupModel} handleClose={handleClose} />
        <ToastContainer />
        <div className="bg-body-tertiary">
          <div className="marquee-rotate-sec-con-txt">
            <Marquee>
              {items.map((item,index) => {
                return (
                  <div className="marquee-rotate-div" key={index}>
                    <p>{item}</p>
                  </div>
                );
              })}
            </Marquee>
          </div>
        </div>

        <Navbar
          expand={type}
          className="bg-body-tertiary mb-0 raphacure-header-sec-nav-bar"
        >
          <Container fluid>
            <div className="header-left-sec1">
              <Navbar.Brand href="#">
                <a className="navbar-brand left-image-sec-logo " href="#">
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
                  {subDomainDetails?.logo_url && (
                    <button
                      className="subdomain-homebutton"
                      onClick={handleClick}
                    >
                      {" "}
                      Home
                    </button>
                  )}
                </a>
              </Navbar.Brand>
            </div>

            <div className="header-left-sec4">
              <HeaderAddress
                index={0}
                addressList={userAddress}
                address={selectedAddress}
                selectSavedAddress={selectSavedAddress}
              />
            </div>

            <div className="header-left-sec2">
              <div className="d-flex">
                <a
                  className="navbar-brand hide-icon-nav d-block d-md-none "
                  onClick={gotoCart}
                  aria-controls={`offcanvasNavbar-expand-${type}`}
                >
                  <img src={cart_icon} alt="Cart" width="30" height="24" />
                  <span className="mt-2">{cartItems?.cart_count}</span>
                </a>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${type}`}
                  onClick={handleShows}
                />
              </div>
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
                  {showHeading && (
                    <>
                      {checkIsMobile() && (
                        <div className="header-left-sec3">
                          {isOpen && (
                            <div className="dropdown-menu show mt-1">
                              {languages.map((language, index) => (
                                <button
                                  key={index}
                                  className={`nav-items dropdown-item ${uName === "/"
                                    ? "no-active"
                                    : uName === language?.to ||
                                      !uName?.indexOf(language?.to)
                                      ? ""
                                      : "no-active"
                                    }`}
                                  onClick={() => handleLanguageSelect(language)}
                                >
                                  {language}
                                </button>
                              ))}
                            </div>
                          )}
                          {subDomainName !== "wyh" && (
                            <button
                              className="btn btn-custom-city me-3"
                              onClick={handleBook}
                            >
                              {ccName || "Select City"}
                            </button>
                          )}

                          <div className="cart-login-btn-div">
                            <a
                              className="navbar-brand cart-icon-div"
                              onClick={gotoCart}
                            >
                              <img
                                src={cart_icon}
                                alt="Cart"
                                width="30"
                                height="24"
                              />
                              <div className="cart-icon-count-div">
                                <span>
                                  {" "}
                                  {cartItems?.cart_count
                                    ? cartItems?.cart_count
                                    : ""}
                                </span>
                              </div>
                            </a>

                            {user?.id ? (
                              <div
                                className="d-flex align-items-center me-2 cursor-pointer "
                                onClick={navigateToDashboard}
                              >
                                <a className="navbar-brand me-2 ">
                                  {user?.image ? (
                                    <img
                                      src={user.image}
                                      className="object-cover object-center w-8 h-8 rounded-full user-img"
                                      alt="User"
                                    />
                                  ) : (
                                    <div className="object-cover object-center w-8 h-8 rounded-full user-img d-flex justify-content-center align-items-center ">
                                      <FaUser className="w-full h-full" />{" "}
                                      {/* Ensure the icon takes the full size */}
                                    </div>
                                  )}
                                </a>
                                {/* <span className="login-user-fnhidden me-2">
                              {user?.first_name
                                ? user?.first_name?.split(" ")[0]
                                : "Dashboard"}
                            </span> */}
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
                          </div>
                        </div>
                      )}
                      <Nav className="justify-content-center flex-grow-1 ">
                        <div className="showOnMobile">
                          {finalList?.map((item, index) => (
                            <Nav.Link
                              className="nav-item"
                              onClick={() => {
                                gotoNewPage(item.to);
                              }}
                              // href={`${item.to}`}
                              key={index}
                              style={{ color: "black" }}
                            >
                              {item?.name}
                            </Nav.Link>
                          ))}
                        </div>

                        <Navbar
                          expand="lg"
                          className="bg-body-tertiary showOnDesktop"
                          expanded={true}
                        >
                          <Container>
                            <Navbar.Collapse id="basic-navbar-nav">
                              <Nav className="me-auto">
                                {showHeading && (
                                  <div
                                    ref={headingRef}
                                    className="navbar-header-text-div"
                                  >
                                    {headerDropdownList?.map((item) => (
                                      <NavDropdown
                                        title={item.headerName}
                                        className={`NavDropdown-title-div ${uName === "/"
                                          ? "no-active"
                                          : uName === item?.to ||
                                            !uName?.indexOf(item?.to)
                                            ? "text-danger"
                                            : "no-active"
                                          }`}
                                        id="basic-nav-dropdown"
                                        key={item.headerName}
                                        style={{
                                          color:
                                            uName === "/"
                                              ? "black"
                                              : selectedNavItem ===
                                                item.headerName
                                                ? "#9747ff"
                                                : "black",
                                        }}
                                        onMouseEnter={() =>
                                          handleMouseEnter(item.headerName)
                                        }
                                        onMouseLeave={handleMouseLeave}
                                        show={
                                          hoveredDropdown === item.headerName
                                        }
                                      >
                                        <div className="dropdown-subItem-div">
                                          {item.headerNameList.map(
                                            (subItem, index) => (
                                              <NavDropdown.Item
                                                className={`nav-items ${uName === "/"
                                                  ? "no-active"
                                                  : uName === subItem?.to ||
                                                    !uName?.indexOf(
                                                      subItem?.to
                                                    )
                                                    ? ""
                                                    : "no-active"
                                                  }`}
                                                style={{ marginTop: "-10px" }}
                                                onClick={() =>
                                                  handleMenuItemClick(
                                                    subItem?.to,
                                                    subItem?.name
                                                  )
                                                }
                                                key={index}
                                              >
                                                {subItem.name}
                                              </NavDropdown.Item>
                                            )
                                          )}
                                        </div>
                                      </NavDropdown>
                                    ))}
                                  </div>
                                )}
                              </Nav>
                            </Navbar.Collapse>
                          </Container>
                        </Navbar>
                      </Nav>
                    </>
                  )}
                  <Form className="d-flex citySelectForm">
                    {subDomainName !== "wyh" && (
                      <div className="dropdown" ref={inputRef}>
                        <div className="google-tanslate-lang-sec">
                          {/* <InputGroup className="me-3 header-search-module-div">
                            {showInput && (
                              <Form.Control
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                className="shadow-none input-search-filed-div col-md-12"
                                onChange={handleSearchBox}
                                placeholder="Search"
                                type="text"
                                style={{ width: "40rem" }}
                              />
                            )}
                            <InputGroup.Text
                              id="basic-addon2"
                              onClick={handleIconClick}
                            >
                              <CiSearch />
                            </InputGroup.Text>
                          </InputGroup> */}
                          {/* <GoogleTranslate /> */}

                          <div className="mobile-view-btn-div">
                            {/* <div className="mobile-view-search-btn me-2">
                              <InputGroup className="mb-3">
                                <Form.Control
                                  placeholder="Search"
                                  aria-label="Search"
                                  aria-describedby="basic-addon2"
                                  onChange={handleSearchBox}
                                />
                                <InputGroup.Text id="basic-addon2">
                                  <CiSearch />
                                </InputGroup.Text>
                              </InputGroup>
                            </div> */}

                            <div className="mobile-view-logout-btn">
                              <button
                                className="btn"
                                onClick={logoutGotoNewPage}
                              >
                                <MdOutlineLogout className="me-2" />
                                Log out
                              </button>
                            </div>
                          </div>
                        </div>
                        <UniversalStyled>
                          <div className="search-component-sec" ref={ref}>
                            {/* <InputGroup>
                                <Form.Control
                                  aria-label="Recipient's username"
                                  aria-describedby="basic-addon2"
                                  className="shadow-none input-search-filed-div col-md-6"
                                  onChange={handleSearchBox}
                                  placeholder="Search"
                                  type="text"
                                />
                                <InputGroup.Text id="basic-addon2">
                                  <CiSearch />
                                </InputGroup.Text>
                              </InputGroup> */}

                            {/* {universalSearchResults?.length > 0 &&
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
                                            {item?.image && (
                                              <p>
                                                <img src={item?.image} />
                                              </p>
                                            )}

                                            <p>{item?.name}</p>
                                            <p className="search-sec01">
                                              {`->`} {item?.linkable_type}
                                            </p>
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              )} */}
                          </div>
                        </UniversalStyled>
                      </div>
                    )}
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </div>
            {!checkIsMobile() && (
              <div className="header-left-sec3">
                {isOpen && (
                  <div className="dropdown-menu show mt-1">
                    {languages.map((language, index) => (
                      <button
                        key={index}
                        className={`nav-items dropdown-item ${uName === "/"
                          ? "no-active"
                          : uName === language?.to ||
                            !uName?.indexOf(language?.to)
                            ? ""
                            : "no-active"
                          }`}
                        onClick={() => handleLanguageSelect(language)}
                      >
                        {language}
                      </button>
                    ))}
                  </div>
                )}
                {/* {subDomainName !== "wyh" && (
                  <button
                    className="btn btn-custom-city me-3"
                    onClick={handleBook}
                  >
                    {ccName || "Select City"}
                  </button>
                )} */}

                <div className="d-flex align-items-center">
                  <a className="navbar-brand cart-icon-div" onClick={gotoCart}>
                    <img src={cart_icon} alt="Cart" width="30" height="24" />
                    <div className="cart-icon-count-div">
                      <span>
                        {" "}
                        {cartItems?.cart_count ? cartItems?.cart_count : ""}
                      </span>
                    </div>
                  </a>

                  {user?.id ? (
                    <div
                      className="d-flex align-items-center me-2 cursor-pointer "
                      onClick={navigateToDashboard}
                    >
                      <a className="navbar-brand me-2 ">
                        {user?.image ? (
                          <img
                            src={user.image}
                            className="object-cover object-center w-8 h-8 rounded-full user-img"
                            alt="User"
                          />
                        ) : (
                          <div className="object-cover object-center w-8 h-8 rounded-full user-img d-flex justify-content-center align-items-center ">
                            <FaUser className="w-full h-full" />{" "}
                            {/* Ensure the icon takes the full size */}
                          </div>
                        )}
                      </a>
                      {/* <span className="login-user-fnhidden me-2">
                              {user?.first_name
                                ? user?.first_name?.split(" ")[0]
                                : "Dashboard"}
                            </span> */}
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
                </div>
              </div>
            )}
          </Container>
          {isSubHeader && (
            <>
              <div className="isSubHeader-dropdown-content">
                {headerSelectList?.map((item, index) => (
                  <span
                    className={uName === item?.to ? "active" : ""}
                    onClick={() => handleMoreItemClick(item.name, item.to)}
                  >
                    {" "}
                    {item.name}
                  </span>
                ))}
              </div>
            </>
          )}
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

export default Header;
