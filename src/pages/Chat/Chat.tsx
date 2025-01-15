import React, { useEffect, useRef, useState } from "react";
import { FaUser, FaPaperPlane } from "react-icons/fa";
import { ChatComponentStyled } from "./ChatComponent.styled";
import { useDispatch, useSelector } from "react-redux";
import { patientDoctorsAPI } from "../../redux/slices/doctor/doctorService";
import {
  addMessage,
  getMessages,
  getUserChatId,
} from "../../redux/slices/chat/chatService";
import { toast } from "react-toastify";
import { CHAT_API } from "../../config";
import { io } from "socket.io-client";
import ChatContainer from "./ChatContainer";

type Doctor = {
  id: string;
  name: string;
  specialization: string;
  city: string;
  rating: number;
  chatId?: string;
};

type Message = {
  fromSelf: boolean;
  message: string;
};

const ChatComponent: React.FC = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
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

  useEffect(() => {
    if (currentUserChatId) {
      socket.current = io(CHAT_API);
      socket.current.emit("add-user", currentUserChatId);
    }
  }, [currentUserChatId]);

  useEffect(() => {
    const currUserId = user?.id;
    setCurrentUserId(currUserId);
  }, [user]);

  useEffect(() => {
    fetchDoctors();
  }, [currentUserId]);

  useEffect(() => {
    fetchCurrentUserChatId();
  }, [currentUserId]);

  const getAllMessages = async (fromChatId: string, toChatId: string) => {
    try {
      const msgObj = { from: fromChatId, to: toChatId };
      const res = (await dispatch(getMessages(msgObj))) as any;
      if (res?.payload) {
        setMessages(res.payload);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
      toast.error("Failed to fetch messages");
    }
  };

  const fetchDoctors = async () => {
    try {
      if (!currentUserId) {
        return;
      }
      console.log("fetchDoctors currentUserId : ", currentUserId);

      const res = (await dispatch(patientDoctorsAPI(currentUserId))) as any;
      if (res?.payload?.doctors) {
        const basicDoctorsList = res.payload.doctors.map((doc: any) => ({
          id: doc.id.toString(),
          name: doc.name,
          specialization: doc.specialization,
          city: doc.city,
          rating: doc.rating,
        }));

        // After getting basic doctor info, fetch chat IDs
        const updatedDoctors = await fetchDoctorsChatIds(basicDoctorsList);
        setDoctors(updatedDoctors);
      }
    } catch (error) {
      console.error("Error fetching doctors:", error);
      toast.error("Failed to fetch doctors");
    }
  };

  const fetchDoctorsChatIds = async (doctorsList: Doctor[]) => {
    try {
      const updatedDoctors = await Promise.all(
        doctorsList.map(async (doctor: Doctor) => {
          const res = (await dispatch(getUserChatId(doctor.id))) as any;
          return {
            ...doctor,
            chatId: res.payload?.user?._id,
          };
        })
      );
      return updatedDoctors;
    } catch (error) {
      console.error("Error fetching doctors chat IDs:", error);
      toast.error("Failed to fetch doctors chat IDs");
      return doctorsList;
    }
  };

  const fetchCurrentUserChatId = async () => {
    try {
      if (currentUserId) {
        const res = (await dispatch(getUserChatId(currentUserId))) as any;
        setCurrentUserChatId(res.payload?.user?._id);
      }
    } catch (error) {
      console.error("Error fetching current user chat ID:", error);
      toast.error("Failed to fetch current user chat ID");
    }
  };

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

  const handleDoctorSelect = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    console.log("doctor : ", doctor);
    setCurrentUser({
      _id: doctor?.chatId,
      username: doctor?.name,
      specialization: doctor?.specialization,
      city: doctor?.city,
      rating: doctor?.rating,
    });
    if (currentUserChatId && doctor.chatId) {
      getAllMessages(currentUserChatId, doctor.chatId);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() && selectedDoctor && currentUserChatId) {
      const msgObj = {
        from: currentUserChatId,
        to: selectedDoctor.chatId,
        message: newMessage.trim(),
      };

      try {
        const res = (await dispatch(addMessage(msgObj))) as any;
        if (res?.error) {
          toast.error(res.error.message);
          return;
        }

        socket.current.emit("send-msg", {
          from: currentUserChatId,
          to: selectedDoctor.chatId,
          msg: newMessage.trim(),
        });

        setMessages([
          ...messages,
          { fromSelf: true, message: newMessage.trim() },
        ]);
        setNewMessage("");
      } catch (error) {
        console.error("Error sending message:", error);
        toast.error("Failed to send message");
      }
    }
  };

  return (
    <ChatComponentStyled>
      <div className="chat-container">
        <div className="sidebar">
          <h2>Doctors</h2>
          <ul>
            {doctors.map((doctor) => (
              <li
                key={doctor.id}
                onClick={() => handleDoctorSelect(doctor)}
                className={selectedDoctor?.id === doctor.id ? "selected" : ""}
              >
                <FaUser /> {doctor.name}
                <div className="doctor-details">
                  <span>
                    {" "}
                    {" - "}
                    {doctor.specialization}
                  </span>
                  {/* <span>{doctor.city}</span> */}
                </div>
              </li>
            ))}
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
            />
          )}
        </div>
      </div>
    </ChatComponentStyled>
  );
};

export default ChatComponent;
