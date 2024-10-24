import "./Header.css";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SearchUserInput from "./SearchUserInput/SearchUserInput";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LoopIcon from "@mui/icons-material/Loop";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Header({
  searchText,
  onSearchChange,
  setSearchText,
  isChatOpen,
  onBack,
  selectedUser,
  onSwitchUser,
}) {
  const [stateSearchButton, setStateSearchButton] = useState(false);

  function clickSearchButton() {
    setStateSearchButton(!stateSearchButton);
    if (!stateSearchButton) {
      setSearchText("");
    }
  }

  return (
    <header>
      <div id="header-section" className="header-left-section">
        {isChatOpen ? (
          <button onClick={onBack} id="header-back-button">
            <ArrowBackIcon id="header-icon" />
          </button>
        ) : (
          <MenuIcon id="header-icon" />
        )}
      </div>
      <div id="header-section" className="header-central-section">
        {isChatOpen ? (
          <div id="person">
            <img
              src={selectedUser.avatar}
              alt={selectedUser.name}
              id="person-photo"
            />
            <div id="person-name-status">
              <h1 id="person-name">{selectedUser.name}</h1>
              <p id="person-status">{selectedUser.status}</p>
            </div>
          </div>
        ) : (
          <h1 id="messenger-name">Messenger</h1>
        )}
      </div>
      <div id="header-section" className="header-right-section">
        {isChatOpen ? (
          <div>
            <LoopIcon id="header-icon" onClick={onSwitchUser} />
            <MoreVertIcon id="header-icon" />
            <SearchIcon id="header-icon" />
          </div>
        ) : (
          <>
            {stateSearchButton === true && (
              <SearchUserInput
                searchText={searchText}
                onSearchChange={onSearchChange}
                stateSearchButton={stateSearchButton}
                setSearchText={setSearchText}
              />
            )}
            <button onClick={clickSearchButton} id="search-user-button">
              <SearchIcon id="header-icon" />
            </button>
          </>
        )}
      </div>
    </header>
  );
}

