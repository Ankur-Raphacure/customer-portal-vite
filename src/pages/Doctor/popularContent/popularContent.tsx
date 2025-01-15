import { useState } from "react";
import { PopularContentstyled } from "./popularContent.styled";

const PopularContent = (props: any) => {
  const selectedCity = "Bangalore";
  const initialSpecilities = [
    "Pediatric Dermatologist",
    "Alternative Medicine",
    "Dental Surgeon",
    "Family Physician",
    "Oral Pathologist",
    "Sexologist (Ayurveda)",
    "Public Health Dentist",
  ];

  const [availableSpecilities, setSpecilities] = useState(initialSpecilities);
  const [currentCity, setCity] = useState(selectedCity);

  return (
    <PopularContentstyled>
      <div className="specilitiescontainer round-shadow">
        <div className="specilitiesdata">
          <div className="specilitiestitle">
            Popular speciality's In {currentCity}
          </div>
          <div className="specilitieslistitem">
            {availableSpecilities?.map((specilities: string) => (
              <div className="specilitieslist block" key={specilities}>
                <a
                  className="specilitieslistvalue poppins-regular"
                  href="#content"
                  title={specilities}
                >
                  {specilities} in {currentCity}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PopularContentstyled>
  );
};

export default PopularContent;
