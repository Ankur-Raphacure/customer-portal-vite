import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesAPI } from "../../../redux/slices/labtest/labtestService";
import SideFilterModule from "../sideModuleFilter/SideFilterModule";
import SearchByTextModule from "../../Pharmacy/SearchByTextModule";
import BreadCrumbModule from "../../Pharmacy/BreadCrumbModule";
import ProductCard from "../../../components/Gym/productCard/productCard/ProductCard";
import { RootState } from "../../../redux/store";
import {
  getAllFitnessCentersAPI,
  getAllFitnessVendorsAPI,
} from "../../../redux/slices/fitness/fitnessService";
import { FitnessCenterPageStyle } from "./FitnessCentersPage.style";
import { toast } from "react-toastify";
import Loader from "../../../components/Loader/Loader";

const FitnessCenterPage = (props: any) => {
  let { sectionName } = props?.match?.params;
  sectionName = sectionName === "all" ? "" : sectionName;

  const list = [
    {
      title: "Fitness",
      link: `/fitness_v2`,
    },
    {
      title: "Gyms",
      link: "/fitnessCenters",
    },
  ];
  const [pageSize, setPageSize] = useState(20);
  const [searchText, setSearchText] = useState("");
  const [categoryFilter, setCategoryFilter] = useState(
    sectionName ? ([Number(sectionName)] as any) : ([] as any),
  );
  const [vendorFilter, setVendorFilter] = useState([]);

  const dispatch = useDispatch();

  const handleChangeCategoryFilter = async (id: any) => {
    const prevcaids = [...categoryFilter];
    if (prevcaids?.includes(id)) {
      const findINdex = prevcaids.findIndex((itemId: any) => itemId === id);
      prevcaids.splice(findINdex, 1);
    } else {
      prevcaids.push(id);
    }
    setCategoryFilter(prevcaids);
  };

  const handleonFilterName = async (event: any) => {
    setSearchText(event);
    handleClearAll();
  };

  const handleClearAll = () => {
    setCategoryFilter([]);
  };

  const handleVendorChangeFilter = (id: string) => {
    setVendorFilter((pre: any) => {
      if (pre?.includes(id)) {
        return pre?.filter((item: any) => item !== id);
      } else {
        return [...pre, id];
      }
    });
  };

  // filter data fetch for vendors and categories

  const { allCategoriesList } = useSelector(
    (ReduxState: any) => ReduxState.labtest,
  );
  const { fitnessVendors } = useSelector((store: RootState) => store?.Fitness);

  useEffect(() => {
    dispatch(getAllCategoriesAPI({ sectionName: "fitness" }));
    dispatch(getAllFitnessVendorsAPI({ status: "approved" }));
  }, []);

  //

  //fitness centers

  const { selectedCurrentAddress } = useSelector(
    (ReduxState: RootState) => ReduxState.profile,
  );

  const [pageNo, setPageNo] = useState(1);

  const {
    loading: fitnessCentersLoading,
    data: fitnessCentersData,
    error: fitnessCentersError,
  } = useSelector((store: RootState) => store.Fitness.fitnessCenters);

  useEffect(() => {
    if (fitnessCentersError) {
      toast.error(fitnessCentersError);
    }
  }, [fitnessCentersError]);

  useEffect(() => {
    const filterData = {
      searchText: searchText ?? "",
    };
    dispatch(
      getAllFitnessCentersAPI({
        page: pageNo,
        count: pageSize,
        ...filterData,
        category_ids: categoryFilter,
        status: "active",
        role: "user",
        latitude: selectedCurrentAddress?.latitude,
        longitude: selectedCurrentAddress?.longitude,
        vendor_id: vendorFilter,
      }),
    );
  }, [
    pageNo,
    pageSize,
    dispatch,
    searchText,
    categoryFilter,
    selectedCurrentAddress,
    vendorFilter,
  ]);

  const handleLoadMore = () => {
    setPageSize((pre) => {
      return pre * 2;
    });
  };

  console.log(fitnessVendors);

  console.log("centers", fitnessCentersData);

  //

  return (
    <FitnessCenterPageStyle>
      {fitnessCentersLoading && <Loader />}
      <div className="all-fitnesscenter-page-div container">
        <div className="filter-module-div">
          <SideFilterModule
            allCategoriesList={allCategoriesList}
            handleChangeCategoryFilter={handleChangeCategoryFilter}
            handleClearAll={handleClearAll}
            categoryFilter={categoryFilter}
            origin={"fitness"}
            vendors={fitnessVendors}
            selectedVendors={vendorFilter}
            handleVendorChangeFilter={handleVendorChangeFilter}
          />
        </div>
        <div className="right-card-module-div">
          <BreadCrumbModule moduleName={"gym"} list={list} />
          <div className="parent-search-left-div">
            <SearchByTextModule
              details={[" 💪 Gym"]}
              handleonFilterName={handleonFilterName}
              setSearchText={setSearchText}
              searchText={searchText}
            />
          </div>
          <div className="parent-search-fild-div">
            <div className="all-fitness-center-div">
              <h2>All Fitness Centres</h2>
            </div>
          </div>
          <div className="page-count-div">
            {typeof fitnessCentersData?.totalRecords === "number" &&
            !isNaN(fitnessCentersData?.totalRecords) ? (
              <p>
                {fitnessCentersData?.fitnessCenters?.length > pageSize * pageNo
                  ? `Showing ${
                      fitnessCentersData?.fitnessCenters?.length ? "1" : "0"
                    } to ${pageSize * pageNo} Fitness of 
                   ${fitnessCentersData?.totalRecords} Fitness Centers`
                  : `Showing ${
                      fitnessCentersData?.fitnessCenters?.length ? "1" : "0"
                    } to ${
                      fitnessCentersData?.fitnessCenters?.length
                    } FitnessCenters`}
              </p>
            ) : null}
          </div>
          <div className="card-module-div">
            {Array.isArray(fitnessCentersData?.fitnessCenters) &&
              !fitnessCentersLoading &&
              fitnessCentersData?.fitnessCenters?.map((item: any) => {
                const data = {
                  name: item?.name,
                  place: item?.city,
                  imgLink: item?.images?.[0],
                  rating: item?.rating ?? "n/a",
                  distance: item?.distance_km ?? "N/A",
                  isRapha: item?.isRapha,
                };
                return (
                  <ProductCard
                    data={data}
                    key={item?.id}
                    link={`/fitnessCenters/${item?.name?.split?.(" ")?.join("-")}/${item?.id}`}
                  />
                );
              })}
          </div>
          <div className="pagination-box-sec-pha">
            <div className="pagination-box-sec-pha">
              {fitnessCentersData?.totalRecords > pageSize * pageNo && (
                <button onClick={handleLoadMore} className="load-more-btn">
                  Load More
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </FitnessCenterPageStyle>
  );
};

export default FitnessCenterPage;
