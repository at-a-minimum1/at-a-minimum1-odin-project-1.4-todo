import { v4 as uuidv4 } from "uuid";

export class Item {
	constructor(...args) {
		this.title = args[0];
		this.date = args[1];
		this.description = args[2];
		this.priority = args[3];
		this.id = uuidv4();
	}
	set setTitle(title) {
		title = this.title;
	}
	get getTitle() {
		return this.title;
	}

	set setDate(date) {
		this.date = date;
	}
	get getDate() {
		return this.date;
	}

	set setDescription(description) {
		this.description = description;
	}
	get getDescription() {
		return this.description;
	}

	set setPriority(priority) {
		this.priority = priority;
	}
	get getPriority() {
		return this.priority;
	}

	get getId() {
		return this.id;
	}
}
