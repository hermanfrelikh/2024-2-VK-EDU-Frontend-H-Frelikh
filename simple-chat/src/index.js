import "./index.css";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const input = document.querySelector(".form-input");
  const messagesContainer = document.querySelector(".messages");
  // const clearStorageButton = document.querySelector("#clearStorage");
  const sendButton = document.querySelector(".sendButton");

  form.addEventListener("submit", handleSubmit);
  form.addEventListener("keypress", handleKeyPress);
  // clearStorageButton.addEventListener("click", clearStorage);
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
      };
      saveMessage(message);
      displayMessage(message);
      input.value = "";
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
    messageElement.classList.add("message");
    messageElement.setAttribute("data-id", message.id); 
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
  }

  // function clearStorage() {
  //   localStorage.clear();
  //   messagesContainer.innerHTML = "";
  // }

  loadMessages();
});


