(()=>{"use strict";document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("form"),t=document.querySelector(".form-input"),s=document.querySelector(".messages"),a=document.querySelector(".sendButton"),n=document.querySelector(".headerIconsRight .material-symbols-outlined.icon:nth-child(1)"),o=document.querySelector(".personName"),r=document.querySelector(".personPhoto"),c=document.querySelector(".personStatus"),i=[{name:"Яна",avatar:"https://sun9-44.userapi.com/impg/Fmp3R9zTLJnkrYrJgRPPq8IfQ2tClWKByoHv9w/Lj9oGtVjToE.jpg?size=1080x1440&quality=95&sign=7019cbcdb9a7e615206611f82c34838a&type=album",status:"недавно",messageClass:"message-self"},{name:"Герман",avatar:"https://sun1-24.userapi.com/impg/7rPDGVoAQDvDZ55XLQ8fvqPoXagiitcUTDu4Hg/MiqLb9edxMU.jpg?size=2560x2560&quality=95&sign=b7abba0e9f3dadc571504bdff665cf4f&type=album",status:"онлайн",messageClass:"message-other"}],l=0;function u(e){e.preventDefault();var s=t.value;if(""!==s.trim()){var a={id:Date.now(),text:s,time:(new Date).toLocaleTimeString().slice(0,(new Date).toLocaleTimeString().length-3),self:0===l};!function(e){var t=JSON.parse(localStorage.getItem("messages"))||[];t.push(e),localStorage.setItem("messages",JSON.stringify(t))}(a),m(a),t.value="",d()}}function m(e){var t=document.createElement("div");t.classList.add("message",i[e.self?0:1].messageClass),t.setAttribute("data-id",e.id),t.setAttribute("data-self",e.self),t.innerHTML='\n      <p class="message-text">'.concat(e.text,'</p>\n      <p class="message-time">').concat(e.time,"</p>\n    "),s.appendChild(t)}function d(){s.scrollTop=s.scrollHeight}n.addEventListener("click",(function(){var e=i[l=(l+1)%i.length];o.textContent=e.name,r.src=e.avatar,c.textContent=e.status,function(){for(var e=s.children,t=0;t<e.length;t++){var a=e[t],n="true"===a.getAttribute("data-self");a.classList.remove("message","self","other"),a.classList.add(i[n?0:1].messageClass)}}()})),e.addEventListener("submit",u),e.addEventListener("keypress",(function(e){13===e.keyCode&&u(e)})),a.addEventListener("click",u),(JSON.parse(localStorage.getItem("messages"))||[]).forEach((function(e){document.querySelector('[data-id="'.concat(e.id,'"]'))||m(e)})),d()}))})();