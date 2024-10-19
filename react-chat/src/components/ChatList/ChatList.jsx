import "./ChatList.css";
import ChatListItem from "./ChatListItem/ChatListItem";
import { useUsers } from "../../context/UsersContext";

export default function ChatList() {
  const { users } = useUsers();
  const ChatListItems = [];
  for (let userID = users.length; userID !== 0; userID--) {
    const user = users[userID - 1];
    ChatListItems.push(<ChatListItem key={user.id} {...user} />);
  }
  return (
    <ul id="chat-list">{ChatListItems}</ul>
  );
}
