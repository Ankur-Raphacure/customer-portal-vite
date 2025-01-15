// CategoryCards.js
import React from "react";
import { Link } from "react-router-dom";
import Image from "react-bootstrap/Image";

const cards = [
  {
    id: 1,
    title: "Card 1",
    text: "GYM",
    subtitle: "Transform Your Smile: The Art of Cosmetic Dentistry",
  },
  {
    id: 2,
    title: "Card 2",
    text: "YOGA",
    subtitle: "Transform Your Smile: The Art of Cosmetic Dentistry",
  },
  {
    id: 3,
    title: "Card 3",
    text: "Zumba",
    subtitle: "Transform Your Smile: The Art of Cosmetic Dentistry",
  },
  {
    id: 4,
    title: "Card 4",
    text: "Aerobic",
    subtitle: "Transform Your Smile: The Art of Cosmetic Dentistry",
  },
  {
    id: 5,
    title: "Card 5",
    text: "Activities",
    subtitle: "Transform Your Smile: The Art of Cosmetic Dentistry",
  },
  {
    id: 6,
    title: "Card 6",
    text: "Courses",
    subtitle: "Transform Your Smile: The Art of Cosmetic Dentistry",
  },
];

const CategoryCards = () => (
  <div className="category-wrapper">
    <h2 className="headingcat">Category</h2>
    <div className="categoryCardMainDiv">
      {cards.map((item) => (
        <Link to={`/Gymlist`} key={item.id} className="card-link">
          <div className="catCardDiv">
            <div className="imageDiv">
              <Image src={"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736405441317.png"} />
            </div>
            <p className="imageName">{item.text}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default CategoryCards;
