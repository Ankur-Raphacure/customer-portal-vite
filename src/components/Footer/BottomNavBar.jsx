import React, { useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { FooterStyled } from "./Footer.styled";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import { CategoryDivcolors, HomeStyled } from "../../pages/Home/Home.styled";
import { useHistory } from "react-router-dom";

const BottomNavBar = (props) => {
  const { element, moreOptionsBtn, setMoreOptions, navBarMoreData } = props;
  const history = useHistory();
  const { subDomainDetails } = useSelector(({ auth }) => auth);

  const handleClose = () => {
    setMoreOptions(false);
  };

  const navigateToPage = (url) => {
    history.push(url);
  };

  useEffect(() => {
    console.log("element", element);
  }, [element]);

  useEffect(() => {
    console.log("navBarMoreData", navBarMoreData);
  }, [navBarMoreData]);

  return (
    <div className="bottom-nav-main-div">
      <div className="bottom-nav-div">
        {element?.map((item, imdex) => {
          return (
            <div
              className="bottom-nav-title"
              onClick={() => {
                if (item?.path === "more") {
                  setMoreOptions((prev) => !prev);
                  return;
                }
                props.handleNavigate(item?.path);
                handleClose();
              }}
            >
              <img src={item?.image} alt="" />
              <p>{item?.name}</p>
            </div>
          );
        })}
      </div>

      <div
        className={`bottomSheetFrame ${
          moreOptionsBtn ? "bottomsheetOpen" : "bottomsheetClose"
        } `}
        onClick={(e) => {
          e?.stopPropagation();
          handleClose();
        }}
      >
        <div class="bottomSheetOverlay"></div>
        <div
          className={`bottomSheetContent ${
            props?.from === "subdomain" ? "subdomain" : "home"
          }`}
          onClick={(e) => {
            e?.stopPropagation();
          }}
        >
          <div className="categories-header">
            <p>
              {subDomainDetails?.subdomain_key === "indigrid"
                ? "Addon Services"
                : "Categories"}
            </p>
            <IoClose className="close-icon" onClick={handleClose} />
          </div>
          <HomeStyled className="homeStyled">
            {navBarMoreData.map((category, index) => (
              <div>
                <CategoryDivcolors
                  index={index}
                  key={index}
                  className="home-page-card"
                >
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      navigateToPage(
                        category.path || category?.url || category?.navigatePath
                      );
                      handleClose();
                    }}
                  >
                    <div className="home-card-image">
                      <div className="home-card-image-img">
                        <img
                          src={category.imageUrl || category?.image}
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </div>
                </CategoryDivcolors>
                <p className="category-mobile-wiew ">
                  {category?.name || category?.title}
                </p>
              </div>
            ))}
          </HomeStyled>
        </div>
      </div>
    </div>
  );
};

export default BottomNavBar;
