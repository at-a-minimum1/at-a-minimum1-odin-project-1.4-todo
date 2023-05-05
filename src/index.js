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
				let description = "Sample Description";
				let priority = document.getElementById("priorityDropdown");
				let selectedPriorityValue = priority.value;

				const currentProject = getCurrentTaskArray();
				const item = new Item(title, date, description, selectedPriorityValue);

				validateAndAddToList(item);
				allTasks.list.push(item);
				domControl.addCard("resultsPanel", item, currentProject, cardMap);
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

		// Sort buttons
		{
			// Accesses the sort task button
			element: document.getElementById("sortTask"),
			eventType: "click",
			callback: () => {
				let currentArray = getCurrentTaskArray();
				// const cardArray = Array.from(cardMap.values());
				// TODO update the following sorted lists to return the map values and display them as the sorted list in the DOM. Maybe go through the map and reorder them or just go through the map and append them in order. Will consult with ChatGPT to figure out how to do this.
				console.log(currentArray);
				console.log(cardMap.get(currentArray));
				// domControl.clearDOM("resultsPanel");

				domControl.displaySortedList(
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

				domControl.displaySortedList(
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

				domControl.displaySortedList(
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
		{
			// Accesses the All Tasks button
			element: document.getElementById("allTasks"),
			eventType: "click",
			callback: () => {
				domControl.displayAllTasks(cardMap, "All Tasks", "resultsPanel");
				headerListName.textContent = "All Tasks";
				// domControl.expandCollapse(document.getElementById("sortPanel"));
			},
		},
		{
			// Accesses the today button
			element: document.getElementById("todayTasks"),
			eventType: "click",
			callback: () => {
				// domControl.expandCollapse(document.getElementById("sortPanel"));
			},
		},
		{
			// Accesses the Newt Week button
			element: document.getElementById("nextWeekTasks"),
			eventType: "click",
			callback: () => {
				// domControl.expandCollapse(document.getElementById("sortPanel"));
			},
		},
		{
			// Accesses the Important button
			element: document.getElementById("importantTasks"),
			eventType: "click",
			callback: () => {
				// domControl.expandCollapse(document.getElementById("sortPanel"));
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

		if (
			event.target.matches(".list-button")
			// event.target.matches(".category-button")
		) {
			const btn = event.target;
			const btnText = btn.textContent;
			headerListName.textContent = btnText;
			const taskArray = allArrays[btnText];
			domControl.clearDOM("resultsPanel");
			domControl.displayTasks(taskArray, "resultsPanel", cardMap);
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
	// BUG the Sort buttons need to return the sorted map. It's not adding the sorted map back into the DOM
	// BUG This isn't returning a collection of objects associated with the card map values. Need to refactor to ensure it does and then fix the rest of the sort buttons in order to get the properly sorted interactive items to display.
	// TODO Or you could just iterate through the map values and display all the map values that are associated with the project they're assigned to
	// function getCurrentTaskArray() {
	// 	const listName = headerListName.textContent;
	// 	return allArrays[listName];
	// }

	function getCurrentTaskArray() {
		const listName = headerListName.textContent;
		return cardMap.get(listName);
	}

	// function getCurrentTaskArray() {
	// 	const listName = headerListName.textContent;
	// 	const projectTasks = [];

	// 	for (const [card, { item, createdCard, project }] of cardMap) {
	// 		if (project === listName) {
	// 			projectTasks.push({ item, createdCard });
	// 		}
	// 	}

	// 	return projectTasks;
	// }

	// function sortMapArray(map, sortBy) {
	// 	const cardArray = Array.from(cardMap.values());
	// 	const priorityValues = {
	// 		priorityHigh: 3,
	// 		priorityMedium: 2,
	// 		priorityLow: 1,
	// 	};

	// 	if (sortBy === "title") {
	// 		cardArray.sort((a, b) => {
	// 			if (a.title < b.title) {
	// 				return -1;
	// 			}
	// 			if (a.title > b.title) {
	// 				return 1;
	// 			}
	// 			return 0;
	// 		});
	// 	}
	// 	if (sortBy === "date") {
	// 		cardArray.sort((a, b) => b.date.localeCompare(a.date));
	// 	}
	// 	if (sortBy === "priority") {
	// 		cardArray.sort((a, b) => {
	// 			const aVal = priorityValues[a.priority];
	// 			const bVal = priorityValues[b.priority];
	// 			return bVal - aVal;
	// 		});
	// 	}
	// 	return cardArray;
	// }

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
