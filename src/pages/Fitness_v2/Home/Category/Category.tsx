import React, { useEffect, useState } from "react";
import { CategoryStyled } from "./Category.Styled";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllCategoriesAPI } from "../../../../redux/slices/labtest/labtestService";

const Category = () => {
  const dispatch = useDispatch();

  const [categories, setCategories] = useState(null) as any;

  useEffect(() => {
    const getAllCategories = async () => {
      const result = (await dispatch(
        getAllCategoriesAPI({ sectionName: "fitness" }),
      )) as any;
      if (result?.meta?.requestStatus === "fulfilled") {
        setCategories(result?.payload?.data);
      }
    };
    getAllCategories();
  }, []);

  return (
    <>
      <CategoryStyled>
        <div className="category-container">
          <h3>Category</h3>
          <div className="category-deck">
            {categories?.category_ids?.map((item: any) => {
              return (
                <>
                  <Link className="link-to" to="/fitnessCenters">
                    <div className="category-card">
                      <h5>{item?.name}</h5>
                      <div className="card-img-container">
                        <img
                          className="card-img"
                          src={item?.image}
                          alt={item?.name}
                        />
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </CategoryStyled>
    </>
  );
};

export default Category;
