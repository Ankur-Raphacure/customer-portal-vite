import React from "react";
import { useState } from "react";
import { BlobServiceClient } from "@azure/storage-blob";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddAlternatedateStyled } from "./addAlternatedate.styled";
const AddAlternatedate = (props: any) => {
  const [file, setFile] = useState(null);
  const [addressEnabled, setAddressEnabled] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const navigateTolabtestbooking = async () => {};

  return (
    <AddAlternatedateStyled>
      <div>
        <div className="list-packages-names-all">
          {props?.list?.map((item: any) => {
            return (
              // <div className="mb-2 gap-2 justify-center items-center">
              <div className="cardstyle ">
                <h3 className="service text-left block  z-1">
                  {item?.service_name}
                </h3>
                <div className="flex img-content-sec">
                  <div>
                    <p className="text-left block ">{item?.description}</p>
                    <span className="text-left block  rate">
                      <span className="line-through price">
                        ₹ {item?.price?.actual_cost}
                      </span>{" "}
                      &nbsp;&nbsp;
                      <span className="final-price">
                        ₹ {item?.price?.discounted_price}
                      </span>
                    </span>
                    <p className="text-left block ">
                      {item.testinclude ?? "20 Tests Included"}
                    </p>
                  </div>

                  <div className="justify-center w-50">
                    <div>
                      <img src={item?.image} className="img-size" />
                    </div>

                    <div className="border-line"></div>
                  </div>
                </div>
                <div
                  className="cursor-pointer btn-book-now cartbtn bg-[#9747FF] hover:bg-blue-700 text-white text-center justify-center items-center"
                  onClick={navigateTolabtestbooking}
                >
                  <span className="text-center items-center mt-2 justify-center justify-content-center">
                    Book Now
                  </span>
                </div>
              </div>
              // </div>
            );
          })}
        </div>
      </div>
    </AddAlternatedateStyled>
  );
};

export default AddAlternatedate;
