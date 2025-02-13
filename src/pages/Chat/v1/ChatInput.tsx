import React, { useEffect, useState } from "react";
import { IoMdSend } from "react-icons/io";
import styled from "styled-components";
import FileInput from "./FileInput";
import ReactQuill from "react-quill";
import { messageTypeDto } from "./SharedMessageCard";
import "react-quill/dist/quill.snow.css";

export default function ChatInput({
  handleSendMsg,
  chatId,
  typingStatusChangeHandler,
}: any) {
  const [msg, setMsg] = useState("");
  const [isShiftKeyPressing, setIsShiftKeyPressing] = useState(false);

  useEffect(() => {
    setMsg("");
    typingStatusChangeHandler(false);
  }, [chatId, typingStatusChangeHandler]);

  const clearState = () => {
    setMsg("");
  };

  const sendChat = () => {
    // event.preventDefault();

    const isEmpty = msg?.toString().replace(/<\/?[^>]+(>|$)/g, "")
      ? false
      : true;

    if (!isEmpty && msg && msg?.trim()?.length > 0) {
      handleSendMsg(msg, "TEXT");
      clearState();
    }
  };

  const handleChatFileSend = (url: string, fileType: messageTypeDto) => {
    handleSendMsg(url, fileType);
    clearState();
  };

  return (
    <Container>
      <div className="chatInputContainer">
        <FileInput
          handleFileSend={handleChatFileSend}
          handleClose={clearState}
        />
        <ReactQuill
          theme="snow"
          className="w-100"
          value={msg}
          placeholder="Message here..."
          onKeyDown={(e: any) => {
            if (!isShiftKeyPressing && e?.key === "Enter") {
              sendChat();
            }
            if (e?.key == "Shift") {
              setIsShiftKeyPressing(true);
            }
          }}
          onKeyUp={(e: any) => {
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
      {/* <button type="submit">
        <IoMdSend />
      </button> */}
      {/* <div className="input-container" onSubmit={(event) => sendChat(event)}>
        {isFileSelect ? (
          <div className="flex-full"></div>
        ) : (
          <>
            <input
              type="text"
              placeholder="type your message here"
              onChange={(e) => {
                const value = e?.target?.value;
                if (value?.trim()) {
                  typingStatusChangeHandler(true);
                } else {
                  typingStatusChangeHandler(false);
                }
                setMsg(value);
              }}
              value={msg}
            />
          </>
        )}
      </div> */}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .chatInputContainer {
    position: relative;
    width: 100%;
  }

  .quill {
    flex: 1;

    .ql-toolbar {
      background: #f0f0f0;
      // border-radius: 10px 10px 0 0;
      border-left: 0px !important;
      border-right: 0px !important;
    }

    .ql-container {
      // border-radius: 0px 0px 10px 10px;
      max-height: 150px;
      min-height: 80px;
      overflow-y: auto;

      border-left: 0px !important;
      border-right: 0px !important;
    }

    .ql-active {
      background: #0078ff;
      color: white !important;
      stroke: white !important;
      border-radius: 5px;
      margin: 0px 5px;

      svg > * {
        stroke: white !important;
      }
    }
  }
`;

// const Container = styled.div`
//   display: grid;
//   align-items: center;
//   grid-template-columns: 1fr;
//   border: 1px solid #e2e2e2;
//   padding: 0.5rem;
//   border-radius: 2rem;
//   color: #080420;
//   max-height: 3.7rem;
//   @media screen and (min-width: 720px) and (max-width: 1080px) {
//     padding: 0 1rem;
//     gap: 1rem;
//   }
//   .button-container {
//     display: flex;
//     align-items: center;
//     color: white;
//     gap: 1rem;
//     .emoji {
//       position: relative;
//       svg {
//         font-size: 1.5rem;
//         color: #ffff00c8;
//         cursor: pointer;
//       }
//       .emoji-picker-react {
//         position: absolute;
//         top: -350px;
//         background-color: #080420;
//         box-shadow: 0 5px 10px #9a86f3;
//         border-color: #9a86f3;
//         .emoji-scroll-wrapper::-webkit-scrollbar {
//           background-color: #080420;
//           width: 5px;
//           &-thumb {
//             background-color: #9a86f3;
//           }
//         }
//         .emoji-categories {
//           button {
//             filter: contrast(0);
//           }
//         }
//         .emoji-search {
//           background-color: transparent;
//           border-color: #9a86f3;
//         }
//         .emoji-group:before {
//           background-color: #080420;
//         }
//       }
//     }
//   }
//   .input-container {
//     width: 100%;
//     border-radius: 2rem;
//     display: flex;
//     align-items: center;
//     gap: 2rem;
//     background-color: #ffffff34;
//     input {
//       width: 100%;
//       height: 60%;
//       background-color: transparent;
//       border: none;
//       /* padding-left: 1rem; */
//       font-size: 1.2rem;

//       &::selection {
//         background-color: #9a86f3;
//       }
//       &:focus {
//         outline: none;
//       }
//     }
//     // button {
//     //   padding: 0.3rem 2rem;
//     //   border-radius: 2rem;
//     //   display: flex;
//     //   justify-content: center;
//     //   align-items: center;
//     //   // background-color: #9a86f3;
//     //   border: none;
//     //   @media screen and (min-width: 720px) and (max-width: 1080px) {
//     //     padding: 0.3rem 1rem;
//     //     svg {
//     //       font-size: 1rem;
//     //     }
//     //   }
//     //   svg {
//     //     font-size: 2rem;
//     //     color: white;
//     //   }
//     // }
//   }
// `;

{
  /* <div className="input-container" onSubmit={(event) => sendChat(event)}>
        <FileInput
          onAttachmentClick={() => {
            setIsFileSelect(true);
          }}
          setMessage={(img: any) => {
            setMsg(img);
          }}
          message={msg ? msg : null}
          setFileType={setFileType}
        />
        {isFileSelect ? (
          <div className="flex-full"></div>
        ) : (
          <>
            <ReactQuill
              theme="snow"
              value={msg}
              onChange={(e: any) => {
                const value = e?.target?.value;
                if (value?.trim()) {
                  typingStatusChangeHandler(true);
                } else {
                  typingStatusChangeHandler(false);
                }
                setMsg(value);
              }}
            />
            <input
              type="text"
              placeholder="type your message here"
              onChange={(e) => {
                const value = e?.target?.value;
                if (value?.trim()) {
                  typingStatusChangeHandler(true);
                } else {
                  typingStatusChangeHandler(false);
                }
                setMsg(value);
              }}
              value={msg}
            /> 
          </>
        )}
        <button type="submit">
          <IoMdSend />
        </button> 
      </div>*/
}
