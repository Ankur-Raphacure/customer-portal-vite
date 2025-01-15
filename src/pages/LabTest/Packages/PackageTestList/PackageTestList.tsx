import { PackageTestListStyled } from "./PackageTestList.styled";
import PackageQuantityBtn from "../PackageQuantityBtn/PackageQuantityBtn";
import { ReactComponent as Price } from "../../../../assets/icons/price.svg";
import { useHistory } from "react-router-dom";
import HealthSaverCard from "../../../../components/HealthSaverCard/HealthSaverCard";
import { truncateText } from "../../../../Scenes/common";

const PackageTestList = (props: any) => {
  console.log(props, "props");

  const packageDetails = {
    testData: props?.testData,
    setShowTestDetails: () => {
      props.setShowTestDetails(`${true} ${props?.testData}`);
    },
    isAddedtoList: props?.isAddedtoList,
    testaddToReview: () => {
      props.testaddToReview(props?.testData, "labtest");
    },
    testRemoveToReview: props?.testRemoveToReview,
  };

  return (
    <PackageTestListStyled>
      {props.testData && (
        // <div className="cardstyle px-2 py-2 flex flex-col">
        //   <div className="relative imgspace">
        //     <img
        //       src={props?.testData?.image ?? lab_img}
        //       alt="Health360"
        //       className="w-full h-full object-cover rounded-t-xl w-xl"
        //     />
        //   </div>
        //   <div className="heading-name-rating flex flex-col">
        //     <div className="heading poppins-medium">
        //       {props?.testData?.service_name}
        //     </div>
        //     <div>
        //       <p className="tests-include-list poppins-regular">
        //         1 Test Included
        //       </p>
        //       <p className="amount-box poppins-semibold">
        //         <Price />{" "}
        //         {(props?.testData?.price?.discounted_price).toFixed(2)}
        //       </p>
        //     </div>
        //     <div className="more-labs-action-btns">
        //       <button
        //         className="details-btn poppins-semibold"
        //         // onClick={() => props.setShowTestDetails(true)}
        //         onClick={() =>
        //           props.setShowTestDetails(`${true} ${props?.testData}`)
        //         }
        //       >
        //         View Details
        //       </button>

        //       {props.isAddedtoList === -1 ? (
        //         <button
        //           className="add-to-cart-btn poppins-semibold"
        //           onClick={() => {
        //             props.testaddToReview(props?.testData, "labtest");
        //           }}
        //         >
        //           Add to Cart
        //         </button>
        //       ) : (
        //         <PackageQuantityBtn
        //           index={props.isAddedtoList}
        //           item={props?.testData}
        //           removeToReview={props.testRemoveToReview}
        //         />
        //       )}
        //     </div>
        //   </div>
        // </div>
        <HealthSaverCard
          key={props?.testData?.service_code}
          origin={"packageDetails"}
          title={truncateText(props?.testData?.service_name, 15) || "N/A"} // Test name
          subtitle="Diagnostic Test" // Static subtitle for test cards
          featureButtonText="Book Test" // Custom button text
          reportTime="N/A" // Placeholder as report time is not provided
          testCount={props?.testData?.tests?.length || "1"} // Each test is one item
          originalPrice={(
            props?.testData?.price?.actual_cost ||
            props?.testData?.actual_cost ||
            0
          ).toString()} // Test's actual cost
          discountedPrice={(
            props?.testData?.price?.discounted_price ||
            props?.testData?.raphacure_cost ||
            0
          ).toString()} // Discounted price
          discount={(
            props?.testData?.price?.discount_percentage ||
            props?.testData?.discount_percentage ||
            0
          ).toString()} // Discount percentage
          hoverTitle={props?.testData?.service_name}
          addToCart={() => {}}
          packageDetails={packageDetails}
        />
      )}
    </PackageTestListStyled>
  );
};

export default PackageTestList;
