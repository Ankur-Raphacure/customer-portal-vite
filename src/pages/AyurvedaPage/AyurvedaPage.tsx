import { AyurvedaStyled } from "./AyurvedaPage.styled";

const AyurvedaPage = () => {
  return (
    <AyurvedaStyled>
      <div className="ayurvedaWrapper">
        <header className="header">
          <div className="header-content">
            <h1>
              Discover the Healing Power of <span>Ayurveda</span>
            </h1>
            <p>
              Experience holistic well-being through ancient wisdom and natural
              remedies.
            </p>
            <div className="btnWrapper">
              <button className="explore-btn">Explore Ayurveda</button>
            </div>
          </div>
        </header>
      </div>
    </AyurvedaStyled>
  );
};

export default AyurvedaPage;
