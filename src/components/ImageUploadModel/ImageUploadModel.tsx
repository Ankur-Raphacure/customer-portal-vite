import { ImageUploadModelStyled } from "./ImageUploadModel.styled";
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import ImageCropper from "./ImageCropper";
import Loader from "./../../components/Common/Loader";

import { getSignedUrlApi } from "./../../redux/slices/auth/authService";
import moment from "moment";
// import AWS from "aws-sdk";

import Modal, { ModalProps } from "react-bootstrap/Modal";
import clsx from "clsx";
import CloseButton from "react-bootstrap/CloseButton";
import { useRef } from "react";
import uploadImageNew from "./../../Scenes/fileUpload";
import axios from "axios";

import {
  getS3PresignedUrl,
  getUserWithDependentsAPI,
} from "../../redux/slices/Profile/ProfileService";

import { SERVER_IP } from "../../config";

const ImageUploadModel = (props: any) => {
  const history = useHistory();
  const [passError, setPassError] = useState("");
  const dispatch = useDispatch();
  const hiddenFileInput = useRef<any>();
  const tagTabRef = useRef<any>();
  const [upImg, setUpImg] = useState<any>();
  const [infoMsg, setInfoMsg] = useState<any>(null);
  const [isLoader, setIsLoader] = useState(false);
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);
  const [btnDisable, setBtnDisable] = useState<any>(true);
  const [fileSelected, setFileSelected] = useState<any>();
  const [croppedImage, setCroppedImage] = useState<any>(undefined);
  const [s3SignedUrls, setS3SignedUrls] = useState<any>("");
  const [isCropImg, setIsCropImg] = useState<any>(null);
  const mille_sec = moment.now();

  useEffect(() => {
    if (props?.show) {
      setBtnDisable(true);
      setIsCropImg(null);
    }
  }, [props?.show]);

  const handleClick = () => {
    // document.getElementById("image-upload-input-box").click();

    if (hiddenFileInput) {
      hiddenFileInput?.current?.click();
    }
  };
  const onSelectFile = (event: any) => {
    setBtnDisable(false);
    if (event.target.files && event.target.files.length > 0) {
      const imgFile = event.target.files[0];
      if (!imgFile.type.includes("image")) {
        setInfoMsg(imgFile.name + " is not an image");
        return;
      }
      if (imgFile.size > 10 * 1024 * 1024) {
        setInfoMsg("Image file size should be less than or equal to 10MB");
        return;
      }
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setIsCropImg(reader.result);
        setUpImg(reader.result);
        setBtnDisable(true);
      });
      reader.readAsDataURL(imgFile);
      setFileSelected(imgFile);
    }
  };
  const handleConfirmClick = () => {
    if (isCropImg) {
      // onHideImage({ file: croppedImage?.blob });
      saveUserImage(props?.selectedMember?.id || user?.id);
      setUpImg(croppedImage?.url);
    } else {
      // onHideImage({ file: fileSelected, src: upImg });
      setUpImg(upImg);
    }

    // setIsCropImg(null);
  };
  const saveUserImage = async (userId: any) => {
    const uploadedUrl = await uploadImageToS3(croppedImage);
    await updateUserImage(userId, uploadedUrl);
    props?.setUserImg(uploadedUrl);
    props?.handleClose();
  };

  const updateUserImage = async (userId: any, image: any) => {
    console.log("userId : ", userId);
    const endpoint = `${SERVER_IP}/api/v1/user/${userId}`;
    const data = {
      user: {
        image: image,
      },
    };

    try {
      const response = await axios.put(endpoint, data, {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
          "Content-Type": "application/json",
        },
      });
      dispatch(getUserWithDependentsAPI());
      console.log("User image updated successfully", response.data);
      dispatch(getUserWithDependentsAPI());
      return response.data;
    } catch (error) {
      console.error("Error updating user image", error);
      throw error;
    }
  };

  const uploadImageToS3 = async (croppedImage: any) => {
    try {
      const presignBody = {
        id: `${user.id}`,
        ext: ".png",
      };
      const presignedRes = await dispatch(getS3PresignedUrl(presignBody));
      const presignedUrlResp = JSON.parse(JSON.stringify(presignedRes));
      setS3SignedUrls(presignedUrlResp?.payload?.signedUrL);
      const presignedUrl = presignedUrlResp?.payload?.signedUrL?.signedUrL;
      const publicUrl = presignedUrlResp?.payload?.signedUrL?.publicUrl;

      await axios.put(presignedUrl, croppedImage?.blob, {
        headers: {
          "Content-Type": "image/png", // Ensure the correct content type is set
        },
      });

      return publicUrl;
    } catch (error) {
      console.error("Error uploading image to S3:", error);
      throw error;
    }
  };

  const handleCancelClick = () => {
    props?.handleClose();
  };
  // const uploadFile = async (file: any) => {
  //   const S3_BUCKET = "socialstarhub-extension-images";
  //   const REGION = "us-east-1";
  //   AWS.config.update({
  //     accessKeyId: "AKIAQ3EGVRODTR4ZUQ7O",
  //     secretAccessKey: "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",
  //   });
  //   const s3 = new AWS.S3({
  //     params: { Bucket: S3_BUCKET },
  //     region: REGION,
  //   });

  //   const dFile = `${mille_sec}_${croppedImage?.blob?.name}`;

  //   const params = {
  //     Bucket: S3_BUCKET,
  //     Key: dFile,
  //     ContentType: "image/png",
  //     Body: croppedImage?.blob,
  //   };
  //   console.log("params", params);
  //   // Uploading file to s3
  //   setIsLoader(true);
  //   var upload = s3
  //     .putObject(params)
  //     .on("httpUploadProgress", (evt) => {
  //       // File uploading progress
  //       console.log("Uploading %");
  //     })
  //     .promise();

  //   await upload.then((err: any) => {
  //     console.log("err", err);
  //     // console.log("data", data);
  //     setIsLoader(false);
  //     props?.handleImageUploadSuccess(dFile);
  //     // Fille successfully uploaded
  //     // alert("File uploaded successfully.");
  //   });
  // };

  const onHideImage = async (file: any) => {
    console.log("file", file);
    console.log("croppedImage", croppedImage);
    console.log("croppedImage?.url", croppedImage?.url);
    console.log("croppedImage?.croppedImageUrl", croppedImage?.croppedImageUrl);
    console.log("fileSelected", fileSelected);
    // uploadImageNew(file);
    // croppedImageUrl
    // uploadFile(fileSelected);
    const resp2 = (await dispatch(getSignedUrlApi())) as any;
    if (resp2?.payload?.data) {
      const myHeaders = new Headers({ "Content-Type": "image/*" });
      const response = await fetch(resp2?.payload?.data, {
        method: "PUT",
        headers: myHeaders,
        body: fileSelected,
      });

      console.log("response", response);
      // const photoConvertedToBlob = dataURIToBlob(profilePhotoResized);
      // await pushProfilePhotoToS3(daresp2?.payload?.data, fileSelected);
    }

    let imgData = await uploadImageNew(file, resp2?.payload?.data);
    // }
    // console.log("resp2", resp2);

    // let imgData = await uploadImageNew(file);
  };

  return (
    <Modal
      {...props}
      size="sm"
      className="image-upload-model-box"
      style={{ background: "rgba(0, 0, 0, 0.5)" }}
      centered
    >
      <div className="conformation-model">
        <ImageUploadModelStyled>
          <Modal.Body>
            {/* <span
                className="color-picker-close-icon"
                onClick={() => props.setShowImageUploadModel(false)}
              >
                x
              </span> */}
            {isLoader && <Loader />}
            <div className="content-image-upload-model-box">
              <div>
                <h5>Upload Files From My Computer</h5>
              </div>
              {!isCropImg ? (
                <div className="upload-model-box-content">
                  <div className="top-hea-sec-top">
                    {/* <p className="top-hea-sec">
                        Drop your file from anywhere or
                      </p> */}
                    <button className="button-upload" onClick={handleClick}>
                      Upload A File
                    </button>
                    <input
                      type="file"
                      id="image-upload-input-box"
                      // onChange={handleChange}
                      onChange={onSelectFile}
                      ref={hiddenFileInput}
                      style={{ display: "none" }} // Make the file input element invisible
                    />
                    {/* <input placeholder="Upload A File" type="file" /> */}
                  </div>
                  <div className="top-hea-sec-content">
                    <ul>
                      <li>
                        Image Dimensions are Equal to (or) Greater Than
                        500X500px
                      </li>
                      <li>High resolution images (PNG, JPG)</li>
                      <li>Orientation of the image should be Portrait</li>
                    </ul>
                  </div>
                  {infoMsg && <p>{infoMsg}</p>}
                </div>
              ) : (
                <>
                  {/* 3.43 / 1 :  */}
                  <div className="image-upload-cropper">
                    <ImageCropper
                      ratio={1 / 1}
                      imageToCrop={isCropImg}
                      isDefaultCrop={false}
                      onImageCropped={(croppedImage: any) => {
                        console.log("croppedImage", croppedImage);
                        setCroppedImage(croppedImage);
                        setBtnDisable(false);
                      }}
                    />
                  </div>
                </>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="new-option-body-actions">
              <button className="cancel-btn" onClick={handleCancelClick}>
                Cancel
              </button>
              <button
                disabled={btnDisable}
                className="confirm-btn"
                onClick={handleConfirmClick}
              >
                Confirm
              </button>
            </div>
          </Modal.Footer>
        </ImageUploadModelStyled>
      </div>
    </Modal>
  );
};
export default ImageUploadModel;
