import React, { useEffect, useState } from "react";
import BloodBankList from "./BloodBankList";
import { BloodBanksStyled } from "./BloodBanks.styled";
import Clinics from "../EyeCareModule/Clinics";
import { useDispatch, useSelector } from "react-redux";
import { getBloodBankVendorsAPI } from "../../redux/slices/bloodbank/bloodBankService";

const BloodBanks = () => {
  const [city, setCity] = useState("bengaluru");
  const [allVendors, setAllVendors] = useState([]);
  const dispatch = useDispatch();
  const { userCity, user } = useSelector((ReduxState: any) => ReduxState.auth);

  const { vendors } = useSelector((ReduxState: any) => ReduxState.bloodbank);
  // console.log("vendors bloodbank : ", vendors);
  useEffect(() => {
    getAllVendors(userCity?.id);
  }, [userCity?.name]);

  // useEffect(() => {
  //   console.log("city", city);

  //   getAllVendors();
  // }, [city]);

  const getAllVendors = async (cityv: any) => {
    const res = await dispatch(getBloodBankVendorsAPI(cityv));
    const resJson = JSON.parse(JSON.stringify(res));
    setAllVendors(resJson.payload.data.vendors);
  };

  return (
    <BloodBanksStyled>
      <div>
        {/* <PhamacyHeader section="bloodbank" /> */}
        <div className="container-fluid mt-8884 mx-auto lab-test-data-content">
          <div className="margin-top-bottom-sec">
            <span className="d-flex text-xl font-bold  labs-near-me-sec-header ">
              Blood Bank available in{" "}
              <p className="city-div">{userCity?.name?.toUpperCase()}</p>
            </span>
            <p className="parameter">
              Minimum wait-time & verified Blood Bank details
            </p>
          </div>
          {/* <DentalCareClinc /> */}
          <BloodBankList clinicsData={allVendors} />
          <div
            className="showall-div"
            onClick={() => {
              // navigateToPage("/labtest/bodyTests");
            }}
          >
            <p className="underline view-all float-right px-4 mt-4 cursor-pointer fw-bolder">
              {" "}
              View All Clinics{" "}
            </p>
          </div>
        </div>
      </div>
    </BloodBanksStyled>
  );
};

export default BloodBanks;
