/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var form = document.querySelector(\"form\");\n  var input = document.querySelector(\".form-input\");\n  var messagesContainer = document.querySelector(\".messages\");\n  var clearStorageButton = document.querySelector(\"#clearStorage\");\n  var sendButton = document.querySelector(\".sendButton\");\n  form.addEventListener(\"submit\", handleSubmit);\n  form.addEventListener(\"keypress\", handleKeyPress);\n  clearStorageButton.addEventListener(\"click\", clearStorage);\n  sendButton.addEventListener(\"click\", handleSubmit);\n  function handleSubmit(event) {\n    event.preventDefault();\n    var messageText = input.value;\n    if (messageText.trim() !== \"\") {\n      var message = {\n        id: Date.now(),\n        text: messageText,\n        time: new Date().toLocaleTimeString().slice(0, new Date().toLocaleTimeString().length - 3)\n      };\n      saveMessage(message);\n      displayMessage(message);\n      input.value = \"\";\n    }\n  }\n  function handleKeyPress(event) {\n    if (event.keyCode === 13) {\n      handleSubmit(event);\n    }\n  }\n  function saveMessage(message) {\n    var messages = JSON.parse(localStorage.getItem(\"messages\")) || [];\n    messages.push(message);\n    localStorage.setItem(\"messages\", JSON.stringify(messages));\n  }\n  function displayMessage(message) {\n    var messageElement = document.createElement(\"div\");\n    messageElement.classList.add(\"message\");\n    messageElement.setAttribute(\"data-id\", message.id);\n    messageElement.innerHTML = \"\\n      <p class=\\\"message-text\\\">\".concat(message.text, \"</p>\\n      <p class=\\\"message-time\\\">\").concat(message.time, \"</p>\\n    \");\n    messagesContainer.appendChild(messageElement);\n  }\n  function loadMessages() {\n    var messages = JSON.parse(localStorage.getItem(\"messages\")) || [];\n    messages.forEach(function (message) {\n      if (!document.querySelector(\"[data-id=\\\"\".concat(message.id, \"\\\"]\"))) {\n        displayMessage(message);\n      }\n    });\n  }\n  function clearStorage() {\n    localStorage.clear();\n    messagesContainer.innerHTML = \"\";\n  }\n  loadMessages();\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });