import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";
import { CategorySubDivcolors } from "./Home.styled";
import { MultiCarouselModalStyled } from "./MultiCarouselModal.styled";
import { useHistory } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import MedicineCardModule from "../Pharmacy/MedicineCardModule";
import ComparisonMedicineCardModule from "../Pharmacy/ComparisonMedicineCardModule";
import LabtestCard from "./LabtestCard";
import DoctorDetailsCard from "./DoctorDetailsCard";
import { GalleryView } from "../ClinicPage/GalleryView";

const CustomLeftArrow = ({ onClick }: any) => (
  <button className="custom-left-arrow" onClick={onClick}>
    <FaArrowLeft />
  </button>
);
const CustomRightArrow = ({ onClick }: any) => (
  <button className="custom-right-arrow" onClick={onClick}>
    <FaArrowRight />
  </button>
);
const MultiCarouselModal = (props: any) => {
  const {
    allPharmacyCategoriesList,
    catogorySelect,
    addToCart,
    itemstoShow,
    pProducts,
    allTypeMedicineDetail,
    allBrandedGenericMedicinesitems,
    allLabtests,
    allCategoriesList,
    categoryId,
    doctorDetails,
    galleryList,
  } = props;
  const history = useHistory();
  const itemsPerRow = itemstoShow && itemstoShow > 0 ? itemstoShow : 3;
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: itemsPerRow,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: itemsPerRow,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  console.log(allCategoriesList, "allCategoriesList");

  return (
    <MultiCarouselModalStyled>
      <div className="parent">
        <Carousel
          responsive={responsive}
          autoPlay={false}
          swipeable={true}
          draggable={false}
          showDots={false}
          infinite={false}
          partialVisible={false}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
        >
          {allCategoriesList?.map((item: any, index: any) => {
            if (!item?.name) {
              return null;
            }
            return (
              <div
                className="carousal-main-div"
                onClick={() => {
                  if (item?.navigatePath) {
                    history.push(item?.navigatePath, item);
                  } else {
                    catogorySelect(item);
                  }
                }}
                key={index}
              >
                <div className="cardCmp-main-div">
                  <CategorySubDivcolors
                    className="Carousel-sub-cards-div"
                    index={index}
                  >
                    <img
                      src={item?.imageUrl ? item?.imageUrl : item?.image}
                      alt={item?.title ?? ""}
                    />
                  </CategorySubDivcolors>
                </div>
                <div className="renderCard-div">
                  <h5>{item?.title ? item?.title : item?.name}</h5>
                </div>
              </div>
            );
          })}

          {allTypeMedicineDetail?.map((item: any) => {
            const isAddedToCart = pProducts?.medicines?.find(
              (med: any) => med?.service_code === item.service_code
            );
            return (
              <MedicineCardModule
                key={item.service_code}
                medicineDetail={item}
                isAddedtoCart={isAddedToCart}
                addToCart={addToCart}
                categoryId={categoryId}
              />
            );
          })}
          {allBrandedGenericMedicinesitems?.map((item: any, index: any) => (
            <ComparisonMedicineCardModule
              key={index}
              generic={item?.[0]}
              branded={item?.[1]}
            />
          ))}
          {allLabtests?.map((profile: any, index: any) => (
            <LabtestCard
              key={index}
              title={profile?.title}
              desc={profile?.description}
              imgUrl={profile?.imgUrl}
              id={profile?.id}
            />
          ))}

          {doctorDetails?.map((item: any, index: any) => (
            <DoctorDetailsCard item={item} />
          ))}

          {galleryList?.map((item: any) => {
            return <GalleryView imageList={item} />;
          })}
        </Carousel>
      </div>
    </MultiCarouselModalStyled>
  );
};

export default MultiCarouselModal;
