import React from "react";
import { Card } from "react-bootstrap";
import { CardsStyled } from "./CardsStyled.styled";

const Cards = (props: any) => {
  return (
    <CardsStyled>
      <div className="cardContainer">
        <Card className="mainCard">
          <Card.Img
            className="all-scans-nearme-all-img"
            src={props?.item?.image || props.cardBdImgUrl}
          />
          <Card.Body className="cardsBody">
            {props?.imgOverRidSec && (
              <div className="imgOverRideDiv">
                <span> {props?.imgOverRidSecText} </span>
              </div>
            )}
            <Card.Title
              className={`cardTitle d-flex justify-content-between mb-0 ${
                props?.imgOverRidSec && "mt-2"
              }`}
            >
              {props.title || props?.item?.name}

              {props?.isRating && (
                <div className="ratingBoxDiv">
                  <span className="ratingTxt">
                    {props?.item?.rating || "4.5"}
                  </span>
                  <span className="mr-1 starIcon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="13"
                      viewBox="0 0 14 13"
                      fill="none"
                    >
                      <path
                        d="M7 0L8.5716 4.83688H13.6574L9.5429 7.82624L11.1145 12.6631L7 9.67376L2.8855 12.6631L4.4571 7.82624L0.342604 4.83688H5.4284L7 0Z"
                        fill="#ff9529"
                      />
                    </svg>
                  </span>
                </div>
              )}
            </Card.Title>
            {/* {props?.cardTxtOne} */}
            <Card.Text
              className={
                props?.item?.address ? "mb-0 address-line-text" : "mb-0"
              }
            >
              {props.cardTxtOneImgIsPresent && (
                <img
                  className={props.cardTxtOneImgClassName}
                  src={props.cardTxtOneImg}
                  alt="Location"
                />
              )}
              <span className={props.cardTxtOneTxtClassName}>
                {props?.item?.address ? (
                  <>{props?.item?.address}</>
                ) : (
                  <>
                    {props?.userCity?.map((item: any) => {
                      return <>{item.name}</>;
                    })}
                  </>
                )}
              </span>
            </Card.Text>
            {props.cardTxtTwo && (
              <Card.Text className="mb-0 d-flex align-baseline align-items-baseline">
                {props.cardTxtTwoImgIsPresent && (
                  <div className={props.cardTxtTwoImgClassName}>
                    {props.cardTxtTwoImg}{" "}
                  </div>
                )}
                <span className={props.cardTxtTwoTxtClassName}>
                  {props.cardTxtTwo}
                </span>
              </Card.Text>
            )}

            <button
              className={props?.cardBtnBtmClassName}
              onClick={props.navigateTo}
            >
              {props?.cardBtnBtmTxt}
            </button>
          </Card.Body>
        </Card>
      </div>
    </CardsStyled>
  );
};

export default Cards;
