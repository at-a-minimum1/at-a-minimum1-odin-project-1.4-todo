import { Card } from "../items/card";

export function addCard(id, card) {
	if (card == null) {
		const card = new Card("Error", "07/02/2050");
		console.log("Card was null SAD!");
	} else {
		this.card = card;
	}
	const target = document.getElementById(id);
	target.appendChild(card);
}

export function removeCard() {
	// card.remove();
	console.log("remove card invoked");
}

export function clearForm() {
	let title = document.getElementById("title");
	let priority = document.getElementById("priorityDropDown");
	let date = document.getElementById("dueDate");
	title.value = "-No Title-";
	date.value = "2024-06-11";
}

export function strikeThrough(card) {
	this.card.classList.toggle("strike_through");
}

export function expand(card) {
	// Access the child of the card element and unhide it.
	let cardDetails = card.querySelector(".cardDetails");
	cardDetails.classList.toggle("show");
}

export function updateDOM(itemArray) {
	for (item in itemArray) {
		// let cards = new Card(new Card(item.getTitle, item.getDate));
		addCard("resultPanel", new Card(item.getTitle, item.getDate));
	}
}

// clearDOM(id){
// 	let target = document.getElementById(id);
// 	target.innerHTML = "";
// }

// export function updateDOM(itemList) {
// 	clearDOM();
// 	for (let item of itemList) {
// 		let title = item.getTitle();
// 		let date = item.getDate();
// 		card = new Card(title, date);
// 		addCard(card);
// 	}
// }

export function toggleCollapsibleCard(event) {
	const btn = event.target;
	let card = btn.closest(".collapsible-card");
	const shadowRoot = btn.getRootNode();

	// Reassign card if it's in the shadow DOM
	if (card == null) {
		card = shadowRoot.host;

		if (card == null) {
			console.log("Card not being accessed in toggleCollapsibleCard.");
			return;
		}
		console.log("Card value: " + card.classList);
	}
	const header =
		card.querySelector(".collapsible-title") ||
		shadowRoot.querySelector(".collapsible-title");
	// header.classList.toggle("hide");

	console.log("Header value: " + header.classList);

	const date = card.querySelector(".date") || shadowRoot.querySelector(".date");

	const input =
		card.querySelector(".input-wrapper") ||
		shadowRoot.querySelector(".input-wrapper");

	const contentCollapsible =
		card.querySelector(".collapsible-content") ||
		shadowRoot.querySelector(".collapsible-content");

	const editDelete =
		card.querySelector(".edit-delete-wrapper") ||
		shadowRoot.querySelector(".edit-delete-wrapper");

	const descriptionHeader =
		card.querySelector(".description-header") ||
		shadowRoot.querySelector(".description-header");

	const description =
		card.querySelector(".description") ||
		shadowRoot.querySelector(".description");

	header.classList.toggle("hide");
	date.classList.toggle("hide");
	input.classList.toggle("hide");
	contentCollapsible.classList.toggle("hide");
	editDelete.classList.toggle("hide");
	descriptionHeader.classList.toggle("hide");
	description.classList.toggle("hide");

	card.classList.toggle("expanded");

	const expand =
		card.querySelector(".collapsible-btn") ||
		shadowRoot.querySelector(".collapsible-btn");
	const content =
		card.querySelector(".collapsible-content") ||
		shadowRoot.querySelector(".collapsible-content");
	if (card.classList.contains("expanded")) {
		expand.textContent = "Collapse";
		// content.style.height = "100000px";
		content.style.height = content.scrollHeight + "px";
		content.style.backgroundColor = "white";
		// content.style.paddingBottom = "200px";
	} else {
		expand.textContent = "Expand";
		content.style.height = "0";
	}
}
