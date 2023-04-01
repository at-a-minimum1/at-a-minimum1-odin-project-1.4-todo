import * as domControl from "./modules/dom/domControl";
import { Card } from "./modules/items/card";
import { Item } from "./modules/items/item";
import { List } from "./modules/items/list";

const itemList = new List();

document.addEventListener("DOMContentLoaded", () => {
	function addEventListener(element, eventType, callback) {
		element.addEventListener(eventType, callback);
	}

	const elements = [
		{
			// Accesses the add task button
			element: document.getElementById("addItem"),
			eventType: "click",
			callback: () => {
				let title = document.getElementById("title").value;
				let date = document.getElementById("dueDate").value;

				const item = new Item(title, date);
				const card = new Card(item);

				itemList.addToList(item);
				domControl.addCard("resultsPanel", card);
			},
		},
		{
			// Accesses the sort button
			element: document.getElementById("sort"),
			eventType: "click",
			callback: () => {
				domControl.clearDOM("resultsPanel");
				domControl.displayTasks(itemList);
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
				printEventTarget(event);
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

	resultsPanel.addEventListener("click", function (event) {
		// if (event.target.matches(".collapsible-btn")) {
		// 	domControl.toggleCollapsibleCard(event);
		// }
		// if (event.target.matches(".delete")) {
		// 	const btn = event.target;
		// 	const card = btn.closest(".collapsible-card");
		// 	card.remove();
		// }
		// if (event.target.matches(".edit")) {
		// 	domControl.toggleCollapsibleCard(event);
		// }
	});
});
