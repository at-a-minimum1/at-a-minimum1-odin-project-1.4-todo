import { Item } from "./item";
import { format } from "date-fns";

export class Card extends Item {
	constructor(item) {
		super();
		this.item = item;
		this.itemTitle = item.title;
		this.itemDate = item.date;
		this.itemPriority = item.priority;
		this.itemDescription = item.description;
		this.itemId = item.id;
	}

	// get getItem() {
	// 	return this.item;
	// }
	// Creates a card element
	createCard() {
		// Create divs
		const card = document.createElement("div");
		const checkboxWrapper = document.createElement("div");
		const titleWrapper = document.createElement("div");
		const dateWrapper = document.createElement("div");
		const expandWrapper = document.createElement("div");
		const collapsibleForm = document.createElement("form");
		const collapsibleDescription = document.createElement("div");
		const collapsibleEditButtonWrap = document.createElement("div");
		// Create elements
		const cardTitle = document.createElement("h2");
		const cardDate = document.createElement("p");
		const checkbox = document.createElement("input");
		const expandButton = document.createElement("button");
		// Hidden on load elements
		const labelTitleHeader = document.createElement("label");
		const labelPriorityHeader = document.createElement("label");
		const labelDueDateHeader = document.createElement("label");
		const inputTitle = document.createElement("input");
		const inputDate = document.createElement("input");
		const selectPriority = document.createElement("select");
		const optionPriorityHigh = document.createElement("option");
		const optionPriorityMedium = document.createElement("option");
		const optionPriorityLow = document.createElement("option");
		const descriptionHeader = document.createElement("h3");
		const descriptionTextArea = document.createElement("textarea");
		const deleteButton = document.createElement("button");
		const saveButton = document.createElement("button");

		// Set attributes
		card.setAttribute("data-id", this.itemId);
		checkbox.setAttribute("type", "checkbox");
		labelTitleHeader.setAttribute("for", "inputTitle");
		labelPriorityHeader.setAttribute("for", "selectPriority");
		labelDueDateHeader.setAttribute("for", "inputDate");
		inputTitle.setAttribute("type", "text");
		inputDate.setAttribute("type", "date");
		optionPriorityHigh.setAttribute("value", "priorityHigh");
		optionPriorityMedium.setAttribute("value", "priorityMedium");
		optionPriorityLow.setAttribute("value", "priorityLow");

		// Set text content
		cardTitle.textContent = this.item.getTitle;
		cardDate.textContent = format(this.item.getDate, "MM/dd/yyyy");
		inputDate.value = this.item.getDate;
		descriptionTextArea.value = this.item.getDescription;
		expandButton.textContent = "Expand";
		// Set text content of hidden elements
		labelTitleHeader.textContent = "Title";
		inputTitle.value = cardTitle.textContent;
		labelDueDateHeader.textContent = "Date";
		labelPriorityHeader.textContent = "Priority";
		optionPriorityHigh.textContent = "High";
		optionPriorityMedium.textContent = "Normal";
		optionPriorityLow.textContent = "Low";
		descriptionHeader.textContent = "Description:";
		deleteButton.textContent = "Delete";
		saveButton.textContent = "Save";

		// Set classes
		card.classList.add("card");
		cardTitle.classList.add("card-title");
		cardDate.classList.add("card-date");
		checkboxWrapper.classList.add("checkbox-wrapper");
		titleWrapper.classList.add("title-wrapper");
		dateWrapper.classList.add("date-wrapper");
		expandWrapper.classList.add("expand-wrapper");
		expandButton.classList.add("expand-button");
		// Hidden elements set classes
		collapsibleForm.classList.add("hide", "collapsible-form");
		collapsibleDescription.classList.add("hide", "collapsible-description");
		collapsibleEditButtonWrap.classList.add("hide", "collapsible-button-wrap");
		saveButton.classList.add("save-button");
		deleteButton.classList.add("delete-button");
		descriptionTextArea.classList.add("description-textarea");
		inputTitle.classList.add("input-title");
		inputDate.classList.add("input-date");
		selectPriority.classList.add("input-priority");

		// Changes the color based on the priority selected
		if (this.item.getPriority == "priorityLow") {
			checkboxWrapper.classList.add("priority-low");
			expandWrapper.classList.add("priority-low");
			optionPriorityLow.setAttribute("selected", "");
		}
		if (this.item.getPriority == "priorityMedium") {
			checkboxWrapper.classList.add("priority-medium");
			expandWrapper.classList.add("priority-medium");
			optionPriorityMedium.setAttribute("selected", "");
		}
		if (this.item.getPriority == "priorityHigh") {
			checkboxWrapper.classList.add("priority-high");
			expandWrapper.classList.add("priority-high");
			optionPriorityHigh.setAttribute("selected", "");
		}

		// Append elements to wrappers
		checkboxWrapper.appendChild(checkbox);
		// Hidden elements
		titleWrapper.appendChild(cardTitle);
		dateWrapper.appendChild(cardDate);
		expandWrapper.appendChild(expandButton);
		collapsibleForm.appendChild(labelTitleHeader);
		collapsibleForm.appendChild(inputTitle);
		collapsibleForm.appendChild(labelPriorityHeader);
		collapsibleForm.appendChild(selectPriority);
		selectPriority.appendChild(optionPriorityHigh);
		selectPriority.appendChild(optionPriorityMedium);
		selectPriority.appendChild(optionPriorityLow);
		collapsibleForm.appendChild(labelDueDateHeader);
		collapsibleForm.appendChild(inputDate);
		collapsibleDescription.appendChild(descriptionHeader);
		collapsibleDescription.appendChild(descriptionTextArea);
		collapsibleEditButtonWrap.appendChild(deleteButton);
		collapsibleEditButtonWrap.appendChild(saveButton);

		// Append hidden containers
		titleWrapper.appendChild(collapsibleForm);
		dateWrapper.appendChild(collapsibleDescription);
		expandWrapper.appendChild(collapsibleEditButtonWrap);
		// Append elements to card
		card.appendChild(checkboxWrapper);
		card.appendChild(titleWrapper);
		card.appendChild(dateWrapper);
		card.appendChild(expandWrapper);

		return card;
	}

	// TODO Finish the below method that way you can update the values with the form elements in the expand.
	// BUG CardTitle isn't being referenced correctly. I doubt the others are too...
	renderValues(cardHtml) {
		const checkboxWrapper = cardHtml.querySelector(".checkbox-wrapper");
		const expandWrapper = cardHtml.querySelector(".expand-wrapper");

		// Renders the priority color
		checkboxWrapper.classList.forEach((className) => {
			if (className.startsWith("priority")) {
				checkboxWrapper.classList.remove(className);
				expandWrapper.classList.remove(className);
			}
		});
		const itemPriority = this.item.priority;
		const priorityClass =
			"priority-" +
			itemPriority.charAt(8).toLowerCase() +
			itemPriority.slice(9);

		checkboxWrapper.classList.add(priorityClass);
		expandWrapper.classList.add(priorityClass);
	}
}
// selectPriority.value = this.item.getPriority;
// cardDescription.textContent = this.item.getDescription;
// const cardDescription = document.createElement("p");
// sdoifj
// selectPriority.setAttribute("id", "priorityDropdown");
// cardDate.value = cardDate.textContent;
