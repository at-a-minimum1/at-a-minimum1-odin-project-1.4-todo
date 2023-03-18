import * as domControl from "./modules/dom/domControl";
import { Card } from "./modules/items/card";
import { Item } from "./modules/items/item";
import { List } from "./modules/items/list";

const itemList = new List();
const cardList = new List();

// const sampleTasks = () => {
// 	for (let i = 0; i > 5; i++) {
// 		let sampleTitle = "Sample Task-" + i;
// 		const sampleItem = new Item(sampleTitle, "2069-69-05");
// 		const sampleCard = new Card(sampleItem);
// 	}
// };

document.addEventListener("DOMContentLoaded", () => {
	document.getElementById("addItem").addEventListener("click", () => {
		let title = document.getElementById("title").value;
		let date = document.getElementById("dueDate").value;

		const item = new Item(title, date);
		const card = new Card(item);

		domControl.addCard("resultsPanel", card);
		itemList.addToList(item);
		cardList.addToList(card);
	});

	const taskModalWrapper = document.getElementById("modalWrapperTask");
	const projectModalWrapper = document.getElementById("modalWrapperProject");
	const resultPanel = document.getElementById("resultsPanel");

	let shadowRoot;

	const observer = new MutationObserver((mutations) => {
		mutations.forEach((mutation) => {
			if (mutation.type == "childList" && mutation.addedNodes.length > 0) {
				shadowRoot = mutation.addedNodes[0].shadowRoot;
				shadowRoot.addEventListener("click", function (event) {
					console.log("Classes: " + event.target.classList);
					if (event.target.matches(".collapsible-btn")) {
						domControl.toggleCollapsibleCard(event);
					}
					if (event.target.matches(".delete")) {
						const btn = event.target;
						const card = btn.closest(".collapsible-card") || shadowRoot.host;
						card.remove();
					}
					if (event.target.matches(".edit")) {
						domControl.toggleCollapsibleCard(event);
					}
				});
			}
		});
	});

	observer.observe(resultPanel, {
		childList: true,
		subtree: true,
	});

	const addProject = document.getElementById("addProject");
	const addTask = document.getElementById("addTask");
	const taskModal = document.getElementById("taskModal");

	// Pulls up the modal panel for adding projects
	addProject.addEventListener("click", () => {
		projectModalWrapper.classList.toggle("hide");
	});
	// Brings up the modal panel for adding tasks
	addTask.addEventListener("click", () => {
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

	resultsPanel.addEventListener("click", function (event) {
		// console.log(event.target.classList + " Click happened");
		if (event.target.matches(".collapsible-btn")) {
			domControl.toggleCollapsibleCard(event);
			// toggleCollapsibleCard(event);
		}
		if (event.target.matches(".delete")) {
			const btn = event.target;
			const card = btn.closest(".collapsible-card");
			card.remove();
		}
		if (event.target.matches(".edit")) {
			domControl.toggleCollapsibleCard(event);
		}
	});
	// shadowRoot.addEventListener("click", function (event) {
	// 	console.log(event.target.classList + " Click happened");
	// 	if (event.target.matches(".collapsible-btn")) {
	// 		domControl.toggleCollapsibleCard(event);
	// 		// toggleCollapsibleCard(event);
	// 	}
	// 	if (event.target.matches(".delete")) {
	// 		const btn = event.target;
	// 		const card = btn.closest(".collapsible-card");
	// 		card.remove();
	// 	}
	// 	if (event.target.matches(".edit")) {
	// 		domControl.toggleCollapsibleCard(event);
	// 	}
	// });
});

// MUTATION OBSERVER CODE PROVIDED BY CHATGPT.
// ASK FOR CODEPEN DEMOSTRATION OF MUTATION OBSERVERS

// document.addEventListener("DOMContentLoaded", () => {
//   // ...

//   const resultPanel = document.getElementById("resultsPanel");

//   let shadowRoot;

//   // Set up a MutationObserver to watch for the addition of cards to the results panel
//   const observer = new MutationObserver((mutations) => {
//     mutations.forEach((mutation) => {
//       if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
//         if (!shadowRoot && resultPanel.children.length > 0) {
//           shadowRoot = resultPanel.children[0].shadowRoot;
//           shadowRoot.addEventListener("click", function (event) {
//             // Handle clicks on custom elements in the shadow root
//           });
//         }
//       }
//     });
//   });
//   observer.observe(resultPanel, { childList: true });

//   // ...
// });
