export class Item {
	constructor(...args) {
		this.title = args[0];
		this.date = args[1];
		this.type = args[2];
		this.description = args[3];
		this.priority = args[4];
	}
	set setTitle(title) {
		title = this.title;
	}
	get getTitle() {
		return this.title;
	}

	set setTitle(date) {
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


}
