import * as domControl from "./modules/dom/domControl";
import { Card } from "./modules/items/card";

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("addItem").addEventListener("click", () => {
		const title = document.getElementById("title").value;
		const date = document.getElementById("dueDate").value;
		let card = new Card(title, date);

		domControl.addCard("resultsPanel", card);
		console.log(title + " & " + date);
		title.innerText = "";
	});
});
