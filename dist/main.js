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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom/domControl */ \"./src/modules/dom/domControl.js\");\n/* harmony import */ var _modules_items_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/items/card */ \"./src/modules/items/card.js\");\n/* harmony import */ var _modules_items_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/items/item */ \"./src/modules/items/item.js\");\n/* harmony import */ var _modules_items_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/items/list */ \"./src/modules/items/list.js\");\n\n\n\n\n\nconst allTasks = new _modules_items_list__WEBPACK_IMPORTED_MODULE_3__.List([], \"All Tasks\");\nconst today = new _modules_items_list__WEBPACK_IMPORTED_MODULE_3__.List([], \"Today\");\nconst nextWeek = new _modules_items_list__WEBPACK_IMPORTED_MODULE_3__.List([], \"Next Week\");\nconst important = new _modules_items_list__WEBPACK_IMPORTED_MODULE_3__.List([], \"Important\");\n\nconst allArrays = {\n\t\"All Tasks\": allTasks,\n\tToday: today,\n\t\"Next Week\": nextWeek,\n\tImportant: important,\n};\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n\tfunction addEventListener(element, eventType, callback) {\n\t\telement.addEventListener(eventType, callback);\n\t}\n\n\tconst elements = [\n\t\t{\n\t\t\t// Accesses the add task button\n\t\t\telement: document.getElementById(\"addTaskModal\"),\n\t\t\teventType: \"click\",\n\t\t\tcallback: () => {\n\t\t\t\tlet title = document.getElementById(\"title\").value;\n\t\t\t\tlet date = document.getElementById(\"dueDate\").value;\n\n\t\t\t\tconst item = new _modules_items_item__WEBPACK_IMPORTED_MODULE_2__.Item(title, date);\n\t\t\t\tconst card = new _modules_items_card__WEBPACK_IMPORTED_MODULE_1__.Card(item);\n\n\t\t\t\tallTasks.addToList(item);\n\t\t\t\t_modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__.addCard(\"resultsPanel\", card);\n\t\t\t},\n\t\t},\n\t\t{\n\t\t\t// Accesses the add project button\n\t\t\telement: document.getElementById(\"addProjectModal\"),\n\t\t\teventType: \"click\",\n\t\t\tcallback: () => {\n\t\t\t\tlet title = document.getElementById(\"projectName\").value;\n\n\t\t\t\tconst list = new _modules_items_list__WEBPACK_IMPORTED_MODULE_3__.List([], title);\n\t\t\t\tconsole.log(list + \" List title: \" + title);\n\t\t\t\t_modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__.addProject(list);\n\t\t\t},\n\t\t},\n\t\t{\n\t\t\t// Accesses the sort button\n\t\t\telement: document.getElementById(\"sort\"),\n\t\t\teventType: \"click\",\n\t\t\tcallback: () => {\n\t\t\t\t_modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__.clearDOM(\"resultsPanel\");\n\t\t\t\t_modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__.displayTasks(allTasks);\n\t\t\t\tconsole.log(allTasks);\n\t\t\t},\n\t\t},\n\t\t{\n\t\t\t// Accesses the add project button\n\t\t\telement: document.getElementById(\"addProject\"),\n\t\t\teventType: \"click\",\n\t\t\tcallback: () => {\n\t\t\t\t_modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__.expandCollapse(\n\t\t\t\t\tdocument.getElementById(\"modalWrapperProject\")\n\t\t\t\t);\n\t\t\t},\n\t\t},\n\t\t{\n\t\t\t// Accesses the add task button\n\t\t\telement: document.getElementById(\"addTask\"),\n\t\t\teventType: \"click\",\n\t\t\tcallback: () => {\n\t\t\t\t_modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__.expandCollapse(document.getElementById(\"modalWrapperTask\"));\n\t\t\t},\n\t\t},\n\t\t{\n\t\t\t// Accesses the close button on the task modal\n\t\t\telement: document.getElementById(\"closeModalTask\"),\n\t\t\teventType: \"click\",\n\t\t\tcallback: () => {\n\t\t\t\t_modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__.expandCollapse(document.getElementById(\"modalWrapperTask\"));\n\t\t\t},\n\t\t},\n\t\t{\n\t\t\t// Accesses the project modal\n\t\t\telement: document.getElementById(\"modalWrapperProject\"),\n\t\t\teventType: \"click\",\n\t\t\tcallback: (event) => {\n\t\t\t\tif (!document.getElementById(\"projectModal\").contains(event.target)) {\n\t\t\t\t\t_modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__.expandCollapse(\n\t\t\t\t\t\tdocument.getElementById(\"modalWrapperProject\")\n\t\t\t\t\t);\n\t\t\t\t}\n\t\t\t},\n\t\t},\n\t\t{\n\t\t\t// Accesses the task modal wrapper\n\t\t\telement: document.getElementById(\"modalWrapperTask\"),\n\t\t\teventType: \"click\",\n\t\t\tcallback: (event) => {\n\t\t\t\tif (!document.getElementById(\"taskModal\").contains(event.target)) {\n\t\t\t\t\t_modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__.expandCollapse(\n\t\t\t\t\t\tdocument.getElementById(\"modalWrapperTask\")\n\t\t\t\t\t);\n\t\t\t\t}\n\t\t\t},\n\t\t},\n\t\t{\n\t\t\t// Accesses the close button on the project modal\n\t\t\telement: document.getElementById(\"closeModalProject\"),\n\t\t\teventType: \"click\",\n\t\t\tcallback: () => {\n\t\t\t\t_modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__.expandCollapse(\n\t\t\t\t\tdocument.getElementById(\"modalWrapperProject\")\n\t\t\t\t);\n\t\t\t},\n\t\t},\n\t\t{\n\t\t\t// Accesses the sort button on the project modal\n\t\t\telement: document.getElementById(\"sort\"),\n\t\t\teventType: \"click\",\n\t\t\tcallback: () => {\n\t\t\t\t_modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__.expandCollapse(document.getElementById(\"sortPanel\"));\n\t\t\t},\n\t\t},\n\t];\n\n\telements.forEach(({ element, eventType, callback }) => {\n\t\taddEventListener(element, eventType, callback);\n\t});\n\n\tfunction printTest() {\n\t\tconsole.log(\"test\");\n\t}\n\n\tfunction printEventTarget(event) {\n\t\tconsole.log(event.target);\n\t}\n\n\tconst projectWrapper = document.getElementById(\"projectWrapper\");\n\tconst headerListName = document.getElementById(\"headerListName\");\n\n\tinputWrapper.addEventListener(\"click\", function (event) {\n\t\tif (event.target.matches(\".expand-collapse-button\")) {\n\t\t\tconst btn = event.target;\n\t\t\tconst ulList = btn.nextElementSibling.nextElementSibling;\n\t\t\t_modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__.expandCollapse(ulList);\n\t\t\tif (ulList.classList.contains(\"hide\")) {\n\t\t\t\tbtn.textContent = \"+\";\n\t\t\t} else {\n\t\t\t\tbtn.textContent = \"-\";\n\t\t\t}\n\t\t}\n\t\tif (event.target.matches(\".list-button\")) {\n\t\t\tconst btn = event.target;\n\t\t\tconst btnText = btn.textContent;\n\t\t\theaderListName.textContent = btnText;\n\n\t\t\t// Update the results panel to show the tasks in the list selected\n\t\t\t// TODO Make sure the taskArray is correctly accessing the right array before updating the DOM.\n\t\t\tconst taskArray = allArrays[btnText];\n\t\t\t_modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__.clearDOM(\"resultsPanel\");\n\t\t\t_modules_dom_domControl__WEBPACK_IMPORTED_MODULE_0__.displayTasks(taskArray);\n\t\t}\n\t});\n\n\tresultsPanel.addEventListener(\"click\", function (event) {\n\t\t// TODO Add the ability to expand and collapse the card elements.\n\t\t// if (event.target.matches(\".collapsible-btn\")) {\n\t\t// \tdomControl.toggleCollapsibleCard(event);\n\t\t// }\n\t\t// if (event.target.matches(\".delete\")) {\n\t\t// \tconst btn = event.target;\n\t\t// \tconst card = btn.closest(\".collapsible-card\");\n\t\t// \tcard.remove();\n\t\t// }\n\t\t// if (event.target.matches(\".save\")) {\n\t\t// \tdomControl.toggleCollapsibleCard(event);\n\t\t// }\n\t});\n});\n\n// TODO: Set up basic user interface to display all projects and their associated todos.\n\n// TODO: Display the title and due date of each todo and use color-coding to differentiate priorities.\n\n// TODO: Implement a feature to expand a single todo to view and edit its details.\n\n// TODO: Add functionality to delete a todo.\n\n// TODO: Research and analyze the Todoist, Things, and any.do applications for inspiration and design ideas.\n\n// TODO: Install and import the date-fns library to use its helpful functions for formatting and manipulating dates and times.\n\n// TODO: Implement persistence for the app by using the Web Storage API.\n\n// TODO: Create a function to save projects and todos to localStorage every time a new project or todo is created.\n\n// TODO: Create a function to load the data from localStorage when the app is first loaded.\n\n// TODO: Handle cases where the data is not present in localStorage without crashing the app.\n\n// TODO: Be mindful of the JSON format used by localStorage, and handle storing and retrieving methods in object properties.\n\n\n//# sourceURL=webpack://odin-project-1.4-todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/dom/domControl.js":
/*!***************************************!*\
  !*** ./src/modules/dom/domControl.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addCard\": () => (/* binding */ addCard),\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"clearDOM\": () => (/* binding */ clearDOM),\n/* harmony export */   \"clearForm\": () => (/* binding */ clearForm),\n/* harmony export */   \"displayTasks\": () => (/* binding */ displayTasks),\n/* harmony export */   \"expandCollapse\": () => (/* binding */ expandCollapse),\n/* harmony export */   \"removeCard\": () => (/* binding */ removeCard)\n/* harmony export */ });\n/* harmony import */ var _items_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../items/card */ \"./src/modules/items/card.js\");\n/* harmony import */ var _items_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../items/list */ \"./src/modules/items/list.js\");\n\n\n\nfunction addCard(id, card) {\n\tconst createdCard = card.createCard();\n\t// this.card = card.createCard();\n\n\tconst target = document.getElementById(id);\n\ttarget.appendChild(createdCard);\n}\n\nfunction addProject(list) {\n\tconst project = list;\n\tconst expandButton = document.createElement(\"button\");\n\tconst listButton = document.createElement(\"button\");\n\tconst projectWrapper = document.getElementById(\"projectPanel\");\n\tconst listContainer = document.createElement(\"div\");\n\tconst ulList = document.createElement(\"ul\");\n\tfor (listItem of project) {\n\t\tconst liItem = document.createElement(\"li\");\n\t\tliItem.textContent = \"-\" + listItem.title;\n\t\tulList.appendChild(liItem);\n\t}\n\t// Set up the text content of the elements\n\texpandButton.textContent = \"+\";\n\tlistButton.textContent = project.title;\n\t// Set up the classList for the elements\n\tlistButton.classList.add(\"list-button\");\n\texpandButton.classList.add(\"expand-collapse-button\");\n\tulList.classList.add(\"ul-list\");\n\tulList.classList.add(\"hide\");\n\n\tlistContainer.appendChild(expandButton);\n\tlistContainer.appendChild(listButton);\n\tlistContainer.appendChild(ulList);\n\n\tprojectWrapper.appendChild(listContainer);\n}\n\n// export function addListItem(list) {\n// \tconst listItem = document.createElement(ul);\n// }\n\n// export function updateList(items) {\n// \t// ijdfsoisjfd\n// \tconst container = document.getElementById(\"someContainer\");\n// \titems.forEach((item) => {\n// \t\tconst ul = document.createElement(\"ul\");\n// \t\tul.textContent = item.title;\n// \t\tcontainer.appendChild(ul);\n// \t});\n// }\n\nfunction removeCard() {\n\tconsole.log(\"remove card invoked\");\n}\n\nfunction clearDOM(id) {\n\tconst panel = document.getElementById(id);\n\t// Clears all the elements in the id container\n\twhile (panel.firstChild) {\n\t\tpanel.firstChild.remove();\n\t}\n}\n\nfunction displayTasks(taskList) {\n\tfor (const task of taskList) {\n\t\t// Add the task\n\t\tconst card = new _items_card__WEBPACK_IMPORTED_MODULE_0__.Card(task);\n\t\taddCard(\"resultsPanel\", card);\n\t}\n}\n\nfunction clearForm() {\n\tlet title = document.getElementById(\"title\");\n\tlet priority = document.getElementById(\"priorityDropDown\");\n\tlet date = document.getElementById(\"dueDate\");\n\ttitle.value = \"-No Title-\";\n\tdate.value = \"2024-06-11\";\n}\n\nfunction expandCollapse(container) {\n\tcontainer.classList.toggle(\"hide\");\n}\n\n// Refactor this to toggle without the shadow DOm\n// export function toggleCollapsibleCard(event) {\n// \tconst btn = event.target;\n// \tlet card = btn.closest(\".collapsible-card\");\n// \tconst shadowRoot = btn.getRootNode();\n\n// \t// Reassign card if it's in the shadow DOM\n// \tif (card == null) {\n// \t\tcard = shadowRoot.host;\n\n// \t\tif (card == null) {\n// \t\t\tconsole.log(\"Card not being accessed in toggleCollapsibleCard.\");\n// \t\t\treturn;\n// \t\t}\n// \t\tconsole.log(\"Card value: \" + card.classList);\n// \t}\n// \tconst header =\n// \t\tcard.querySelector(\".collapsible-title\") ||\n// \t\tshadowRoot.querySelector(\".collapsible-title\");\n\n// \tconsole.log(\"Header value: \" + header.classList);\n\n// \tconst date = card.querySelector(\".date\") || shadowRoot.querySelector(\".date\");\n\n// \tconst input =\n// \t\tcard.querySelector(\".input-wrapper\") ||\n// \t\tshadowRoot.querySelector(\".input-wrapper\");\n\n// \tconst contentCollapsible =\n// \t\tcard.querySelector(\".collapsible-content\") ||\n// \t\tshadowRoot.querySelector(\".collapsible-content\");\n\n// \tconst editDelete =\n// \t\tcard.querySelector(\".edit-delete-wrapper\") ||\n// \t\tshadowRoot.querySelector(\".edit-delete-wrapper\");\n\n// \tconst descriptionHeader =\n// \t\tcard.querySelector(\".description-header\") ||\n// \t\tshadowRoot.querySelector(\".description-header\");\n\n// \tconst description =\n// \t\tcard.querySelector(\".description\") ||\n// \t\tshadowRoot.querySelector(\".description\");\n\n// \theader.classList.toggle(\"hide\");\n// \tdate.classList.toggle(\"hide\");\n// \tinput.classList.toggle(\"hide\");\n// \tcontentCollapsible.classList.toggle(\"hide\");\n// \teditDelete.classList.toggle(\"hide\");\n// \tdescriptionHeader.classList.toggle(\"hide\");\n// \tdescription.classList.toggle(\"hide\");\n\n// \tcard.classList.toggle(\"expanded\");\n\n// \tconst expand =\n// \t\tcard.querySelector(\".collapsible-btn\") ||\n// \t\tshadowRoot.querySelector(\".collapsible-btn\");\n// \tconst content =\n// \t\tcard.querySelector(\".collapsible-content\") ||\n// \t\tshadowRoot.querySelector(\".collapsible-content\");\n// \tif (card.classList.contains(\"expanded\")) {\n// \t\texpand.textContent = \"Collapse\";\n// \t\t// content.style.height = \"100000px\";\n// \t\tcontent.style.height = content.scrollHeight + \"px\";\n// \t\tcontent.style.backgroundColor = \"white\";\n// \t\t// content.style.paddingBottom = \"200px\";\n// \t} else {\n// \t\texpand.textContent = \"Expand\";\n// \t\tcontent.style.height = \"0\";\n// \t}\n// }\n\n\n//# sourceURL=webpack://odin-project-1.4-todo/./src/modules/dom/domControl.js?");

/***/ }),

/***/ "./src/modules/items/card.js":
/*!***********************************!*\
  !*** ./src/modules/items/card.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ \"./src/modules/items/item.js\");\n\n\nclass Card extends _item__WEBPACK_IMPORTED_MODULE_0__.Item {\n\tconstructor(item) {\n\t\tsuper();\n\t\tthis.item = item;\n\t\tconst itemTitle = item.getTitle;\n\t\tconst itemDate = item.getDate;\n\t\tconst itemPriority = item.getPriority;\n\t\tconst itemDescription = item.getDescription;\n\t}\n\n\t// Creates a card element\n\tcreateCard() {\n\t\t// Create divs\n\t\tconst card = document.createElement(\"div\");\n\t\tconst checkboxWrapper = document.createElement(\"div\");\n\t\tconst titleWrapper = document.createElement(\"div\");\n\t\tconst dateWrapper = document.createElement(\"div\");\n\t\tconst expandWrapper = document.createElement(\"div\");\n\t\t// Create elements\n\t\tconst cardTitle = document.createElement(\"h2\");\n\t\tconst cardDate = document.createElement(\"p\");\n\t\tconst cardType = document.createElement(\"p\");\n\t\tconst cardDescription = document.createElement(\"p\");\n\t\tconst cardPriority = document.createElement(\"label\");\n\t\tconst cardSelectPriority = document.createElement(\"select\");\n\t\tconst expandButton = document.createElement(\"button\");\n\t\tconst checkbox = document.createElement(\"input\");\n\n\t\t// Set attributes\n\t\tcardPriority.setAttribute(\"for\", \"priorityDropdown\");\n\t\tcardSelectPriority.setAttribute(\"id\", \"priorityDropdown\");\n\t\tcheckbox.setAttribute(\"type\", \"checkbox\");\n\n\t\t// Create options and add them to the select element\n\t\tconst lowOption = document.createElement(\"option\");\n\t\tlowOption.value = \"low\";\n\t\tlowOption.text = \"Low\";\n\t\tconst mediumOption = document.createElement(\"option\");\n\t\tmediumOption.value = \"medium\";\n\t\tmediumOption.text = \"Medium\";\n\t\tconst highOption = document.createElement(\"option\");\n\t\thighOption.value = \"high\";\n\t\thighOption.text = \"High\";\n\t\tcardSelectPriority.add(lowOption);\n\t\tcardSelectPriority.add(mediumOption);\n\t\tcardSelectPriority.add(highOption);\n\n\t\tcardTitle.textContent = this.item.getTitle;\n\t\tcardDate.textContent = this.item.getDate;\n\t\tcardDescription.textContent = this.item.getDescription;\n\t\tcardSelectPriority.value = this.item.getPriority;\n\t\texpandButton.textContent = \"Expand\";\n\n\t\t// Set classes\n\t\tcard.classList.add(\"card\");\n\t\tcardTitle.classList.add(\"card-title\");\n\t\tcardDate.classList.add(\"card-date\");\n\t\tcardType.classList.add(\"card-type\");\n\t\tcardDescription.classList.add(\"card-description\");\n\t\tcardPriority.classList.add(\"card-priority\");\n\t\tcheckboxWrapper.classList.add(\"checkbox-wrapper\");\n\t\ttitleWrapper.classList.add(\"title-wrapper\");\n\t\tdateWrapper.classList.add(\"date-wrapper\");\n\t\texpandWrapper.classList.add(\"expand-wrapper\");\n\t\texpandButton.classList.add(\"expand-button\");\n\n\t\t// Priority experiment\n\t\tcheckboxWrapper.classList.add(\"priority-high\");\n\t\texpandWrapper.classList.add(\"priority-high\");\n\n\t\t// Append elements to cardPriority\n\t\tcardPriority.appendChild(cardSelectPriority);\n\n\t\t// Append elements to wrappers\n\t\tcheckboxWrapper.appendChild(checkbox);\n\t\ttitleWrapper.appendChild(cardTitle);\n\t\tdateWrapper.appendChild(cardDate);\n\t\texpandWrapper.appendChild(expandButton);\n\n\t\t// Append elements to card\n\t\tcard.appendChild(checkboxWrapper);\n\t\tcard.appendChild(titleWrapper);\n\t\tcard.appendChild(dateWrapper);\n\t\tcard.appendChild(expandWrapper);\n\n\t\treturn card;\n\t}\n}\n\n\n//# sourceURL=webpack://odin-project-1.4-todo/./src/modules/items/card.js?");

/***/ }),

/***/ "./src/modules/items/item.js":
/*!***********************************!*\
  !*** ./src/modules/items/item.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Item\": () => (/* binding */ Item)\n/* harmony export */ });\nclass Item {\n\tconstructor(...args) {\n\t\tthis.title = args[0];\n\t\tthis.date = args[1];\n\t\tthis.description = args[2];\n\t\tthis.priority = args[3];\n\t}\n\tset setTitle(title) {\n\t\ttitle = this.title;\n\t}\n\tget getTitle() {\n\t\treturn this.title;\n\t}\n\n\tset setTitle(date) {\n\t\tthis.date = date;\n\t}\n\tget getDate() {\n\t\treturn this.date;\n\t}\n\n\tset setDescription(description) {\n\t\tthis.description = description;\n\t}\n\tget getDescription() {\n\t\treturn this.description;\n\t}\n\n\tset setPriority(priority) {\n\t\tthis.priority = priority;\n\t}\n\tget getPriority() {\n\t\treturn this.priority;\n\t}\n}\n\n\n//# sourceURL=webpack://odin-project-1.4-todo/./src/modules/items/item.js?");

/***/ }),

/***/ "./src/modules/items/list.js":
/*!***********************************!*\
  !*** ./src/modules/items/list.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"List\": () => (/* binding */ List)\n/* harmony export */ });\n// import \"item.js\";\n\nclass List {\n\tconstructor(list, title) {\n\t\tthis.list = list || [];\n\t\tthis.title = title || \"Project Name Placeholder\";\n\t}\n\tget getTitle() {\n\t\treturn this.title;\n\t}\n\tset setTitle(titleName) {\n\t\tthis.title = titleName;\n\t}\n\n\tget getlist() {\n\t\treturn this.list;\n\t}\n\tset setlist(list) {\n\t\tthis.list = list;\n\t}\n\taddToList(item) {\n\t\tthis.list.push(item);\n\t}\n\tremoveFromList(item) {\n\t\tlet indexToRemove = this.list.indexOf(item);\n\t\t// if (indexToRemove >= 0) {\n\t\tthis.list.splice(indexToRemove, 1);\n\t\t// } else {\n\t\t// throw new console.error(\"item not found\");\n\t\tconsole.log(\"item not found\");\n\t\t// }\n\t}\n\t*[Symbol.iterator]() {\n\t\tyield* this.list;\n\t}\n}\n\n\n//# sourceURL=webpack://odin-project-1.4-todo/./src/modules/items/list.js?");

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