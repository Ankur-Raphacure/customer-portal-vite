import image from 'antd/lib/image';
import React, { useContext } from 'react'
import { ChatContext } from '../../pages/Chat/context/ChatConext';
import { SocketContext } from '../../context/SocketProvider';
import { chatTypes } from '../../pages/Chat/type';
import { BsPip } from 'react-icons/bs';
import { Tooltip } from 'antd';
import UserProfileImage from './UserProfileImage';

const SideBarListCard = ({ data, tabName }: { data: any, tabName: chatTypes }) => {

  const {
    allDirectChatLists,
    // activeTab,
    // setActiveTab,
    currentChat,
    setCurrentChat,
    handleOpenChat,
    onlineUsers,
    typingStatus,
    fetchMessages,
    messages,
    sendMessage,
    getRelativeTimeDifference,
  } = useContext(ChatContext);
  const { userChatId }: any = useContext(SocketContext);

  let image = "";
  let name = "";
  let opponentId = "";

  if (tabName == "INDIVIDUAL_CHAT") {
    image = data?.opponent?.[0]?.avatarImage;
    name =
      data?.opponent?.[0]?.name || data?.opponent?.[0]?.username;
    opponentId = data?.opponent?.[0]?._id;
  } else {
    image = data?.group?.[0]?.logo;
    name = data?.group?.[0]?.name;
    opponentId = data?.group?.[0]?._id;
  }

  const textMessage = data?.latestMessage?.message?.content;
  const isAttachment =
    Array.isArray(data?.latestMessage?.message?.attachments) &&
    data?.latestMessage?.message?.attachments?.length > 0;
  const isEvent =
    data?.latestMessage?.event &&
    Object.keys(data?.latestMessage?.event)?.length > 0;
  const isSharedMessage = data?.latestMessage?.isSharedMessage


  let message = `${userChatId == data?.latestMessage?.sender ? "You:&nbsp;" : `${data?.opponent?.[0]?.name ?? ""}:&nbsp;`} ${(isAttachment && "File Shared") || (isSharedMessage && "Shared Message") || (isEvent && data?.latestMessage?.event?.type?.replace("_", " ")?.toLowerCase()) || textMessage}`

  const openInPIPMode = async () => {
    if ("documentPictureInPicture" in window) {
      let pipWindow = null;
      // If PiP is already open, do nothing
      if (pipWindow) return;

      // @ts-ignore
      pipWindow = await documentPictureInPicture.requestWindow({ width: 500, height: 600 });
      let chatUrl = window.location.href

      let iframe = pipWindow.document.createElement("iframe");
      iframe.src = chatUrl
      iframe.style.width = "100vw";
      iframe.style.height = "100vh";
      iframe.style.border = "none";

      pipWindow.document.body.appendChild(iframe);
      pipWindow.document.body.style.margin = "0";
      pipWindow.document.body.style.backgroundColor = "#fff";

      iframe.onload = () => {
        const token = localStorage.getItem("token");
        const user = localStorage.getItem("user");
        const oppenentDetails = {
          chatType: tabName,
          chatId: opponentId,
          id: opponentId,
          name: name,
          photo: image,
          unReadMessageCount: data?.unreadCount,
          tag: data?.tag,
        };
        iframe.contentWindow?.postMessage({ type: "AUTH_TOKEN_WITH_USER_DETAILS", data: { token, user, oppenentDetails } }, chatUrl);
      };

      pipWindow.addEventListener("pagehide", () => {
        pipWindow = null;
      });
    } else {
      console.error("Picture-in-Picture for documents is not supported in this browser.");
    }
  }
  return (
    <>
      <ul
        className={`userCardList ${currentChat?.chatId == opponentId && "active_user"
          } `}
        onClick={() => {
          handleOpenChat({
            opponent: {
              chatType: "INDIVIDUAL_CHAT",
              chatId: opponentId,
              id: opponentId,
              name: name,
              photo: image,
              unReadMessageCount: data?.unreadCount,
              tag: data?.tag,
            },
            type: tabName,
          });
        }}
      >
        <li className="userProfileImg">
          <UserProfileImage
            name={name}
            url={image}
            className={image ? "profileImg" : "avatar-sidebar"}
          />
          {onlineUsers?.includes(opponentId ?? "") && (
            <div className="online-user-indicatore"></div>
          )}
        </li>
        <li className="middle d-flex justify-content-between align-items-center">
          <div className=''>
            <div className="name">{name ?? ""}</div>
            {typingStatus?.[opponentId] ? (
              <div className="typing">Typing....</div>
            ) : (
              <div className="latestMessage"
                dangerouslySetInnerHTML={{
                  __html: message,
                }}
              ></div>
            )}
          </div>
          <div className='mr-1 sidebar-lists-options'>
            <Tooltip
              title="Open in a pop-up"
            >
              <BsPip
                onClick={openInPIPMode}
              />
            </Tooltip>
          </div>
        </li>
        {Number(data?.unreadCount) ? (
          <li className="unreadMessageCount">
            {data?.unreadCount}
          </li>
        ) : (
          ""
        )}
      </ul>
      <p className="time">
        {getRelativeTimeDifference(data?.latestMessage?.createdAt)}
      </p>
      <div className="userCardListBorderBottom"></div>
    </>
  )
}

export default SideBarListCard