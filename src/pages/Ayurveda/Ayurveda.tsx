import CentresList from "./CentresList";
import ServiceList from "./ServiceList";
import TreatmentList from "./TreatmentList";
import "./styles.css";
import { AyruvedaStyled } from "./Aruveda.styled";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import AyurvedaPage from "../AyurvedaPage/AyurvedaPage";

const Ayurveda = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handelGoTo = (url: any) => {
    history.push(url);
  };
  return (
    <AyruvedaStyled>
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
              <button
                className="explore-btn"
                onClick={() => history.push("/ayurveda/alltreatmentlist")}
              >
                Explore Ayurveda
              </button>
            </div>
          </div>
        </header>
        <div className="listContainer">
          <h5>Our Ayurveda Services</h5>
          <ServiceList handelGoTo={handelGoTo} />
          <TreatmentList />
          <CentresList />
        </div>
      </div>
    </AyruvedaStyled>
  );
};

export default Ayurveda;
