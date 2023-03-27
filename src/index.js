import * as domControl from "./modules/dom/domControl";
import { Card } from "./modules/items/card";
import { Item } from "./modules/items/item";
import { List } from "./modules/items/list";

const itemList = new List();

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("addItem").addEventListener("click", () => {
		let title = document.getElementById("title").value;
		let date = document.getElementById("dueDate").value;

		const item = new Item(title, date);
		const card = new Card(item);

		itemList.addToList(item);
		domControl.addCard("resultsPanel", card);
		// domControl.clearDOM("resultsPanel");
		// domControl.displayTasks(itemList);
	});

	const taskModalWrapper = document.getElementById("modalWrapperTask");
	const projectModalWrapper = document.getElementById("modalWrapperProject");
	const resultPanel = document.getElementById("resultsPanel");

	const addProject = document.getElementById("addProject");
	const addTask = document.getElementById("addTask");
	const taskModal = document.getElementById("taskModal");
	const sortButton = document.getElementById("sort");

	sortButton.addEventListener("click", () => {
		domControl.clearDOM("resultsPanel");
	});

	// Pulls up the modal panel for adding projects
	addProject.addEventListener("click", () => {
		projectModalWrapper.classList.toggle("hide");
	});
	// Brings up the modal panel for adding tasks
	addTask.addEventListener("click", () => {
		taskModalWrapper.classList.toggle("hide");
	});

	taskModalWrapper.addEventListener("click", (event) => {
		if (event.target === taskModalWrapper) {
			taskModalWrapper.classList.toggle("hide");
		}
	});
	projectModalWrapper.addEventListener("click", (event) => {
		if (event.target === projectModalWrapper) {
			projectModalWrapper.classList.toggle("hide");
		}
	});

	document.getElementById("closeModalTask").addEventListener("click", () => {
		taskModalWrapper.classList.toggle("hide");
	});
	document.getElementById("closeModalProject").addEventListener("click", () => {
		projectModalWrapper.classList.toggle("hide");
	});

	resultsPanel.addEventListener("click", function (event) {
		if (event.target.matches(".collapsible-btn")) {
			domControl.toggleCollapsibleCard(event);
		}
		if (event.target.matches(".delete")) {
			const btn = event.target;
			const card = btn.closest(".collapsible-card");
			card.remove();
		}
		if (event.target.matches(".edit")) {
			domControl.toggleCollapsibleCard(event);
		}
	});
});
