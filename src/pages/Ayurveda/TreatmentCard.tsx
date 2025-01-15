import React, { useState } from "react";
import { TreatmentCardStyled } from "./TreatmentCard.styled";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BestPackagesStyled } from "../LabTest/BestPackages/BestPackages.styled";
import TreatmentPopup from "./TreatmentPopup";
import treatImage from "../../assets/images/ayurveda/ayurveda_img.png";

const TreatmentCard = (props: any) => {
  const { mostOrdersSection, item, addToCart } = props;

  const [file, setFile] = useState(null);
  const [addressEnabled, setAddressEnabled] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const navigateToselectedlabdetail = () => {
    history.push(`/ayurveda/alltreatmentlist/service_code`);
  };
  return (
    <TreatmentCardStyled>
      <div>
        <div className="near-you-item">
          <div className=" cardstyle px-2 py-2 flex  flex-col">
            <div className="relative imgspace">
              <img
                src={item?.image ? item.image : treatImage}
                alt="Health360"
                className="w-full h-full object-cover rounded-t-xl w-xl"
              />
            </div>
            <div className=" heading-name-rating flex flex-col mt-1">
              <div>
                <div className="">
                  <h3 className="float-left1 text-sm heading text-bold">
                    {item?.service_name}
                  </h3>
                </div>
                <div>
                  <p className="amount-box">
                    ₹{item?.price?.discounted_price}.00
                  </p>
                  <p className="tests-include-list">
                    213 people Booked Recently
                  </p>
                </div>
                <div className="more-labs-action-btns">
                  <button
                    className="view-details-btn"
                    onClick={() => setShowDetails(true)}
                  >
                    View Details
                  </button>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => {
                      // addToCart(item);
                      history.push(`/labTestDetils/${item?.service_code}`);
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showDetails && (
          <BestPackagesStyled>
            <TreatmentPopup item={item} onClose={() => setShowDetails(false)} />
          </BestPackagesStyled>
        )}
      </div>
    </TreatmentCardStyled>
  );
};

export default TreatmentCard;
