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

				const item = new Item(title, date);
				const card = new Card(item);

				allTasks.addToList(item);
				domControl.addCard("resultsPanel", card);
			},
		},
		{
			// Accesses the add project button
			element: document.getElementById("addProjectModal"),
			eventType: "click",
			callback: () => {
				let title = document.getElementById("projectName").value;

				const list = new List([], title);
				console.log(list + " List title: " + title);
				domControl.addProject(list);
			},
		},
		{
			// Accesses the sort button
			element: document.getElementById("sort"),
			eventType: "click",
			callback: () => {
				domControl.clearDOM("resultsPanel");
				domControl.displayTasks(allTasks);
				console.log(allTasks);
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
		if (event.target.matches(".list-button")) {
			const btn = event.target;
			const btnText = btn.textContent;
			headerListName.textContent = btnText;

			// Update the results panel to show the tasks in the list selected
			// TODO Make sure the taskArray is correctly accessing the right array before updating the DOM.
			const taskArray = allArrays[btnText];
			domControl.clearDOM("resultsPanel");
			domControl.displayTasks(taskArray);
		}
	});

	resultsPanel.addEventListener("click", function (event) {
		// TODO Add the ability to expand and collapse the card elements.
		// if (event.target.matches(".collapsible-btn")) {
		// 	domControl.toggleCollapsibleCard(event);
		// }
		// if (event.target.matches(".delete")) {
		// 	const btn = event.target;
		// 	const card = btn.closest(".collapsible-card");
		// 	card.remove();
		// }
		// if (event.target.matches(".save")) {
		// 	domControl.toggleCollapsibleCard(event);
		// }
	});
});

// TODO: Set up basic user interface to display all projects and their associated todos.

// TODO: Display the title and due date of each todo and use color-coding to differentiate priorities.

// TODO: Implement a feature to expand a single todo to view and edit its details.

// TODO: Add functionality to delete a todo.

// TODO: Research and analyze the Todoist, Things, and any.do applications for inspiration and design ideas.

// TODO: Install and import the date-fns library to use its helpful functions for formatting and manipulating dates and times.

// TODO: Implement persistence for the app by using the Web Storage API.

// TODO: Create a function to save projects and todos to localStorage every time a new project or todo is created.

// TODO: Create a function to load the data from localStorage when the app is first loaded.

// TODO: Handle cases where the data is not present in localStorage without crashing the app.

// TODO: Be mindful of the JSON format used by localStorage, and handle storing and retrieving methods in object properties.
