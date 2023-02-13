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
		cardList.addToList(card);

		domControl.clearForm();

		console.log(item);
		console.log(cardList);
		console.log(itemList);
	});
	// document.getElementById("removeItem").addEventListener("click", () => {
	// 	let removeThis = cardList[1];
	// 	cardList.removeFromList(removeThis);
	// });
	const modalWrapper = document.getElementById("modalWrapper");
	const addProject = document.getElementById("addProject");
	const addTask = document.getElementById("addTask");
	const taskModal = document.getElementById("taskModal");

	addProject.addEventListener("click", () => {});
	addTask.addEventListener("click", () => {
		// const taskModal = document.getElementById("taskModalWrapper");
		modalWrapper.classList.toggle("hide");
	});

	modalWrapper.addEventListener("click", (event) => {
		if (event.target === modalWrapper) {
			modalWrapper.classList.toggle("hide");
		}
	});

	document.getElementById("closeModal").addEventListener("click", () => {
		modalWrapper.classList.toggle("hide");
	});
});
