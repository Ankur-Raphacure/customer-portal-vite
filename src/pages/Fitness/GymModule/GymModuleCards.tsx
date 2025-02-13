import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { GymModuleCardsStyled } from "./GymModuleCards.styled";
import GymAddToCartCard from "./GymAddToCartCard";

const defaultImage =
  "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736406811971.png";

const GymModuleCards = (props: any) => {
  const { item } = props;
  const history = useHistory();
  const bookNowRef = useRef<any>(null);
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const handleToNavigate = (item: any) => {
    const itemObj = {
      ...item,
    };
    setModalShow(true);
    setSelectedData(itemObj);
  };

  const handleToNavigateDetailPage = (item: any) => {
    history.push("/Gymlist/gymviewdetails", item);
    if (bookNowRef.current) {
      bookNowRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <GymModuleCardsStyled>
      <div className="row">
        {item?.map((item: any, index: any) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="cardstyle px-2 py-2 d-flex flex-column">
              <div className="relative imgspace">
                <img
                  src={item?.image || defaultImage}
                  alt="Health360"
                  className="card-img-top object-cover rounded-t-xl"
                />
              </div>

              <div className="heading-name-rating d-flex flex-column mt-1">
                <div>
                  <h3 className="text-sm heading font-weight-bold">
                    {item?.service_name || item?.name || ``}
                  </h3>

                  <div className="d-flex locatio-name-sec-row mt-2">
                    <span className="d-flex align-items-center labs-near-sec-name text-sm opacity-70 text-truncate">
                      <img
                        src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736498912733.png"
                        className="me-2"
                        alt="Location"
                      />
                      {item?.address}
                    </span>
                  </div>

                  <div className="more-labs-action-btns mt-3">
                    <button
                      className="view-details-btn"
                      onClick={() => handleToNavigateDetailPage(item)}
                    >
                      View Details
                    </button>
                    <button
                      className="add-to-cart-btn"
                      onClick={() => handleToNavigate(item)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <GymAddToCartCard
        show={modalShow}
        item={selectedData}
        onHide={() => setModalShow(false)}
      />
    </GymModuleCardsStyled>
  );
};

export default GymModuleCards;
