import { useMemo, useRef, useState } from "react";
import { IoIosAttach } from "react-icons/io";
import { useSelector } from "react-redux";
import { BiLoader } from "react-icons/bi";
import { Modal } from "react-bootstrap";
import { Button } from "antd";
import { messageTypeDto } from "./SharedMessageCard";
import styled from "styled-components";
import { DefaultExtensionType, defaultStyles, FileIcon } from "react-file-icon";
import useUploadToS3 from "../../ScanByMedicine/useUploadToS3";
import { AttachmentStyle } from "./ShowAttachment";

const FileInput = ({
  handleFileSend,
  handleClose,
}: {
  handleFileSend: (url: string, fileType: messageTypeDto) => void;
  handleClose: () => void;
}) => {
  const ref = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [fileType, setFileType] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const { error, loading, user } = useSelector((Route: any) => Route.auth);

  const ext = useMemo(() => {
    if (fileType == "TEXT") return "";
    const arr = message.split(".");
    const ext: DefaultExtensionType = arr[arr.length - 1] as any;
    return ext;
  }, [message]);

  const { uploadToS3 } = useUploadToS3();

  const handleAttachAttachment = () => {
    if (ref?.current) {
      ref?.current?.click();
    }
  };

  let fileTypeHelper: any = {
    image: "IMAGE",
    audio: "AUDIO",
    video: "VIDEO",
  };

  const onFileInput = async (e: any) => {
    console.log(e.target.files[0]);
    setIsLoading(true);

    console.log(e?.target?.files?.[0]?.type?.split("/")?.[0]);
    console.log(
      fileTypeHelper[e?.target?.files?.[0]?.type?.split("/")?.[0]] ?? "FILE"
    );

    const url = await uploadToS3(e.target.files[0], user?.id);

    console.log(url);

    if (url) {
      setMessage(url);
      setFileType(
        fileTypeHelper[e?.target?.files?.[0]?.type?.split("/")?.[0]] ?? "FILE"
      );
      setShowModal(true);
    }
    setIsLoading(false);
  };

  console.log(message);

  return (
    <StyledComp>
      <div className="file-container">
        <input
          type="file"
          ref={ref}
          onChange={onFileInput}
          multiple={false}
          name=""
          id=""
          hidden
        />
        {isLoading ? (
          <BiLoader />
        ) : (
          <IoIosAttach size={25} onClick={handleAttachAttachment} />
        )}

        {/* preview modal */}
        <Modal size="lg" show={showModal} centered>
          <Modal.Header
            closeButton
            onHide={() => {
              handleClose();
              setShowModal(false);
            }}
          >
            <h4>Selected File</h4>
          </Modal.Header>
          <Modal.Body>
            <StyledComp className="d-flex justify-content-center align-items-center">
              {message && (
                <>
                  {ext ? (
                    <AttachmentStyle className=" w-100 d-flex justify-content-center align-items-center">
                      <FileIcon extension={ext} {...defaultStyles[ext]} />
                    </AttachmentStyle>
                  ) : (
                    <img
                      className="image-preview"
                      src={message ?? ""}
                      alt="img"
                    />
                  )}
                </>
              )}
            </StyledComp>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => {}} className="modalCandelBtn">
              Cancel
            </Button>
            <Button
              onClick={() => {
                handleFileSend(message, fileType);
                setShowModal(false);
              }}
              className="modalDeleteBtn"
            >
              Send
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </StyledComp>
  );
};

export default FileInput;

const StyledComp = styled.div`
  width: 100%;
  .image-preview {
    width: auto;
    min-height: 250px;
    max-height: 500px;
  }

  .modalCandelBtn {
    width: 154px;
    height: 50px;
    border: 1px solid #000000;
    background: #ffffff;
    border-radius: 4px;
    /* font-family: Poppins; */
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
    margin-right: 16px;
  }

  .modalCandelBtn:hover,
  .modalCandelBtn:focus,
  .modalCandelBtn:active {
    background-color: #ffffff !important;
    border: 1px solid #000000 !important;
    color: #000000 !important;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset !important;
  }
  .modal-footer .modalCandelBtn {
    background-color: #ffffff !important;
    border: 1px solid #000000 !important;
    color: #000000 !important;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset !important;
  }
  .modalDeleteBtn {
    width: 148px;
    height: 50px;
    background: #008080 !important;
    border: none;
    border-radius: 4px;
    /* font-family: Poppins; */
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
  }

  .modalDeleteBtn:hover,
  .modalDeleteBtn:focus,
  .modalDeleteBtn:active {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset !important;
    background-color: #008080 !important;
  }
`;
