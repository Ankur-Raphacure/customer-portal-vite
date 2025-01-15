import React from "react";
import { BenefitsStyled } from "./Benefits.styled";
import rd_img from "../../../assets/images/ayurveda/rd_img.png";
import bl_img from "../../../assets/images/ayurveda/bl_img.png";
import gl_img from "../../../assets/images/ayurveda/gl_img.png";
import prl_img from "../../../assets/images/ayurveda/prl_img.png";
import yl_img from "../../../assets/images/ayurveda/yl_img.png";

const Benefits = () => {
  return (
    <BenefitsStyled>
      <div className="container mt-4">
        <h4>Explore Benefits of Panchakarma</h4>
        <div className="main-card">
          <div className="card-div">
            <div className="img-div">
              <img src={rd_img} alt="" />
            </div>
            <p>
              Remove harmful substances and impurities from your body and mind.
            </p>
          </div>
          <div className="card-div">
            <div className="img-div">
              <img src={bl_img} alt="" />
            </div>
            <p>
              Rebalance your body’s natural constitution for better health and
              vitality.
            </p>
          </div>
          <div className="card-div">
            <div className="img-div">
              <img src={gl_img} alt="" />
            </div>
            <p>Boost your immune system to increase resistance to diseases.</p>
          </div>
          <div className="card-div">
            <div className="img-div">
              <img src={prl_img} alt="" />
            </div>
            <p>
              Counteract stress's harmful impacts on your body and mind, slowing
              aging.
            </p>
          </div>
          <div className="card-div">
            <div className="img-div">
              <img src={yl_img} alt="" />
            </div>
            <p>
              Counteract stress's harmful impacts on your body and mind, slowing
              aging.
            </p>
          </div>
        </div>
      </div>
    </BenefitsStyled>
  );
};

export default Benefits;
