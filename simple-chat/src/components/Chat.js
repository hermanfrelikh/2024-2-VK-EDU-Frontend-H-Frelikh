import "./Chat.css"

export function Chat(user) {
  return `
      <li class="chatPerson">
        <a href="index.html?chatId=${user.id}">
          <div class="chat-item">
            <img src="${user.avatar}" alt="${user.name}" class="chat-item-photo" />
            <div class="chat-item-info">
              <h2 class="chat-item-name">${user.name}</h2>
              <p class="chat-item-status">${user.status}</p>
              <p class="last-message">${user.lastMessage || "Нет сообщений"}</p>
              <span class="material-symbols-outlined icon">done_all</span>
            </div>
          </div>
        </a>
      </li>
    `;
}
