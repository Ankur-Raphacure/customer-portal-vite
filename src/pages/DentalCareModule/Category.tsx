import React from "react";
import { CatogoryStyled } from "./Category.styled";
import HArticle_3 from "../../assets/images/healtharticle/Article-1.png";

const Category = (props: any) => {
  const { list, handleSecletedCategory } = props;

  return (
    <CatogoryStyled>
      {list?.map((clinic: any) => (
        <div className="maincategory">
          <div
            onClick={() => {
              handleSecletedCategory(clinic);
            }}
            key={clinic.id}
            className="hospital_item round-shadow"
          >
            <div className="hospital_img">
              <img src={clinic?.image} alt={clinic?.service_name} />
            </div>
            <div className="">
              <h5 className="hospital_data-cate-name">
                {clinic?.service_name}
              </h5>
            </div>
          </div>
        </div>
      ))}
    </CatogoryStyled>
  );
};

export default Category;
