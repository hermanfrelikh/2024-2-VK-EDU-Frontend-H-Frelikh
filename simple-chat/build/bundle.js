(() => {
  "use strict";
  document.addEventListener("DOMContentLoaded", function () {
    var e = document.querySelector("form"),
      t = document.querySelector(".form-input"),
      n = document.querySelector(".messages"),
      a = document.querySelector(".sendButton");
    function s(e) {
      e.preventDefault();
      var n = t.value;
      if ("" !== n.trim()) {
        var a = {
          id: Date.now(),
          text: n,
          time: new Date()
            .toLocaleTimeString()
            .slice(0, new Date().toLocaleTimeString().length - 3),
        };
        !(function (e) {
          var t = JSON.parse(localStorage.getItem("messages")) || [];
          t.push(e), localStorage.setItem("messages", JSON.stringify(t));
        })(a),
          o(a),
          (t.value = "");
      }
    }
    function o(e) {
      var t = document.createElement("div");
      t.classList.add("message"),
        t.setAttribute("data-id", e.id),
        (t.innerHTML = '\n      <p class="message-text">'
          .concat(e.text, '</p>\n      <p class="message-time">')
          .concat(e.time, "</p>\n    ")),
        n.appendChild(t);
    }
    e.addEventListener("submit", s),
      e.addEventListener("keypress", function (e) {
        13 === e.keyCode && s(e);
      }),
      a.addEventListener("click", s),
      (JSON.parse(localStorage.getItem("messages")) || []).forEach(function (
        e
      ) {
        document.querySelector('[data-id="'.concat(e.id, '"]')) || o(e);
      });
  });
})();

