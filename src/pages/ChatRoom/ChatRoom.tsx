import { ChatRoomStyled } from "./ChatRoom.styled";
import ComingSoon from "../ComingSoon/ComingSoon";
import CRHome from "../../components/ChatRoom/CRHome/CRHome";

const ChatRoom = (props: any) => {
  const { component } = props.match?.params;
  const renderContent = () => {
    switch (component) {
      case "home":
        return <CRHome />;
      default:
        return <ComingSoon />;
    }
  };

  return <ChatRoomStyled>{renderContent()}</ChatRoomStyled>;
};

export default ChatRoom;
