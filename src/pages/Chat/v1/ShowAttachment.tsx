// @ts-nocheck
import styled from "styled-components";
import { FileIcon, defaultStyles } from "react-file-icon";

const ShowAttachment = ({ url, type }: { url: string; type: string }) => {
  const arr = url.split(".");
  const ext: any = arr[arr.length - 1] as any;
  if (type === "IMAGE") {
    return (
      <ImgStyle className="d-flex justify-content-center align-items-center">
        <img className="attachment" src={url} alt="message" />
      </ImgStyle>
    );
  }
  return (
    <AttachmentStyle className=" w-100 d-flex justify-content-center align-items-center">
      <FileIcon extension={ext} {...defaultStyles[ext]} />
    </AttachmentStyle>
  );
};

export default ShowAttachment;

const ImgStyle = styled.div`
  img {
    width: auto;
    max-height: 150px;
  }
`;

export const AttachmentStyle = styled.div`
  max-height: 150px;
  svg {
    height: 100px;
  }
`;
