import "./SearchUserInput.css";

export default function SearchUserInput() {
  return (
    <input
      id="new-user-name-input"
      name="message-text"
      placeholder="Введите имя пользователя"
      type="text"
      autoComplete="off"
    />
  );
}
