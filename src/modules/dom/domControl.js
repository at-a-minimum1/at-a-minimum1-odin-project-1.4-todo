// @collapse
import { Card } from "../items/card";

export function renderCard(cardHtml, item) {
	const checkboxWrapper = cardHtml.querySelector(".checkbox-wrapper");
	const expandWrapper = cardHtml.querySelector(".expand-wrapper");
	const displayTitle = cardHtml.querySelector(".card-title");
	const displayDate = cardHtml.querySelector(".card-date");
	// Renders the values from the input fields to the display values
	displayTitle.textContent = item.getTitle;
	displayDate.textContent = item.getDate;
	console.log(
		`The date on the display is: ${displayDate.textContent} and the date in the item is: ${item.getDate}`
	);

	// Renders the priority color
	checkboxWrapper.classList.forEach((className) => {
		if (className.startsWith("priority")) {
			checkboxWrapper.classList.remove(className);
			expandWrapper.classList.remove(className);
		}
	});
	const itemPriority = item.getPriority;
	const priorityClass =
		"priority-" + itemPriority.charAt(8).toLowerCase() + itemPriority.slice(9);

	checkboxWrapper.classList.add(priorityClass);
	expandWrapper.classList.add(priorityClass);
}

export function addCard(id, cardHtml) {
	const target = document.getElementById(id);
	target.appendChild(cardHtml);
}

export function addProject(projectName) {
	const listButton = document.createElement("button");
	const projectWrapper = document.getElementById("projectPanel");
	const listContainer = document.createElement("div");

	listButton.textContent = projectName;
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

export function displayTasks(id, projectArray) {
	const target = document.getElementById(id);
	projectArray.forEach((object) => {
		target.appendChild(object.cardHtml);
	});
}

export function displayAllTasks(cardMap, sort, id) {
	const target = document.getElementById(id);
	if (sort == "All Tasks") {
		console.log(sort + " " + cardMap.entries());
		for (const [
			cardHtml,
			{ item, card: cardObject, project: cardProject },
		] of cardMap.entries()) {
			target.appendChild(cardHtml);
		}
	}
	if (sort == "Today") {
		{
			for (const [
				card,
				{ item, card: cardObject, project: cardProject },
			] of cardMap.entries()) {
				target.appendChild(card);
			}
		}
	}
	if (sort == "Next Week") {
		{
			for (const [
				card,
				{ item, card: cardObject, project: cardProject },
			] of cardMap.entries()) {
				target.appendChild(card);
			}
		}
	}
	if (sort == "important") {
		{
			for (const [
				card,
				{ item, card: cardObject, project: cardProject },
			] of cardMap.entries()) {
				target.appendChild(card);
			}
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