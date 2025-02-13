import { pharmacySearchTextChange } from "../Pharmacy/PharmacyObjectsModule";
import RPHomeV2 from "../../components/RaphaPlus/RPHomeV2/RPHomeV2";
import SearchByTextModule from "../Pharmacy/SearchByTextModule";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";
import { checkIsMobile } from "../../Scenes/common";
import { getUniversalSearchData } from "../../redux/slices/generic/genericService";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { updateUniversalSearchResults } from "../../redux/slices/generic/genericSlice";

import { debounce } from "lodash";

const SearchComponent = () => {
  const [searchText, setSearchText] = useState<any>("");
  const [showSearchPopupModel, setShowSearchPopupModel] = useState(false);
  const [showSearchData, setShowSearchData] = useState(false);
  const ref = useRef() as any;
  const history = useHistory();
  const dispatch = useDispatch();
  const { universalSearchResults } = useSelector(
    (ReduxState: any) => ReduxState?.generic
  );
  console.log("universalSearchResults", universalSearchResults);
  console.log("searchText", searchText);
  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (showSearchData && ref.current && !ref.current.contains(e.target)) {
        setShowSearchData(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showSearchData]);
  const debouncedSearch1 = useCallback((searchQuery: any) => {
    dispatch(getUniversalSearchData({ searchText: searchQuery }));
    debounce((searchQuery) => setSearchText(searchQuery), 500);
  }, []);
  const navigateTo = (url: any) => {
    history.push(url);
  };

  const handleonFilterName = async (event: any) => {
    setShowSearchPopupModel(true);
    debouncedSearch1(event);
    setSearchText(event);
    dispatch(getUniversalSearchData({ searchText: event }));
  };
  const handleToClosePopUp = () => {
    setShowSearchPopupModel(false);
  };
  const handleSearchGoTo = (searR: any) => {
    setShowSearchData(false);
    dispatch(updateUniversalSearchResults([]));
    if (searR?.to_link == "/pharmacy") {
      navigateTo(`/item/generic/${searR?.linkable_id}`);
    } else if (searR?.linkable_type == "packages") {
      navigateTo(`/labPackageDetils/${searR?.linkable_id}`);
    } else if (searR?.linkable_type == "tests") {
      navigateTo(`/labTestDetils/${searR?.linkable_id}`);
    } else if (searR?.type == "hospital") {
      navigateTo(`/hospital/${searR?.linkable_id}`);
    } else {
      navigateTo(`/doctor`);
    }
  };
  return (
    <>
      <div className="perent-search-div2222 perent-search-div1">
        <SearchByTextModule
          details={pharmacySearchTextChange}
          handleonFilterName={handleonFilterName}
          setSearchText={debouncedSearch1}
          searchText={searchText}
        />

        {showSearchPopupModel && (
          <div className="search-popup">
            <div className="search-popup-content">
              <div className="search-heading-text-div">
                <p>Showing Result for {searchText}</p>
                <button className="btn" onClick={handleToClosePopUp}>
                  <IoCloseOutline />
                </button>
              </div>
              {searchText?.length > 2 && universalSearchResults?.length > 0 ? (
                universalSearchResults.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="search-popup-item"
                    onClick={() => handleSearchGoTo(item)}
                  >
                    {item?.image && (
                      <div className="search-popup-image">
                        <img
                          src={item?.image}
                          alt={item?.name || "Search Result"}
                        />
                      </div>
                    )}
                    <div className="search-popup-details">
                      <p className="search-popup-name">
                        {item?.name || item?.service_name}
                      </p>
                      <p className="search-popup-type">
                        <img
                          src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1732179533099.png"
                          alt=""
                        />
                      </p>
                    </div>
                  </div>
                ))
              ) : searchText?.length > 3 ? (
                <div className="search-popup-no-results">
                  <p className="search-popup-title">
                    No result found for {searchText}
                  </p>
                  <p className="search-popup-sub-title">
                    Search with another brand or category
                  </p>
                  <img
                    src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1732181068454.png"
                    alt=""
                  />
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchComponent;
