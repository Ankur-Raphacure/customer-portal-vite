import React, { useState } from "react";
import { ComponentsStyled } from "./Component.styled";

const Components = () => {
  const [activeButton, setActiveButton] = useState("Vamana");

  const handleClick = (buttonName: any) => {
    setActiveButton(buttonName);
  };

  return (
    <ComponentsStyled>
      <div className="container">
        <div className="btn-div">
          <button
            className={`btn me-4 Custome-btn ${
              activeButton === "Vamana" ? "active" : ""
            }`}
            onClick={() => handleClick("Vamana")}
          >
            Vamana
          </button>
          <button
            className={`btn me-4 Custome-btn ${
              activeButton === "Virechan" ? "active" : ""
            }`}
            onClick={() => handleClick("Virechan")}
          >
            Virechan
          </button>
          <button
            className={`btn me-4 Custome-btn ${
              activeButton === "Basti" ? "active" : ""
            }`}
            onClick={() => handleClick("Basti")}
          >
            Basti
          </button>
          <button
            className={`btn me-4 Custome-btn ${
              activeButton === "Nasya" ? "active" : ""
            }`}
            onClick={() => handleClick("Nasya")}
          >
            Nasya
          </button>
          <button
            className={`btn me-4 Custome-btn ${
              activeButton === "Rakta Moksha" ? "active" : ""
            }`}
            onClick={() => handleClick("Rakta Moksha")}
          >
            Rakta Moksha
          </button>
          <div className="text-container mt-5 ">
            {activeButton === "Vamana" && (
              <>
                <div>
                  <h6>
                    Vamana<span>: Emesis Therapy</span>
                  </h6>
                </div>
                <div className="Vamana parameter d-flex">
                  <div>
                    <p>
                      Vamana, or therapeutic vomiting, is an Ayurvedic treatment
                      for lung congestion, bronchitis, colds, cough, and asthma.
                      It eliminates excess kapha mucus and often releases
                      repressed emotions stored in the lungs and stomach.
                    </p>
                    <p>
                      Patients experience immediate relief, with reduced
                      congestion, wheezing, breathlessness, and clearer sinuses.
                      Vamana is also beneficial for chronic asthma, diabetes,
                      chronic colds, lymphatic congestion, indigestion, and
                      edema.
                    </p>
                    <p>
                      Post-treatment care includes rest, fasting, herbal
                      smoking, and avoiding suppression of natural urges.
                      Properly administered vamana results in easier breathing,
                      lightness in the chest, clear thinking, a strong voice,
                      improved appetite, and relief from congestion symptoms.
                    </p>
                  </div>
                  <div className="card-div"></div>
                </div>
              </>
            )}
            {activeButton === "Virechan" && (
              <>
                <h6>
                  Virechan<span>: Purgation Therapy</span>
                </h6>
                <div className="Virechan parameter d-flex">
                  <div>
                    <p>
                      Vamana, or therapeutic vomiting, is an Ayurvedic treatment
                      for lung congestion, bronchitis, colds, cough, and asthma.
                      It eliminates excess kapha mucus and often releases
                      repressed emotions stored in the lungs and stomach.
                    </p>
                    <p>
                      Patients experience immediate relief, with reduced
                      congestion, wheezing, breathlessness, and clearer sinuses.
                      Vamana is also beneficial for chronic asthma, diabetes,
                      chronic colds, lymphatic congestion, indigestion, and
                      edema.
                    </p>
                    <p>
                      Post-treatment care includes rest, fasting, herbal
                      smoking, and avoiding suppression of natural urges.
                      Properly administered vamana results in easier breathing,
                      lightness in the chest, clear thinking, a strong voice,
                      improved appetite, and relief from congestion symptoms.
                    </p>
                  </div>
                  <div className="card-div"></div>
                </div>
              </>
            )}
            {activeButton === "Basti" && (
              <>
                <h6>
                  Basti<span>: Enema Therapy</span>
                </h6>
                <div className="Basti parameter d-flex">
                  <div>
                    <p>
                      Vamana, or therapeutic vomiting, is an Ayurvedic treatment
                      for lung congestion, bronchitis, colds, cough, and asthma.
                      It eliminates excess kapha mucus and often releases
                      repressed emotions stored in the lungs and stomach.
                    </p>
                    <p>
                      Patients experience immediate relief, with reduced
                      congestion, wheezing, breathlessness, and clearer sinuses.
                      Vamana is also beneficial for chronic asthma, diabetes,
                      chronic colds, lymphatic congestion, indigestion, and
                      edema.
                    </p>
                    <p>
                      Post-treatment care includes rest, fasting, herbal
                      smoking, and avoiding suppression of natural urges.
                      Properly administered vamana results in easier breathing,
                      lightness in the chest, clear thinking, a strong voice,
                      improved appetite, and relief from congestion symptoms.
                    </p>
                  </div>
                  <div className="card-div"></div>
                </div>
              </>
            )}
            {activeButton === "Nasya" && (
              <>
                <h6>
                  Nasya<span>: Nasal Therapy</span>
                </h6>
                <div className="Nasya parameter d-flex">
                  <div>
                    <p>
                      Vamana, or therapeutic vomiting, is an Ayurvedic treatment
                      for lung congestion, bronchitis, colds, cough, and asthma.
                      It eliminates excess kapha mucus and often releases
                      repressed emotions stored in the lungs and stomach.
                    </p>
                    <p>
                      Patients experience immediate relief, with reduced
                      congestion, wheezing, breathlessness, and clearer sinuses.
                      Vamana is also beneficial for chronic asthma, diabetes,
                      chronic colds, lymphatic congestion, indigestion, and
                      edema.
                    </p>
                    <p>
                      Post-treatment care includes rest, fasting, herbal
                      smoking, and avoiding suppression of natural urges.
                      Properly administered vamana results in easier breathing,
                      lightness in the chest, clear thinking, a strong voice,
                      improved appetite, and relief from congestion symptoms.
                    </p>
                  </div>
                  <div className="card-div"></div>
                </div>
              </>
            )}
            {activeButton === "Rakta Moksha" && (
              <>
                <h6>
                  Rakta Moksha<span>: Blood Letting Therapy</span>
                </h6>
                <div className="Rakta Moksha parameter d-flex">
                  <div>
                    <p>
                      Vamana, or therapeutic vomiting, is an Ayurvedic treatment
                      for lung congestion, bronchitis, colds, cough, and asthma.
                      It eliminates excess kapha mucus and often releases
                      repressed emotions stored in the lungs and stomach.
                    </p>
                    <p>
                      Patients experience immediate relief, with reduced
                      congestion, wheezing, breathlessness, and clearer sinuses.
                      Vamana is also beneficial for chronic asthma, diabetes,
                      chronic colds, lymphatic congestion, indigestion, and
                      edema.
                    </p>
                    <p>
                      Post-treatment care includes rest, fasting, herbal
                      smoking, and avoiding suppression of natural urges.
                      Properly administered vamana results in easier breathing,
                      lightness in the chest, clear thinking, a strong voice,
                      improved appetite, and relief from congestion symptoms.
                    </p>
                  </div>
                  <div className="card-div"></div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </ComponentsStyled>
  );
};

export default Components;
