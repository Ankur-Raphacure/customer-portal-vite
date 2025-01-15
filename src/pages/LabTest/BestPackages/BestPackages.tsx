import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BestPackagesStyled } from "./BestPackages.styled";
import DetailsPopup from "./DetailsPopup";
import ComparePopup from "./ComparePopup";
import ComparisonDetailsPopup from "./ComparisonDetailsPopup";
interface PackageItem {
  service_name: string;
  description: string;
  price: {
    actual_cost: number;
    discounted_price: number;
  };
  tests: any[];
  image: string;
}
const BestPackages = (props: any) => {
  const { fromPage } = props;
  const [file, setFile] = useState<File | null>(null);
  const [addressEnabled, setAddressEnabled] = useState(false);
  const [showDetailsMap, setShowDetailsMap] = useState<{
    [key: number]: boolean;
  }>({});
  const [selectedItems, setSelectedItems] = useState<PackageItem[]>([]);
  const [showComparisonPopup, setShowComparisonPopup] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const navigateTolabtestbooking = async () => {
    // Add your logic here
  };

  const toggleShowDetails = (index: number) => {
    setShowDetailsMap((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleCompareChange = (item: PackageItem, isChecked: boolean) => {
    if (isChecked) {
      setSelectedItems([...selectedItems, item]);
    } else {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    }
  };

  const handleCompareClick = () => {
    setShowComparisonPopup(true);
  };

  const handleCloseComparisonPopup = () => {
    setShowComparisonPopup(false);
  };

  useEffect(() => {
    if (selectedItems.length > 0) {
      setShowPopup(true);
    }
  }, [selectedItems]);

  return (
    <BestPackagesStyled>
      <div>
        <div
          className={`list-packages-names-all list-packages-names-all${fromPage}`}
        >
          {props?.list?.map((item: any, index: any) => {
            const showDetails = showDetailsMap[index] || false;
            return (
              <div key={index} className="cardstyle">
                <h3 className="service text-left block z-1">
                  {item?.service_name}
                </h3>
                <div className="flex img-content-sec">
                  <div>
                    {/* <p className="text-left block ">{item?.description}</p> */}
                    <span className="text-left block rate">
                      {item?.price?.discount_percentage > 0 && (
                        <>
                          <span className="line-through price">
                            ₹ {item?.price?.actual_cost}
                          </span>{" "}
                          &nbsp;&nbsp;
                        </>
                      )}
                      <span className="final-price">
                        ₹ {item?.price?.discounted_price}
                      </span>
                    </span>
                    <p className="text-left block ">
                      {`${item?.tests?.length} Tests Included`}
                    </p>
                  </div>

                  <div className="justify-center w-50">
                    <div>
                      <img src={item?.image} alt="Image" className="img-size" />
                    </div>

                    <div className="border-line"></div>
                  </div>
                </div>
                <div className="btnWrapper">
                  <div
                    className="cursor-pointer btn-book-now viewDetailsBtn hover:bg-blue-700 text-center justify-center items-center"
                    onClick={() => toggleShowDetails(index)}
                  >
                    <span className="text-center items-center justify-center justify-content-center">
                      View Details
                    </span>
                  </div>
                  <div
                    className="cursor-pointer btn-book-now cartbtn bg-[#9747FF] hover:bg-blue-700 text-white text-center justify-center items-center"
                    onClick={() => {
                      props?.addToCart(item);
                    }}
                  >
                    <span className="text-center items-center justify-center justify-content-center">
                      Book Now
                    </span>
                  </div>
                </div>
                <div className="checkboxDiv">
                  <input
                    type="checkbox"
                    id={`compare-${index}`}
                    name="compare"
                    value="compare"
                    onChange={(e) =>
                      handleCompareChange(item, e.target.checked)
                    }
                  />
                  <label htmlFor={`compare-${index}`}>Compare</label>
                </div>
                {showDetails && (
                  <DetailsPopup
                    item={item}
                    fromPackage={true}
                    onClose={() => toggleShowDetails(index)}
                  />
                )}
              </div>
            );
          })}
        </div>
        {showPopup && (
          <ComparePopup
            selectedItems={selectedItems}
            onCompare={handleCompareClick}
            onClose={() => setShowPopup(false)}
          />
        )}
        {showComparisonPopup && (
          <ComparisonDetailsPopup
            selectedItems={selectedItems}
            onClose={handleCloseComparisonPopup}
          />
        )}
      </div>
    </BestPackagesStyled>
  );
};

export default BestPackages;
