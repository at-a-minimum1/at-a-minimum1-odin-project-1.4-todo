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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom/domControl */ \"./src/modules/dom/domControl.js\");\n/* harmony import */ var _modules_items_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/items/card */ \"./src/modules/items/card.js\");\n/* harmony import */ var _modules_items_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/items/item */ \"./src/modules/items/item.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n\tdocument.getElementById(\"addItem\").addEventListener(\"click\", () => {\n\t\tlet title = document.getElementById(\"title\").value;\n\t\tlet date = document.getElementById(\"dueDate\").value;\n\t\t// let item = new Item(title, date);\n\t\tlet card = new _modules_items_card__WEBPACK_IMPORTED_MODULE_1__.Card(title, date);\n\n\t\t_modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__.addCard(\"resultsPanel\", card);\n\t\tconsole.log(title + \" & \" + date);\n\n\t\t_modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__.clearForm();\n\t\tconsole.log(card.getTitle());\n\t\tconsole.log(item);\n\t});\n});\n\n\n//# sourceURL=webpack://odin-project-1.4-todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/dom/domControl.js":
/*!***************************************!*\
  !*** ./src/modules/dom/domControl.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addCard\": () => (/* binding */ addCard),\n/* harmony export */   \"clearForm\": () => (/* binding */ clearForm),\n/* harmony export */   \"strikeThrough\": () => (/* binding */ strikeThrough)\n/* harmony export */ });\n/* harmony import */ var _items_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../items/card */ \"./src/modules/items/card.js\");\n\n// import { item, item } from \"../items/item\";\n\nfunction addCard(id, card) {\n\tif (card == null) {\n\t\tconst card = new _items_card__WEBPACK_IMPORTED_MODULE_0__.Card(\"Same Task\", \"07/02/2050\");\n\t\tconsole.log(\"Card was null SAD!\");\n\t} else {\n\t\tthis.card = card;\n\t}\n\tconst target = document.getElementById(id);\n\ttarget.appendChild(card);\n}\n\n// export function addItem() {\n// \tconst item = new item();\n// }\n\nfunction clearForm() {\n\tlet title = document.getElementById(\"title\");\n\tlet priority = document.getElementById(\"priorityDropDown\");\n\tlet date = document.getElementById(\"dueDate\");\n\ttitle.value = \"-No Title-\";\n\tdate.value = \"2024-06-11\";\n}\n\nfunction strikeThrough(card) {\n\tthis.card.classlist.toggle(\"strike_through\");\n}\n\n\n//# sourceURL=webpack://odin-project-1.4-todo/./src/modules/dom/domControl.js?");

/***/ }),

/***/ "./src/modules/items/card.js":
/*!***********************************!*\
  !*** ./src/modules/items/card.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var _item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item.js */ \"./src/modules/items/item.js\");\n// @collappse\n// import itemList from \"./itemList.js\";\n\n\n\nclass Card extends HTMLElement {\n\tconstructor(...args) {\n\t\tsuper(...args);\n\n\t\tthis.attachShadow({ mode: \"open\" });\n\t\tconst title = document.createElement(\"h4\");\n\t\tlet date = document.createElement(\"h4\");\n\t\ttitle.classList.add(\"card-title\");\n\t\tdate.classList.add(\"date\");\n\t\ttitle.textContent = args[0];\n\t\tdate.textContent = args[1];\n\n\t\tthis.shadowRoot.innerHTML = this.cardStyle();\n\n\t\t// CODEPEN STUFF\n\t\t// https://codepen.io/at-a-minimum1/pen/mdjaNog\n\t\t// Created Elements\n\t\tconst input = document.createElement(\"input\");\n\t\tconst checkmark = document.createElement(\"span\");\n\t\tconst container = document.createElement(\"label\");\n\t\tinput.setAttribute(\"type\", \"checkbox\");\n\n\t\tinput.classList.add(\"inputs\");\n\t\tcheckmark.classList.add(\"checkmark\");\n\t\tcontainer.classList.add(\"container\");\n\n\t\tcontainer.appendChild(input);\n\t\tcontainer.appendChild(checkmark);\n\n\t\t// END OF CODEPEN\n\t\tconst lineThrough = () => {\n\t\t\ttitle.classList.toggle(\"strike-through\");\n\t\t};\n\t\tinput.addEventListener(\"click\", lineThrough);\n\n\t\t// Appending the elements\n\t\tthis.shadowRoot.appendChild(container);\n\t\tthis.shadowRoot.appendChild(title);\n\t\tthis.shadowRoot.appendChild(date);\n\t}\n\n\t//\n\t// Getters and setters\n\t//\n\tgetTitle() {\n\t\treturn this.titleText;\n\t}\n\tsetTitle(title) {\n\t\tthis.title.textContent = title;\n\t}\n\tgetDate() {\n\t\treturn this.date;\n\t}\n\tsetDate(date) {\n\t\tthis.date = date;\n\t}\n\tcardStyle() {\n\t\treturn `<style>\n\t\t\t\n\t\t\tcustom-card {\n\t\t\t\tdisplay: grid;\n\t\t\t\tgrid-template-columns: 40px 1fr 0.5fr;\n\t\t\t\tbackground-color: white;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 70px;\n\t\t\t\tjustify-content: center;\n\t\t\t\talign-items: center;\n\t\t\t\tposition: relative;\n\t\t\t\tmargin-top: 15px;\n\t\t\t\tmargin-bottom: 20px;\n\t\t\t\tbox-shadow: 0 4px 2px 0 #5a6161;\n\t\t\t}\n\n\t\t\t.container {\n\t\t\t\tdisplay: block;\n\t\t\t\tposition: relative;\n\t\t\t\tpadding-left: 35px;\n\t\t\t\tmargin-bottom: 12px;\n\t\t\t\tcursor: pointer;\n\t\t\t\tfont-size: 22px;\n\t\t\t\t-webkit-user-select: none;\n\t\t\t\t-moz-user-select: none;\n\t\t\t\t-ms-user-select: none;\n\t\t\t\tuser-select: none;\n\t\t\t\ttransform: translate(10px, -30px);\n\t\t\t}\n\n\t\t\t/* Hide the browser's default checkbox */\n\t\t\t.container input {\n\t\t\t\tposition: absolute;\n\t\t\t\topacity: 0;\n\t\t\t\tcursor: pointer;\n\t\t\t\theight: 0;\n\t\t\t\twidth: 0;\n\t\t\t}\n\n\t\t\t/* Create a custom checkbox */\n\t\t\t.checkmark {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\theight: 50px;\n\t\t\t\twidth: 50px;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\tbackground-color: #eee;\n\t\t\t}\n\n\t\t\t/* On mouse-over, add a grey background color */\n\t\t\t.container:hover input ~ .checkmark {\n\t\t\t\tbackground-color: #ccc;\n\t\t\t}\n\n\t\t\t/* When the checkbox is checked, add a blue background */\n\t\t\t.container input:checked ~ .checkmark {\n\t\t\t\tbackground-color: #2196f3;\n\t\t\t}\n\n\t\t\t.card-title{\n\t\t\t\ttransform: translate(30px);\n\t\t\t}\n\t\t\t.strike-through{\n\t\t\t\ttext-decoration: line-through;\n\t\t\t}\n\t\t\t</style> `;\n\t}\n}\n\ncustomElements.define(\"custom-card\", Card);\n\n\n//# sourceURL=webpack://odin-project-1.4-todo/./src/modules/items/card.js?");

/***/ }),

/***/ "./src/modules/items/item.js":
/*!***********************************!*\
  !*** ./src/modules/items/item.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Item\": () => (/* binding */ Item)\n/* harmony export */ });\nclass Item {\n\tconstructor(...args) {\n\t\tthis.title = args[0];\n\t\tthis.date = args[1];\n\t\tthis.type = args[2];\n\t\tthis.description = args[3];\n\t\tthis.priority = args[4];\n\t}\n\tset title(title) {\n\t\tthis.title = title;\n\t}\n\tget title() {\n\t\treturn this.title;\n\t}\n\n\tset date(date) {\n\t\tthis.date = date;\n\t}\n\tget date() {\n\t\treturn this.date;\n\t}\n\n\tset description(description) {\n\t\tthis.description = description;\n\t}\n\tget description() {\n\t\treturn this.description;\n\t}\n\n\tset priority(priority) {\n\t\tthis.priority = priority;\n\t}\n\tget priority() {\n\t\treturn this.priority;\n\t}\n}\n\n\n//# sourceURL=webpack://odin-project-1.4-todo/./src/modules/items/item.js?");

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