import { debounce } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { getUniversalSearchData } from "../../redux/slices/generic/genericService";
import { useDispatch, useSelector } from "react-redux";
import SearchByTextModule from "../Pharmacy/SearchByTextModule";
import { pharmacySearchTextChange } from "../Pharmacy/PharmacyObjectsModule";
import { IoCloseOutline } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import { updateUniversalSearchResults } from "../../redux/slices/generic/genericSlice";
import { PharmacyStyled } from "../Pharmacy/Pharmacy.styled";
import GalleryPreview from "./GalleryPreview";
import Specialization from "./Specialization";
import ServicesSection from "./ServicesSection";
import AboutUs from "./AboutUs";
import GetStarted from "./GetStarted";
import Doctor from "./Doctor";
import AffiliatedServices from "./AffiliatedServices";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";
import { toast } from "react-toastify";
import { getHyperSiteByName } from "../../redux/slices/hypersite/hypersiteService";
import { HyperSitePageStyled } from "./HyperSitePage.styled";

const HyperSitePage = (props: any) => {
  const dispatch = useDispatch();
  const { siteName } = props?.match?.params;
  const { universalSearchResults } = useSelector(({ generic }: any) => generic);
  const [showSearchPopupModel, setShowSearchPopupModel] = useState(false);
  const [searchText, setSearchText] = useState<any>("");
  const history = useHistory();
  const [hyperSiteDetails, setHyperSiteDetails] = useState();

  useEffect(() => {
    console.log("siteName : ", siteName);
    const getHyperSiteData = async () => {
      const res = (await dispatch(getHyperSiteByName(siteName))) as any;

      if (res?.error) {
        toast.error(res?.error?.message || "Unknown Error Occured");
        return;
      }
      setHyperSiteDetails(res?.payload?.data || {});
    };
    getHyperSiteData();
  }, [siteName, dispatch]);

  const fetchSearchResults1 = (searchQuery: any) => {
    const searchObj = {
      searchText: searchQuery,
      type: "generic,homeopathy,wellness,branded",
    };
    dispatch(getUniversalSearchData(searchObj));
  };
  const debouncedSearch1 = useCallback(
    debounce((searchQuery: any) => fetchSearchResults1(searchQuery), 500),
    []
  );
  const handleonFilterName = (e: any) => {
    setShowSearchPopupModel(true);
    setSearchText(e);
    debouncedSearch1(e);
  };
  const handleButtonClick = () => {
    history.push("/bookappointment");
  };
  const navigateTo = (url: any) => {
    history.push(url);
  };
  const handleSearchGoTo = (searR: any) => {
    setShowSearchPopupModel(false);
    dispatch(updateUniversalSearchResults([]));
    if (searR?.to_link === "/pharmacy") {
      navigateTo(`/item/generic/${searR?.linkable_id}`);
    } else if (searR?.linkable_type === "packages") {
      navigateTo(`/labPackageDetils/${searR?.linkable_id}`);
    } else if (searR?.type === "ctmri") {
      navigateTo(`/radiology/scan-details/${searR?.linkable_id}`);
    } else if (searR?.linkable_type === "tests") {
      navigateTo(`/labTestDetils/${searR?.linkable_id}`);
    } else if (searR?.type === "hospital") {
      navigateTo(`/hospital/${searR?.linkable_id}`);
    } else {
      navigateTo(`/doctor?q=${searchText}`);
    }
  };

  useEffect(() => {
    console.log("hyperSiteDetails : ", hyperSiteDetails);
  }, [hyperSiteDetails]);

  return (
    <HyperSitePageStyled>
      <div className="searchWrapper">
        <SearchByTextModule
          details={pharmacySearchTextChange}
          handleonFilterName={handleonFilterName}
        />
        <PharmacyStyled>
          {showSearchPopupModel && (
            <div className="search-popup">
              <div className="search-popup-content">
                <div className="search-heading-text-div">
                  <p>Showing Result for {searchText}</p>
                  <button
                    className="btn"
                    onClick={() => setShowSearchPopupModel(false)}
                  >
                    <IoCloseOutline />
                  </button>
                </div>
                {searchText && universalSearchResults?.length > 0 ? (
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
                        <p className="search-popup-name">{item?.name}</p>
                        <p className="search-popup-type">
                          <img
                            src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/76741-1732179533099.png"
                            alt=""
                          />
                        </p>
                      </div>
                    </div>
                  ))
                ) : searchText.length > 2 ? (
                  <div>
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
                  </div>
                ) : null}
              </div>
            </div>
          )}
        </PharmacyStyled>
      </div>
      <GalleryPreview siteDetails={hyperSiteDetails} />
      <div className="heroText">
        <h1>Your Partner in Health and Wellness</h1>
        <button onClick={handleButtonClick}>Book Appointment</button>
      </div>
      <Specialization siteDetails={hyperSiteDetails} />
      <ServicesSection siteDetails={hyperSiteDetails} />
      <Doctor siteDetails={hyperSiteDetails} />
      <AboutUs siteDetails={hyperSiteDetails} />
      <AffiliatedServices siteDetails={hyperSiteDetails} />
      <Testimonials siteDetails={hyperSiteDetails} />
      <GetStarted siteDetails={hyperSiteDetails} />
      <Gallery siteDetails={hyperSiteDetails} />
    </HyperSitePageStyled>
  );
};

export default HyperSitePage;
