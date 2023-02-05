import { Card } from "../items/card";
// import { item, item } from "../items/item";

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

// export function addItem() {
// 	const item = new item();
// }

export function clearForm() {
	let title = document.getElementById("title");
	let priority = document.getElementById("priorityDropDown");
	let date = document.getElementById("dueDate");
	title.value = "-No Title-";
	date.value = "2024-06-11";
}

export function strikeThrough(card) {
	this.card.classlist.toggle("strike_through");
}
