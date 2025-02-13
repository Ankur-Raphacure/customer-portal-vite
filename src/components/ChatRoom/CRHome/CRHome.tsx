import React, { useEffect, useState } from "react";
import { ZIM } from "zego-zim-web";
import { ZEGOCLOUD_CHAT_APPID } from "../../../config";
import { generateToken } from "../../../utils";
import { toast } from "react-toastify";
import { CRHomeStyled } from "./CRHome.styled";

var appID = parseInt(ZEGOCLOUD_CHAT_APPID);
ZIM.create({ appID });
var zim = ZIM.getInstance() as any;

interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: number;
}

export default function CRHome() {
  const [toUserId, setToUserId] = useState("");
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const tmpToken = generateToken(userId, 7200);
    setToken(tmpToken);
  }, [userId]);

  useEffect(() => {
    zim.on("error", function (zim: any, errorInfo: any) {
      console.log("error", errorInfo.code, errorInfo.message);
    });

    zim.on(
      "connectionStateChanged",
      function (zim: any, { state, event, extendedData }: any) {
        console.log("connectionStateChanged", state, event, extendedData);
        if (state === 0 && event === 3) {
          // @ts-ignore
          zim.login({ userName }, token);
        }
      },
    );

    // zim.on(
    //   "receivePeerMessage",
    //   function (zim, { messageList, fromConversationID }) {
    //     console.log("receivePeerMessage", messageList, fromConversationID);
    //     const newMessages = messageList.map((msg: any) => ({
    //       id: msg.messageID,
    //       senderId: msg.senderUserID,
    //       receiverId: userId,
    //       content: msg.message,
    //       timestamp: msg.timestamp,
    //     }));
    //     setMessages((prevMessages) => [...prevMessages, ...newMessages]);
    //   }
    // );

    zim.on("tokenWillExpire", function (zim: any, { second }: any) {
      console.log("tokenWillExpire", second);
      zim
        .renewToken(token)
        .then(function ({ token }: any) {
          // Renewed successfully.
        })
        .catch(function (err: any) {
          // Renew failed.
        });
    });

    zim.on(
      "receivePeerMessage",
      function (zim: any, { messageList, fromConversationID }: any) {
        console.log("receivePeerMessage", messageList, fromConversationID);
        const newMessages = messageList.map((msg: any) => ({
          id: msg.messageID,
          senderId: msg.senderUserID,
          receiverId: userId,
          content: msg.message,
          timestamp: msg.timestamp,
        }));
        setMessages((prevMessages) => [...prevMessages, ...newMessages]);
      },
    );
  }, [userId, userName, token]);

  const handleLogin = () => {
    try {
      const newUserDetails = { userName, userID: userId };
      zim
        .login(newUserDetails, token)
        .then(function (res: any) {
          console.log("res", res);
          toast.success("Logged in successfully");
        })
        .catch(function (err: any) {
          console.log("err", err);
          toast.error("Login failed");
        });
    } catch (error) {
      console.log("error", error);
      toast.error("An error occurred during login");
    }
  };

  const handleSendMessage = () => {
    try {
      var config = {
        priority: 1,
      };

      var messageTextObj = { type: 1, message: message };
      zim
        .sendMessage(messageTextObj, toUserId, 0, config)
        .then(function ({ message: sentMessage }: any) {
          console.log("message", sentMessage);
          const newMessage = {
            id: sentMessage.messageID,
            senderId: userId,
            receiverId: toUserId,
            content: sentMessage.message,
            timestamp: sentMessage.timestamp,
          };
          setMessages((prevMessages: any) => [...prevMessages, newMessage]);
          toast.success("Message sent successfully");
          setMessage("");
        })
        .catch(function (err: any) {
          console.log("err", err);
          toast.error(err.message);
        });
    } catch (error) {
      console.log("error", error);
      toast.error("An error occurred while sending the message");
    }
  };

  return (
    <CRHomeStyled>
      <div className="cr-home">
        <h1>Chat Application</h1>
        <div className="input-group">
          <label htmlFor="token">Token</label>
          <input
            id="token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            readOnly
          />
        </div>

        <div className="input-group">
          <label htmlFor="userName">Your Name</label>
          <input
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="userId">User ID</label>
          <input
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>

        <button onClick={handleLogin}>Login</button>

        <div className="input-group">
          <label htmlFor="toUserId">Recipient User ID</label>
          <input
            id="toUserId"
            value={toUserId}
            onChange={(e) => setToUserId(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message here..."
          />
        </div>

        <button onClick={handleSendMessage}>Send Message</button>

        <div className="message-list">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`message-bubble ${
                msg.senderId === userId ? "sent" : "received"
              }`}
            >
              <div className="message-content">{msg.content}</div>
              <div className="message-info">
                {msg.senderId === userId ? "You" : msg.senderId} to{" "}
                {msg.receiverId}
              </div>
            </div>
          ))}
        </div>
      </div>
    </CRHomeStyled>
  );
}
