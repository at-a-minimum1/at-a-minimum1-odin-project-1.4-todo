/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom/domControl */ \"./src/modules/dom/domControl.js\");\n/* harmony import */ var _modules_items_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/items/card */ \"./src/modules/items/card.js\");\n/* harmony import */ var _modules_items_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/items/item */ \"./src/modules/items/item.js\");\n/* harmony import */ var _modules_items_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/items/list */ \"./src/modules/items/list.js\");\n\n\n\n\n\nconst itemList = new _modules_items_list__WEBPACK_IMPORTED_MODULE_3__.List();\nconst cardList = new _modules_items_list__WEBPACK_IMPORTED_MODULE_3__.List();\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n\tdocument.getElementById(\"addItem\").addEventListener(\"click\", () => {\n\t\tlet title = document.getElementById(\"title\").value;\n\t\tlet date = document.getElementById(\"dueDate\").value;\n\t\tconst item = new _modules_items_item__WEBPACK_IMPORTED_MODULE_2__.Item(title, date);\n\t\tconst card = new _modules_items_card__WEBPACK_IMPORTED_MODULE_1__.Card(item.getTitle, item.getDate);\n\t\tconsole.log(\"Title:\" + item.getTitle);\n\n\t\t_modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__.addCard(\"resultsPanel\", card);\n\t\titemList.addToList(item);\n\n\t\t_modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__.clearForm();\n\n\t\tconsole.log(item);\n\t\tconsole.log(itemList);\n\t});\n});\n\n// let items = [{title: \"Item 1\", value: \"Value 1\"},\n//              {title: \"Item 2\", value: \"Value 2\"},\n//              {title: \"Item 3\", value: \"Value 3\"}];\n\n// // sort the items array by title\n// items.sort((a, b) => (a.title > b.title) ? 1 : -1);\n\n// // update the DOM elements to reflect the new order\n// let cardContainer = document.querySelector(\"#card-container\");\n// cardContainer.innerHTML = \"\";\n// for (let item of items) {\n//   let card = document.createElement(\"custom-card\");\n//   card.setAttribute(\"title\", item.title);\n//   card.setAttribute(\"value\", item.value);\n//   cardContainer.appendChild(card);\n// }\n\n\n//# sourceURL=webpack://odin-project-1.4-todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/dom/domControl.js":
/*!***************************************!*\
  !*** ./src/modules/dom/domControl.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addCard\": () => (/* binding */ addCard),\n/* harmony export */   \"clearForm\": () => (/* binding */ clearForm),\n/* harmony export */   \"removeCard\": () => (/* binding */ removeCard),\n/* harmony export */   \"strikeThrough\": () => (/* binding */ strikeThrough),\n/* harmony export */   \"updateDOM\": () => (/* binding */ updateDOM)\n/* harmony export */ });\n/* harmony import */ var _items_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../items/card */ \"./src/modules/items/card.js\");\n\n\nfunction addCard(id, card) {\n\tif (card == null) {\n\t\tconst card = new _items_card__WEBPACK_IMPORTED_MODULE_0__.Card(\"Same Task\", \"07/02/2050\");\n\t\tconsole.log(\"Card was null SAD!\");\n\t} else {\n\t\tthis.card = card;\n\t}\n\tconst target = document.getElementById(id);\n\ttarget.appendChild(card);\n}\n\nfunction removeCard() {\n\t// card.remove();\n\tconsole.log(\"remove card invoked\");\n}\n\nfunction clearForm() {\n\tlet title = document.getElementById(\"title\");\n\tlet priority = document.getElementById(\"priorityDropDown\");\n\tlet date = document.getElementById(\"dueDate\");\n\ttitle.value = \"-No Title-\";\n\tdate.value = \"2024-06-11\";\n}\n\nfunction strikeThrough(card) {\n\tthis.card.classlist.toggle(\"strike_through\");\n}\n\nfunction updateDOM() {\n\t// placeholder\n}\n\n// clearDOM(id){\n// \tlet target = document.getElementById(id);\n// \ttarget.innerHTML = \"\";\n// }\n\n// export function updateDOM(itemList) {\n// \tclearDOM();\n// \tfor (let item of itemList) {\n// \t\tlet title = item.getTitle();\n// \t\tlet date = item.getDate();\n// \t\tcard = new Card(title, date);\n// \t\taddCard(card);\n// \t}\n// }\n\n\n//# sourceURL=webpack://odin-project-1.4-todo/./src/modules/dom/domControl.js?");

/***/ }),

/***/ "./src/modules/items/card.js":
/*!***********************************!*\
  !*** ./src/modules/items/card.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.js */ \"./src/modules/items/item.js\");\n/* harmony import */ var _dom_domControl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom/domControl.js */ \"./src/modules/dom/domControl.js\");\n// @collappse\n// import itemList from \"./itemList.js\";\n\n\n\n\nclass Card extends HTMLElement {\n\tconstructor(...args) {\n\t\tsuper(...args);\n\n\t\tthis.attachShadow({ mode: \"open\" });\n\t\tconst dateWrapper = document.createElement(\"div\");\n\t\tconst title = document.createElement(\"h4\");\n\t\tconst date = document.createElement(\"h4\");\n\t\tconst deleteBtn = document.createElement(\"button\");\n\t\ttitle.classList.add(\"card-title\");\n\t\tdate.classList.add(\"date\");\n\t\tdateWrapper.classList.add(\"date-wrapper\");\n\t\tdeleteBtn.classList.add(\"delete-btn\");\n\t\t// deleteBtn.addEventListener(\"click\", removeCard());\n\t\t// document.addEventListener(\"DOMContentLoaded\", () => {\n\t\t// \tdeleteBtn.addEventListener(\"click\", this.deleteCard());\n\t\t// });\n\n\t\t// TODO I need to update this to make sure it's receiving the values from the item it's referencing.I'm going to use getters from the item to instantiate the title, date, priority, etc\n\t\ttitle.textContent = args[0];\n\t\tdate.textContent = args[1];\n\t\tdeleteBtn.textContent = \"DELETE\";\n\n\t\tthis.shadowRoot.innerHTML = this.cardStyle();\n\n\t\t// Created Elements\n\t\tconst input = document.createElement(\"input\");\n\t\tconst checkmark = document.createElement(\"span\");\n\t\tconst container = document.createElement(\"label\");\n\t\tinput.setAttribute(\"type\", \"checkbox\");\n\n\t\tinput.classList.add(\"inputs\");\n\t\tcheckmark.classList.add(\"checkmark\");\n\t\tcontainer.classList.add(\"container\");\n\n\t\tcontainer.appendChild(input);\n\t\tcontainer.appendChild(checkmark);\n\t\tdateWrapper.appendChild(date);\n\t\tdateWrapper.appendChild(deleteBtn);\n\n\t\t// END OF CODEPEN\n\t\tconst lineThrough = () => {\n\t\t\ttitle.classList.toggle(\"strike-through\");\n\t\t};\n\t\tinput.addEventListener(\"click\", lineThrough);\n\n\t\t// Appending the elements\n\t\tthis.shadowRoot.appendChild(container);\n\t\tthis.shadowRoot.appendChild(title);\n\t\tthis.shadowRoot.appendChild(dateWrapper);\n\t}\n\n\t// Modifiers\n\tdeleteCard() {\n\t\tconsole.log(\"Delete button pressed \" + this.title.textContent);\n\t\tthis.title.textContent = \"DELETED\";\n\t\t// this.setTitle(\"DELETED\");\n\t}\n\n\t//\n\t// Getters and setters\n\t//\n\tgetTitle() {\n\t\treturn this.titleText;\n\t}\n\tsetTitle(title) {\n\t\tthis.title.textContent = title;\n\t}\n\tgetDate() {\n\t\treturn this.date;\n\t}\n\tsetDate(date) {\n\t\tthis.date = date;\n\t}\n\tcardStyle() {\n\t\treturn `<style>\n\t\t\t\n\t\t\tcustom-card {\n\t\t\t\tdisplay: grid;\n\t\t\t\tgrid-template-columns: 40px 1fr 0.5fr;\n\t\t\t\tbackground-color: white;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 70px;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\tposition: relative;\n\t\t\t\tmargin-top: 15px;\n\t\t\t\tmargin-bottom: 20px;\n\t\t\t\tbox-shadow: 0 4px 2px 0 #5a6161;\n\t\t\t}\n\n\t\t\t.date-wrapper{\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: row;\n\t\t\t\talign-items; center;\n\t\t\t\tjustify-content: center;\n\t\t\t}\n\t\t\n\t\t\t.delete-btn {\n\t\t\t\theight: fit-content;\n\t\t\t}\n\n\t\t\t.container {\n\t\t\t\tdisplay: block;\n\t\t\t\tposition: relative;\n\t\t\t\tpadding-left: 35px;\n\t\t\t\tmargin-bottom: 12px;\n\t\t\t\tcursor: pointer;\n\t\t\t\tfont-size: 22px;\n\t\t\t\t-webkit-user-select: none;\n\t\t\t\t-moz-user-select: none;\n\t\t\t\t-ms-user-select: none;\n\t\t\t\tuser-select: none;\n\t\t\t\ttransform: translate(10px, -30px);\n\t\t\t}\n\n\t\t\t/* Hide the browser's default checkbox */\n\t\t\t.container input {\n\t\t\t\tposition: absolute;\n\t\t\t\topacity: 0;\n\t\t\t\tcursor: pointer;\n\t\t\t\theight: 0;\n\t\t\t\twidth: 0;\n\t\t\t}\n\n\t\t\t/* Create a custom checkbox */\n\t\t\t.checkmark {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\theight: 50px;\n\t\t\t\twidth: 50px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tbackground-color: #eee;\n\t\t\t}\n\n\t\t\t/* On mouse-over, add a grey background color */\n\t\t\t.container:hover input ~ .checkmark {\n\t\t\t\tbackground-color: #ccc;\n\t\t\t}\n\n\t\t\t/* When the checkbox is checked, add a blue background */\n\t\t\t.container input:checked ~ .checkmark {\n\t\t\t\tbackground-color: #2196f3;\n\t\t\t}\n\n\t\t\t.card-title{\n\t\t\t\ttransform: translate(30px);\n\t\t\t}\n\t\t\t.strike-through{\n\t\t\t\ttext-decoration: line-through;\n\t\t\t}\n\t\t\t</style> `;\n\t}\n}\n\ncustomElements.define(\"custom-card\", Card);\n\n\n//# sourceURL=webpack://odin-project-1.4-todo/./src/modules/items/card.js?");

/***/ }),

/***/ "./src/modules/items/item.js":
/*!***********************************!*\
  !*** ./src/modules/items/item.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Item\": () => (/* binding */ Item)\n/* harmony export */ });\nclass Item {\n\tconstructor(...args) {\n\t\tthis.title = args[0];\n\t\tthis.date = args[1];\n\t\tthis.type = args[2];\n\t\tthis.description = args[3];\n\t\tthis.priority = args[4];\n\n\t\t// setTitle(args[0]);\n\t\t// setDate(args[1]);\n\t\t// setType(args[2]);\n\t\t// setDescription(args[3]);\n\t\t// setPriority(args[4]);\n\t}\n\tset setTitle(title) {\n\t\ttitle = this.title;\n\t}\n\tget getTitle() {\n\t\treturn this.title;\n\t}\n\n\tset setTitle(date) {\n\t\tthis.date = date;\n\t}\n\tget getDate() {\n\t\treturn this.date;\n\t}\n\n\tset setDescription(description) {\n\t\tthis.description = description;\n\t}\n\tget getDescription() {\n\t\treturn this.description;\n\t}\n\n\tset setPriority(priority) {\n\t\tthis.priority = priority;\n\t}\n\tget getPriority() {\n\t\treturn this.priority;\n\t}\n}\n\n\n//# sourceURL=webpack://odin-project-1.4-todo/./src/modules/items/item.js?");

/***/ }),

/***/ "./src/modules/items/list.js":
/*!***********************************!*\
  !*** ./src/modules/items/list.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"List\": () => (/* binding */ List)\n/* harmony export */ });\n// import \"item.js\";\n\nclass List {\n\tconstructor(list) {\n\t\tthis.list = list || [];\n\t}\n\tget getlist() {\n\t\treturn this.list;\n\t}\n\tset setlist(list) {\n\t\tthis.list = list;\n\t}\n\taddToList(item) {\n\t\tthis.list.push(item);\n\t}\n\tremoveFromList(item) {\n\t\tlet indexToRemove = this.list.indexOf(item);\n\t\tif (indexToRemove >= 0) {\n\t\t\tthis.list.splice(indexToRemove, 1);\n\t\t} else {\n\t\t\tthrow new console.error(\"item not found\");\n\t\t}\n\t}\n}\n\n\n//# sourceURL=webpack://odin-project-1.4-todo/./src/modules/items/list.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;