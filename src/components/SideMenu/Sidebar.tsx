import React, { useState } from "react";
import styled from "styled-components";
import { SideMenuStyled } from "./SideMenu.styled";
import booking from "./../../img/Profile_pp.png";
import teamWorkImg from "./../../img/Profile_pp.png";
import amcmana from "./../../img/Profile_pp.png";
import homeicon from "./../../img/Profile_pp.png";
import { useHistory } from "react-router-dom";

// import teamWorkImg from "./../../img/teamwork.png";
// import teamWorkImg from "./../../img/teamwork.png";
const Sidebar = (props: any) => {
  const [sidebar, setSidebar] = useState(false);
  // const dispatch = useDispatch();
  const history = useHistory();
  const showSidebar = () => setSidebar(!sidebar);
  //   left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  //   Home
  //   Service Management
  //   Lead Management
  //   Booking Management
  //   AMC Management
  //   Users List
  //  Change Password

  // Jobcard Summary
  // Create Job Card
  // Items Received List
  // Default IssuesOption List
  // Additional Requirement List
  // Brand List
  // Product List
  // Actiontaken List
  // Engineer Observation List
  // Customer Note List
  // Postal Code List
  // Area / Ward List
  console.log("props", props);
  const menuLinks = [
    {
      title: "Home",
      id: "focusNextHome",
      icon: homeicon,
      sublinks: [],
      link: "/jobcardsummary",
    },
    {
      title: "Service Management",
      id: "focusNextServiceManagement",
      icon: teamWorkImg,
      sublinks: [
        {
          title: "Jobcard Summary",
          link: "/jobcardsummary",
        },
        {
          title: "Create Job Card",
          link: "/createjobcard",
        },

        {
          title: "Product List",
          link: "/ProductList",
        },
        {
          title: "Brand List",
          link: "/BrandList",
        },
        {
          title: "Items Received List",
          link: "/ItemsReceivedList",
        },
        {
          title: "Default Issues Option List",
          link: "/DefaultIssuesOptionList",
        },
        {
          title: "Additional Requirement List",
          link: "/AdditionalRequirementList",
        },

        {
          title: "Actiontaken List",
          link: "/ActiontakenList",
        },
        {
          title: "Engineer Observation List",
          link: "/EngineerObservationList",
        },
        {
          title: "Customer Note List",
          link: "/CustomerNoteList",
        },
        {
          title: "Postal Code List",
          link: "/PostalCodeList",
        },
        {
          title: "Area / Ward List",
          link: "/AreaWardList",
        },
      ],
      link: "",
    },
    {
      title: "Lead Management",
      id: "focusNextLeadManagement",
      icon: teamWorkImg,
      sublinks: [
        {
          title: "Lead Summary",
          link: "/LeadSummary",
        },
        {
          title: "Create Lead",
          link: "/CreateLead",
        },
        {
          title: "Payment Mode List",
          link: "/Payment Mode List",
        },
        {
          title: "Item List",
          link: "/ItemList",
        },
        {
          title: "Configuration List",
          link: "/Configuration List",
        },
        {
          title: "Lead Status List",
          link: "/LeadStatusList",
        },
        {
          title: "Lead Actiontaken List",
          link: "/Lead Actiontaken List",
        },
      ],
      link: "",
    },
    {
      title: "Booking Management",
      id: "focusNextBookingManagement",
      icon: booking,
      sublinks: [
        {
          title: "Booking Service",
          link: "/BookingService",
        },
        {
          title: "Booking Service Summary",
          link: "/Booking Service Summary",
        },
        {
          title: "Booking Service Problem List",
          link: "/Booking Service Problem List",
        },
        {
          title: "Add Book Service Problem",
          link: "/Add Book Service Problem",
        },
      ],
      link: "/bookingmanagement",
    },
    {
      title: "AMC Management",
      id: "focusNextAMCManagement",
      icon: amcmana,
      sublinks: [
        {
          title: "AMC Booking Service",
          link: "/AMC Booking Service",
        },
        {
          title: "AMC Service Summary",
          link: "/AMC Service Summary",
        },
        {
          title: "AMC Problems List",
          link: "/AMC Problems List",
        },
        {
          title: "Add AMC Service Problem",
          link: "/Add AMC Service Problem",
        },
      ],
      link: "/amcmanagement",
    },
    {
      title: "Reports",
      id: "focusNextReports",
      icon: teamWorkImg,
      sublinks: [
        {
          title: "Productor Wise",
          link: "/ProductorWise",
        },
        {
          title: "Brand Wise",
          link: "/BrandWise",
        },
        {
          title: "S/N WISE",
          link: "SNWISE",
        },
        {
          title: "Proble Wise",
          link: "/ProbleWise",
        },
        {
          title: "Age Wise",
          link: "/AgeWise",
        },
        {
          title: "Status Wise",
          link: "/Status Wise",
        },
        {
          title: "Engineer Wise",
          link: "/Engineer Wise",
        },
        {
          title: "Acttion Taken Wise",
          link: "/Acttion Taken Wise",
        },
        {
          title: "Custmoer Note Wise",
          link: "/Custmoer Note Wise",
        },
        {
          title: "Eng Ob Wise",
          link: "/Eng Ob Wise",
        },
      ],
      link: "/Reports",
    },
    {
      title: "Configuration",
      id: "focusNextConfiguration",
      icon: teamWorkImg,
      sublinks: [
        {
          title: "Email Configuration",
          link: "/Email Configuration",
        },
        {
          title: "SMS API Configuration",
          link: "/SMS API Configuration",
        },
        {
          title: "Whatapp Configuration",
          link: "/Whatapp Configuration",
        },
        {
          title: "User Dashboard Configuration",
          link: "/User Dashboard Configuration",
        },
        {
          title: "Backup Configuration",
          link: "/Backup Configuration",
        },
      ],
      link: "/configuration",
    },
    {
      title: "Billing",
      id: "focusNextBilling",
      icon: teamWorkImg,
      sublinks: [],
      link: "/Billing",
    },
    {
      title: "Quotion",
      id: "focusNextQuotion",
      icon: teamWorkImg,
      sublinks: [],
      link: "/Quotion",
    },
    {
      title: "Users List",
      id: "focusNextUsersList",
      icon: teamWorkImg,
      sublinks: [],
      link: "/userslist",
    },
    {
      title: "Customers List",
      id: "focusNextCustomersList",
      icon: teamWorkImg,
      sublinks: [],
      link: "/customersList",
    },

    {
      title: "Change Password",
      id: "focusNextChangePassword",
      icon: teamWorkImg,
      sublinks: [],
      link: "/changepassword",
    },
  ];
  const gotoNewPage = (url: any) => {
    if (url === "/createjobcard") {
      window.location.href = url;
    } else if (url) {
      history.push(url);
    }
  };
  const selectedUrl = window.location.pathname;
  return (
    <>
      <SideMenuStyled>
        <div></div>
      </SideMenuStyled>
    </>
  );
};

export default Sidebar;
