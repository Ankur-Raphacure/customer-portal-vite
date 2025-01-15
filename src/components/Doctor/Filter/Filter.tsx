import { FilterStyled } from "./Filter.styled";

const Filters = (props: any) => {
  const filterList = props?.doctorFilters;
  console.log(filterList, "filterList");

  return (
    <FilterStyled>
      <div className="sidefilters">
        {filterList &&
          Object.keys(filterList)?.map((filterData: any) => {
            return (
              <div className="filterdata" key={filterData}>
                <div className="filtertitle">{filterData}</div>
                {filterList[filterData]?.map((filter: any, index: number) => {
                  return (
                    <div
                      className="filterlist"
                      data-index={index}
                      key={filter.key}
                    >
                      <div className="filterinput">
                        <input
                          id={"filter-checkbox_" + filter.key}
                          type="checkbox"
                          name={filter.name}
                          value={filter.key}
                          defaultChecked={filter.selected}
                          onChange={props.handleonChangeFilter}
                        />
                        <label htmlFor={"filter-checkbox_" + filter.key}>
                          {filter.name}
                        </label>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div>
    </FilterStyled>
  );
};

export default Filters;
