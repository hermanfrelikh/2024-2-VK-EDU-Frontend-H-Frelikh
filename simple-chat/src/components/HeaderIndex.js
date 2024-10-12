import "./HeaderIndex.css";

export function HeaderIndex() {
  return `
    <header class="headerIndex">
        <div class="headerContainer">
            <a class="linkMain" href="main.html">
            <span id="icon" class="material-symbols-outlined icon">arrow_back</span>
            </a>
        </div>
        <div class="headerContainer">
            <div class="person">
            <img class="personPhoto" src="" alt="not found" />
            <div class="personNameStatus">
                <h1 class="personName"></h1>
                <p class="personStatus"></p>
            </div>
            </div>
        </div>
        <div class="headerContainer">
            <div class="headerIconsRight">
            <button class="icon-button">
                <span id="icon" class="material-symbols-outlined icon">sync</span>
            </button>
            <span id="icon" class="material-symbols-outlined icon"> search </span>
            <span id="icon" class="material-symbols-outlined icon"> more_vert </span>
            </div>
        </div>
    </header>
  `;
}
