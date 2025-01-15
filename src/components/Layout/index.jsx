import React, { useEffect, useState } from "react";
import Header from "../Header";
import RPHeader from "../RPHeader";
import Footer from "../Footer";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import {
  updateSubDomainDetails,
  updateSubDomainName,
  updateUserDetails,
  updateIsRaphaPlus,
  updateRpSubDomainDetails,
  updateRpSubDomainName,
  updateUserCity,
} from "../../redux/slices/auth/authSlice";
import { SERVER_IP, API_KEY } from "../../config";
import RPFooter from "../../components/RaphaPlus/Footer/RPFooter";
import HeaderAddress from "./../../components/HeaderAddress/HeaderAddress";
import { getSubDomainLoginDetails } from "../../redux/slices/auth/authService";
import { updateTablist } from "../../redux/slices/doctor/doctorSlice";
import Sidebar from "../SideMenu/Sidebar";
import { useHistory, useLocation } from "react-router-dom";
import Loader from "../../components/Common/Loader";
import DomainNotFound from "./../DomainNotFound";
import {
  doctorPrescribedItems,
  updatePrescribedItems,
} from "../../redux/slices/doctor/doctorService";
import { toast } from "react-toastify";
import {
  getCartItemsAPI,
  handleAddToCartAPI,
} from "../../redux/slices/checkout/checkoutService";
import { getToken } from "../../Scenes/common";
import styled from "styled-components";
import RPFooterV2 from "../RPFooterV2";

const MobileViweHeaderAdd = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const hostName = window.location.host;
const xKey = API_KEY;
function extractParams(urlString) {
  const url = new URL(urlString);
  const params = url.searchParams;
  const userId = params.get('userid')?.replace(/ /g, '+'); // Replace spaces back to +
  const mobileNo = params.get('mobileNo')?.replace(/ /g, '+'); // Replace spaces back to +
  return { userid: userId, mobileNo: mobileNo };
}

const Layout = (props) => {
  const dispatch = useDispatch();
  const uName = window.location.pathname?.toLowerCase();
  const isSubPage = uName?.includes("/dashboard") ? true : false;
  const showAddressSec = uName?.includes("/dashboard") ? false : true;

  const query1 = useQuery();
  const isvideocallPage = uName === "/videocall";

  const params = extractParams(window.location.href)
  const mobileNo1 = params.mobileNo
  const userid = params.userid

  const user_key = query1.get("key");
  const doctorId = query1.get("doctorId");

  const { isRaphaPlus, user, subDomainDetails } = useSelector(
    ({ auth }) => auth
  );
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const [subDomainNameValue, setSubDomainNameValue] = useState("");
  const [isInvalidDomain, setIsInvalidDomain] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState({});
  const [selectedUser, setSelectedUser] = useState({});
  const user_subDD = localStorage.getItem("user_subDomainDetails");
  const user_subDD1 = user_subDD !== null ? JSON.parse(user_subDD) : {};
  const { userDependents, userAddress } = useSelector(
    (ReduxState) => ReduxState.profile
  );
  const patha = window.location.hostname;
  const userToken = getToken();
  useEffect(() => {
    if (window.location.pathname.endsWith("index.html")) {
      history.push("/");
    }
    getSubdomainInfo();
    if (user_key) {
      localStorage.setItem("user_key", user_key);
    }
  }, []);
  const getSubdomainInfo = async () => {
    const xKey = API_KEY;
    try {
      let pathName = patha?.split(".")[0] ?? "";

      // pathName = "suryoday";
      // pathName = "dbs";
      // pathName = "wyh";
      if (
        pathName === "localhost" ||
        pathName === "staging" ||
        pathName === "raphacure" ||
        pathName === "pharmacyuipagev2" ||
        pathName === "www"
      ) {
        pathName = "";
      }
      const isRP = patha?.includes("raphaplus");
      if (isRP) {
        // pathName = "mksfitness";
        dispatch(updateIsRaphaPlus(true));
      }
      const isDoctorDashboard = userid && user_key && !pathName ? true : false;
      // pathName = "berrybox";
      // pathName = "getafixmd";
      // pathName = "wyh";
      // if (isDoctorDashboard) {
      //   pathName = "doctorDashboard";
      // }
      if (pathName && (pathName != "" || pathName === "localhost")) {
        if (pathName === "localhost") {
          // pathName = "ocwen";
          // pathName = "berrybox";
          // pathName = "suryoday";
        }

        pathName =
          user_subDD1?.subdomain_key && user_subDD1?.subdomain_key !== ""
            ? user_subDD1?.subdomain_key
            : pathName;
        const url = `${SERVER_IP}/api/v1/client/subdomain/${pathName}`;
        let headers = {
          "Content-Type": "application/json",
          "x-api-key": xKey,
          key: user_key,
          "X-Frontend": hostName,
        };
        if (userToken) {
          headers.Authorization = "Bearer " + getToken();
        }
        setIsLoading(true);
        setSubDomainNameValue(pathName);
        const response = await Axios.get(url, { headers });
        setIsLoading(false);
        if (isRP) {
          dispatch(updateRpSubDomainName(pathName));
        } else {
          dispatch(updateSubDomainName(pathName));
        }

        if (response?.data?.data?.client?.id) {
          if (isRP)
            dispatch(updateRpSubDomainDetails(response?.data?.data?.client));
          else dispatch(updateSubDomainDetails(response?.data?.data?.client));

          if (response?.data?.data?.client?.agreed_services?.hide_opd) {
            dispatch(updateTablist(["Virtual Consultation"]));
          }
          if (
            response?.data?.data?.client?.agreed_services?.allow_sso &&
            userid &&
            userid != ""
          ) {
            const data1 = { userid: userid, mobileNo: mobileNo1 };
            // dispatch(getSubDomainLoginDetails(body));
            const url1 = `${SERVER_IP}/api/v1/auth/${pathName}/signon?userid=${userid}&mobileNo=${mobileNo1}`;
            const headers = {
              "Content-Type": "application/json",
              "x-api-key": xKey,
              key: user_key,
              "X-Frontend": hostName,
            };
            setIsLoading(false);
            const response = await Axios.patch(url1, data1, { headers });
            console.log(
              "subdomain_key : ",
              response?.data?.data?.subdomain_key
            );
            const subdomain_key = response?.data?.data?.subdomain_key;
            if (subdomain_key && subdomain_key?.trim !== "") {
              console.log("updating subdomain data");
              makeSubDomainAPICall(subdomain_key);
            }
            const userD = response?.data.data;
            if (userD?.id) {
              dispatch(updateUserDetails(userD));
            }
            setIsLoading(false);
          }
        } else {
          setIsInvalidDomain(true);
        }
      } else if (isDoctorDashboard) {
        const data1 = { userid: userid };
        const url1 = `${SERVER_IP}/api/v1/auth/doctorDashboard/signon?userid=${userid}`;
        const headers = {
          "Content-Type": "application/json",
          "x-api-key": xKey,
          key: user_key,
          "X-Frontend": hostName,
        };
        setIsLoading(false);
        const response = await Axios.patch(url1, data1, { headers });
        const userD = response?.data.data;
        const newUserD = { ...userD, loginType: "doctorDashboard", doctorId };
        if (newUserD?.id) {
          dispatch(updateUserDetails(newUserD));
        }
        setIsLoading(false);
      }
    } catch (e) {
      console.log("e", e);
    }
  };

  const makeSubDomainAPICall = async (subDomainName) => {
    const url = `${SERVER_IP}/api/v1/client/subdomain/${subDomainName}`;
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": xKey,
      Authorization: "Bearer " + getToken(),
      "X-Frontend": hostName,
    };
    setIsLoading(true);
    const response = await Axios.get(url, { headers });
    if (response?.data?.data?.client) {
      dispatch(updateSubDomainDetails(response?.data?.data?.client));
    }
  };

  // useEffect(() => {
  //   const fetchIPInfo = async () => {
  //     try {
  //       const userCity = JSON.parse(localStorage.getItem("userCity"));
  //       if (userCity && userCity.id) {
  //         console.log("City already Selected");
  //         return; // Skipping API Call
  //       }

  //       const response = await fetch("https://ipinfo.io/json");
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }

  //       const data = await response.json();

  //       // Create a new object with required fields
  //       const formattedCity = data.city.toLowerCase().replace(/\s+/g, "_"); // Format city for id
  //       const newObj = {
  //         id: formattedCity,
  //         name: data.city,
  //         image: "", // Empty field for image
  //         state_name: data.region, // Use region as state_name
  //       };
  //       await dispatch(updateUserCity(newObj));

  //       console.log("New Object:", newObj);
  //     } catch (error) {
  //       console.error("Error fetching IP information:", error);
  //     }
  //   };

  //   fetchIPInfo();
  // }, []);

  const isRPlus = patha?.includes("raphaplus");

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
    <div className={"wrapper-hide-header"}>
      {isInvalidDomain ? (
        <DomainNotFound isRPlus={isRPlus} />
      ) : (
        <>
          {isRaphaPlus ? <RPHeader /> : <Header />}

          {isLoading && <Loader />}
          <div className="layout-container justify-content-center full-content-sec-page-design">
            <MobileViweHeaderAdd>
              <HeaderAddress
                index={0}
                addressList={userAddress}
                address={selectedAddress}
                selectSavedAddress={selectSavedAddress}
              />
            </MobileViweHeaderAdd>

            {props.children}
            {/* <div className="left-menu-side-content">
    <Sidebar />
  </div>
  <div className="right-menu-side-content"> {props.children}</div> */}
          </div>
          {isRaphaPlus ? <RPFooterV2 /> : <> {!isSubPage && <Footer />}</>}
        </>
      )}
    </div>
  );
};

export default Layout;
