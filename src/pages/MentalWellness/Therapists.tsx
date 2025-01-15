import React from "react";
import { useHistory } from "react-router-dom";
import Clinic from "../../assets/images/hos.jpg";

let doctorMale =
  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338140063.png";
let doctorFemale =
  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736338333932.png";

const Therapists = (props: any) => {
  const history = useHistory();
  const data = props.doctorsList;
  const physiotherapistDoctors = props?.doctorsList?.filter(
    (doctor: any) => doctor?.specialization === "Physiotherapist"
  );
  const defaultImage =
    props.doctor?.gender === "male" ? doctorMale : doctorFemale;

  return (
    <div className="clinics-container">
      {data?.slice(0, 3)?.map((clinic: any) => (
        <div
          key={clinic.id}
          className="clinic-card"
          onClick={() => history.push(`/hospital/${clinic.id}`)}
        >
          <div className="clinic-header">
            <img
              src={clinic?.image ? clinic?.image : defaultImage}
              alt={clinic.name}
              className="clinic-image"
            />
            <div className="clinic-info">
              <h3 className="clinic-name">{clinic.name}</h3>
              <p className="clinic-specialization">{clinic.specialization}</p>
              <div className="clinic-rating">
                <span className="star">⭐</span> {clinic.rating}
              </div>
              <div className="clinic-details">
                <p className="clinic-experience me-4">
                  {clinic.work_experience_years}
                  <span>+ Years Experience</span>
                </p>
                <p className="clinic-languages">{clinic?.languages}</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="clinic-footer">
            <div className="clinic-location">
              <div className="add">
                <p className="clinic-address">{clinic.city}</p>
                <p className="clinic-name">{clinic.clinicName}</p>
              </div>

              <p className="clinic-fee">
                ₹ {""}
                {clinic?.virtual_consultation_cost
                  ? clinic?.virtual_consultation_cost
                  : 0}{" "}
                Consultation Fee
              </p>
              <p className="clinic-next-available">
                Next Available at {clinic.nextAvailable}
                <div className="opacity-70 text-sm poppins-medium">
                  {clinic?.slot_start_time?.slice(0, 5) ?? ""} To{" "}
                  {clinic?.slot_end_time?.slice(0, 5) ?? ""}
                </div>
              </p>
            </div>
            <button
              className="clinic-book-btn"
              onClick={() => history.push(`/hospital/${clinic.hospital?.id}`)}
            >
              Book Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Therapists;
