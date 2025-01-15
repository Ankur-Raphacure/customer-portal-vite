import React from "react";
import Autocomplete from "react-google-autocomplete";

const AutocompleteField = (data: any) => {
  return (
    <>
      <Autocomplete
        apiKey="AIzaSyDiKV3OLHnGFYI4qhcIKjk7tzG-RXeUI5s"
        // apiKey="AIzaSyARosIuzL0hgbrETpbUxfdhjLAL9A1759A"
        id={data?.id ?? "address1"}
        onPlaceSelected={data?.onPlaceSelected}
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
