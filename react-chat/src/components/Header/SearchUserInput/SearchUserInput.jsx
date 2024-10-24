import "./SearchUserInput.css";
import React from "react";

export default function SearchUserInput({
  searchText,
  onSearchChange,
  stateSearchButton,
  setSearchText,
}) {
  if (stateSearchButton === false) {
    setSearchText("");
  }

  return (
    <input
      id="new-user-name-input"
      type="text"
      name="message-text"
      placeholder="Введите имя пользователя"
      autoComplete="off"
      value={searchText}
      onChange={onSearchChange}
    />
  );
}

