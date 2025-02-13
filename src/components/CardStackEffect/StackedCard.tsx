import React, { useRef } from "react";
import { useTransform, useScroll, motion } from "framer-motion";
import DoctorCardModule from "../../pages/Doctor/DoctorCardModule";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateShowLoginModel } from "../../redux/slices/auth/authSlice";

const StackedCard = ({
  i,
  origin,
  item,
  color,
  progress,
  range,
  targetScale,
}: any) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  const DoctorBookingReviewProp = (obj: any, type: any) => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      history.push(`/doctor/doctordetails/${obj?.id}`);
    }
  };

  const DoctorChat = () => {
    history.push("/chat");
  };

  const DoctorBookConsultProp = (obj: any) => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      history.push(`/doctor/doctordetails/${obj?.id}`);
    }
  };

  return (
    <div className="cardContainer">
      <motion.div
        className=""
        style={{
          backgroundColor: color,
          //   scale: scale,
          //   width: `${(scale as any) * 100}%`,
          position: "relative",
        //   top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        {origin === "doctorsList" && (
          <DoctorCardModule
            key={i}
            appointment={{
              id: item?.id,
              name: item?.name,
              department: item?.specialization,
              experience: item?.work_experience_years,
              languages: item?.languages,
              education: item?.highest_education,
              inClinicFee: item?.name,
              videoConsultFee: item?.minutes_before_virtual,
              gender: item?.gender,
              consultantType: item?.name,
              specialization: item?.specialization,
              slots: item?.name,
              rating: item?.rating,
              image: item?.image,
              availableIn90: item?.availableIn90,
              doctoreType: item?.type,
            }}
            DoctorBookingReviewProp={DoctorBookingReviewProp}
            DoctorChatProp={DoctorChat}
            DoctorBookConsultProp={DoctorBookConsultProp}
          />
        )}
      </motion.div>
    </div>
  );
};

export default StackedCard;
