import React, { useState, useEffect, useMemo } from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PharmacyStyled } from "./Pharmacy.styled";
import {
  getAllBrandsAPI,
  getAllCategoriesAPI,
  getAllMedicineAPI,
  getAllSubCategoriesAPI,
  getAllCompareMedicineAPI,
  getPharmacyCategoriesAPI,
  getAllSaltCategoriesAPI,
} from "../../redux/slices/labtest/labtestService";
import { getAttachmentIds } from "../../Scenes/common";
import { Select } from "antd";
import {
  handleAddToCartAPI,
  getCartItemsAPI,
} from "../../redux/slices/checkout/checkoutService";
import ComparisonMedicineCardModule from "./ComparisonMedicineCardModule";
import { checkIsMobile } from "../../Scenes/common";

import { updateShowLoginModel } from "../../redux/slices/auth/authSlice";
import Loader from "../../components/Loader/Loader";
import SideFilterModule from "./SideFilterModule";
import SearchByTextModule from "./SearchByTextModule";
import { pharmacySearchTextChange } from "./PharmacyObjectsModule";
import MedicineCardModule from "./MedicineCardModule";
import BreadCrumbModule from "./BreadCrumbModule";
import Paginations from "../../components/PaginationModule/Paginations";
import MobileHeader from "../../components/Header/MobileHeader";

const AllPharmacyList = (props: any) => {
  let { sectionName } = props?.match?.params;
  sectionName = sectionName === "all" ? "" : sectionName;

  const [medicines, setMedicines] = useState([]);
  const location = useLocation<any>();
  const SelectedCategory = location?.state;
  const titleName = SelectedCategory?.name as any;
  const [btnCategoryId, setBtnCategoryId] = useState([] as any);

  const list = [
    {
      title: "Pharmacy",
      link: `/pharmacy`,
    },
    {
      title: titleName || sectionName,
    },
  ];
  const allTypeList = [
    {
      name: "Branded",
      id: "branded",
      link: `/pharmacy`,
    },
    {
      name: "Generic",
      id: "generic",
      link: `/pharmacy`,
    },
    {
      name: "Wellness",
      id: "wellness",
      link: `/pharmacy`,
    },
  ];
  const [paginatedMedicines, setPaginatedMedicines] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const pageSize = 12;
  const [visibleCount, setVisibleCount] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState("");
  const [minDiscount, setMinDiscount] = useState("");
  const [maxDiscount, setMaxDiscount] = useState("");
  const [categoryFilter, setCategoryFilter] = useState(
    sectionName ? ([Number(sectionName)] as any) : ([] as any)
  );
  const [brandFilter, setBrandFilter] = useState([] as any);
  const [typeFilter, setTypeFilter] = useState("");
  const [page, setPage] = useState(1);
  const [pageSizes, setPageSizes] = useState(10);
  const [currentCount, setCurrentCount] = useState(1);
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { cartItems } = useSelector((ReduxState: any) => ReduxState.checkout);
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);
  const pProducts =
    cartItems?.carts?.find((itemv: any) => itemv?.section_key === "pharmacy") ||
    [];
  const {
    allCategoriesList,
    allMedicinesList,
    MedicinesCount,
    allSubCategoriesList,
    allSaltCategoryList,
    allBrandsList,
    allCompareMedicineList,
  } = useSelector((ReduxState: any) => ReduxState.labtest);
  const CompareMedicineList = useMemo(() => {
    if (!Array.isArray(allCompareMedicineList)) return [];
    return allCompareMedicineList?.map((ele: any) => ele?.medicines);
  }, [allCompareMedicineList]);

  const { selectedFilterType } = useSelector(
    (ReduxState: any) => ReduxState.generic
  );
  const handleClick = (btnName: any) => {
    const prevcaids = [...btnCategoryId];
    if (prevcaids?.includes(btnName)) {
      const findINdex = prevcaids.findIndex(
        (itemId: any) => itemId === btnName
      );
      prevcaids.splice(findINdex, 1);
    } else {
      prevcaids.push(btnName);
    }
    setBtnCategoryId(prevcaids);
  };
  useEffect(() => {
    if (sectionName === "allProductsBySalt") {
      getAllCompareProductsCall();
    }
  }, [btnCategoryId, page, pageSize]);

  const getAllCompareProductsCall = async () => {
    const newCount = currentCount + 8;
    setCurrentCount(newCount);
    setIsLoading(true);
    await dispatch(
      getAllCompareMedicineAPI({
        status: "active",
        categoryIds: btnCategoryId,
        page: 1,
        count: newCount,
      })
    );
    setIsLoading(false);
  };

  useEffect(() => {
    paginateMedicines(currentPage);
  }, [currentPage, medicines]);

  const paginateMedicines = (page: number) => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setPaginatedMedicines(medicines.slice(start, end));
  };
  const navigateToPage = (url: string) => {
    history.push(url);
  };
  const addToCart = (item: any) => {
    if (!user?.id) {
      dispatch(updateShowLoginModel(true));
    } else {
      handleAddToCartCall(item);
    }
  };
  const handleAddToCartCall = async (item: any) => {
    const medC = [{ service_code: item?.service_code, count: 1 }];
    const body1 = {
      carts: [
        {
          user_id: user?.id,
          useWallet: true,
          collection_1_date: null,
          collection_1_slot: null,
          medicines: medC,
          attachment_ids: getAttachmentIds("pharmacy"),
          section_key: "pharmacy",
        },
      ],
    };
    await dispatch(handleAddToCartAPI(body1));
    await dispatch(getCartItemsAPI());
  };
  const handleSelect = (value: string, option: any) => {
    navigateToPage(option.key);
  };
  const handleLoadMore = () => {
    setVisibleCount((prevCount: any) => prevCount + 1);
  };
  const handleSortChange = async (value: any) => {
    setSortBy(value);
  };
  const setSelectedSortOption = (value: any) => {
    setSortBy(value);
  };
  const handleChangeCategoryFilter = async (id: any) => {
    const prevcaids = [...categoryFilter];
    if (prevcaids?.includes(id)) {
      const findINdex = prevcaids.findIndex((itemId: any) => itemId === id);
      prevcaids.splice(findINdex, 1);
    } else {
      prevcaids.push(id);
    }
    setCategoryFilter(prevcaids);
    dispatch(getAllBrandsAPI({ filters: { categoryIds: prevcaids } }));
    setBrandFilter([]);
    setMinPrice(0);
    setMaxPrice("");
    setMinDiscount("");
    setMaxDiscount("");
    setBrandFilter([]);
  };
  const handleChangeBrandFilter = (id: any) => {
    const prevcaids = [...brandFilter];
    if (prevcaids?.includes(id)) {
      const findINdex = prevcaids.findIndex((itemId: any) => itemId === id);
      prevcaids.splice(findINdex, 1);
    } else {
      prevcaids.push(id);
    }
    setBrandFilter(prevcaids);
  };
  const handleChangeTypeFilter = (id: any) => {
    setTypeFilter(typeFilter != id ? id : "");
    setBrandFilter([]);
    setMinPrice(0);
    setMaxPrice("");
    setMinDiscount("");
    setMaxDiscount("");
    setBrandFilter([]);
    // setCategoryFilter([]);
  };

  const handleonFilterName = async (event: any) => {
    setSearchText(event);
    handleClearAll();
  };

  const handleonFilterDiscount = (value: any) => {
    setMinDiscount(minDiscount != value[0] ? value[0] : "");
    setMaxDiscount(maxDiscount != value[1] ? value[1] : "");
  };
  const filterPriceRange = (value: any) => {
    setMinPrice(value?.[0] ?? 0);
    setMaxPrice(value?.[1]);
  };

  const handleClearAll = () => {
    setSortBy("");
    setMinPrice(0);
    setMaxPrice("");
    setMinDiscount("");
    setMaxDiscount("");
    setCategoryFilter([]);
    setBrandFilter([]);
    setTypeFilter("");
  };
  const getAllUsersCall = async () => {
    let body = {} as any;
    if (searchText) {
      body.searchText = searchText;
    }
    if (sortBy) {
      body.sortBy = sortBy;
    }
    if (categoryFilter) {
      body.categoryIds = categoryFilter;
    }
    if (brandFilter) {
      body.brands = brandFilter;
    }
    if (minPrice === 0 || minPrice) {
      body.minPrice = minPrice;
    }
    if (maxPrice) {
      body.maxPrice = maxPrice;
    }
    if (minDiscount) {
      body.minDiscount = minDiscount;
    }
    if (maxDiscount) {
      body.maxDiscount = maxDiscount;
    }
    if (typeFilter) {
      body.medicineType = typeFilter;
    }
    body.count = pageSize;
    body.page = visibleCount;

    await dispatch(getAllMedicineAPI(body));
  };

  useEffect(() => {
    if (sectionName !== "allProductsBySalt") {
      getAllUsersCall();
    }
  }, [
    visibleCount,
    pageSize,
    JSON.stringify(categoryFilter),
    searchText,
    sortBy,
    maxPrice,
    minPrice,
    maxDiscount,
    minDiscount,
    brandFilter,
    typeFilter,
  ]);
  useEffect(() => {
    const objBody = {
      categorieId: "",
    };
    if (sectionName === "allProductsBySalt") {
      dispatch(getAllSaltCategoriesAPI(objBody));
    } else {
      dispatch(getAllCategoriesAPI({ sectionName: "pharmacy" }));
      dispatch(getAllSubCategoriesAPI(objBody));
    }
  }, []);

  useEffect(() => {
    dispatch(getAllBrandsAPI({ filters: { categoryIds: categoryFilter } }));
  }, [categoryFilter]);
  return (
    <PharmacyStyled>
      {isLoading && <Loader />}

      {sectionName === "allProductsBySalt" ? (
        <div className="allProductsBySalt-div">
          <div>
            <div className=" comparison-carousel-div">
              <BreadCrumbModule
                moduleName={"pharmacy"}
                medicines={sectionName}
                SelectedCategory={SelectedCategory}
                list={list}
              />
              <p className=" comparison-carousel-title">
                Compare Generic & Branded
              </p>
              <div className=" comparison-carousel-filter-btn">
                {allSaltCategoryList?.category_ids?.map(
                  (label: any, index: any) => {
                    if (!label?.name) {
                      return null;
                    }
                    const isActive = btnCategoryId.includes(label.id);
                    return (
                      <button
                        key={index}
                        onClick={() => handleClick(label.id)}
                        className={isActive ? "active btn" : "btn"}
                        style={{
                          backgroundColor: btnCategoryId.includes(label.id)
                            ? "#252b61"
                            : "white",
                          color: btnCategoryId.includes(label.id)
                            ? "white"
                            : "black",
                        }}
                      >
                        {label?.name}
                      </button>
                    );
                  }
                )}
              </div>
            </div>
            {CompareMedicineList?.length > 0 ? (
              <div>
                <div className="all-compare-medicines-list">
                  {CompareMedicineList?.map((item: any, index: any) => {
                    const totLen = item?.length;
                    const totLen1 = totLen - 1;
                    const item2 = [...item];
                    item2.sort(
                      (a: any, b: any) =>
                        a.discounted_price - b.discounted_price
                    );
                    const isAddedToCarts = pProducts?.medicines;
                    return (
                      <ComparisonMedicineCardModule
                        key={index}
                        generic={item2?.[0]}
                        addToCart={addToCart}
                        isAddedtoCart={isAddedToCarts}
                        branded={item2?.[totLen1]}
                      />
                    );
                  })}
                </div>
              </div>
            ) : (
              <>
                <div className="no-comparision-found-sec">
                  <h5>No Comparision found</h5>
                </div>
              </>
            )}
          </div>

          <div className="pagination-box-sec-pha mb-3">
            <button
              onClick={getAllCompareProductsCall}
              className="load-more-btn"
            >
              Load More
            </button>
          </div>
        </div>
      ) : (
        <div className="all-pharmacy-page-div">
          <div className="filter-module-div">
            <SideFilterModule
              allCategoriesList={allCategoriesList}
              allBrandsList={allBrandsList}
              allSubCategoriesList={allSubCategoriesList}
              handleChangeCategoryFilter={handleChangeCategoryFilter}
              handleonFilterDiscount={handleonFilterDiscount}
              filterPriceRange={filterPriceRange}
              handleClearAll={handleClearAll}
              categoryFilter={categoryFilter}
              brandFilter={brandFilter}
              minDiscount={minDiscount}
              maxDiscount={maxDiscount}
              allTypeList={allTypeList}
              typeFilter={typeFilter}
              handleChangeBrandFilter={handleChangeBrandFilter}
              handleChangeTypeFilter={handleChangeTypeFilter}
              setSelectedSortOption={setSelectedSortOption}
              origin={"pharmacy"}
              pathName={"/pharmacy"}
            />
          </div>
          <div className="right-card-module-div">
            <BreadCrumbModule
              moduleName={"pharmacy"}
              medicines={sectionName}
              SelectedCategory={SelectedCategory}
              list={list}
            />
            <div className="parent-search-fild-div">
              <div className="parent-search-left-div">
                <SearchByTextModule
                  details={pharmacySearchTextChange}
                  handleonFilterName={handleonFilterName}
                  setSearchText={setSearchText}
                  searchText={searchText}
                />
              </div>

              <div className="selector-filter-sub-module-div">
                <Select
                  showSearch
                  placeholder="Sort By"
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  defaultValue="discount"
                  onChange={handleSortChange}
                  options={[
                    { value: "discount", label: "Discount" },
                    { value: "desc", label: "Price: High to Low" },
                    { value: "asc", label: "Price: Low to High" },
                  ]}
                />
              </div>
            </div>
            <div className="page-count-div">
              <p>
                Showing 1 to {pageSize * visibleCount} Medicines of{" "}
                {MedicinesCount} Medicines
              </p>
            </div>
            <div className="card-module-div">
              {allMedicinesList?.map((item: any) => {
                const isAddedToCart = pProducts?.medicines?.find(
                  (item2: any) => item2?.service_code === item.service_code
                );
                return (
                  <MedicineCardModule
                    key={item.service_code}
                    medicineDetail={item}
                    isAddedtoCart={isAddedToCart}
                    addToCart={addToCart}
                    type={sectionName}
                  />
                );
              })}
            </div>
            <div className="pagination-box-sec-pha">
              <div className="pagination-box-sec-pha">
                {MedicinesCount > pageSize * visibleCount && (
                  <button onClick={handleLoadMore} className="load-more-btn">
                    Load More
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </PharmacyStyled>
  );
};

export default AllPharmacyList;
