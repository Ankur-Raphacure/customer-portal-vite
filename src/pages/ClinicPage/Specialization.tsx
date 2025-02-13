import React, { useEffect, useState, useMemo } from "react";
import { categories, subCategories } from "../Home/HomeObjClass";
import MultiCarouselModal from "../Home/MultiCarouselModal";
import { SpecializationStyled } from "./Specialization.styled";

const Specialization = ({ siteDetails }: any) => {
  const [hyperSiteDetails, setHyperSiteDetails] = useState<any>({});
  const [allServices, setAllServices] = useState<any>([]);
  const [matchedSpecializations, setMatchedSpecializations] = useState<any>([]);

  useEffect(() => {
    const combined = [...categories, ...subCategories];
    setAllServices(combined);
  }, []);

  useEffect(() => {
    setHyperSiteDetails(siteDetails);
  }, [siteDetails]);

  // const staticData = [
  //   {
  //     id: 1,
  //     image:
  //       "https://png.pngtree.com/png-clipart/20231002/original/pngtree-young-afro-professional-doctor-png-image_13227671.png",
  //     color: "#FEEFC1",
  //   },
  //   {
  //     id: 2,
  //     image:
  //       "https://png.pngtree.com/png-clipart/20231002/original/pngtree-young-afro-professional-doctor-png-image_13227671.png",
  //     color: "#FEE6DC",
  //   },
  //   {
  //     id: 3,
  //     image:
  //       "https://png.pngtree.com/png-clipart/20231002/original/pngtree-young-afro-professional-doctor-png-image_13227671.png",
  //     color: "#DFF7EA",
  //   },
  // ];

  // Memoize specializations to prevent infinite re-renders
  const specializations = useMemo(() => {
    return (
      hyperSiteDetails?.specializations?.map((name: string, index: number) => ({
        id: index + 1,
        title: name,
      })) || []
    );
  }, [hyperSiteDetails]);

  useEffect(() => {
    const foundSpecializations = allServices.reduce(
      (result: any, service: any) => {
        const titleOrName = service.title || service.name;
        if (specializations.some((spec: any) => spec.title === titleOrName)) {
          result.push({
            title: titleOrName || "",
            name: titleOrName || "",
            imageUrl: service.imageUrl,
            navigatePath: service.navigatePath,
          });
        }
        return result;
      },
      [],
    );
    setMatchedSpecializations(foundSpecializations);
  }, [specializations, allServices]);

  useEffect(() => {
    console.log("matchedSpecializations : ", matchedSpecializations);
  }, [matchedSpecializations]);

  const [showSpecialization, setShowSpecialization] = useState(4);

  const handleViewAllSpecialization = async () => {
    setShowSpecialization(matchedSpecializations.length);
  };

  return (
    <SpecializationStyled>
      <div className="specialization">
        <h2>Our Specialization</h2>
        <div className="paragraph">
          <p>
            Do consectetur proident proident id eiusmod deserunt consequat
            pariatur ad ex velit do Lorem reprehenderit.
          </p>
          {/* <button className="view">View All</button> */}
        </div>
        <div className="multi-carousel-modal">
          <MultiCarouselModal
            allCategoriesList={matchedSpecializations}
            itemstoShow={5}
          />
        </div>
        <div className="mobile-view">
          <div className="specialization-grid">
            {matchedSpecializations
              ?.slice(0, showSpecialization)
              ?.map((spec: any, index: number) => (
                <div className="specialization-card" key={index}>
                  <div className="image-container">
                    <img
                      src={spec.imageUrl || "default-image-url"}
                      alt={spec.title}
                      className="specialization-image"
                    />
                  </div>
                  <p className="specialization-name">{spec.title}</p>
                </div>
              ))}
          </div>
          {showSpecialization <= 4 && (
            <button className="view-more" onClick={handleViewAllSpecialization}>
              View More
            </button>
          )}
        </div>
        <button
          className="view-all-btn"
          onClick={() => {
            // Add your logic here
          }}
        >
          View All
        </button>
      </div>
    </SpecializationStyled>
  );
};

export default Specialization;
