import "./Chat.css"

export function Chat(user) {
  return `
      <li class="chatPerson">
        <a href="index.html?chatId=${user.id}">
          <div class="chat-item">
            <img src="${user.avatar}" alt="${user.name}" class="chat-item-photo" />
            <div class="chat-item-info">
              <div class="chat-item-name-time">
                <h2 class="chat-item-name">${user.name}</h2>
                <p class="chat-item-time">${user.lastMessageTime}</p>
              </div>
              <div class="chat-item-last-message-span">
                <p class="last-message">${user.lastMessage || "Нет сообщений"}</p>
                <span id = "done-all" class="material-symbols-outlined icon">done_all</span>
              </div>
            </div>
          </div>
        </a>
      </li>
    `;
}

