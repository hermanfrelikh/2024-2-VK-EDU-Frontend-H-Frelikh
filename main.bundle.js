(()=>{"use strict";var e={257:(e,t,n)=>{function a(e){localStorage.setItem("users",JSON.stringify(e))}n.d(t,{VV:()=>r,m6:()=>a});var r=JSON.parse(localStorage.getItem("users"))||[];0===r.length&&a(r=[{id:1,name:"Яна",avatar:"https://sun9-44.userapi.com/impg/Fmp3R9zTLJnkrYrJgRPPq8IfQ2tClWKByoHv9w/Lj9oGtVjToE.jpg?size=1080x1440&quality=95&sign=7019cbcdb9a7e615206611f82c34838a&type=album",status:"недавно"},{id:2,name:"Захар",avatar:"https://sun9-76.userapi.com/impg/5v6W30Tm2lroaFXtPZPwO5OlktQMJVyCcElQoQ/7tijVbcubrA.jpg?size=828x828&quality=95&sign=9efdebd108a93b8e9653280f7fdc7c83&type=album",status:"онлайн"},{id:3,name:"Мама",avatar:"https://sun1-27.userapi.com/impg/1_NloAcb3e9eHWuE40CZDT2oBtnwvXBLTzu2vA/kqmti69382o.jpg?size=1080x1399&quality=95&sign=49d0ef831fe99ae2418bcd8b82811342&type=album",status:"2 часа назад"}]);var s=null;document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("form"),t=document.querySelector(".form-input"),n=document.querySelector(".messages"),a=document.querySelector(".sendButton"),c=document.querySelector(".icon-button"),o=document.querySelector(".personName"),i=document.querySelector(".personPhoto"),l=document.querySelector(".personStatus"),d={id:"german",name:"Герман",avatar:"https://sun1-24.userapi.com/impg/7rPDGVoAQDvDZ55XLQ8fvqPoXagiitcUTDu4Hg/MiqLb9edxMU.jpg?size=2560x2560&quality=95&sign=b7abba0e9f3dadc571504bdff665cf4f&type=album",status:"онлайн"},u=new URLSearchParams(window.location.search),m=parseInt(u.get("chatId"))-1;function f(e){e.preventDefault();var n=t.value;if(""!==n.trim()){var a={id:Date.now(),text:n,time:(new Date).toLocaleTimeString().slice(0,(new Date).toLocaleTimeString().length-3),self:!0,senderId:s.id};!function(e){var t=JSON.parse(localStorage.getItem("messages_".concat(s.id)))||[];t.push(e),localStorage.setItem("messages_".concat(s.id),JSON.stringify(t))}(a),p(a),t.value="",v()}}function p(e){var t=document.createElement("div");t.classList.add("message",e.self?"message-self":"message-other"),t.setAttribute("data-id",e.id),t.setAttribute("data-self",e.self),t.setAttribute("data-user-id",s.id),t.innerHTML='\n      <p class="message-text">'.concat(e.text,'</p>\n      <p class="message-time">').concat(e.time,"</p>\n    "),n.appendChild(t)}function v(){n.scrollTop=n.scrollHeight}(s=r[m])&&(o.textContent=s.name,i.src=s.avatar,l.textContent=s.status),null!==c&&c.addEventListener("click",(function(){s=s.id===d.id?r[m]:d,o.textContent=s.name,i.src=s.avatar,l.textContent=s.status,function(){for(var e=n.children,t=0;t<e.length;t++){var a=e[t];a.classList.contains("message-self")?a.classList.replace("message-self","message-other"):a.classList.replace("message-other","message-self")}}()})),e&&(e.addEventListener("submit",f),e.addEventListener("keypress",(function(e){13===e.keyCode&&f(e)}))),null!==a&&a.addEventListener("click",f),s&&((JSON.parse(localStorage.getItem("messages_".concat(s.id)))||[]).forEach((function(e){document.querySelector('[data-id="'.concat(e.id,'"]'))||p(e)})),v())}))}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,n),s.exports}n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var a=n(257);function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}document.addEventListener("DOMContentLoaded",(function(){document.getElementById("header-container").innerHTML='\n    <header class="header">\n      <div class="headerContainer">\n        <span class="material-symbols-outlined icon">menu</span>\n      </div>\n      <div class="headerContainer">\n        <h1>Messenger</h1>\n      </div>\n      <div class="headerContainer">\n        <div class="headerIconsRight">\n            \n            <span class="material-symbols-outlined icon">search</span>\n            <input\n                class="search-input"\n                name="message-text"\n                placeholder="Поиск"\n                type="text"\n                autocomplete="off"\n            />\n        </div>\n      </div>\n    </header>\n  ';var e=document.getElementById("create-chat");e.innerHTML='\n        \n        <button class="icon-button-create">\n            <span id = "iconCreate" class="material-symbols-outlined icon">add_2</span>\n        </button>\n      \n    ',e.addEventListener("click",(function(){var e=document.createElement("div");e.className="create-new-chat",e.innerHTML='\n      <h1 class = "add-new-user-title">Написать сообщение</h1>\n      <form class="create-new-chat-form" action="/">\n        <input\n          id="form-input-name"\n          name="message-text"\n          placeholder="Введите имя пользователя"\n          type="text"\n          autocomplete="off"\n        />\n        <button id="cancellation-create-new-chat">Отмена</button>\n      </form>\n    ',document.body.appendChild(e),document.getElementById("cancellation-create-new-chat").addEventListener("click",(function(t){t.preventDefault(),document.body.removeChild(e)}));var t=document.getElementById("form-input-name");t.addEventListener("input",(function(e){var n=document.querySelector(".find-new-user");n&&n.remove();var r=document.createElement("div");if(r.classList.add("find-new-user"),""!==t.value){r.innerHTML='\n        <div class="new-user-info">\n          <img class="new-user-avatar"\n          src="https://www.meme-arsenal.com/memes/4d37481e72c4770f4be10d89dbf0b2a8.jpg"\n          alt="avatar" />\n          <div class="new-user-name-time-conteiner">\n            <h2 class="new-user-name">'.concat(e.target.value,'</h2>\n            <p class="new-user-time">недавно</p>\n          </div>\n        </div>\n        '),document.querySelector(".add-new-user-title").insertAdjacentElement("afterend",r);var s=document.querySelector(".new-user-info");s&&s.addEventListener("click",(function(){var t=e.target.value.trim();if(t){a.VV.push({id:a.VV.length+1,name:t,avatar:"https://www.meme-arsenal.com/memes/4d37481e72c4770f4be10d89dbf0b2a8.jpg",status:"недавно"}),(0,a.m6)(a.VV);var n=a.VV.length;window.location.href="index.html?chatId=".concat(n)}}))}})),t.addEventListener("keypress",(function(e){13===e.keyCode&&(e.preventDefault(),t.value="")}))}));var t,n=document.getElementById("chat-list");(t=a.VV,function(e){if(Array.isArray(e))return r(e)}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).reverse().forEach((function(e){n.innerHTML+=function(e){return'\n      <li class="chatPerson">\n        <a href="index.html?chatId='.concat(e.id,'">\n          <div class="chat-item">\n            <img src="').concat(e.avatar,'" alt="').concat(e.name,'" class="chat-item-photo" />\n            <div class="chat-item-info">\n              <h2 class="chat-item-name">').concat(e.name,'</h2>\n              <p class="chat-item-status">').concat(e.status,"</p>\n              \n            </div>\n          </div>\n        </a>\n      </li>\n    ")}(e)})),n.addEventListener("click",(function(e){if("A"===e.target.tagName){e.preventDefault();var t=e.target.getAttribute("href").split("=")[1];window.location.href="index.html?chatId=".concat(t)}})),n.scrollTop=0}))})();