import "./main.css";
import { Header } from "./components/Header.js";
import { CreateChat } from "./components/CreateChat.js";
import { Chat } from "./components/Chat.js";
import { ChatListComp } from "./components/ChatListComp.js";
import { getUsers, saveUsers } from "./index.js";

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname === "/") {
    window.location.href = "main.html";
  }
  const headerContainers = document.getElementById("header-container");
  headerContainers.innerHTML = Header();

  const chatListComponent = document.getElementById("chat-list-comp");
  chatListComponent.innerHTML = ChatListComp();

  const searchInput = document.querySelector(".search-input");
  searchInput.style.display = "none";

  let users = getUsers();

  const searchButton = document.querySelector(".icon-button-search");
  searchButton.addEventListener("click", () => {
    searchInput.style.display =
      searchInput.style.display === "none" ? "block" : "none";
  });

  searchInput.addEventListener("input", (event) => {
    const word = event.target.value;
    const filteredUsers = searchFunction(word, users);
    loadChatList(filteredUsers);
  });

  function searchFunction(word, users) {
    return users.filter((s) => {
      const regex = new RegExp(word, "gi");
      return s.name.match(regex);
    });
  }

  let stateSearchButton = 1;
  if (searchButton) {
    searchButton.addEventListener("click", clickSearchButton);
  }

  function clickSearchButton(event) {
    event.preventDefault();
    if (stateSearchButton === 1) {
      searchInput.style.display = "block";
      stateSearchButton = -stateSearchButton;
    } else {
      searchInput.style.display = "none";
      stateSearchButton = -stateSearchButton;
    }
  }

  const createChat = document.getElementById("create-chat");
  createChat.innerHTML = CreateChat();

  createChat.addEventListener("click", CreateNewChat);

  let stateCreateChat = true;
  let addNewChat = null;

  function CreateNewChat() {
    if (stateCreateChat === true) {
      addNewChat = document.createElement("div");
      addNewChat.className = "create-new-chat";
      addNewChat.innerHTML = `
      <h1 class = "add-new-user-title">Написать сообщение</h1>
      <form class="create-new-chat-form" action="/">
        <input
          id="form-input-name"
          name="message-text"
          placeholder="Введите имя пользователя"
          type="text"
          autocomplete="off"
        />
        <button id="cancellation-create-new-chat">Отмена</button>
      </form>
    `;
      document.body.appendChild(addNewChat);

      const cancellationCreateNewChat = document.getElementById(
        "cancellation-create-new-chat"
      );
      cancellationCreateNewChat.addEventListener(
        "click",
        cancellationCreateNewChatFunction
      );

      const formInputName = document.getElementById("form-input-name");
      formInputName.addEventListener("input", enterUserName);
      formInputName.addEventListener("keypress", notClose);

      function notClose(event) {
        if (event.keyCode === 13) {
          event.preventDefault();
          formInputName.value = "";
        }
      }

      function enterUserName(event) {
        const existingElement = document.querySelector(".find-new-user");
        if (existingElement) {
          existingElement.remove();
        }
        const findNewUser = document.createElement("div");
        findNewUser.classList.add("find-new-user");
        if (formInputName.value !== "") {
          findNewUser.innerHTML = `
          <div class="new-user-info">
            <img class="new-user-avatar"
              src="https://www.meme-arsenal.com/memes/4d37481e72c4770f4be10d89dbf0b2a8.jpg"
              alt="avatar" />
            <div class="new-user-name-time-conteiner">
              <h2 class="new-user-name">${event.target.value}</h2>
              <p class="new-user-time">недавно</p>
            </div>
          </div>
        `;
          const addNewUserTitle = document.querySelector(".add-new-user-title");
          addNewUserTitle.insertAdjacentElement("afterend", findNewUser);
          const newUser = document.querySelector(".new-user-info");
          if (newUser) {
            newUser.addEventListener("click", addUserObj);
            function addUserObj() {
              const userName = event.target.value.trim();
              if (userName) {
                users.push({
                  id: users.length + 1,
                  name: userName,
                  avatar:
                    "https://www.meme-arsenal.com/memes/4d37481e72c4770f4be10d89dbf0b2a8.jpg",
                  status: "недавно",
                  lastMessage: "Нет сообщений",
                  lastMessageTime: "",
                });
                saveUsers(users);
                const newUserId = users.length;
                window.location.href = `index.html?chatId=${newUserId}`;
              }
            }
          }
        }
      }

      function cancellationCreateNewChatFunction(event) {
        event.preventDefault();
        document.body.removeChild(addNewChat);
        stateCreateChat = true;
      }

      stateCreateChat = false;
    } else {
      if (addNewChat) {
        document.body.removeChild(addNewChat);
        addNewChat = null;
      }
      stateCreateChat = true;
    }
  }

  const chatList = document.getElementById("chat-list");

  function loadChatList(filteredUsers = users) {
    chatList.innerHTML = "";
    const reversedUsers = [...filteredUsers].reverse();
    reversedUsers.forEach((user) => {
      chatList.innerHTML += Chat(user);
    });

    chatList.addEventListener("click", (event) => {
      if (event.target.tagName === "A") {
        event.preventDefault();
        const chatId = event.target.getAttribute("href").split("=")[1];
        window.location.href = `index.html?chatId=${chatId}`;
      }
    });
  }

  loadChatList();
  function scrollChatList() {
    chatList.scrollTop = 0;
  }
  scrollChatList();
});

