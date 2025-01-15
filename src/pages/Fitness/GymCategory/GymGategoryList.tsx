import React from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const cards = [
  {
    id: 1,
    title: "Card 1",
    text: "Fitness",
    sub_text: "Fitness boosts health and well-being.",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736403910580.png",
    link: "/Gymlist/gymcenterlist",
  },
  {
    id: 2,
    title: "Card 2",
    text: "Gamezone",
    sub_text: "Fitness boosts health and well-being.",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736403835400.png",
    link: "/Gymlist",
  },
  {
    id: 3,
    title: "Card 3",
    text: "Rapha Mart",
    sub_text: "Fitness boosts health and well-being.",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736403987176.png",
    link: "/mallikarjun",
  },
  {
    id: 4,
    title: "Card 4",
    text: "Virtual Fit",
    sub_text: "Fitness boosts health and well-being.",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736404745471.png",
    link: "/mallikarjun",
  },
  {
    id: 5,
    title: "Card 5",
    text: "FitTrack Hub",
    sub_text: "Fitness boosts health and well-being.",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736406086210.png",
    link: "/mallikarjun",
  },
  {
    id: 6,
    title: "Card 6",
    text: "Loren Ipsum",
    sub_text: "Fitness boosts health and well-being.",
    img: "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736406086210.png",
    link: "/mallikarjun",
  },
];

const GymGategoryList = () => {
  return (
    <div className="category-wrapper">
      <h2 className="headingcat">Category</h2>
      <div className="categoryCardMainDiv">
        {cards.map((card) => (
          <Link to={card.link} key={card.id} className="card-link">
            <div className="catCardDiv">
              <div className="imageDiv">
                <Image src={card.img} className="gym-image-img" />
              </div>
              <p className="imageName">{card.text}</p>
              <p className="image-sub-Name">{card.sub_text}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GymGategoryList;
