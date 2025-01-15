import { Select } from "antd";
import React from "react";
import { RadiologyStyled } from "./RadiologyStyled.styled";

const PriceFilterModule = (props: any) => {
  return (
    <RadiologyStyled>
      <div className="selector-filter-sub-module-div">
        <Select
          showSearch
          placeholder="Sort By"
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          defaultValue="discount"
          onChange={props.handleSortChange}
          options={[
            { value: "discount", label: "Discount" },
            { value: "desc", label: "Price: High to Low" },
            { value: "asc", label: "Price: Low to High" },
          ]}
        />
      </div>
    </RadiologyStyled>
  );
};

export default PriceFilterModule;
