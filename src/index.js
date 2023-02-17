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
	const taskModalWrapper = document.getElementById("modalWrapperTask");
	const projectModalWrapper = document.getElementById("modalWrapperProject");

	const addProject = document.getElementById("addProject");
	const addTask = document.getElementById("addTask");
	const taskModal = document.getElementById("taskModal");

	// Pulls up the modal panel for adding projects
	addProject.addEventListener("click", () => {
		projectModalWrapper.classList.toggle("hide");
	});
	// Brings up the modal panel for adding tasks
	addTask.addEventListener("click", () => {
		// const taskModal = document.getElementById("taskModalWrapper");
		taskModalWrapper.classList.toggle("hide");
	});

	taskModalWrapper.addEventListener("click", (event) => {
		if (event.target === taskModalWrapper) {
			taskModalWrapper.classList.toggle("hide");
		}
	});
	projectModalWrapper.addEventListener("click", (event) => {
		if (event.target === projectModalWrapper) {
			projectModalWrapper.classList.toggle("hide");
		}
	});

	document.getElementById("closeModalTask").addEventListener("click", () => {
		taskModalWrapper.classList.toggle("hide");
	});
	document.getElementById("closeModalProject").addEventListener("click", () => {
		projectModalWrapper.classList.toggle("hide");
	});
});
