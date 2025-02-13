// CategoryCards.js
import React from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

const cards = [
  {
    id: 1,
    title: "Card 1",
    text: "Fitness",
  },
  {
    id: 2,
    title: "Card 2",
    text: "Gamezone",
  },
  {
    id: 3,
    title: "Card 3",
    text: "Rapha Mart",
  },
  {
    id: 4,
    title: "Card 4",
    text: "Virtual Fit",
  },
  {
    id: 5,
    title: "Card 5",
    text: "FitTrack Hub",
  },
  {
    id: 6,
    title: "Card 6",
    text: "Loren Ipsum",
  },
];

const CategoryCards = () => (
  <div className="category-wrapper">
    <h2 className="headingcat">Category</h2>
    <div className="categoryCardMainDiv">
      {cards.map((item) => (
        <Link to="" key={item.id} className="card-link">
          <div className="catCardDiv">
            <div className="imageDiv">
              <Image
                src={
                  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736403910580.png"
                }
              />
            </div>
            <p className="imageName">{item.text}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default CategoryCards;
