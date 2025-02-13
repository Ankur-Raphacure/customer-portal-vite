import React, { useEffect, useState } from "react";
import { SideFilterModuleStyled, SidebarMenu } from "./SideFilterModule.styled";
import { AiOutlineCloseCircle } from "react-icons/ai";

const SideFilterModule = (props: any) => {
  const { allCategoriesList, selectedCategories ,vendors,selectedVendors} = props;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCategoryChange = (id: string) => {
    props?.handleChangeCategoryFilter(id);
  };

  const handleVendorChange = (id:string) =>{
    props?.handleVendorChangeFilter(id)
  }

  const clearFilters = () => {
    props.handleClearAll();
  };

  return (
    <SideFilterModuleStyled>
      <div className="main-sort-filter-container cursor-pointer">
        <div className="sort-filter-container">
          <div className="filter-section" onClick={() => setIsMenuOpen(true)}>
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1734779473619.png"
              alt="filter-icon"
              className="filter-icon"
            />
            <span>Filter</span>
          </div>
        </div>
      </div>

      <SidebarMenu sMenuOpen={isMenuOpen || window.innerWidth >= 768}>
        <div
          className="CloseButton"
          onClick={() => {
            console.log("closebtn");
            setIsMenuOpen(false);
          }}
        >
          <AiOutlineCloseCircle />
        </div>
        <div className="main-filter-module-div">
          <div className="filter-title-div">
            <img
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1731929868166.png"
              alt=""
              className="me-3"
            />
            <p>Filters</p>
          </div>
          <div className="clear-filter-btn">
            <button className="btn" onClick={clearFilters}>
              Clear All
            </button>
          </div>
        </div>

        {/* Filter by Category */}

        <>
          <div className="filter-by-type-div">
            <p className="filter-by-title">By Category</p>
            <div className="alltests">
              {allCategoriesList?.category_ids?.map((item: any) => {
                if (!item?.name) {
                  return null;
                }
                console.log(selectedCategories, item.id);

                return (
                  <div className="select-checkbox-div" key={item.id}>
                    <input
                      type="checkbox"
                      checked={selectedCategories?.includes(item.id)}
                      onChange={() => {
                        handleCategoryChange(item?.id);
                      }}
                      id={`checkbox-${item.id}`}
                    />

                    <label
                      htmlFor={`checkbox-${item.id}`}
                      title={item?.name || "Unnamed Category"}
                    >
                      <p title={item?.name}>{`${
                        item?.name || "Unnamed Category"
                      } (${item?.count}) `}</p>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </>

        <div className="horizontal-line"></div>

         {/* Filter by Vendors */}

         <>
          <div className="filter-by-type-div">
            <p className="filter-by-title">By Vendor</p>
            <div className="alltests">
              {vendors?.data?.data?.map?.((item: any) => {
                if (!item?.name) {
                  return null;
                }

                return (
                  <div className="select-checkbox-div" key={item?.id}>
                    <input
                      type="checkbox"
                      checked={selectedVendors?.includes(item?.id)}
                      onChange={() => {
                        handleVendorChange(item?.id);
                      }}
                      id={`checkbox-${item?.id}`}
                    />

                    <label
                      htmlFor={`checkbox-${item?.id}`}
                      title={item?.name ?? "Unnamed Category"}
                    >
                      <p title={`${item?.name} (${item?.fitnessCenterCount})`}>{`${
                        item?.name ?? "Unnamed Category"
                      } (${item?.fitnessCenterCount}) `}</p>
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </>


      </SidebarMenu>
    </SideFilterModuleStyled>
  );
};

export default SideFilterModule;
