import React, { useContext, useEffect, useRef } from "react";
import { IoMdMenu, IoMdSearch } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCirclePlus } from "react-icons/fa6";
import { RiSendPlaneFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import ChatRoomHeaderTitle from "../../components/chat/ChatRoomHeaderTitle";
import { ChatContext } from "./context/ChatConext";
import Message from "../../components/chat/Message/Message";
import UserProfileImage from "../../components/chat/UserProfileImage";
import ChatInput from "../../components/chat/ChatInput";
import { SocketContext } from "../../context/SocketProvider";
import { messageDto } from "./type";
import { Divider } from "antd";
import EventMessage from "../../components/chat/Message/EventMessage";
import SideBarListCard from "../../components/chat/SideBarListCard";

const Chat = () => {
  const { socket, userChatId }: any = useContext(SocketContext);
  const {
    allDirectChatLists,
    currentChat,
    setCurrentChat,
    handleOpenChat,
    onlineUsers,
    typingStatus,
    fetchMessages,
    messages,
    sendMessage,
    getRelativeTimeDifference,
    isPipMode,
  } = useContext(ChatContext);
  const scrollRef: any = useRef(null);

  const { user } = useSelector((ReduxState: any) => ReduxState.auth);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView();
  }, [messages, scrollRef]);

  let prevDate = "";

  return (
    <ChatStyle>
      <div className={`chatMainDiv ${isPipMode ? "p-0" : ""}`}>
        {!isPipMode && (
          <div className="leftSideBar">
            {/* input header */}
            <ul className="d-flex justify-content-between align-items-center header p-0">
              <li className="inputFame d-flex align-items-center">
                <LuSearch className="mt-1" size={20} />
                <input type="text" name="" placeholder="Search name" id="" />
              </li>
              <li></li>
            </ul>

            {/* /options */}
            <ul className="d-flex align-items-center options">
              <li className={`${"active"}`}>Direct Chat</li>
            </ul>

            {/* list */}
            <div className="userCardListFrame">
              {allDirectChatLists?.map((item: any, i: number) => {
                return (
                  <SideBarListCard
                    tabName="INDIVIDUAL_CHAT"
                    data={item}
                    key={i}
                  />
                );
              })}
            </div>
          </div>
        )}

        <div className="rightSideBar">
          {currentChat ? (
            <>
              {/* /top/ */}
              <div className="headerNav">
                <UserProfileImage
                  name={currentChat?.name}
                  url={currentChat?.photo}
                  className={
                    currentChat?.photo ? "profileImg" : "avatar-sidebar"
                  }
                />
                <ChatStyle>
                  <ChatRoomHeaderTitle />
                </ChatStyle>
              </div>

              {/* middle messages */}
              <div className="messageFrame">
                {/* message */}
                {messages?.map((msg: messageDto) => {
                  let date: any = new Date(msg?.createdAt);
                  date = date.toDateString();
                  const dateDiv =
                    prevDate == date ? (
                      <></>
                    ) : (
                      <Divider>
                        {date === new Date()?.toDateString() ? "Today" : date}
                      </Divider>
                    );
                  prevDate = date;
                  if (msg?.event && Object.keys(msg?.event)?.length != 0) {
                    return (
                      <>
                        {dateDiv}
                        <EventMessage msg={msg} key={msg?._id} />
                      </>
                    );
                  }
                  return (
                    <>
                      {dateDiv}
                      <div ref={scrollRef} key={msg?._id}>
                        <Message msg={msg} />
                      </div>
                    </>
                  );
                })}
              </div>
              {/* input */}
              <ChatInput />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </ChatStyle>
  );
};

export default Chat;

export const ChatStyle = styled.div`
  .chatMainDiv {
    display: flex;
    background: #fff;
    width: 100%;
    height: calc(100vh - 100px);
    padding: 10px 20px;
    // overflow: hidden;
    // margin-top: -16px;
    // padding-top: 0px;
  }
  // display: grid;
  // grid-template-columns: minmax(250px, 300px) 1fr;

  ul {
    list-style-type: none;
    padding: 0px;
    margin: 0px;
  }
  .leftSideBar {
    padding: 0px 10px;
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border-right: 1px solid #e7e7e7;

    .header {
      gap: 15px;

      .menu {
        color: #3b4171;
        font-size: 40px;
        cursor: pointer;
      }
      .inputFame {
        gap: clamp(5px, 0.5em, 20px);
        border: 1px solid #c5c5c5;
        padding: 9px 11px;
        border-radius: 25px;
        background: #fff;
        width: 100%;
            max-height: 46px;

        input {
          outline: none;
          border: 0px;

          &:placeholder {
            font-size: 14px;
          }
        }
      }
    }

    .options {
      width: 100%;
      padding: 0px;
      gap: clamp(10px, 0.8em, 20px);
      margin-top: 13px;
      margin-bottom: 13px;
      position: sticky;
      top: 0;
      z-index: 1000;
      background: #fff;
      font-family: Poppins;
      font-size: 16px;
      font-weight: 400;
      line-height: 21px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;

      cursor: pointer;

      .active {
        color: #000000;
        font-weight: 600;
      }
    }

    .active_user {
      //   background: #f8f8ff;
      background: #ececff;
    }

    .userCardListFrame {
      height: 100%;
      max-height: calc(100vh - 200px);
      overflow-y: auto;
    }

    .userProfileImg {
        position: relative;
    }

    .online-user-indicatore {
      width: 10px;
      height: 10px;
      aspect-ratio: 1 / 1;
      border-radius: 100%;
      // background-color: #16a34a;
      background-color: white;
      box-shadow: 0px 1px 5px #575252;
      position: absolute;
      right: 0px;
    bottom: 3px;
  }

    .userCardListBorderBottom {
      width: 100%;
      border: 0.5px solid #e5e5e5;
      height: 0px;
      margin: 10px 0px 10px 0px;
    }

    .time {
      margin: 3px 0px 0px 0px;
      text-align: end;
      color: #343434;
      opacity: 0.8;
      font-size: 10px;
      font-weight: 400;
    }

    .userCardList {
      display: flex;
      gap: 5px;
      //   border: 1px solid red;
      padding: 6px;
      border-radius: 25px;
      align-items: center;
      cursor: pointer;

      &:hover {
        background: #ececff;

        .
      }

      .profileImg {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        aspect-ratio: 1 / 1;
        object-fit: contain;
      }

      .listHeader {
            position: sticky;
    top: 0;
    background: white;
    z-index: 1000;
      }

      .middle {
        flex: 1;
        font-weight: 500;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;

        .name {
          font-size: 16px;
          color: #001e3a;
        }

        .typing {
          font-size: 14px;
          line-height: 14.52px;
          color: #6c71c9;
        }

        .sidebar-lists-options{
          display: none;
          }
          
          &:hover {
            .sidebar-lists-options{
               display: block;
            }
        }

        .latestMessage {
          font-size: 14px;
          line-height: 14.52px;
          color: #27B3A4;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          overflow: hidden;
          -webkit-line-clamp: 1;

          // display: flex;
          font-size: 14px !important;
          margin: 0px;
          padding: 0px;
          
          & > * {
            padding: 0px !important;
            margin: 0px !important;
            font-size: 14px !important;
          }
        }
      }

      .unreadMessageCount {
        width: 25px;
        height: 25px;
        flex-shrink: 0;
        aspect-ratio: 1 / 1;
        border-radius: 100%;
        color: white;
        background: #252b61;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .rightSideBar {
    width: 100%;
        display: flex
;
    flex-direction: column;
}
  }

  .headerNav {
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 10px 0px 10px 20px;
    border-bottom: 1px solid #e7e7e7;

    .profileImg {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      aspect-ratio: 1 / 1;
        object-fit: contain;
  }

    .userName {
      color: #343434;
      font-size: 18px;
      font-weight: 700;
    }
  }

  .indicator {
    p {
      color: #343434;
      font-size: 12px;
      font-weight: 400;
    }
  }

  .eventMessageFrame {
      background: #F8F8FF;
      border-radius: clamp(5px, 1rem, 2rem);
      color: #343434;
      padding: 5px;
      text-align: center;
      margin: 2rem 0;
      }

  .messageFrame{
  flex: 1;
  overflow-y: auto;
  padding: 10px 20px;
  }

  .bottom_input{
    
  }

  .inputFrame {
    border: 1px solid #e7e7e7;
    background: #F8F8FF;
    border-left: 0;
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;

  }

  .inputSendMsg {
    width: 100%;
    max-height: 50px;
    border: 0px;
    outline: none;
    padding: 10px;
    border-radius: 9px;
    border: 1px solid #F0F0F0;
  }

  .attachmentBtn {
    font-size: 25px;
    color: #252B61;
  }

  .sendBtn {
  border: 1px solid #E7E7E7;
  padding: 0px 10px;

  display: flex;
    justify-content: center;
    align-items: center;

  border-left: 0;
    button {
      display: flex;
      justify-content: center;
      align-items: center;
    background: #252B61;
    border: 0px;
    color: white;
    width: 64px;
    height: 43px;
    font-size:30px;
    border-radius: 20px;

  }
  }

  .msgContainer {
  width: 100%;
    display: flex;
        margin-bottom: 2rem;

      .msg {
      // width: 50%;
      min-width: 80px;
      max-width: 50%;
      flex-shrink: 0;
      position: relative;
      }
      .textMsg {
        background: #F8F8FF;
        padding: 1rem 2rem;
        // border-radius: 5rem;
        border-radius: clamp(5px, 1rem, 2rem);
        color: #343434;


        p,
        a,
        h1,
        h2,
        h3 {
          color: #212529; /* White text for received messages */
        }

        h1 {
          font-size: 20px !important;
        }
        h2 {
          font-size: 18px !important;
        }
        h3 {
          font-size: 15px !important;
        }
        p li u {
          font-size: 16px !important;
        }
      }

      .msgProfileImg {
        width: 25px !important;
        height: 25px !important;
        font-size: 14px;
        border-radius: 50%;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
            object-fit: contain;
      }

      .sentBy {
        color: #343434;
        font-size: 14px;
        margin-left: 1rem;
        }
        
        .sendByMe {
          margin-left: 1rem;
      }
      .sendByOthers {
        margin-right: 1rem;
        text-align: end;
      }
  }
  .fs-14px {
    font-size: 14px;
  }

  .attachmentsList{
    gap: 1rem;
    margin-top: 1rem;
  }

  .attachmentBox {
    width: auto;
    height: 60px;
    flex-shrink: 0;
    border-radius: 5px;
  }

  .msg {
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
          padding: 5px;
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
  }

  .reply {
    font-size: 14px;
        background: #ffffff;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    -webkit-line-clamp: 1;
    font-weight: 400 !important;
    padding: 5px;
    border: 1px solid #cccccc;
    margin-bottom: 0px;
    border-top-right-radius: 2rem;
    border-top-left-radius: 2rem;
    border-bottom: 0px;
    color: #636366;
    padding: 10px;
    position: relative;

  .closeIcon{
    cursor: pointer;
  }
    .userInfo {
    }
    .msgProfileImg {
      width: 20px;
      height: 20px;    
    }
  }

  .inputEditor {
    // max-height: 100px;
    overflow-y: scroll;
  }

  .quil {
     .ql-picker-item {
        padding: 0px !important;
        margin: 0px !important;
     }

     .ql-snow {
         padding: 0 0 8px 0 !important;
     }
    
     .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="1"]::before,
     .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="2"]::before,
     .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="3"]::before,
     .ql-snow .ql-picker.ql-header .ql-picker-item[data-value="4"]::before,
     .ql-picker-item
     {
      font-size: 1rem !important;
     }

    .ql-toolbar {
      // background: #f0f0f0;
      // border-radius: 10px 10px 0 0;
      border: 0px !important;
      // border-left: 0px !important;
      // border-right: 0px !important;
    }

    .ql-editor{
        background: #fff;
        border-radius: 10px;
        min-height: 70px;
        max-height: 100px;
    }

    .ql-container {
      overflow-y: auto;
      min-height: auto !important;
      max-height: auto !important;
      border: 0px !important;
    }

    .ql-active {
      background: #262b61 !important;
      color: white !important;
      stroke: white !important;
      border-radius: 5px;
      margin: 0px 5px;

      svg > * {
        stroke: white !important;
      }

      &:hover{
        color: #262b61 !important;
      }
    }
  }

  .messageReply {
    font-size: 12px;
  }



  .highlight {
    animation: blink 0.5s ease-in-out infinite;
    padding: 10px;
    border-radius: 10px;
  }

    @keyframes blink {
      0% {
        background-color: #F8F8FF;
      }
      50% {
        background-color: transparent;
      }
      100% {
        background-color: #F8F8FF;
      }
    }

  .reactionsDiv {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    .reactionCard {
      display: flex;
      gap: 7px;
      font-size: 16px;
      border: 1px solid #262b61;
      padding: 2px 5px;
      border-radius: 5px;
      background: #f8f8ff;
    }
  }
`;
