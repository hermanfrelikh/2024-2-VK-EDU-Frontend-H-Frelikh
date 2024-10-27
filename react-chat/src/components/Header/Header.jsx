import "./Header.css";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SearchUserInput from "./SearchUserInput/SearchUserInput";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LoopIcon from "@mui/icons-material/Loop";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "./Menu/Menu";
import EditProfile from "./Menu/EditProfile/EditProfile";
import CheckIcon from '@mui/icons-material/Check';
import { useMainAccount } from "../../context/MainAccountContext";

export default function Header({
  searchText,
  onSearchChange,
  setSearchText,
  isChatOpen,
  onBack,
  selectedUser,
  onSwitchUser,
}) {
  const [stateEditProfile, setStateEditProfile] = useState(false);
  const { mainAccount, setMainAccount } = useMainAccount();

  function clickBackButtonMenu() {
    setStateEditProfile(false);
  }

  const [stateSearchButton, setStateSearchButton] = useState(false);
  const [stateMenu, setStateMenu] = useState(false);

  function clickMenuButton() {
    setStateMenu(!stateMenu);
  }

  function clickSearchButton() {
    setStateSearchButton(!stateSearchButton);
    if (!stateSearchButton) {
      setSearchText("");
    }
  }

  const { saveMainAccount } = useMainAccount();

  return (
    <header>
      <div id="header-section" className="header-left-section">
        {isChatOpen ? (
          <button onClick={onBack} id="header-back-button">
            <ArrowBackIcon id="header-icon" />
          </button>
        ) : stateEditProfile ? (
          <button onClick={clickBackButtonMenu} className="header-button">
            <ArrowBackIcon id="header-icon" />
          </button>
        ) : (
          <button onClick={clickMenuButton} className="header-button">
            <MenuIcon id="header-icon" />
          </button>
        )}
        {stateMenu && (
          <Menu
            setStateMenu={setStateMenu}
            stateEditProfile={stateEditProfile}
            setStateEditProfile={setStateEditProfile}
            
          />
        )}
        {stateEditProfile && <EditProfile mainAccount={mainAccount} setMainAccount={setMainAccount} />}
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
        ) : stateEditProfile ? (
          <h1 id="messenger-name">Edit Profile</h1>
        ) : (
          <h1 id="messenger-name">Messenger</h1>
        )}
      </div>
      <div id="header-section" className="header-right-section">
        {isChatOpen ? (
          <div id="header-chat-icons-right">
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
            {stateEditProfile === false && (
              <button onClick={clickSearchButton} className="header-button">
                <SearchIcon id="header-icon" />
              </button>
            )}
            {stateEditProfile === true && (
              <button onClick={saveMainAccount} className="header-button">
                <CheckIcon id="header-icon" />
              </button>
            )}

          </>
        )}
      </div>
    </header>
  );
}
