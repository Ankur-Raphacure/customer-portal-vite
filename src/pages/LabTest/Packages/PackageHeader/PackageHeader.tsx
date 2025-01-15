import { PackageheaderStyled } from "./PackageHeader.styled";
import vendorimg from "../../../../assets/images/doctor/hospital_placeholder.png";
import { ReactComponent as Adderess } from "../../../../assets/icons/address.svg";
import { ReactComponent as Stars } from "../../../../assets/icons/stars.svg";
import { ReactComponent as Stroke } from "../../../../assets/icons/stroke.svg";
import { ReactComponent as Share } from "../../../../assets/icons/share.svg";
import { ReactComponent as Map } from "../../../../assets/icons/map.svg";

const PackageHeader = (props: any) => {
  const getPackageImage = () => {
    return props.vendor?.image ?? vendorimg;
  };

  const checkTimes = (startTime: any, endTime: any) => {
    if (startTime && endTime) {
      startTime = startTime.split(":");
      endTime = endTime.split(":");
      let currentdate = new Date();
      let startdate = new Date(
        currentdate.getFullYear(),
        currentdate.getMonth(),
        currentdate.getDate(),
        ...startTime
      );
      let enddate = new Date(
        currentdate.getFullYear(),
        currentdate.getMonth(),
        currentdate.getDate(),
        ...endTime
      );

      return startdate < currentdate && enddate > currentdate
        ? "Open now"
        : "Closed now";
    } else {
      return "Open now";
    }
  };

  const formatTime = (time: any) => {
    if (time) {
      time = time.split(":");
      let todaydate = new Date();
      let returndate = new Date(
        todaydate.getFullYear(),
        todaydate.getMonth(),
        todaydate.getDate(),
        ...time
      );
      return returndate.toLocaleTimeString("en-us", {
        hour: "2-digit",
        minute: "2-digit",
      });
    } else {
      return null;
    }
  };

  return (
    <PackageheaderStyled>
      {props.vendor ? (
        <div className="package_item flex_center round-shadow W-100 opactiy-70">
          <div className="package_img">
            <img src={getPackageImage()} alt="" />
          </div>
          
          <div className="package_datalist flex-col inlineflex_start">
            <div className="package_data flex-col flex_start">
              <div className="package_title">
                <div className="opactiy-98 text-lg poppins-semibold">
                  {props.vendor?.name}
                </div>
                <div className="opacity-50 text-sm poppins-medium">
                  {props.vendor?.description ?? "Diagnostic"}
                </div>
              </div>
              <div className="inlineflex_center package_address">
                <div className="address_icon">
                  <Adderess />
                </div>
                <div className="opacity-60 text-sm poppins-medium">
                  {props.vendor?.address ?? props.vendor?.city}
                </div>
              </div>

              <div className="package_ratingbox inlineflex_center">
                <div className="hosptial_rating flex_center">
                  <div className="star_icon">
                    <Stars />
                  </div>
                  <div className="stroke_icon">
                    <Stroke />
                  </div>
                </div>
                <div className="opacity-70 text-sm poppins-regular">
                  {props.vendor?.rating ?? 4.8} Ratings
                </div>
              </div>

              <div className="inlineflex_center package_opentime gap-[11px]">
                <div className="opacity-70 text-sm text-violet poppins-medium">
                  {checkTimes(
                    props.vendor?.slot_start_time,
                    props.vendor?.slot_end_time
                  )}{" "}
                </div>
                <div className="opacity-70 text-sm poppins-medium">
                  {formatTime(props.vendor?.slot_start_time) ?? "7:00 AM"} To{" "}
                  {formatTime(props.vendor?.slot_end_time) ?? "9:00 PM"}
                </div>
              </div>
            </div>

            <div className="inlineflex_center package_helpbox">
              <div className="flex_center package_helpdata">
                <div className="inlineflex_start package_helpitem">
                  <div className="package_itemdata inlineflex_center">
                    <div className="package_helpimg inlineflex_start flex-col">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_700_1487)">
                          <path
                            d="M0.277402 6.422C0.277098 7.51425 0.564723 8.58075 1.11164 9.52078L0.225098 12.7326L3.53766 11.8708C4.45387 12.3657 5.48042 12.625 6.5236 12.6251H6.52634C9.97007 12.6251 12.7733 9.84452 12.7748 6.42688C12.7755 4.7708 12.1261 3.21352 10.9462 2.0419C9.76659 0.870392 8.1977 0.224877 6.52609 0.224121C3.08195 0.224121 0.278875 3.00451 0.277453 6.422"
                            fill="url(#paint0_linear_700_1487)"
                          />
                          <path
                            d="M0.0543359 6.42019C0.0539805 7.55174 0.351914 8.65639 0.918328 9.63008L0 12.957L3.43134 12.0643C4.37679 12.5758 5.44126 12.8455 6.52443 12.8459H6.52722C10.0945 12.8459 12.9985 9.96531 13 6.42533C13.0006 4.70973 12.3279 3.09647 11.1059 1.88288C9.88371 0.66945 8.25871 0.000705426 6.52722 0C2.95933 0 0.0557578 2.88016 0.0543359 6.42019ZM2.09782 9.46239L1.9697 9.26059C1.43112 8.41085 1.14684 7.4289 1.14725 6.42059C1.14837 3.47821 3.5617 1.08434 6.52925 1.08434C7.96636 1.08495 9.31694 1.64082 10.3328 2.64938C11.3485 3.65804 11.9075 4.99885 11.9071 6.42492C11.9058 9.36731 9.49244 11.7615 6.52722 11.7615H6.52509C5.55958 11.761 4.61266 11.5037 3.78686 11.0175L3.59034 10.9019L1.55411 11.4316L2.09782 9.46239Z"
                            fill="url(#paint1_linear_700_1487)"
                          />
                          <path
                            d="M4.90943 3.7361C4.78827 3.46889 4.66076 3.4635 4.54553 3.45881C4.45118 3.45478 4.34332 3.45508 4.23556 3.45508C4.1277 3.45508 3.95246 3.49534 3.80433 3.65583C3.65605 3.81646 3.23822 4.20465 3.23822 4.99417C3.23822 5.78375 3.81779 6.54677 3.89858 6.65394C3.97947 6.76091 5.01744 8.43297 6.66133 9.07622C8.02755 9.61079 8.30558 9.50447 8.60209 9.47766C8.89865 9.45095 9.55901 9.08958 9.69374 8.71484C9.82856 8.34016 9.82856 8.01899 9.78814 7.95187C9.74772 7.88501 9.63986 7.84485 9.47812 7.76463C9.31633 7.68437 8.5212 7.29613 8.37297 7.24257C8.22468 7.18906 8.11688 7.16235 8.00902 7.32304C7.90116 7.48347 7.59144 7.84485 7.49704 7.95187C7.40274 8.05915 7.30834 8.0725 7.14665 7.99223C6.98481 7.91172 6.46395 7.74246 5.84599 7.19581C5.36519 6.77044 5.0406 6.24515 4.94625 6.08446C4.8519 5.92403 4.93614 5.83706 5.01724 5.75709C5.08991 5.68519 5.17903 5.5697 5.25997 5.47603C5.34061 5.38231 5.36753 5.31544 5.42146 5.20842C5.47544 5.1013 5.44842 5.00758 5.40805 4.92731C5.36753 4.84704 5.05324 4.05339 4.90943 3.7361Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_700_1487"
                            x1="627.711"
                            y1="1251.07"
                            x2="627.711"
                            y2="0.224121"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#1FAF38" />
                            <stop offset="1" stopColor="#60D669" />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_700_1487"
                            x1="650"
                            y1="1295.7"
                            x2="650"
                            y2="0"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#F9F9F9" />
                            <stop offset="1" stopColor="white" />
                          </linearGradient>
                          <clipPath id="clip0_700_1487">
                            <rect width="13" height="13" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="opacity-80 text-sm poppins-medium">
                      Need Help?
                    </div>
                  </div>
                </div>
                <div className="opacity-60 package_share flex_center flex">
                  <div className="share_icon">
                    <Share />
                  </div>
                  <div className="text-black text-sm poppins-medium">
                    Share{" "}
                  </div>
                </div>
              </div>
              <div className="flex_center package_map">
                <div className="map_icon">
                  <Map />
                </div>
                <div className="opacity-70 text-sm poppins-medium">
                  View In Map
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </PackageheaderStyled>
  );
};

export default PackageHeader;
