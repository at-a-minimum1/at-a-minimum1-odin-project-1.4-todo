import { Item } from "./item.js";
import { removeCard } from "../dom/domControl.js";

export class Card extends HTMLElement {
	// Method to reduce the amount of lines in the code below
	createClassElement(elementType, ...classes) {
		const element = document.createElement(elementType);
		element.classList.add(...classes);
		return element;
	}
	constructor(item) {
		super();

		this.item = item;
		const itemTitle = item.getTitle();
		const itemDate = item.getDate();
		const itemPriority = item.getPriority();
		const itemDescription = item.getDescription();

		this.attachShadow({ mode: "open" });
		this.classList.add("collapsible-card");

		// Outside wrappers and classes in them
		const leftWrap = createClassElement("div", "left-wrapper", "priority-high");
		const centerWrap = createClassElement("div", "center-wrapper");
		const rightWrap = createClassElement("div", "right-wrapper");
		const formActionWrapper = createClassElement(
			"div",
			"form-action-wrapper",
			"priority-high"
		);
		// *************************************************
		// Elements in leftWrap and classes in them
		const inputWrap = createClassElement("div", "input_wrapper");
		const labelContainer = createClassElement("label", "container");
		const checkbox = createClassElement("input");
		const checkmark = createClassElement("span");
		checkbox.setAttribute("type", "checkbox");
		inputWrap.append(labelContainer, checkbox, checkmark);
		leftWrap.append(inputWrap);

		// Elements in centerWrap and classes in them
		const header = createClassElement("div", "collapsible-header");
		const titleWrap = createClassElement("div", "collapsible-title");
		const taskTitle = createClassElement("h3");
		taskTitle.textContent = itemTitle;
		header.append(titleWrap);
		titleWrap.append(taskTitle);
		const content = createClassElement("div", "collapsible-content", "hide");
		const formWrap = createClassElement("div", "form-wrapper");

		// Form elements go here
		const title = createClassElement("label");
		title.setAttribute("for", "title");
		title.textContent = itemTitle;
		const inputTitle = createClassElement("input");
		inputTitle.setAttribute("type", "text");
		inputTitle.value = "Sample Task";
		const priority = createClassElement("label");
		priority.setAttribute("for", "priorityDropdown");
		priority.textContent = itemPriority;
		const selectPriority = createClassElement("select");
		selectPriority.setAttribute("id", "priorityDropdown");
		selectPriority.textContent = itemPriority;
		// Create the High priority option
		const priorityHigh = createClassElement("option");
		priorityHigh.setAttribute("value", "priorityHigh");
		priorityHigh.textContent = "High";
		// Create the Normal priority option (and set it as selected)
		const priorityNormal = createClassElement("option");
		priorityNormal.setAttribute("value", "priorityMedium");
		priorityNormal.setAttribute("selected", "");
		priorityNormal.textContent = "Normal";
		// Create the Low priority option
		const priorityLow = createClassElement("option");
		priorityLow.setAttribute("value", "priorityLow");
		priorityLow.textContent = "Low";
		selectPriority.append(priorityHigh, priorityNormal, priorityLow);
		formWrap.append(title, inputTitle, priority, selectPriority);

		const dueDate = createClassElement("label");
		dueDate.setAttribute("for", "dueDate");
		dueDate.textContent = itemDate;
		const inputDueDate = createClassElement("input");
		inputDueDate.setAttribute("type", "date");
		inputDueDate.setAttribute("id", "dueDate");
		inputDueDate.setAttribute("value", "2050-07-02");

		formWrap.append(dueDate, inputDueDate);
		content.append(formWrap);
		centerWrap.append(header, content);
		// Create new div element with class "date"
		const dateDiv = createClassElement("div", "date");

		// Create new h3 element with text "Date"
		const dateHeader = createClassElement("h3");
		dateHeader.textContent = "Date";

		// Append the dateHeader to the dateDiv
		dateDiv.appendChild(dateHeader);

		// Create new h3 element with class "description-header hide" and text "Description:"
		const descriptionHeader = createClassElement(
			"h3",
			"description-header",
			"hide"
		);
		descriptionHeader.textContent = "Description:";

		// Create new textarea element with class "description hide"
		const descriptionTextarea = createClassElement(
			"textarea",
			"description",
			"hide"
		);

		// Append the descriptionHeader and descriptionTextarea to the rightWrapper
		rightWrap.append(dateDiv, descriptionHeader, descriptionTextarea);

		// Elements in formActionWrapper and classes in them

		// Create expand button
		const expandButton = createClassElement("button", "collapsible-btn");
		expandButton.textContent = "Expand";

		// Create save-delete-wrapper element with class "hide"
		const saveDeleteWrapper = createClassElement(
			"div",
			"edit-delete-wrapper",
			"hide"
		);

		// Create save button
		const saveButton = createClassElement("button", "edit");
		saveButton.textContent = "Save";

		// Create delete button
		const deleteButton = createClassElement("button", "delete");
		deleteButton.textContent = "Delete";

		// Append buttons to save-delete-wrapper element
		saveDeleteWrapper.append(saveButton, deleteButton);

		// Append elements to form-action-wrapper element
		formActionWrapper.append(expandButton, saveDeleteWrapper);

		// Append wrappers to card
		card.append(leftWrap, centerWrap, rightWrap, formActionWrapper);
	}
}
