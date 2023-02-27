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
