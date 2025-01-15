import React from "react";
import Image from "react-bootstrap/Image";
import { ReactComponent as Badge } from "../../../assets/icons/badge.svg";

const cards = [
  {
    title: "Card 1",
    text: "Fitness",
    subtitle: "Transform Your Smile: The Art of Cosmetic Dentistry",
    price: "$19.99",
    hasSaving: true,
  },
  {
    title: "Card 2",
    text: "Gamezone",
    subtitle: "Transform Your Smile: The Art of Cosmetic Dentistry",
    price: "$24.99",
    hasSaving: false,
  },
  {
    title: "Card 3",
    text: "Rapha Mart",
    subtitle: "Transform Your Smile: The Art of Cosmetic Dentistry",
    price: "$14.99",
    hasSaving: true,
  },
  {
    title: "Card 4",
    text: "Virtual Fit",
    subtitle: "Transform Your Smile: The Art of Cosmetic Dentistry",
    price: "$29.99",
    hasSaving: false,
  },
  {
    title: "Card 5",
    text: "FitTrack Hub",
    subtitle: "Transform Your Smile: The Art of Cosmetic Dentistry",
    price: "$39.99",
    hasSaving: true,
  },
  {
    title: "Card 6",
    text: "Loren Ipsum",
    subtitle: "Transform Your Smile: The Art of Cosmetic Dentistry",
    price: "$9.99",
    hasSaving: true,
  },
];

const Recommendedone = (props: any) => (
  <div className="pro-wrapper">
    <h2 className="headingcat">Recommended</h2>
    <div className="proCardMainDiv">
      {cards?.map((item: any, index: number) => (
        <div className="proCardDiv" key={index}>
          <div className="proimageDiv">
            <Image src={"https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736337094335.png"} className="roundedImages" />
            {item.hasSaving && (
              <div className="savingsTag">
                <Badge />
                &nbsp; 20% Saving
              </div>
            )}
          </div>

          <p className="proimageName">{item.text}</p>

          <p className="proimagePrice">{item.price}</p>
          <button className="addToCartButton">Add to Cart</button>
        </div>
      ))}
    </div>
  </div>
);

export default Recommendedone;
