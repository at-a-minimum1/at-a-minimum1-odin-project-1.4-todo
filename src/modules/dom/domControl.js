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

export function clearForm(){
	let title = document.getElementById("title");
	let priority = document.getElementById("priorityDropDown");
	let date = document.getElementById("dueDate");

	title.value = "";
	date.value = "2021-06-01";
}
