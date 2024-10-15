import "./Header.css";

export function Header() {
  return `
    <header class="header">
      <div class="headerContainer">
        <span id="icon-burger-menu" class="material-symbols-outlined icon">menu</span>
      </div>
      <div class="headerContainer">
        <h1>Messenger</h1>
      </div>
      <div class="headerContainer">
        <div class="headerIconsRight">

            <input
                class="search-input"
                name="message-text"
                placeholder="Поиск"
                type="text"
                autocomplete="off"
            />
            <button class="icon-button-search">
              <span class="material-symbols-outlined icon">search</span>
            </button>
        </div>
      </div>
    </header>
  `;
}

