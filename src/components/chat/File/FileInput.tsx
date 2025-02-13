import React, { useContext, useRef, useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { message } from "antd";
import { Modal, Button, Form } from "react-bootstrap";
import styled from "styled-components";

import FilePreviewCard from "./FilePreviewCard";
import { DefaultExtensionType } from "react-file-icon";
import { ChatContext } from "../../../pages/Chat/context/ChatConext";
import { chatTypeDto } from "../../../pages/Chat/type";
import useUploadToS3 from "../useUploadToS3";

const FileInput = () => {
  const ref = useRef<any>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [urls, setUrls] = useState<string[]>([]);
  const [text, setText] = useState("");

  const { uploadToS3 } = useUploadToS3();
  const { user } = useSelector((Route: any) => Route.auth);

  const handleAttachAttachment = () => {
    if (ref?.current) {
      ref?.current?.click();
    }
  };

  const { sendMessage, currentChat } = useContext(ChatContext);

  const onFileInput = async (e: any) => {
    setShowModal(true);
    setIsLoading(true);
    const files = Array.from(e.target.files);

    const result = await Promise.allSettled(
      files?.map(async (file: any) => {
        return await uploadToS3(file, user?.id);
      }),
    );

    let urlsTemp: string[] = [];
    result?.forEach((res) => {
      if (res.status == "fulfilled") {
        urlsTemp.push(res.value);
      }
    });

    setUrls(urlsTemp);
    setIsLoading(false);
  };
  return (
    <>
      <input
        type="file"
        ref={ref}
        onChange={onFileInput}
        multiple={true}
        name=""
        id=""
        hidden
      />{" "}
      <FaCirclePlus
        onClick={handleAttachAttachment}
        className="mr-3 attachmentBtn"
      />
      {/* preview modal */}
      <Modal size="lg" show={showModal} centered>
        <Modal.Header
          closeButton
          onHide={() => {
            setShowModal(false);
          }}
        >
          <h4>Selected File</h4>
        </Modal.Header>
        <Modal.Body>
          <StyledComp className="d-flex w-100 flex-wrap justify-content-center align-items-center">
            {urls?.map((url) => {
              return (
                <AttachmentStyle className="d-flex justify-content-center align-items-center">
                  <FilePreviewCard url={url} showImagePreview={true} />
                </AttachmentStyle>
              );
            })}
          </StyledComp>
          <Form.Control
            className="mt-2"
            placeholder="Enter your message...."
            value={text}
            onChange={(e) => {
              setText(e?.target?.value);
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => {}} className="modalCandelBtn">
            Cancel
          </Button>
          <Button
            onClick={() => {
              if (urls?.length <= 0) return;
              sendMessage({
                chatType: currentChat?.chatType as chatTypeDto,
                urls: urls,
                msg: text,
                type: "ATTACHMENT",
              });
              setUrls([]);
              setText("");
              setShowModal(false);
            }}
            className="modalDeleteBtn"
          >
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FileInput;

const StyledComp = styled.div`
  width: 100%;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const AttachmentStyle = styled.div`
  max-height: 150px;
  svg {
    height: 100px;
  }
`;
