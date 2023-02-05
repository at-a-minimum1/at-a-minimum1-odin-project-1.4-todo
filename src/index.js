import * as domControl from "./modules/dom/domControl";
import { Card } from "./modules/items/card";
import { Item } from "./modules/items/item";

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("addItem").addEventListener("click", () => {
		let title = document.getElementById("title").value;
		let date = document.getElementById("dueDate").value;
		// let item = new Item(title, date);
		let card = new Card(title, date);

		domControl.addCard("resultsPanel", card);
		console.log(title + " & " + date);

		domControl.clearForm();
		console.log(card.getTitle());
		console.log(item);
	});
});
