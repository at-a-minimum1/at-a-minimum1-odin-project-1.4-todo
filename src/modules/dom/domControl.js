import { Card } from "../items/card";

export function addCard(id, card) {
	if (card == null) {
		const card = new Card("Same Task", "07/02/2050");
		console.log("Card was null SAD!");
	} else {
		this.card = card;
	}
	const target = document.getElementById(id);
	target.appendChild(card);
}

export function clearForm() {
	let title = document.getElementById("title");
	let priority = document.getElementById("priorityDropDown");
	let date = document.getElementById("dueDate");
	// title.value = "";
	title.value = "-No Title-";
	date.value = "2024-16-01";
}

export function strikeThrough(card) {
	this.card.classlist.toggle("strike_through");
}
