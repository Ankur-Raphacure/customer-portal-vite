import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  ReactNode,
} from "react";
import { toast } from "react-toastify";
import { io } from "socket.io-client";

import { useDispatch, useSelector } from "react-redux";
import { CHAT_API } from "../config";
import { createUsersChatId } from "../redux/slices/chat/chatService";

// Create a context with a proper type
const SocketContext = React.createContext(undefined);

const SocketProvider = ({ children }) => {
  const socket = useRef(null);
  const [socketReady, setSocketReady] = useState(false);

  const [userChatId, setUserChatId] = useState(null);

  const { user } = useSelector((ReduxState) => ReduxState.auth);

  const dispatch = useDispatch();

  const fetchChatId = useCallback(async () => {
    try {
      if (user?.email && user?.id) {
        const res = await dispatch(
          createUsersChatId({
            body: {
              email: user?.email,
              id: user?.id,
              image: user?.image,
              name: `${user?.first_name ?? ""} ${user?.last_name ?? ""}`,
            },
          }),
        );
        setUserChatId(res.payload?.data?._id);
      }
    } catch (error) {
      console.error("Error fetching current user chat ID:", error);
      toast.error("Failed to fetch current user chat ID");
    }
  }, [user?.id, dispatch]);

  console.log(user);

  useEffect(() => {
    fetchChatId();
  }, [fetchChatId]);

  useEffect(() => {
    if (CHAT_API && userChatId) {
      socket.current = io(CHAT_API);

      socket.current.emit("add-user", userChatId);
      setSocketReady(true);
    }
    return () => {
      if (socket.current) {
        socket.current?.disconnect();
      }
    };
  }, [CHAT_API, userChatId]);

  // useEffect(() => {
  //   if (userChatId && socket.current) {
  //   }
  // }, [userChatId, socket.current]);

  return (
    <SocketContext.Provider
      value={{
        socket: socketReady ? socket.current : null,
        userChatId,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { SocketContext, SocketProvider };
