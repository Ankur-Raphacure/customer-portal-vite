import React from "react";
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

const DashboardMenu = () => {
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    const userC1 = userC ? userC : "";
    localStorage.clear();
    localStorage.setItem("userCity", userC1);
    window.location.href = "/";
  };
  const pathName = window.location.pathname;
  console.log("pathName", pathName);

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
        <button
          className="btn btn-outline-secondary d-sm-none custome-btn"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </button>

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
