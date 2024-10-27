import "./Menu.css";
import React from "react";
export default function Menu({
  setStateMenu,
  stateEditProfile,
  setStateEditProfile
}) {
  function clickEditProfile() {
    setStateEditProfile(true);
    setStateMenu(false);
  }

  return (
    <div id="menu-container">
      <button className="menu-button">Settings</button>
      <button onClick={clickEditProfile} className="menu-button">
        Edit Profile
      </button>
    </div>
  );
}
