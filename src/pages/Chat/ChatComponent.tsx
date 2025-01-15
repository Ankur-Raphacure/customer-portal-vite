import React, { useEffect, useState, useCallback, useRef } from "react";
import { FaUser, FaPaperPlane } from "react-icons/fa";
import { ChatComponentStyled } from "./ChatComponent.styled";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { io } from "socket.io-client"; // Import socket.io-client
import { patientDoctorsAPI } from "../../redux/slices/doctor/doctorService";
import {
  getUserChatId,
  getMessages,
  addMessage,
} from "../../redux/slices/chat/chatService";
import { CHAT_API } from "../../config";
import ChatContainer from "./ChatContainer";

type Doctor = {
  id: string;
  name: string;
  specialization: string;
  city?: string;
  chatId?: string;
  rating?: number;
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
  const [doctorChatIdCache, setDoctorChatIdCache] = useState<{
    [id: string]: string | null;
  }>({});
  const socket = useRef<any>(null); // Socket ref to hold socket instance

  const dispatch = useDispatch();
  const { user } = useSelector((ReduxState: any) => ReduxState.auth);
  const [currentUserId, setCurrentUserId] = useState();
  useEffect(() => {
    const currUserId = user?.id;
    setCurrentUserId(currUserId);
  }, [user]);
  // Parse docId from URL
  const docIdFromUrl = new URLSearchParams(window.location.search).get("docId");
  const [currentUser, setCurrentUser] = useState<any>(undefined);

  // Initialize socket connection
  useEffect(() => {
    if (currentUserId) {
      socket.current = io(CHAT_API);
      socket.current.emit("add-user", currentUserId);
    }
  }, [currentUserId]);

  // Fetch doctors and user chat ID on mount
  useEffect(() => {
    if (currentUserId) {
      fetchDoctors();
      fetchCurrentUserChatId();
    }
  }, [currentUserId]);

  // Auto-select doctor from URL params
  useEffect(() => {
    if (doctors.length > 0 && currentUserChatId && docIdFromUrl) {
      const matchedDoctor = doctors.find(
        (doctor) => doctor.id === docIdFromUrl
      );
      if (matchedDoctor) handleDoctorSelect(matchedDoctor);
    }
  }, [doctors, currentUserChatId, docIdFromUrl]);

  const fetchDoctors = async () => {
    try {
      if (!currentUserId) {
        return;
      }
      console.log("fetchDoctors currentUserId : ", currentUserId);
      
      const res = (await dispatch(patientDoctorsAPI(currentUserId))) as any;
      if (res?.payload?.doctors) {
        setDoctors(
          res.payload.doctors.map((doc: any) => ({
            id: doc.id.toString(),
            name: doc.name,
            specialization: doc.specialization,
            city: doc.city,
            rating: doc.rating,
          }))
        );
      }
    } catch (error) {
      toast.error("Failed to fetch doctors");
    }
  };

  const fetchCurrentUserChatId = async () => {
    try {
      const res = (await dispatch(getUserChatId(currentUserId))) as any;
      setCurrentUserChatId(res.payload?.user?._id);
    } catch (error) {
      toast.error("Failed to fetch current user chat ID");
    }
  };

  const getDoctorChatId = useCallback(
    async (doctorId: string) => {
      if (doctorChatIdCache[doctorId]) return doctorChatIdCache[doctorId];
      try {
        const res = (await dispatch(getUserChatId(doctorId))) as any;
        const chatId = res.payload?.user?._id || null;
        setDoctorChatIdCache((prevCache) => ({
          ...prevCache,
          [doctorId]: chatId,
        }));
        return chatId;
      } catch (error) {
        toast.error("Failed to fetch doctor's chat ID");
        return null;
      }
    },
    [doctorChatIdCache, dispatch]
  );

  const handleDoctorSelect = async (doctor: any) => {
    const doctorChatId = await getDoctorChatId(doctor.id);
    if (doctorChatId) {
      setSelectedDoctor({ ...doctor, chatId: doctorChatId });
      console.log("doctor : ", doctor);
      setCurrentUser({
        _id: doctorChatId,
        username: `${doctor?.name}`,
        email: doctor?.email,
        avatarImage: doctor?.image,
      });
      if (currentUserChatId) getAllMessages(currentUserChatId, doctorChatId);
    }
  };

  const getAllMessages = async (fromChatId: string, toChatId: string) => {
    try {
      const res = (await dispatch(
        getMessages({ from: fromChatId, to: toChatId })
      )) as any;
      setMessages(res.payload || []);
    } catch (error) {
      toast.error("Failed to fetch messages");
    }
  };

  // Listen for incoming messages in real-time
  // useEffect(() => {
  //   if (socket.current) {
  //     socket.current.on("msg-receive", (msg: any) => {
  //       console.log("msg : ", msg);
  //       setMessages((prevMessages) => [
  //         ...prevMessages,
  //         { fromSelf: false, message: msg },
  //       ]);
  //     });
  //   }
  // }, []);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() && selectedDoctor && currentUserChatId) {
      const messageContent = newMessage.trim();
      const msgObj = {
        from: currentUserChatId,
        to: selectedDoctor.chatId,
        message: messageContent,
      };

      try {
        await dispatch(addMessage(msgObj));
        socket.current.emit("send-msg", msgObj); // Send message through socket for real-time delivery
        setMessages((prev) => [
          ...prev,
          { fromSelf: true, message: messageContent },
        ]);
        setNewMessage("");
      } catch (error) {
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
                <FaUser /> {doctor.name} - {doctor.specialization}
              </li>
            ))}
          </ul>
        </div>
        <div className="chat-area">
          {currentUser === undefined ? (
            <p className="no-chat">Select a patient to start chatting</p>
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
