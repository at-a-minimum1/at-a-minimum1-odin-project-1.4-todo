class Card extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		let checkBox = document.createElement("input");
		let title = document.createElement("h4");
		let date = document.createElement("h4");

		checkBox.setAttribute("type", "checkbox");
		title.textContent = "Sample Task";
		date.textContent = "07/02/2050";

		this.shadowRoot.appendChild(checkBox);
		this.shadowRoot.appendChild(title);
		this.shadowRoot.appendChild(date);
	}
}

customElements.define("custom-card", Card);
