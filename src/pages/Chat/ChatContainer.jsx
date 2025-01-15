import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import axios from "axios";
import { CHAT_API } from "../../config";

export default function ChatContainer({
  currentUserChatId,
  currentChat,
  socket,
}) {
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const sendMessageRoute = `${CHAT_API}/api/messages/addmsg`;
  const recieveMessageRoute = `${CHAT_API}/api/messages/getmsg`;
  const originalTitle = useRef(document.title);

  const formatDate = (dateString) => {
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
        const response = await axios.post(recieveMessageRoute, {
          from: currentUserChatId,
          to: currentChat._id,
        });
        setMessages(response.data);
      }
    };
    fetchMessages();
  }, [currentChat]);

  const handleSendMsg = async (msg) => {
    socket.current.emit("send-msg", {
      to: currentChat._id,
      from: currentUserChatId,
      msg,
    });
    await axios.post(sendMessageRoute, {
      from: currentUserChatId,
      to: currentChat._id,
      message: msg,
      type: "TEXT",
      chat_type: "INDIVIDUAL_CHAT",
    });

    const msgs = [...messages];
    msgs.push({
      fromSelf: true,
      message: msg,
      createdAt: new Date().toISOString(),
    });
    setMessages(msgs);
  };

  const onMessageRecieve = useCallback(
    (msg) => {
      if (msg) {
        console.log("msg-recieve : ", msg);
        sendNotification(currentChat?.username, msg);

        if (!messages.some((message) => message.createdAt === msg.createdAt)) {
          setArrivalMessage({
            fromSelf: false,
            message: msg,
            createdAt: new Date().toISOString(),
          });

          // Start toggling the title when a new message is received
          toggleTitle();
        }
      }
    },
    [messages]
  );

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", onMessageRecieve);
    }
    return () => {
      socket.current.off("msg-recieve", onMessageRecieve);
    };
  }, [onMessageRecieve, socket]);

  useEffect(() => {
    if (arrivalMessage) {
      setMessages((prev) => [...prev, arrivalMessage]);
    }
  }, [arrivalMessage]);

  // Function to toggle the title
  const toggleTitle = () => {
    let intervalId;
    let count = 0;
    const newTitle = "New Message Arrived";

    intervalId = setInterval(() => {
      // Toggle the title every 400ms
      document.title = count % 2 === 0 ? newTitle : originalTitle.current;
      count++;

      if (count >= 12) {
        clearInterval(intervalId);
        document.title = originalTitle.current;
      }
    }, 1000);
  };

  useEffect(() => {
    // Check if notifications are supported
    if ("Notification" in window) {
      // Check current permission
      if (Notification.permission === "default") {
        // Request permission
        Notification.requestPermission()
          .then((permission) => {
            console.log(`Notification permission: ${permission}`);
          })
          .catch((error) => {
            console.error("Notification permission request failed:", error);
          });
      }
    } else {
      console.error("This browser does not support desktop notifications.");
    }
  }, []);

  const sendNotification = (userName, text) => {
    if (Notification.permission === "granted") {
      // Show browser notification
      new Notification(userName, {
        body: text,
        icon: "rapha.png", // Optional: Replace with an actual icon path
      });

      // Play notification sound
      const audio = new Audio("/notification.mp3");
      audio.play().catch((error) => {
        console.error("Error playing notification sound:", error);
      });
    } else {
      console.error("Notification permission not granted.");
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Container>
      <div className="chat-header">
        <div className="user-details">
          <div className="avatar"></div>
          <div className="username">
            <h3>{currentChat.username}</h3>
          </div>
        </div>
      </div>
      <div className="chat-messages">
        {messages.map((message, idx) => {
          return (
            <div ref={scrollRef} key={idx}>
              <div
                className={`message ${
                  message.fromSelf ? "sended" : "recieved"
                }`}
              >
                <div className="content">
                  <p>{message?.message}</p>
                  <small>{formatDate(message?.createdAt)}</small>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ChatInput handleSendMsg={handleSendMsg} />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  min-height: 500px;
  grid-template-rows: 10% 80% 10%;
  gap: 0.1rem;
  overflow: hidden;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-rows: 15% 70% 15%;
  }
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    border-bottom: 1px solid #e2e2e2;
    padding-bottom: 20px;
    padding-top: 20px;
    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: #000;
        }
      }
    }
  }
  .chat-messages {
    padding: 1rem 2rem;
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
      border: none;
      background: none;
      .content {
        max-width: 70%;
        padding: 10px 20px;
        border-radius: 20px;
        font-size: 1.1rem;
        position: relative;
        overflow-wrap: break-word;
        word-wrap: break-word;
        line-height: 1.4;
        small {
          display: block;
          font-size: 0.8rem;
          color: #b0b0b0;
          margin-top: 0.5rem;
        }
      }
    }
    .sended {
      justify-content: flex-end;
      .content {
        background-color: #fff; /* White background for sent messages */
        color: #0078ff; /* Blue text for sent messages */
        border: 1px solid #0078ff; /* Blue border for sent messages */
        border-radius: 20px 20px 0 20px; /* Rounded bubble for sent message */
        margin-left: auto;
      }
    }
    .recieved {
      justify-content: flex-start;
      .content {
        background-color: #0078ff; /* Blue background for received messages */
        border-radius: 20px 20px 20px 0; /* Rounded bubble for received message */
        margin-right: auto;
        p {
          color: #fff; /* White text for received messages */
        }
      }
    }
  }
`;
