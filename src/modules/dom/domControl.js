import { Card } from "../items/card";
import { List } from "../items/list";

export function addCard(id, item, map) {
	const card = new Card(item);
	const createdCard = card.createCard();
	const target = document.getElementById(id);

	map.set(createdCard, { item, card });

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
// TODO update this to take the argument of map as the parameter
// BUG Massive bug with the tasks being displayed no longer being connected to the items they reference.
export function displayTasks(taskList, id) {
	for (const task of taskList) {
		// addCard("resultsPanel", task);
		const target = document.getElementById(id);
		const card = new Card(task);
		const createdCard = card.createCard();
		target.appendChild(createdCard);
	}
}

// TODO This was ChatGPT's solution. Going to merge this solution with the function above and then ensure the map of values is read. Maybe I need to export the map value out of index.js to other files...
function displayProjectTasks(project) {
	const taskContainer = document.getElementById("task-container");
	taskContainer.innerHTML = "";

	for (const [
		card,
		{ item, card: cardObject, project: cardProject },
	] of cardMap.entries()) {
		if (cardProject === project) {
			taskContainer.appendChild(card);
		}
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
