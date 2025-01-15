import { useState } from "react";
import { DoctorsListstyled } from "./doctorsList.styled";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateDoctordetails } from "../../../redux/slices/bookingScreen/bookingScreenSlice";
import {
  getDoctorHospitalListAPI,
  instantConnectAPI,
  makeCallAPI,
} from "../../../redux/slices/doctor/doctorService";
import hospitalimg from "../../../assets/images/doctor/hospital_blue-icon.png";
import { updateShowLoginModel } from "../../../redux/slices/auth/authSlice";
import { toast } from "react-toastify";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";
import { ReactComponent as Audio } from "../../../assets/icons/audio.svg";
import { ReactComponent as Consult } from "../../../assets/icons/consult.svg";
import { ReactComponent as Chat } from "../../../assets/icons/chat.svg";

let doctorMale =
  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338140063.png";
let doctorFemale =
  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338333932.png";

const VirtualDoctorsList = (props: any) => {
  const dispatch = useDispatch();
  const [showHospitalList, setShowHospitalList] = useState(false);
  const history = useHistory();
  const { doctorHospitalsList } = useSelector(
    (ReduxState: any) => ReduxState.doctor
  );

  const { user } = useSelector((ReduxState: any) => ReduxState.auth);
  const getDoctorImage = () => {
    return (
      props.doctor?.image ??
      (props.doctor?.gender === "male" ? doctorMale : doctorFemale)
    );
  };

  const getHospitalImg = (hospitalObj: any) => {
    return hospitalObj?.image ?? hospitalimg;
  };

  const Capitalize = (str: String) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleBookingClick = (obj: any, type: any) => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      dispatch(
        updateDoctordetails({
          doctorDetails: { ...obj },
          consultationType: type,
          hospitalDetails: {},
          categoryType: "doctor",
          slot1: {},
          slot2: {},
        })
      );
      history.push("/doctor/bookingReview");
    }
  };

  const handleOPDBookingClick = (obj: any, hospitalDetailObj: any) => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      // vendor consultation cost passed to doctor obj
      let doctorObj = { ...obj };
      doctorObj.consultation_cost = hospitalDetailObj.consultation_cost;
      dispatch(
        updateDoctordetails({
          doctorDetails: { ...doctorObj },
          consultationType: "OPD",
          categoryType: "doctor",
          hospitalDetails: {
            vendorId: hospitalDetailObj?.id,
            image: hospitalDetailObj?.image,
            name: hospitalDetailObj?.name,
            address: hospitalDetailObj?.address,
          },
          slot1: {},
          slot2: {},
        })
      );
      setShowHospitalList(false);
      history.push("/doctor/bookingReview");
    }
  };
  const shownHospitalList = (doctorId: string) => {
    dispatch(getDoctorHospitalListAPI(doctorId));
    setShowHospitalList(true);
  };

  const instantConnect = async (doc: any) => {
    const docId = `${doc?.id}`;
    const userPhone = user?.phone;
    if (!docId) {
      toast.error("Doctor Id Not Available");
      return;
    }
    if (!userPhone) {
      toast.error("Please set your phone number in the dashboard");
      return;
    }

    const body = {
      doctorId: docId,
      phone: userPhone,
    };
    const res = await dispatch(instantConnectAPI(body));
    const resJson = JSON.parse(JSON.stringify(res));
    console.log("res : ", resJson);
    if (resJson.error) {
      toast.error(resJson?.error?.message);
    }
    if (resJson.payload.data.callResponse === "OK") {
      toast.success("Connected to Doctor");
    }
  };

  const makeCall = async () => {
    const number = user?.phone;
    const body = {
      number,
    };
    if (!number) {
      toast.error("Please set your phone number in the dashboard");
      return;
    }
    const res = await dispatch(makeCallAPI(body));
    const resJson = JSON.parse(JSON.stringify(res));
    console.log("res : ", resJson);
    if (resJson.error) {
      toast.error(resJson?.error?.message);
    }
    if (resJson?.payload?.success === true) {
      if (resJson?.payload?.data?.callDetails?.id) {
        toast.success("Connected to Doctor");
      } else {
        toast.success("Agent is currently busy");
      }
    }
  };
  return (
    <DoctorsListstyled>
      {props.doctor ? (
        <div className="doctors_listcontainer round-shadow">
          <div className="doctor_listitem">
            <div className="doctor_img">
              <img src={getDoctorImage()} alt="" />
            </div>
            <div className="doctor_info">
              <div className="doctor_column">
                <div className="doctor_name">{props.doctor?.name}</div>
                <div className="doctor_spec">
                  {props.doctor?.specialization ?? "General"}
                </div>
              </div>

              <div className="doctor_star">
                <div className="star_img">
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
                <div className="doctor_rating">
                  {props.doctor?.rating ?? "5.0"}
                </div>
              </div>

              <div className="doctor_data">
                <div className="doctor_data_lang">
                  <div className="doctor_data_lang_img">
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <rect
                        opacity="0.5"
                        width="11"
                        height="11"
                        fill="url(#pattern0_413_1707)"
                      />
                      <defs>
                        <pattern
                          id="pattern0_413_1707"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlinkHref="#image0_413_1707"
                            transform="scale(0.0111111)"
                          />
                        </pattern>
                        <image
                          id="image0_413_1707"
                          width="90"
                          height="90"
                          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAADzUlEQVR4nO2cTagOURiAH+Fe7nWVsvBvT9lYEWUhpfz/XIossPGbspCFutmwI0XJjhAhkZ0t1/UTC1JIshFJ3HvRFY5OHTmNM98388184z2f96l3M3Nm5j3PnfvOzDkzHyiKoiiKoiiKoiiKoiiWNmAH0AsMAkZADAK3ge3AyFb4M00E7gsQa2rEPWACkZ/J0iUbF3djPrN3CBBocsQ2IuWOAHkmR9iaHSUDAuSZHNFPpKR1SAJGcG4t1RkjOLeW6owRnFtLdcYIzk1EZ/Z5IS23f0YzOmOasB8VHUBF15GiZ3QTUdFCRZsmRFm5iUZFV4SKroiq/j07vX0PCcutEqrqzDRv3x+E5VYJVXVmtrfvJ8Jyq4S8nfnqtRmf4zirve2uFcyt6ISvnezYDbQjWPRTr82iHMc56m13oGBuZcUjYApCRR/z2lzKeIzhwGtvu7kFcytbdrtE0TO9Nj+ABRmOscnb5hUwLMM2PRWJtrELgaIt1xPi7Hshadh1b732e5Al2biXhkSKngS899o+TZE9MVHTnwOjhUmubMK3EdGWJcA3r/0bYDF/mAe88NZ/c8ukSc7a38IUOfCKhGwbN1xp+ekt+w5sFCxZpOgRwDhgKjAHOFWnA1b4XvcILlWySNGm5M5IkByl6HfAl4z7lCJZrOhPTuhj4CZwwr18OMvdI3e4i6Vd3udu74YalPzJDUIlo7/VRZdBVsl2XGVsyj66EuMuKrpAuaj3iH9VRYfJW5PXUZsNKrq45M/AGGrTVePC+1/W6J4GOh4qG9MDy66o6GK3cN38PW5ynr9ZH4toiW/8fw48SW5xt3X2ydSno6TP9ZpOrwCxJhEXA3leduvmB9ZdikH0dgFiTSLWBj7R+/2AcijQh+4YRLe5jyWNkBh05cBnYWLqKUlnCeWjEia4jyWNgLgQyO9IYjQwNKF6IQbRuC9S7XjFrX98gVwdyO1Zos3WQJs1sYguE9NgDATKhi0LhxNhpSbpKHiCRIlpMM4VPK69z1bR1JewsqDoVSqaupL7M8yQ12OUG7/W0kG+sjEDOJkS+1Nkn1XR1DzTlgekHazRfihldM/uR89o8pWNB3Wk2emyJPY9uo9610FQ2JmUhyj/3ZBQHE8pH6dVNEFhywKyNmeQ9TJF9FIVTVDYx8Asd9aJ19AMuZYO5EaUmAgjSkyEESUmwogSE2FEyYAAcXnCjo9ESZ8AeeK+YWkGuwXIyxM7iZR2N4lqIoiHboI6WqZEINtKnkwL0O4+luwVdIEccD8kuzP2M1lRFEVRFEVRFEVRFIWS+AWp+GPF4K32oQAAAABJRU5ErkJggg=="
                        />
                      </defs>
                    </svg>
                  </div>
                  <div className="doctor_data_text">
                    Languages : {props.doctor?.languages ?? "English"}
                  </div>
                </div>
                <div className="doctor_data_exp">
                  <div className="doc_exp">
                    <div className="doctor_data_exp_img">
                      <svg
                        width="9"
                        height="9"
                        viewBox="0 0 9 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <rect
                          opacity="0.5"
                          width="9"
                          height="9"
                          fill="url(#pattern0_413_1704)"
                        />
                        <defs>
                          <pattern
                            id="pattern0_413_1704"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                          >
                            <use
                              xlinkHref="#image0_413_1704"
                              transform="scale(0.0111111)"
                            />
                          </pattern>
                          <image
                            id="image0_413_1704"
                            width="90"
                            height="90"
                            xlinkHref="data:image/png;base64,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"
                          />
                        </defs>
                      </svg>
                    </div>
                    <div className="doctor_data_text">
                      {props.doctor?.work_experience_years ?? "1"}+ Years
                      Experience
                    </div>
                  </div>
                  <div className="doctor_data_lang">
                    <div className="doctor_data_genderimg">
                      {props.doctor?.gender?.toLowerCase() === "male" ? (
                        <BsGenderMale />
                      ) : (
                        <BsGenderFemale />
                      )}
                    </div>
                    <div className="doctor_data_text">
                      {Capitalize(props.doctor?.gender ?? "male")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="doctor_bottom_data">
            <div className="doctor_action_btns">
              {props.doctor?.virtual_consultation_cost ? (
                <button
                  className="doctor_action_btn round-shadow"
                  onClick={() => handleBookingClick(props.doctor, "VIRTUAL")}
                >
                  <div className="doctor_action_btncontent">
                    <div className="doctor_action_btniconaudio">
                      <Audio />
                    </div>
                    <div className="doctor_action_btndata">
                      <div className="doctor_action_btntxt opacity_7">
                        Audio & Video
                      </div>
                      <div className="doctor_action_btntxt just opacity_5">
                        Just Rs.{props.doctor?.virtual_consultation_cost}
                      </div>
                    </div>
                  </div>
                </button>
              ) : null}

              {props.doctor?.type === "both" ? (
                <button
                  className="doctor_action_btn round-shadow"
                  onClick={() => shownHospitalList(props.doctor?.id)}
                >
                  <div className="doctor_action_btncontent">
                    <div className="doctor_action_btniconcall">
                      <Consult />
                    </div>
                    <div className="doctor_action_btndata">
                      <div className="doctor_action_btntxt opacity_7">
                        Consult at OPD
                      </div>
                      <div className="doctor_action_btntxt just opacity_5">
                        Just Rs.{props.doctor?.consultation_cost ?? "500"}
                      </div>
                    </div>
                  </div>
                </button>
              ) : null}

              {props.doctor?.chat_consultation_cost ? (
                <button
                  className="doctor_action_btn round-shadow"
                  // onClick={() => handleBookingClick(props.doctor, "CHAT")}
                  onClick={() =>
                    window.open("https://wa.me/919555166000?text=Hi")
                  }
                >
                  <div className="doctor_action_btncontent">
                    <div className="doctor_action_btniconchat">
                      <Chat />
                    </div>
                    <div className="doctor_action_btndata flex-col justify-start items-start inline-flex">
                      <div className="doctor_action_btntxt opacity_7">
                        Chat & Resolve
                      </div>
                      <div className="doctor_action_btntxt just opacity_5">
                        Just Rs.{props.doctor?.chat_consultation_cost}
                      </div>
                    </div>
                  </div>
                </button>
              ) : null}
            </div>

            {props.doctor?.available_in_90 ? (
              <div className="doctor_action_instantcall mt-[.938rem] lg:mt-[1.875rem] w-full text-center">
                <button
                  className="doctor_action_instantbtn round-shadow"
                  // onClick={() => instantConnect(props?.doctor)}
                  // onClick={makeCall}
                  onClick={() =>
                    handleBookingClick(props?.doctor, "VIRTUAL_INSTANT")
                  }
                >
                  Instant Connect For 90 Sec
                </button>
              </div>
            ) : null}
          </div>

          {showHospitalList &&
            doctorHospitalsList &&
            doctorHospitalsList?.vendors && (
              <div className="doctor_hospitallist">
                <hr className="doctor_hospitalline" />

                {doctorHospitalsList?.vendors.length > 0 && (
                  <div className="doctor_hospitals inlineflex_start">
                    {doctorHospitalsList?.vendors.map((hospitalDetail: any) => {
                      return (
                        <div className="doctor_hospitalitem flex_center round-shadow">
                          <div className="doctor_hospitalimg">
                            <img src={getHospitalImg(hospitalDetail)} alt="" />
                          </div>
                          <div className="doctor_hospitaldetails flex_center">
                            <div className="doctor_hospitaldetail inlineflex_start">
                              <div className="doctor_hospitalname poppins-medium">
                                {hospitalDetail.name}
                              </div>
                              <div className="doctor_hospitaladdress poppins-regular">
                                {hospitalDetail.address}
                              </div>
                            </div>
                            <div className="doctor_hospitalaction">
                              <button
                                className="doctor_hospitalbtn poppins-regular"
                                onClick={() =>
                                  handleOPDBookingClick(
                                    props.doctor,
                                    hospitalDetail
                                  )
                                }
                              >
                                Select Center
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
                {doctorHospitalsList?.vendors.length === 0 && (
                  <div className="doctor_hospitals inlineflex_start">
                    <div className="doctor_hospitalitem flex_center round-shadow">
                      <div className="doctor_hospitalerror poppins-medium">
                        No OPD hospital lists are offered Now!
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
        </div>
      ) : null}
    </DoctorsListstyled>
  );
};

export default VirtualDoctorsList;
