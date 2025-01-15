import React, { useEffect, useState } from "react";
import { ServicesSectionStyled } from "./ServicesSection.styled";
import { categories, subCategories } from "../Home/HomeObjClass";
import MultiCarouselModal from "../Home/MultiCarouselModal";

const ServicesSection = ({ siteDetails }: any) => {
  const [hyperSiteDetails, setHyperSiteDetails] = useState<any>({});
  const [allServices, setAllServices] = useState<any>([]);
  const [matchedServices, setMatchedServices] = useState<any>([]);

  useEffect(() => {
    const combined = [...categories, ...subCategories];
    setAllServices(combined);
  }, []);

  useEffect(() => {
    setHyperSiteDetails(siteDetails);
  }, [siteDetails]);

  const [services, setServices] = useState<any>([]);
  useEffect(() => {
    setServices(hyperSiteDetails?.services || []);
  }, [hyperSiteDetails]);

  useEffect(() => {
    const foundServices = allServices.reduce((result: any, service: any) => {
      const titleOrName = (service.title || service.name) as any;
      if (services.includes(titleOrName)) {
        result.push({
          title: titleOrName || "",
          name: titleOrName || "",
          imageUrl: service.imageUrl,
          navigatePath: service.navigatePath,
        });
      }
      return result;
    }, []);
    setMatchedServices(foundServices);
  }, [services, allServices]);

  useEffect(() => {
    console.log("matchedServices : ", matchedServices);
  }, [matchedServices]);

  const [showSpecialization, setShowSpecialization] = useState(4);

  const handleViewAllSpecialization = async () => {
    setShowSpecialization(matchedServices.length);
  };

  return (
    <ServicesSectionStyled>
      <section className="services-section">
        <div className="container">
          <h2 className="heading">Our Services</h2>
          <p className="description">
            Do consectetur provident proident id eiusmod deserunt consequat
            <br />
            pariatur ad ex velit do Lorem reprehenderit.
          </p>
          <div className="multi-carousel-modal">
            <MultiCarouselModal
              allCategoriesList={matchedServices}
              itemstoShow={5}
            />
          </div>

          <div className="mobile-view">
            <div className="specialization-grid">
              {matchedServices
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
              <button
                className="view-more"
                onClick={handleViewAllSpecialization}
              >
                View More
              </button>
            )}
          </div>
          <div className="view-more">
            <button
              className="view-more-button"
              onClick={() => {
                /* Add your logic here */
              }}
            >
              View More
            </button>
          </div>
        </div>
      </section>
    </ServicesSectionStyled>
  );
};

export default ServicesSection;
