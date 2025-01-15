import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BestWomensPackagesStyled } from "./BestWomenPkg.styled";
import { Card, Row, Col } from "react-bootstrap";
import DetailsPopup from "../../LabTest/BestPackages/DetailsPopup";
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

const BestWomenPkg = (props: any) => {
  const { fromPage } = props;

  const [file, setFile] = useState<File | null>(null);
  const [showDetailsMap, setShowDetailsMap] = useState<{
    [key: number]: boolean;
  }>({});
  const [selectedItems, setSelectedItems] = useState<PackageItem[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const history = useHistory();

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
  useEffect(() => {
    if (selectedItems.length > 0) {
      setShowPopup(true);
    }
  }, [selectedItems]);
  return (
    <BestWomensPackagesStyled>
      <div className={` list-packages-names-all ${fromPage}`}>
        {props?.list?.map((item: any, index: any) => {
          const showDetails = showDetailsMap[index] || false;
          return (
            <div key={index} className="cardstyle mt-4">
              <Card.Body>
                <Row>
                  <Col xs={8}>
                    <h5 className="Title-div">{item?.service_name}</h5>
                    <p className="Sub-Title-div ">{item?.description}</p>
                    <p className="t-list-div">{`${item?.tests?.length} Tests Included`}</p>
                    <h4 className="amt-div mt-4">
                      {item?.price?.discount_percentage > 0 && (
                        <>
                          <span className="line-through price">
                            ₹ {item?.price?.actual_cost}
                          </span>{" "}
                          &nbsp;&nbsp;
                        </>
                      )}
                    </h4>
                  </Col>
                  <Col xs={4} className="text-right">
                    <img
                      src={item?.image}
                      alt="Pregnancy Health Package"
                      className="img-div"
                    />
                    <img
                      src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/105748-1736333253705.png"
                      alt=""
                      className="img-line-div"
                    />
                  </Col>
                </Row>
              </Card.Body>

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
    </BestWomensPackagesStyled>
  );
};

export default BestWomenPkg;
