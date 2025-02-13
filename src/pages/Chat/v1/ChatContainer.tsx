import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import axios from "axios";
import { CHAT_API } from "../../../config";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../../../redux/slices/chat/chatService";
import SharedMessageCard from "./SharedMessageCard";
import ShowAttachment from "./ShowAttachment";
import ChatInput from "./ChatInput";
import { IoMdDownload } from "react-icons/io";
import useSendBrowserNotification from "./useSendBrowserNotification";
import UserProfileImage from "./UserProfileImage";

export default function ChatContainer({
  currentUserChatId,
  currentChat,
  socket,
  typingUsers,
}: any) {
  const [messages, setMessages] = useState<any[]>([]);
  const scrollRef: any = useRef();
  const sendMessageRoute = `${CHAT_API}/api/messages/addmsg`;
  const sendGroupMessageRoute = `${CHAT_API}/api/group/add-group-message`;
  const recieveMessageRoute = `${CHAT_API}/api/messages/getmsg`;
  const originalTitle = useRef(document.title);
  const isMounted = useRef(true);
  const dispatch = useDispatch();

  const { user } = useSelector((ReduxState: any) => ReduxState.auth);
  const { playAudio } = useSendBrowserNotification();

  console.log(user);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(date);
  };

  useEffect(() => {
    const fetchMessages = async () => {
      if (currentChat?._id && currentUserChatId) {
        const data: any = await dispatch(
          getMessages({
            from: currentUserChatId,
            to: currentChat.chatId,
          }),
        );
        if (isMounted.current && Array.isArray(data?.payload)) {
          setMessages(data?.payload);
        }
      }
    };
    fetchMessages();
  }, [currentChat, currentUserChatId]);

  const typingStatusChangeHandler = useCallback(
    (isTypingStart: Boolean) => {
      console.log(isTypingStart, isMounted?.current, "typing");

      if (!isMounted.current) return;
      if (isTypingStart) {
        socket.current.emit("typing-start", {
          name: currentChat?.name,
          from: currentUserChatId,
          fromUser: `${user?.first_name ?? ""} ${user?.last_name ?? ""}`,
          to: currentChat?.isGroupChat
            ? currentChat.group_id
            : currentChat?.chatId,
          isGroupChat: currentChat?.isGroupChat ? true : false,
        });
      } else {
        socket.current.emit("typing-stop", {
          name: currentChat?.name,
          fromUser: `${user?.first_name ?? ""} ${user?.last_name ?? ""}`,
          from: currentUserChatId,
          to: currentChat?.isGroupChat
            ? currentChat.group_id
            : currentChat?.chatId,
          isGroupChat: currentChat?.isGroupChat ? true : false,
        });
      }
    },
    [
      currentChat?.chatId,
      currentChat.group_id,
      currentChat?.isGroupChat,
      currentChat?.name,
      currentUserChatId,
      socket,
      user?.first_name,
      user?.last_name,
    ],
  );

  const handleSendMsg = useCallback(
    async (msg: any, type: any) => {
      socket.current.emit("send-msg", {
        to: currentChat.chatId,
        from: currentUserChatId,
        message: msg,
        type: type,
        name: currentChat?.name,
      });
      typingStatusChangeHandler(false);

      const result = await axios.post(
        currentChat?.isGroupChat ? sendGroupMessageRoute : sendMessageRoute,
        {
          from: currentUserChatId,
          to: currentChat.chatId,
          message: msg,
          type: type,
          chat_type: "INDIVIDUAL_CHAT",
        },
      );

      if (result?.data?.success) {
        playAudio();
      }

      const msgs: any = [...messages];
      msgs.push({
        fromSelf: true,
        message: msg,
        createdAt: new Date().toISOString(),
        type: type,
        chat_type: "INDIVIDUAL_CHAT",
      });
      setMessages(msgs);
    },
    [
      currentChat.chatId,
      currentChat.group_id,
      currentChat?.isGroupChat,
      currentChat?.name,
      currentUserChatId,
      messages,
      sendGroupMessageRoute,
      sendMessageRoute,
      socket,
      typingStatusChangeHandler,
    ],
  );

  const onMessageRecieve = useCallback(
    (message: any) => {
      if (!isMounted.current) return;
      let msg = JSON.parse(message);
      if (msg && currentChat?.chatId === msg?.from) {
        // Send notification only if the message is new
        // sendNotification(msg?.name, msg?.message);

        console.log(message, "message");

        setMessages((prev: any) => [
          ...prev,
          {
            shared_message: msg?.sharedMessage?.message
              ? {
                  content: msg?.sharedMessage?.message,
                  type: msg?.sharedMessage?.type,
                }
              : undefined,
            fromSelf: currentChat?.chatId !== msg?.from,
            message: msg?.message,
            type: msg?.type,
            createdAt: new Date().toISOString(),
          },
        ]);

        // Start toggling the title when a new message is received
        // toggleTitle({
        //   title: `${msg?.name}: ${msg?.message?.substring(0, 10)} ${
        //     msg?.message?.length > 10 ? "..." : ""
        //   }`,
        // });

        // Avoid adding duplicate messages
        // if (!messages.some((message) => message.createdAt === msg.createdAt)) {
        // }
      }
    },
    [currentChat],
  );

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", onMessageRecieve);
    }
    return () => {
      socket.current.off("msg-recieve", onMessageRecieve);
    };
  }, [onMessageRecieve, socket]);

  // useEffect(() => {
  //   if (arrivalMessage) {
  //     setMessages((prev: any) => [...prev, arrivalMessage]);
  //   }
  // }, [arrivalMessage]);

  // Function to toggle the title
  // const toggleTitle = () => {
  //   let intervalId: any;
  //   let count = 0;
  //   const newTitle = "New Message Arrived";

  //   intervalId = setInterval(() => {
  //     // Toggle the title every 400ms
  //     document.title = count % 2 === 0 ? newTitle : originalTitle.current;
  //     count++;

  //     if (count >= 12) {
  //       clearInterval(intervalId);
  //       document.title = originalTitle.current;
  //     }
  //   }, 1000);
  // };

  // useEffect(() => {
  //   // Check if notifications are supported
  //   if ("Notification" in window) {
  //     // Check current permission
  //     if (Notification.permission === "default") {
  //       // Request permission
  //       Notification.requestPermission()
  //         .then((permission) => {
  //           console.log(`Notification permission: ${permission}`);
  //         })
  //         .catch((error) => {
  //           console.error("Notification permission request failed:", error);
  //         });
  //     }
  //   } else {
  //     console.error("This browser does not support desktop notifications.");
  //   }
  // }, []);

  // const sendNotification = (userName: any, text: any) => {
  //   if (Notification.permission === "granted") {
  //     // Show browser notification
  //     new Notification(userName, {
  //       body: text,
  //       icon: "rapha.png", // Optional: Replace with an actual icon path
  //     });

  //     // Play notification sound
  //     const audio = new Audio("/notification.mp3");
  //     audio.play().catch((error) => {
  //       console.error("Error playing notification sound:", error);
  //     });
  //   } else {
  //     console.error("Notification permission not granted.");
  //   }
  // };

  useEffect(() => {
    (scrollRef.current as any)?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Container className="h-100">
      <div className="chatRightSideContainer ">
        <div className="chat-header">
          <div className="user-details">
            {currentChat?.image ? (
              <img className="avatar" src={currentChat?.image} alt="" />
            ) : (
              <span className="no-image-sec-char">
                {currentChat?.name?.charAt(0)}
              </span>
            )}
            <div className="username">
              <div className="title">{currentChat.name || ""}</div>
              <div className="d-flex ">
                {Array.isArray(typingUsers) && typingUsers?.length !== 0 && (
                  <div className="typing mr-2">
                    {typingUsers?.toString()} typing...
                  </div>
                )}

                {/* <div className="members-count">2 members</div> */}
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="chat-messages">
          {messages?.map((message: any, idx: number) => {
            return (
              <div ref={scrollRef} key={idx}>
                <div
                  className={`message ${
                    message.fromSelf ? "sended" : "recieved"
                  }`}
                >
                  <div className="content">
                    <UserProfileImage
                      name={
                        message.fromSelf
                          ? `${user?.first_name || ""} ${user?.last_name || ""}`
                          : currentChat?.name
                      }
                      url={message?.fromSelf ? user?.image : currentChat?.image}
                      className="user_image"
                    />

                    {message?.type !== "TEXT" && (
                      <div
                        className={`overlay-options
                      ${message.fromSelf ? "option-left" : "option-right"}
                      `}
                      >
                        <IoMdDownload
                          onClick={() => {
                            const link = document.createElement("a");
                            link.href = message?.message;
                            link.target = "_blank";
                            link.click();
                          }}
                          size={18}
                        />
                      </div>
                    )}

                    {message?.shared_message && (
                      <SharedMessageCard
                        message={message?.message}
                        content={message?.shared_message?.content}
                        type={"TEXT"}
                      />
                    )}
                    {message?.type === "TEXT" ? (
                      <div
                        className="msg-text"
                        dangerouslySetInnerHTML={{ __html: message?.message }}
                      />
                    ) : (
                      <>
                        <ShowAttachment
                          url={message?.message}
                          type={message?.type}
                        />
                      </>
                    )}

                    <div className="footer">
                      {/* <small>
                        {message.fromSelf
                          ? " "
                          : userDetailsMap?.[message?.senderName]?.name ?? ""}
                      </small> */}
                      <small>{formatDate(message?.createdAt)}</small>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <ChatInput
          handleSendMsg={handleSendMsg}
          chatId={currentChat?.chatId}
          typingStatusChangeHandler={typingStatusChangeHandler}
        />
      </div>
    </Container>
  );
}

const Container = styled.div`
  // display: grid;
  // // min-height: 500px;
  // grid-template-rows: 10% 80% 10%;
  // gap: 0.1rem;
  // overflow: hidden;
  // @media screen and (min-width: 720px) and (max-width: 1080px) {
  //   grid-template-rows: 15% 70% 15%;
  // }
  .chatRightSideContainer {
    padding: 0px;
  }
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    border-bottom: 1px solid #e2e2e2;
    background-color: #f0f0f0;

    // padding-bottom: 20px;
    // padding-top: 20px;
    .user-details {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      img.avatar {
        height: 3rem;
        width: 3rem;
        border-radius: 50%;
      }
      .username {
        div.title {
          color: #000;
          font-size: 18px;
          margin-bottom: 0px;
        }
        .typing {
          font-size: 14px;
        }
        .members-count {
          font-size: 14px;
        }
      }
    }
  }
  .chat-messages {
    padding: 1rem 0rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .message {
      display: flex;
      align-items: center;
      max-width: 100%;
      margin-bottom: 0px;
      border: none;
      background: none;
      padding: 0px 10px;
      .content {
        max-width: 70%;
        padding: 10px;
        border-radius: 20px;
        font-size: 1.1rem;
        position: relative;
        overflow-wrap: break-word;
        word-wrap: break-word;
        line-height: 1.4;

        &:hover {
          .overlay-options {
            display: flex;
          }
        }

        .overlay-options {
          display: none;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          gap: 1rem;
          position: absolute;
          background: #f0f0f0;
          color: #212529;
          border-radius: 5px;
          padding: 2px;
          cursor: pointer;
        }

        .option-right {
          right: -10px;
          top: 0px;
        }
        .option-left {
          left: -10px;
          top: 0px;
        }

        p,
        a,
        h1,
        h2,
        h3 {
          color: #fff; /* White text for received messages */
        }

        h1 {
          font-size: 24px !important;
        }
        h2 {
          font-size: 22px !important;
        }
        h3 {
          font-size: 20px !important;
        }
        p li u {
          font-size: 16px !important;
        }

        .msg-text {
          padding: 0px 5px;
        }

        .footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          margin-top: 10px;
          padding: 0px 5px;
        }
        small {
          display: block;
          font-size: 0.9rem;
          color: #fff;
          text-align: end;
          // margin-top: 0.5rem;
        }
      }
    }

    .user_image {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      position: absolute;
      object-fit: cover;
    }

    .sended {
      justify-content: flex-end;
      .content {
        border: 1px solid #e2e2e2; /* Blue border for sent messages */
        border-radius: 20px 20px 0 20px; /* Rounded bubble for sent message */
        margin-left: auto;
        max-width: 80%;

        background: #0078ff;
        color: #fff;

        .user_image {
          left: -30px;
          bottom: 5px;
        }
      }
    }
    .recieved {
      justify-content: flex-start;
      .content {
        max-width: 80%;
        border: 1px solid #e2e2e2;
        background-color: #f0f0f0; /* Blue background for received messages */
        border-radius: 20px 20px 20px 0; /* Rounded bubble for received message */
        margin-right: auto;
        background: #0078ff;
        color: #fff;

        .user_image {
          right: -30px;
          bottom: 5px;
        }
      }
    }
  }
`;
