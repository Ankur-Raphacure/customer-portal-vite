import React, { useMemo } from "react";
import { IoCartOutline } from "react-icons/io5";
import QuantityButton from "../../components/QuantityButton/QuantityButton";
import { useHistory } from "react-router-dom";
import { MedicineCardModuleStyled } from "./MedicineCardModule.styled";
import useHandleImageUrl from "../../components/hooks/useHandleImageUrl";

const MedicineCardModule = (props: any) => {
  const history = useHistory();
  const { medicineDetail, addToCart, isAddedtoCart, categoryId } = props;
  const { getFirstImageUrl } = useHandleImageUrl();
  const imageUrl = useMemo(() => {
    return getFirstImageUrl(medicineDetail?.image);
  }, [medicineDetail]);

  return (
    <MedicineCardModuleStyled>
      <div className="medicine-card">
        <div className="medicineDetail">
          <div
            className="img-div"
            onClick={() =>
              history.push(
                `/item/${medicineDetail?.category_key}/${
                  medicineDetail?.service_code
                }?categoryids=${medicineDetail?.category_ids?.join(",")}`
              )
            }
          >
            <div className="sub-img-div">
              <img src={getFirstImageUrl(imageUrl)} alt={medicineDetail?.key} />
            </div>
          </div>

          <div className="text-div">
            <p className="h3"> {medicineDetail?.service_name} </p>
            <p className="medicineDetail-unit">{medicineDetail?.unit}</p>
            <div className="btn-div">
              <div className="mt-2">
                {medicineDetail?.discounted_price !==
                medicineDetail?.actual_cost ? (
                  <>
                    {" "}
                    <p className="p">
                      MRP &nbsp; ₹
                      {medicineDetail?.price?.actual_cost ||
                        medicineDetail?.actual_cost}
                    </p>
                    <p className="h3">
                      ₹
                      {medicineDetail?.price?.discounted_price ||
                        medicineDetail?.discounted_price}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="h3">
                      MRP &nbsp; ₹
                      {medicineDetail?.price?.discounted_price ||
                        medicineDetail?.discounted_price}
                    </p>
                  </>
                )}
              </div>

              {!isAddedtoCart?.service_code ? (
                <button
                  onClick={() => {
                    addToCart(medicineDetail);
                  }}
                  className="btn"
                >
                  Add <IoCartOutline className="cart-icon" />
                </button>
              ) : (
                <QuantityButton index={isAddedtoCart} item={medicineDetail} />
              )}
            </div>
            {/* <div className="ern-btn-div">
              <button className="btn ern-btn-img">
                <img
                  src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731413230226.png"
                  alt=""
                  className="me-2 "
                />
                0 mins
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </MedicineCardModuleStyled>
  );
};

export default MedicineCardModule;
