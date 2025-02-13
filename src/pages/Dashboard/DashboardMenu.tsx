import React, { useEffect } from "react";
import { useState } from "react";
import { BlobServiceClient } from "@azure/storage-blob";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DashboardMenuStyled } from "./DashboardMenu.styled";
import homeicon from "./../../img/Profile_pp.png";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import {
  MdOutlineEventNote,
  MdOutlineHelpOutline,
  MdOutlineLogout,
  MdOutlinePlaylistAddCheck,
  MdHealing,
  MdLocalActivity,
  MdManageAccounts,
} from "react-icons/md";
import { CiWallet } from "react-icons/ci";
import { GoPackage } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import LoginModel from "../../components/LoginModel/LoginModel";
import cart_icon from "../../assets/icons8-cart-32.png";
import { IoArrowBackOutline } from "react-icons/io5";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import ContactCard from "./ContactCard";
import { updateShowLoginModel } from "../../redux/slices/auth/authSlice";

const DashboardMenu = ({ sectionName = "" }: any) => {
  const [file, setFile] = useState(null);
  const [addressEnabled, setAddressEnabled] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { user, subDomainName, subDomainDetails } = useSelector(
    (ReduxState: any) => ReduxState.auth
  );
  const { myAllSubscriptions } = useSelector(
    (ReduxState: any) => ReduxState.dashboard
  );
  const { cartItems } = useSelector((ReduxState: any) => ReduxState.checkout);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [showLoginPopupModel, setShowLoginPopupModel] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const isWallets = myAllSubscriptions?.wallets?.length > 0 ? true : false;
  var menuLinks = [
    {
      title: "Dashboard",
      icon: <HiOutlineSquares2X2 />,
      sublinks: [],
      link: "/dashboard/dashboard",
    },
    {
      title: "My Profile",
      icon: <MdManageAccounts />,
      sublinks: [],
      link: "/dashboard/myProfile",
    },
    {
      title: "Bookings",
      icon: <MdOutlineEventNote />,
      sublinks: [],
      link: "/dashboard/bookings",
    },
    {
      title: "Activities",
      icon: <MdLocalActivity />,
      sublinks: [],
      link: "/dashboard/activities",
    },
    {
      title: "Mental Wellness",
      icon: <MdHealing />,
      sublinks: [],
      link: "/dashboard/wellness",
    },

    // {
    //   title: "Help Desk",
    //   icon: <MdOutlineHelpOutline />,
    //   sublinks: [],
    //   link: "/dashboard/helpdesk",
    // },
  ];

  if (subDomainDetails?.agreed_services?.book_appointment) {
    menuLinks.splice(1, 0, {
      title: "Book Appointment",
      icon: <MdOutlineEventNote />,
      sublinks: [],
      link: "/dashboard/book-appointment",
    });
  }

  const newList1 = [
    {
      title: "Wallets",
      icon: <CiWallet />,
      sublinks: [],
      link: "/dashboard/wallets",
    },
    {
      title: isWallets ? "Subscriptions" : "Coupons",
      icon: <MdOutlinePlaylistAddCheck />,
      sublinks: [],
      link: isWallets ? "/dashboard/subscriptions" : "/dashboard/coupons",
    },
    {
      title: "My Packages",
      icon: <GoPackage />,
      sublinks: [],
      link: "/dashboard/packages",
    },
  ];
  if (
    subDomainName !== "wyh" ||
    user?.email === "indigrid@gmail.com" ||
    user?.phone === "9820799682"
  ) {
    menuLinks = [...menuLinks, ...newList1];
    console.log("menuLinks : ", menuLinks);
  }
  const gotoNewPage = (url: any) => {
    history.push(url);
    setIsMenuOpen(!isMenuOpen);
  };

  const logoutGotoNewPage = () => {
    var userC = localStorage.getItem("userCity");
    var userAddr = localStorage.getItem("userSelectedAddress");
    const userC1 = userC ? userC : "";
    localStorage.clear();
    localStorage.setItem("userCity", userC1);
    localStorage.setItem("userSelectedAddress", userAddr || "");
    window.location.href = "/";
  };
  const pathName = window.location.pathname;
  console.log("pathName", pathName);

  const ActiveBanner = () => {
    return <div className="activeBanner"></div>;
  };

  const handleProfileImgClick = () => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      history.push("/dashboard");
    }
  };

  const gotoCart = () => {
    history.push("/cart");
  };

  useEffect(() => {
   if(sectionName){
    setIsMenuOpen(false);
   }
  }, [sectionName])
  

  const renderSectionName = () => {
    switch (sectionName) {
      case "dashboard":
        return "Dashboard";
      case "myProfile":
        return "Profile";
      case "bookings":
        return "Bookings";
      case "activities":
        return "Activities";
      case "wellness":
        return "Wellness";
      case "wallets":
        return "Wallets";
      case "activitysummery":
        return "Activity Summary";
      case "subscriptions":
        return "Subscriptions";
      case "packages":
        return "Packages";
      case "coupons":
        return "Coupons";
      case "book-appointment":
        return "Book Appointment";
      default:
        return "";
    }
  };

  return (
    <>
      {/* <DashboardMenuStyled>
       <div
        className="accordion side-bar-container side-bar-container"
        id="accordionExample"
      >
        {menuLinks.map((item: any, index: any) => {
          // console.log("itemitem", item);
          const dynclass =
            pathName === item?.link
              ? "accordion-header active"
              : "accordion-header";
          return (
            <>
              <div className={`accordion-item ${item?.id} `}>
                <h2 className={dynclass} id={item?.id}>
                  <button
                    className="accordion-button collapsed sidebarBtn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${item?.id}`}
                    // aria-expanded={isOpenSec ? true : false}
                    aria-controls={`collapse${item?.id}`}
                    onClick={() => {
                      gotoNewPage(item?.link);
                    }}
                  >
                    {item.icon}
                    {item?.title}
                  </button>
                </h2>
              </div>
            </>
          );
        })}
        <div className={`accordion-item`}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              onClick={() => {
                logoutGotoNewPage();
              }}
            >
              <MdOutlineLogout />
              Log out
            </button>
          </h2>
        </div>
      </div>
    </DashboardMenuStyled> */}

      <DashboardMenuStyled>
        <div className="topButtons">
          <div
            className="back"
            onClick={() => {
              history.goBack();
            }}
          >
            <IoArrowBackOutline size={27} />
            {renderSectionName()}
          </div>
          
          <div className="bannerProfileOptions">
            <button
              className="btn btn-outline-secondary d-sm-none custome-btn"
              onClick={toggleMenu}
            >
              <GiHamburgerMenu size={23} />
            </button>
            {/* <button className="navbar-brand cart-icon-div" onClick={gotoCart}>
              <img src={cart_icon} alt="Cart" width="30" height="24" />
              <div className="cart-icon-count-div">
                <span>
                  {" "}
                  {cartItems?.cart_count ? cartItems?.cart_count : ""}
                </span>
              </div>
            </button>
            <button onClick={() => handleProfileImgClick()}>
              <img
                src={
                  user?.image ||
                  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1738228709246.png"
                }
                alt=""
                className="dp"
              />
            </button> */}
          </div>
        </div>

        <ContactCard
          name={`${user?.first_name || ""} ${user?.last_name || ""}`}
          phone={user?.phone || ""}
          email={user?.email || ""}
          avatarUrl={
            user?.image ||
            "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1738228709246.png"
          }
        />

        <div
          className={`accordion side-bar-container ${isMenuOpen ? "show" : ""}`}
          id="accordionExample"
        >
          {menuLinks.map((item: any, index: any) => {
            const dynclass =
              pathName === item?.link
                ? "accordion-header active"
                : "accordion-header";
            return (
              <div key={index} className={`accordion-item ${item?.id}`}>
                <h2 className={`${dynclass}`} id={item?.id}>
                  {pathName === item?.link && <ActiveBanner />}
                  <button
                    className="accordion-button collapsed sidebarBtn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${item?.id}`}
                    aria-controls={`collapse${item?.id}`}
                    onClick={() => {
                      gotoNewPage(item?.link);
                    }}
                  >
                    {item.icon}
                    {item?.title}
                  </button>
                  <MdOutlineArrowForwardIos />
                </h2>
              </div>
            );
          })}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                onClick={() => {
                  gotoNewPage("/chat");
                }}
              >
                <MdOutlineHelpOutline />
                Help Desk
              </button>
            </h2>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                onClick={() => {
                  logoutGotoNewPage();
                }}
              >
                <MdOutlineLogout />
                Log out
              </button>
            </h2>
          </div>
        </div>
      </DashboardMenuStyled>
    </>
  );
};

export default DashboardMenu;
