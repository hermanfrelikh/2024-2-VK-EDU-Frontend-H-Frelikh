import { useState } from "react";
import "./EditProfile.css";
import EditProfileInput from "./EditProfileInput/EditProfileInput";
import { useMainAccount } from "../../../../context/MainAccountContext";
import EditProfilePhoto from "./EditProfilePhoto/EditProfilePhoto";

export default function EditProfile({mainAccount, setMainAccount}) {

  
  const handleInputChange = (type, value) => {
    setMainAccount({
      ...mainAccount,
      [type]: value,
    });
  };

  return (
    <form id="edit-profile">
      <EditProfilePhoto />
      <EditProfileInput
        type={"name"}
        placeholder="Новое имя"
        inputvalue={mainAccount.name}
        title={"Имя"}
        onInputChange={handleInputChange}
      />
      <EditProfileInput
        type={"username"}
        placeholder="Новый username"
        inputvalue={mainAccount.username}
        title={"Username"}
        onInputChange={handleInputChange}
      />
      <EditProfileInput
        type={"bio"}
        placeholder="О себе"
        inputvalue={mainAccount.bio}
        title={"Описание"}
        onInputChange={handleInputChange}
      />
    </form>
  );
}
