// CategoryCards.js
import React from "react";
import Image from "react-bootstrap/Image";
import { ReactComponent as Video } from "../../../../../assets/icons/video.svg";
import { ReactComponent as Location } from "../../../../../assets/icons/location.svg";
import { ReactComponent as Stars } from "../../../../../assets/icons/stars.svg";
import { ReactComponent as Gym } from "../../../../../assets/icons/gym.svg";
import { ReactComponent as Zumba } from "../../../../../assets/icons/zumba.svg";
import { ReactComponent as Yoga } from "../../../../../assets/icons/yoga.svg";

const Gymbody = () => (
  <div className="container">
    <div className="grow">
      <div className="gleft">
        <div className="image-overlay">
          <Image
            src={
              "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736336403569.png"
            }
          />
          <div className="watch-video">
            Watch Video <Video />
          </div>
        </div>
      </div>

      <div className="gright">
        <div className="image-row">
          <div className="image-container">
            <Image
              src={
                "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736335361968.png"
              }
              className="marinimg"
            />
          </div>
          <div className="image-container">
            <Image
              src={
                "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736335290510.png"
              }
            />
            <button className="more-button">19 more</button>
          </div>
        </div>

        <div className="image-row">
          <Image
            src={
              "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736335118414.png"
            }
            className="marinimg"
          />
          <div className="map-container">
            <Image
              src={
                "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736334992636.png"
              }
            />
            <button className="view-map-button">View map</button>
          </div>
        </div>
      </div>
    </div>

    <div className="gmobile">
      <Image
        src={
          "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736336403569.png"
        }
        style={{ width: "100%", marginBottom: "12px" }}
      />
      <div className="gleft">
        <div className="image-row">
          <div className="image-container">
            <Image
              src={
                "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736335361968.png"
              }
              className="marinimg"
            />
          </div>
          <div className="image-container">
            <Image
              src={
                "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736335290510.png"
              }
            />
            <button className="more-button">19 more</button>
          </div>
        </div>
      </div>

      <div className="gright">
        <div className="image-row">
          <Image
            src={
              "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736335118414.png"
            }
            className="marinimg"
          />
          <div className="map-container">
            <Image
              src={
                "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736334992636.png"
              }
            />
            <button className="view-map-button">View map</button>
          </div>
        </div>
      </div>
    </div>

    <div className="gymcontent">
      <div className="conleft">
        <h2>Gold Gym</h2>
        <p className="loc">
          <Location /> <span className="gdate">1 KM [</span> Hsr Layout 1st
          ma...
        </p>
        <p className="ppermon">
          {" "}
          <span className="pnum"> 899/ </span>Monthly
        </p>
      </div>
      <div className="conright">
        <p>
          <Stars />
        </p>
        <p className="reviews">121 Reviews</p>
      </div>
    </div>

    <div className="content">
      <p>
        Welcome to EmpowerFit, a premier gym exclusively for women, designed to
        create a supportive and empowering environment where you can thrive. At
        EmpowerFit, we believe in the strength, resilience, and potential of
        every woman. Our state-of-the-art facility offers a wide range of
        top-tier equipment, tailored fitness classes, and personalized training
        programs to meet your unique needs and goals.
      </p>
      <div className="controw">
        <p>
          <Gym /> Gym
        </p>
        <p>
          <Yoga /> Yoga
        </p>
        <p>
          <Zumba /> Zumba
        </p>
      </div>
    </div>

    <div className="grid-container">
      <div className="col1">
        <p className="info-text">19 More Amenities there</p>
      </div>
      <div className="col2">
        <ul className="amenities-list">
          <li>Pool</li>
          <li>Kids Area</li>
          <li>Kids Area</li>
          <li>Kids Area</li>
          <li>Kids Area</li>
          <li>Kids Area</li>
          <li>Kids Area</li>
          <li>Kids Area</li>
          <li>Kids Area</li>
          <li className="more">More</li>
        </ul>
      </div>
    </div>

    <div className="grid-container1">
      <div className="col1">
        <button className="btn-green">Add Cart</button>
      </div>

      <div className="col2">
        <button className="btn-purple">Join Now</button>
      </div>
    </div>
  </div>
);

export default Gymbody;
