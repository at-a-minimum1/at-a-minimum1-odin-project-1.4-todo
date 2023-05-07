import * as domControl from "./modules/dom/domControl";
import { Item } from "./modules/items/item";
import { Card } from "./module/items/card";

// TODO update the map to hold the values of the project the task is assigned to that way it can be used when displaying the projects and the sorted projects.
const cardMap = new Map();
const allTasks = [];
const today = [];
const nextWeek = [];
const important = [];
const odinbook = [];
const todo = [];

cardMap.set("All Tasks", allTasks);
cardMap.set("Today", today);
cardMap.set("Next Week", nextWeek);
cardMap.set("Important", important);
cardMap.set("Odinbook", odinbook);
cardMap.set("Todo", todo);

// TODO Look at the following example for reference.
// allTasks.push({{ item: anotherItem, card: anotherCard, cardHtml: anotherCardHtml }});
// cardMap
// 	.get("All Tasks")
// 	.push({ item: anotherItem, card: anotherCard, cardHtml: anotherCardHtml });

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
				const newItem = new Item(
					title,
					date,
					description,
					selectedPriorityValue
				);
				const newCard = new Card(newItem);
				const newCardHtml = newCard.createCard();
				console.log(currentProject + newItem);
				allTasks.push({ item: newItem, card: newCard, cardHtml: newCardHtml });
				cardMap
					.get(currentProject)
					.push({ item: newItem, card: newCard, cardHtml: newCardHtml });
				domControl.addCard("resultsPanel", newCardHtml);
			},
		},
		{
			// Accesses the add project button
			element: document.getElementById("addProjectModal"),
			eventType: "click",
			callback: () => {
				const projectKey = document.getElementById("projectName").value;
				const projectObject = [];
				// Checks to see if project already exists in the cardMap.
				if (!cardMap.has(projectKey)) {
					cardMap.set(projectKey, projectObject);
					domControl.addProject(projectKey);
				}
			},
		},

		// Sort buttons
		{
			// Accesses the sort task button
			element: document.getElementById("sortTask"),
			eventType: "click",
			callback: () => {
				const currentArray = getCurrentTaskArray();
				const sortedArray = sortArray(currentArray, "task");

				domControl.clearDOM("resultsPanel");
				domControl.displayTasks(sortedArray);
			},
		},

		{
			// Accesses the sort date button
			element: document.getElementById("sortDate"),
			eventType: "click",
			callback: () => {
				const currentArray = getCurrentTaskArray();
				const sortedArray = sortArray(currentArray, "date");

				domControl.clearDOM("resultsPanel");
				domControl.displayTasks(sortedArray);
			},
		},

		{
			// Accesses the sort priority button
			element: document.getElementById("sortPriority"),
			eventType: "click",
			callback: () => {
				const currentArray = getCurrentTaskArray();
				const sortedArray = sortArray(currentArray, "priority");

				domControl.clearDOM("resultsPanel");
				domControl.displayTasks(sortedArray);
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
				domControl.displayTasks("resultsPanel", allTasks);
				// domControl.displayAllTasks(cardMap, "All Tasks", "resultsPanel");
				// headerListName.textContent = "All Tasks";
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

			const taskArray = cardMap.get(btnText);

			domControl.clearDOM("resultsPanel");
			domControl.displayTasks("resultsPanel", taskArray);
		}
	});

	resultsPanel.addEventListener("click", function (event) {
		const cardHtml = event.target.closest(".card");
		const cardID = cardHtml.getAttribute("data-id");
		const cardPriority = cardHtml.querySelector(".input-priority");
		const options = cardPriority.querySelectorAll("option");

		const cardObj = cardMap.get(cardHtml).card;
		const itemObj = cardMap.get(cardHtml).item;

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

	function getCurrentTaskArray() {
		const listName = headerListName.textContent.trim().toLowerCase();
		return cardMap.get(listName);
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
});
