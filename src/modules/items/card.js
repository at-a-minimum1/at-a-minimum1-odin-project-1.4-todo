import { Item } from "./item";

export class Card extends Item {
	constructor(item) {
		super();
		this.item = item;
		this.itemTitle = item.title;
		this.itemDate = item.date;
		this.itemPriority = item.priority;
		this.itemDescription = item.description;

		// this.itemTitle = item.getTitle();
		// this.itemDate = item.getDate();
		// this.itemPriority = item.getPriority();
		// this.itemDescription = item.getDescription();
	}

	// Creates a card element
	createCard() {
		// Create divs
		const card = document.createElement("div");
		const checkboxWrapper = document.createElement("div");
		const titleWrapper = document.createElement("div");
		const dateWrapper = document.createElement("div");
		const expandWrapper = document.createElement("div");
		// Create elements
		const cardTitle = document.createElement("h2");
		const cardDate = document.createElement("p");
		const cardType = document.createElement("p");
		const cardDescription = document.createElement("p");
		const cardPriority = document.createElement("label");
		const cardSelectPriority = document.createElement("select");
		const expandButton = document.createElement("button");
		const checkbox = document.createElement("input");

		// Set attributes
		cardPriority.setAttribute("for", "priorityDropdown");
		cardSelectPriority.setAttribute("id", "priorityDropdown");
		checkbox.setAttribute("type", "checkbox");

		// Create options and add them to the select element
		const lowOption = document.createElement("option");
		lowOption.value = "low";
		lowOption.text = "Low";
		const mediumOption = document.createElement("option");
		mediumOption.value = "medium";
		mediumOption.text = "Medium";
		const highOption = document.createElement("option");
		highOption.value = "high";
		highOption.text = "High";
		cardSelectPriority.add(lowOption);
		cardSelectPriority.add(mediumOption);
		cardSelectPriority.add(highOption);

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

		// Priority experiment
		// TODO change the priority class type based on high, medium, low
		if (this.item.getPriority == "priorityLow") {
			// console.log("Priority: " + Card.itemPriority.value);
			// console.log(this.item);
			// console.log("Priority: " + this.item.getPriority);
			checkboxWrapper.classList.add("priority-low");
			expandWrapper.classList.add("priority-low");
		}
		if (this.item.getPriority == "priorityMedium") {
			// console.log("Priority: " + Card.itemPriority.value);
			// console.log(this.item);
			// console.log("Priority: " + this.item.getPriority);
			checkboxWrapper.classList.add("priority-medium");
			expandWrapper.classList.add("priority-medium");
		}
		if (this.item.getPriority == "priorityHigh") {
			// console.log("Priority: " + Card.itemPriority.value);
			// console.log(this.item);
			// console.log("Priority: " + this.item.getPriority);
			checkboxWrapper.classList.add("priority-high");
			expandWrapper.classList.add("priority-high");
		}
		// checkboxWrapper.classList.add("priority-high");
		// expandWrapper.classList.add("priority-high");

		// Append elements to cardPriority
		cardPriority.appendChild(cardSelectPriority);

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
