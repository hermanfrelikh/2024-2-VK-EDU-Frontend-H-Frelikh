import "./Header.css";

export function Header() {
  return `
    <header class="header">
      <div class="headerContainer">
        <span class="material-symbols-outlined icon">menu</span>
      </div>
      <div class="headerContainer">
        <h1>Messenger</h1>
      </div>
      <div class="headerContainer">
        <div class="headerIconsRight">
            
            <span class="material-symbols-outlined icon">search</span>
            <input
                class="search-input"
                name="message-text"
                placeholder="Поиск"
                type="text"
                autocomplete="off"
            />
        </div>
      </div>
    </header>
  `;
}
