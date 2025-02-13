import React from "react";
import { CategorieCardStyled } from "./CategorieCard.styled";
import { CategoryDivcolors } from "../Home/Home.styled";

const CategorieCard = (props: any) => {
  const { allCategoriesList } = props;
  return (
    <CategorieCardStyled>
      <div className="our-services-all">
        {allCategoriesList?.map((category: any, index: any) => (
          <div>
            <CategoryDivcolors
              index={index}
              key={index}
              className="home-page-card"
            >
              <div
                className="cursor-pointer"
                onClick={() => props.catogorySelect(category)}
              >
                <div className="home-card-image">
                  <div className="home-card-image-img">
                    <img src={category.image} className="mt-2" />
                  </div>
                </div>
              </div>
            </CategoryDivcolors>
            <p className="category-mobile-wiew ">{category?.name} </p>
          </div>
        ))}
      </div>
    </CategorieCardStyled>
  );
};

export default CategorieCard;
