import * as domControl from "./modules/dom/domControl";
import { Card } from "./modules/items/card";
import { Item } from "./modules/items/item";
import { List } from "./modules/items/list";

const itemList = new List();
const cardList = new List();

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("addItem").addEventListener("click", () => {
		let title = document.getElementById("title").value;
		let date = document.getElementById("dueDate").value;
		const item = new Item(title, date);
		const card = new Card(item.getTitle, item.getDate);
		console.log("Title:" + item.getTitle);

		domControl.addCard("resultsPanel", card);
		itemList.addToList(item);

		domControl.clearForm();

		console.log(item);
		console.log(itemList);
	});
});

// let items = [{title: "Item 1", value: "Value 1"},
//              {title: "Item 2", value: "Value 2"},
//              {title: "Item 3", value: "Value 3"}];

// // sort the items array by title
// items.sort((a, b) => (a.title > b.title) ? 1 : -1);

// // update the DOM elements to reflect the new order
// let cardContainer = document.querySelector("#card-container");
// cardContainer.innerHTML = "";
// for (let item of items) {
//   let card = document.createElement("custom-card");
//   card.setAttribute("title", item.title);
//   card.setAttribute("value", item.value);
//   cardContainer.appendChild(card);
// }
