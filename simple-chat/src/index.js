import "./index.css";
import { HeaderIndex } from "./components/HeaderIndex.js";
import { FormIndex } from "./components/FormIndex.js";

function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

let users = getUsers();
if (users.length === 0) {
  users = [
    {
      id: 1,
      name: "Яна",
      avatar:
        "https://sun9-44.userapi.com/impg/Fmp3R9zTLJnkrYrJgRPPq8IfQ2tClWKByoHv9w/Lj9oGtVjToE.jpg?size=1080x1440&quality=95&sign=7019cbcdb9a7e615206611f82c34838a&type=album",
      status: "недавно",
      lastMessage: "последнее сообщение не очень длинное",
    },
    {
      id: 2,
      name: "Захар",
      avatar:
        "https://sun9-76.userapi.com/impg/5v6W30Tm2lroaFXtPZPwO5OlktQMJVyCcElQoQ/7tijVbcubrA.jpg?size=828x828&quality=95&sign=9efdebd108a93b8e9653280f7fdc7c83&type=album",
      status: "онлайн",
      lastMessage: "последнее сообщение не очень длинное",
    },
    {
      id: 3,
      name: "Мама",
      avatar:
        "https://sun1-27.userapi.com/impg/1_NloAcb3e9eHWuE40CZDT2oBtnwvXBLTzu2vA/kqmti69382o.jpg?size=1080x1399&quality=95&sign=49d0ef831fe99ae2418bcd8b82811342&type=album",
      status: "2 часа назад",
      lastMessage: "последнее сообщение не очень длинное",
    },
  ];
  saveUsers(users);
}

export { users, getUsers, saveUsers };

let currentUser = null;
let currentSenderId = null;

document.addEventListener("DOMContentLoaded", () => {
  const headerContainersIndex = document.getElementById("header-container-index");
  if (headerContainersIndex) {
    headerContainersIndex.innerHTML = HeaderIndex();
  } 

  const formIndex = document.getElementById("form-index");
  if (formIndex) {
    formIndex.innerHTML = FormIndex();
  } 
  
  const form = document.querySelector("form");
  const input = document.querySelector(".form-input");
  const messagesContainer = document.querySelector(".messages");
  const sendButton = document.querySelector(".sendButton");
  const syncIcon = document.querySelector(".icon-button");
  const personName = document.querySelector(".personName");
  const personPhoto = document.querySelector(".personPhoto");
  const personStatus = document.querySelector(".personStatus");

  const german = {
    id: "german",
    name: "Герман",
    avatar:
      "https://sun1-24.userapi.com/impg/7rPDGVoAQDvDZ55XLQ8fvqPoXagiitcUTDu4Hg/MiqLb9edxMU.jpg?size=2560x2560&quality=95&sign=b7abba0e9f3dadc571504bdff665cf4f&type=album",
    status: "онлайн",
    lastMessage: "последнее сообщение не очень длинное",
  };

  const urlParams = new URLSearchParams(window.location.search);
  let currentUserIndex = parseInt(urlParams.get("chatId")) - 1;
  currentUser = users[currentUserIndex];
  let currentUserOther = german;

  if (currentUser) {
    personName.textContent = currentUser.name;
    personPhoto.src = currentUser.avatar;
    personStatus.textContent = currentUser.status;
  }

  if (syncIcon !== null) {
    syncIcon.addEventListener("click", switchUser);
  }

  function switchUser() {
    if (currentUser.id === german.id) {
      currentUserOther = currentUser;
      currentUser = users[currentUserIndex];
    } else {
      currentUserOther = currentUser;
      currentUser = german;
    }

    personName.textContent = currentUser.name;
    personPhoto.src = currentUser.avatar;
    personStatus.textContent = currentUser.status;
    updateMessages();
  }

  function updateMessages() {
    const messages1 =
      JSON.parse(localStorage.getItem(`messages_${currentUserOther.id}`)) || [];
    for (let i = 0; i < messages1.length; i++) {
      const message = messages1[i];
      message.self = !message.self;
      if (message.classList.contains("message-self")) {
        message.classList.replace("message-self", "message-other");
      } else {
        message.classList.replace("message-other", "message-self");
      }
    }
    localStorage.setItem(
      `messages_${currentUserOther.id}`,
      JSON.stringify(messages1)
    );
    const messages2 =
      JSON.parse(
        localStorage.getItem(`messages_german_${currentUserOther.id}`)
      ) || [];
    for (let i = 0; i < messages2.length; i++) {
      const message = messages2[i];
      message.self = !message.self;
      if (message.classList.contains("message-self")) {
        message.classList.replace("message-self", "message-other");
      } else {
        message.classList.replace("message-other", "message-self");
      }
    }
    localStorage.setItem(
      `messages_german_${currentUserOther.id}`,
      JSON.stringify(messages2)
    );
  }
  if (form) {
    form.addEventListener("submit", handleSubmit);
    form.addEventListener("keypress", handleKeyPress);
  }
  if (sendButton !== null) {
    sendButton.addEventListener("click", handleSubmit);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const messageText = input.value;
    if (messageText.trim() !== "") {
      const message = {
        id: Date.now(),
        text: messageText,
        time: new Date()
          .toLocaleTimeString()
          .slice(0, new Date().toLocaleTimeString().length - 3),
        self: true,
        senderId: currentUser.id,
      };
      saveMessage(message);
      displayMessage(message);
      input.value = "";
      scrollToBottom();
    }
  }

  function handleKeyPress(event) {
    if (event.keyCode === 13) {
      handleSubmit(event);
    }
  }

  function saveMessage(message) {
    if (currentUser === german) {
      let messages =
        JSON.parse(
          localStorage.getItem(`messages_german_${currentUserOther.id}`)
        ) || [];
      messages.push(message);
      localStorage.setItem(
        `messages_german_${currentUserOther.id}`,
        JSON.stringify(messages)
      );
    } else {
      let messages =
        JSON.parse(localStorage.getItem(`messages_${currentUser.id}`)) || [];
      messages.push(message);
      localStorage.setItem(
        `messages_${currentUser.id}`,
        JSON.stringify(messages)
      );
    }
  }

  function displayMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add(
      "message",
      message.self ? "message-self" : "message-other"
    );
    messageElement.setAttribute("data-id", message.id);
    messageElement.setAttribute("data-self", message.self);
    messageElement.setAttribute("data-user-id", currentUser.id);
    messageElement.innerHTML = `
      <p class="message-text">${message.text}</p>
      <p class="message-time">${message.time}</p>
    `;
    messagesContainer.appendChild(messageElement);

  }

  function loadMessages() {
    if (currentUser) {
      const messages =
        JSON.parse(localStorage.getItem(`messages_${currentUser.id}`)) || [];
      messages.forEach((message) => {
        if (!document.querySelector(`[data-id="${message.id}"]`)) {
          displayMessage(message);
    
        }
      });
      const messagesOther =
        JSON.parse(localStorage.getItem(`messages_german_${currentUser.id}`)) ||
        [];
     
      messagesOther.forEach((message) => {
        if (!document.querySelector(`[data-id="${message.id}"]`)) {
          displayMessage(message);
        
        }
      });
      scrollToBottom();
    }
  }

  function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  loadMessages();
});
