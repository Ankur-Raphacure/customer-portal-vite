import React, { useEffect} from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { geteyecareNearClinicAPI } from "../../redux/slices/generic/genericService";

const NearClinic = (props: any) => {
  const { showAll } = props;
  const history = useHistory();
  const dispatch = useDispatch();

  const { alleyecareNearClinic } = useSelector(
    (ReduxState: any) => ReduxState.generic
  );
  const { userCity } = useSelector((ReduxState: any) => ReduxState.auth);

  const getLatestData = (city = "") => {
    dispatch(geteyecareNearClinicAPI({ city: city?.toLowerCase() }));
  };

  useEffect(() => {
    getLatestData(userCity?.name);
  }, [userCity?.name]);
  const showCount = showAll ? 150 : 6;
  return (
    <>
      <div className="clinics-container">
        {alleyecareNearClinic?.vendors
          ?.slice(0, showCount)
          ?.map((clinic: any, index: any) => (
            <div
              key={index}
              className="clinic-card"
              onClick={() => history.push(`/hospital/${clinic?.id}`)}
            >
              <div className="clinic-image">
                <img
                  src={clinic?.image ? clinic.image : "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736334781035.png"}
                  alt={clinic.name}
                  className="clinic-placeholder"
                />
              </div>
              <div className="clinic-info">
                <h3 className="clinic-name">{clinic?.name}</h3>
                <p className="clinic-specializations">{clinic?.type}</p>
                <div className="clinic-rating">
                  <span className="star">⭐</span> {clinic?.rating}
                </div>
              </div>
              <hr />
              <div className="clinic-details">
                <p className="clinic-address">
                  {clinic?.address} {clinic?.city}
                </p>
                <p className="clinic-fee">
                  Average Consultation Fee ₹{clinic?.price}
                </p>
                <p className="clinic-distance">{clinic.distance}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default NearClinic;
