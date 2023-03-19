import { Item } from "./item";

export class Card extends Item {
	constructor(item) {
		super();
		this.item = item;
		const itemTitle = item.getTitle;
		const itemDate = item.getDate;
		const itemPriority = item.getPriority;
		const itemDescription = item.getDescription;
	}

	// Creates a card element
	createCard() {
		// const cardObject = new Card;

		// Create elements
		const card = document.createElement("div");
		const cardTitle = document.createElement("h2");
		const cardDate = document.createElement("p");
		const cardType = document.createElement("p");
		const cardDescription = document.createElement("p");
		const cardPriority = document.createElement("label");
		const cardSelectPriority = document.createElement("select");

		// Set attributes
		cardPriority.setAttribute("for", "priorityDropdown");
		cardSelectPriority.setAttribute("id", "priorityDropdown");

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

		// console.log("console logged");
		// console.log("Item object: " + this.item.getTitle);
		// Set text content
		// cardTitle.textContent = "this.item.getTitle()";
		// cardDate.textContent = "this.item.getDate()";
		// cardType.textContent = "this.item.type";
		// cardDescription.textContent = "this.item.getDescription()";
		// cardSelectPriority.textContent = "this.item.getPriority()";
		// cardTitle.textContent = this.item.getTitle();

		// cardTitle.textContent = item.getTitle ? item.getTitle() : "";
		// cardDate.textContent = this.item.getDate();
		// cardType.textContent = this.item.type;
		// cardDescription.textContent = this.item.getDescription();
		// cardSelectPriority.textContent = this.item.getPriority();

		cardTitle.textContent = this.item.getTitle;
		cardDate.textContent = this.item.getDate;
		// cardType.textContent = Item.getPriority;
		cardDescription.textContent = this.item.getDescription;
		cardSelectPriority.textContent = this.item.getPriority;

		// Set classes
		card.classList.add("card");
		cardTitle.classList.add("card-title");
		cardDate.classList.add("card-date");
		cardType.classList.add("card-type");
		cardDescription.classList.add("card-description");
		cardPriority.classList.add("card-priority");

		// Append elements to cardPriority
		cardPriority.appendChild(cardSelectPriority);

		// Append elements to card
		card.appendChild(cardTitle);
		card.appendChild(cardDate);
		// card.appendChild(cardType);
		// card.appendChild(cardDescription);
		card.appendChild(cardPriority);

		// console.log(card + "-");

		return card;
	}
}
