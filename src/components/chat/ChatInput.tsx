import React, { useContext, useEffect, useRef, useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { RiSendPlaneFill } from "react-icons/ri";
import { chatTypes } from "../../pages/Chat/type";
import FileInput from "./File/FileInput";
import { ChatContext } from "../../pages/Chat/context/ChatConext";
import ReactQuill from "react-quill";
import { IoClose } from "react-icons/io5";
import UserProfileImage from "./UserProfileImage";

const ChatInput = () => {
  const inputRef = useRef(null);
  const [msg, setMsg] = useState("");
  const [isShiftKeyPressing, setIsShiftKeyPressing] = useState(false);
  const {
    sendMessage,
    typingStatusChangeHandler,
    currentChat,
    reply,
    userChatId,
    setReply,
  } = useContext(ChatContext);

  useEffect(() => {
    if (inputRef.current) {
      // @ts-ignore
      inputRef.current?.focus();
    }
    typingStatusChangeHandler(false);
  }, [inputRef, typingStatusChangeHandler]);

  const handleSendMessage = () => {
    const isEmpty = msg?.toString().replace(/<\/?[^>]+(>|$)/g, "")
      ? false
      : true;

    if (!isEmpty) {
      const trimmedContent = msg
        .replace(/<p><br><\/p>/g, "")
        .replace(/&nbsp;/g, "")
        .trim();

      console.log("sending....");

      sendMessage({
        msg: trimmedContent,
        type: "TEXT",
        chatType: currentChat?.chatType as chatTypes,
      });

      setMsg("");
    }
  };

  return (
    <div className="d-flex bottom_input">
      <div className="inputFrame">
        <FileInput />
        {/* <textarea
          onKeyDown={(e) => {
            if (!isShiftKeyPressing && e?.key === "Enter") {
              handleSendMessage();
            }
            if (e?.key == "Shift") {
              setIsShiftKeyPressing(true);
            }
          }}
          onKeyUp={(e) => {
            if (e?.key == "Shift") {
              setIsShiftKeyPressing(false);
            }
          }}
          onChange={(e) => {
            const { value } = e?.target;
            if (value.trim()) {
              typingStatusChangeHandler(true);
            } else {
              typingStatusChangeHandler(false);
            }
            setMsg(value);
          }}
          autoFocus={true}
          value={msg}
          ref={inputRef}
          className="inputSendMsg"
          placeholder="Start typing here..."
          name=""
          id=""
        /> */}

        <div className="w-100">
          {reply && (
            <div className="reply">
              <ul className="d-flex justify-content-between align-items-center">
                <li className="d-flex align-items-center">
                  <UserProfileImage
                    name={reply?.senderName ?? ""}
                    className="msgProfileImg mr-2"
                    url={reply?.senderImage ?? ""}
                  />
                  {reply?.senderName}
                </li>
                <li>
                  <IoClose
                    className="closeIcon"
                    onClick={() => {
                      setReply(null);
                    }}
                    size={20}
                  />
                </li>
              </ul>
              <div
                dangerouslySetInnerHTML={{
                  __html: reply?.message?.slice(0, 100) ?? "",
                }}
              />
            </div>
          )}
          <ReactQuill
            preserveWhitespace={false}
            theme="snow"
            className="w-100 inputEditor quil"
            value={msg}
            placeholder="Message here..."
            onKeyDown={(e) => {
              if (!isShiftKeyPressing && e?.key === "Enter") {
                handleSendMessage();
              }
              if (e?.key == "Shift") {
                setIsShiftKeyPressing(true);
              }
            }}
            onKeyUp={(e) => {
              if (e?.key == "Shift") {
                setIsShiftKeyPressing(false);
              }
            }}
            onChange={(value: any) => {
              const isEmpty = value?.toString().replace(/<\/?[^>]+(>|$)/g, "")
                ? false
                : true;

              if (!isEmpty) {
                typingStatusChangeHandler(true);
              } else {
                typingStatusChangeHandler(false);
              }
              setMsg(value);
            }}
          />
        </div>
      </div>
      <div className="sendBtn">
        <button onClick={handleSendMessage}>
          <RiSendPlaneFill />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
