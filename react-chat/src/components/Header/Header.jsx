import "./Header.css";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import SearchUserInput from "./SearchUserInput/SearchUserInput";

export default function Header() {
  const [stateSearchButton, setStateSearchButton] = useState(false);

  function clickSearchButton() {
    setStateSearchButton(!stateSearchButton);
  }

  return (
    <header>
      <div id="header-section" className="header-left-section">
        <MenuIcon id="header-icon" />
      </div>
      <div id="header-section" className="header-central-section">
        <h1 id="messenger-name">Messenger</h1>
      </div>
      <div id="header-section" className="header-right-section">
        {stateSearchButton === true && <SearchUserInput />}
        <button onClick={clickSearchButton} id="search-user-button">
          <SearchIcon id="header-icon" />
        </button>
      </div>
    </header>
  );
}
