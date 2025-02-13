import React from "react";
import { useState } from "react";
import { BlobServiceClient } from "@azure/storage-blob";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import testalt from "../../assets/images/testalt.png";
import { LabTestNearYouStyled } from "./LabNearYouCard.styled";
import DetailsPopup from "../../pages/LabTest/BestPackages/DetailsPopup";
import { truncateByDomain } from "recharts/types/util/ChartUtils";
import { BestPackagesStyled } from "../../pages/LabTest/BestPackages/BestPackages.styled";
import { ReactComponent as Price } from "../../assets/icons/price.svg";
import { ReactComponent as Info } from "../../assets/icons/info.svg";
import FilterList from "../../components/Doctor/Filter/Filter";

const LabNearYouCard = (props: any) => {
  const { mostOrdersSection, item, addToCart } = props;
  const [file, setFile] = useState(null);
  const [addressEnabled, setAddressEnabled] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const navigateToselectedlabdetail = () => {
    history.push(`/labtest/packages/${item?.id}`);
  };
  const handleChange = (e: any) => {
    setFile(e.target.files[0]);
  };
  const [showDetails, setShowDetails] = useState(false);

  const handleSubmit = async (e: any) => {
    // e.preventDefault();
    // //process.env.REACT_APP_AZURE_STORAGE_CONNECTION_STRING
    // const blobServiceClient = new BlobServiceClient();
    // const blockBlobClient = blobServiceClient.getBlockBlobClient(file.name);
    // try {
    //   await blockBlobClient.uploadFile(file);
    //   console.log("File uploaded successfully");
    // } catch (err) {
    //   console.error(err);
    // }
  };

  return (
    <LabTestNearYouStyled>
      <div>
        <div className="near-you-item">
          <div className=" cardstyle px-2 py-2 flex  flex-col">
            <div className="relative imgspace">
              <img
                src={item?.image || testalt}
                alt="Health360"
                className="object-cover rounded-t-xl w-xl"
              />
            </div>
            {/* <div className="rating-sec-box">
              <span className="rating-sec-box-text">
                <span className="ml-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                  >
                    <path
                      d="M2.48625 12.5L3.5425 8.06316L0 5.07895L4.68 4.68421L6.5 0.5L8.32 4.68421L13 5.07895L9.4575 8.06316L10.5137 12.5L6.5 10.1474L2.48625 12.5Z"
                      fill="#FFD233"
                    />
                  </svg>
                </span>
                <span className="rating">{`${item?.rating} (234)`}</span>
              </span>
            </div> */}
            <div className=" heading-name-rating flex flex-col mt-1">
              {!mostOrdersSection ? (
                <>
                  <div className="flex">
                    <h3 className="float-left22 text-sm heading text-bold">
                      {item?.name || `Lab Name`}
                    </h3>
                  </div>
                  <div className="flex locatio-name-sec-row mt-2">
                    <span className="flex float-left labs-near-sec-name text-sm opacity-70 text-overflow   ">
                      <img src="https://raphacure-public-images.s3.ap-south-1.amazonaws.com/120521-1736498912733.png" className="w-5 h-5 flex " />
                      &nbsp; {item?.address}
                    </span>
                  </div>
                  <div className=" locatio-name-sec-row flex">
                    <span className="flex  labs-near-sec-name float-left text-sm opacity-70">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="15"
                        viewBox="0 0 14 15"
                        fill="none"
                      >
                        <path
                          opacity="0.5"
                          d="M12.6 3.3H9.8V1.9C9.8 1.13 9.17 0.5 8.4 0.5H5.6C4.83 0.5 4.2 1.13 4.2 1.9V3.3H1.4C0.63 3.3 0 3.93 0 4.7V13.1C0 13.87 0.63 14.5 1.4 14.5H12.6C13.37 14.5 14 13.87 14 13.1V4.7C14 3.93 13.37 3.3 12.6 3.3ZM5.6 1.9H8.4V3.3H5.6V1.9ZM9.8 9.6H7.7V11.7H6.3V9.6H4.2V8.2H6.3V6.1H7.7V8.2H9.8V9.6Z"
                          fill="black"
                        />
                      </svg>{" "}
                      &nbsp;{`Radiology, Cardiology, Ophtho.`}
                    </span>
                  </div>

                  <button
                    onClick={navigateToselectedlabdetail}
                    className="btn-view-text"
                  >
                    View Test
                  </button>
                </>
              ) : (
                <>
                  <div>
                    <div className="">
                      <h3 className="float-left1 text-sm heading text-bold">
                        {item?.service_name || `Lab Name`}
                      </h3>
                    </div>
                    <div>
                      <p className="tests-include-list">1 Test Included</p>
                      <p className="amount-box">
                        <Price /> {item?.price?.discounted_price}.00 <Info />{" "}
                      </p>
                    </div>
                    <div className="more-labs-action-btns">
                      <button
                        className="view-details-btn"
                        onClick={() => setShowDetails(true)}
                      >
                        View Details
                      </button>
                      <button
                        className="add-to-cart-btn"
                        onClick={() => {
                          // addToCart(item);
                          history.push(`/labTestDetils/${item?.service_code}`);
                        }}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        {showDetails && (
          <BestPackagesStyled>
            <DetailsPopup item={item} onClose={() => setShowDetails(false)} />
          </BestPackagesStyled>
        )}
      </div>
    </LabTestNearYouStyled>
  );
};

export default LabNearYouCard;
