(()=>{"use strict";var e=JSON.parse(localStorage.getItem("users"))||[];0===e.length&&function(e){localStorage.setItem("users",JSON.stringify(e))}(e=[{id:1,name:"Яна",avatar:"https://sun9-44.userapi.com/impg/Fmp3R9zTLJnkrYrJgRPPq8IfQ2tClWKByoHv9w/Lj9oGtVjToE.jpg?size=1080x1440&quality=95&sign=7019cbcdb9a7e615206611f82c34838a&type=album",status:"недавно",lastMessage:"последнее сообщение не очень длинное"},{id:2,name:"Захар",avatar:"https://sun9-76.userapi.com/impg/5v6W30Tm2lroaFXtPZPwO5OlktQMJVyCcElQoQ/7tijVbcubrA.jpg?size=828x828&quality=95&sign=9efdebd108a93b8e9653280f7fdc7c83&type=album",status:"онлайн",lastMessage:"последнее сообщение не очень длинное"},{id:3,name:"Мама",avatar:"https://sun1-27.userapi.com/impg/1_NloAcb3e9eHWuE40CZDT2oBtnwvXBLTzu2vA/kqmti69382o.jpg?size=1080x1399&quality=95&sign=49d0ef831fe99ae2418bcd8b82811342&type=album",status:"2 часа назад",lastMessage:"последнее сообщение не очень длинное"}]);var t=null;document.addEventListener("DOMContentLoaded",(function(){var s=document.getElementById("header-container-index");s&&(s.innerHTML='\n    <header class="headerIndex">\n        <div class="headerContainer">\n            <a class="linkMain" href="main.html">\n            <span class="material-symbols-outlined icon">arrow_back</span>\n            </a>\n        </div>\n        <div class="headerContainer">\n            <div class="person">\n            <img class="personPhoto" src="" alt="not found" />\n            <div class="personNameStatus">\n                <h1 class="personName"></h1>\n                <p class="personStatus"></p>\n            </div>\n            </div>\n        </div>\n        <div class="headerContainer">\n            <div class="headerIconsRight">\n            <button class="icon-button">\n                <span class="material-symbols-outlined icon">sync</span>\n            </button>\n            <span class="material-symbols-outlined icon"> search </span>\n            <span class="material-symbols-outlined icon"> more_vert </span>\n            </div>\n        </div>\n    </header>\n  ');var a=document.getElementById("form-index");a&&(a.innerHTML='\n    <form class="form" action="/">\n        <input\n          class="form-input"\n          name="message-text"\n          placeholder="Введите сообщение"\n          type="text"\n          autocomplete="off"\n        />\n        <button class="sendButton">Отправить</button>\n    </form>\n  ');var n=document.querySelector("form"),o=document.querySelector(".form-input"),r=document.querySelector(".messages"),c=document.querySelector(".sendButton"),i=document.querySelector(".icon-button"),l=document.querySelector(".personName"),m=document.querySelector(".personPhoto"),d=document.querySelector(".personStatus"),u={id:"german",name:"Герман",avatar:"https://sun1-24.userapi.com/impg/7rPDGVoAQDvDZ55XLQ8fvqPoXagiitcUTDu4Hg/MiqLb9edxMU.jpg?size=2560x2560&quality=95&sign=b7abba0e9f3dadc571504bdff665cf4f&type=album",status:"онлайн",lastMessage:"последнее сообщение не очень длинное"},g=new URLSearchParams(window.location.search),p=parseInt(g.get("chatId"))-1;t=e[p];var f=u;function v(e){e.preventDefault();var s=o.value;if(""!==s.trim()){var a={id:Date.now(),text:s,time:(new Date).toLocaleTimeString().slice(0,(new Date).toLocaleTimeString().length-3),self:!0,senderId:t.id};!function(e){if(t===u){var s=JSON.parse(localStorage.getItem("messages_german_".concat(f.id)))||[];s.push(e),localStorage.setItem("messages_german_".concat(f.id),JSON.stringify(s))}else{var a=JSON.parse(localStorage.getItem("messages_".concat(t.id)))||[];a.push(e),localStorage.setItem("messages_".concat(t.id),JSON.stringify(a))}}(a),S(a),o.value="",h()}}function S(e){var s=document.createElement("div");s.classList.add("message",e.self?"message-self":"message-other"),s.setAttribute("data-id",e.id),s.setAttribute("data-self",e.self),s.setAttribute("data-user-id",t.id),s.innerHTML='\n      <p class="message-text">'.concat(e.text,'</p>\n      <p class="message-time">').concat(e.time,"</p>\n    "),r.appendChild(s)}function h(){r.scrollTop=r.scrollHeight}t&&(l.textContent=t.name,m.src=t.avatar,d.textContent=t.status),null!==i&&i.addEventListener("click",(function(){t.id===u.id?(f=t,t=e[p]):(f=t,t=u),l.textContent=t.name,m.src=t.avatar,d.textContent=t.status,function(){for(var e=JSON.parse(localStorage.getItem("messages_".concat(f.id)))||[],t=0;t<e.length;t++){var s=e[t];s.self=!s.self,s.classList.contains("message-self")?s.classList.replace("message-self","message-other"):s.classList.replace("message-other","message-self")}localStorage.setItem("messages_".concat(f.id),JSON.stringify(e));for(var a=JSON.parse(localStorage.getItem("messages_german_".concat(f.id)))||[],n=0;n<a.length;n++){var o=a[n];o.self=!o.self,o.classList.contains("message-self")?o.classList.replace("message-self","message-other"):o.classList.replace("message-other","message-self")}localStorage.setItem("messages_german_".concat(f.id),JSON.stringify(a))}()})),n&&(n.addEventListener("submit",v),n.addEventListener("keypress",(function(e){13===e.keyCode&&v(e)}))),null!==c&&c.addEventListener("click",v),t&&((JSON.parse(localStorage.getItem("messages_".concat(t.id)))||[]).forEach((function(e){document.querySelector('[data-id="'.concat(e.id,'"]'))||S(e)})),(JSON.parse(localStorage.getItem("messages_german_".concat(t.id)))||[]).forEach((function(e){document.querySelector('[data-id="'.concat(e.id,'"]'))||S(e)})),h())}))})();