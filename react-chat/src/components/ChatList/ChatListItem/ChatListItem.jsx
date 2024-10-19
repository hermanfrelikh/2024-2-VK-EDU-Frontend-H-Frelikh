import "./ChatListItem.css";

export default function ChatListItem({
  avatar,
  name,
  status,
  lastMessage,
  lastMessageTime,
}) {
  return (
    <li id="chat-list-item">
      <img
        src={avatar}
        alt={name}
        id="chat-list-item-avatar"
      />
      <div id="chat-list-item-info">
        <h2>{name}</h2>
        <h3>{status}</h3>
        <p>{lastMessage}</p>
        <p>{lastMessageTime}</p>
      </div>
    </li>
  );
}
