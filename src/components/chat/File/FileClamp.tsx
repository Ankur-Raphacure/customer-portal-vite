import React, { useState } from "react";
import FilePreviewCard from "./FilePreviewCard";
import styled from "styled-components";
import { Button, Modal } from "react-bootstrap";

type prop = {
  files: string[];
  frameClassname?: string;
  fileCardClassname?: string;
};
const FileClamp = ({ files, fileCardClassname, frameClassname }: prop) => {
  const [showModal, setShowModal] = useState(false);
  const [fileIndex, setFileIndex] = useState(0);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = files?.[fileIndex];
    link.target = "_blank";
    link.click();
  };

  return (
    <>
      {showModal && (
        <Modal centered size="lg" show={true}>
          <Modal.Header
            closeButton
            onHide={() => {
              setShowModal(false);
            }}
          >
            <h4>Attachment</h4>
          </Modal.Header>
          <Modal.Body>
            <StyleComponent>
              <div className="displayBox">
                <FilePreviewCard
                  url={files?.[fileIndex]}
                  showAudioPreview={true}
                  showImagePreview={true}
                  showVideoPreview={true}
                />
              </div>
            </StyleComponent>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleDownload}>Download</Button>
          </Modal.Footer>
        </Modal>
      )}
      <div
        className={`d-flex justify-content-end align-items-center ${frameClassname}`}
      >
        {files?.map((file: string, i: number) => {
          return (
            <StyleComponent
              onClick={() => {
                setFileIndex(i);
                setShowModal(true);
              }}
              className={`${fileCardClassname} box`}
              key={i}
            >
              <FilePreviewCard url={file} showImagePreview={true} />
            </StyleComponent>
          );
        })}
      </div>
    </>
  );
};

export default FileClamp;

const StyleComponent = styled.div`
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px;
  overflow: hidden;
  svg {
    max-width: 100%;
    max-height: 100%;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  .displayBox {
    width: 100%;
    max-height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      max-width: 100%;
      max-height: 70vh;
      cursor: pointer;
    }
    & > * {
      width: auto;
      height: auto;
      object-fit: contain;
    }
  }
`;
