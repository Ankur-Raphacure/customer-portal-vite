import React from "react";
import { useState, useEffect } from "react";
import { BlobServiceClient } from "@azure/storage-blob";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DashboardStyled } from "./Dashboard.styed";
import DashboardMenu from "./DashboardMenu";
import MyProfile from "./Components/MyProfile";
import DashboardComponent from "./Components/DashboardComponent/DashboardComponent";
import Bookings from "./Components/Bookings/Bookings";
import Coupons from "./Components/Coupons/Coupons";
import Wallets from "./Components/Wallets/Wallets";
import { updateShowLoginModel } from "../../redux/slices/auth/authSlice";
import Subscriptions from "./Components/Subscriptions/Subscriptions";
import Packages from "./Components/Packages/Packages";
// import Helpdesk from "./Components/Helpdesk/Helpdesk";
import { getMyBookingsAPI } from "./../../redux/slices/dashboard/dashboardService";
import {
  getUserWithDependentsAPI,
  getMyAddressQueryAPI,
} from "./../../redux/slices/Profile/ProfileService";
import BookAppointment from "./Components/BookAppointment/BookAppointment";
import Activities from "./Components/Activities/Activities";
import Wellness from "./Components/MentalWellness/Wellness";
import ActivitySummery from "./Components/Activities/ActivitySummery";
import ViewOptions from "./Components/DashboardComponent/ViewOptions";
import BottomNavBar from "../../components/Footer/BottomNavBar";
import { checkIsMobile } from "../../Scenes/common";
const Dashboard = (props: any) => {
  const { sectionName } = props?.match?.params;
  const [file, setFile] = useState(null);
  const [addressEnabled, setAddressEnabled] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const [moreOptions, setMoreOptions] = useState(false);
  const [showLoginPopupModel, setShowLoginPopupModel] = useState(false);
  const { user, subDomainDetails } = useSelector(
    (ReduxState: any) => ReduxState.auth
  );
  const { cartItems } = useSelector((ReduxState: any) => ReduxState.checkout);
  const { userDependents, userAddress } = useSelector(
    (ReduxState: any) => ReduxState.profile
  );
  const { myBookings } = useSelector((ReduxState: any) => ReduxState.dashboard);
  console.log("subdomain_key ", subDomainDetails?.subdomain_key);

  const navBarData = [
    {
      name: "Home",
      path: "/",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1738653474740.png",
    },
    {
      name: "Pharmacy",
      path: "/pharmacy",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1738652767506.png",
    },
    {
      path: "more",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1738653109570.png",
    },
    {
      name: "Lab Test",
      path: "/labtest",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1738653017645.png",
    },
    {
      name: "Cart",
      path: "/cart",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1738653072590.png",
    },
  ];
  const indigridNavbarData = [
    {
      name: "Home",
      path: "/",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1738653474740.png",
    },
    {
      name: "Doctor",
      path: "/doctor",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1738652767506.png",
    },
    {
      path: "more",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1738653109570.png",
    },
    {
      name: "Lab Test",
      path: "/labtest",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1738653017645.png",
    },
    {
      name: "Cart",
      path: "/cart",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1738653072590.png",
    },
  ];
  const navBarMoreData = [
    {
      name: "Doctor Consultation",
      path: "/doctor",
    },
    {
      name: "Radiology",
      path: "/radiology",
    },
    {
      name: "Ambulance",
      path: "/ambulance",
    },
    {
      name: "Gymlist",
      path: "/Gymlist",
    },
    {
      name: "Womenscare",
      path: "/womenscare",
    },
    {
      name: "Eyecare",
      path: "/eyecare",
    },
    {
      name: "Dentalcare",
      path: "/dentalcare",
    },
    {
      name: "Mentalwellness",
      path: "/mentalwellness",
    },
    {
      name: "Ayurveda",
      path: "/ayurveda",
    },
    {
      name: "DomiciliaryCare",
      path: "/domiciliaryCare",
    },
    {
      name: "Bloodbank",
      path: "/bloodbank",
    },
  ];
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      console.log("Razorpay script loaded successfully");
    };
    script.onerror = (err) => {
      console.error("Error loading Razorpay script:", err);
    };
    document.body.appendChild(script);

    // Cleanup the script when component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    if (user?.id) {
      dispatch(getMyBookingsAPI(50));
      dispatch(getUserWithDependentsAPI());
      dispatch(getMyAddressQueryAPI());
    } else {
      history.push("/");
    }
  }, []);

  const handleChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e: any) => {
    // e.preventDefault();
    // //process.env.REACT_APP_AZURE_STORAGE_CONNECTION_STRING
    // const blobServiceClient = new BlobServiceClient();
    // const blockBlobClient = blobServiceClient.getBlockBlobClient(file.name);
    // try {
    //   await blockBlobClient.uploadFile(file);
    //   console.log("File uploaded successfully");
    // } catch (err) {
    //   console.error(err);
    // }
  };
  const handleBookNow = (item: any) => {
    console.log("item", item);
    if (
      item?.type === "virtual_consultation" ||
      item?.type === "virtual_consultation_specific"
    ) {
      history.push("/doctor");
    } else if (item?.type === "opd_consultation") {
      history.push("/doctor?tab=opd");
    } else if (item?.type === "dental_consultation") {
      history.push("/dentalcare");
    } else if (item?.type === "eye_consultation") {
      history.push("/eyecare");
    } else if (item?.type === "diagnostic_tests") {
      history.push("/labtest");
    } else if (item?.type === "pharmacy") {
      history.push("/pharmacy");
    } else if (item?.type === "ctmri_tests") {
      history.push("/radiology");
    } else if (item?.type === "ambulance") {
      history.push("/ambulance");
    } else if (item?.type === "gym_subscription") {
      history.push("/fitness");
    } else if (item?.type === "diagnostic_tests") {
      history.push("/labtest");
    } else if (item?.type === "ds_tests") {
      history.push("/domiciliarycare");
    } else if (item?.type === "others") {
      history.push("/comingsoon");
    }
  };

  const renderContent = () => {
    switch (sectionName) {
      case "dashboard":
        return <DashboardComponent />;
      case "myProfile":
        return <MyProfile />;
      case "bookings":
        return <Bookings />;
      case "activities":
        return <Activities />;
      case "wellness":
        return <Wellness />;
      case "wallets":
        return <Wallets handleBookNow={handleBookNow} />;
      case "activitysummery":
        return <ActivitySummery handleBookNow={handleBookNow} />;
      case "subscriptions":
        return <Subscriptions handleBookNow={handleBookNow} />;
      case "packages":
        return <Packages />;
      case "coupons":
        return <Coupons />;
      // case "helpdesk":
      // return <Helpdesk />;
      case "book-appointment":
        return <BookAppointment />;
      default:
        return <DashboardComponent />;
    }
  };
  const handleNavigate = (urlPath: any) => {
    if (urlPath == "more") {
      setMoreOptions(true);
      return;
    }
    history.push(urlPath);
  };
  const handleLogin = () => {
    dispatch(updateShowLoginModel(true));
  };
  return (
    <DashboardStyled>
      <div className="all-full-dashboard">
        <div className="menu-component left-menu-container">
          <DashboardMenu sectionName={sectionName} />
        </div>
        <div className="content-component right-menu-container">
          {renderContent()}
        </div>
      </div>

      {checkIsMobile() && (
        <div className="BottomNavBar-mobile-view">
          <BottomNavBar
            element={
              subDomainDetails?.subdomain_key === "indigrid"
                ? indigridNavbarData
                : navBarData
            }
            from={subDomainDetails?.subdomain_key ? "subdomain" : ""}
            handleNavigate={handleNavigate}
            moreOptionsBtn={moreOptions}
            setMoreOptions={setMoreOptions}
            navBarMoreData={navBarMoreData}
            handleLogin={handleLogin}
          />
        </div>
      )}
    </DashboardStyled>
  );
};

export default Dashboard;
