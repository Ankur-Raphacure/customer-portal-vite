import React, { useState } from "react";
import { HealthCardStyled } from "./HealthCard.styled";
import dct from "../../assets/images/healtharticle/doctoreimg.png";

const HealthCard = () => {
  const [visibleCards, setVisibleCards] = useState(3);
  const cards = [
    {
      id: 1,
      title: "Complete Health care check up 1",
      description:
        "cin voluptate velit essveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute",
    },
    {
      id: 2,
      title: "Complete Health care check up 2",
      description:
        "cin voluptate velit essveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute",
    },
    {
      id: 3,
      title: "Complete Health care check up 3",
      description:
        "cin voluptate velit essveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute",
    },
    {
      id: 4,
      title: "Complete Health care check up 4",
      description:
        "cin voluptate velit essveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute",
    },
  ];

  const handleLoadMore = () => {
    setVisibleCards(visibleCards + 3);
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <HealthCardStyled>
      <div className="main-card">
        {cards.slice(0, visibleCards).map((card) => (
          <div key={card.id} className="near-you-item">
            <div className="cardstyle px-2 py-2 flex flex-col">
              <div className="relative imgspace">
                <img
                  src={dct}
                  alt="Health360"
                  className="w-full h-full object-cover rounded-t-xl w-xl"
                />
              </div>
              <div className="heading-name-rating flex flex-col mt-1">
                <div>
                  <p
                    className="text-justify px-3"
                    style={{ fontWeight: "600" }}
                  >
                    {card.title}
                  </p>
                  <p className="px-3  text-justify">{card.description}</p>
                  <div className="more-labs-action-btns px-3">
                    <button className="view-details-btn">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleCards < cards.length && (
        <div className="more-labs-action-btns-1">
          <button onClick={handleLoadMore} className="load-more-btn">
            Show more
          </button>
        </div>
      )}
    </HealthCardStyled>
  );
};

export default HealthCard;
