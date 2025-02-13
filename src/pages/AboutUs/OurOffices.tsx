import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { OurOfficesStyled } from "./OurOffices.styled";

const OurOffices = () => {
  const { configInfo } = useSelector((ReduxState: any) => ReduxState.config);
  const [selectedCities, setSelectedCities] = useState<any>();

  useEffect(() => {
    if (configInfo.cities) {
      const citiesWithImages = configInfo.cities.filter(
        (city: any) => city.image,
      );
      const firstSixCitiesWithImages = citiesWithImages.slice(0, 6);
      setSelectedCities(firstSixCitiesWithImages);
      console.log("Selected Cities: ", firstSixCitiesWithImages);
    }
  }, [configInfo]);

  return (
    <OurOfficesStyled>
      <h3>Our Offices</h3>
      <div className="image-gallery">
        {selectedCities?.map((city: any) => (
          <div key={city.id} className="card">
            <img src={city.image} alt={city.name} className="city-image" />
            <div className="card-content">
              <h2>{city.name}</h2>
              <p>{city.address}</p>
            </div>
          </div>
        ))}
      </div>
    </OurOfficesStyled>
  );
};

export default OurOffices;
