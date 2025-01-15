import React from "react";
import { useState } from "react";
import { BlobServiceClient } from "@azure/storage-blob";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HospitalListStyled } from "./hospitalList.styled";
import hospitalimg from "../../../assets/images/doctor/hospital.jpg";
import { MdOutlineCurrencyRupee } from "react-icons/md";

const HospitalList = (props: any) => {
  const [file, setFile] = useState(null);
  const [addressEnabled, setAddressEnabled] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const onBookNowClicked = () => {
    console.log(props.hospital);
  };

  const getHospitalImage = () => {
    return props.hospital?.image ?? hospitalimg;
  };

  const getServices = () => {
    if (props.hospital?.doctors) {
      const list: String[] = [];
      props.hospital.doctors.forEach((doctor: any) => {
        const specializationList = doctor.specialization
          .split(",")
          .map((item: any) => item.trim())
          .filter((item: any) => item !== "");
        list.push(...specializationList);
      });
      return Array.from(new Set(list)).join(", ");
    } else {
      if (props.hospital?.type === "eye_care") {
        return "Eye Consultation";
      } else if (props.hospital?.type === "dental_care") {
        return "Dental Consultation";
      } else {
        return "General Consultation";
      }
    }
  };

  const getConvertedRating = () => {
    if (props.hospital?.rating)
      return (Math.round(props.hospital?.rating * 100) / 100)?.toFixed(1);
    return props.hospital?.rating;
  };

  const getAverageConsultationCost = () => {
    let averageSum = 0;

    if (props.hospital?.doctors != null && props.hospital?.doctors.length > 0) {
      props.hospital?.doctors?.forEach((hspldoctor: any) => {
        if (hspldoctor?.consultation_cost) {
          averageSum += +hspldoctor.consultation_cost;
        }
      });
      return Math.round(averageSum / props.hospital?.doctors.length / 50) * 50;
    } else {
      return averageSum;
    }
  };

  return (
    <>
      <HospitalListStyled>
        {props.hospital ? (
          <div className="hospital_listitem round-shadow">
            <div className="hospital_topdata flex_center inline-flex">
              <div className="hospital_itemimg">
                <img src={getHospitalImage()} alt={props.hospital?.name} />
              </div>
              <div className="hospital_itemvalue inlineflex_start flexdirection_col">
                <div className="flex_start flexdirection_col">
                  <div className="hospital_name poppins-medium">
                    {props.hospital?.name}
                  </div>
                  <div className="hospital_services poppins-regular">
                    {getServices()}
                  </div>
                </div>

                <div className="hospital_starbox inlineflex_center">
                  <div className="star">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M5.52447 0.963525C5.67415 0.502869 6.32585 0.50287 6.47553 0.963525L7.45934 3.99139C7.52628 4.1974 7.71826 4.33688 7.93487 4.33688H11.1186C11.6029 4.33688 11.8043 4.95669 11.4124 5.24139L8.83679 7.11271C8.66155 7.24003 8.58822 7.46572 8.65516 7.67173L9.63897 10.6996C9.78864 11.1602 9.2614 11.5433 8.86955 11.2586L6.29389 9.38729C6.11865 9.25997 5.88135 9.25997 5.70611 9.38729L3.13045 11.2586C2.73859 11.5433 2.21136 11.1602 2.36103 10.6996L3.34484 7.67173C3.41178 7.46572 3.33845 7.24003 3.16321 7.11271L0.587553 5.24139C0.195696 4.95669 0.397084 4.33688 0.881446 4.33688H4.06513C4.28174 4.33688 4.47372 4.1974 4.54066 3.99139L5.52447 0.963525Z"
                        fill="#C5BD00"
                      />
                    </svg>
                  </div>
                  <div className="hospital_starvalue poppins-medium">
                    {getConvertedRating() ?? "5.0"}
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <div className="hospital_bottomdata">
              <div className="hospital_bottomwrap flex_wrapbetween">
                <div className="hospital_addresswrap inlineflex_start flexdirection_col">
                  <div className="hospital_addresstop inlineflex_center ">
                    <div className="hospital_addresstext poppins-regular">
                      {props.hospital?.address}
                    </div>
                  </div>
                  <div className="inlineflex_center">
                    <div className="hospital_feetxt poppins-regular">
                      Average Consultation Fee <MdOutlineCurrencyRupee />
                      {getAverageConsultationCost() ?? "500"}
                    </div>
                  </div>
                  {/* <div className="hospital_distance">
                      Distance
                    </div> */}
                </div>
                <div className="flexdirection_col">
                  <button
                    className="hospital_btn"
                    type="button"
                    onClick={() =>
                      history.push(`/hospital/${props.hospital?.id}`)
                    }
                  >
                    <div className="hospital_btnwrap">
                      <div className="hospital_btntxt poppins-semibold">
                        Book Clinic Visit
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </HospitalListStyled>
    </>
  );
};

export default HospitalList;
