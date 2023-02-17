// @collappse
// import itemList from "./itemList.js";

import { Item } from "./item.js";
import { removeCard } from "../dom/domControl.js";

export class Card extends HTMLElement {
	constructor(...args) {
		super(...args);

		this.attachShadow({ mode: "open" });
		const dateWrapper = document.createElement("div");
		const title = document.createElement("h4");
		const date = document.createElement("h4");
		const deleteBtn = document.createElement("button");
		title.classList.add("card-title");
		date.classList.add("date");
		dateWrapper.classList.add("date-wrapper");
		deleteBtn.classList.add("delete-btn");
		// deleteBtn.addEventListener("click", removeCard());
		// document.addEventListener("DOMContentLoaded", () => {
		// deleteBtn.addEventListener("click", this.deleteCard());
		// });

		// TODO I need to update this to make sure it's receiving the values from the item it's referencing.I'm going to use getters from the item to instantiate the title, date, priority, etc
		title.textContent = args[0];
		date.textContent = args[1];
		deleteBtn.innerHTML = `&darr;`;

		this.shadowRoot.innerHTML = this.cardStyle();

		// Created Elements
		const input = document.createElement("input");
		const checkmark = document.createElement("span");
		const container = document.createElement("label");
		input.setAttribute("type", "checkbox");

		input.classList.add("inputs");
		checkmark.classList.add("checkmark");
		container.classList.add("container");

		container.appendChild(input);
		container.appendChild(checkmark);
		dateWrapper.appendChild(date);
		dateWrapper.appendChild(deleteBtn);

		// END OF CODEPEN
		const lineThrough = () => {
			title.classList.toggle("strike-through");
		};
		input.addEventListener("click", lineThrough);

		// Appending the elements
		this.shadowRoot.appendChild(container);
		this.shadowRoot.appendChild(title);
		this.shadowRoot.appendChild(dateWrapper);
	}

	// Modifiers
	deleteCard() {
		console.log("Delete button pressed " + this.title.textContent);
		// this.title.textContent = "DELETED";
		// this.setTitle("DELETED");
	}

	//
	// Getters and setters
	//
	getTitle() {
		return this.titleText;
	}
	setTitle(title) {
		this.title.textContent = title;
	}
	getDate() {
		return this.date;
	}
	setDate(date) {
		this.date = date;
	}
	cardStyle() {
		return `<style>
			
			custom-card {
				display: grid;
				grid-template-columns: 40px 1fr 0.5fr;
				background-color: white;
				width: 100%;
				height: 70px;
				justify-content: center;
				align-items: center;
				position: relative;
				margin-top: 15px;
				margin-bottom: 20px;
				box-shadow: 0 4px 2px 0 #5a6161;
			}

			.date-wrapper{
				display: flex;
				flex-direction: row;
				align-items; center;
				justify-content: center;
			}
		
			.delete-btn {
				height: fit-content;
			}

			.container {
				display: block;
				position: relative;
				padding-left: 35px;
				margin-bottom: 12px;
				cursor: pointer;
				font-size: 22px;
				-webkit-user-select: none;
				-moz-user-select: none;
				-ms-user-select: none;
				user-select: none;
				transform: translate(10px, -30px);
			}

			/* Hide the browser's default checkbox */
			.container input {
				position: absolute;
				opacity: 0;
				cursor: pointer;
				height: 0;
				width: 0;
			}

			/* Create a custom checkbox */
			.checkmark {
				position: absolute;
				top: 0;
				left: 0;
				height: 50px;
				width: 50px;
				border-radius: 50%;
				background-color: #eee;
			}

			/* On mouse-over, add a grey background color */
			.container:hover input ~ .checkmark {
				background-color: #ccc;
			}

			/* When the checkbox is checked, add a blue background */
			.container input:checked ~ .checkmark {
				background-color: #2196f3;
			}

			.card-title{
				transform: translate(30px);
			}
			.strike-through{
				text-decoration: line-through;
			}
			</style> `;
	}
}

customElements.define("custom-card", Card);
