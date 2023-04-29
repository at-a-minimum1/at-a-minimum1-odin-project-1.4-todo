import * as domControl from "./modules/dom/domControl";
import { Card } from "./modules/items/card";
import { Item } from "./modules/items/item";
import { List } from "./modules/items/list";

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
				const card = new Card(item);

				validateAndAddToList(item);
				domControl.addCard("resultsPanel", card);
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
				domControl.clearDOM("resultsPanel");

				domControl.displayTasks(sortArray(currentArray.list, "title"));
			},
		},

		{
			// Accesses the sort button
			element: document.getElementById("sortDate"),
			eventType: "click",
			callback: () => {
				let currentArray = getCurrentTaskArray();
				domControl.clearDOM("resultsPanel");

				domControl.displayTasks(sortArray(currentArray.list, "date"));
			},
		},

		{
			// Accesses the sort button
			element: document.getElementById("sortPriority"),
			eventType: "click",
			callback: () => {
				let currentArray = getCurrentTaskArray();
				domControl.clearDOM("resultsPanel");

				domControl.displayTasks(sortArray(currentArray.list, "priority"));
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
				// console.log(allTasks.list);
			},
		},
	];

	elements.forEach(({ element, eventType, callback }) => {
		addEventListener(element, eventType, callback);
	});

	function printTest() {
		console.log("test");
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
			event.target.matches(".list-button") ||
			event.target.matches(".category-button")
		) {
			const btn = event.target;
			const btnText = btn.textContent;
			headerListName.textContent = btnText;
			const taskArray = allArrays[btnText];
			domControl.clearDOM("resultsPanel");
			domControl.displayTasks(taskArray);
		}
	});

	resultsPanel.addEventListener("click", function (event) {
		const card = event.target.closest(".card");
		const cardID = card.getAttribute("data-id");
		const itemSelected = allTasks.list.find((item) => item.id === cardID);

		const formTitle = event.target.querySelector(".input-title");
		const formPriority = event.target.closest(".inputPriority");
		const formDate = event.target.closest(".input-date");
		const formDescription = event.target.closest(".description-textarea");

		if (event.target.matches(".expand-button")) {
			domControl.toggleCard(card);
		}
		if (event.target.matches(".save-button")) {
			itemSelected.title = formTitle.textContent;
			// itemSelected.setDate(formDate);
			// itemSelected.setPriority(formPriority);
			// itemSelected.setDescription(formDescription);
			// card.renderValues();
			domControl.toggleCard(card);
			console.log(itemSelected);
			console.log(typeof formTitle);
		}
		if (event.target.matches(".delete-button")) {
			domControl.removeCard(card);
			removeFromAllLists(itemSelected);
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
