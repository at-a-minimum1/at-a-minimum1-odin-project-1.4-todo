class Card {
	constructor(item) {
		this.item = item;
	}

	// Creates a card element
	createCard() {
		// Create elements
		const card = document.createElement("div");
		const cardTitle = document.createElement("h2");
		const cardDate = document.createElement("p");
		const cardType = document.createElement("p");
		const cardDescription = document.createElement("p");
		const cardPriority = document.createElement("p");

		// Set text content
		cardTitle.textContent = this.item.getTitle();
		cardDate.textContent = this.item.getDate();
		cardType.textContent = this.item.type;
		cardDescription.textContent = this.item.getDescription();
		cardPriority.textContent = this.item.getPriority();

		// Set classes
		card.classList.add("card");
		cardTitle.classList.add("card-title");
		cardDate.classList.add("card-date");
		cardType.classList.add("card-type");
		cardDescription.classList.add("card-description");
		cardPriority.classList.add("card-priority");

		// Append elements to card
		card.appendChild(cardTitle);
		card.appendChild(cardDate);
		card.appendChild(cardType);
		card.appendChild(cardDescription);
		card.appendChild(cardPriority);

		return card;
	}
}
