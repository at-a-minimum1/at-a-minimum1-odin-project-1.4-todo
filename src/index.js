import * as domControl from "./modules/dom/domControl";
// import { Card } from "./modules/items/card";
import { Item } from "./modules/items/item";
import { List } from "./modules/items/list";

// TODO update the map to hold the values of the project the task is assigned to that way it can be used when displaying the projects and the sorted projects.
const cardMap = new Map();
const allTasks = new List([], "All Tasks");
const today = new List([], "Today");
const nextWeek = new List([], "Next Week");
const important = new List([], "Important");

const allArrays = {
	"All Tasks": allTasks,
	Today: today,
	"Next Week": nextWeek,
	Important: important,
	Todo: new List([], "Project Todo"),
	Odinbook: new List([], "Odinbook"),
};

document.addEventListener("DOMContentLoaded", () => {
	function addEventListener(element, eventType, callback) {
		element.addEventListener(eventType, callback);
	}

	const elements = [
		{
			// Accesses the add task button
			element: document.getElementById("addTaskModal"),
			eventType: "click",
			callback: () => {
				let title = document.getElementById("title").value;
				let date = document.getElementById("dueDate").value;
				// TODO add the ability to add a description when adding a task with a dropdown and then reference it for this variable
				let description = "Sample Description";
				let priority = document.getElementById("priorityDropdown");
				let selectedPriorityValue = priority.value;

				const item = new Item(title, date, description, selectedPriorityValue);

				validateAndAddToList(item);
				domControl.addCard("resultsPanel", item, cardMap);
			},
		},
		{
			// Accesses the add project button
			element: document.getElementById("addProjectModal"),
			eventType: "click",
			callback: () => {
				let title = document.getElementById("projectName").value;
				if (!Object.keys(allArrays).includes(title)) {
					const list = new List([], title);
					allArrays[title] = list;
					domControl.addProject(list);
				}
			},
		},
		// BUG Sort buttons clear the DOM when they are clicked. Error is located in domControl.displayTasks and domcontrol.addCard
		// Sort buttons
		{
			// Accesses the sort task button
			element: document.getElementById("sortTask"),
			eventType: "click",
			callback: () => {
				let currentArray = getCurrentTaskArray();
				console.log(currentArray);
				console.log(currentArray.list);
				domControl.clearDOM("resultsPanel");

				domControl.displayTasks(
					sortArray(currentArray.list, "title"),
					"resultsPanel"
				);
			},
		},

		{
			// Accesses the sort button
			element: document.getElementById("sortDate"),
			eventType: "click",
			callback: () => {
				let currentArray = getCurrentTaskArray();
				domControl.clearDOM("resultsPanel");

				domControl.displayTasks(
					sortArray(currentArray.list, "date"),
					"resultsPanel"
				);
			},
		},

		{
			// Accesses the sort button
			element: document.getElementById("sortPriority"),
			eventType: "click",
			callback: () => {
				let currentArray = getCurrentTaskArray();
				domControl.clearDOM("resultsPanel");

				domControl.displayTasks(
					sortArray(currentArray.list, "priority"),
					"resultsPanel"
				);
			},
		},

		{
			// Accesses the add project button
			element: document.getElementById("addProject"),
			eventType: "click",
			callback: () => {
				domControl.expandCollapse(
					document.getElementById("modalWrapperProject")
				);
			},
		},
		{
			// Accesses the add task button
			element: document.getElementById("addTask"),
			eventType: "click",
			callback: () => {
				domControl.expandCollapse(document.getElementById("modalWrapperTask"));
			},
		},
		{
			// Accesses the close button on the task modal
			element: document.getElementById("closeModalTask"),
			eventType: "click",
			callback: () => {
				domControl.expandCollapse(document.getElementById("modalWrapperTask"));
			},
		},
		{
			// Accesses the project modal
			element: document.getElementById("modalWrapperProject"),
			eventType: "click",
			callback: (event) => {
				if (!document.getElementById("projectModal").contains(event.target)) {
					domControl.expandCollapse(
						document.getElementById("modalWrapperProject")
					);
				}
			},
		},
		{
			// Accesses the task modal wrapper
			element: document.getElementById("modalWrapperTask"),
			eventType: "click",
			callback: (event) => {
				if (!document.getElementById("taskModal").contains(event.target)) {
					domControl.expandCollapse(
						document.getElementById("modalWrapperTask")
					);
				}
			},
		},
		{
			// Accesses the close button on the project modal
			element: document.getElementById("closeModalProject"),
			eventType: "click",
			callback: () => {
				domControl.expandCollapse(
					document.getElementById("modalWrapperProject")
				);
			},
		},
		{
			// Accesses the sort button on the project modal
			element: document.getElementById("sort"),
			eventType: "click",
			callback: () => {
				domControl.expandCollapse(document.getElementById("sortPanel"));
			},
		},
	];

	elements.forEach(({ element, eventType, callback }) => {
		addEventListener(element, eventType, callback);
	});

	function printTest() {
		console.log("test");
	}
	function printEventTarget(event) {
		console.log(event.target);
	}

	const projectWrapper = document.getElementById("projectWrapper");
	const headerListName = document.getElementById("headerListName");

	inputWrapper.addEventListener("click", function (event) {
		if (event.target.matches(".expand-collapse-button")) {
			const btn = event.target;
			const ulList = btn.nextElementSibling.nextElementSibling;
			domControl.expandCollapse(ulList);
			if (ulList.classList.contains("hide")) {
				btn.textContent = "+";
			} else {
				btn.textContent = "-";
			}
		}
		// BUG Massive bug with the tasks being displayed no longer being connected to the items they reference.

		if (
			event.target.matches(".list-button") ||
			event.target.matches(".category-button")
		) {
			const btn = event.target;
			const btnText = btn.textContent;
			headerListName.textContent = btnText;
			const taskArray = allArrays[btnText];
			domControl.clearDOM("resultsPanel");
			// BUG tasks are displayed but don't reference the item anymore.
			domControl.displayTasks(taskArray, "resultsPanel");
		}
	});

	resultsPanel.addEventListener("click", function (event) {
		const cardHtml = event.target.closest(".card");
		const cardID = cardHtml.getAttribute("data-id");
		const cardPriority = cardHtml.querySelector(".input-priority");
		const options = cardPriority.querySelectorAll("option");

		const cardObj = cardMap.get(cardHtml).card;
		const itemObj = cardMap.get(cardHtml).item;

		const itemSelected = allTasks.list.find((item) => item.id === cardID);

		if (event.target.matches(".expand-button")) {
			domControl.toggleCard(cardHtml);
		}

		if (event.target.matches(".save-button")) {
			const inputTitle = cardHtml.querySelector(".input-title");
			const title = inputTitle.value;
			itemObj.title = inputTitle.value;
			cardObj.renderValues(cardHtml);
			itemSelected.setPriority(formPriority);
			domControl.toggleCard(cardHtml);
			// console.log(cardObj + " and " + itemObj.title);

			// for (const option of options) {
			// 	if (option.value === selectedValue) {
			// 		option.selected = true;
			// 	} else {
			// 		option.selected = false;
			// 	}
			// }
		}

		if (event.target.matches(".delete-button")) {
			domControl.removeCard(cardHtml);
			cardMap.delete(cardHtml);
			removeFromAllLists(itemSelected);
		}

		if (event.target.matches(".input-priority")) {
			let inputPriority = event.target;
			itemObj.priority = inputPriority.value;
			console.log(itemObj.priority);
		}
	});

	function removeFromAllLists(item) {
		for (let listName in allArrays) {
			let listObject = allArrays[listName];
			for (const listItem of listObject) {
				if (item.id == listItem.id) {
					listObject.removeFromList(listItem);
					break;
				}
			}
		}
	}

	function getCurrentTaskArray() {
		const listName = headerListName.textContent;
		return allArrays[listName];
	}

	// BUG Massive bug with the tasks being displayed no longer being connected to the items they reference.

	function sortArray(array, sortBy) {
		const priorityValues = {
			priorityHigh: 3,
			priorityMedium: 2,
			priorityLow: 1,
		};

		if (sortBy === "title") {
			array.sort((a, b) => {
				if (a.title < b.title) {
					return -1;
				}
				if (a.title > b.title) {
					return 1;
				}
				return 0;
			});
		}
		if (sortBy === "date") {
			array.sort((a, b) => b.date.localeCompare(a.date));
		}
		if (sortBy === "priority") {
			array.sort((a, b) => {
				const aVal = priorityValues[a.priority];
				const bVal = priorityValues[b.priority];
				return bVal - aVal;
			});
		}
		return array;
	}

	function validateAndAddToList(item) {
		const headerName = headerListName.textContent.trim();
		if (!headerName) {
			console.error("Header name is empty");
			return;
		}
		if (!allArrays.hasOwnProperty(headerName)) {
			console.error(`No list found for header "${headerName}"`);
			return;
		}
		if (headerName != "All Tasks") {
			allTasks.addToList(item);
		}

		allArrays[headerName].addToList(item);
	}
});

// TODO: Implement a feature to expand a single todo to view and edit its details.

// TODO: Install and import the date-fns library to use its helpful functions for formatting and manipulating dates and times.

// TODO: Implement persistence for the app by using the Web Storage API.

// TODO: Create a function to save projects and todos to localStorage every time a new project or todo is created.

// TODO: Create a function to load the data from localStorage when the app is first loaded.

// TODO: Handle cases where the data is not present in localStorage without crashing the app.

// TODO: Be mindful of the JSON format used by localStorage, and handle storing and retrieving methods in object properties.
