// @collappse
// import itemList from "./itemList.js";

import { Item } from "./item.js";
import { removeCard } from "../dom/domControl.js";

export class Card extends HTMLElement {
	constructor(...args) {
		super(...args);

		this.attachShadow({ mode: "open" });
		const expandWrapper = document.createElement("div");
		const dateWrapper = document.createElement("div");
		const title = document.createElement("h4");
		const date = document.createElement("h4");
		const expandButton = document.createElement("button");
		const cardDetailsWrapper = document.createElement("div");
		const cardDetails = document.createElement("div");
		const input = document.createElement("input");
		const checkmark = document.createElement("span");
		const container = document.createElement("label");

		input.setAttribute("type", "checkbox");

		// Pull this out and make it a method
		title.classList.add("card-title");
		date.classList.add("date");
		dateWrapper.classList.add("date-wrapper");
		expandButton.classList.add("expand-btn");
		expandWrapper.classList.add("expand-wrapper");
		// cardDetailsWrapper.classList.add("card_details_wrapper", "hideDetails");
		cardDetailsWrapper.classList.add("card_details_wrapper");
		cardDetails.classList.add("card_details");

		// TODO I need to update this to make sure it's receiving the values from the item it's referencing.I'm going to use getters from the item to instantiate the title, date, priority, etc
		title.textContent = args[0];
		date.textContent = args[1];
		expandButton.innerHTML = `&darr;`;
		cardDetails.textContent = "Card Expanded";
		cardDetailsWrapper.textContent = "Wrapper here";
		this.shadowRoot.innerHTML = this.cardStyle();

		input.classList.add("inputs");
		checkmark.classList.add("checkmark");
		container.classList.add("container");

		container.appendChild(input);
		container.appendChild(checkmark);
		dateWrapper.appendChild(date);
		expandWrapper.appendChild(expandButton);

		cardDetailsWrapper.appendChild(cardDetails);

		const lineThrough = () => {
			title.classList.toggle("strike-through");
		};
		input.addEventListener("click", lineThrough);
		const expand = () => {
			// Expand the card
			this.classList.toggle("expanded");
			// cardDetailsWrapper.classList.toggle("hideDetails");
			// cardDetailsWrapper.classList.toggle("show");
			// this.style.height = "200px";
			console.log("Expand button pressed");
		};
		expandButton.addEventListener("click", expand);

		// container.appendChild(cardDetailsWrapper);
		// Appending the elements
		container.appendChild(cardDetailsWrapper);
		this.shadowRoot.appendChild(container);
		this.shadowRoot.appendChild(title);
		this.shadowRoot.appendChild(dateWrapper);
		this.shadowRoot.appendChild(expandWrapper);
		this.shadowRoot.appendChild(cardDetailsWrapper);
	}

	// Modifiers

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
			.expand-btn {
				height: fit-content;
			}
			.expanded{
				height: 200px;
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

			.show {
				display: block;
				height: 200px;
			}

			.hideDetails {
				/* display: none !important; */
				display: none;
				transition: height 0.5s ease;
			}

			.card_details_wrapper {
				display: none;
				height: 0;
				grid-column-start: span 4;
				background-color: white;
				width: 100%;
				height: 200px;
				justify-content: center;
				align-items: center;
				position: relative;
				transform: translateY(-22px);
				box-shadow: 0 1px 1px 0 #5a6161;

				/* margin-top: 15px; */
				/* margin-bottom: 20px; */
				/* box-shadow: 0 4px 2px 0 #5a6161; */
			}
			.card_details_wrapper {
  				transition: height 0.5s ease;
			}
			.card_details {
				background-color: white;
				width: 100%;
				justify-content: center;
				align-items: center;
				position: relative;
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

// display: grid;
// 	grid-template-columns: 70px 1fr 0.5fr 40px;
// 	background-color: white;
// 	width: 100%;
// 	height: 70px;
// 	justify-content: center;
// 	align-items: center;
// 	position: relative;
// 	margin-top: 15px;
// 	margin-bottom: 20px;
// 	box-shadow: 0 4px 2px 0 #5a6161;
