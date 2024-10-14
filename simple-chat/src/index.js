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
      lastMessage: "Нет сообщений",
      lastMessageTime: "",
    },
    {
      id: 2,
      name: "Захар",
      avatar:
        "https://sun9-76.userapi.com/impg/5v6W30Tm2lroaFXtPZPwO5OlktQMJVyCcElQoQ/7tijVbcubrA.jpg?size=828x828&quality=95&sign=9efdebd108a93b8e9653280f7fdc7c83&type=album",
      status: "онлайн",
      lastMessage: "Нет сообщений",
      lastMessageTime: "",
    },
    {
      id: 3,
      name: "Мама",
      avatar:
        "https://sun1-27.userapi.com/impg/1_NloAcb3e9eHWuE40CZDT2oBtnwvXBLTzu2vA/kqmti69382o.jpg?size=1080x1399&quality=95&sign=49d0ef831fe99ae2418bcd8b82811342&type=album",
      status: "2 часа назад",
      lastMessage: "Нет сообщений",
      lastMessageTime: "",
    },
  ];
  saveUsers(users);
}

export { users, getUsers, saveUsers };

let contact = null;

document.addEventListener("DOMContentLoaded", () => {
  const headerContainersIndex = document.getElementById(
    "header-container-index"
  );
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
  const switchAccountButton = document.querySelector(".icon-button");
  const contactName = document.querySelector(".personName");
  const contactAvatar = document.querySelector(".personPhoto");
  const contactStatus = document.querySelector(".personStatus");
  const iconBack = document.querySelector(".linkMain");
  if (iconBack) {
    iconBack.addEventListener("click", () => {
      if (account !== mainAccount) {
        switchUser();
      }
    });
  }

  const mainAccount = {
    id: "german",
    name: "Герман",
    avatar:
      "https://sun1-24.userapi.com/impg/7rPDGVoAQDvDZ55XLQ8fvqPoXagiitcUTDu4Hg/MiqLb9edxMU.jpg?size=2560x2560&quality=95&sign=b7abba0e9f3dadc571504bdff665cf4f&type=album",
    status: "онлайн",
    lastMessage: "Нет сообщений",
    lastMessageTime: "",
  };

  const urlParams = new URLSearchParams(window.location.search);
  let chatId = parseInt(urlParams.get("chatId")) - 1;
  contact = users[chatId];
  let account = mainAccount;

  const renderContact = (contact) => {
    if (!contact) {
      return;
    }
    contactName.textContent = contact.name;
    contactAvatar.src = contact.avatar;
    contactStatus.textContent = contact.status;
  };

  renderContact(contact);

  if (switchAccountButton !== null) {
    switchAccountButton.addEventListener("click", switchUser);
  }

  function switchUser() {
    account = contact;
    contact = contact === mainAccount ? users[chatId] : mainAccount;

    renderContact(contact);
    loadMessages();
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
        isMainAccountSender: account === mainAccount,
      };
      saveMessage(message);
      displayMessage(message);
      input.value = "";
      scrollToBottom();

      if (messageText.length > 50) {
        contact.lastMessage = messageText.slice(0, 50) + "...";
      } else {
        contact.lastMessage = messageText;
      }
      
      contact.lastMessageTime = message.time;
      saveUsers(users);
    }
  }

  function handleKeyPress(event) {
    if (event.keyCode === 13) {
      handleSubmit(event);
    }
  }

  function saveMessage(message) {
    let messages = JSON.parse(localStorage.getItem(`messages_${chatId}`)) || [];
    messages.push(message);
    localStorage.setItem(`messages_${chatId}`, JSON.stringify(messages));
  }

  function displayMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add(
      "message",
      (message.isMainAccountSender && account === mainAccount) ||
        (!message.isMainAccountSender && account !== mainAccount)
        ? "message-self"
        : "message-other"
    );
    messageElement.setAttribute("data-id", message.id);
    messageElement.setAttribute(
      "data-self",
      (message.isMainAccountSender && account === mainAccount) ||
        (!message.isMainAccountSender && account !== mainAccount)
    );
    messageElement.setAttribute("data-user-id", contact.id);
    messageElement.innerHTML = `
      <div class="message-text-done-all-chat">
        <p class="message-text">${message.text}</p>
        <span id="done-all-chat" class="material-symbols-outlined icon">done_all</span>
      </div>
      
      <p class="message-time">${message.time}</p>
      
    `;
    messagesContainer.appendChild(messageElement);
  }

  function loadMessages() {
    if (messagesContainer) {
      messagesContainer.innerHTML = "";
    }

    if (contact) {
      const messages =
        JSON.parse(localStorage.getItem(`messages_${chatId}`)) || [];
      messages.forEach((message) => {
        if (!document.querySelector(`[data-id="${message.id}"]`)) {
          displayMessage(message);
        }
      });
      scrollToBottom();
      const user = users.find((u) => u.id === contact.id);
      if (user && messages.length > 0) {
        user.lastMessage = messages[messages.length - 1].text;
        saveUsers(users);
      }
    }
  }

  function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  loadMessages();
});

