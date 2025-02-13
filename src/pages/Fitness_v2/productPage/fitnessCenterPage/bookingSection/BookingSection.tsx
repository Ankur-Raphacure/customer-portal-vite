import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import { updateShowLoginModel } from "../../../../../redux/slices/auth/authSlice";
import { updateDoctordetails } from "../../../../../redux/slices/bookingScreen/bookingScreenSlice";
import { Link, useHistory } from "react-router-dom";
import { DatePicker } from "antd";
import { toast } from "react-toastify";

const StyledCard = styled.div`
  background: #fef9e7;
  padding: 20px;
  border-radius: 16px;
  text-align: left;
  font-family: Arial, sans-serif;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  position: sticky;
  top: 110px;
  min-height: 400px;

  .date-div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .header {
    display: flex;
    font-size: 14px;
    font-weight: bold;
    color: #333;
    justify-content: center;
    gap: 10px;
    align-items: center;
  }
  .header p {
    margin: 0;
    font-size: 14px;
  }

  .fire-icon {
    color: #ff5733;
    margin-right: 8px;
  }

  select {
    width: 100%;
    padding: 8px;
    border-radius: 20px;
    border: 1px solid #ccc;
    height: 50px;
  }

  h3 {
    font-size: 16px;
    font-weight: bold;
    margin: 10px 0;
  }

  p {
    font-size: 13px;
    color: #666;
    line-height: 1.4;
  }

  .price {
    font-size: 16px;
    font-weight: bold;
    margin: 10px 0;
  }

  .book-now-btn-div {
    display: flex;
    justify-content: center;
  }

  .booking-select {
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  .booking-select-div {
    position: relative;
    margin: 12px 0;
  }
  .dropdown-icon-select {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
  .price-cut {
    text-decoration: line-through;
    color: #666;
    text-size: 14px;
  }
  .booking-tab-break-line {
    height: 1px;
    background-color: white;
    border: none;
    margin: 10px -20px 20px -20px;
    opacity: 1;
  }
  .book-now-link-btn {
    text-decoration: none;
    width: 100%;
    padding: 12px;
    background: rgb(37, 43, 97);
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 24px;
    cursor: pointer;
    margin-top: 10px;
    text-align: center;

    &:hover {
      background: #1a1a48;
    }
  }
  .btn-disabled {
    cursor: not-allowed;
  }
`;

const BookingCard = ({
  SelectedFitnessCenter,
  selectedPackage,
  setSelectedPackage,
}: any) => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setSelectedPackage(SelectedFitnessCenter?.packages?.[0]?.service_code);
  }, [SelectedFitnessCenter, setSelectedPackage]);

  const [selectedDate, setSelectedDate] = useState(null) as any;

  const selectedPackageData = SelectedFitnessCenter?.packages?.find(
    (item: any) => {
      return item?.service_code === selectedPackage;
    }
  );

  const dateRef = useRef(null) as any;

  // const { user } = useSelector((store: RootState) => store.auth);

  // const handleBookNow = async () => {
  //   const vendor = {
  //     address: SelectedFitnessCenter?.vendor?.address,
  //     city: SelectedFitnessCenter?.vendor?.city,
  //     id: SelectedFitnessCenter?.vendor?.id,
  //     image: SelectedFitnessCenter?.images?.find(
  //       (item: any) => item?.length > 0
  //     ),
  //     name: SelectedFitnessCenter?.vendor?.name,
  //     state: SelectedFitnessCenter?.vendor?.state,
  //     type: "gym",
  //     zip: SelectedFitnessCenter?.vendor?.zip,
  //   };
  //   const test = {
  //     visit_type: selectedPackage?.visit_type,
  //     service_name: selectedPackage?.service_name,
  //     service_code: selectedPackage?.service_code,
  //     price: selectedPackage?.price,
  //     preperation: selectedPackage?.preperation,
  //     image: selectedPackage?.image?.find((item: any) => item?.length > 0),
  //     description: selectedPackage?.description,
  //   };
  //   console.log("selected", SelectedFitnessCenter);
  //   console.log("pack", selectedPackage);
  //   if (!user?.id) {
  //     dispatch(updateShowLoginModel(true));
  //   } else {
  //     await dispatch(
  //       updateDoctordetails({
  //         doctorDetails: test,
  //         hospitalDetails: vendor,
  //         categoryType: "gym",
  //         slot1: {},
  //         slot2: {},
  //       })
  //     );
  //     history.push(`/gym/bookingReview`);
  //   }
  // };

  return (
    <StyledCard>
      <div>
        <div className="header">
          <svg
            width="16"
            height="22"
            viewBox="0 0 16 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="8.60039"
              cy="14.1014"
              rx="5.7"
              ry="5.70047"
              fill="#92BDF6"
            />
            <path
              d="M7.46935 21.8157C7.08059 21.7474 6.68328 21.709 6.2988 21.6065C3.31262 20.8125 1.43718 18.9085 0.693835 15.9202C0.369157 14.6224 0.49732 13.3075 0.749372 12.0097C1.19794 9.71726 2.15916 7.62969 3.35961 5.64886C4.53443 3.71071 5.90577 1.92198 7.46507 0.278398C7.62314 0.111906 7.79829 -0.0118967 8.03753 0.000910417C8.37502 0.0179866 8.63135 0.282668 8.64417 0.649805C8.65698 0.905948 8.64844 1.16209 8.64844 1.41823C8.64844 2.92521 8.64417 4.42791 8.64844 5.93488C8.64844 6.6905 9.09701 7.24975 9.8019 7.38636C10.6478 7.54858 11.4296 6.9253 11.4723 6.05442C11.4936 5.61044 11.7628 5.34149 12.1644 5.3671C12.378 5.37991 12.5446 5.48237 12.6556 5.66166C13.9843 7.86876 15.0266 10.1826 15.3855 12.7611C15.5948 14.2595 15.5564 15.7451 14.9369 17.1539C13.7407 19.8733 11.656 21.4272 8.69543 21.7858C8.63989 21.7944 8.58436 21.8115 8.52882 21.82C8.17851 21.8157 7.82393 21.8157 7.46935 21.8157ZM7.32837 14.7889C7.28565 14.7377 7.23865 14.6736 7.18312 14.6181C6.75591 14.1912 6.33297 13.76 5.90149 13.3374C5.61526 13.0557 5.24787 13.0428 4.97018 13.3161C4.48317 13.7899 4.00042 14.2766 3.52195 14.7633C3.35107 14.9383 3.28698 15.1518 3.35961 15.3908C3.50059 15.869 4.06023 16.0141 4.4319 15.6598C4.76512 15.3439 5.08125 15.0109 5.41448 14.6736C5.48283 14.7377 5.53409 14.7846 5.58536 14.8316C5.98693 15.2329 6.38851 15.6342 6.79009 16.0354C7.20448 16.4495 7.52061 16.4495 7.93927 16.0269C8.89195 15.0749 9.84889 14.1186 10.8016 13.1666C10.8528 13.1154 10.9084 13.0642 11.0024 12.9745C11.0024 13.3972 10.9981 13.7643 11.0024 14.1315C11.0066 14.5199 11.2672 14.7932 11.6261 14.7974C11.9892 14.8017 12.2712 14.5327 12.2754 14.1528C12.284 13.252 12.284 12.3513 12.2754 11.4462C12.2712 11.0748 12.0148 10.7931 11.656 10.7888C10.7247 10.7802 9.79335 10.776 8.86204 10.7888C8.51173 10.7931 8.25113 11.0919 8.25541 11.4334C8.25968 11.7749 8.52455 12.0482 8.87913 12.0567C9.21235 12.0652 9.54557 12.061 9.87879 12.061C9.93006 12.061 9.98132 12.0695 10.0283 12.078C9.13973 12.9831 8.25114 13.871 7.32837 14.7889Z"
              fill="url(#paint0_linear_5001_6112)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_5001_6112"
                x1="8.00441"
                y1="2.68654"
                x2="8.00441"
                y2="20.507"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#252B61" />
                <stop offset="1" stop-color="#4C58C7" />
              </linearGradient>
            </defs>
          </svg>
          <p>350 People Ordered Recently</p>
        </div>

        <hr className="booking-tab-break-line" />

        {/* Dropdown */}
        <div className="booking-select-div">
          <select
            className="booking-select"
            value={selectedPackage}
            onChange={(e) => setSelectedPackage(e.target.value)}
          >
            {SelectedFitnessCenter?.packages?.map((item: any, i: number) => (
              <option key={item?.service_code || i} value={item?.service_code}>
                {item?.service_name}
              </option>
            ))}
          </select>
          <FaChevronDown className="dropdown-icon-select" />
        </div>

        {/* Description */}
        <div>
          <h3>Description</h3>
          {selectedPackageData?.description ? (
            <div
              dangerouslySetInnerHTML={{
                __html: selectedPackageData?.description,
              }}
            />
          ) : (
            <p>No description available.</p>
          )}
        </div>

        {/* Price & Button */}
        <div>
          <p className="price-cut">
            MRP.{selectedPackageData?.price?.actual_cost}
          </p>
          <p className="price">
            MRP:{selectedPackageData?.price?.discounted_price}
          </p>
        </div>
        <div className="date-div">
          <label>Select Date</label>
          <DatePicker
            ref={dateRef}
            onChange={(date: any) => setSelectedDate(date)}
          />
        </div>
        <div className="book-now-btn-div">
          {selectedDate ? (
            <Link
              className="book-now-link-btn"
              to={{
                pathname: `/fitnessCenters/bookingConformation/${SelectedFitnessCenter?.id}/${selectedPackageData?.service_code}`,
                state: {
                  selectedFitnessCenter: SelectedFitnessCenter,
                  selectedDate: JSON.stringify(selectedDate),
                },
              }}
            >
              Book Now
            </Link>
          ) : (
            <button
              onClick={() => {
                toast.error("please select a date");
                dateRef?.current?.focus()
              }}
              className="book-now-link-btn btn-disabled"
            >
              Book Now
            </button>
          )}
        </div>
      </div>
    </StyledCard>
  );
};

export default BookingCard;
