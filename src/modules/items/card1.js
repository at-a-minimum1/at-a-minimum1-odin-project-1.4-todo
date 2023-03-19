// @collapsse

import { Item } from "./item.js";
import { removeCard } from "../dom/domControl.js";

export class Card extends HTMLElement {
	constructor(item) {
		super();
		this.attachShadow({ mode: "open" });

		const itemTitle = item.title;
		const itemDate = item.date;
		const itemPriority = "item.getPriority()";
		const itemDescription = "item.getDescription()";

		this.classList.add("collapsible-card");

		// Outside wrappers and classes in them
		const leftWrap = document.createElement("div");
		const centerWrap = document.createElement("div");
		const rightWrap = document.createElement("div");
		const formActionWrapper = document.createElement("div");
		leftWrap.classList.add("left-wrapper", "priority-high");
		centerWrap.classList.add("center-wrapper");
		rightWrap.classList.add("right-wrapper");
		formActionWrapper.classList.add("form-action-wrapper", "priority-high");

		// Elements in leftWrap and classes in them
		const inputWrap = document.createElement("div");
		inputWrap.classList.add("input-wrapper");
		const labelContainer = document.createElement("label");
		labelContainer.classList.add("container");
		const checkbox = document.createElement("input");
		const checkmark = document.createElement("span");
		checkbox.setAttribute("type", "checkbox");
		inputWrap.append(labelContainer, checkbox, checkmark);
		leftWrap.append(inputWrap);

		// Elements in centerWrap and classes in them
		const header = document.createElement("div");
		header.classList.add("collapsible-header");
		const titleWrap = document.createElement("div");
		titleWrap.classList.add("collapsible-title");
		const taskTitle = document.createElement("h3");
		// taskTitle.textContent = "Title";
		taskTitle.textContent = itemTitle;
		header.append(titleWrap);
		titleWrap.append(taskTitle);
		const content = document.createElement("div");
		content.classList.add("collapsible-content", "hide");
		const formWrap = document.createElement("div");
		formWrap.classList.add("form_wrapper");

		// Form elements go here
		const title = document.createElement("label");
		title.setAttribute("for", "title");
		title.textContent = "Title";
		const inputTitle = document.createElement("input");
		inputTitle.setAttribute("type", "text");
		inputTitle.value = item.title;
		// inputTitle.value = "Sample Task";

		const priority = document.createElement("label");
		priority.setAttribute("for", "priorityDropdown");
		priority.textContent = "Priority";
		const selectPriority = document.createElement("select");
		selectPriority.setAttribute("id", "priorityDropdown");
		selectPriority.textContent = "Priority";
		// Create the High priority option
		const priorityHigh = document.createElement("option");
		priorityHigh.setAttribute("value", "priorityHigh");
		priorityHigh.textContent = "High";
		// Create the Normal priority option (and set it as selected)
		const priorityNormal = document.createElement("option");
		priorityNormal.setAttribute("value", "priorityMedium");
		priorityNormal.setAttribute("selected", "");
		priorityNormal.textContent = "Normal";
		// Create the Low priority option
		const priorityLow = document.createElement("option");
		priorityLow.setAttribute("value", "priorityLow");
		priorityLow.textContent = "Low";
		selectPriority.append(priorityHigh, priorityNormal, priorityLow);
		formWrap.append(title, inputTitle, priority, selectPriority);

		const dueDate = document.createElement("label");
		dueDate.setAttribute("for", "dueDate");
		dueDate.textContent = "Due Date";
		const inputDueDate = document.createElement("input");
		inputDueDate.setAttribute("type", "date");
		inputDueDate.setAttribute("id", "dueDate");
		inputDueDate.setAttribute("value", "2050-07-02");

		formWrap.append(dueDate, inputDueDate);
		content.append(formWrap);
		centerWrap.append(header, content);
		// Create new div element with class "date"
		const dateDiv = document.createElement("div");
		dateDiv.classList.add("date");

		// Create new h3 element with text "Date"
		const dateHeader = document.createElement("h3");
		// dateHeader.textContent = "Date";
		dateHeader.textContent = item.date;

		// Append the dateHeader to the dateDiv
		dateDiv.appendChild(dateHeader);

		// Create new h4 element with class "description-header hide" and text "Description:"
		const descriptionHeader = document.createElement("h4");
		descriptionHeader.classList.add("description-header", "hide");
		descriptionHeader.textContent = "Description:";

		// Create new textarea element with class "description hide"
		const descriptionTextarea = document.createElement("textarea");
		descriptionTextarea.classList.add("description", "hide");

		// Append the descriptionHeader and descriptionTextarea to the rightWrapper
		rightWrap.append(dateDiv, descriptionHeader, descriptionTextarea);

		// Elements in formActionWrapper and classes in them
		// Create expand button
		const expandButton = document.createElement("button");
		expandButton.classList.add("collapsible-btn");
		expandButton.textContent = "Expand";

		// Create save-delete-wrapper element with class "hide"
		const saveDeleteWrapper = document.createElement("div");
		saveDeleteWrapper.classList.add("edit-delete-wrapper", "hide");

		// Create save button
		const saveButton = document.createElement("button");
		saveButton.classList.add("edit");
		saveButton.textContent = "Save";

		// Create delete button
		const deleteButton = document.createElement("button");
		deleteButton.classList.add("delete");
		deleteButton.textContent = "Delete";

		// Append buttons to save-delete-wrapper element
		saveDeleteWrapper.append(saveButton, deleteButton);

		// Append elements to form-action-wrapper element
		formActionWrapper.append(expandButton, saveDeleteWrapper);

		// Apply styles
		this.shadowRoot.innerHTML = this.cardStyle();

		// Append wrappers to card
		this.shadowRoot.append(leftWrap, centerWrap, rightWrap, formActionWrapper);
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
		*{
			margin: 0;
			padding: 0;
		}

			.collapsible-container {
			margin: 20px;
			}

			h3{
			margin: 0;
			}

			.priority-high{
			background-color: red; 
			height: 100%;
			width: 100%;
			}
			.priority-medium {
			background-color: #FFF500;
			height: 100%;
			width: 100%;
			}

			.priority-low {
			background-color: #10ca00;
			height: 100%;
			width: 100%;
			}

			.collapsible-card{
			display: grid;
			grid-template-columns: 100px 1fr 0.5fr 100px;
			background-color: #fff;
			border-radius: 4px;
			box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
			margin-bottom: 20px;
			padding-bottom: 20px;
			}

			.collapsible-header {
			
			align-items: center;
			justify-content: space-between;
			padding: 0 10px;
			
			/*   cursor: pointer; */
			}

			.collapsible-btn {
			border: none;
			background-color: transparent;
			font-size: 16px;
			cursor: pointer;
			display: flex;
			align-content: flex-end;
			justify-content: flex-end;
			width: 100%;
			padding: 10px;
			}

			.edit{
			border: none;
			background-color: transparent;
			font-size: 16px;
			cursor: pointer;
			display: flex;
			align-content: flex-end;
			justify-content: flex-end;
			width: 100%;
			padding: 10px;
			}

			.delete{
			border: none;
			background-color: transparent;
			font-size: 16px;
			cursor: pointer;
			display: flex;
			align-content: flex-end;
			justify-content: flex-end;
			width: 100%;
			padding: 10px;
			}


			.right-wrapper {
				height: 100%;
				display: flex;
				flex-direction: column;
				
				align-items: flex-start;
				justify-content: center;
				background-color: white;
			}

			

			.collapsible-content {
			transition: height 0.5s ease;
			transition: height;
			overflow: hidden;
			margin-left: 10px;
			margin-right: 10px;
			}

			.collapsible-card.expanded .collapsible-content {
			height: auto;
			}
			/* Use this for the arrow */
			/* .collapsible-card.expanded .collapsible-btn {
			transform: rotate(180deg);
			} */

			.collapsible-card + .collapsible-card {
			margin-top: 20px;
			}

			.hide{
			display: none;
			}

			/* My stuff from here */

			.form_wrapper{
			display: flex;
			flex-direction: column;
			margin-bottom: 40px;
			}

			.form-action-wrapper{
			display: flex;
			flex-direction: column;
			align-content: space-between; 
			justify-content: space-between;
			}

			.description-wrapper {
			display: flex;
			flex-direction: column;
			height: 80%;
			}

			.center-wrapper{
				display: flex;
			flex-direction: column;
			align-content: flex-start;
			justify-content: flex-start
			height: 100%;
			background-color: white;
			}

			.description {
			width: 98%;
			height: 70%;
			box-sizing: border-box;
			padding: 10px;
			border: 1px solid #ccc;
			border-radius: 4px;
			font-size: 16px;
			line-height: 1.5;
			resize: none;
			}


			/* Custom element checkmark input */
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
			height: 30px;
			width: 30px;
			background-color: #eee;
			border-radius: 50px;
			transform: translateX(20px);
			/*   transform: translateY(-3px); */
			}

			/* On mouse-over, add a grey background color */
			.container:hover input ~ .checkmark {
			background-color: #ccc;
			}

			/* When the checkbox is checked, add a blue background */
			.container input:checked ~ .checkmark {
			background-color: #2196F3;
			}

			/* Create the checkmark/indicator (hidden when not checked) */
			.checkmark:after {
			content: "";
			position: absolute;
			display: none;
			}

			/* Show the checkmark when checked */
			.container input:checked ~ .checkmark:after {
			display: block;
			}
			</style> `;
	}
}

customElements.define("custom-card", Card);
