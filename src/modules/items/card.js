import { Item } from "./item";

export class Card extends Item {
	constructor(item) {
		super();
		this.item = item;
		this.itemTitle = item.title;
		this.itemDate = item.date;
		this.itemPriority = item.priority;
		this.itemDescription = item.description;
	}

	// Creates a card element
	createCard() {
		// Create divs
		const card = document.createElement("div");
		const checkboxWrapper = document.createElement("div");
		const titleWrapper = document.createElement("div");
		const dateWrapper = document.createElement("div");
		const expandWrapper = document.createElement("div");
		// TODO make a collapsible section of the card that hides the delete, edit, and save button.
		const collapsibleForm = document.createElement("div");
		const collapsibleDescription = document.createElement("div");
		const collapsibleEditButtonWrap = document.createElement("div");
		// Create elements
		const cardTitle = document.createElement("h2");
		const cardDate = document.createElement("p");
		const cardType = document.createElement("p");
		const cardDescription = document.createElement("p");

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

		const descriptionTextArea = document.createElement("textarea");
		const deleteButton = document.createElement("button");
		const saveButton = document.createElement("button");

		// Set attributes
		cardPriority.setAttribute("for", "priorityDropdown");
		cardSelectPriority.setAttribute("id", "priorityDropdown");
		checkbox.setAttribute("type", "checkbox");

		// Set text attribute
		cardTitle.textContent = this.item.getTitle;
		cardDate.textContent = this.item.getDate;
		cardDescription.textContent = this.item.getDescription;
		cardSelectPriority.value = this.item.getPriority;
		expandButton.textContent = "Expand";

		// Set classes
		card.classList.add("card");
		cardTitle.classList.add("card-title");
		cardDate.classList.add("card-date");
		cardType.classList.add("card-type");
		cardDescription.classList.add("card-description");
		cardPriority.classList.add("card-priority");
		checkboxWrapper.classList.add("checkbox-wrapper");
		titleWrapper.classList.add("title-wrapper");
		dateWrapper.classList.add("date-wrapper");
		expandWrapper.classList.add("expand-wrapper");
		expandButton.classList.add("expand-button");

		// Changes the color based on the priority selected
		if (this.item.getPriority == "priorityLow") {
			checkboxWrapper.classList.add("priority-low");
			expandWrapper.classList.add("priority-low");
		}
		if (this.item.getPriority == "priorityMedium") {
			checkboxWrapper.classList.add("priority-medium");
			expandWrapper.classList.add("priority-medium");
		}
		if (this.item.getPriority == "priorityHigh") {
			checkboxWrapper.classList.add("priority-high");
			expandWrapper.classList.add("priority-high");
		}

		// Append elements to wrappers
		checkboxWrapper.appendChild(checkbox);
		titleWrapper.appendChild(cardTitle);
		dateWrapper.appendChild(cardDate);
		expandWrapper.appendChild(expandButton);

		// Append elements to card
		card.appendChild(checkboxWrapper);
		card.appendChild(titleWrapper);
		card.appendChild(dateWrapper);
		card.appendChild(expandWrapper);

		return card;
	}
}
