import React from "react";
import Image from "react-bootstrap/Image";

const cards = [
  {
    title: "Card 1",
    text: "This is card 1",
    subtitle: "Transform Your Smile: The Art of Cosmetic Dentistry",
    imgSrc: "https://via.placeholder.com/150",
  },
  {
    title: "Card 2",
    text: "This is card 2",
    subtitle: "Transform Your Smile: The Art of Cosmetic Dentistry",
    imgSrc: "https://via.placeholder.com/150",
  },
  {
    title: "Card 3",
    text: "This is card 3",
    subtitle: "Transform Your Smile: The Art of Cosmetic Dentistry",
    imgSrc: "https://via.placeholder.com/150",
  },
  {
    title: "Card 4",
    text: "This is card 4",
    subtitle: "Transform Your Smile: The Art of Cosmetic Dentistry",
    imgSrc: "https://via.placeholder.com/150",
  },
  {
    title: "Card 5",
    text: "This is card 5",
    subtitle: "Transform Your Smile: The Art of Cosmetic Dentistry",
    imgSrc: "https://via.placeholder.com/150",
  },
  {
    title: "Card 6",
    text: "This is card 6",
    subtitle: "Transform Your Smile: The Art of Cosmetic Dentistry",
    imgSrc: "https://via.placeholder.com/150",
  },
  {
    title: "Card 7",
    text: "This is card 7",
    subtitle: "Transform Your Smile: The Art of Cosmetic Dentistry",
    imgSrc: "https://via.placeholder.com/150",
  },
  {
    title: "Card 8",
    text: "This is card 8",
    subtitle: "Transform Your Smile: The Art of Cosmetic Dentistry",
    imgSrc: "https://via.placeholder.com/150",
  },
  {
    title: "Card 1",
    text: "This is card 1",
    subtitle: "Transform Your Smile: The Art of Cosmetic Dentistry",
    imgSrc: "https://via.placeholder.com/150",
  },
  {
    title: "Card 2",
    text: "This is card 2",
    subtitle: "Transform Your Smile: The Art of Cosmetic Dentistry",
    imgSrc: "https://via.placeholder.com/150",
  },
  {
    title: "Card 3",
    text: "This is card 3",
    subtitle: "Transform Your Smile: The Art of Cosmetic Dentistry",
    imgSrc: "https://via.placeholder.com/150",
  },
  {
    title: "Card 4",
    text: "This is card 4",
    subtitle: "Transform Your Smile: The Art of Cosmetic Dentistry",
    imgSrc: "https://via.placeholder.com/150",
  },
  {
    title: "Card 5",
    text: "This is card 5",
    subtitle: "Transform Your Smile: The Art of Cosmetic Dentistry",
    imgSrc: "https://via.placeholder.com/150",
  },
  {
    title: "Card 6",
    text: "This is card 6",
    subtitle: "Transform Your Smile: The Art of Cosmetic Dentistry",
    imgSrc: "https://via.placeholder.com/150",
  },
  {
    title: "Card 7",
    text: "This is card 7",
    subtitle: "Transform Your Smile: The Art of Cosmetic Dentistry",
    imgSrc: "https://via.placeholder.com/150",
  },
  {
    title: "Card 8",
    text: "This is card 8",
    subtitle: "Transform Your Smile: The Art of Cosmetic Dentistry",
    imgSrc: "https://via.placeholder.com/150",
  },
];

const CategoryCards = (props: any) => (
  <div className="categoryCardMainDiv">
    {props?.list?.map((item: any) => {
      return (
        <div className="catCardDiv" onClick={props?.handleBuyMedicine}>
          <div className="imageDiv">
            <Image src={item?.image} className="roundedImages" roundedCircle />
          </div>
          <p className="imageName"> {item?.name}</p>
          <p className="imageSubtitle">
            {item?.subtitle || "Cross-sectional body images using X-rays."}
          </p>
        </div>
      );
    })}
  </div>
);

export default CategoryCards;
