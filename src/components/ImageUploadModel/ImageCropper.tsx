import React, { useEffect } from "react";
import ReactCrop, { centerCrop, makeAspectCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const imageCrop = window?.innerHeight < 640 ? 300 : 389;

function ImageCropper(props: any) {
  const {
    imageToCrop,
    onImageCropped,
    ratio,
    isDefaultCrop,
    minWidth,
    minHeight,
  } = props;
  const [cropConfig, setCropConfig] = React.useState<any>({});

  function centerAspectCrop(
    mediaWidth: number,
    mediaHeight: number,
    aspect: number,
  ) {
    return centerCrop(
      makeAspectCrop(
        {
          unit: "px",
          width: imageCrop,
        },
        aspect,
        mediaWidth,
        mediaHeight,
      ),
      mediaWidth,
      mediaHeight,
    );
  }

  function onImageLoad(e: any) {
    const { width, height } = e.currentTarget;
    setCropConfig(centerAspectCrop(width, height, ratio));
    setImageRef(e.target);
    cropImage(centerAspectCrop(width, height, ratio), e.target);
  }

  const [imageRef, setImageRef] = React.useState<any>();

  async function cropImage(crop: any, imgref?: any) {
    if ((imageRef || imgref) && crop.width && crop.height) {
      const croppedImage = await getCroppedImage(
        imageRef || imgref,
        crop,
        "croppedImage.jpeg", // destination filename
      );

      // calling the props function to expose
      // croppedImage to the parent component
      onImageCropped(croppedImage);
    }
  }

  function getCroppedImage(sourceImage: any, cropConfig: any, fileName: any) {
    // creating the cropped image from the source image
    const canvas = document.createElement("canvas");
    const scaleX = sourceImage.naturalWidth / sourceImage.width;
    const scaleY = sourceImage.naturalHeight / sourceImage.height;
    canvas.width = Math.ceil(cropConfig.width * scaleX);
    canvas.height = Math.ceil(cropConfig.height * scaleY);
    const ctx = canvas.getContext("2d")!;
    // const pixelRatio = window.devicePixelRatio;
    // canvas.width = cropConfig.width * pixelRatio;
    // canvas.height = cropConfig.height * pixelRatio;
    // ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    // ctx.imageSmoothingQuality = 'high';

    ctx.drawImage(
      sourceImage,
      cropConfig.x * scaleX,
      cropConfig.y * scaleY,
      cropConfig.width * scaleX,
      cropConfig.height * scaleY,
      0,
      0,
      cropConfig.width * scaleX,
      cropConfig.height * scaleY,
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob: any) => {
        // returning an error
        if (!blob) {
          reject(new Error("Canvas is empty"));
          return;
        }

        blob.name = fileName;
        // creating a Object URL representing the Blob object given
        const croppedImageUrl = window.URL.createObjectURL(blob);

        resolve({ croppedImageUrl, blob, url: canvas.toDataURL(blob) });
      }, "image/jpeg");
    });
  }

  return (
    <ReactCrop
      crop={cropConfig}
      aspect={ratio}
      onChange={(c) => setCropConfig(c)}
      onComplete={(cropConfig) => cropImage(cropConfig)}
      minWidth={minWidth}
      minHeight={minHeight}
    >
      <img
        src={imageToCrop}
        onLoad={(imageRef: any) => onImageLoad(imageRef)}
        className="crop-img"
      />
    </ReactCrop>
  );
}

ImageCropper.defaultProps = {
  onImageCropped: () => {},
};

export default ImageCropper;
