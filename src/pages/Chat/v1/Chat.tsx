import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaUser, FaPaperPlane } from "react-icons/fa";
import { ChatComponentStyled } from "./ChatComponent.styled";
import { useDispatch, useSelector } from "react-redux";
import { patientDoctorsAPI } from "../../../redux/slices/doctor/doctorService";
import {
  addMessage,
  getMessages,
  getUserChatId,
  updateReadMessagStatus,
} from "../../../redux/slices/chat/chatService";
import { toast } from "react-toastify";
import { CHAT_API } from "../../../config";
import { io } from "socket.io-client";
import ChatContainer from "./ChatContainer";
import { IoMdSearch, IoMdAdd, IoMdClose } from "react-icons/io";
import useSendBrowserNotification from "./useSendBrowserNotification";

type Doctor = {
  id: string;
  name: string;
  specialization: string;
  unReadMessageCount: number;
  city: string;
  rating: number;
  chatId?: string;
  image: string;
};

type Message = {
  fromSelf: boolean;
  message: string;
};

const ChatComponent: React.FC = () => {
  const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
  const [typingStatus, setTypingStatus] = useState<{
    [key: string]: string[];
  }>({});

  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [newMessage, setNewMessage] = useState<string>("");
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [currentUserChatId, setCurrentUserChatId] = useState<string | null>(
    null
  );
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);
  const [currentUserId, setCurrentUserId] = useState();
  const dispatch = useDispatch();
  const userIdFromUrl = new URLSearchParams(window.location.search).get(
    "docId"
  );
  const [currentUser, setCurrentUser] = useState<any>(undefined);
  const socket = useRef<any>(null);
  const { sendNotification, toggleTitle } = useSendBrowserNotification();

  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    if (currentUserChatId) {
      socket.current = io(CHAT_API);
      socket.current.emit("add-user", currentUserChatId);
    }
  }, [currentUserChatId]);

  const fetchDoctorsChatIds = useCallback(
    async (doctorsList: Doctor[]) => {
      try {
        if (!currentUserChatId) return [];
        const updatedDoctors: any = [];
        await Promise.all(
          doctorsList.map(async (doctor: Doctor) => {
            const res = (await dispatch(
              getUserChatId({ rcId: doctor.id, userId: currentUserChatId })
            )) as any;

            console.log(res);
            updatedDoctors.push({
              ...doctor,
              chatId: res.payload?.user?._id,
              unReadMessageCount: res?.payload?.user?.unReadMessageCount,
            });
          })
        );
        return updatedDoctors;
      } catch (error) {
        console.error("Error fetching doctors chat IDs:", error);
        toast.error("Failed to fetch doctors chat IDs");
        return doctorsList;
      }
    },
    [dispatch, currentUserChatId]
  );
  console.log(currentUserChatId, "currentUserChatId");

  // get all online users status
  const onOnlineUsersChange = useCallback((data: any) => {
    setOnlineUsers(data);
  }, []);

  // get typing status
  const onTypingStatusChange = useCallback((data: any) => {
    setTypingStatus((prev) => {
      const newTypingStatus: any = { ...prev };
      const isStartedTyping = data?.typingStatus === "STARTED_TYPING";
      const from = data?.isGroupChat ? data?.to : data?.from;
      const usersList = newTypingStatus[from];

      if (isStartedTyping) {
        const uniqueUsers = new Set(
          Array.isArray(usersList)
            ? [...usersList, data.fromUser]
            : [data.fromUser]
        );

        newTypingStatus[from] = Array.from(uniqueUsers);
      } else {
        if (Array.isArray(usersList) && usersList.length <= 1) {
          delete newTypingStatus[from];
        } else {
          newTypingStatus[from] = usersList?.filter(
            (user: string) => user !== data?.fromUser
          );
        }
      }
      return newTypingStatus;
    });
  }, []);

  useEffect(() => {
    if (currentUserChatId) {
      socket.current = io(CHAT_API);
      socket.current.emit("add-user", currentUserChatId);
      socket.current.on("update-online-users", onOnlineUsersChange);
      socket.current.on("typing-status", onTypingStatusChange);

      return () => {
        if (socket.current) {
          socket.current.off("update-online-users", onOnlineUsersChange);
          socket.current.off("typing-status", onTypingStatusChange);
        }
      };
    }
  }, [currentUserChatId, onOnlineUsersChange, onTypingStatusChange]);

  const updateReadMessagStatusApiCall = useCallback(
    async ({ chat }: { chat: any }) => {
      await dispatch(
        updateReadMessagStatus({
          from: currentUserChatId,
          to: chat?.from,
        })
      );

      fetchDoctorsChatIds(doctors);
    },
    [currentUserChatId, dispatch, doctors]
  );

  const fetchDoctors = useCallback(async () => {
    try {
      if (!currentUserId) {
        return;
      }
      console.log("fetchDoctors currentUserId : ", currentUserId);

      const res: any = await dispatch(patientDoctorsAPI(currentUserId));
      if (res?.payload?.doctors) {
        const basicDoctorsList = res.payload.doctors.map((doc: any) => ({
          id: doc.id.toString(),
          name: doc.name,
          specialization: doc.specialization,
          city: doc.city,
          rating: doc.rating,
          image: doc?.image,
        }));

        // After getting basic doctor info, fetch chat IDs
        const updatedDoctors = await fetchDoctorsChatIds(basicDoctorsList);
        setDoctors(updatedDoctors);
      }
    } catch (error) {
      console.error("Error fetching doctors:", error);
      toast.error("Failed to fetch doctors");
    }
  }, [currentUserId, fetchDoctorsChatIds, dispatch, patientDoctorsAPI]);

  const onUserNotificationHandler = useCallback(
    (data: any) => {
      console.log(data);
      fetchDoctors();
    },
    [fetchDoctors, currentUserId]
  );

  useEffect(() => {
    // listining on userId-notification
    if (currentUserChatId) {
      socket.current.on(
        `${currentUserChatId}-notification`,
        onUserNotificationHandler
      );
    }

    return () => {
      if (currentUserChatId) {
        socket.current.off(
          `${currentUserChatId}-notification`,
          onUserNotificationHandler
        );
      }
    };
  }, [currentUserChatId, onUserNotificationHandler, socket]);

  const onIndividualChatNotificationHandler = useCallback(
    async (d: any) => {
      const data = JSON.parse(d);

      console.log(data, currentUser, currentUserChatId, "notification");

      // if i am not the sender and the message is not read by me event though I open a chat room
      if (
        data?.from !== currentUserChatId &&
        data?.from === currentUser?.chatId
      ) {
        await updateReadMessagStatusApiCall({
          chat: data,
        });
      } else {
        const d = await fetchDoctorsChatIds(doctors);
        setDoctors(d);
      }
      sendNotification(`${data?.name}`, data?.message);

      // Start toggling the title when a new message is received
      toggleTitle({ title: "New Message Arrived" });
    },
    [
      currentUserChatId,
      currentUser?.chatId,
      sendNotification,
      toggleTitle,
      updateReadMessagStatusApiCall,
      doctors,
      fetchDoctorsChatIds,
    ]
  );

  useEffect(() => {
    if (socket.current) {
      socket.current.on(
        `msg-notification`,
        onIndividualChatNotificationHandler
      );
    }

    return () => {
      if (socket.current) {
        socket.current.off(
          `msg-notification`,
          onIndividualChatNotificationHandler
        );
      }
    };
  }, [socket, onIndividualChatNotificationHandler]);

  useEffect(() => {
    const currUserId = user?.id;
    setCurrentUserId(currUserId);
  }, [user]);

  useEffect(() => {
    fetchDoctors();
  }, [currentUserId, fetchDoctors]);

  const fetchCurrentUserChatId = useCallback(async () => {
    try {
      const res = (await dispatch(getUserChatId({ rcId: user?.id }))) as any;
      setCurrentUserChatId(res.payload?.user?._id);
    } catch (error) {
      console.error("Error fetching current user chat ID:", error);
      toast.error("Failed to fetch current user chat ID");
    }
  }, [dispatch, user]);

  useEffect(() => {
    fetchCurrentUserChatId();
  }, [fetchCurrentUserChatId]);

  // const getAllMessages = async (fromChatId: string, toChatId: string) => {
  //   try {
  //     const msgObj = { from: fromChatId, to: toChatId };
  //     const res = (await dispatch(getMessages(msgObj))) as any;
  //     if (res?.payload) {
  //       setMessages(res.payload);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching messages:", error);
  //     toast.error("Failed to fetch messages");
  //   }
  // };

  useEffect(() => {
    if (doctors.length > 0 && currentUserChatId && userIdFromUrl) {
      const matchedDoctor = doctors.find(
        (doctor) => doctor.id === userIdFromUrl
      );
      if (matchedDoctor) {
        handleDoctorSelect(matchedDoctor);
      }
    }
  }, [doctors, currentUserChatId, userIdFromUrl]);

  const handleDoctorSelect = async (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    console.log(doctor);

    setCurrentUser({
      _id: doctor?.chatId,
      chatId: doctor?.chatId,
      name: doctor?.name,
      specialization: doctor?.specialization,
      unReadMessageCount: doctor?.unReadMessageCount,
      city: doctor?.city,
      rating: doctor?.rating,
    });
    // if (currentUserChatId && doctor.chatId) {
    //   getAllMessages(currentUserChatId, doctor.chatId);
    // }

    if (doctor?.unReadMessageCount > 0) {
      await dispatch(
        updateReadMessagStatus({
          from: currentUserChatId,
          to: doctor?.chatId,
        })
      );
      const d = await fetchDoctorsChatIds(doctors);
      setDoctors(d);
    }
  };

  // const handleSendMessage = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (newMessage.trim() && selectedDoctor && currentUserChatId) {
  //     const msgObj = {
  //       from: currentUserChatId,
  //       to: selectedDoctor.chatId,
  //       message: newMessage.trim(),
  //     };

  //     try {
  //       const res = (await dispatch(addMessage(msgObj))) as any;
  //       if (res?.error) {
  //         toast.error(res.error.message);
  //         return;
  //       }

  //       socket.current.emit("send-msg", {
  //         from: currentUserChatId,
  //         to: selectedDoctor.chatId,
  //         msg: newMessage.trim(),
  //       });

  //       setMessages([
  //         ...messages,
  //         { fromSelf: true, message: newMessage.trim() },
  //       ]);
  //       setNewMessage("");
  //     } catch (error) {
  //       console.error("Error sending message:", error);
  //       toast.error("Failed to send message");
  //     }
  //   }
  // };

  const handleSearch = (e: any) => {
    const value = e?.target?.value || "";
    setSearch(value);
  };
  return (
    <ChatComponentStyled>
      <div className="chat-container">
        <div className="sidebar">
          <div className="d-flex mb-2 p-2 justify-content-between align-items-center">
            {!showSearch && (
              <>
                <h2 className="mb-0">Doctors</h2>
                <div>
                  <IoMdSearch
                    size={18}
                    className=""
                    onClick={() => {
                      setShowSearch(true);
                    }}
                  />
                </div>
              </>
            )}
            {showSearch && (
              <>
                <input
                  type="text"
                  className="search"
                  placeholder="Search group..."
                  name=""
                  autoFocus
                  value={search}
                  onChange={handleSearch}
                  id=""
                />
                <IoMdClose
                  size={18}
                  onClick={() => {
                    setShowSearch(false);
                    setSearch("");
                  }}
                />
              </>
            )}
          </div>
          <ul className="memberListContainer">
            {doctors?.map((doctor) => {
              const regex = new RegExp(search, "i");
              if (regex.test(doctor.name)) {
                return (
                  <li
                    key={doctor.id}
                    onClick={() => handleDoctorSelect(doctor)}
                    className={
                      selectedDoctor?.id === doctor.id ? "selected" : ""
                    }
                  >
                    <div className="user-icon">
                      {doctor?.image ? (
                        <img
                          className="avatar-sidebar"
                          src={doctor?.image}
                          alt=""
                        />
                      ) : (
                        <span className="no-image-sec-char">
                          {doctor?.name?.charAt(0)}
                        </span>
                      )}
                      {onlineUsers?.includes(doctor?.chatId ?? "") && (
                        <div className="online-user-indicatore"></div>
                      )}
                    </div>

                    <div className="space-between flex-grow-1">
                      <div>
                        {doctor?.name || ""}
                        <div className="doctor-details">
                          <span>
                            {" "}
                            {" - "}
                            {doctor.specialization}
                          </span>
                          {/* <span>{doctor.city}</span> */}
                        </div>
                        {typingStatus?.[doctor?.chatId as string] && (
                          <div className="typing">typing...</div>
                        )}
                      </div>
                      {doctor?.unReadMessageCount > 0 && (
                        <span className="unread_message_circle">
                          {doctor?.unReadMessageCount}
                        </span>
                      )}
                    </div>
                  </li>
                );
              }
              return <></>;
            })}
          </ul>
        </div>
        <div className="chat-area">
          {currentUser === undefined ? (
            <p className="no-chat">Select a doctor to start chatting</p>
          ) : (
            <ChatContainer
              currentUserChatId={currentUserChatId}
              currentChat={currentUser}
              socket={socket}
              typingUsers={typingStatus?.[currentUser?.chatId] ?? []}
            />
          )}
        </div>
      </div>
    </ChatComponentStyled>
  );
};

export default ChatComponent;
