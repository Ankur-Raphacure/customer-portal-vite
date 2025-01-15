import React from "react";
import { useHistory } from "react-router-dom";
import { WomenscareStyled } from "../WomenscareStyled.Styled";

const WomanCatogory = () => {
  const history = useHistory();

  const services = [
    {
      name: "Gynecologist",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736401103165.png",
      link: "/womenscare/gynecologists",
      subText: "Get expert tips on women's health  and gynecological care",
    },
    {
      name: "Period Tracker",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736401140436.png",
      link: "/womenscare/periodtrackers",
      subText: "Track your cycle effortlessly Then you Happy ",
    },
    {
      name: "Lactation Support",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736401165873.png",
      link: "/womenscare/lactationsupports",
      subText: "Discover essential tips and expert advice on breastfeeding",
    },
    {
      name: "Woman’s activity",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736401195944.png",
      link: "/womenscare/womanactivitys",
      subText: "Empowering women through fitness, wellness tips",
    },
    {
      name: "Nutrition & Diet ",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736401230491.png",
      link: "/womenscare/nutritiondiets",
      subText: "Unlock the secrets to a healthier you with expert tips",
    },
    {
      name: "Skin care",
      image:
        "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736401275319.png",
      link: "/womenscare/skincares",
      subText: "Bringing clarity and precision to Skin care",
    },
  ];

  const handleCardClick = (link: any) => {
    history.push(link);
  };

  return (
    <WomenscareStyled>
      <div className="Maincontainer mt-4 mb-4">
        <div className="row main-rows">
          {services.map((service, index) => (
            <div className="card Card-div">
              <div
                className="card-info"
                onClick={() => handleCardClick(service.link)}
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="rounded-circle mb-3 card-avatar"
                />
                <div className="card-title">{service.name}</div>
                <div className="card-subtitle mt-2">{service.subText}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WomenscareStyled>
  );
};

export default WomanCatogory;
