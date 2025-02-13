import React from "react";
import { useHistory } from "react-router-dom";
import {
  ComparisonCardStyle,
  CardContainer,
  MedicineCard,
  CategoryLabel,
  Image,
  MedicineInfo,
  Title,
  Details,
  Delivery,
  Price,
  DiscountPrice,
  SavingsLabel,
  MRP,
} from "./ComparisonMedicineCardModule.styled";
import useHandleImageUrl from "../../components/hooks/useHandleImageUrl";
import QuantityButton from "../../components/QuantityButton/QuantityButton";
import { IoCartOutline } from "react-icons/io5";

const ComparisonMedicineCardModule = (props: any) => {
  const { generic, branded, addToCart, isAddedtoCart } = props;
  const history = useHistory();
  const isBrandedAddedToCarts = isAddedtoCart?.find(
    (med: any) => med?.service_code === branded?.service_code,
  );
  const isGenericAddedToCarts = isAddedtoCart?.find(
    (med: any) => med?.service_code === generic?.service_code,
  );

  const { getFirstImageUrl } = useHandleImageUrl();
  return (
    <ComparisonCardStyle>
      <CardContainer>
        <MedicineCard>
          {branded && (
            <div className="branded">
              <CategoryLabel>Branded</CategoryLabel>
              <div
                className="generic-img-card-div"
                onClick={() =>
                  history.push(`/item/branded/${branded?.service_code}`)
                }
              >
                <Image
                  src={getFirstImageUrl(branded?.image)}
                  alt={branded?.service_name}
                />
              </div>
              <MedicineInfo>
                <Title>{branded?.service_name}</Title>
                <Details>{branded?.unit}</Details>
                <Delivery>Delivery In {branded?.delivery}</Delivery>
                <Price>
                  <div className="mrp-div">
                    MRP{" "}
                    <MRP>
                      ₹{branded?.actual_price || branded?.price?.actual_price}
                    </MRP>
                  </div>
                  <div className="add-to-cart-btn-div">
                    <DiscountPrice>
                      {branded?.discounted_price ||
                        branded?.price?.discounted_price}
                      .00
                    </DiscountPrice>
                    <div className="btn-div">
                      {!isBrandedAddedToCarts ? (
                        <button
                          onClick={() => {
                            addToCart(branded);
                          }}
                          className="btn"
                        >
                          Add <IoCartOutline className="cart-icon" />
                        </button>
                      ) : (
                        <QuantityButton
                          index={isBrandedAddedToCarts}
                          item={branded}
                        />
                      )}
                    </div>
                  </div>
                </Price>
              </MedicineInfo>
            </div>
          )}
        </MedicineCard>

        <MedicineCard>
          {generic && (
            <div className="generic">
              <div className="discount-banner-main-div">
                <div className="discount-banner-div">
                  <p>
                    {generic?.discount_percentage ||
                      generic?.price?.discount_percentage}
                    % Save
                  </p>
                </div>
              </div>
              <CategoryLabel>Generic</CategoryLabel>

              <div
                className="generic-img-card-div"
                onClick={() =>
                  history.push(`/item/generic/${generic?.service_code}`)
                }
              >
                <Image
                  src={getFirstImageUrl(generic?.image)}
                  alt={generic?.service_name}
                />
              </div>

              <MedicineInfo>
                <Title>{generic?.service_name}</Title>
                <Details>{generic?.unit}</Details>
                <Delivery>Delivery In {generic?.delivery}</Delivery>
                <Price>
                  <div className="mrp-div">
                    MRP{" "}
                    <MRP>
                      ₹{generic?.actual_price || generic?.price?.actual_cost}
                    </MRP>
                  </div>
                  <div className="add-to-cart-btn-div">
                    <DiscountPrice>
                      {generic?.discounted_price ||
                        generic?.price?.discounted_price}
                      .00
                    </DiscountPrice>

                    <div className="btn-div">
                      {!isGenericAddedToCarts ? (
                        <button
                          onClick={() => {
                            addToCart(generic);
                          }}
                          className="btn"
                        >
                          Add <IoCartOutline className="cart-icon" />
                        </button>
                      ) : (
                        <QuantityButton
                          index={isGenericAddedToCarts}
                          item={generic}
                        />
                      )}
                    </div>
                  </div>
                </Price>
              </MedicineInfo>
            </div>
          )}
        </MedicineCard>
      </CardContainer>
    </ComparisonCardStyle>
  );
};

export default ComparisonMedicineCardModule;
