import "./NewChat.css";

export default function NewChat(props) {

  return (
    <div onClick={props.addNewUsers} id="new-chat">
      <img
        id="new-user-avatar"
        src="../../public/no-avatar-user.jpg"
        alt="user-avatar"
      />
      <div className="new-chat-info">
        <h2>{props.userName}</h2>
        <p>недавно</p>
      </div>
    </div>
  );
}
