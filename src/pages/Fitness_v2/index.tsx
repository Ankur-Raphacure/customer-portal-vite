import React, { useEffect, useState } from "react";
import { FitnessStyled } from "./Index.styled";
import ProductsDeck from "../../components/Gym/productsDeck/ProductsDeck";
import Category from "./Home/Category/Category";
import ProductCard from "../../components/Gym/productCard/productCard/ProductCard";
import SearchByTextModule from "../Pharmacy/SearchByTextModule";
import { useDispatch, useSelector } from "react-redux";
import {
  getCategoriesAPI,
  getGymVendorsAPI,
} from "../../redux/slices/generic/genericService";
import { RootState } from "../../redux/store";
import { getAllFitnessCentersAPI } from "../../redux/slices/fitness/fitnessService";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { MAP_KEY } from "../../config";
import { toast } from "react-toastify";
import { getAllCategoriesAPI } from "../../redux/slices/labtest/labtestService";
import { Link } from "react-router-dom";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const MapComponent = () => {
  const [currentPosition, setCurrentPosition] = useState<any>(null);

  let addr: any = null;
  const storedAddress = localStorage.getItem("selectedAddress");
  if (storedAddress) {
    addr = JSON.parse(storedAddress);
  }
  // Load the Google Maps JavaScript API
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: MAP_KEY, // Replace with your API key
  });

  // Get user's current location
  useEffect(() => {
    const setPosition = () => {
      if (addr?.latitude && addr?.longitude) {
        setCurrentPosition({
          lat: addr.latitude,
          lng: addr.longitude,
        });
      }
    };

    const getCurrentLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setCurrentPosition({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          (error) => {
            toast.error(`Error fetching geolocation: ${error?.message}`);
            console.error("Error fetching geolocation:", error);
          },
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    if (addr?.latitude && addr?.longitude) {
      setPosition();
    } else {
      getCurrentLocation();
    }
  }, [addr?.latitude, addr?.longitude]); // Only depend on specific addr properties

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mapWrapper">
      {currentPosition ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={currentPosition}
          zoom={15}
        >
          <Marker position={currentPosition} />
        </GoogleMap>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
};

const Fitness = () => {
  const [searchText, setSearchText] = useState() as any;

  const dispatch = useDispatch();

  const { user, userCity } = useSelector((ReduxState: any) => ReduxState.auth);
  const { selectedCurrentAddress } = useSelector(
    (ReduxState: RootState) => ReduxState.profile,
  );

  const getLatestData = (city = "bengaluru") => {
    dispatch(getGymVendorsAPI({ type: "gym", city: city?.toLowerCase() }));
    dispatch(getCategoriesAPI({ type: "gym", city: city?.toLowerCase() }));
  };

  useEffect(() => {
    getLatestData(userCity?.name);
  }, [userCity?.name]);

  //fitness centers

  const {
    loading: fitnessCentersLoading,
    data: fitnessCentersData,
    error: fitnessCentersError,
  } = useSelector((store: RootState) => store.Fitness.fitnessCenters);

  useEffect(() => {
    dispatch(
      getAllFitnessCentersAPI({
        page: 1,
        count: 10,
        status: "active",
        role: "user",
        latitude: selectedCurrentAddress?.latitude,
        longitude: selectedCurrentAddress?.longitude,
      }),
    );
  }, [selectedCurrentAddress]);

  useEffect(() => {
    if (fitnessCentersError) {
      toast.error(fitnessCentersError);
    }
  }, [fitnessCentersError]);

  console.log("centers", fitnessCentersData);
  //

  //fitness categories

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

  //

  return (
    <>
      <FitnessStyled>
        <div className="main-div">
          <div className="intro-banner">
            <img
              className="intro-banner-img"
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736322677896.png"
              alt="rapha gym banner"
            />
          </div>

          <div className="parent-search-left-div">
            <SearchByTextModule
              details={[" 💪 Gym"]}
              handleonFilterName={() => {}}
              setSearchText={setSearchText}
              searchText={searchText}
            />
          </div>

          {/* <div className="search-popUpDiv">
            {(searchText?.length > 0 || showSearchPopupModel) && (
              <div className="search-popup">
                <div className="search-popup-content">
                  <div className="search-heading-text-div">
                    <p>Showing Result for {searchText}</p>
                    <button
                      className="btn"
                      onClick={handleShowSearchPopupModel}
                    >
                      <IoCloseOutline />
                    </button>
                  </div>
                  {searchText?.length > 2 && allMedicinesList?.length > 0 ? (
                    allMedicinesList?.map((item: any, index: number) => (
                      <div
                        key={index}
                        className="search-popup-item"
                        onClick={() => handleSearchGoTo(item)}
                      >
                        {item?.image && (
                          <div className="search-popup-image">
                            <img
                              src={getFirstImageUrl(item?.image)}
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
          </div> */}

          <Category />

          <ProductsDeck
            viewAllLink="/fitnessCenters"
            padding={true}
            heading={"Nearby Fitness Centres"}
            data={fitnessCentersData?.fitnessCenters}
            renderCard={(item: any, i: any) => {
              const data = {
                name: item?.name,
                place: item?.city,
                imgLink: item?.images?.[0],
                rating: item?.rating,
                distance: item?.distance_km ?? "N/A",
                isRapha: item?.isRapha,
              };
              return (
                <ProductCard
                  key={i}
                  data={data}
                  link={`/fitnessCenters/${item?.name?.split?.(" ")?.join("-")}/${item?.id}`}
                />
              );
            }}
          />

          <div className="intro-banner">
            <img
              className="intro-banner-img"
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1736325923696.png"
              alt="rapha gym banner"
            />
          </div>

          <div className="other-services-container">
            <h3>Lorem ipsum dolor sit amet</h3>
            <div className="other-services-main">
              <div className="map-component">
                <MapComponent />
              </div>
              <div className="grid-container">
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
          </div>

          <div className="bottom-banner">
            <img
              className="intro-banner-img"
              src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/119535-1738749613353.png"
              alt="rapha gym banner"
            />
            <button className="bottom-banner-book-now">
              <Link
                className="bottom-banner-book-now-link"
                to="/fitnessCenters"
              >
                BOOK NOW
              </Link>
            </button>
          </div>

          {/* <ProductsDeck
            viewAllLink={"/gymlist_v2"}
            heading={"Nearby Game Centres"}
            data={allGymCategoriesList?.vendors?.slice(0, 10)}
            renderCard={(item: any, i: any) => {
              const data = {
                name: item?.name,
                place: item?.city,
                imgLink: item?.image,
              };
              return <ProductCard key={i} data={data} />;
            }}
          /> */}
        </div>
      </FitnessStyled>
    </>
  );
};

export default Fitness;
