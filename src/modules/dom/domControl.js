import { Card } from "../items/card";
import { List } from "../items/list";

export function addCard(id, card) {
	const createdCard = card.createCard();
	const target = document.getElementById(id);
	target.appendChild(createdCard);
}

export function addProject(list) {
	const project = list;
	const listButton = document.createElement("button");
	const projectWrapper = document.getElementById("projectPanel");
	const listContainer = document.createElement("div");

	listButton.textContent = project.title;
	listButton.classList.add("list-button");

	listContainer.appendChild(listButton);
	projectWrapper.appendChild(listContainer);
}

export function removeCard(card) {
	card.remove();
}

export function clearDOM(id) {
	const panel = document.getElementById(id);
	// Clears all the elements in the id container
	while (panel.firstChild) {
		panel.firstChild.remove();
	}
}

export function displayTasks(taskList) {
	for (const task of taskList) {
		// Add the task
		const card = new Card(task);
		addCard("resultsPanel", card);
	}
}

export function clearForm() {
	let title = document.getElementById("title");
	let priority = document.getElementById("priorityDropDown");
	let date = document.getElementById("dueDate");
	title.value = "-No Title-";
	date.value = "2024-06-11";
}

export function expandCollapse(container) {
	container.classList.toggle("hide");
}

export function toggleCard(card) {
	const titleHeader = card.querySelector(".card-title");
	const dateHeader = card.querySelector(".card-date");
	// Hidden elements
	const collapsibleForm = card.querySelector(".collapsible-form");
	const collapsibleDescription = card.querySelector(".collapsible-description");
	const collapsibleEditButtonWrap = card.querySelector(
		".collapsible-button-wrap"
	);
	titleHeader.classList.toggle("hide");
	dateHeader.classList.toggle("hide");
	collapsibleForm.classList.toggle("display-flex");
	collapsibleDescription.classList.toggle("display-flex");
	collapsibleEditButtonWrap.classList.toggle("display-flex");

	const expandButton = card.querySelector(".expand-button");
	if (expandButton.textContent == "Expand") {
		expandButton.textContent = "Collapse";
	} else {
		expandButton.textContent = "Expand";
	}
}
