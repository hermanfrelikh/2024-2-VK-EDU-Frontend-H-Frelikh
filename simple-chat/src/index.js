import "./index.css";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const input = document.querySelector(".form-input");
  const messagesContainer = document.querySelector(".messages");
  const sendButton = document.querySelector(".sendButton");
  const syncIcon = document.querySelector('.headerIconsRight .material-symbols-outlined.icon:nth-child(1)');
  const personName = document.querySelector(".personName");
  const personPhoto = document.querySelector(".personPhoto");
  const personStatus = document.querySelector(".personStatus");

  const users = [
    {
      name: "Яна",
      avatar: "https://sun9-44.userapi.com/impg/Fmp3R9zTLJnkrYrJgRPPq8IfQ2tClWKByoHv9w/Lj9oGtVjToE.jpg?size=1080x1440&quality=95&sign=7019cbcdb9a7e615206611f82c34838a&type=album",
      status: "недавно",
      messageClass: "message-self"
    },
    {
      name: "Герман",
      avatar: "https://sun1-24.userapi.com/impg/7rPDGVoAQDvDZ55XLQ8fvqPoXagiitcUTDu4Hg/MiqLb9edxMU.jpg?size=2560x2560&quality=95&sign=b7abba0e9f3dadc571504bdff665cf4f&type=album",
      status: "онлайн",
      messageClass: "message-other"
    }
  ];

  let currentUserIndex = 0;

  function switchUser() {
    currentUserIndex = (currentUserIndex + 1) % users.length;
    const currentUser = users[currentUserIndex];
    personName.textContent = currentUser.name;
    personPhoto.src = currentUser.avatar;
    personStatus.textContent = currentUser.status;
    updateMessages();
  }

  function updateMessages() {
    const messages = messagesContainer.children;
    for (let i = 0; i < messages.length; i++) {
      const message = messages[i];
      const isSelf = message.getAttribute('data-self') === 'true';
      message.classList.remove('message-self', 'message-other');
      message.classList.add(isSelf ? users[currentUserIndex].messageClass : users[1 - currentUserIndex].messageClass);
    }
  }

  syncIcon.addEventListener('click', switchUser);

  form.addEventListener("submit", handleSubmit);
  form.addEventListener("keypress", handleKeyPress);

  sendButton.addEventListener("click", handleSubmit);

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
        self: currentUserIndex === 0
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
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.push(message);
    localStorage.setItem("messages", JSON.stringify(messages));
  }

  function displayMessage(message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", users[message.self ? currentUserIndex : 1 - currentUserIndex].messageClass);
    messageElement.setAttribute("data-id", message.id);
    messageElement.setAttribute("data-self", message.self);
    messageElement.innerHTML = `
      <p class="message-text">${message.text}</p>
      <p class="message-time">${message.time}</p>
    `;
    messagesContainer.appendChild(messageElement);
  }

  function loadMessages() {
    const messages = JSON.parse(localStorage.getItem("messages")) || [];
    messages.forEach((message) => {
      if (!document.querySelector(`[data-id="${message.id}"]`)) {
        displayMessage(message);
      }
    });
    scrollToBottom();
  }

  function scrollToBottom() {
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  loadMessages();
});

