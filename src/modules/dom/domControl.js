import { Card } from "../items/card";
import { List } from "../items/list";

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
// TODO update this to take the argument of map as the parameter
// BUG Massive bug with the tasks being displayed no longer being connected to the items they reference.
//BUG Refactor the following to just display the array? Maybe I dunno
export function displayTasks(id, projectArray) {
	const target = document.getElementById(id);
	projectArray.forEach((task) => {
		target.appendChild(task);
	});
	// for (const [
	// 	project,
	// 	{ item: itemObject, card: cardObject, cardHtml: cardHtmlObject },
	// ] of cardMap.entries()) {
	// 	target.appendChild(cardHtmlObject);
	// }
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

// TODO: Replace all uses of allArrays with cardMap.
// TODO: Remove allArrays import statement.

// export function addCard(id, item, project, map) {
// 	const card = new Card(item);
// 	const createdCard = card.createCard();
// 	const target = document.getElementById(id);

// 	map.set(createdCard, { item, card, project });

// 	target.appendChild(createdCard);
// }

// export function displaySortedList(taskList, id) {
// 	clearDOM(id);
// 	const target = document.getElementById(id);
// 	for (const task of taskList) {
// 		// addCard("resultsPanel", task);
// 		const card = new Card(task);
// 		const createdCard = card.createCard();
// 		target.appendChild(createdCard);
// 	}
// }
