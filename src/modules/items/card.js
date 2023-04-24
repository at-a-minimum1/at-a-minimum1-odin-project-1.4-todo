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
		const collapsibleForm = document.createElement("div");
		const collapsibleDescription = document.createElement("div");
		const collapsibleEditButtonWrap = document.createElement("div");
		// Create elements
		const cardTitle = document.createElement("h2");
		const cardDate = document.createElement("p");
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
		const descriptionHeader = document.createElement("h3");
		const descriptionTextArea = document.createElement("textarea");
		const deleteButton = document.createElement("button");
		const saveButton = document.createElement("button");

		// Set attributes
		checkbox.setAttribute("type", "checkbox");

		labelTitleHeader.setAttribute("for", "inputTitle");
		labelPriorityHeader.setAttribute("for", "selectPriority");
		labelDueDateHeader.setAttribute("for", "inputDate");
		inputTitle.setAttribute("type", "text");
		inputDate.setAttribute("type", "date");
		// sdoifj
		inputDate.setAttribute("value", cardDate.textContent);
		selectPriority.setAttribute("id", "priorityDropdown");
		optionPriorityHigh.setAttribute("value", "priorityHigh");
		optionPriorityMedium.setAttribute("value", "priorityMedium");
		optionPriorityLow.setAttribute("value", "priorityLow");

		// Set text content
		cardTitle.textContent = this.item.getTitle;
		cardDate.textContent = this.item.getDate;
		cardDescription.textContent = this.item.getDescription;
		// selectPriority.value = this.item.getPriority;
		expandButton.textContent = "Expand";
		// Set text content of hidden elements
		labelTitleHeader.textContent = "Title";
		inputTitle.value = cardTitle.textContent;
		labelDueDateHeader.textContent = "Date";
		// cardDate.value = cardDate.textContent;
		labelPriorityHeader.textContent = "Priority";
		optionPriorityHigh.textContent = "High";
		optionPriorityMedium.textContent = "Medium";
		optionPriorityLow.textContent = "Low";
		descriptionHeader.textContent = "Description:";
		descriptionTextArea.value = cardDescription.textContent;
		deleteButton.textContent = "Delete";
		saveButton.textContent = "Save";

		// Set classes
		card.classList.add("card");
		cardTitle.classList.add("card-title");
		cardDate.classList.add("card-date");
		cardDescription.classList.add("card-description");
		// cardPriority.classList.add("card-priority");
		checkboxWrapper.classList.add("checkbox-wrapper");
		titleWrapper.classList.add("title-wrapper");
		dateWrapper.classList.add("date-wrapper");
		expandWrapper.classList.add("expand-wrapper");
		expandButton.classList.add("expand-button");
		// Hidden elements set classes
		collapsibleForm.classList.add("hide", "collapsible-form");
		collapsibleDescription.classList.add("hide", "collapsible-description");
		collapsibleEditButtonWrap.classList.add("hide", "collapsible-button-wrap");

		// Changes the color based on the priority selected
		if (this.item.getPriority == "priorityLow") {
			checkboxWrapper.classList.add("priority-low");
			expandWrapper.classList.add("priority-low");
			optionPriorityLow.setAttribute("selected","");
		}
		if (this.item.getPriority == "priorityMedium") {
			checkboxWrapper.classList.add("priority-medium");
			expandWrapper.classList.add("priority-medium");
			optionPriorityMedium.setAttribute("selected");
		}
		if (this.item.getPriority == "priorityHigh") {
			checkboxWrapper.classList.add("priority-high");
			expandWrapper.classList.add("priority-high");
			optionPriorityHigh.setAttribute("selected","");
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
}
