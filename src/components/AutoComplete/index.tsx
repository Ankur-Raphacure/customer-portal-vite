import React from "react";
import Autocomplete from "react-google-autocomplete";

const AutocompleteField = (data: any) => {
  const handlePlaceSelected = (place: google.maps.places.PlaceResult) => {
    if (place && place.geometry) {
      const address = place.formatted_address;
      const lat = place.geometry.location?.lat();
      const lng = place.geometry.location?.lng();

      if (data?.onPlaceSelected) {
        console.log("onPlaceSelected");

        data.onPlaceSelected(place);
      }
      if (data?.onAddressSelected) {
        console.log("onAddressSelected");
        data.onAddressSelected(address, lat, lng, place);
      }
    }
  };
  return (
    <>
      <Autocomplete
        apiKey="AIzaSyDiKV3OLHnGFYI4qhcIKjk7tzG-RXeUI5s"
        // apiKey="AIzaSyARosIuzL0hgbrETpbUxfdhjLAL9A1759A"
        id={data?.id ?? "address1"}
        onPlaceSelected={handlePlaceSelected}
        componentRestrictions={{ country: "in" }}
        options={{
          types: ["geocode", "establishment"],
          componentRestrictions: { country: "in" },
        }}
        name={data?.name}
        className={data?.className ? `${data?.className} input` : "input"}
        placeholder={
          data?.placeholder ? data?.placeholder : "Enter Address Line 1"
        }
        defaultValue={data?.defaultValue}
        onChange={data?.onChange}
        disabled={data?.disabled}
        autoFocus={data?.autoFocus}
        maxLength={data?.maxLength}
        onBlur={data.onBlur}
      />
    </>
  );
};
export default AutocompleteField;
