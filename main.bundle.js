(()=>{"use strict";var e={869:(e,n,t)=>{function a(){return JSON.parse(localStorage.getItem("users"))||[]}function s(e){localStorage.setItem("users",JSON.stringify(e))}t.d(n,{lo:()=>a,m6:()=>s});var i=a();0===i.length&&s(i=[{id:1,name:"Яна",avatar:"https://sun9-44.userapi.com/impg/Fmp3R9zTLJnkrYrJgRPPq8IfQ2tClWKByoHv9w/Lj9oGtVjToE.jpg?size=1080x1440&quality=95&sign=7019cbcdb9a7e615206611f82c34838a&type=album",status:"недавно",lastMessage:"Нет сообщений",lastMessageTime:""},{id:2,name:"Захар",avatar:"https://sun9-76.userapi.com/impg/5v6W30Tm2lroaFXtPZPwO5OlktQMJVyCcElQoQ/7tijVbcubrA.jpg?size=828x828&quality=95&sign=9efdebd108a93b8e9653280f7fdc7c83&type=album",status:"онлайн",lastMessage:"Нет сообщений",lastMessageTime:""},{id:3,name:"Мама",avatar:"https://sun1-27.userapi.com/impg/1_NloAcb3e9eHWuE40CZDT2oBtnwvXBLTzu2vA/kqmti69382o.jpg?size=1080x1399&quality=95&sign=49d0ef831fe99ae2418bcd8b82811342&type=album",status:"2 часа назад",lastMessage:"Нет сообщений",lastMessageTime:""}]);var o=null;document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("header-container-index");e&&(e.innerHTML='\n    <header class="headerIndex">\n        <div class="headerContainer">\n            <a class="linkMain" href="main.html">\n            <span id="icon" class="material-symbols-outlined icon">arrow_back</span>\n            </a>\n        </div>\n        <div class="headerContainer">\n            <div class="person">\n            <img class="personPhoto" src="" alt="not found" />\n            <div class="personNameStatus">\n                <h1 class="personName"></h1>\n                <p class="personStatus"></p>\n            </div>\n            </div>\n        </div>\n        <div class="headerContainer">\n            <div class="headerIconsRight">\n            <button class="icon-button">\n                <span id="icon" class="material-symbols-outlined icon">sync</span>\n            </button>\n            <span id="icon" class="material-symbols-outlined icon"> search </span>\n            <span id="icon" class="material-symbols-outlined icon"> more_vert </span>\n            </div>\n        </div>\n    </header>\n  ');var n=document.getElementById("form-index");n&&(n.innerHTML='\n    <form class="form" action="/">\n        <input\n          class="form-input"\n          name="message-text"\n          placeholder="Введите сообщение"\n          type="text"\n          autocomplete="off"\n        />\n        <button class="sendButton">Отправить</button>\n    </form>\n  ');var t=document.querySelector("form"),a=document.querySelector(".form-input"),r=document.querySelector(".messages"),c=document.querySelector(".sendButton"),l=document.querySelector(".icon-button"),d=document.querySelector(".personName"),u=document.querySelector(".personPhoto"),m=document.querySelector(".personStatus"),v=document.querySelector(".linkMain");v&&v.addEventListener("click",(function(){g!==p&&b()}));var p={id:"german",name:"Герман",avatar:"https://sun1-24.userapi.com/impg/7rPDGVoAQDvDZ55XLQ8fvqPoXagiitcUTDu4Hg/MiqLb9edxMU.jpg?size=2560x2560&quality=95&sign=b7abba0e9f3dadc571504bdff665cf4f&type=album",status:"онлайн",lastMessage:"Нет сообщений",lastMessageTime:""},f=new URLSearchParams(window.location.search),h=parseInt(f.get("chatId"))-1;o=i[h];var g=p,y=function(e){e&&(d.textContent=e.name,u.src=e.avatar,m.textContent=e.status)};function b(){g=o,o=o===p?i[h]:p,y(o),M()}function w(e){e.preventDefault();var n=a.value;if(""!==n.trim()){var t={id:Date.now(),text:n,time:(new Date).toLocaleTimeString().slice(0,(new Date).toLocaleTimeString().length-3),isMainAccountSender:g===p};S(t),L(t),a.value="",E(),x(t)}}function S(e){var n=JSON.parse(localStorage.getItem("messages_".concat(h)))||[];n.push(e),localStorage.setItem("messages_".concat(h),JSON.stringify(n))}function L(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=document.createElement("div");t.classList.add("message",e.isMainAccountSender&&g===p||!e.isMainAccountSender&&g!==p?"message-self":"message-other"),t.setAttribute("data-id",e.id),t.setAttribute("data-self",e.isMainAccountSender&&g===p||!e.isMainAccountSender&&g!==p),t.setAttribute("data-user-id",o.id),t.innerHTML='\n      <div class="message-text-done-all-chat">\n        <p class="message-text">'.concat(e.text,'</p>\n        <span id="done-all-chat" class="material-symbols-outlined icon">done_all</span>\n      </div>\n      <p class="message-time">').concat(e.time,"</p>\n    "),n&&(t.classList.add("new-message-animation"),setTimeout((function(){t.classList.remove("new-message-animation")}),3e3)),r.appendChild(t)}function w(e){e.preventDefault();var n=a.value;if(""!==n.trim()){var t={id:Date.now(),text:n,time:(new Date).toLocaleTimeString().slice(0,(new Date).toLocaleTimeString().length-3),isMainAccountSender:g===p};S(t),L(t,!0),a.value="",E(),x(t)}}function M(){if(r&&(r.innerHTML=""),o){var e=JSON.parse(localStorage.getItem("messages_".concat(h)))||[];e.forEach((function(e){document.querySelector('[data-id="'.concat(e.id,'"]'))||L(e)})),E(),e.length>0&&x(e[e.length-1])}}function E(){r.scrollTop=r.scrollHeight}function x(e){var n=i.find((function(e){return e.id===o.id}));n&&(e.text.length>50?n.lastMessage=e.text.slice(0,50)+"...":n.lastMessage=e.text,n.lastMessageTime=e.time,s(i))}y(o),null!==l&&l.addEventListener("click",b),t&&(t.addEventListener("submit",w),t.addEventListener("keypress",(function(e){13===e.keyCode&&w(e)}))),null!==c&&c.addEventListener("click",w),M()}))}},n={};function t(a){var s=n[a];if(void 0!==s)return s.exports;var i=n[a]={exports:{}};return e[a](i,i.exports,t),i.exports}t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n);var a=t(869);function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=Array(n);t<n;t++)a[t]=e[t];return a}document.addEventListener("DOMContentLoaded",(function(){"/"===window.location.pathname&&(window.location.href="main.html"),document.getElementById("header-container").innerHTML='\n    <header class="header">\n      <div class="headerContainer">\n        <span id="icon-burger-menu" class="material-symbols-outlined icon">menu</span>\n      </div>\n      <div class="headerContainer">\n        <h1>Messenger</h1>\n      </div>\n      <div class="headerContainer">\n        <div class="headerIconsRight">\n\n            <input\n                class="search-input"\n                name="message-text"\n                placeholder="Поиск"\n                type="text"\n                autocomplete="off"\n            />\n            <button class="icon-button-search">\n              <span class="material-symbols-outlined icon">search</span>\n            </button>\n        </div>\n      </div>\n    </header>\n  ',document.getElementById("chat-list-comp").innerHTML='\n    <ul id="chat-list"></ul>\n  ';var e=document.querySelector(".search-input");e.style.display="none";var n=(0,a.lo)(),t=document.querySelector(".icon-button-search");t.addEventListener("click",(function(){e.style.display="none"===e.style.display?"block":"none"})),e.addEventListener("input",(function(e){var t=function(e,n){return n.filter((function(n){var t=new RegExp(e,"gi");return n.name.match(t)}))}(e.target.value,n);d(t)}));var i=1;t&&t.addEventListener("click",(function(n){n.preventDefault(),1===i?(e.style.display="block",i=-i):(e.style.display="none",i=-i)}));var o=document.getElementById("create-chat");o.innerHTML='\n        \n        <button class="icon-button-create">\n            <span id = "iconCreate" class="material-symbols-outlined icon">add_2</span>\n        </button>\n      \n    ',o.addEventListener("click",(function(){if(!0===r){(c=document.createElement("div")).className="create-new-chat",c.innerHTML='\n      <h1 class = "add-new-user-title">Написать сообщение</h1>\n      <form class="create-new-chat-form" action="/">\n        <input\n          id="form-input-name"\n          name="message-text"\n          placeholder="Введите имя пользователя"\n          type="text"\n          autocomplete="off"\n        />\n        <button id="cancellation-create-new-chat">Отмена</button>\n      </form>\n    ',document.body.appendChild(c),document.getElementById("cancellation-create-new-chat").addEventListener("click",(function(e){e.preventDefault(),document.body.removeChild(c),r=!0}));var e=document.getElementById("form-input-name");e.addEventListener("input",(function(t){var s=document.querySelector(".find-new-user");s&&s.remove();var i=document.createElement("div");if(i.classList.add("find-new-user"),""!==e.value){i.innerHTML='\n          <div class="new-user-info">\n            <img class="new-user-avatar"\n              src="https://www.meme-arsenal.com/memes/4d37481e72c4770f4be10d89dbf0b2a8.jpg"\n              alt="avatar" />\n            <div class="new-user-name-time-conteiner">\n              <h2 class="new-user-name">'.concat(t.target.value,'</h2>\n              <p class="new-user-time">недавно</p>\n            </div>\n          </div>\n        '),document.querySelector(".add-new-user-title").insertAdjacentElement("afterend",i);var o=document.querySelector(".new-user-info");o&&o.addEventListener("click",(function(){var e=t.target.value.trim();if(e){n.push({id:n.length+1,name:e,avatar:"https://www.meme-arsenal.com/memes/4d37481e72c4770f4be10d89dbf0b2a8.jpg",status:"недавно",lastMessage:"Нет сообщений",lastMessageTime:""}),(0,a.m6)(n);var s=n.length;window.location.href="index.html?chatId=".concat(s)}}))}})),e.addEventListener("keypress",(function(n){13===n.keyCode&&(n.preventDefault(),e.value="")})),r=!1}else c&&(document.body.removeChild(c),c=null),r=!0}));var r=!0,c=null,l=document.getElementById("chat-list");function d(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;l.innerHTML="",(e=t,function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return s(e,n);var t={}.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).reverse().forEach((function(e){l.innerHTML+=function(e){return'\n      <li class="chatPerson">\n        <a href="index.html?chatId='.concat(e.id,'">\n          <div class="chat-item">\n            <img src="').concat(e.avatar,'" alt="').concat(e.name,'" class="chat-item-photo" />\n            <div class="chat-item-info">\n              <div class="chat-item-name-time">\n                <h2 class="chat-item-name">').concat(e.name,'</h2>\n                <p class="chat-item-time">').concat(e.lastMessageTime,'</p>\n              </div>\n              <div class="chat-item-last-message-span">\n                <p class="last-message">').concat(e.lastMessage||"Нет сообщений",'</p>\n                <span id = "done-all" class="material-symbols-outlined icon">done_all</span>\n              </div>\n            </div>\n          </div>\n        </a>\n      </li>\n    ')}(e)})),l.addEventListener("click",(function(e){if("A"===e.target.tagName){e.preventDefault();var n=e.target.getAttribute("href").split("=")[1];window.location.href="index.html?chatId=".concat(n)}}))}d(),l.scrollTop=0}))})();