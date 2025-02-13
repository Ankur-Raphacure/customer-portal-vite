import React, { useEffect, useState, useRef } from "react";
// import PhamacyHeader from "../../components/PharmacyHeader/PhamacyHeader";
import HArticle_3 from "../../assets/images/healtharticle/Article-1.png";
import { DentalCareStyled } from "./DentalCare.styled";
// import Clinics from "./Clinics";
import {
  getEyeCategoriesAPI,
  getEyeHospitalsAPI,
} from "../../redux/slices/generic/genericService";
import { updateDoctordetails } from "../../redux/slices/bookingScreen/bookingScreenSlice";
import lab_test_banner_img from "../../assets/lab_test_banner_img.png";

import LabNearYouCard from "../../components/LabNearYouCard/LabNearYouCard";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateShowLoginModel } from "../../redux/slices/auth/authSlice";
import Banner from "../Banner/Banner";
import Category from "./Category";
import Clinics from "./Clinics";

export const DentalCare = (props: any) => {
  const [addressEnabled, setAddressEnabled] = useState(false);
  const [currentSec, setCurrentSec] = useState("eye_care");
  const [selectedCategory, setsSlectedCategory] = useState({} as any);
  const history = useHistory();
  const dispatch = useDispatch();
  const ref = useRef(null as any);

  const { allEyeCareCategoriesList, allEyeCareHospitalsList } = useSelector(
    (ReduxState: any) => ReduxState.generic,
  );
  const { userCity, user } = useSelector((ReduxState: any) => ReduxState.auth);
  console.log("allEyeCareCategoriesList", allEyeCareCategoriesList);
  console.log("allEyeCareHospitalsList", allEyeCareHospitalsList);
  const cName = props?.location?.pathname;
  const secName = cName === "/dentalcare" ? "dental_care" : "eye_care";
  useEffect(() => {
    // dental_care
    console.log("propsprops", props);
    getLatestData(userCity?.name);
  }, []);
  useEffect(() => {
    getLatestData(userCity?.name);
  }, [userCity?.name]);

  const getLatestData = (city = "bengaluru") => {
    dispatch(getEyeCategoriesAPI({ type: secName, city: city?.toLowerCase() }));
    dispatch(getEyeHospitalsAPI({ type: secName, city: city?.toLowerCase() }));
  };
  const handleSecletedCategory = (item: any) => {
    setsSlectedCategory(item);
    // window.scrollTo(0, 400);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  const habdleBookNow = async (vendor: any) => {
    console.log(vendor, "vendorvendorvendorvendorvendor");

    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      console.log("vendor", vendor);
      console.log("selectedCategory", selectedCategory);
      await dispatch(
        updateDoctordetails({
          doctorDetails: { ...selectedCategory },
          hospitalDetails: vendor,
          categoryType: cName === "/dentalcare" ? "dentalcare" : "eyecare",
          slot1: {},
          slot2: {},
        }),
      );
      history.push(
        cName === "/dentalcare"
          ? `/dentalcare/bookingReview`
          : `/eyecare/bookingReview`,
      );
    }
  };
  // const deltal_img =
  //   "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/RootCanalTreatment.webp";
  return (
    <DentalCareStyled>
      <div>
        <div className="section-class">
          {/* <PhamacyHeader
            title={
              cName === "/dentalcare"
                ? "Discover your Dental care potential"
                : "Leading Eye Care Solutions for a Brighter Future"
            }
            image={cName === "/dentalcare" ? deltal_img : lab_test_banner_img}
            section="eyecare"
          /> */}
          <Banner section="dentalcare" />
        </div>
        <div className=" lab-test-data-content">
          <div className="margin-top-bottom-sec">
            <span className="text-xl font-bold  labs-near-me-sec-header ">
              Category
            </span>
          </div>
          <Category
            handleSecletedCategory={handleSecletedCategory}
            list={allEyeCareCategoriesList?.tests}
          />
          <div ref={ref}>
            {selectedCategory?.service_name && (
              <>
                <div className="margin-top-bottom-sec">
                  <span className="text-xl font-bold  labs-near-me-sec-header-eye ">
                    Clinics for <span>{selectedCategory?.service_name}</span>
                  </span>
                </div>
                <Clinics
                  habdleBookNow={habdleBookNow}
                  list={allEyeCareHospitalsList?.vendors}
                />

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
              </>
            )}
          </div>
        </div>
      </div>
    </DentalCareStyled>
  );
};
