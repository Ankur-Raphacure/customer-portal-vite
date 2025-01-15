import { PackagelistStyled } from "./PackageList.styled";
import HealthSaverCard from "../../../../components/HealthSaverCard/HealthSaverCard";
import { truncateText } from "../../../../Scenes/common";

const PackageList = (props: any) => {
  const getPackageImage = () => {
    return props.package?.image ?? "https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736494444858.png";
  };
  const packageDetails = {
    testData: props?.package,
    setShowTestDetails: () => {
      props.toggleShowDetails(props.indexKey);
    },
    isAddedtoList: props?.isAddedtoList,
    testaddToReview: () => {
      props.packageaddToReview(props?.package, "labpackage");
    },
    testRemoveToReview: props?.packageRemoveToReview,
  };

  return (
    <PackagelistStyled>
      {props.package ? (
        <>
          <HealthSaverCard
            key={props?.package?.service_code}
            origin={"packageDetails"}
            title={truncateText(props?.package?.service_name, 15) || "N/A"} // Test name
            subtitle="Diagnostic Test" // Static subtitle for test cards
            featureButtonText="Book Test" // Custom button text
            reportTime="N/A" // Placeholder as report time is not provided
            testCount={props?.package?.tests?.length || "1"} // Each test is one item
            originalPrice={(
              props?.package?.price?.actual_cost ||
              props?.package?.actual_cost ||
              0
            ).toString()} // Test's actual cost
            discountedPrice={(
              props?.package?.price?.discounted_price ||
              props?.package?.raphacure_cost ||
              0
            ).toString()} // Discounted price
            discount={(
              props?.package?.price?.discount_percentage ||
              props?.package?.discount_percentage ||
              0
            ).toString()} // Discount percentage
            hoverTitle={props?.package?.service_name}
            addToCart={() => {}}
            packageDetails={packageDetails}
          />
        </>
      ) : null}
    </PackagelistStyled>
  );
};

export default PackageList;
