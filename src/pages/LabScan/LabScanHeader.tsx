import { LabScanHeaderStyled } from "./LabScanHeader.styled";
import HArticle_3 from "../../assets/images/healtharticle/Article-1.png";

const LabScanHeader = (props: any) => {
  return (
    <LabScanHeaderStyled>
      <div className="hospital_item flex_center round-shadow W-100 opactiy-70">
        <div className="hospital_img">
          <img src={HArticle_3} alt="" />
        </div>
        <div className="hospital_datalist flex-col inlineflex_start">
          <div className="hospital_data flex-col flex_start">
            <div className="opactiy-95 text-lg poppins-medium">Bioline</div>
            <p>Lucid Diagnostics, Lucid Diagnostic Center </p>

            <div className="inlineflex_center hospital_address">
              <div className="address_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="15"
                  viewBox="0 0 10 15"
                  fill="none"
                >
                  <path
                    opacity="0.6"
                    d="M5 7.15C4.5264 7.15 4.0722 6.96563 3.73731 6.63744C3.40242 6.30925 3.21429 5.86413 3.21429 5.4C3.21429 4.93587 3.40242 4.49075 3.73731 4.16256C4.0722 3.83437 4.5264 3.65 5 3.65C5.4736 3.65 5.9278 3.83437 6.26269 4.16256C6.59758 4.49075 6.78571 4.93587 6.78571 5.4C6.78571 5.62981 6.73953 5.85738 6.64979 6.0697C6.56004 6.28202 6.42851 6.47493 6.26269 6.63744C6.09687 6.79994 5.90002 6.92884 5.68336 7.01679C5.46671 7.10473 5.2345 7.15 5 7.15ZM5 0.5C3.67392 0.5 2.40215 1.01625 1.46447 1.93518C0.526784 2.8541 0 4.10044 0 5.4C0 9.075 5 14.5 5 14.5C5 14.5 10 9.075 10 5.4C10 4.10044 9.47322 2.8541 8.53553 1.93518C7.59785 1.01625 6.32608 0.5 5 0.5Z"
                    fill="#444444"
                  />
                </svg>
              </div>
              <div className="opacity-60 text-sm poppins-medium">
                Hsr Layout 1st main road[1km Away]
              </div>
            </div>

            <div className="hospital_ratingbox inlineflex_center">
              <div className="hosptial_rating flex_center">
                <div className="star_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="91"
                    height="15"
                    viewBox="0 0 91 15"
                    fill="none"
                  >
                    <path
                      d="M2.86875 14.5L4.0875 9.32368L0 5.84211L5.4 5.38158L7.5 0.5L9.6 5.38158L15 5.84211L10.9125 9.32368L12.1312 14.5L7.5 11.7553L2.86875 14.5Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M21.8687 14.5L23.0875 9.32368L19 5.84211L24.4 5.38158L26.5 0.5L28.6 5.38158L34 5.84211L29.9125 9.32368L31.1312 14.5L26.5 11.7553L21.8687 14.5Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M40.8687 14.5L42.0875 9.32368L38 5.84211L43.4 5.38158L45.5 0.5L47.6 5.38158L53 5.84211L48.9125 9.32368L50.1312 14.5L45.5 11.7553L40.8687 14.5Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M59.8687 14.5L61.0875 9.32368L57 5.84211L62.4 5.38158L64.5 0.5L66.6 5.38158L72 5.84211L67.9125 9.32368L69.1312 14.5L64.5 11.7553L59.8687 14.5Z"
                      fill="#FBBC04"
                    />
                    <path
                      opacity="0.5"
                      d="M78.8687 14.5L80.0875 9.32368L76 5.84211L81.4 5.38158L83.5 0.5L85.6 5.38158L91 5.84211L86.9125 9.32368L88.1312 14.5L83.5 11.7553L78.8687 14.5Z"
                      fill="#FBBC04"
                    />
                  </svg>
                </div>
                <div className="stroke_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="19"
                    viewBox="0 0 2 19"
                    fill="none"
                  >
                    <path opacity="0.1" d="M1 0.75V18.25" stroke="black" />
                  </svg>
                </div>
              </div>
              <div className="opacity-70 text-sm poppins-regular">
                {props.hospital?.rating} Ratings
              </div>
            </div>

            <div className="inlineflex_center hospital_opentime gap-[11px]">
              <div className="opacity-70 text-sm text-violet poppins-medium">
                Open now{" "}
              </div>
              <div className="opacity-70 text-sm poppins-medium">
                7.00 AM To 9.00 PM
              </div>
            </div>
          </div>

          <div className="inlineflex_center hospital_helpbox">
            <div className="flex_center hospital_helpdata">
              <div className="inlineflex_start hospital_helpitem">
                <div className="hospital_itemdata inlineflex_center">
                  <div className="hospital_helpimg inlineflex_start flex-col">
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
              <div className="opacity-60 hospital_share flex_center flex">
                <div className="share_icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="15"
                    viewBox="0 0 18 15"
                    fill="none"
                  >
                    <path
                      d="M18 7L11 0V4C4 5 1 10 0 15C2.5 11.5 6 9.9 11 9.9V14L18 7Z"
                      fill="#444444"
                    />
                  </svg>
                </div>
                <div className="text-black text-sm poppins-medium">Share </div>
              </div>
            </div>
            <div className="flex_center hospital_map">
              <div className="map_icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="15"
                  viewBox="0 0 17 15"
                  fill="none"
                >
                  <path
                    opacity="0.7"
                    d="M10.45 9.45H13.05L15 14H2L3.95 9.45H6.55M9.15 4.9C9.15 5.07239 9.08152 5.23772 8.95962 5.35962C8.83772 5.48152 8.67239 5.55 8.5 5.55C8.32761 5.55 8.16228 5.48152 8.04038 5.35962C7.91848 5.23772 7.85 5.07239 7.85 4.9C7.85 4.72761 7.91848 4.56228 8.04038 4.44038C8.16228 4.31848 8.32761 4.25 8.5 4.25C8.67239 4.25 8.83772 4.31848 8.95962 4.44038C9.08152 4.56228 9.15 4.72761 9.15 4.9ZM4.6 4.9C4.6 8.15 8.5 11.4 8.5 11.4C8.5 11.4 12.4 8.15 12.4 4.9C12.4 2.67895 10.6541 1 8.5 1C6.3459 1 4.6 2.67895 4.6 4.9Z"
                    stroke="#444444"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="opacity-70 text-sm poppins-medium">
                View In Map
              </div>
            </div>
          </div>
        </div>
      </div>
    </LabScanHeaderStyled>
  );
};

export default LabScanHeader;
