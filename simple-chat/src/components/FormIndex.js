import "./FormIndex.css";


export function FormIndex() {
  return `
    <form class="form" action="/">
        <input
          class="form-input"
          name="message-text"
          placeholder="Введите сообщение"
          type="text"
          autocomplete="off"
        />
        <button class="sendButton">Отправить</button>
    </form>
  `;
}
