import styled from "styled-components";
import { useEffect, useState } from "react";
import {
  AiOutlineFileImage,
  AiOutlineFile,
  AiOutlineClose,
} from "react-icons/ai";

import BookingConfirm from "./BookingConfirm";
const MAX_COUNT = 5;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
`;

const PopupContainer = styled.div`
  background: white;
  border-radius: 10px;
  max-width: 500px;
  max-height: 400px;
  width: 90%;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

const FileItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border-bottom: 1px solid #eee;
`;

const FileWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
`;

const FileName = styled.span`
  margin-left: 10px;
`;

const DropdownPopup = ({ onClose }: any) => {
  const [uploadedFiles, setUploadedFiles] = useState<any>([]);
  const [fileLimit, setFileLimit] = useState<any>(false);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  const handleUploadFiles = (files: any) => {
    const uploaded = [...uploadedFiles];
    let limitExceeded = false;
    files.some((file: any) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === MAX_COUNT) setFileLimit(true);
        if (uploaded.length > MAX_COUNT) {
          alert(`You can only add a maximum of ${MAX_COUNT} files`);
          setFileLimit(false);
          limitExceeded = true;
          return true;
        }
      }
    });
    if (!limitExceeded) setUploadedFiles(uploaded);
  };

  const handleFileEvent = (e: any) => {
    const chosenFiles = Array.prototype.slice.call(e.target.files);
    handleUploadFiles(chosenFiles);
  };

  const removeFile = (fileName: string) => {
    const updatedFiles = uploadedFiles.filter(
      (file: any) => file.name !== fileName,
    );
    setUploadedFiles(updatedFiles);
    setFileLimit(false);
  };

  useEffect(() => {
    console.log("uploadedFiles : ", uploadedFiles);
  }, [uploadedFiles]);

  const handleBooking = () => {
    setIsBookingConfirmed(true);
  };

  return (
    <>
      {!isBookingConfirmed ? (
        <Overlay>
          <PopupContainer>
            <CloseButton onClick={onClose}>&times;</CloseButton>
            <h2>Upload Medical History</h2>
            <FileWrapper>
              <input
                id="fileUpload"
                type="file"
                multiple
                title="File Upload"
                accept="image/*,application/pdf"
                onChange={handleFileEvent}
                disabled={fileLimit}
              />

              <div className="uploaded-files-list">
                {uploadedFiles.map((file: any) => (
                  <FileItem key={file.name}>
                    {file.type.startsWith("image/") ? (
                      <AiOutlineFileImage size={24} />
                    ) : (
                      <AiOutlineFile size={24} />
                    )}
                    <FileName>{file.name}</FileName>
                    <AiOutlineClose
                      size={24}
                      onClick={() => removeFile(file.name)}
                      style={{ cursor: "pointer" }}
                    />
                  </FileItem>
                ))}
              </div>

              <a
                className={`btn bookNowBtn bg-[#9747FF] ${
                  !fileLimit ? "" : "disabled"
                } `}
                onClick={handleBooking}
              >
                Book Now
              </a>
            </FileWrapper>
          </PopupContainer>
        </Overlay>
      ) : (
        <BookingConfirm onClose={onClose} bkId={"bk12"} />
      )}
    </>
  );
};

export default DropdownPopup;
