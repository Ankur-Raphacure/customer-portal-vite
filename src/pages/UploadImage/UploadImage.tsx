import React from "react";
import { useState } from "react";
import { BlobServiceClient } from "@azure/storage-blob";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [addressEnabled, setAddressEnabled] = useState(false);
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e: any) => {
    // e.preventDefault();
    // //import.meta.env.REACT_APP_AZURE_STORAGE_CONNECTION_STRING
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
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleSubmit}>Upload File</button>
    </div>
  );
};

export default UploadImage;
