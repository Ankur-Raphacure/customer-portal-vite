import { BlobServiceClient, ContainerClient } from "@azure/storage-blob";
// import { azure_accountID, azure_contentGuId } from "../library/constants";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

const azure_accountID = "socialstarhub-extension-imagesInfo";
const azure_contentGuId = "temp";

// const account = process.env.REACT_APP_AZURE_ACCOUNT_NAME;
// const content_gu_id = process.env.REACT_APP_AZURE_CONTENT_GU_ID

const account = azure_accountID;

const contentGuId = azure_contentGuId;
// const sas = process.env.REACT_APP_AZURE_SAS_STRING;

const uploadFileToAzure = async (
  sasToken: string,
  file: File | null,
  fileName: string,
  contentDir: string = contentGuId,
): Promise<string | null> => {
  try {
    if (!file) return "";

    // get Container - full public read access

    const blobServiceClient = new BlobServiceClient(
      `https://${account}.blob.core.windows.net?${sasToken}`,
    );

    const containerClient: ContainerClient =
      blobServiceClient.getContainerClient(`${contentDir}`);

    if (!containerClient.exists()) {
      await containerClient.createIfNotExists({
        access: "container",
      });
    }

    // upload file
    await createBlobInContainer(containerClient, file, fileName);
    return `https://${account}.blob.core.windows.net/${contentDir}/${fileName}?${sasToken}`;
    // await getBlobsInContainer(containerClient)
  } catch (error) {}
  return null;
};

const createBlobInContainer = async (
  containerClient: ContainerClient,
  file: any,
  fileName: String,
) => {
  const new_name = `${fileName}`;
  const type = file.type ? file.type : file.split(";")[0].split(":")[1];
  // create blobClient for container
  const blobClient = containerClient.getBlockBlobClient(new_name);

  // set mimetype as determined from browser with file upload control
  const options = { blobHTTPHeaders: { blobContentType: type } };

  // upload file
  await blobClient.uploadBrowserData(file, options);
};

// export default uploadFileToAzure;

const uploadImageNew = async (file: any, sasToken: any) => {
  const imgFile = file;
  // const sasToken = "string";

  // const resptoken = await getSignedUrlApi();
  // console.log("resptoken", resptoken);
  const mille_sec = moment.now();
  console.log("imgFile", imgFile);
  console.log("sasToken", sasToken);

  const actual_name = `_${imgFile?.name?.replace(/ /g, "")}`;
  const fileName = `${mille_sec}${actual_name}`;

  const uploadedFileURL = await uploadFileToAzure(sasToken, imgFile, fileName);

  const responseData = {
    assertData: {
      imageName: fileName,
      caption: "",
      credits: "",
      isBefore: true,
    },
    imageURL: uploadedFileURL,
    imageName: fileName,
  };
  console.log("responseData", responseData);
  return responseData;
};
export const uploadImage = async (
  sasToken: string,
  file: any,
  contentDir: string = "image",
) => {
  const imgFile = file;

  const mille_sec = moment.now();

  const type = imgFile?.name
    ? ""
    : imgFile
      ? imgFile.split(";")[0].split("/")[1]
      : "";

  const actual_name = imgFile?.name
    ? `_${imgFile.name.replace(/ /g, "")}`
    : `.${type}`;
  const fileName = `${mille_sec}${actual_name}`;

  const uploadedFileURL = await uploadFileToAzure(
    sasToken,
    imgFile,
    fileName,
    contentDir,
  );

  const responseData = {
    name: fileName,
    url: uploadedFileURL?.split("?")[0],
  };
  return responseData;
};
export const uploadPDF = async (
  sasToken: string,
  pdfFile: any,
  contentDir: string = "pdf",
) => {
  const mille_sec = moment.now();

  const type = pdfFile?.name
    ? ""
    : pdfFile
      ? pdfFile.split(";")[0].split("/")[1]
      : "";

  const actual_name = pdfFile?.name
    ? `_${pdfFile.name.replace(/ /g, "")}`
    : `.${type}`;
  const fileName = `${mille_sec}${actual_name}`;

  const uploadedFileURL = await uploadFileToAzure(
    sasToken,
    pdfFile,
    fileName,
    contentDir,
  );

  const responseData = {
    name: fileName,
    url: uploadedFileURL?.split("?")[0],
  };
  return responseData;
};
export const downloadFile = (url: string, filename1 = "") => {
  const actualURL = url;
  // @ts-ignore
  let filename = filename1 as any;
  if (!filename1) {
    filename = url.split("/").pop();
  }
  const req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.responseType = "blob";
  req.onload = function () {
    const blob = new Blob([req.response], {
      type: "application/pdf",
    });
    // var ua = window.navigator.userAgent;
    // var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    const shouldBeOpenedNewWindow: boolean =
      !!navigator.userAgent.match(/(iPod|iPhone|iPad)/) &&
      !!navigator.userAgent.match(/AppleWebKit/);
    //navigator.vendor === "Apple Computer, Inc."
    // @ts-ignore
    const isIE = false || !!document.documentMode;
    if (isIE) {
      // @ts-ignore
      window.navigator.msSaveBlob(blob, filename);
    } else if (shouldBeOpenedNewWindow) {
      window.open(actualURL, "_blank");
      return;
    } else {
      console.log("yyy", blob);
      const windowUrl = window.URL || window.webkitURL;
      const href = windowUrl.createObjectURL(blob);
      const a = document.createElement("a");
      a.setAttribute("download", filename);
      a.setAttribute("href", href);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };
  req.send();
};
export default uploadImageNew;
