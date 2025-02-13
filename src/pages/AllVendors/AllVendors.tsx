import React, { useState, useEffect } from "react";

import Loader from "../../components/Loader/Loader";
import BreadCrumbModule from "../Pharmacy/BreadCrumbModule";
import { LabtestStyled } from "../LabTestv2/LabTest.styled";
import { AllVendorsStyled } from "./AllVendors.styled";
import AutocompleteField from "../../components/AutoComplete";
import { useDispatch, useSelector } from "react-redux";
import { getNearbyVendorsAPI } from "../../redux/slices/Profile/ProfileService";
import { toast } from "react-toastify";
import NearbyCard from "../../components/NearbyCard/NearbyCard";
import { truncateText } from "../../Scenes/common";

const AllVendors = (props: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { selectedCurrentAddress, nearbyVendors } = useSelector(
    (ReduxState: any) => ReduxState.profile,
  );

  const getNearbyVendors = (latitude: any, longitude: any) => {
    const nearbyVendorsBody = {
      latitude: latitude,
      longitude: longitude,
      section_name: "labtest",
    };
    dispatch(getNearbyVendorsAPI(nearbyVendorsBody));
  };

  useEffect(() => {
    console.log("selectedCurrentAddress : ", selectedCurrentAddress);
    const nearbyVendorsBody = {
      latitude: selectedCurrentAddress?.latitude,
      longitude: selectedCurrentAddress?.longitude,
      section_name: "labtest",
    };
    dispatch(getNearbyVendorsAPI(nearbyVendorsBody));
  }, [selectedCurrentAddress]);

  const list = [
    {
      title: "Vendors",
      link: `/labtest`,
    },
  ];

  const handlePlaceSelected = (place: any) => {
    if (place) {
      // Extract required details
      const name = place.name || "";
      const fullAddress = place.formatted_address;
      const latitude = place.geometry?.location?.lat();
      const longitude = place.geometry?.location?.lng();
      const addressComponents = place.address_components;

      const city = addressComponents?.find((component: any) =>
        component.types.includes("locality"),
      )?.long_name;

      const state = addressComponents?.find((component: any) =>
        component.types.includes("administrative_area_level_1"),
      )?.long_name;

      const country = addressComponents?.find((component: any) =>
        component.types.includes("country"),
      )?.long_name;

      const postalCode = addressComponents?.find((component: any) =>
        component.types.includes("postal_code"),
      )?.long_name;

      const address1 = addressComponents
        ?.filter((component: any) =>
          component.types.some((type: string) =>
            ["street_number", "route", "sublocality", "neighborhood"].includes(
              type,
            ),
          ),
        )
        .map((component: any) => component.long_name)
        .join(", ");

      // Address2 includes sublocality, state, and country
      const sublocality = addressComponents?.find((component: any) =>
        component.types.includes("sublocality"),
      )?.long_name;

      const address2 = [sublocality, state, country]
        .filter((part) => part)
        .join(", ");

      console.log({
        name,
        fullAddress,
        latitude,
        longitude,
        state,
        city,
        country,
        postalCode,
        address1,
        address2,
      });
      if (latitude && longitude) {
        getNearbyVendors(latitude, longitude);
      } else {
        console.error("Unable to get location");
        toast.error("Unable to get location");
      }
    }
  };
  return (
    <LabtestStyled>
      <AllVendorsStyled>
        {isLoading && <Loader />}
        <div className="all-pharmacy-page-div">
          {/* <div className="filter-module-div">
            <SideFilterModule origin={"vendor"} />
          </div> */}
          <div className="right-card-module-div">
            <BreadCrumbModule
              moduleName={"vendor"}
              medicines={"All"}
              list={list}
            />

            <div className="page-count-div">
              {/* <p>Showing 1 to 10 Tests of 100 Vendors</p> */}
            </div>
          </div>
          <AutocompleteField
            onPlaceSelected={(place: any) => handlePlaceSelected(place)}
            autoFocus={true}
            name="address"
            id="address"
            defaultValue={""}
            placeholder="Enter a Place"
            onChange={(e: any) => {}}
          />
        </div>
        <div className="nearbyCards">
          {nearbyVendors?.filteredVendors || nearbyVendors?.vendors ? (
            (nearbyVendors?.filteredVendors || nearbyVendors?.vendors)
              ?.slice(0, 5)
              .map((vendor: any, index: any) => (
                <NearbyCard
                  key={vendor?.id || index}
                  title={vendor?.name || "N/A"} // Vendor name
                  image={vendor?.image}
                  rating={(vendor?.rating || "0").toString()}
                  distance={`${parseFloat(vendor?.distance_km || 0).toFixed(
                    2,
                  )} Km`}
                  location={truncateText(vendor?.address, 40) || "N/A"}
                  id={vendor?.id}
                />
              ))
          ) : (
            <p> No Nearby Labs Found</p>
          )}
        </div>
      </AllVendorsStyled>
    </LabtestStyled>
  );
};

export default AllVendors;
