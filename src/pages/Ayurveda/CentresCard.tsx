import React from "react";
import { CentresCardStyled } from "./CentresCard.styled";
import CentresImage from "../../assets/images/ayurveda/ayurvedan_img.png";
import { useHistory } from "react-router-dom";

const CentresCard = (props: any) => {
  const history = useHistory();
  const { item, mostOrdersSection } = props;

  const navigateTo = (url: string) => {
    history.push(url);
  };

  return (
    <CentresCardStyled>
      <div>
        <div className="near-you-item">
          <div className=" cardstyle px-2 py-2 flex  flex-col">
            <div className="relative imgspace">
              <img
                src={item?.image ? item.image : CentresImage}
                alt="Health360"
                className="w-full h-full object-cover rounded-t-xl w-xl"
              />
            </div>
            <div className=" heading-name-rating flex flex-col mt-1">
              <div>
                <div className="">
                  <h3 className="float-left1 text-sm heading text-bold">
                    {item?.name}
                  </h3>
                </div>
                <div>
                  <p className="amount-box" style={{ fontWeight: 500 }}>
                    <svg
                      width="15px"
                      height="15px"
                      viewBox="-4 0 32 32"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <title>location</title>
                        <desc>Created with Sketch Beta.</desc> <defs> </defs>
                        <g
                          id="Page-1"
                          stroke="none"
                          stroke-width="1"
                          fill="none"
                          fill-rule="evenodd"
                        >
                          <g
                            id="Icon-Set-Filled"
                            transform="translate(-106.000000, -413.000000)"
                            fill="#000000"
                          >
                            <path
                              d="M118,422 C116.343,422 115,423.343 115,425 C115,426.657 116.343,428 118,428 C119.657,428 121,426.657 121,425 C121,423.343 119.657,422 118,422 L118,422 Z M118,430 C115.239,430 113,427.762 113,425 C113,422.238 115.239,420 118,420 C120.761,420 123,422.238 123,425 C123,427.762 120.761,430 118,430 L118,430 Z M118,413 C111.373,413 106,418.373 106,425 C106,430.018 116.005,445.011 118,445 C119.964,445.011 130,429.95 130,425 C130,418.373 124.627,413 118,413 L118,413 Z"
                              id="location"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    {`${item?.address},${item?.city}`}
                  </p>
                  <p
                    className="tests-include-list"
                    style={{ alignContent: "center" }}
                  >
                    {item?.type ? (
                      <>
                        <svg
                          fill="#000000"
                          width="15px"
                          height="15px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="me-2"
                        >
                          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path d="M14,2H10A3,3,0,0,0,7,5V6H5A3,3,0,0,0,2,9V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V9a3,3,0,0,0-3-3H17V5A3,3,0,0,0,14,2ZM9,5a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V6H9ZM20,9V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V9A1,1,0,0,1,5,8H19A1,1,0,0,1,20,9Zm-7,4h2v2H13v2H11V15H9V13h2V11h2Z"></path>
                          </g>
                        </svg>
                        {item?.type}
                      </>
                    ) : (
                      ""
                    )}
                  </p>
                </div>
                <div className="more-labs-action-btns">
                  <button
                    className="view-details-btn"
                    onClick={() => navigateTo(`/ayurveda/centresdetails`)}
                  >
                    View Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CentresCardStyled>
  );
};

export default CentresCard;
