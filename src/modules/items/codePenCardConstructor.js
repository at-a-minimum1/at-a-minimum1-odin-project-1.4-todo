import { Item } from "./item.js";
import { removeCard } from "../dom/domControl.js";

export class Card extends HTMLElement {
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
		taskTitle.textContent = "Title";
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
		inputTitle.value = "Sample Task";
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
		// dueDate.textContent = item.get
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
		dateHeader.textContent = "Date";

		// Append the dateHeader to the dateDiv
		dateDiv.appendChild(dateHeader);

		// Create new h3 element with class "description-header hide" and text "Description:"
		const descriptionHeader = document.createElement("h3");
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

		// Append wrappers to card
		card.append(leftWrap, centerWrap, rightWrap, formActionWrapper);
	}
}
