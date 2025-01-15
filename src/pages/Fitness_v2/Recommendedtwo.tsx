import React from "react";
import Image from "react-bootstrap/Image";
import { ReactComponent as Badge } from "../../assets/icons/badge.svg";
import { ReactComponent as Location } from "../../assets/icons/location.svg";
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
];

const Recommendedtwo = (props: any) => (
  <div className="pro-wrapper" style={{ marginBottom: "32px" }}>
    <h2>Nearby Fitness Centres</h2>
    <div className="proCardMainDiv">
      {cards?.map((item: any, index: number) => (
        <>
          <div style={{backgroundColor:"white",borderRadius:"25px",padding:"3px"}}>
            <img style={{width: '100%', borderRadius: "25px"}} src="https://via.placeholder.com/233x145" alt="gymphoto"/>
            <p>Goldrn Brothers Gym & Fitness Centre</p>
            <div>
              .4km - HSR layout
            </div>
          </div>
        </>
      ))}
    </div>
  </div>
);

export default Recommendedtwo;
