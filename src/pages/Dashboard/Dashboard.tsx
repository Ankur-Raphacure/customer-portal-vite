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
const Dashboard = (props: any) => {
  const { sectionName } = props?.match?.params;
  console.log("sectionName", sectionName);

  const [file, setFile] = useState(null);
  const [addressEnabled, setAddressEnabled] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);
  const { cartItems } = useSelector((ReduxState: any) => ReduxState.checkout);
  const { userDependents, userAddress } = useSelector(
    (ReduxState: any) => ReduxState.profile
  );
  const { myBookings } = useSelector((ReduxState: any) => ReduxState.dashboard);
  console.log("myBookings", myBookings);
  console.log("userDependents", userDependents);
  console.log("userAddress", userAddress);
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
    // //import.meta.env.REACT_APP_AZURE_STORAGE_CONNECTION_STRING
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

  return (
    <DashboardStyled>
      <div className="all-full-dashboard">
        <div className="menu-component left-menu-container">
          <DashboardMenu />
        </div>
        <div className="content-component right-menu-container">
          {renderContent()}
        </div>
      </div>
    </DashboardStyled>
  );
};

export default Dashboard;
