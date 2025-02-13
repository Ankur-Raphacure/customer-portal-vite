import React from "react";
import { useState } from "react";
import { BlobServiceClient } from "@azure/storage-blob";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MoreClinicsStyled } from "./hospitalList.styled";
const BestPackages = (props: any) => {
  const [file, setFile] = useState(null);
  const [addressEnabled, setAddressEnabled] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const navigateTolabtestbooking = async () => {};

  return (
    <MoreClinicsStyled>
      <div>
        <div className="list-packages-names-all">
          {props?.list?.map((item: any) => {
            return (
              // <div className="mb-2 gap-2 justify-center items-center">
              <div className="cardstyle "></div>
              // </div>
            );
          })}
        </div>
      </div>
    </MoreClinicsStyled>
  );
};

export default BestPackages;
