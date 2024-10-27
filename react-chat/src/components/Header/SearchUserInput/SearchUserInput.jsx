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
      id="search-user-name-input"
      type="text"
      name="message-text"
      placeholder="Поиск"
      autoComplete="off"
      value={searchText}
      onChange={onSearchChange}
    />
  );
}

